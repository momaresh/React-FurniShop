'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cart from '@/components/cart/Cart';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#181b20]/90 backdrop-blur-sm text-white py-4 sticky top-0 z-30 shadow-lg">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-extrabold tracking-tight">FurniShop</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-15">
          <Link href="/" className="text-base font-bold border-b-2 border-white pb-1">Home</Link>
          <Link href="/about" className="text-base font-normal hover:font-bold hover:text-white/90 transition-colors">About</Link>
          <Link href="/features" className="text-base font-normal hover:font-bold hover:text-white/90 transition-colors">Features</Link>
          <Link href="/contact" className="text-base font-normal hover:font-bold hover:text-white/90 transition-colors">Contact</Link>
        </nav>
        
        {/* Icons: Search and Cart */}
        {/* <div className="hidden md:flex items-center space-x-4"> */}
          {/* Search Icon */}
          {/* <button className="p-2 hover:text-primary transition-colors" aria-label="Search products">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button> */}
          
          {/* Cart Component */}
          {/* <Cart /> */}
        {/* </div> */}

        {/* Mobile Menu and Icon Section */}
        <div className="flex items-center md:hidden">
          {/* Cart for Mobile */}
          {/* <Cart /> */}
          
          {/* Mobile Menu Button */}
          <button 
            className="text-white ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-dark-DEFAULT z-50 py-6 md:hidden shadow-lg">
            <nav className="flex flex-col items-center space-y-4">
              <Link 
                href="/" 
                className="hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/products" 
                className="hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/contact" 
                className="hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
