import Link from 'next/link'
import ImageGrid from '../components/ImageGrid'
import SearchBar from '../components/SearchBar'
import { getFeaturedImages } from '../lib/unsplash'

export default async function HomePage() {
  const featuredImages = await getFeaturedImages(12)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Discover Amazing Photos
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 animate-slide-up">
            Explore millions of high-quality photos from talented photographers
          </p>
          
          <div className="animate-slide-up">
            <SearchBar />
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4 animate-slide-up">
            <Link href="/search?q=nature" className="btn-secondary">
              🌿 Nature
            </Link>
            <Link href="/search?q=architecture" className="btn-secondary">
              🏛️ Architecture
            </Link>
            <Link href="/search?q=technology" className="btn-secondary">
              💻 Technology
            </Link>
            <Link href="/search?q=travel" className="btn-secondary">
              ✈️ Travel
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-16">
        <ImageGrid images={featuredImages} title="Featured Photos" />
      </section>

      {/* footer */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Ready to explore more?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Search through millions of photos or browse by categories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search" className="btn-primary">
              Start Searching
            </Link>
            <Link href="/categories" className="btn-primary bg-purple-600 hover:bg-purple-700">
              Browse Categories
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}