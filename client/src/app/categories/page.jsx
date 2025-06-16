import Link from 'next/link'
import { popularCategories } from '../../lib/unsplash'

export const metadata = {
  title: 'Photo Categories - ImageHub',
  description: 'Browse photos by category',
}

export default function CategoriesPage() {
  const categoryEmojis = {
    nature: '🌿',
    architecture: '🏛️',
    technology: '💻',
    food: '🍔',
    travel: '✈️',
    art: '🎨',
    fashion: '👗',
    sports: '⚽',
    animals: '🐾',
    business: '💼'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">
            Browse Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover photos organized by popular categories and themes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {popularCategories.map((category) => (
            <Link
              key={category}
              href={`/category/${category}`}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                {categoryEmojis[category] || '📷'}
              </div>
              <h3 className="text-2xl font-bold capitalize text-gray-800 group-hover:text-blue-600 transition-colors">
                {category}
              </h3>
              <p className="text-gray-500 mt-2">
                Explore {category} photos
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}