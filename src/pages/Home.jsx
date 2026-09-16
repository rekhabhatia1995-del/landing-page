import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle";
import BookingButton from "../components/common/BookingButton";
import { faqData } from "../data/events";

export default function Home() {
  // Hero Carousel state
  const heroSlides = [
    "/images/home/hero-slide-1.jpg",
    "/images/home/hero-slide-2.jpg",
    "/images/home/hero-slide-3.jpg",
    "/images/home/hero-slide-4.jpg",
    "/images/home/hero-slide-5.jpg",
    "/images/home/hero-slide-6.jpg",
    "/images/home/hero-slide-7.jpg"
  ];
  const [heroIndex, setHeroIndex] = useState(0);

  // Auto-advance hero slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Gallery preview carousel state
  const gallerySlides = [
    { src: "/images/restaurant/interior-01.png", title: "Ground Floor Dining Hall" },
    { src: "/images/rooftop/barcode.jpg", title: "Barcode Rooftop Bar" },
    { src: "/images/private-dining/kings-court-01.png", title: "King's Court Private Dining" },
    { src: "/images/first-floor/first-floor.jpg", title: "First Floor Event Space" },
    { src: "/images/menu/dish-01.jpg", title: "Artisan Tandoor & Curries" },
    { src: "/images/menu/cocktails.jpg", title: "Craft Cocktail Collection" }
  ];
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Restaurant & Bar carousel state
  const restaurantSlides = [
    "/images/restaurant/interior-01.png",
    "/images/restaurant/interior-02.png",
    "/images/restaurant/interior-03.png"
  ];
  const [restaurantIndex, setRestaurantIndex] = useState(0);

  // King's Court carousel state
  const kingsCourtSlides = [
    "/images/private-dining/kings-court-01.png",
    "/images/private-dining/kings-court-02.png",
    "/images/private-dining/kings-court-03.png"
  ];
  const [kingsCourtIndex, setKingsCourtIndex] = useState(0);

  // Rooftop / Barcode carousel state
  const barcodeSlides = [
    "/images/rooftop/barcode.jpg",
    "/images/rooftop/rooftopbar.jpg",
    "/images/rooftop/rooftop-bar-1.jpg",
    "/images/rooftop/rooftop-bar-2.jpg"
  ];
  const [barcodeIndex, setBarcodeIndex] = useState(0);

  // Events carousel state
  const eventsSlides = [
    "/images/events/event-01.png",
    "/images/events/event-02.png",
    "/images/first-floor/floor-1.jpg"
  ];
  const [eventsIndex, setEventsIndex] = useState(0);

  // FAQ Accordion state (first one open by default as in reference)
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <div className="w-full flex flex-col">
      {/* ====================================================================
          1. HERO SECTION
          ==================================================================== */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#10442E]">
        {/* Background Slideshow */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === heroIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            }`}
            style={{
              backgroundImage: `url('${slide}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              transition: "opacity 1s ease-in-out, transform 6s ease"
            }}
          />
        ))}

        {/* Deep Elegant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center py-20 px-6 max-w-4xl">
          <p
            className="text-sm sm:text-base md:text-lg text-[#D5B750] uppercase tracking-[0.25em] font-semibold mb-4 drop-shadow-md"
            style={{ letterSpacing: "0.25em" }}
          >
            Since 1854 • South Melbourne
          </p>

          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Welcome to London Arms
          </h1>

          <p className="text-base sm:text-xl text-stone-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow">
            The Largest Indian Dining Experience in Melbourne’s Historic 1854 Building where British charm meets Indian soul.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookingButton className="px-8 py-4 text-base shadow-2xl">
              Book A Table
            </BookingButton>
            <Link
              to="/menus"
              className="btn-white px-8 py-4 text-base shadow-xl"
            >
              Explore Menus
            </Link>
          </div>
        </div>

        {/* Carousel indicator dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeroIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === heroIndex ? "bg-[#D5B750] w-8" : "bg-white/50 hover:bg-white"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ====================================================================
          2. ABOUT LONDON ARMS SECTION (with flanking arched portraits)
          ==================================================================== */}
      <section className="section-spacing bg-[#FAF2E8] border-b border-[#D5B750]/30 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Flanking Image */}
            <div className="hidden lg:flex lg:col-span-3 justify-center">
              <div className="relative group overflow-hidden rounded-t-full border-4 border-[#D5B750]/40 shadow-xl max-w-[260px]">
                <img
                  src="/images/home/about-left.png"
                  alt="London Arms Architectural Heritage"
                  className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Center Content */}
            <div className="col-span-1 lg:col-span-6 text-center px-4 sm:px-8">
              <SectionTitle
                title="About London Arms"
                subtitle="Heritage & Splendour"
                divider="gold"
              />

              <p className="text-[#222] text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Since 1854, this historic South Melbourne landmark has been a gathering place for the community, evolving through many eras while keeping its timeless charm. Today, it is reborn as London Arms — a British–Indian restaurant and bar where heritage meets splendour.
              </p>

              <p className="text-[#444] text-sm sm:text-base leading-relaxed mb-8">
                Inspired by the elegance of Victorian architecture and the opulence of India’s royal past, London Arms offers more than a meal — it is an experience. From the walls that whisper stories of 19th-century Melbourne to a menu that unites two great culinary traditions, every detail is designed to make you feel part of something timeless, refined, and unforgettable.
              </p>

              <Link to="/about-us" className="btn-primary shadow-md">
                Explore London Arms
              </Link>
            </div>

            {/* Right Flanking Image */}
            <div className="hidden lg:flex lg:col-span-3 justify-center">
              <div className="relative group overflow-hidden rounded-t-full border-4 border-[#D5B750]/40 shadow-xl max-w-[260px]">
                <img
                  src="/images/home/about-right.png"
                  alt="London Arms Hospitality"
                  className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. LONDON ARMS MENUS SECTION (Numbered highlights 01, 02, 03)
          ==================================================================== */}
      <section
        className="section-spacing text-center relative text-white"
        style={{
          backgroundColor: "#10442E",
          backgroundImage: 'url("/images/brand/pattern-dark.png")',
          backgroundRepeat: "repeat"
        }}
      >
        <div className="container-custom">
          <SectionTitle
            title="London Arms Menus"
            subtitle="Culinary Traditions"
            divider="gold"
            light={true}
          />

          <p className="text-stone-300 max-w-2xl mx-auto mb-12 text-sm sm:text-base leading-relaxed">
            From clay-oven naan tacos and slow-simmered Lucknow biryanis to our signature butter chicken and handcrafted cocktails, discover a menu rooted in tradition and elevated with contemporary craft.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {/* 01. Daily Diet */}
            <div className="bg-[#FAF2E8]/10 backdrop-blur-sm border border-[#D5B750]/30 p-8 rounded-lg text-center group hover:bg-[#FAF2E8]/20 transition-all duration-300">
              <span className="text-4xl font-serif text-[#D5B750] block mb-3 group-hover:scale-110 transition-transform">
                01.
              </span>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Bar Munchies & Starters
              </h3>
              <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                Crunchy fox nuts, avocado chaat bombs, truffle mushroom tikkis, and artisanal naan tacos.
              </p>
              <Link to="/menus?tab=dinner" className="text-[#D5B750] font-bold text-sm uppercase tracking-wider hover:underline">
                Explore Items →
              </Link>
            </div>

            {/* 02. Lunch Diet */}
            <div className="bg-[#FAF2E8]/10 backdrop-blur-sm border border-[#D5B750]/30 p-8 rounded-lg text-center group hover:bg-[#FAF2E8]/20 transition-all duration-300">
              <span className="text-4xl font-serif text-[#D5B750] block mb-3 group-hover:scale-110 transition-transform">
                02.
              </span>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Signature Curries & Biryani
              </h3>
              <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                24-hour slow Dal London Arms, Nalli Nihari lamb shank, Dum Pukht chicken, and coastal prawn moilee.
              </p>
              <Link to="/menus?tab=dinner" className="text-[#D5B750] font-bold text-sm uppercase tracking-wider hover:underline">
                Explore Items →
              </Link>
            </div>

            {/* 03. Dinner Diet */}
            <div className="bg-[#FAF2E8]/10 backdrop-blur-sm border border-[#D5B750]/30 p-8 rounded-lg text-center group hover:bg-[#FAF2E8]/20 transition-all duration-300">
              <span className="text-4xl font-serif text-[#D5B750] block mb-3 group-hover:scale-110 transition-transform">
                03.
              </span>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Spirits & Sweet Endings
              </h3>
              <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                Gimlet 1854, Amrut Single Malts, Maharaja Mules, Paan Kulfi, and Gulab Jamun Brûlée.
              </p>
              <Link to="/menus?tab=spirit" className="text-[#D5B750] font-bold text-sm uppercase tracking-wider hover:underline">
                Explore Items →
              </Link>
            </div>
          </div>

          <Link to="/menus" className="btn-primary shadow-xl">
            Explore Full Menus
          </Link>
        </div>
      </section>

      {/* ====================================================================
          4. CELEBRATIONS / EVENTS CTA SECTION
          ==================================================================== */}
      <section
        className="py-20 text-center relative text-[#10442E] border-b border-[#D5B750]/30"
        style={{
          backgroundColor: "#FAF2E8",
          backgroundImage: 'url("/images/brand/banner-bg.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container-custom max-w-3xl px-6">
          <SectionTitle
            title="Where Every Celebration Becomes a Story to Remember"
            subtitle="Memorable Occasions"
            divider="gold"
          />
          <p className="text-[#333] text-base sm:text-lg mb-8 leading-relaxed font-normal">
            From grand milestone birthdays and weddings to romantic anniversaries and corporate galas, London Arms provides Melbourne's most distinctive multi-level venue.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/events" className="btn-primary shadow-md">
              Explore Events
            </Link>
            <BookingButton variant="secondary">
              Reserve Dining
            </BookingButton>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. DISCOVER THE SPACES SECTION
          ==================================================================== */}
      <section className="section-spacing bg-[#FAF2E8]">
        <div className="container-custom">
          <SectionTitle
            title="Discover Our Spaces"
            subtitle="Historic Multi-Level Venue"
            divider="border"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Space 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-[#D5B750]/30 flex flex-col group hover:shadow-xl transition-all">
              <div className="h-60 overflow-hidden relative">
                <img
                  src="/images/restaurant/interior-01.png"
                  alt="Ground Floor Restaurant & Bar"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#10442E] text-[#D5B750] text-xs font-bold uppercase tracking-wider py-1 px-3 rounded shadow">
                  Ground Floor
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#10442E] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    Restaurant & Bar
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    A dining space where British tradition meets Indian vibrance. Enjoy signature dishes and handcrafted cocktails in a warm, heritage-inspired setting.
                  </p>
                </div>
                <Link to="/about-us" className="text-[#10442E] font-bold text-sm hover:text-[#A73230] inline-flex items-center gap-1">
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>

            {/* Space 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-[#D5B750]/30 flex flex-col group hover:shadow-xl transition-all">
              <div className="h-60 overflow-hidden relative">
                <img
                  src="/images/first-floor/first-floor.jpg"
                  alt="First Floor Event Space"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#10442E] text-[#D5B750] text-xs font-bold uppercase tracking-wider py-1 px-3 rounded shadow">
                  First Floor
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#10442E] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    Event Space & Lounge
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    An exclusive floor designed for private events and celebrations. With elegant interiors, dedicated bar, and layout flexibility, it is ideal for birthdays and receptions.
                  </p>
                </div>
                <Link to="/first-floor" className="text-[#10442E] font-bold text-sm hover:text-[#A73230] inline-flex items-center gap-1">
                  View Floor <span>→</span>
                </Link>
              </div>
            </div>

            {/* Space 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-[#D5B750]/30 flex flex-col group hover:shadow-xl transition-all">
              <div className="h-60 overflow-hidden relative">
                <img
                  src="/images/rooftop/barcode.jpg"
                  alt="Barcode Rooftop"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#10442E] text-[#D5B750] text-xs font-bold uppercase tracking-wider py-1 px-3 rounded shadow">
                  Rooftop
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#10442E] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    Barcode by London Arms
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    A one-of-a-kind rooftop bar where evenings come alive — perfect for cocktail nights, festive dinners, and private parties under the open sky.
                  </p>
                </div>
                <Link to="/rooftop" className="text-[#10442E] font-bold text-sm hover:text-[#A73230] inline-flex items-center gap-1">
                  Experience Rooftop <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. RESTAURANT & BAR (with photo carousel)
          ==================================================================== */}
      <section className="section-spacing bg-white border-y border-[#D5B750]/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Carousel */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-[#D5B750]/40 h-[360px] sm:h-[440px]">
              <img
                src={restaurantSlides[restaurantIndex]}
                alt="Restaurant & Bar Interior"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <button
                onClick={() => setRestaurantIndex((prev) => (prev === 0 ? restaurantSlides.length - 1 : prev - 1))}
                className="carousel-arrow-btn left-4"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={() => setRestaurantIndex((prev) => (prev + 1) % restaurantSlides.length)}
                className="carousel-arrow-btn right-4"
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            {/* Right: Description */}
            <div className="flex flex-col justify-center">
              <SectionTitle
                title="Restaurant & Bar"
                subtitle="Ground Floor Experience"
                divider="one"
                align="left"
              />

              <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Step into a world of flavour at London Arms. The restaurant celebrates the rich warmth of Indian cuisine alongside the comforting classics of Britain, reimagined with a modern touch.
              </p>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
                Our bar is the perfect setting to unwind, with hand-crafted cocktails, premium single malts, and an atmosphere that carries the soul of both cultures. Whether you join us for an intimate dinner or a lively evening drink, warmth and refinement greet you at every turn.
              </p>

              <div>
                <BookingButton variant="primary">
                  Book A Table
                </BookingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. KING’S COURT — PRIVATE DINING
          ==================================================================== */}
      <section
        className="section-spacing text-white relative"
        style={{
          backgroundColor: "#10442E",
          backgroundImage: 'url("/images/brand/pattern-dark.png")',
          backgroundRepeat: "repeat"
        }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <SectionTitle
                title="King’s Court – Private Dining"
                subtitle="Exclusive Royal Vault"
                divider="border"
                align="left"
                light={true}
              />

              <blockquote className="border-l-2 border-[#D5B750] pl-4 italic text-[#D5B750] text-lg mb-6">
                “A private dining experience fit for royalty.”
              </blockquote>

              <p className="text-stone-200 text-base sm:text-lg leading-relaxed mb-6 font-light">
                The King’s Court is where celebrations take on a royal character. Designed for birthdays, anniversaries, and intimate gatherings with loved ones, this private dining room offers an atmosphere that blends elegance with warmth.
              </p>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
                Surrounded by décor that reflects both heritage and sophistication, the space provides the perfect backdrop for moments that deserve to be remembered. From carefully crafted menus to personalised service, every detail ensures your occasion feels intimate, elevated, and truly special.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/private-dining" className="btn-primary">
                  Book a Private Vault
                </Link>
                <Link to="/menus?tab=catering" className="btn-white">
                  View Banquet Menus
                </Link>
              </div>
            </div>

            {/* Right: Carousel */}
            <div className="order-1 lg:order-2 relative rounded-lg overflow-hidden shadow-2xl border-2 border-[#D5B750]/40 h-[360px] sm:h-[440px]">
              <img
                src={kingsCourtSlides[kingsCourtIndex]}
                alt="King's Court Private Dining"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <button
                onClick={() => setKingsCourtIndex((prev) => (prev === 0 ? kingsCourtSlides.length - 1 : prev - 1))}
                className="carousel-arrow-btn left-4"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={() => setKingsCourtIndex((prev) => (prev + 1) % kingsCourtSlides.length)}
                className="carousel-arrow-btn right-4"
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. BARCODE BY LONDON ARMS (ROOFTOP)
          ==================================================================== */}
      <section className="section-spacing bg-[#FAF2E8] border-b border-[#D5B750]/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Carousel */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-[#D5B750]/40 h-[360px] sm:h-[440px]">
              <img
                src={barcodeSlides[barcodeIndex]}
                alt="Barcode Rooftop Bar"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <button
                onClick={() => setBarcodeIndex((prev) => (prev === 0 ? barcodeSlides.length - 1 : prev - 1))}
                className="carousel-arrow-btn left-4"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={() => setBarcodeIndex((prev) => (prev + 1) % barcodeSlides.length)}
                className="carousel-arrow-btn right-4"
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            {/* Right: Description */}
            <div className="flex flex-col justify-center">
              <SectionTitle
                title="Barcode by London Arms"
                subtitle="Open-Air Rooftop Bar"
                divider="border"
                align="left"
              />

              <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-6">
                Where the night throws off its rules — Barcode is the rooftop made for dancing feet, loud laughter, and endless celebrations beneath the stars.
              </p>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
                It’s the place where music sets the pace, cocktails keep flowing, and the energy never fades. Designed as a playground for night parties, Barcode brings together culture, rhythm, and connection in a way that feels alive and unforgettable. More than a rooftop, it’s the heartbeat of every late-night story waiting to be written.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/events" className="btn-secondary">
                  Enquire
                </Link>
                <Link to="/rooftop" className="btn-primary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          9. EVENTS SECTION
          ==================================================================== */}
      <section className="section-spacing bg-white border-b border-[#D5B750]/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <SectionTitle
                title="EVENTS"
                subtitle="Weddings, Milestones & Corporate"
                divider="border"
                align="left"
              />

              <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-4">
                From grand celebrations to intimate gatherings, our venue offers the perfect setting for every occasion. With elegant interiors, curated menus, and a vibrant atmosphere, we transform your events into unforgettable experiences. Birthdays, engagements, anniversaries, or cultural festivities — every celebration finds its home here.
              </p>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
                Our rooftop adds another dimension to your events, offering an exclusive open-air space perfect for cocktail evenings, festive dinners, and private parties. Whether you choose the intimacy of our indoor settings or the energy of the rooftop, every occasion is crafted to feel timeless, elegant, and truly memorable.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/events" className="btn-secondary">
                  Event Guide
                </Link>
                <Link to="/events#enquire" className="btn-primary">
                  Enquire
                </Link>
              </div>
            </div>

            {/* Right: Carousel */}
            <div className="order-1 lg:order-2 relative rounded-lg overflow-hidden shadow-2xl border-2 border-[#D5B750]/40 h-[360px] sm:h-[440px]">
              <img
                src={eventsSlides[eventsIndex]}
                alt="London Arms Events"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <button
                onClick={() => setEventsIndex((prev) => (prev === 0 ? eventsSlides.length - 1 : prev - 1))}
                className="carousel-arrow-btn left-4"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={() => setEventsIndex((prev) => (prev + 1) % eventsSlides.length)}
                className="carousel-arrow-btn right-4"
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          10. LONDON ARMS GALLERY PREVIEW
          ==================================================================== */}
      <section className="section-spacing bg-[#FAF2E8] border-b border-[#D5B750]/30 text-center">
        <div className="container-custom">
          <SectionTitle
            title="London Arms Gallery"
            subtitle="Moments Captured"
            divider="gold"
          />

          <p className="text-stone-600 max-w-xl mx-auto mb-10 text-sm sm:text-base">
            Glimpse into our heritage dining spaces, rooftop bar celebrations, signature culinary creations, and handcrafted cocktails.
          </p>

          <div className="relative max-w-4xl mx-auto h-[400px] sm:h-[480px] rounded-lg overflow-hidden shadow-2xl border-2 border-[#D5B750]/40 mb-8">
            <img
              src={gallerySlides[galleryIndex].src}
              alt={gallerySlides[galleryIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <h4 className="text-white text-xl font-bold tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                {gallerySlides[galleryIndex].title}
              </h4>
            </div>

            <button
              onClick={() => setGalleryIndex((prev) => (prev === 0 ? gallerySlides.length - 1 : prev - 1))}
              className="carousel-arrow-btn left-4"
              aria-label="Previous gallery image"
            >
              ‹
            </button>
            <button
              onClick={() => setGalleryIndex((prev) => (prev + 1) % gallerySlides.length)}
              className="carousel-arrow-btn right-4"
              aria-label="Next gallery image"
            >
              ›
            </button>
          </div>

          <Link to="/gallery" className="btn-primary">
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* ====================================================================
          11. FREQUENTLY ASKED QUESTIONS (Accordion)
          ==================================================================== */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Everything You Need To Know"
            divider="gold"
          />

          <div className="space-y-4 mt-8">
            {faqData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-[#D5B750]/40 rounded-lg overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between p-5 bg-[#FAF2E8] text-left hover:bg-[#D5B750]/10 transition-colors focus:outline-none"
                  >
                    <span
                      className="text-base sm:text-lg font-bold text-[#10442E] pr-4"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {faq.question}
                    </span>
                    <span className="text-[#A73230] shrink-0 font-bold text-xl">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-white text-stone-700 text-sm sm:text-base leading-relaxed border-t border-[#D5B750]/20">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
