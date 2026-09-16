import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) errs.phone = "Please enter your mobile number.";
    if (!formData.message.trim()) errs.message = "Please enter your message.";
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

    // Simulate API submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    }, 900);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-[#D5B750]/30">
      <h3
        className="text-2xl font-bold text-[#10442E] mb-2"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Send Us a Message
      </h3>
      <p className="text-sm text-[#555] mb-6">
        Have a question or special request? We'd love to hear from you.
      </p>

      {status === "success" && (
        <div className="mb-6 p-4 bg-[#10442E]/10 border border-[#10442E] text-[#10442E] rounded text-sm">
          <strong>Thank you!</strong> Your message has been received. Our team will contact you shortly.
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-100 border border-red-500 text-red-700 rounded text-sm">
          Something went wrong. Please try again or give us a call directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#10442E] mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Eleanor Vance"
            className={`w-full px-4 py-2.5 text-sm border rounded focus:outline-none transition-colors ${
              errors.name ? "border-red-500 bg-red-50" : "border-stone-300 focus:border-[#10442E]"
            }`}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#10442E] mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className={`w-full px-4 py-2.5 text-sm border rounded focus:outline-none transition-colors ${
                errors.email ? "border-red-500 bg-red-50" : "border-stone-300 focus:border-[#10442E]"
              }`}
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#10442E] mb-1.5">
              Mobile Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+61 400 000 000"
              className={`w-full px-4 py-2.5 text-sm border rounded focus:outline-none transition-colors ${
                errors.phone ? "border-red-500 bg-red-50" : "border-stone-300 focus:border-[#10442E]"
              }`}
            />
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#10442E] mb-1.5">
            Your Message *
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your enquiry, special requests, or feedback..."
            className={`w-full px-4 py-2.5 text-sm border rounded focus:outline-none transition-colors ${
              errors.message ? "border-red-500 bg-red-50" : "border-stone-300 focus:border-[#10442E]"
            }`}
          />
          {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full shadow hover:shadow-lg disabled:opacity-50"
          id="contact-form-submit-btn"
        >
          {status === "loading" ? "Sending..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
}
