import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🏄‍♂️</div>
              <span className="text-xl font-bold">Surf Shop</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Premium surf equipment and gear for surfers of all levels. From beginner-friendly boards to professional-grade equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/products?category=surfboards" className="hover:text-white transition-colors">Surfboards</Link></li>
              <li><Link href="/products?category=wetsuits" className="hover:text-white transition-colors">Wetsuits</Link></li>
              <li><Link href="/products?category=accessories" className="hover:text-white transition-colors">Accessories</Link></li>
              <li><Link href="/products?category=apparel" className="hover:text-white transition-colors">Apparel</Link></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-semibold mb-4">Collections</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/collections" className="hover:text-white transition-colors">All Collections</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Customer Reviews</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Surf Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}