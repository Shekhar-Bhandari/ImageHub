import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'ImageHub - Discover Amazing Photos',
  description: 'Explore beautiful photos from Unsplash with ImageHub',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                📸 ImageHub
              </Link>
              
              <div className="flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Home
                </Link>
                <Link href="/search" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Search
                </Link>
                <Link href="/categories" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Categories
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">ImageHub</h3>
              <p className="text-gray-400 mb-4">
                Discover and explore amazing photos powered by Unsplash API
              </p>
              <p className="text-sm text-gray-500">
                Built with Next.js, Tailwind CSS, and ❤️
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}