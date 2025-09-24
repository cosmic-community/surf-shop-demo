import { Product } from '@/types'
import ProductCard from '@/components/ProductCard'

interface ProductGridProps {
  products: Product[]
  className?: string
}

export default function ProductGrid({ products, className }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No products available</p>
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className || ''}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}