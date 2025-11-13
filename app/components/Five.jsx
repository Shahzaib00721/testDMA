import React from 'react';

export default function BookMeetingSection() {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20  sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="text-center mb-8 px-4 sm:mb-12">
          <p className="text-sm text-center f-f-DM font-bold tracking-widest leading-[21px] mb-1 text-[#0066BA] uppercase">
            OUR SALES TEAM
          </p>
          <h2 className="text-3xl font-black f-f-Lato leading-[41px] text-center text-[#0D0D0D] capitalize">
            We Are Available For You Every Time
          </h2>
        </div>

        {/* Main Content Box */}
        <div className="bg-gradient-to-br from-[#1a1d3a] via-[#252850] to-[#1a1d3a]  overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Text Content */}
            <div className="p-4 sm:p-12 lg:p-15 flex flex-col justify-center">
              <div className="space-y-4">
                <h3 className="text-6xl text-[45px] sm:text-5xl lg:text-6xl font-black text-white  ]">
                  Book a meeting
                </h3>
                
                <h3 className="lg:text-6xl text-[45px] mb-6 font-black f-f-Lato leading-[49px] lg:leading[98.8px]  text-yellow-400 ">
                  to get started
                </h3>
                
                <p className="text-base sm:text-lg text-gray-300 mb-10 leading-relaxed max-w-md">
                  Speak to an expert to find out how Digital Consumer Intelligence will change the way you work.
                </p>

                <div className="pt-4">
                  <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold uppercase text-sm transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
                    BOOK A MEETING
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Dashboard Image */}
            <div className="relative h-64 sm:h-80 lg:h-auto min-h-[400px]">
              <img 
                src="/img2121.webp" 
                alt="Dashboard Analytics"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}