import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send notification email to tony@cosmicjs.com
    const notificationEmailData = await resend.emails.send({
      from: 'tony@cosmicjs.com',
      to: 'tony@cosmicjs.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0; color: #1e293b;">Contact Details</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0; color: #1e293b;">Message</h3>
            <p style="margin: 0; white-space: pre-wrap; color: #475569;">${message}</p>
          </div>
          
          <div style="text-align: center; padding: 20px; background-color: #f1f5f9; border-radius: 8px;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              This email was sent from the Surf Shop contact form
            </p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to the user
    const confirmationEmailData = await resend.emails.send({
      from: 'tony@cosmicjs.com',
      to: email,
      subject: 'Thanks for contacting Surf Shop! 🏄‍♂️',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin-bottom: 10px;">🏄‍♂️ Surf Shop</h1>
            <h2 style="color: #1e293b; margin: 0;">Thanks for reaching out!</h2>
          </div>
          
          <div style="background-color: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
            <p style="margin: 0 0 15px 0; color: #475569; font-size: 16px;">
              Hi ${name},
            </p>
            <p style="margin: 0 0 15px 0; color: #475569; line-height: 1.6;">
              We've received your message about "<strong>${subject}</strong>" and we're stoked to help! 
              Our team of surf enthusiasts will review your message and get back to you within 24 hours.
            </p>
            <p style="margin: 0; color: #475569; line-height: 1.6;">
              Whether you're looking for your first board or upgrading your quiver, we're here to help 
              you find the perfect gear for your next session.
            </p>
          </div>
          
          <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="margin: 0 0 10px 0; color: #1e40af;">Your Message Summary</h3>
            <p style="margin: 5px 0; color: #1e40af;"><strong>Subject:</strong> ${subject}</p>
            <p style="margin: 5px 0; color: #1e40af;"><strong>Message:</strong></p>
            <p style="margin: 10px 0 0 0; color: #3730a3; font-style: italic; white-space: pre-wrap;">"${message}"</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="margin: 0 0 15px 0; color: #0c4a6e;">While You Wait...</h3>
            <p style="margin: 0 0 15px 0; color: #0369a1;">
              Check out our latest surf gear and read reviews from fellow surfers!
            </p>
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              Keep riding the waves! 🌊
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #64748b; font-size: 12px;">
            <p style="margin: 0;">
              Surf Shop | Premium Surf Equipment & Gear<br>
              This is an automated confirmation email.
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Emails sent successfully',
      notificationId: notificationEmailData.data?.id,
      confirmationId: confirmationEmailData.data?.id,
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again or contact us directly.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}