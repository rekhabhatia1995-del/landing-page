import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-[#FAF2E8] py-20 px-6">
      <div className="max-w-lg text-center bg-white p-10 rounded-lg shadow-xl border border-[#D5B750]/40">
        <span className="text-6xl font-serif text-[#A73230] block mb-4">
          404
        </span>
        <SectionTitle
          title="Page Not Found"
          subtitle="Heritage Destination"
          divider="gold"
        />
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
          The page you are looking for may have moved or no longer exists. Let us escort you back to the main hall.
        </p>
        <Link to="/" className="btn-primary">
          Return to London Arms
        </Link>
      </div>
    </div>
  );
}
