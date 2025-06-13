'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to your API
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
    
    // Reset the submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      className="relative w-full min-h-[490px] flex items-center justify-end"
      style={{
        backgroundImage: "url('/images/newsletter-lamp.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-end min-h-[340px]">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left py-12 pr-0 md:pr-12">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-2 leading-tight">Get more discount<br/>Off your order</h2>
          <p className="text-white text-base mb-6">Join our mailing list</p>
          <form onSubmit={handleSubmit} className="flex w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-md px-5 py-3 bg-white text-gray-900 border-none shadow focus:ring-2 focus:ring-teal-400 focus:outline-none text-base mr-3"
              required
            />
            <button
              type="submit"
              className="bg-gray-900 text-white font-semibold px-7 py-3 rounded-md shadow hover:bg-black transition-colors text-base"
            >
              Shop Now
            </button>
          </form>
          {submitted && (
            <p className="text-white mt-2 transition-opacity">
              Thank you! You have been subscribed to our newsletter.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
