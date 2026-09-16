import React, { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import BookingButton from "../components/common/BookingButton";
import EventEnquiryForm from "../components/forms/EventEnquiryForm";
import Lightbox from "../components/gallery/Lightbox";

export default function FirstFloor() {
  const floorImages = [
    { src: "/images/first-floor/first-floor.jpg", title: "First Floor Banquet & Event Hall", category: "First Floor" },
    { src: "/images/first-floor/floor-1.jpg", title: "Private Event Seating Setup", category: "First Floor" },
    { src: "/images/first-floor/floor-2.jpg", title: "Dedicated Level 1 Cocktail Bar", category: "First Floor" },
    { src: "/images/first-floor/floor-3.jpg", title: "Lounge & Dance Floor Area", category: "First Floor" },
    { src: "/images/first-floor/floor-4.jpg", title: "Architectural Window Lighting", category: "First Floor" },
    { src: "/images/first-floor/floor-5.jpg", title: "Intimate Dinner Banquet", category: "First Floor" },
    { src: "/images/first-floor/floor-6.jpg", title: "First Floor Heritage Setting", category: "First Floor" }
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
            title="First Floor"
            subtitle="Exclusive Event Space & Lounge"
            divider="gold"
            light={true}
          />
          <p className="text-stone-200 text-base sm:text-lg leading-relaxed font-light">
            An entire private floor designed for landmark birthdays, corporate galas, and wedding receptions.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-spacing bg-[#FAF2E8] border-b border-[#D5B750]/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="A Grand Canvas for Your Event"
                subtitle="Versatility & Elegance"
                divider="one"
                align="left"
              />

              <p className="text-stone-800 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Occupying the entire first level of our historic 1854 building, this exclusive event hall offers total privacy, sophistication, and flexible configurations.
              </p>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                Featuring a dedicated private bar, high ceilings with heritage mouldings, warm ambient chandeliers, state-of-the-art audiovisual capabilities, and a designated dance floor, the First Floor caters comfortably for up to 150 seated guests or 200 standing cocktail attendees.
              </p>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#D5B750]/30 mb-8 text-sm">
                <div>
                  <span className="text-[#A73230] font-bold block text-xs uppercase tracking-wider">Capacity</span>
                  <span className="text-[#10442E] font-semibold">150 Seated / 200 Cocktail</span>
                </div>
                <div>
                  <span className="text-[#A73230] font-bold block text-xs uppercase tracking-wider">Amenities</span>
                  <span className="text-[#10442E] font-semibold">Private Bar, AV & Restrooms</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#plan-celebration" className="btn-primary">
                  Enquire for First Floor
                </a>
                <BookingButton variant="secondary">
                  General Booking
                </BookingButton>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-2xl border-2 border-[#D5B750]/40">
              <img
                src="/images/first-floor/first-floor.jpg"
                alt="First Floor Function Space"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-spacing bg-white border-b border-[#D5B750]/30">
        <div className="container-custom">
          <SectionTitle
            title="First Floor Gallery"
            subtitle="Explore The Ambiance"
            divider="gold"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {floorImages.map((img, idx) => (
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

      {/* Plan Celebration Form Section */}
      <section id="plan-celebration" className="section-spacing bg-[#FAF2E8]">
        <div className="container-custom">
          <EventEnquiryForm />
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={floorImages}
        currentIndex={currentIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIdx((prev) => (prev === 0 ? floorImages.length - 1 : prev - 1))}
        onNext={() => setCurrentIdx((prev) => (prev + 1) % floorImages.length)}
      />
    </div>
  );
}
