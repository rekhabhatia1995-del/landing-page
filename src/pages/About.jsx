import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import BookingButton from "../components/common/BookingButton";
import { Link } from "react-router-dom";

export default function About() {
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
            title="About Us"
            subtitle="Our Story & Vision"
            divider="gold"
            light={true}
          />
          <p className="text-stone-200 text-base sm:text-lg leading-relaxed font-light">
            A South Melbourne icon since 1854, reborn as Melbourne's grandest British-Indian culinary sanctuary.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-spacing bg-[#FAF2E8] border-b border-[#D5B750]/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <SectionTitle
                title="Our Story"
                subtitle="Historic 1854 Landmark"
                divider="one"
                align="left"
              />

              <p className="text-stone-800 text-base sm:text-lg leading-relaxed mb-6">
                Standing proudly at 160 Clarendon Street since 1854, this heritage address has witnessed over 170 years of Melbourne's cultural evolution. From its origins as a Victorian community gathering place to its modern renaissance, the building embodies history, character, and enduring charm.
              </p>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                Today, reborn as London Arms, it celebrates an evocative culinary narrative: where the stately warmth of British public house heritage converges with the vibrant aromas, royal recipes, and generous soul of Indian hospitality.
              </p>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-8">
                Every dining hall, vaulted private room, and open-air rooftop terrace has been thoughtfully restored to preserve original architectural details while providing modern comforts, bespoke soundscapes, and refined service.
              </p>

              <div className="flex flex-wrap gap-4">
                <BookingButton variant="primary">
                  Reserve a Table
                </BookingButton>
                <Link to="/menus" className="btn-secondary">
                  Explore Menus
                </Link>
              </div>
            </div>

            {/* Right Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg shadow-lg border border-[#D5B750]/40">
                <img
                  src="/images/home/about-left.png"
                  alt="London Arms Exterior"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg border border-[#D5B750]/40 mt-6">
                <img
                  src="/images/home/about-right.png"
                  alt="London Arms Dining Ambiance"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Us"
            subtitle="The London Arms Distinction"
            divider="gold"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-[#FAF2E8] p-6 rounded-lg border border-[#D5B750]/30 text-center shadow-sm">
              <div className="w-14 h-14 bg-[#10442E] text-[#D5B750] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif">
                1
              </div>
              <h3 className="text-xl font-bold text-[#10442E] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Historic 1854 Architecture
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Dine within authentic Victorian brickwork, high ornate ceilings, and restored dark timber craftsmanship.
              </p>
            </div>

            <div className="bg-[#FAF2E8] p-6 rounded-lg border border-[#D5B750]/30 text-center shadow-sm">
              <div className="w-14 h-14 bg-[#10442E] text-[#D5B750] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-[#10442E] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Royal Culinary Heritage
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Authentic Dum Pukht Lucknow biryanis, 24-hour slow Dal Makhani, clay tandoors, and fresh coastal curries.
              </p>
            </div>

            <div className="bg-[#FAF2E8] p-6 rounded-lg border border-[#D5B750]/30 text-center shadow-sm">
              <div className="w-14 h-14 bg-[#10442E] text-[#D5B750] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-[#10442E] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Three Dynamic Levels
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Ground floor dining, King's Court private vault, first-floor banquet lounge, and Barcode rooftop sky bar.
              </p>
            </div>

            <div className="bg-[#FAF2E8] p-6 rounded-lg border border-[#D5B750]/30 text-center shadow-sm">
              <div className="w-14 h-14 bg-[#10442E] text-[#D5B750] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-[#10442E] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Warm Hospitality
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Whether dropping in for an evening cocktail or hosting a 200-guest wedding, every visit feels extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
