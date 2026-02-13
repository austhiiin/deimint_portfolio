import React, { useState } from "react";

const artworkCategories = [
  {
    id: 1,
    name: "Digital Illustration",
    description: "Fantasy art, character design, and digital paintings",
    image: "", // Leave blank - will be connected to database
    artworks: [
      { 
        id: 1, 
        title: "Ethereal Portrait", 
        image: "" // Leave blank - will be connected to database
      },
      { 
        id: 3, 
        title: "Fantasy Illustration", 
        image: "" 
      },
      { 
        id: 6, 
        title: "Concept Art", 
        image: "" 
      },
      { 
        id: 7, 
        title: "Character Design", 
        image: "" 
      },
    ],
  },
  {
    id: 2,
    name: "Traditional Art",
    description: "Charcoal, ink, and mixed media works",
    image: "",
    artworks: [
      { 
        id: 2, 
        title: "Charcoal Study", 
        image: "" 
      },
      { 
        id: 4, 
        title: "Ink Sketch", 
        image: "" 
      },
      { 
        id: 8, 
        title: "Watercolor Painting", 
        image: "" 
      },
    ],
  },
  {
    id: 3,
    name: "Commissions",
    description: "Custom artwork for clients and collaborators",
    image: "",
    artworks: [
      { 
        id: 5, 
        title: "Commission Piece", 
        image: "" 
      },
      { 
        id: 9, 
        title: "Client Portrait", 
        image: "" 
      },
      { 
        id: 10, 
        title: "Custom Illustration", 
        image: "" 
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
      <section id="gallery" className="py-24 bg-gradient-to-b from-white to-[#F0FFF1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#5603AD] font-poppins">
              Selected <span className="font-semibold italic bg-gradient-to-r from-[#8367C7] to-[#5603AD] bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="mt-4 text-neutral-700 max-w-2xl mx-auto font-dmsans">
              Explore my creative journey through different mediums and styles
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworkCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => openCategoryModal(category)}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#8367C7]/20 transition-all duration-300 text-left ring-2 ring-[#B3E9C7] hover:ring-[#8367C7]"
              >
                {/* Placeholder for image from database */}
                <div className="w-full h-[400px] bg-gradient-to-br from-[#C2F8CB] to-[#B3E9C7] flex items-center justify-center">
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="text-center text-[#8367C7] font-poppins">
                      <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-medium">Image from database</span>
                    </div>
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5603AD]/90 via-[#8367C7]/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-medium mb-2 font-poppins">
                    {category.name}
                  </h3>
                  <p className="text-[#C2F8CB] text-sm mb-3 font-inter">
                    {category.description}
                  </p>
                  <span className="text-white/90 text-sm font-medium inline-flex items-center font-dmsans">
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
          className="fixed inset-0 bg-[#ffffff]/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeCategoryModal}
        >
          <div
            className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-[#C2F8CB] p-6 flex items-center justify-between rounded-t-3xl">
              <div>
                <h3 className="text-2xl font-semibold text-[#5603AD] font-poppins">
                  {selectedCategory.name}
                </h3>
                <p className="text-neutral-600 text-sm mt-1 font-inter">
                  {selectedCategory.description}
                </p>
              </div>
              <button
                onClick={closeCategoryModal}
                className="text-[#8367C7] hover:text-[#5603AD] transition-colors p-2 hover:bg-[#F0FFF1] rounded-full"
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
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:shadow-[#8367C7]/20 transition-all duration-300 ring-2 ring-[#B3E9C7] hover:ring-[#8367C7]"
                >
                  {/* Placeholder for image from database */}
                  <div className="w-full h-[300px] bg-gradient-to-br from-[#C2F8CB] to-[#B3E9C7] flex items-center justify-center">
                    {artwork.image ? (
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-center text-[#8367C7] font-poppins">
                        <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs font-medium">Database Image</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5603AD]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium font-poppins">
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
          className="fixed inset-0 bg-[#5603AD]/95 z-[60] flex items-center justify-center p-4 backdrop-blur-md"
          onClick={closeArtworkModal}
        >
          <div
            className="relative max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeArtworkModal}
              className="absolute -top-12 right-0 text-white hover:text-[#C2F8CB] transition-colors"
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
            
            {/* Placeholder for image from database */}
            {selectedArtwork.image ? (
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl ring-2 ring-[#B3E9C7]"
              />
            ) : (
              <div className="bg-gradient-to-br from-[#C2F8CB] to-[#B3E9C7] rounded-lg shadow-2xl ring-2 ring-[#B3E9C7] w-full h-[70vh] flex items-center justify-center">
                <div className="text-center text-[#8367C7]">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg font-medium font-poppins">Image from database</span>
                </div>
              </div>
            )}
            
            <p className="text-white text-center mt-4 text-lg font-poppins">
              {selectedArtwork.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;