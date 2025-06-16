import ImageCard from './ImageCard'

export default function ImageGrid({ images, title }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {title && (
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <ImageCard 
            key={image.id} 
            image={image} 
            priority={index < 8}
          />
        ))}
      </div>
    </div>
  )
}