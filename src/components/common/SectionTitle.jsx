import React from "react";

export default function SectionTitle({
  title,
  subtitle,
  divider = "gold", // "gold" | "border" | "one"
  align = "center",
  light = false,
  className = ""
}) {
  const dividerSrc =
    divider === "border"
      ? "/images/brand/divider-border.png"
      : divider === "one"
      ? "/images/brand/divider-1.png"
      : "/images/brand/divider-gold.png";

  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  return (
    <div className={`mb-8 ${alignClass} ${className}`}>
      {subtitle && (
        <p
          className={`text-sm uppercase tracking-widest font-semibold mb-2 ${
            light ? "text-[#D5B750]" : "text-[#A73230]"
          }`}
          style={{ letterSpacing: "0.15em" }}
        >
          {subtitle}
        </p>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight ${
          light ? "text-white" : "text-[#10442E]"
        }`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>

      <div className={`flex ${align === "left" ? "justify-start" : align === "right" ? "justify-end" : "justify-center"} mt-3`}>
        <img
          src={dividerSrc}
          alt=""
          aria-hidden="true"
          className="h-auto max-w-[240px] sm:max-w-[320px] object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
