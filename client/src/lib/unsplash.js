const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const BASE_URL = 'https://api.unsplash.com';

if (!UNSPLASH_ACCESS_KEY) {
  console.warn('Warning: UNSPLASH_ACCESS_KYE is not in environment variables');
}

// Fallback mock data for when API key is not available
const mockImages = [
  {
    id: 'mock-1',
    urls: {
      small: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      regular: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      full: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600'
    },
    alt_description: 'Beautiful mountain landscape',
    description: 'A stunning mountain view with clear blue sky',
    user: { name: 'Demo User', username: 'demo' },
    likes: 245,
    created_at: '2024-01-15T10:00:00Z',
    tags: [{ title: 'nature' }, { title: 'mountain' }, { title: 'landscape' }]
  },
  {
    id: 'mock-2',
    urls: {
      small: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
      regular: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      full: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600'
    },
    alt_description: 'Forest path through trees',
    description: 'A peaceful forest path surrounded by tall trees',
    user: { name: 'Nature Lover', username: 'naturelover' },
    likes: 189,
    created_at: '2024-01-20T14:30:00Z',
    tags: [{ title: 'forest' }, { title: 'trees' }, { title: 'path' }]
  },
  {
    id: 'mock-3',
    urls: {
      small: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400',
      regular: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
      full: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600'
    },
    alt_description: 'Lake with mountain reflection',
    description: 'Crystal clear lake reflecting mountain peaks',
    user: { name: 'Adventure Seeker', username: 'adventurer' },
    likes: 312,
    created_at: '2024-01-25T09:15:00Z',
    tags: [{ title: 'lake' }, { title: 'reflection' }, { title: 'nature' }]
  }
];

async function fetchFromUnsplash(endpoint) {
  if (!UNSPLASH_ACCESS_KEY) {
    return { results: mockImages, total: mockImages.length };
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Unsplash API error:', error);
    return { results: mockImages, total: mockImages.length };
  }
}

export async function getFeaturedImages(count = 12) {
  const data = await fetchFromUnsplash(`/photos/random?count=${count}&featured=true`);
  return Array.isArray(data) ? data : data.results || mockImages;
}

export async function searchImages(query, page = 1, perPage = 12) {
  if (!query) return { results: [], total: 0 };
  
  const data = await fetchFromUnsplash(`/search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}&order_by=relevant`);
  return data;
}

export async function getImageById(id) {
  if (!UNSPLASH_ACCESS_KEY) {
    return mockImages.find(img => img.id === id) || mockImages[0];
  }

  try {
    const response = await fetch(`${BASE_URL}/photos/${id}`, {
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Unsplash API error:', error);
    return mockImages.find(img => img.id === id) || mockImages[0];
  }
}

export const popularCategories = [
  'nature', 'architecture', 'technology', 'food', 'travel', 
  'art', 'fashion', 'sports', 'animals', 'business'
];
