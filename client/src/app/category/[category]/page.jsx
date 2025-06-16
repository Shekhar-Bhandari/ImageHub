import ImageGrid from '../../../components/ImageGrid'
import { searchImages, popularCategories } from '../../../lib/unsplash'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return popularCategories.map((category) => ({
    category: category,
  }))
}

export async function generateMetadata({ params }) {
  const category = params.category
  
  return {
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} Photos - ImageHub`,
    description: `Discover beautiful ${category} photos on ImageHub`,
  }
}

export default async function CategoryPage({ params }) {
  const category = params.category
  
  if (!popularCategories.includes(category)) {
    notFound()
  }

  const searchResults = await searchImages(category, 1, 24)
  const images = searchResults.results || []

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 capitalize">
            {category} Photos
          </h1>
          <p className="text-xl">
            Discover amazing {category} photography from talented artists
          </p>
        </div>
      </section>

      {images.length > 0 ? (
        <ImageGrid images={images} />
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600">
            No photos found for this category. Try another category!
          </p>
        </div>
      )}
    </div>
  )
}