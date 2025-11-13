import React, { useState, useRef } from 'react';

export default function AwardsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null);

  const awards = [
    {
      badge: 'LEADER',
      icon: '🏆',
      image: '/img.svg',
      iconBg: 'bg-orange-700',
      title: 'CrowdReviews',
      category: 'CLIENT FEEDBACK',
      location: 'United States',
    },
    {
      badge: 'NOMINATED',
      icon: 'BIMA',
      iconBg: 'bg-[#1e2a4a]',
      title: 'Digital BIMA Award',
      category: 'DIGITAL DESIGN',
      location: 'United States',
    },
    {
      badge: 'NOMINATED',
      icon: 'GD',
      iconBg: 'bg-white',
      iconText: 'text-black',
      title: 'Graphic Design Award',
      category: 'DIGITAL DESIGN',
      location: 'United States',
    },
    {
      badge: 'WINNER',
      icon: '⭐',
      iconBg: 'bg-blue-600',
      title: 'Excellence Award',
      category: 'DIGITAL MARKETING',
      location: 'United States',
    },
  ];

  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) return 1;
      if (window.innerWidth <= 1024) return 2;
    }
    return 3;
  };

  const [cardsPerView, setCardsPerView] = React.useState(3);
  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setCurrentIndex(0);
      setPrevTranslate(0);
      setCurrentTranslate(0);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getPositionX = (e) =>
    e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(getPositionX(e));
    if (sliderRef.current) sliderRef.current.style.cursor = 'grabbing';
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = getPositionX(e) - startX;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;
    const maxIndex = awards.length - cardsPerView;
    if (movedBy < -100 && currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
    if (movedBy > 100 && currentIndex > 0) setCurrentIndex(currentIndex - 1);
    setPrevTranslate(currentIndex * -(100 / cardsPerView));
    setCurrentTranslate(currentIndex * -(100 / cardsPerView));
    if (sliderRef.current) sliderRef.current.style.cursor = 'grab';
  };

  React.useEffect(() => {
    setPrevTranslate(currentIndex * -(100 / cardsPerView));
    setCurrentTranslate(currentIndex * -(100 / cardsPerView));
  }, [currentIndex, cardsPerView]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-blue-600 text-xs font-bold tracking-[3px] uppercase mb-3">
            DIGITAL MARKETING AGENCY
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            We have achieved lot of Awards &<br />
            Recognitions Check some of our Achievements
          </h1>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-8 transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing select-none"
            style={{
              transform: `translateX(${isDragging ? currentTranslate : currentIndex * -(100 / cardsPerView)}%)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease-out',
            }}
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
            onMouseLeave={() => isDragging && handleTouchEnd()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
              >
                <div
                  className={`group  relative  p-12 shadow-sm hover:shadow-xl overflow-hidden h-full transition-all duration-300 ${
                    index === 1 ? 'bg-[#1e2a4a]' : 'bg-white'
                  }`}
                >
                  {/* Pattern */}
                  <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle, #000 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    ></div>
                  </div>

                 

                  {/* Hover Overlay */} 
                  <div className="absolute inset-0 bg-[#1e2a4a] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

                  {/* Content */}
                  <div className="relative z-10 text-start">
                    
                    <div
                      className={`w-32 h-32 mb-8 ${award.iconBg} rounded-2xl flex items-center justify-center text-5xl font-black ${
                        award.iconText || 'text-white'
                      } shadow-lg`}
                    >
                      {award.icon}
                    </div>

                    <div
                      className={`font-bold text-base mt-6 uppercase transition-colors duration-300 ${
                        index === 1
                          ? 'text-white'
                          : 'text-[#1B1D28] group-hover:text-white'
                      }`}
                    >
                      {award.badge}
                    </div>

                    <h2
                      className={`text-3xl lg:text-4xl font-bold mb-5 leading-tight transition-colors duration-300 ${
                        index === 1
                          ? 'text-white'
                          : 'text-gray-900 group-hover:text-white'
                      }`}
                    >
                      {award.title}
                    </h2>

                    <div
                      className={`f-f-DM font-bold text-[15px] mb-3 leading-[22.5px] uppercase  ${
                        index === 1
                          ? 'text-white'
                          : 'text-gray-700 group-hover:text-white'
                      }`}
                    >
                      {award.category}
                    </div>

                    <div
                      className={` group-hover:text-[#FFD231] f-f-DM pt-5 font-normal text-[15px] leading-[22.5px] transition-all ease-in-out duration-300 text-[#666666]   ${
                        index === 1
                          ? 'text-white'
                          : 'text-gray-500 group-hover:text-white'
                      }`}
                    >
                      {award.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: awards.length - cardsPerView + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
