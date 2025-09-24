import { getCollections } from '@/lib/cosmic'
import { Collection } from '@/types'
import CollectionCard from '@/components/CollectionCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collections - Surf Shop',
  description: 'Explore our curated collections of surf equipment designed for different skill levels and surfing styles.',
}

export default async function CollectionsPage() {
  const collections = await getCollections() as Collection[]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Collections</h1>
          <p className="text-gray-600">
            Discover our curated collections designed for every surfer, from beginners to pros.
          </p>
        </div>

        {collections && collections.length > 0 ? (
          <>
            <div className="mb-6">
              <p className="text-gray-500">
                {collections.length} {collections.length === 1 ? 'collection' : 'collections'} available
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((collection) => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-xl font-medium text-gray-900 mb-2">No Collections Available</h2>
            <p className="text-gray-500">Check back soon for curated product collections.</p>
          </div>
        )}
      </div>
    </div>
  )
}