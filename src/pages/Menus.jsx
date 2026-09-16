import React from "react";
import { useSearchParams } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle";
import BookingButton from "../components/common/BookingButton";
import { menuData } from "../data/menu";

export default function Menus() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawTab = searchParams.get("tab");
  const activeTab = rawTab && ["dinner", "spirit", "catering"].includes(rawTab) ? rawTab : "dinner";

  const handleTabChange = (tab) => {
    setSearchParams({ tab });
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
            title="Menus"
            subtitle="Culinary Journey"
            divider="gold"
            light={true}
          />
          <p className="text-stone-200 text-base sm:text-lg leading-relaxed font-light">
            Crafted with passion, fusing royal Indian recipes with British charm.
          </p>

          {/* Menu Tab Selector */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <button
              onClick={() => handleTabChange("dinner")}
              className={`px-6 py-3 font-semibold text-sm uppercase tracking-wider rounded transition-all ${
                activeTab === "dinner"
                  ? "bg-[#D5B750] text-[#10442E] shadow-lg scale-105"
                  : "bg-black/40 text-stone-200 hover:bg-black/60 border border-[#D5B750]/30"
              }`}
            >
              Dinner Menu
            </button>
            <button
              onClick={() => handleTabChange("spirit")}
              className={`px-6 py-3 font-semibold text-sm uppercase tracking-wider rounded transition-all ${
                activeTab === "spirit"
                  ? "bg-[#D5B750] text-[#10442E] shadow-lg scale-105"
                  : "bg-black/40 text-stone-200 hover:bg-black/60 border border-[#D5B750]/30"
              }`}
            >
              Spirit & Beverage Menu
            </button>
            <button
              onClick={() => handleTabChange("catering")}
              className={`px-6 py-3 font-semibold text-sm uppercase tracking-wider rounded transition-all ${
                activeTab === "catering"
                  ? "bg-[#D5B750] text-[#10442E] shadow-lg scale-105"
                  : "bg-black/40 text-stone-200 hover:bg-black/60 border border-[#D5B750]/30"
              }`}
            >
              Catering Packages
            </button>
          </div>
        </div>
      </section>

      {/* Menu Content Section */}
      <section className="section-spacing bg-[#FAF2E8]">
        <div className="container-custom max-w-5xl">
          {/* Dietary Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-stone-600 mb-12 pb-6 border-b border-[#D5B750]/30">
            <span className="flex items-center gap-1.5">
              <span className="bg-[#10442E] text-white px-2 py-0.5 rounded text-[10px]">GF</span> Gluten Free
            </span>
            <span className="flex items-center gap-1.5">
              <span className="bg-emerald-700 text-white px-2 py-0.5 rounded text-[10px]">V</span> Vegetarian
            </span>
            <span className="flex items-center gap-1.5">
              <span className="bg-amber-600 text-white px-2 py-0.5 rounded text-[10px]">VG</span> Vegan
            </span>
            <span>• Please notify our team of any severe allergies or dietary preferences</span>
          </div>

          {/* ================================================================
              DINNER MENU
              ================================================================ */}
          {activeTab === "dinner" && (
            <div className="space-y-16">
              {menuData.dinner.map((cat, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-10 rounded-lg shadow-sm border border-[#D5B750]/30">
                  <div className="text-center mb-8">
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-[#10442E] tracking-tight uppercase"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {cat.category}
                    </h3>
                    <p className="text-stone-500 text-sm mt-1">{cat.description}</p>
                    <img
                      src="/images/brand/divider-gold.png"
                      alt=""
                      className="h-auto max-w-[200px] mx-auto mt-3 object-contain"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {cat.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex flex-col justify-between border-b border-stone-200/60 pb-4">
                        <div className="flex justify-between items-baseline gap-4">
                          <h4 className="text-lg font-bold text-[#10442E]" style={{ fontFamily: "var(--font-heading)" }}>
                            {item.name}
                          </h4>
                          <span className="text-base font-bold text-[#A73230] shrink-0 font-serif">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-stone-600 text-sm mt-1 leading-relaxed">
                          {item.description}
                        </p>
                        {item.dietary && item.dietary.length > 0 && (
                          <div className="flex gap-1.5 mt-2">
                            {item.dietary.map((d) => (
                              <span
                                key={d}
                                className="bg-[#10442E]/10 text-[#10442E] text-[10px] font-bold px-1.5 py-0.5 rounded"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================================================================
              SPIRIT & BEVERAGES
              ================================================================ */}
          {activeTab === "spirit" && (
            <div className="space-y-16">
              {menuData.spirit.map((cat, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-10 rounded-lg shadow-sm border border-[#D5B750]/30">
                  <div className="text-center mb-8">
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-[#10442E] tracking-tight uppercase"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {cat.category}
                    </h3>
                    <p className="text-stone-500 text-sm mt-1">{cat.description}</p>
                    <img
                      src="/images/brand/divider-gold.png"
                      alt=""
                      className="h-auto max-w-[200px] mx-auto mt-3 object-contain"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {cat.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex flex-col justify-between border-b border-stone-200/60 pb-4">
                        <div className="flex justify-between items-baseline gap-4">
                          <h4 className="text-lg font-bold text-[#10442E]" style={{ fontFamily: "var(--font-heading)" }}>
                            {item.name}
                          </h4>
                          <span className="text-base font-bold text-[#A73230] shrink-0 font-serif">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-stone-600 text-sm mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================================================================
              CATERING PACKAGES
              ================================================================ */}
          {activeTab === "catering" && (
            <div className="space-y-12">
              <div className="text-center mb-10">
                <SectionTitle
                  title="Banquets & Catering"
                  subtitle="Celebrations & Events"
                  divider="gold"
                />
                <p className="text-stone-700 max-w-2xl mx-auto text-base">
                  Choose from our chef-crafted group banquets, tailored for seated dinners, standing cocktail galas, and weddings.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {menuData.catering[0].packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-8 shadow-md border-2 border-[#D5B750]/50 flex flex-col justify-between hover:shadow-xl transition-all"
                  >
                    <div>
                      <h4
                        className="text-2xl font-bold text-[#10442E] mb-2 text-center"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {pkg.title}
                      </h4>
                      <p className="text-center text-xl font-bold text-[#A73230] mb-4 font-serif">
                        {pkg.price}
                      </p>
                      <p className="text-stone-600 text-sm text-center mb-6 leading-relaxed">
                        {pkg.description}
                      </p>

                      <div className="border-t border-stone-200 pt-4 mb-6">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-[#10442E] mb-3">
                          Includes:
                        </h5>
                        <ul className="space-y-2 text-sm text-stone-700">
                          {pkg.includes.map((inc, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#D5B750] font-bold">✓</span>
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <BookingButton className="w-full">
                      Book This Feast
                    </BookingButton>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Booking CTA */}
          <div className="text-center mt-16 pt-8 border-t border-[#D5B750]/30">
            <h3 className="text-2xl font-bold text-[#10442E] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Ready to Experience London Arms?
            </h3>
            <p className="text-stone-600 max-w-md mx-auto mb-6 text-sm">
              Book your table online via OpenTable for instant confirmation.
            </p>
            <BookingButton className="px-8 py-3.5 shadow-lg">
              Book A Table Online
            </BookingButton>
          </div>
        </div>
      </section>
    </div>
  );
}
