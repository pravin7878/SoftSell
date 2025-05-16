// Example: HowItWorks.jsx

// import React from "react";

// const HowItWorks = () => (
//   <section className="flex py-20 flex-col justify-center">
//     <div className="w-full">
//       <div className="container mx-auto flex flex-col items-center gap-16">
//         <div className="flex flex-col gap-16">
//           <div className="flex flex-col gap-2 text-center">
//             <h2 className="mb-2 text-3xl font-extrabold leading-tight text-dark-grey-900 lg:text-4xl">
//               How SoftSell Works
//             </h2>
//             <p className="text-base font-medium leading-7 text-dark-grey-600">
//               Turn your unused software licenses into cash in three easy steps.
//             </p>
//           </div>
//         </div>
         
//         <div className="flex w-full flex-col items-center justify-between gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-0 xl:gap-x-10">
//           {/* Step 1 */}
//           <div className="flex items-start gap-4">
//              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#4318ff] transition hover:bg-[#4318ff] hover:text-white text-[#4318ff]">
//               <span className="text-base font-bold leading-7 ">1</span>
//             </div>
//             <div className="flex flex-col">
//               <h3 className="mb-2 text-base font-bold leading-tight text-dark-grey-900">
//                 Upload Your License
//               </h3>
//               <p className="text-base font-medium leading-7 text-dark-grey-600">
//                 Submit your unused software license details securely.
//               </p>
//             </div>
//           </div>
//           {/* Arrow */}
//           <div className="rotate-90 lg:rotate-0">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="43"
//               height="42"
//               viewBox="0 0 43 42"
//               fill="none"
//             >
//               <g clipPath="url(#clip0_3346_6663)">
//                 <path
//                   d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
//                   fill="#68769F"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_3346_6663">
//                   <rect
//                     width="42"
//                     height="42"
//                     fill="white"
//                     transform="translate(0.666748)"
//                   />
//                 </clipPath>
//               </defs>
//             </svg>
//           </div>
//           {/* Step 2 */}
//           <div className="flex items-start gap-4">
//            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#4318ff] transition hover:bg-[#4318ff] hover:text-white text-[#4318ff]">
//               <span className="text-base font-bold leading-7 ">2</span>
//             </div>
//             <div className="flex flex-col">
//               <h3 className="mb-2 text-base font-bold leading-tight text-dark-grey-900">
//                 Get a Valuation
//               </h3>
//               <p className="text-base font-medium leading-7 text-dark-grey-600">
//                 Receive a fair market offer from our experts within 24 hours.
//               </p>
//             </div>
//           </div>
//           {/* Arrow */}
//           <div className="rotate-90 lg:rotate-0">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="43"
//               height="42"
//               viewBox="0 0 43 42"
//               fill="none"
//             >
//               <g clipPath="url(#clip0_3346_6663)">
//                 <path
//                   d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
//                   fill="#68769F"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_3346_6663">
//                   <rect
//                     width="42"
//                     height="42"
//                     fill="white"
//                     transform="translate(0.666748)"
//                   />
//                 </clipPath>
//               </defs>
//             </svg>
//           </div>
//           {/* Step 3 */}
//           <div className="flex items-start gap-4">
//            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#4318ff] transition hover:bg-[#4318ff] hover:text-white text-[#4318ff]">
//               <span className="text-base font-bold leading-7 ">3</span>
//             </div>
//             <div className="flex flex-col">
//               <h3 className="mb-2 text-base font-bold leading-tight text-dark-grey-900">
//                 Get Paid Instantly
//               </h3>
//               <p className="text-base font-medium leading-7 text-dark-grey-600">
//                 Accept the offer and receive your payment securely and quickly.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default HowItWorks;


import React from "react";

const steps = [
  {
    title: "Upload License",
    desc: "Submit your unused software license details securely through our platform.",
  },
  {
    title: "Get Valuation",
    desc: "Receive a fair market offer from our experts within 24 hours.",
  },
  {
    title: "Get Paid",
    desc: "Accept the offer and receive your payment instantly—no hassle.",
  },
];

const HowItWorks = () => (
  <section
    id="how"
    className="relative py-10 sm:py-16 lg:py-24 overflow-hidden bg-gradient-to-tl from-[#220b0b] via-[#070707] to-[#13122d]"
  >
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">
          How does it work?
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
          SoftSell makes selling your unused software licenses simple and secure.
        </p>
      </div>
      <div className="relative mt-12 lg:mt-20">
        <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28 pointer-events-none select-none">
          <img
            alt=""
            loading="lazy"
            width="1000"
            height="500"
            decoding="async"
            className="w-full"
            style={{ color: "transparent" }}
            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
          />
        </div>
        <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
          {steps.map((step, idx) => (
            <div key={step.title}>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700">{idx + 1}</span>
              </div>
              <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                {step.title}
              </h3>
              <p className="mt-4 text-base text-gray-400 md:text-lg">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Decorative background blur */}
    <div
      className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg pointer-events-none"
      style={{
        background:
          "radial-gradient(1.89deg, rgba(67,24,255,0.15) -1000%, rgba(191, 227, 205, 0.10) 1500.74%, rgba(67,24,255,0.13) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)",
      }}
    ></div>
  </section>
);

export default HowItWorks;