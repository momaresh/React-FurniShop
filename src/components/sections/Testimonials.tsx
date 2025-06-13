'use client';

import { useState } from 'react';
import Image from 'next/image';

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Josh Smith',
    position: 'Manager of The New York Times',
    photo: '/images/testimonials/josh-smith.webp',
    content: 'They are have a perfect touch for make something so professional, interest and useful for a lot of people.',
  },
  {
    id: 2,
    name: 'Emma Johnson',
    position: 'Interior Designer at HomeStyle',
    photo: '/images/testimonials/emma-johnson.webp',
    content: 'I\'ve been using their furniture for years and I\'m always impressed with the quality and design. Highly recommended!',
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'CEO of Modern Living',
    photo: '/images/testimonials/michael-chen.webp',
    content: 'Their attention to detail and customer service is impeccable. FurniShop has transformed how we furnish spaces.',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="md:grid md:grid-cols-2 md:gap-14 md:items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-gray-900 text-left">
              What People Are Saying About Us
            </h2>
            <div className="bg-white rounded-2xl shadow p-6 mb-4 md:mb-0">
              <p className="text-gray-600 mb-6">"{testimonials[activeIndex].content}"</p>
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 mr-4">
                  <Image
                    src={testimonials[activeIndex].photo}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="rounded-full object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonials[activeIndex].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[activeIndex].position}</p>
                </div>
              </div>
              {/* Navigation */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={prevTestimonial}
                  className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>

                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`h-2 w-2 rounded-full mx-1 ${
                      activeIndex === i ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}

                <button
                  onClick={nextTestimonial}
                  className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center ml-3 bg-primary text-white border-primary"
                  aria-label="Next testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative w-full">
              <Image
                src="/images/living-room.webp"
                alt="Beautiful modern living room interior"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
