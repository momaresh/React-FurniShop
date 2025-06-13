'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  isNew?: boolean;
  className?: string;
}

export default function ProductCard({ 
  id, 
  name, 
  image, 
  price, 
  originalPrice,
  rating = 0,
  isNew = false,
  className = '' 
}: ProductCardProps) {
  const [showQuickView, setShowQuickView] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      image,
      price
    });
  };

  // Generate stars for the rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg key="half" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a.75.75 0 01.671.415l2.652 5.978H19.5a.75.75 0 01.47 1.342l-5.17 3.776 1.86 6.036a.75.75 0 01-1.153.838l-5.508-4-5.508 4a.75.75 0 01-1.153-.838l1.86-6.036-5.17-3.776A.75.75 0 013.75 9.143h6.177L12.58 3.165A.75.75 0 0110 2zm0 2.445L8.161 9.122a.75.75 0 01-.678.423H4.018l4.161 3.03a.75.75 0 01.273.838l-1.5 4.854 4.437-3.225a.75.75 0 01.882 0l4.437 3.225-1.5-4.854a.75.75 0 01.273-.838l4.16-3.03h-4.84a.75.75 0 01-.678-.423L10 4.445z" clipRule="evenodd" />
        </svg>
      );
    }
    
    // Empty stars (to make 5 stars total)
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };
  return (
    <div className={`relative bg-white rounded-2xl shadow-md p-6 flex flex-col items-center ${className}`}>
      {/* Product Image */}
      <div className="w-full flex justify-center items-center aspect-square mb-2">
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="object-contain object-center max-h-36 max-w-full"
        />
        

        

        
        {/* Add to cart button */}
        <button 
          aria-label="Add to cart"
          className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition"
          onClick={handleAddToCart}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
          </svg>
        </button>
      </div>
      
      {/* Product Info */}
      <div className="flex flex-col w-full mt-2">
        <Link href={`/products/${id}`} className="font-semibold text-base md:text-lg text-dark truncate w-full mb-1 text-left">
          {name}
        </Link>
        <div className="flex items-center w-full">
          <span className="font-bold text-lg text-dark">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="ml-2 text-sm text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
      
      {/* Quick View Modal */}
      {showQuickView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50" onClick={() => setShowQuickView(false)}>
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{name}</h3>
                <button onClick={() => setShowQuickView(false)} className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Image */}
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                {/* Product Details */}
                <div>
                  <div className="mb-4">
                    <h4 className="font-medium">Price</h4>
                    <div className="flex items-center">
                      <p className="text-xl font-bold text-primary">${price.toFixed(2)}</p>
                      {originalPrice && (
                        <p className="ml-2 text-gray-500 line-through">${originalPrice.toFixed(2)}</p>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium mb-1">Description</h4>
                    <p className="text-gray-600">This stylish {name.toLowerCase()} will add a touch of elegance to your home. Perfect for any modern interior design.</p>
                  </div>
                  <div className="mt-6 flex gap-2">
                    <button 
                      className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
                      onClick={() => {
                        handleAddToCart();
                        setShowQuickView(false);
                      }}
                    >
                      Add to Cart
                    </button>
                    <Link href={`/products/${id}`} className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
