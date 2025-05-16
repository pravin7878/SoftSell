// import React, { useState } from 'react';

// function ContactForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', { name, email, message });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default ContactForm;


import React, { useState } from "react";

const ContactForm = () => {
  // Simple frontend validation state
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });
  const [error, setError] = useState("");
  const licenseOptions = [
    "Microsoft",
    "Adobe",
    "Autodesk",
    "Oracle",
    "Other",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.licenseType || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    // You can add further logic here (e.g., show a success message)
    alert("Thank you! We'll get back to you soon.");
    setForm({
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#1a1333] via-[#2d1e4a] to-purple-900 min-h-screen py-10 h-full flex items-center text-white px-4 md:px-10 lg:px-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Contact Details */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Ready to Sell Your Licenses? <br />
            <span className="text-gray-300">Contact SoftSell Today</span>
          </h2>
          <p className="mt-4 text-purple-200">
            Have questions or want a free valuation? Fill out the form and our team will get back to you within one business day.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start space-x-4">
              <span className="text-xl text-purple-300">📍</span>
              <div>
                <p className="font-semibold">Address:</p>
                <p className="text-purple-200">123 Software Ave, Tech City, USA</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-xl text-purple-300">📞</span>
              <div>
                <p className="font-semibold">Phone:</p>
                <p className="text-purple-200">+1 555-123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-xl text-purple-300">✉️</span>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-purple-200">support@softsell.com</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-neutral-200 hover:w-32 transition-all overflow-hidden"
            >
              <span className="hidden group-hover:inline whitespace-nowrap mr-2">GitHub</span>🐙
            </a>
            <a
              href="#"
              className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-neutral-200 hover:w-36 transition-all overflow-hidden"
            >
              <span className="hidden group-hover:inline whitespace-nowrap mr-2">LinkedIn</span>💼
            </a>
            <a
              href="#"
              className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-neutral-200 hover:w-36 transition-all overflow-hidden"
            >
              <span className="hidden group-hover:inline whitespace-nowrap mr-2">Facebook</span>📘
            </a>
            <a
              href="#"
              className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-800 text-neutral-200 hover:w-36 transition-all overflow-hidden"
            >
              <span className="hidden group-hover:inline whitespace-nowrap mr-2">YouTube</span>▶️
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-4">
              <label className="block text-purple-200 mb-2">
                Name<span className="text-xs text-purple-400 ml-1">(Required)</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. John Doe"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-purple-200 mb-2">
                Email<span className="text-xs text-purple-400 ml-1">(Required)</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="e.g. johndoe@mail.com"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-purple-200 mb-2">Company</label>
              <input
                type="text"
                name="company"
                placeholder="Your Company Name"
                value={form.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-purple-200 mb-2">
                License Type<span className="text-xs text-purple-400 ml-1">(Required)</span>
              </label>
              <select
                name="licenseType"
                value={form.licenseType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none"
              >
                <option value="">Select License Type</option>
                {licenseOptions.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-purple-200 mb-2">
                Message<span className="text-xs text-purple-400 ml-1">(Required)</span>
              </label>
              <textarea
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none h-24"
              ></textarea>
            </div>
            {error && (
              <div className="mb-4 text-red-400 text-sm">{error}</div>
            )}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;