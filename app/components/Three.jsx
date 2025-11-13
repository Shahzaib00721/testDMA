import React from 'react';

export default function PPCAdsSection() {
  const navItems = ['Luxury Communities', 'Franchise', 'Ecommerce', 'Crypto', 'Others'];

  return (
    <div className="bg-white min-h-screen  ">
      
      
      <nav className="bg-white ">
        <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-12 py-4 flex-wrap">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <a 
                  href="#" 
                  className={`text-sm sm:text-base font-medium transition-colors duration-300 ${
                    index === 0 
                      ? 'text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </a>
                {index === 0 && (
                  <div className="absolute -bottom-4 w-3  s left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

     
      <div className="container mx-auto px-4    ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
         
          <div className="space-y-8">
            
          
            <div>
              <span className="text-base font-bold f-f-DM leading-tight text-[#181E4E] uppercase mb-2">
                REAL ESTATE MARKETING
              </span>
            </div>

        
            <div>
              <h1 className="text-[40px] font-black text-black f-f-Lato leading-[48px]  lg:leading-[52px] text-[1B1D28]  mb-4">
                PPC Ads Specialized for Luxury Communities
              </h1>
            </div>

          
            <div>
              <p className="lg:text-sm text-[18px] leading-7 lg:leading-tight f-f-DM font-normal  text-[#666666]">
                Publish targeted PPC ads to luxury community users that other agencies don't know <br/> how to reach.
              </p>
            </div>

          
            <div className="grid grid-cols-2 gap-4 sm:gap-4 pt-1">
              <div>
                <h2 className="text-4xl font-bold f-f-Raj leading-loose text-black mb-2">
                  $3M
                </h2>
                <p className="text-sm leading-tight f-f-DM font-normal text-gray-500">
                  Additional Revenue Generated
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold f-f-Raj leading-loose text-black mb-2">
                  4,000%
                </h2>
                <p className="text-sm leading-tight f-f-DM font-normal text-gray-500">
                  ROAS
                </p>
              </div>
            </div>


           
            <div>
              <h3 className="text-sm font-black f-f-Lato leading-snug  text-[#181E4E]">
                Wade Warren
              </h3>
              <p className="lg:text-sm text-[18px] leading-7 lg:leading-tight f-f-DM font-normal text-gray-500 mt-5 mb-16">
                Our conversions increased by 34% after just 1 month of running new PPC campaigns.<br/>  DMA guided us through every step of the planning phase, from research to launch.
              </p>
            </div>

          </div>

         
          <div className="relative order-first lg:order-last">
            <div className="relative overflow-hidden ">
             
              <div className="aspect-[4/5] bg-gradient-to-br from-purple-300 via-blue-200 to-orange-200">
                <img 
                  src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=1000&fit=crop" 
                  alt="Luxury City Skyline" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
               
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-500 to-slate-400 -z-10">
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px)`
                  }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}