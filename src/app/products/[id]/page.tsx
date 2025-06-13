'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

// Mock product data - in a real app, this would come from an API or database
const products = {
  '1': {
    id: '1',
    name: 'Ceiling Light',
    image: '/images/products/ceiling-light.webp',
    price: 75.00,
    originalPrice: 85.00,
    rating: 4.7,
    isNew: true,
    category: 'Lighting',
    description: 'Elegant ceiling light with modern design. Perfect for living rooms and bedrooms. Energy-efficient LED technology provides warm lighting to create a cozy atmosphere.',
    features: [
      'Dimmable LED lights',
      'Remote control included',
      'Energy efficient',
      'Easy installation',
    ],
    colors: ['Black', 'White', 'Gold'],
    dimensions: '40 x 40 x 15 cm',
    material: 'Metal and Glass',
    relatedProducts: ['5', '8', '3']
  },
  '2': {
    id: '2',
    name: 'Wood Chair',
    image: '/images/products/wood-chair.webp',
    price: 50.00,
    originalPrice: 70.00,
    rating: 4.2,
    isNew: false,
    category: 'Chairs',
    description: 'Comfortable wooden chair with ergonomic design. Handcrafted from premium oak wood with careful attention to detail.',
    features: [
      'Ergonomic design',
      'Premium oak wood',
      'Padded seat cushion',
      'Sturdy construction',
    ],
    colors: ['Natural Oak', 'Walnut', 'Black'],
    dimensions: '55 x 45 x 85 cm',
    material: 'Oak Wood and Fabric',
    relatedProducts: ['3', '6', '7']
  },
  // More product details would be added for other products
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = products[id as keyof typeof products];
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  
  const { addToCart } = useCart();
  
  // If product doesn't exist, show 404-like message
  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">We couldn't find the product you're looking for.</p>
        <Link href="/" className="text-primary hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price
      });
    }
  };
  
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8 text-sm">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/#products" className="hover:text-primary">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-500">{product.name}</span>
        </div>
        
        {/* Product Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square w-full rounded-2xl shadow-lg overflow-hidden bg-gray-50 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {product.isNew && (
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00897b] px-3 py-1 text-xs font-bold text-white rounded-full shadow">NEW</span>
                </div>
              )}
            </div>
          </div>
          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 font-saira text-dark">{product.name}</h1>
            {/* Price */}
            <div className="flex items-center mb-3">
              <span className="text-2xl md:text-3xl font-bold text-[#00897b] font-saira">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="ml-4 text-lg md:text-xl text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${star <= Math.floor(product.rating) ? 'text-[#00897b]' : 'text-gray-200'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-500 text-base">({product.rating.toFixed(1)})</span>
              </div>
            )}
            {/* Short Description */}
            <p className="text-gray-600 mb-5 text-base md:text-lg font-saira">
              {product.description.substring(0, 120)}...
            </p>
            {/* Color Selection */}
            <div className="mb-5">
              <h3 className="font-semibold mb-2 text-base font-saira">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`px-4 py-1 rounded-full border transition-colors font-saira text-sm md:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00897b] ${selectedColor === color ? 'border-[#00897b] bg-[#00897b] text-white' : 'border-gray-300 bg-white text-dark hover:bg-gray-50'}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            {/* Quantity */}
            <div className="mb-5">
              <h3 className="font-semibold mb-2 text-base font-saira">Quantity</h3>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold text-dark shadow border border-gray-200 hover:bg-gray-200 transition"
                  aria-label="Decrease quantity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <span className="mx-2 w-10 text-center text-lg font-saira">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold text-dark shadow border border-gray-200 hover:bg-gray-200 transition"
                  aria-label="Increase quantity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Add to Cart / Buy Now */}
            <div className="flex gap-4 mb-8">
              <Button 
                variant="primary" 
                onClick={handleAddToCart}
                className="px-7 py-3 rounded-full font-saira text-base shadow-lg bg-[#00897b] hover:bg-[#00695c] border-0"
              >
                Add to Cart
              </Button>
              <Button 
                variant="secondary"
                className="px-7 py-3 rounded-full font-saira text-base shadow border border-[#00897b] text-[#00897b] bg-white hover:bg-gray-50"
              >
                Buy Now
              </Button>
            </div>
            {/* Product Meta */}
            <div className="border-t pt-4 space-y-2 text-sm font-saira text-gray-600">
              <p><span className="font-semibold text-dark">Category:</span> {product.category}</p>
              <p><span className="font-semibold text-dark">Material:</span> {product.material}</p>
              <p><span className="font-semibold text-dark">Dimensions:</span> {product.dimensions}</p>
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mb-16">
          {/* Tab Navigation */}
          <div className="flex border-b mb-6">
            <button
              className={`py-3 px-6 font-medium ${activeTab === 'description' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`py-3 px-6 font-medium ${activeTab === 'features' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
            <button
              className={`py-3 px-6 font-medium ${activeTab === 'specifications' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="prose max-w-none">
            {activeTab === 'description' && (
              <div>
                <p>{product.description}</p>
                <p className="mt-4">
                  Our furniture is designed with both style and functionality in mind. Each piece undergoes rigorous quality testing to ensure it meets our high standards. When you choose our {product.name.toLowerCase()}, you're investing in quality that will last for years to come.
                </p>
              </div>
            )}
            
            {activeTab === 'features' && (
              <div>
                <ul className="list-disc pl-5">
                  {product.features.map((feature, index) => (
                    <li key={index} className="mb-2">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium w-1/3">Dimensions</td>
                      <td className="py-2">{product.dimensions}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Material</td>
                      <td className="py-2">{product.material}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Colors Available</td>
                      <td className="py-2">{product.colors.join(', ')}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Category</td>
                      <td className="py-2">{product.category}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Here we would map through related products by getting their IDs from the current product */}
            {/* For now, just show a placeholder */}
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <p className="text-gray-400">Related products would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
