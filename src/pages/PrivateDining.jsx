import React, { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import BookingButton from "../components/common/BookingButton";
import EventEnquiryForm from "../components/forms/EventEnquiryForm";
import Lightbox from "../components/gallery/Lightbox";

export default function PrivateDining() {
  const courtImages = [
    { src: "/images/private-dining/kings-court-01.png", title: "King’s Court Royal Dining Room", category: "Private Dining" },
    { src: "/images/private-dining/kings-court-02.png", title: "Private Vault Degustation Table", category: "Private Dining" },
    { src: "/images/private-dining/kings-court-03.png", title: "Intimate Heritage Celebration Setting", category: "Private Dining" }
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
            title="King’s Court"
            subtitle="Private Dining Room"
            divider="gold"
            light={true}
          />
          <p className="text-stone-200 text-base sm:text-lg leading-relaxed font-light">
            “A private dining experience fit for royalty.”
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-spacing bg-[#FAF2E8] border-b border-[#D5B750]/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Intimate Luxury & Royal Heritage"
                subtitle="The King's Court"
                divider="one"
                align="left"
              />

              <p className="text-stone-800 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                The King’s Court is where celebrations take on a royal character. Designed for birthdays, anniversaries, and intimate gatherings with loved ones, this private dining room offers an atmosphere that blends elegance with warmth.
              </p>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                Surrounded by décor that reflects both heritage and sophistication, the space provides the perfect backdrop for moments that deserve to be remembered. From carefully crafted menus to personalised service, every detail in the King’s Court ensures your occasion feels intimate, elevated, and truly special.
              </p>

              <ul className="space-y-3 mb-8 text-stone-700 text-sm font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-[#D5B750] text-lg">✦</span> Seating capacity for up to 25 cherished guests
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#D5B750] text-lg">✦</span> Dedicated butler, service team, and sommelier
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#D5B750] text-lg">✦</span> Tailored multi-course degustation and royal banquet options
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#D5B750] text-lg">✦</span> Acoustic seclusion with private music controls
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <a href="#reserve-vault" className="btn-primary">
                  Reserve The Vault
                </a>
                <BookingButton variant="secondary">
                  OpenTable Reservation
                </BookingButton>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-2xl border-2 border-[#D5B750]/40">
              <img
                src="/images/private-dining/kings-court-01.png"
                alt="King's Court Private Dining Table"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-spacing bg-white border-b border-[#D5B750]/30">
        <div className="container-custom">
          <SectionTitle
            title="King’s Court Gallery"
            subtitle="Regal Details"
            divider="gold"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {courtImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative h-72 rounded-lg overflow-hidden shadow-md cursor-pointer border border-[#D5B750]/30 hover:shadow-xl transition-all"
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

      {/* Reservation Form */}
      <section id="reserve-vault" className="section-spacing bg-[#FAF2E8]">
        <div className="container-custom">
          <EventEnquiryForm />
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={courtImages}
        currentIndex={currentIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIdx((prev) => (prev === 0 ? courtImages.length - 1 : prev - 1))}
        onNext={() => setCurrentIdx((prev) => (prev + 1) % courtImages.length)}
      />
    </div>
  );
}
