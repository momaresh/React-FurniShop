import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Manufacturer() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">
          {/* Left Content */}
          <div className="md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-left">
              The Best Furniture Manufacturer Of Your Choice
            </h2>
            <p className="text-base text-gray-600 text-left max-w-md mb-0">
              Furniture power is a software as services for multipurpose business management system, especially for them who are running two or more business explore the future Furniture power is a software as services \
            </p>
          </div>
          {/* Right Image */}
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/kitchen-interior.webp"
                alt="Modern kitchen interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
