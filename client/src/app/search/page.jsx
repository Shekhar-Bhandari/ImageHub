import { Suspense } from 'react'
import SearchBar from '../../components/SearchBar'
import ImageGrid from '../../components/ImageGrid'
import { searchImages } from '../../lib/unsplash'

export const dynamic = 'force-dynamic'

export default async function SearchPage({ searchParams }) {
  const params = await searchParams 
  const query = searchParams.q || ''
  const page = parseInt(searchParams.page) || 1
  
  let searchResults = { results: [], total: 0 }
  
  if (query) {
    searchResults = await searchImages(query, page, 20)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <section className="bg-white shadow-sm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Search Photos
          </h1>
          <SearchBar initialQuery={query} />
          
          {query && (
            <div className="text-center mt-6">
              <p className="text-gray-600">
                {searchResults.total > 0 
                  ? `Found ${searchResults.total.toLocaleString()} photos for "${query}"`
                  : `No photos found for "${query}"`
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Search Results */}
      {query && searchResults.results.length > 0 && (
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <ImageGrid images={searchResults.results} />
        </Suspense>
      )}

      {/* No Query State */}
      {!query && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="text-6xl mb-6">🔍</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              What are you looking for?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Enter a search term above to discover amazing photos
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {['Sunset', 'Coffee', 'Ocean', 'Mountains', 'City', 'Flowers', 'Food', 'Animals'].map((term) => (
                <a
                  key={term}
                  href={`/search?q=${term.toLowerCase()}`}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
                >
                  <span className="text-lg font-medium text-gray-700 hover:text-blue-600">
                    {term}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
