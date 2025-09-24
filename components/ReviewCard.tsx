import { Review, getRatingNumber } from '@/types'

interface ReviewCardProps {
  review: Review
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex text-yellow-400">
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index < rating ? 'text-yellow-400' : 'text-gray-300';
        return (
          <svg
            key={index}
            className={`w-5 h-5 ${filled}`}
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
  )
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const rating = getRatingNumber(review.metadata.rating)
  const product = typeof review.metadata.product === 'object' ? review.metadata.product : null

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={rating} />
        {review.metadata.verified_purchase && (
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
            Verified Purchase
          </span>
        )}
      </div>
      
      <h3 className="font-semibold text-gray-900 mb-2">{review.title}</h3>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {review.metadata.review_text}
      </p>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">by {review.metadata.customer_name}</span>
        {product && (
          <span className="text-primary-500 font-medium">
            {product.metadata.name}
          </span>
        )}
      </div>
      
      {review.metadata.review_date && (
        <div className="mt-2 text-xs text-gray-400">
          {new Date(review.metadata.review_date).toLocaleDateString()}
        </div>
      )}
    </div>
  )
}