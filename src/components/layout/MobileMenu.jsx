import React from "react";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-start">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div
        className="relative z-10 w-full max-h-[90vh] overflow-y-auto bg-[#10442E] text-white shadow-2xl border-b-2 border-[#D5B750]"
        style={{
          backgroundImage: 'url("/images/brand/pattern-dark.png")',
          backgroundRepeat: "repeat"
        }}
      >
        {/* Header inside drawer */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D5B750]/30">
          <img
            src="/images/brand/logo.webp"
            alt="London Arms"
            className="h-12 w-auto object-contain"
          />
          <button
            onClick={onClose}
            className="p-2 text-[#D5B750] hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation list */}
        <nav className="px-6 py-6 space-y-1">
          {siteConfig.navLinks.map((item) => (
            <div key={item.path}>
              <NavLink
                to={item.path}
                onClick={onClose}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `block py-2.5 px-4 text-center text-lg font-medium tracking-wide rounded transition-all ${
                    isActive
                      ? "bg-[#D5B750] text-[#10442E] font-bold shadow-md"
                      : "text-white/90 hover:bg-[#D5B750]/20 hover:text-[#D5B750]"
                  }`
                }
              >
                {item.label}
              </NavLink>

              {item.subItems && (
                <div className="pl-4 pr-4 py-1 space-y-1 bg-black/20 rounded-md my-1">
                  {item.subItems.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      onClick={onClose}
                      className="block py-1.5 px-3 text-center text-sm text-[#D5B750] hover:text-white"
                    >
                      — {sub.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Direct booking CTA button in mobile drawer */}
          <div className="pt-6 pb-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3.5 px-6 text-center bg-[#D5B750] hover:bg-white text-[#10442E] font-bold text-base uppercase tracking-wider rounded transition-all shadow-lg"
              id="mobile-book-table-btn"
            >
              Book A Table
            </a>
          </div>

          <div className="text-center pt-2 pb-4 text-xs text-white/60 space-y-1">
            <p>160 Clarendon St, South Melbourne VIC 3205</p>
            <p>+61 421 620 706 | info@londonarms.com.au</p>
          </div>
        </nav>
      </div>
    </div>
  );
}
