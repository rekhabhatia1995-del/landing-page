import React from "react";
import { siteConfig } from "../../data/siteConfig";

export default function BookingButton({
  children = "Book A Table",
  variant = "primary", // primary | secondary | white
  className = "",
  target = "_blank",
  rel = "noopener noreferrer"
}) {
  const baseClass =
    variant === "secondary"
      ? "btn-secondary"
      : variant === "white"
      ? "btn-white"
      : "btn-primary";

  return (
    <a
      href={siteConfig.bookingUrl}
      target={target}
      rel={rel}
      className={`${baseClass} ${className}`}
      id="booking-cta-btn"
    >
      <span>{children}</span>
    </a>
  );
}
