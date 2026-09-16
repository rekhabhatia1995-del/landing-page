import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import BookingButton from "../components/common/BookingButton";
import EventEnquiryForm from "../components/forms/EventEnquiryForm";
import { spacesData } from "../data/events";

export default function Events() {
  const eventTypes = [
    {
      title: "Weddings & Engagements",
      desc: "An enchanting backdrop for your special union, combining stately elegance with royal feast menus and warm romantic ambiance.",
      icon: "💍"
    },
    {
      title: "Birthdays & Milestones",
      desc: "From milestone 21st, 30th, 50th celebrations to golden anniversaries, celebrate in our private dining rooms or full-floor lounges.",
      icon: "🎉"
    },
    {
      title: "Corporate Events & Dinners",
      desc: "Sophisticated private spaces equipped with AV, high-speed Wi-Fi, and custom banquet packages for end-of-year galas and executive meetings.",
      icon: "🍸"
    },
    {
      title: "Festive Gatherings & Cultural Events",
      desc: "Diwali, Christmas galas, Eid celebrations, and cultural festivals come alive with authentic feast menus, music, and vibrant décor.",
      icon: "✨"
    }
  ];

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
            title="Event Booking"
            subtitle="Celebrate With Us"
            divider="gold"
            light={true}
          />
          <p className="text-stone-200 text-base sm:text-lg leading-relaxed font-light">
            Where Every Celebration Becomes a Story to Remember. From elegant dinners to rooftop parties — London Arms sets the stage for unforgettable moments.
          </p>
        </div>
      </section>

      {/* Spaces Showcase */}
      <section className="section-spacing bg-[#FAF2E8] border-b border-[#D5B750]/30">
        <div className="container-custom">
          <SectionTitle
            title="Our Dedicated Spaces"
            subtitle="Tailored For Every Gathering"
            divider="gold"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {spacesData.map((space) => (
              <div
                key={space.id}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-[#D5B750]/30 flex flex-col justify-between group hover:shadow-xl transition-all"
              >
                <div>
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={space.image}
                      alt={space.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute bottom-3 right-3 bg-[#10442E] text-[#D5B750] text-xs font-bold px-3 py-1.5 rounded shadow">
                      {space.capacity}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3
                      className="text-2xl font-bold text-[#10442E] mb-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {space.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#A73230] mb-4">
                      {space.subtitle}
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {space.description}
                    </p>

                    <div className="border-t border-stone-100 pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#10442E] mb-2.5">
                        Key Features:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-stone-600">
                        {space.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <span className="text-[#D5B750]">✦</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 pt-2 flex items-center justify-between border-t border-stone-100">
                  <a
                    href="#enquiry-form"
                    className="btn-primary text-xs py-2 px-4"
                  >
                    Enquire This Space
                  </a>
                  <BookingButton variant="secondary" className="text-xs py-2 px-4">
                    Book Table
                  </BookingButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events We Host */}
      <section className="section-spacing bg-white border-b border-[#D5B750]/30">
        <div className="container-custom">
          <SectionTitle
            title="Events We Host"
            subtitle="Custom Experiences"
            divider="border"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {eventTypes.map((ev, idx) => (
              <div
                key={idx}
                className="bg-[#FAF2E8] p-6 rounded-lg border border-[#D5B750]/30 text-center flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl mb-4 block">{ev.icon}</span>
                  <h4
                    className="text-xl font-bold text-[#10442E] mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {ev.title}
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    {ev.desc}
                  </p>
                </div>
                <a
                  href="#enquiry-form"
                  className="text-xs font-bold uppercase text-[#A73230] hover:text-[#10442E] tracking-wider"
                >
                  Request Package →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry-form" className="section-spacing bg-[#FAF2E8]">
        <div className="container-custom">
          <EventEnquiryForm />
        </div>
      </section>
    </div>
  );
}
