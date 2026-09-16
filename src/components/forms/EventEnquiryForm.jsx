import React, { useState } from "react";

export default function EventEnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    preferredSpace: "",
    eventDate: "",
    guestCount: "",
    details: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) errs.phone = "Please enter your phone number.";
    if (!formData.eventType) errs.eventType = "Please select an event type.";
    if (!formData.preferredSpace) errs.preferredSpace = "Please select your preferred space.";
    if (!formData.eventDate) errs.eventDate = "Please choose a preferred date.";
    if (!formData.guestCount) errs.guestCount = "Please provide estimated guest count.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        eventType: "",
        preferredSpace: "",
        eventDate: "",
        guestCount: "",
        details: ""
      });
    }, 1000);
  };

  return (
    <div className="bg-[#FAF2E8] p-6 sm:p-10 rounded-lg shadow-lg border border-[#D5B750]/40 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h3
          className="text-2xl sm:text-3xl font-bold text-[#10442E] mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Plan Your Celebration
        </h3>
        <p className="text-sm text-[#555] max-w-xl mx-auto">
          Your story begins here. Fill out the form below or contact our dedicated events team directly — we will help bring your celebration to life.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 p-5 bg-[#10442E] text-white rounded text-sm text-center shadow-md">
          <h4 className="text-lg font-bold text-[#D5B750] mb-1">Enquiry Received!</h4>
          <p>
            Thank you for considering London Arms. Our event specialist will review your details and be in touch within 24 hours.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Full Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#10442E] mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Marcus & Julia Sterling"
              className={`w-full px-4 py-2.5 text-sm bg-white border rounded focus:outline-none transition-colors ${
                errors.fullName ? "border-red-500 bg-red-50" : "border-stone-300 focus:border-[#10442E]"
              }`}
            />
            {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#10442E] mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="events@example.com"
              className={`w-full px-4 py-2.5 text-sm bg-white border rounded focus:outline-none transition-colors ${
                errors.email ? "border-red-500 bg-red-50" : "border-stone-300 focus:border-[#10442E]"
              }`}
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Phone & Event Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#10442E] mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+61 400 123 456"
              className={`w-full px-4 py-2.5 text-sm bg-white border rounded focus:outline-none transition-colors ${
                errors.phone ? "border-red-500 bg-red-50" : "border-stone-300 focus:border-[#10442E]"
              }`}
            />
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#10442E] mb-1.5">
              Event Type *
            </label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 text-sm bg-white border rounded focus:outline-none transition-colors ${
                errors.eventType ? "border-red-500 bg-red-50" : "border-stone-300 focus:border-[#10442E]"
              }`}
            >
              <option value="">Select Event Type</option>
              <option value="Wedding / Engagement">Wedding / Engagement</option>
              <option value="Birthday Party">Birthday Party</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Festive Gathering">Festive Gathering</option>
              <option value="Private Dining">Private Dining (King's Court)</option>
              <option value="Other">Other Celebration</option>
            </select>
            {errors.eventType && <p className="text-xs text-red-600 mt-1">{errors.eventType}</p>}
          </div>
        </div>

        {/* Preferred Space & Guests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#10442E] mb-1.5">
              Preferred Space *
            </label>
            <select
              name="preferredSpace"
              value={formData.preferredSpace}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 text-sm bg-white border rounded focus:outline-none transition-colors ${
                errors.preferredSpace ? "border-red-500 bg-red-50" : "border-stone-300 focus:border-[#10442E]"
              }`}
            >
              <option value="">Select Space</option>
              <option value="Ground Floor - Fine Dine & Bar">Ground Floor – Restaurant & Bar</option>
              <option value="First Floor - Barcode Lounge">First Floor – Event Lounge</option>
              <option value="Rooftop Bar - Under the Sky">Rooftop Bar – Barcode</option>
              <option value="King's Court - Private Dining">King's Court – Private Dining</option>
              <option value="Flexible / Multiple Floors">Flexible / Multiple Floors</option>
            </select>
            {errors.preferredSpace && <p className="text-xs text-red-600 mt-1">{errors.preferredSpace}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#10442E] mb-1.5">
              Estimated Number of Guests *
            </label>
            <input
              type="number"
              name="guestCount"
              min="1"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="e.g. 50"
              className={`w-full px-4 py-2.5 text-sm bg-white border rounded focus:outline-none transition-colors ${
                errors.guestCount ? "border-red-500 bg-red-50" : "border-stone-300 focus:border-[#10442E]"
              }`}
            />
            {errors.guestCount && <p className="text-xs text-red-600 mt-1">{errors.guestCount}</p>}
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#10442E] mb-1.5">
            Preferred Date *
          </label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 text-sm bg-white border rounded focus:outline-none transition-colors ${
              errors.eventDate ? "border-red-500 bg-red-50" : "border-stone-300 focus:border-[#10442E]"
            }`}
          />
          {errors.eventDate && <p className="text-xs text-red-600 mt-1">{errors.eventDate}</p>}
        </div>

        {/* Additional Details */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#10442E] mb-1.5">
            Additional Details or Vision
          </label>
          <textarea
            name="details"
            rows="3"
            value={formData.details}
            onChange={handleChange}
            placeholder="Tell us about your timing, food & beverage preferences, audio-visual needs, or special touches..."
            className="w-full px-4 py-2.5 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-[#10442E] transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full shadow-md hover:shadow-lg py-3.5 text-base font-bold uppercase tracking-wider disabled:opacity-50"
          id="event-enquiry-submit-btn"
        >
          {status === "loading" ? "Submitting Request..." : "Submit Event Enquiry"}
        </button>
      </form>
    </div>
  );
}
