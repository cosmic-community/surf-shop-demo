import Link from 'next/link'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const primaryImage = product.metadata.images?.[0]
  const isInStock = product.metadata.in_stock

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="card p-0 overflow-hidden group cursor-pointer">
        {/* Product Image */}
        <div className="aspect-w-4 aspect-h-3 bg-gray-100 relative overflow-hidden">
          {primaryImage ? (
            <img
              src={`${primaryImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={product.metadata.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
              width="300"
              height="200"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
          
          {/* Stock indicator */}
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              isInStock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {isInStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2">
            <span className="text-xs text-primary-500 font-medium uppercase tracking-wide">
              {product.metadata.category.value}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
            {product.metadata.name}
          </h3>
          
          {product.metadata.brand && (
            <p className="text-sm text-gray-500 mb-3">by {product.metadata.brand}</p>
          )}
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              ${product.metadata.price.toFixed(2)}
            </span>
            
            {product.metadata.stock_quantity !== undefined && (
              <span className="text-sm text-gray-500">
                {product.metadata.stock_quantity} available
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}