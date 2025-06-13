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
      <div className="container">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8 text-sm">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/#products" className="hover:text-primary">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-500">{product.name}</span>
        </div>
        
        {/* Product Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {product.isNew && (
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary px-3 py-1 text-sm font-semibold text-dark-DEFAULT rounded">
                    NEW
                  </span>
                </div>
              )}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            {/* Price */}
            <div className="flex items-center mb-4">
              <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
              {product.originalPrice && (
                <p className="ml-3 text-lg text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
              )}
            </div>
            
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${star <= Math.floor(product.rating) ? 'text-secondary' : 'text-gray-300'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">({product.rating.toFixed(1)})</span>
              </div>
            )}
            
            {/* Short Description */}
            <p className="text-gray-600 mb-6">
              {product.description.substring(0, 120)}...
            </p>
            
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`px-3 py-1 border rounded-md ${selectedColor === color ? 'border-primary' : 'border-gray-300'}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center"
                  aria-label="Decrease quantity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <span className="mx-4 w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center"
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
                className="px-6 py-3"
              >
                Add to Cart
              </Button>
              <Button 
                variant="secondary"
                className="px-6 py-3"
              >
                Buy Now
              </Button>
            </div>
            
            {/* Product Meta */}
            <div className="border-t pt-4 space-y-2 text-sm">
              <p><span className="font-medium">Category:</span> {product.category}</p>
              <p><span className="font-medium">Material:</span> {product.material}</p>
              <p><span className="font-medium">Dimensions:</span> {product.dimensions}</p>
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
