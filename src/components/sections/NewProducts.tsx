import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 'chair',
    name: 'Chair',
    image: '/images/category-chair.webp',
  },
  {
    id: 'bed',
    name: 'Bed',
    image: '/images/category-bed.webp',
  },
  {
    id: 'cupboard',
    name: 'Cupboard',
    image: '/images/category-cupboard.webp',
  },
  {
    id: 'lighting',
    name: 'Lighting',
    image: '/images/category-lighting.webp',
  },
];

export default function NewProducts() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="md:flex md:items-center md:gap-10">
          {/* Section Header */}
          <div className="md:w-1/5 mb-7 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 text-left mb-20">New In Store Now</h2>
            <p className="text-base text-gray-600 mb-4 text-left">Get the latest items immediately with promo prices</p>
            <Link
              href="/products"
              className="inline-flex items-center text-gray-900 font-semibold hover:underline text-base group text-left mt-10"
            >
              Check All <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          {/* Category Grid */}
          <div className="md:w-4/5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="group relative aspect-[4/5] block overflow-hidden rounded-xl shadow-lg"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
