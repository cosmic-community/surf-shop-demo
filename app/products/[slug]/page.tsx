// app/products/[slug]/page.tsx
import { getProduct } from '@/lib/cosmic'
import { Product } from '@/types'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug) as Product | null

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.metadata.name} - Surf Shop`,
    description: product.metadata.description?.replace(/<[^>]*>/g, '') || `Buy ${product.metadata.name} from our surf shop`,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = await getProduct(slug) as Product | null

  if (!product) {
    notFound()
  }

  const primaryImage = product.metadata.images?.[0]
  const isInStock = product.metadata.in_stock

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg overflow-hidden">
              {primaryImage ? (
                <img
                  src={`${primaryImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                  alt={product.metadata.name}
                  className="w-full h-96 object-cover"
                  width="800"
                  height="600"
                />
              ) : (
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-gray-400">No Image Available</span>
                </div>
              )}
            </div>

            {/* Additional Images */}
            {product.metadata.images && product.metadata.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.metadata.images.slice(1, 4).map((image, index) => (
                  <div key={index} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={`${image.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                      alt={`${product.metadata.name} ${index + 2}`}
                      className="w-full h-24 object-cover"
                      width="300"
                      height="300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <div className="mb-2">
                <span className="text-sm text-primary-500 font-medium uppercase tracking-wide">
                  {product.metadata.category.value}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.metadata.name}
              </h1>
              {product.metadata.brand && (
                <p className="text-lg text-gray-600">by {product.metadata.brand}</p>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">
                ${product.metadata.price.toFixed(2)}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                isInStock 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {isInStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {product.metadata.stock_quantity !== undefined && (
              <p className="text-gray-600">
                {product.metadata.stock_quantity} units available
              </p>
            )}

            {/* Description */}
            {product.metadata.description && (
              <div className="prose prose-gray max-w-none">
                <div dangerouslySetInnerHTML={{ __html: product.metadata.description }} />
              </div>
            )}

            {/* Add to Cart Button */}
            <div className="pt-6">
              <button 
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  isInStock
                    ? 'bg-primary-500 text-white hover:bg-primary-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!isInStock}
              >
                {isInStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}