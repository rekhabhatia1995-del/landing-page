import React, { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import BookingButton from "../components/common/BookingButton";
import EventEnquiryForm from "../components/forms/EventEnquiryForm";
import Lightbox from "../components/gallery/Lightbox";

export default function Rooftop() {
  const rooftopImages = [
    { src: "/images/rooftop/barcode.jpg", title: "Barcode Rooftop by London Arms", category: "Rooftop" },
    { src: "/images/rooftop/rooftopbar.jpg", title: "Sunset Sky Terrace & Cocktail Lounge", category: "Rooftop" },
    { src: "/images/rooftop/rooftop-bar-1.jpg", title: "Open-Air Starlight Seating", category: "Rooftop" },
    { src: "/images/rooftop/rooftop-bar-2.jpg", title: "Late Night Dancing & Atmosphere", category: "Rooftop" },
    { src: "/images/rooftop/rooftop-bar.jpg", title: "Rooftop Cocktail Bar Counter", category: "Rooftop" }
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

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
            title="Rooftop Bar"
            subtitle="Barcode by London Arms"
            divider="gold"
            light={true}
          />
          <p className="text-stone-200 text-base sm:text-lg leading-relaxed font-light">
            Where the night throws off its rules — made for dancing feet, loud laughter, and celebrations beneath the stars.
          </p>
        </div>
      </section>

      {/* Rooftop Story */}
      <section className="section-spacing bg-[#FAF2E8] border-b border-[#D5B750]/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Celebrate Above the City"
                subtitle="South Melbourne Views"
                divider="one"
                align="left"
              />

              <p className="text-stone-800 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Celebrate above the city at our stunning rooftop bar. With golden-hour cocktails, starlit dinners, and breathtaking views of Melbourne, it’s the ultimate space for love, laughter, and unforgettable memories.
              </p>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                It’s the place where music sets the pace, cocktails keep flowing, and the energy never fades. Designed as a playground for night parties, Barcode brings together culture, rhythm, and connection in a way that feels alive and unforgettable. More than a rooftop, it’s the heartbeat of every late-night story waiting to be written.
              </p>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#D5B750]/30 mb-8 text-sm">
                <div>
                  <span className="text-[#A73230] font-bold block text-xs uppercase tracking-wider">Atmosphere</span>
                  <span className="text-[#10442E] font-semibold">Sky Terrace & DJ Nights</span>
                </div>
                <div>
                  <span className="text-[#A73230] font-bold block text-xs uppercase tracking-wider">Capacity</span>
                  <span className="text-[#10442E] font-semibold">140 Seated / 180 Standing</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <BookingButton variant="primary">
                  Book A Table
                </BookingButton>
                <a href="#enquire-rooftop" className="btn-secondary">
                  Private Rooftop Hire
                </a>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-2xl border-2 border-[#D5B750]/40">
              <img
                src="/images/rooftop/barcode.jpg"
                alt="Barcode Rooftop Bar"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooftop Gallery */}
      <section className="section-spacing bg-white border-b border-[#D5B750]/30">
        <div className="container-custom">
          <SectionTitle
            title="Rooftop Bar Gallery"
            subtitle="Under The Stars"
            divider="gold"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {rooftopImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative h-64 rounded-lg overflow-hidden shadow-md cursor-pointer border border-[#D5B750]/30 hover:shadow-xl transition-all"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-semibold tracking-wide">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquire Section */}
      <section id="enquire-rooftop" className="section-spacing bg-[#FAF2E8]">
        <div className="container-custom">
          <EventEnquiryForm />
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={rooftopImages}
        currentIndex={currentIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIdx((prev) => (prev === 0 ? rooftopImages.length - 1 : prev - 1))}
        onNext={() => setCurrentIdx((prev) => (prev + 1) % rooftopImages.length)}
      />
    </div>
  );
}
