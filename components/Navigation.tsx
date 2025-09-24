import Link from 'next/link'

export default function Navigation() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/collections', label: 'Collections' },
    { href: '/reviews', label: 'Reviews' },
  ]

  return (
    <nav className="flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-600 hover:text-primary-500 font-medium transition-colors duration-200"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}