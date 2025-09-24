import { getReviews } from '@/lib/cosmic'
import { Review } from '@/types'
import ReviewCard from '@/components/ReviewCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Reviews - Surf Shop',
  description: 'Read honest reviews from our customers about their experience with our surf equipment and gear.',
}

export default async function ReviewsPage() {
  const reviews = await getReviews() as Review[]

  // Calculate average rating
  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => {
        const rating = parseInt(review.metadata.rating.key, 10)
        return sum + rating
      }, 0) / reviews.length
    : 0

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h1>
          <p className="text-gray-600 mb-6">
            See what our customers are saying about their surf gear experience.
          </p>
          
          {reviews.length > 0 && (
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }, (_, index) => {
                  const filled = index < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300';
                  return (
                    <svg
                      key={index}
                      className={`w-6 h-6 ${filled}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        clipRule="evenodd"
                      />
                    </svg>
                  );
                })}
              </div>
              <div>
                <span className="text-lg font-semibold text-gray-900">
                  {averageRating.toFixed(1)} out of 5 stars
                </span>
                <p className="text-gray-500">
                  Based on {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
                </p>
              </div>
            </div>
          )}
        </div>

        {reviews && reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-xl font-medium text-gray-900 mb-2">No Reviews Yet</h2>
            <p className="text-gray-500">Be the first to leave a review for our products.</p>
          </div>
        )}
      </div>
    </div>
  )
}