import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-primary-50 py-20">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ride the Perfect Wave
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover premium surfboards, wetsuits, and accessories. Quality gear trusted by surfers worldwide for every skill level and condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-primary text-lg px-8 py-3">
              Shop Now
            </Link>
            <Link href="/collections" className="btn-secondary text-lg px-8 py-3">
              Browse Collections
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-transparent to-primary-50 pointer-events-none"></div>
    </section>
  )
}