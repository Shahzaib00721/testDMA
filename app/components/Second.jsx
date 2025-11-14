import React from 'react';

export default function ServicesSection() {
  const services = [
    { title: 'SEO Services', column: 1 },
    { title: 'Local SEO', column: 1 },
    { title: 'Enterprise SEO', column: 1 },
    { title: 'Link Building', column: 1 },
    { title: 'Google PPC', column: 1 },
    { title: 'Bing PPC', column: 2 },
    { title: 'Facebook Marketing', column: 2 },
    { title: 'Youtube Marketing', column: 2 },
    { title: 'Reputation Management', column: 2 }
  ];

  return (

    <div className="bg-[#1a1f4d] md:bg-white   sm:py-4 lg:py-5">
      <div className="relative bg-[#1a1f4d] text-white   md:px-5 py-12 sm:py-12 lg:py-20 mx-4 sm:mx-6 lg:mx-3 xl:mx-3  ">
      
     
      

      <div className="container mx-auto  md:px-4  max-w-8xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          
          <div className="space-y-6">
            <h2 className="lg:text-6xl text-[40px] leading-[70px] lg:leading-[83px] font-black f-f-Lato  undefined  text-white mb-6">
              Services we can help you with.
            </h2>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-xl">
              Leveraging digital marketing for any business requires a broad set of talent, tools, and strength in numbers. Let our team take care of the heavy lifting while we work with you to identify which services will benefit you the most and how we can maximize your reach with each marketing channel.
            </p>

           
            
          </div>

       
          <div className="space-y-5">
            
           
            <div className="flex justify-start lg:justify-start">
              <button className="bg-[#f3ae24] hover:bg-[#e69510] text-[#1a1f4d] font-bold text-sm sm:text-base px-8 py-5 mb-3   transition-all duration-300 transform hover:scale-105 shadow-lg">
                KNOW MORE
              </button>
            </div>

            
            <div className="text-right flex  justify-start lg:block">
              <p className=" text-sm leading-tight text-white mb-7 f-f-DM text-start font-normal">
                From building a new website to growing your social <br /> following, our digital experts are ready to help you <br/> achieve all your marketing goals.
              </p>
            </div>

           
            <div className="hidden lg:flex justify-center items-center gap-5 py-6">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="w-1 bg-gray-600 opacity-30"
                  style={{ height: `${20 + (i * 2)}px` }}
                ></div>
              ))}
            </div>

          
            <div className="lg:hidden">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Services we can help you with.
              </h3>
            </div>

         
            <div className=" rounded-lg py-6 sm:py-8 ">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 hidden lg:block">
                Services we can help you with.
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#f5a623] rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base font-serif font-[14px]  text-white">
                      {service.title}
                     
                    </span> 
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
        <h1 className='text-white font-bold text-7xl mt-3'>9</h1>
      </div>
        </div>
    </div>
  );
}