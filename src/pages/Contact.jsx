import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import BookingButton from "../components/common/BookingButton";
import ContactForm from "../components/forms/ContactForm";
import { siteConfig } from "../data/siteConfig";

export default function Contact() {
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
            title="Contact Us"
            subtitle="Get In Touch"
            divider="gold"
            light={true}
          />
          <p className="text-stone-200 text-base sm:text-lg leading-relaxed font-light">
            We are located in the heart of South Melbourne, ready to welcome you for dinners, rooftop drinks, and celebrations.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-spacing bg-[#FAF2E8]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Details & Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <SectionTitle
                  title="Contact Information"
                  subtitle="We Are Here To Assist"
                  divider="one"
                  align="left"
                />
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  Whether booking a romantic dinner, planning a milestone event, or enquiring about our seasonal menus, our team is at your service.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg border border-[#D5B750]/30 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#10442E] text-[#D5B750] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#10442E] mb-1">
                      Our Address
                    </h4>
                    <p className="text-stone-700 text-sm">
                      {siteConfig.address}
                    </p>
                    <a
                      href={siteConfig.addressUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#A73230] hover:underline mt-1 inline-block"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-[#D5B750]/30 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#10442E] text-[#D5B750] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#10442E] mb-1">
                      Telephone
                    </h4>
                    <a href={`tel:${siteConfig.phoneRaw}`} className="text-stone-700 text-sm hover:text-[#A73230] font-medium">
                      {siteConfig.phone}
                    </a>
                    <p className="text-xs text-stone-500 mt-0.5">Lines open daily from 2:00 PM</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-[#D5B750]/30 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#10442E] text-[#D5B750] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#10442E] mb-1">
                      Email
                    </h4>
                    <p>
                      <a href={`mailto:${siteConfig.email}`} className="text-stone-700 text-sm hover:text-[#A73230]">
                        {siteConfig.email}
                      </a>
                    </p>
                    <p>
                      <a href={`mailto:${siteConfig.eventsEmail}`} className="text-stone-700 text-sm hover:text-[#A73230]">
                        {siteConfig.eventsEmail} (Private Events)
                      </a>
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-[#D5B750]/30 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#10442E] text-[#D5B750] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#10442E] mb-1">
                      Dining Hours
                    </h4>
                    <p className="text-stone-700 text-sm">
                      {siteConfig.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-2">
                <BookingButton className="w-full">
                  Book A Table Online
                </BookingButton>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="w-full h-80 bg-stone-300 relative">
        <iframe
          title="London Arms Location"
          src="https://maps.google.com/maps?q=160%20Clarendon%20St,%20South%20Melbourne%20VIC%203205&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </section>
    </div>
  );
}
