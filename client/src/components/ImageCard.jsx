import Image from 'next/image'
import Link from 'next/link'

export default function ImageCard({ image, priority = false }) {
  return (
    <div className="image-card group animate-fade-in">
      <Link href={`/photo/${image.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image.urls.small}
            alt={image.alt_description || 'Unsplash photo'}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            priority={priority}
          />
          <div className="image-overlay opacity-0 group-hover:opacity-100">
            <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <p className="font-semibold text-sm">@{image.user.name}</p>
              <p className="text-xs opacity-80">❤️ {image.likes}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}