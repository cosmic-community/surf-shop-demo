import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - Surf Shop',
  description: 'Get in touch with us for any questions about our surf equipment and gear. We\'re here to help you find the perfect setup.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary-500 text-white py-16">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Have questions about our surf gear? Need help choosing the right equipment? 
            We're here to help you catch the perfect wave.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Let's Talk Surf
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're a beginner looking for your first board or a pro seeking 
                premium gear, our team of surf enthusiasts is ready to help. Drop us a 
                line and let's get you set up for your next session.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">tony@cosmicjs.com</p>
                  <p className="text-sm text-gray-500 mt-1">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏄‍♂️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Surf Expertise</h3>
                  <p className="text-gray-600">15+ years of surfing experience</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Get advice from real surfers who know the gear
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Local Knowledge</h3>
                  <p className="text-gray-600">Born and raised on the waves</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Get recommendations based on your local conditions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}