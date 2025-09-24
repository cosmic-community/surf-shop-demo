import { getProducts, getCollections, getReviews } from '@/lib/cosmic'
import { Product, Collection, Review } from '@/types'
import ProductGrid from '@/components/ProductGrid'
import CollectionCard from '@/components/CollectionCard'
import ReviewCard from '@/components/ReviewCard'
import Hero from '@/components/Hero'
import Link from 'next/link'

export default async function HomePage() {
  const [products, collections, reviews] = await Promise.all([
    getProducts(),
    getCollections(),
    getReviews()
  ])

  const featuredProducts = (products as Product[]).slice(0, 3)
  const featuredCollections = (collections as Collection[]).slice(0, 2)
  const featuredReviews = (reviews as Review[]).slice(0, 3)

  return (
    <div>
      <Hero />
      
      {/* Featured Collections */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Collections</h2>
            <Link 
              href="/collections" 
              className="text-primary-500 hover:text-primary-600 font-medium"
            >
              View All Collections →
            </Link>
          </div>
          {featuredCollections && featuredCollections.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredCollections.map((collection) => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No collections available</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link 
              href="/products" 
              className="text-primary-500 hover:text-primary-600 font-medium"
            >
              View All Products →
            </Link>
          </div>
          {featuredProducts && featuredProducts.length > 0 ? (
            <ProductGrid products={featuredProducts} />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No products available</p>
            </div>
          )}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Customer Reviews</h2>
            <Link 
              href="/reviews" 
              className="text-primary-500 hover:text-primary-600 font-medium"
            >
              View All Reviews →
            </Link>
          </div>
          {featuredReviews && featuredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No reviews available</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}