import React from "react";

const WhyChooseUs = () => (
  <div className="bg-black">
    <section
      id="why"
      className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
    >
      <div className="relative mx-auto max-w-5xl text-center">
        <span className="text-purple-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
          Why Choose SoftSell
        </span>
        <h2 className="block w-full bg-gradient-to-b from-white to-purple-300 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
          The Smart Way to Sell Unused Software Licenses
        </h2>
        <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-purple-200">
          We make software license resale simple, secure, and profitable for your business.
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Trusted Experts */}
        <div className="rounded-md border border-purple-700 bg-neutral-900/50 p-8 text-center shadow">
          <div
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-purple-500 bg-gradient-to-br from-purple-600 to-purple-800"
          >
            {/* Shield Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l7 4v4c0 5-3.5 9-7 9s-7-4-7-9V8l7-4z" />
            </svg>
          </div>
          <h3 className="mt-6 text-purple-200 font-semibold">Trusted Experts</h3>
          <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-purple-100">
            Years of experience in software asset management and resale.
          </p>
        </div>
        {/* Fast & Secure Payments */}
        <div className="rounded-md border border-purple-700 bg-neutral-900/50 p-8 text-center shadow">
          <div
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-purple-500 bg-gradient-to-br from-purple-600 to-purple-800"
          >
            {/* Lightning Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="mt-6 text-purple-200 font-semibold">Fast & Secure Payments</h3>
          <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-purple-100">
            Get paid quickly with secure transactions and transparent pricing.
          </p>
        </div>
        {/* Zero Hassle */}
        <div className="rounded-md border border-purple-700 bg-neutral-900/50 p-8 text-center shadow">
          <div
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-purple-500 bg-gradient-to-br from-purple-600 to-purple-800"
          >
            {/* Checkmark Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="mt-6 text-purple-200 font-semibold">Zero Hassle</h3>
          <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-purple-100">
            We handle all paperwork and license transfers for you.
          </p>
        </div>
        {/* Sustainable Choice */}
        <div className="rounded-md border border-purple-700 bg-neutral-900/50 p-8 text-center shadow">
          <div
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-purple-500 bg-gradient-to-br from-purple-600 to-purple-800"
          >
            {/* Leaf Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 21c0-7.732 6.268-14 14-14a1 1 0 011 1c0 7.732-6.268 14-14 14a1 1 0 01-1-1z" />
            </svg>
          </div>
          <h3 className="mt-6 text-purple-200 font-semibold">Sustainable Choice</h3>
          <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-purple-100">
            Give unused software a second life and support a greener planet.
          </p>
        </div>
      </div>

      {/* Decorative gradients */}
      <div
        className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
        style={{
          backgroundImage: "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
          borderColor: "rgba(92, 79, 240, 0.2)",
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
        style={{
          backgroundImage: "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
          borderColor: "rgba(92, 79, 240, 0.2)",
        }}
      ></div>
    </section>
  </div>
);

export default WhyChooseUs;