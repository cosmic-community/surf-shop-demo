import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl">🏄‍♂️</div>
              <span className="text-xl font-bold text-gray-900">Surf Shop</span>
            </Link>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  )
}