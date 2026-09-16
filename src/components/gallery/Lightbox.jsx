import React, { useEffect } from "react";

export default function Lightbox({ images, currentIndex, isOpen, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImg = images[currentIndex] || images[0];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#D5B750] hover:text-white p-3 z-20 focus:outline-none"
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="carousel-arrow-btn left-4 sm:left-8"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image Display */}
      <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center">
        <img
          src={currentImg.src}
          alt={currentImg.alt || currentImg.title || "London Arms gallery"}
          className="max-h-[75vh] max-w-full object-contain rounded shadow-2xl border border-[#D5B750]/30"
        />

        {/* Caption bar */}
        <div className="mt-4 text-center">
          <h4 className="text-white text-lg font-semibold tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
            {currentImg.title}
          </h4>
          <p className="text-sm text-[#D5B750] mt-1 tracking-wider uppercase">
            {currentImg.category} • {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="carousel-arrow-btn right-4 sm:right-8"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
