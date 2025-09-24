import Link from 'next/link'
import { Collection } from '@/types'

interface CollectionCardProps {
  collection: Collection
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  const featuredImage = collection.metadata.featured_image
  const productCount = collection.metadata.products?.length || 0

  return (
    <Link href={`/collections/${collection.slug}`}>
      <div className="card p-0 overflow-hidden group cursor-pointer">
        {/* Collection Image */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative overflow-hidden">
          {featuredImage ? (
            <img
              src={`${featuredImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
              alt={collection.metadata.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              width="400"
              height="200"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-200"></div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-end p-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">{collection.metadata.name}</h3>
              {collection.metadata.description && (
                <p className="text-gray-200 mb-3 line-clamp-2">
                  {collection.metadata.description}
                </p>
              )}
              <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                {productCount} {productCount === 1 ? 'Product' : 'Products'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}