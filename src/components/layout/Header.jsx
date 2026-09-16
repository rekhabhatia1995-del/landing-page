import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menusDropdownOpen, setMenusDropdownOpen] = useState(false);

  return (
    <>
      {/* ====================================================================
          DESKTOP SIDEBAR HEADER (Matches Live Elementor > 1024px fixed left)
          ==================================================================== */}
      <aside
        className="hidden lg:flex fixed top-0 left-0 bottom-0 w-[300px] h-screen flex-col justify-between items-center py-10 px-6 z-50 overflow-y-auto text-white shadow-2xl border-r border-[#D5B750]/20"
        style={{
          backgroundColor: "#10442E",
          backgroundImage: 'url("/images/brand/pattern-dark.png")',
          backgroundRepeat: "repeat"
        }}
      >
        {/* Top: Logo */}
        <div className="w-full flex flex-col items-center">
          <Link to="/" className="block group text-center transition-transform duration-300 hover:scale-105">
            <img
              src="/images/brand/logo.webp"
              alt="London Arms"
              width="240"
              height="206"
              className="w-[200px] max-w-full h-auto object-contain drop-shadow-md mx-auto"
            />
          </Link>
          <div className="w-24 h-[1px] bg-[#D5B750]/40 my-6" />
        </div>

        {/* Center: Vertical Navigation */}
        <nav className="w-full flex-1 flex flex-col justify-center my-2 space-y-1">
          {siteConfig.navLinks.map((item) => {
            const hasSub = !!item.subItems;

            return (
              <div key={item.path} className="relative group w-full">
                <div className="flex items-center justify-between">
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `w-full text-center py-2 px-3 text-[15px] font-medium uppercase tracking-[0.08em] transition-all duration-200 rounded ${
                        isActive
                          ? "bg-[#D5B750] text-[#10442E] font-bold shadow-sm"
                          : "text-white/90 hover:bg-[#D5B750]/20 hover:text-[#D5B750]"
                      }`
                    }
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.label}
                  </NavLink>

                  {hasSub && (
                    <button
                      onClick={() => setMenusDropdownOpen(!menusDropdownOpen)}
                      className="absolute right-2 text-[#D5B750] hover:text-white p-1"
                      aria-label="Toggle sub-menu"
                    >
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          menusDropdownOpen ? "rotate-90" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Submenu for Menus */}
                {hasSub && menusDropdownOpen && (
                  <div className="mt-1 py-1 px-2 bg-black/25 rounded border-l-2 border-[#D5B750] space-y-1">
                    {item.subItems.map((sub) => (
                      <NavLink
                        key={sub.path}
                        to={sub.path}
                        className="block py-1 text-center text-xs tracking-wider text-[#D5B750] hover:text-white transition-colors"
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Bottom: Central OpenTable Booking CTA */}
        <div className="w-full pt-4 text-center">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full shadow-lg"
            id="desktop-book-table-btn"
          >
            Book A Table
          </a>
          <p className="text-[11px] text-[#D5B750]/70 mt-3 tracking-widest uppercase">
            160 Clarendon St, South Melbourne
          </p>
        </div>
      </aside>

      {/* ====================================================================
          MOBILE & TABLET TOP HEADER (Matches Live Elementor ≤ 1024px)
          ==================================================================== */}
      <header
        className="lg:hidden fixed top-0 left-0 right-0 h-[70px] flex items-center justify-between px-4 sm:px-6 z-40 text-white shadow-md border-b border-[#D5B750]/30"
        style={{
          backgroundColor: "#10442E",
          backgroundImage: 'url("/images/brand/pattern-dark.png")',
          backgroundRepeat: "repeat"
        }}
      >
        <Link to="/" className="flex items-center">
          <img
            src="/images/brand/logo.webp"
            alt="London Arms"
            className="h-11 sm:h-12 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center space-x-3">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex py-1.5 px-3.5 bg-[#D5B750] text-[#10442E] font-bold text-xs uppercase tracking-wider rounded"
          >
            Book Table
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-[#D5B750] hover:text-white focus:outline-none"
            aria-label="Open navigation menu"
            id="mobile-menu-toggle-btn"
          >
            <svg
              className="w-8 h-8"
              viewBox="0 0 1000 1000"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
