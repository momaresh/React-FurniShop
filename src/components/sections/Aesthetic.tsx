import Image from 'next/image';

export default function Aesthetic() {
  return (
    <section className="py-10 md:py-20 bg-white flex items-center justify-center">
      <div className="container max-w-7xl px-4 sm:px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative flex justify-center items-center mb-8 md:mb-0">
            <div className="aspect-[4/3] w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg p-2 sm:p-4 md:p-6">
              <Image 
                src="/images/aesthetic-sofa.webp" 
                alt="Beautiful living room with sofa" 
                fill 
                className="object-cover rounded-xl sm:rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          {/* Right side - Content */}
          <div className="max-w-xl mx-auto md:mx-0 md:ml-8 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-5 md:mb-7 text-gray-900 leading-tight">
              We Create Your Home <br className="hidden md:block"/>More Aesthetic
            </h2>
            <p className="text-gray-700 mb-7 md:mb-10 text-base sm:text-lg md:text-xl font-normal">
              Furniture power is a software as services for multipurpose business management system.
            </p>
            {/* Feature 1 */}
            <div className="mb-5 md:mb-6 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
              <span className="flex-shrink-0 mx-auto sm:mx-0 mt-1 w-6 h-6 flex items-center justify-center rounded-full bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-900 mb-1">Valuation Services</h3>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg font-light">Sometimes features require a short description. This can be detailed description</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
              <span className="flex-shrink-0 mx-auto sm:mx-0 mt-1 w-6 h-6 flex items-center justify-center rounded-full bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-900 mb-1">Development of Furniture Models</h3>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg font-light">Sometimes features require a short description. This can be detailed description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
