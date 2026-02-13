import React, { useState } from "react";

const artworkCategories = [
  {
    id: 1,
    name: "Digital Illustration",
    description: "Fantasy art, character design, and digital paintings",
    image: "https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=800&h=1000&fit=crop",
    artworks: [
      { 
        id: 1, 
        title: "Ethereal Portrait", 
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=1000&fit=crop" 
      },
      { 
        id: 3, 
        title: "Fantasy Illustration", 
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=1000&fit=crop" 
      },
      { 
        id: 6, 
        title: "Concept Art", 
        image: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=800&h=1000&fit=crop" 
      },
      { 
        id: 7, 
        title: "Character Design", 
        image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&h=1000&fit=crop" 
      },
    ],
  },
  {
    id: 2,
    name: "Traditional Art",
    description: "Charcoal, ink, and mixed media works",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=1000&fit=crop",
    artworks: [
      { 
        id: 2, 
        title: "Charcoal Study", 
        image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=1000&fit=crop" 
      },
      { 
        id: 4, 
        title: "Ink Sketch", 
        image: "https://images.unsplash.com/photo-1578926078164-61dd51d7f665?w=800&h=1000&fit=crop" 
      },
      { 
        id: 8, 
        title: "Watercolor Painting", 
        image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&h=1000&fit=crop" 
      },
    ],
  },
  {
    id: 3,
    name: "Commissions",
    description: "Custom artwork for clients and collaborators",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=1000&fit=crop",
    artworks: [
      { 
        id: 5, 
        title: "Commission Piece", 
        image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=800&h=1000&fit=crop" 
      },
      { 
        id: 9, 
        title: "Client Portrait", 
        image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=1000&fit=crop" 
      },
      { 
        id: 10, 
        title: "Custom Illustration", 
        image: "https://images.unsplash.com/photo-1582201957340-3bc4277f4a4a?w=800&h=1000&fit=crop" 
      },
    ],
  },
];

interface Artwork {
  id: number;
  title: string;
  image: string;
}

const Work: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof artworkCategories[0] | null>(null);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const openCategoryModal = (category: typeof artworkCategories[0]) => {
    setSelectedCategory(category);
  };

  const closeCategoryModal = () => {
    setSelectedCategory(null);
  };

  const openArtworkModal = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  const closeArtworkModal = () => {
    setSelectedArtwork(null);
  };

  return (
    <>
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-neutral-900">
              Selected <span className="font-semibold italic">Works</span>
            </h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
              Explore my creative journey through different mediums and styles
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworkCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => openCategoryModal(category)}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-left"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-medium mb-2">
                    {category.name}
                  </h3>
                  <p className="text-neutral-200 text-sm mb-3">
                    {category.description}
                  </p>
                  <span className="text-white/90 text-sm font-medium inline-flex items-center">
                    View {category.artworks.length} piece{category.artworks.length !== 1 ? 's' : ''}
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Modal */}
      {selectedCategory && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeCategoryModal}
        >
          <div
            className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-neutral-200 p-6 flex items-center justify-between rounded-t-3xl">
              <div>
                <h3 className="text-2xl font-semibold text-neutral-900">
                  {selectedCategory.name}
                </h3>
                <p className="text-neutral-600 text-sm mt-1">
                  {selectedCategory.description}
                </p>
              </div>
              <button
                onClick={closeCategoryModal}
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Artworks Grid */}
            <div className="p-6 grid sm:grid-cols-2 gap-6">
              {selectedCategory.artworks.map((artwork) => (
                <button
                  key={artwork.id}
                  onClick={() => openArtworkModal(artwork)}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">
                      {artwork.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Artwork Detail Modal */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4"
          onClick={closeArtworkModal}
        >
          <div
            className="relative max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeArtworkModal}
              className="absolute -top-12 right-0 text-white hover:text-neutral-300 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedArtwork.image}
              alt={selectedArtwork.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedArtwork.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;