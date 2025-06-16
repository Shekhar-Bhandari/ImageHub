export const metadata = {
  title: 'About - ImageHub',
  description: 'Discover the story behind ImageHub – your ultimate image discovery platform.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">
            About ImageHub
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 text-center mb-12">
              ImageHub is your ultimate platform to search, explore, and enjoy stunning images from all over the world.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">🚀 Powered by Modern Tools</h2>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Next.js 14</strong> – Powerful React framework with App Router</li>
                  <li><strong>Tailwind CSS</strong> – Sleek and responsive UI styling</li>
                  <li><strong>Unsplash API</strong> – Beautiful, royalty-free image source</li>
                  <li><strong>Dynamic + Static Rendering</strong> – Best of both performance worlds</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">✨ What You Can Do</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>Search and discover millions of high-quality images</li>
                  <li>Explore trending categories and themes</li>
                  <li>Enjoy fast, responsive, and mobile-friendly design</li>
                  <li>Experience optimized loading and rendering</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-8">
                Whether you’re a creative professional, a student, or someone who simply enjoys visual inspiration, 
                ImageHub is designed to offer a smooth, fast, and beautiful browsing experience. Powered by Unsplash and built using cutting-edge web technologies, it’s your go-to source for incredible imagery.
              </p>

              <p className="text-gray-600 mb-12">
                We hope you find joy and inspiration in every search. Thank you for being here!
              </p>

              <h2 className="text-4xl font-bold text-blue-700 mt-8">
                🚀 Developed by Shekhar Bhandari
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
