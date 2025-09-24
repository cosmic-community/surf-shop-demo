import { getProducts } from '@/lib/cosmic'
import { Product } from '@/types'
import ProductGrid from '@/components/ProductGrid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - Surf Shop',
  description: 'Browse our complete collection of premium surf equipment including surfboards, wetsuits, and accessories.',
}

export default async function ProductsPage() {
  const products = await getProducts() as Product[]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Products</h1>
          <p className="text-gray-600">
            Discover our complete collection of premium surf equipment and gear.
          </p>
        </div>

        {products && products.length > 0 ? (
          <>
            <div className="mb-6">
              <p className="text-gray-500">
                Showing {products.length} {products.length === 1 ? 'product' : 'products'}
              </p>
            </div>
            <ProductGrid products={products} />
          </>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-xl font-medium text-gray-900 mb-2">No Products Available</h2>
            <p className="text-gray-500">Check back soon for new products.</p>
          </div>
        )}
      </div>
    </div>
  )
}