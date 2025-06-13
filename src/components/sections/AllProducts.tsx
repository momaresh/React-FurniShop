'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';

// Mock product data based on the design
const products = [
  {
    id: '1',
    name: 'Ceiling Light',
    image: '/images/products/ceiling-light.webp',
    price: 75.00,
    originalPrice: 85.00,
    rating: 4.7,
    isNew: true,
  },
  {
    id: '2',
    name: 'Wood Chair',
    image: '/images/products/wood-chair.webp',
    price: 50.00,
    originalPrice: 70.00,
    rating: 4.2,
    isNew: false,
  },
  {
    id: '3',
    name: 'Papper Cupboard',
    image: '/images/products/papper-cupboard.webp',
    price: 105.00,
    originalPrice: 120.00,
    rating: 4.8,
    isNew: true,
  },
  {
    id: '4',
    name: 'Ole Gundorse Spring',
    image: '/images/products/ole-spring.webp',
    price: 82.00,
    originalPrice: 100.00,
    rating: 3.9,
    isNew: false,
  },
  {
    id: '5',
    name: 'Treos Seroes 911',
    image: '/images/products/treos-seroes.webp',
    price: 200.00,
    originalPrice: 210.00,
    rating: 4.5,
    isNew: false,
  },
  {
    id: '6',
    name: 'Multi Bilderman Slibber',
    image: '/images/products/multi-bilderman.webp',
    price: 45.00,
    originalPrice: 50.00,
    rating: 4.0,
    isNew: true,
  },
  {
    id: '7',
    name: 'XORA Corner Desk',
    image: '/images/products/xora-desk.webp',
    price: 320.00,
    originalPrice: 325.00,
    rating: 4.9,
    isNew: true,
  },
  {
    id: '8',
    name: 'Black Forest Series Wood',
    image: '/images/products/black-forest.webp',
    price: 225.00,
    originalPrice: 240.00,
    rating: 4.3,
    isNew: false,
  },
];

export default function AllProducts() {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 5; // Mock pagination
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-dark">All Product</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-center">
            The products we provide only for you as our service are selected from the best products with number 1 quality in the world
          </p>
        </div>
          
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              isNew={product.isNew}
            />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <button 
            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 mr-2 hover:bg-primary hover:text-white hover:border-primary transition-colors"
            onClick={() => setActivePage(Math.max(1, activePage - 1))}
            disabled={activePage === 1}
            aria-label="Previous page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`w-10 h-10 rounded-full flex items-center justify-center mx-1 ${
                activePage === i + 1
                  ? 'bg-primary text-white'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setActivePage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          
          <button 
            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 ml-2 hover:bg-primary hover:text-white hover:border-primary transition-colors"
            onClick={() => setActivePage(Math.min(totalPages, activePage + 1))}
            disabled={activePage === totalPages}
            aria-label="Next page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
