import React from 'react';

export default function TrustedClientsSection() {
  const clients = [
    { name: 'Makeable', text: 'Makeable', style: 'font-script' },
    { name: 'KOHLER', text: 'KOHLER', style: 'font-bold' },
    { name: 'BLOCKCHAIN', text: 'BLOCKCHAIN', style: 'font-medium', icon: true },
    { name: 'Tripadvisor', text: 'Tripadvisor', style: 'font-normal', icon: true },
    { name: 'PROMOGO', text: 'PROMOGO', style: 'font-bold', subtitle: 'Grow your brand further' },
    { name: 'SIMON', text: 'SIMON', style: 'font-bold tracking-wider' }
  ];

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16  border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-15 ">
    
        <div className="flex flex-col lg:flex-row items-center justify-between gap-x-16 lg:gap-y-8">
                   <div className="w-full lg:w-auto text-center lg:text-left flex-shrink-0">
            <h2 className="xl:text-md lg:text-md text-md font-bold mb-4 text-black leading-tight uppercase aos-init aos-animate">
              TRUSTED BY THE BEST CLIENTELE LIST:
            </h2>
          </div>

       
          <div className="w-full lg:flex-1">
            <div className="flex items-center justify-center lg:justify-end gap-4 sm:gap-6 lg:gap-12 flex-wrap">
              
            
              <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
               <img className='h-10' src="img51.svg" alt="" />
              </div>

           
              <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <img className='h-10' src="img52.svg" alt="" />
              </div>

              <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center gap-1.5">

                  <img className='h-10' src="img53.svg" alt="" />
                </div>
              </div>

            
              <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center gap-1.5">
                  <img className='h-10' src="img54.svg" alt="" />
                </div>
              </div>
 
             
              <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center gap-1.5">
                  <img className='h-10' src="img55.svg" alt="" />


                  <div>
                    <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">PROMOGO</div>
                    <div className="text-[8px] sm:text-[9px] text-gray-500">Grow your brand further</div>
                  </div>
                </div>

            

                
              </div>

              <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <div className="flex items-center gap-1.5">

                  <img className='h-10' src="img55.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}