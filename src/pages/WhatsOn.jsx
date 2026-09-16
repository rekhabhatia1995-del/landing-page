import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import BookingButton from "../components/common/BookingButton";
import { promotionsData } from "../data/events";

export default function WhatsOn() {
  const dinnerSpecials = promotionsData.filter((p) => p.type === "Dinner Special");
  const brunchDeals = promotionsData.filter((p) => p.type === "Brunch Deal");

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
            title="What's On"
            subtitle="Weekly Happenings & Specials"
            divider="gold"
            light={true}
          />
          <p className="text-stone-200 text-base sm:text-lg leading-relaxed font-light">
            Every day brings something special to London Arms — from viral dinner nights to hearty weekend brunches.
          </p>
        </div>
      </section>

      {/* Dinner Specials */}
      <section className="section-spacing bg-[#FAF2E8] border-b border-[#D5B750]/30">
        <div className="container-custom">
          <SectionTitle
            title="Dinner Specials"
            subtitle="Midweek Feasts"
            divider="gold"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {dinnerSpecials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-[#D5B750]/40 flex flex-col group hover:shadow-xl transition-all"
              >
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#10442E] text-[#D5B750] text-xs font-bold uppercase tracking-wider py-1 px-3 rounded shadow">
                    {item.day}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#10442E] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#A73230] mb-3">
                      {item.tagline}
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                  <BookingButton className="w-full">
                    Book {item.day} Special
                  </BookingButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brunch Deals */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Weekend Brunch Deals"
            subtitle="Friday, Saturday & Sunday"
            divider="border"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {brunchDeals.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF2E8] rounded-lg overflow-hidden shadow-md border border-[#D5B750]/40 flex flex-col group hover:shadow-xl transition-all"
              >
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#10442E] text-[#D5B750] text-xs font-bold uppercase tracking-wider py-1 px-3 rounded shadow">
                    {item.day}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#10442E] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#A73230] mb-3">
                      {item.tagline}
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                  <BookingButton className="w-full">
                    Reserve Weekend Brunch
                  </BookingButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
