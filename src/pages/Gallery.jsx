import React, { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import Lightbox from "../components/gallery/Lightbox";
import { galleryData } from "../data/gallery";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const categories = ["All", "Restaurant", "Rooftop", "First Floor", "Private Dining", "Food & Drinks", "Events"];

  const filteredImages =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === selectedCategory);

  const openLightbox = (index) => {
    setCurrentIdx(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <section
        className="py-20 text-center relative text-white"
        style={{
          backgroundColor: "#10442E",
          backgroundImage: 'url("/images/brand/pattern-dark.png")',
          backgroundRepeat: "repeat"
        }}
      >
        <div className="container-custom max-w-3xl px-6">
          <SectionTitle
            title="Gallery"
            subtitle="Visual Moments"
            divider="gold"
            light={true}
          />
          <p className="text-stone-200 text-base sm:text-lg leading-relaxed font-light">
            Explore the heritage architecture, vibrant rooftop celebrations, and culinary art of London Arms.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-[#D5B750] text-[#10442E] shadow-md scale-105"
                    : "bg-black/40 text-white/90 hover:bg-black/60 border border-[#D5B750]/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-spacing bg-[#FAF2E8]">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, idx) => (
              <div
                key={img.id}
                onClick={() => openLightbox(idx)}
                className="group relative h-72 sm:h-80 rounded-lg overflow-hidden shadow-md cursor-pointer border border-[#D5B750]/30 hover:shadow-2xl transition-all"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#D5B750] text-xs uppercase tracking-widest font-semibold mb-1">
                    {img.category}
                  </span>
                  <h4
                    className="text-white text-lg font-bold tracking-wide leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {img.title}
                  </h4>
                  <span className="text-white/80 text-xs mt-2 flex items-center gap-1 font-medium">
                    Click to enlarge <span>↗</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        images={filteredImages}
        currentIndex={currentIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIdx((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1))}
        onNext={() => setCurrentIdx((prev) => (prev + 1) % filteredImages.length)}
      />
    </div>
  );
}
