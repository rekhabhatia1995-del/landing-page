import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      {/* Upper Main Footer Section */}
      <div
        className="w-full py-16 px-6 sm:px-12 border-t border-[#D5B750]/30"
        style={{
          backgroundColor: "#FAF2E8",
          backgroundImage: 'url("/images/brand/banner-bg.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Column 1: Opening Times */}
          <div className="flex flex-col">
            <h4
              className="text-xl sm:text-2xl font-semibold text-[#10442E] mb-5 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Opening Times
            </h4>
            <div className="flex items-start space-x-3 text-[#10442E]/90 text-[16px]">
              <span className="text-[#A73230] mt-1 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <p className="leading-relaxed font-medium">
                {siteConfig.hours}
              </p>
            </div>
            <p className="text-sm text-[#555] mt-4 leading-relaxed">
              Weekend Brunch available Friday, Saturday & Sunday. Reservations highly recommended.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h4
              className="text-xl sm:text-2xl font-semibold text-[#10442E] mb-5 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[16px] font-medium text-[#10442E]">
              <li>
                <Link to="/about-us" className="hover:text-[#A73230] transition-colors flex items-center gap-2">
                  <span className="text-[#D5B750]">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/menus" className="hover:text-[#A73230] transition-colors flex items-center gap-2">
                  <span className="text-[#D5B750]">›</span> Menus
                </Link>
              </li>
              <li>
                <Link to="/private-dining" className="hover:text-[#A73230] transition-colors flex items-center gap-2">
                  <span className="text-[#D5B750]">›</span> Private Dining (King's Court)
                </Link>
              </li>
              <li>
                <Link to="/first-floor" className="hover:text-[#A73230] transition-colors flex items-center gap-2">
                  <span className="text-[#D5B750]">›</span> First Floor Event Space
                </Link>
              </li>
              <li>
                <Link to="/rooftop" className="hover:text-[#A73230] transition-colors flex items-center gap-2">
                  <span className="text-[#D5B750]">›</span> Rooftop Barcode
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#A73230] transition-colors flex items-center gap-2">
                  <span className="text-[#D5B750]">›</span> Events & Bookings
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-[#A73230] transition-colors flex items-center gap-2">
                  <span className="text-[#D5B750]">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col">
            <h4
              className="text-xl sm:text-2xl font-semibold text-[#10442E] mb-5 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact
            </h4>
            <ul className="space-y-4 text-[15px] text-[#10442E]/90">
              <li className="flex items-start space-x-3">
                <span className="text-[#A73230] mt-1 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-[#A73230] font-medium transition-colors">
                  {siteConfig.phone}
                </a>
              </li>

              <li className="flex items-start space-x-3">
                <span className="text-[#A73230] mt-1 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-[#A73230] font-medium transition-colors">
                    {siteConfig.email}
                  </a>
                  <a href={`mailto:${siteConfig.eventsEmail}`} className="hover:text-[#A73230] font-medium transition-colors text-sm text-[#555]">
                    {siteConfig.eventsEmail} (Events)
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <span className="text-[#A73230] mt-1 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <a
                  href={siteConfig.addressUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A73230] transition-colors leading-relaxed"
                >
                  {siteConfig.address}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div
        className="w-full py-5 px-6 text-center text-white text-sm"
        style={{
          backgroundColor: "#10442E",
          backgroundImage: 'url("/images/brand/bg-2.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3 text-xs tracking-wider">
          <p className="text-white/80">
            Copyright © 2025, London Arms. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4 text-white/70">
            <Link to="/about-us" className="hover:text-[#D5B750]">About</Link>
            <span>•</span>
            <Link to="/menus" className="hover:text-[#D5B750]">Menus</Link>
            <span>•</span>
            <Link to="/contact-us" className="hover:text-[#D5B750]">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
