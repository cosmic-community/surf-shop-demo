// app/collections/[slug]/page.tsx
import { getCollection } from '@/lib/cosmic'
import { Collection } from '@/types'
import ProductGrid from '@/components/ProductGrid'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface CollectionPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params
  const collection = await getCollection(slug) as Collection | null

  if (!collection) {
    return {
      title: 'Collection Not Found',
    }
  }

  return {
    title: `${collection.metadata.name} - Surf Shop`,
    description: collection.metadata.description || `Shop the ${collection.metadata.name} collection`,
  }
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params
  const collection = await getCollection(slug) as Collection | null

  if (!collection) {
    notFound()
  }

  const products = collection.metadata.products || []
  const featuredImage = collection.metadata.featured_image

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24">
        {featuredImage && (
          <>
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={`${featuredImage.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
                alt={collection.metadata.name}
                className="w-full h-full object-cover"
                width="1600"
                height="800"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </>
        )}
        
        <div className="relative max-w-7xl mx-auto section-padding text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {collection.metadata.name}
          </h1>
          {collection.metadata.description && (
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {collection.metadata.description}
            </p>
          )}
          <div className="mt-6">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
              {products.length} {products.length === 1 ? 'Product' : 'Products'}
            </span>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto section-padding py-16">
        {products && products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-16">
            <h2 className="text-xl font-medium text-gray-900 mb-2">No Products in This Collection</h2>
            <p className="text-gray-500">This collection will be updated with products soon.</p>
          </div>
        )}
      </div>
    </div>
  )
}