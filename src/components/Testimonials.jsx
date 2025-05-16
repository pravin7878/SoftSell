// TestimonialSection.jsx

import React from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "IT Manager",
    company: "TechNova",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "SoftSell made it so easy to turn our unused licenses into cash. The process was quick and transparent!",
  },
  {
    name: "John Lee",
    role: "CFO",
    company: "FinEdge Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "We recovered significant value from old software thanks to SoftSell. Highly recommended!",
  },
];

const TestimonialSection = () => (
  <section className="bg-gradient-to-b from-[#070707] to-gray-900 py-20 px-4" id="testimonials">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
      <p className="text-gray-300 max-w-xl mx-auto">
        Businesses trust SoftSell to unlock value from unused software. Here’s what our clients say:
      </p>
    </div>
    <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="bg-white/10 backdrop-blur rounded-xl shadow-lg p-8 flex-1 flex flex-col items-center border border-purple-400/30 hover:scale-105 transition-transform duration-300"
        >
          <img
            src={t.image}
            alt={t.name}
            className="w-20 h-20 rounded-full border-4 border-purple-500 shadow-lg mb-4"
          />
          <p className="text-lg text-white italic mb-4">&ldquo;{t.quote}&rdquo;</p>
          <div className="text-purple-300 font-semibold">{t.name}</div>
          <div className="text-gray-400 text-sm">{t.role}, {t.company}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialSection;