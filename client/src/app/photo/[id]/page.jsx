import Image from 'next/image'
import Link from 'next/link'
import { getImageById } from '../../../lib/unsplash'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }) {
  const image = await getImageById(params.id)
  
  if (!image) {
    return { title: 'Photo not found' }
  }

  return {
    title: `${image.alt_description || 'Photo'} by ${image.user.name} - ImageHub`,
    description: image.description || image.alt_description || 'Beautiful photo from Unsplash',
  }
}

export default async function PhotoPage({ params }) {
  const image = await getImageById(params.id)

  if (!image) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          ← Back to Gallery
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative aspect-[4/3] max-h-[70vh]">
            <Image
              src={image.urls.regular}
              alt={image.alt_description || 'Photo'}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {image.alt_description || 'Untitled Photo'}
                </h1>
                <p className="text-gray-600">
                  by <span className="font-semibold">{image.user.name}</span>
                </p>
              </div>
              
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">❤️</span>
                  <span className="text-lg font-semibold">{image.likes}</span>
                </div>
                <div className="text-gray-500">
                  {new Date(image.created_at).toLocaleDateString()}
                </div>
              </div>
            </div>

            {image.description && (
              <p className="text-gray-700 text-lg mb-6">
                {image.description}
              </p>
            )}

            {image.tags && image.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {image.tags.slice(0, 8).map((tag, index) => (
                  <Link
                    key={index}
                    href={`/search?q=${encodeURIComponent(tag.title)}`}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
                  >
                    #{tag.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}