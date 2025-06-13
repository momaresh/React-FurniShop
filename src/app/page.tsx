import Hero from '@/components/sections/Hero';
import Aesthetic from '@/components/sections/Aesthetic';
import NewProducts from '@/components/sections/NewProducts';
import Manufacturer from '@/components/sections/Manufacturer';
import AllProducts from '@/components/sections/AllProducts';
import Testimonials from '@/components/sections/Testimonials';
import Newsletter from '@/components/sections/Newsletter';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Aesthetic Section */}
      <Aesthetic />
      
      {/* New Products Section */}
      <NewProducts />
      
      {/* Manufacturer Section */}
      <Manufacturer />
      
      {/* All Products Section */}
      <AllProducts />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
}
