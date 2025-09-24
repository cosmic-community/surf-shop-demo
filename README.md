# Surf Shop E-Commerce Platform

![App Preview](https://imgix.cosmicjs.com/d295c430-9971-11f0-8514-01c284615a47-photo-1544551763-46a013bb70d5-1758737458748.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive e-commerce web application for a surf shop, featuring products, collections, and customer reviews. Built with Next.js 15 and powered by Cosmic CMS.

## ✨ Features

- **Product Catalog** - Browse surfboards, wetsuits, accessories, and apparel
- **Smart Collections** - Curated product groups like "Beginner Essentials" and "Premium Gear"  
- **Customer Reviews** - Authentic customer feedback with star ratings and verified purchase badges
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Fast Performance** - Built with Next.js 15 Server Components for optimal loading
- **Content Management** - Powered by Cosmic CMS for easy content updates

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68d43365e4b13704227fb115&clone_repository=68d43635e4b13704227fb133)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for an e-commerce surf store with products, collections, and customer reviews"

### Code Generation Prompt

> "Based on the content model I created for "Design a content model for an e-commerce surf store with products, collections, and customer reviews", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **Bun** - Fast package manager and runtime

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Copy the environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Add your Cosmic credentials to `.env.local`:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

5. Run the development server:
   ```bash
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Products
```typescript
import { cosmic } from '@/lib/cosmic'

// Get all products
const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get products by category
const { objects: surfboards } = await cosmic.objects
  .find({ 
    type: 'products',
    'metadata.category.key': 'surfboards'
  })
  .depth(1)
```

### Fetching Collections
```typescript
// Get active collections with products
const { objects: collections } = await cosmic.objects
  .find({ 
    type: 'collections',
    'metadata.active': true 
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Reviews
```typescript
// Get reviews with linked product data
const { objects: reviews } = await cosmic.objects
  .find({ type: 'reviews' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🌐 Cosmic CMS Integration

This application integrates with three main Cosmic object types:

- **Products** - Surf equipment with name, description, price, images, category, stock info, and brand
- **Collections** - Curated product groups with descriptions and featured images
- **Reviews** - Customer feedback with ratings, verified purchase status, and linked products

All content is managed through your Cosmic dashboard and automatically synced to the application.

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy automatically on every commit

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify settings

### Other Platforms
This Next.js application can be deployed to any platform that supports Node.js applications.

## 📝 Environment Variables

Set these variables in your hosting platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

<!-- README_END -->