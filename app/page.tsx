"use client";
import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Montserrat } from "next/font/google";

export default function DMAHeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'SEO',
    'PPC',
    'REPUTATION  MANAGEMENT',
    'SOCIAL MEDIA',
    'WEB DEVELOPMENT',
    'MARKETING AUTOMATION',
    'INDUSTRIES',
    'ABOUT DMA'
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-br from-[#1a1d3a] via-[#252850] to-[#1a1d3a] text-white">
      {/* Top Header */}
      <header className="bg-[#1a1d3a]  border-b border-gray-700/30">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex  items-center justify-between h-20">
            {/* Logo */}
            <div className="flex  items-center">
              <div className= " flex  items-center gap-3 text-white">
                <h1 className="text-3xl font-bold tracking-tight">
                  <span className="text-white text-5xl font-extrabold">DMA</span>
                </h1>
                <div className='h-9 bg-gray-400 w-0.5'></div>
                <p className="text-[10px] uppercase  leading-3 text-gray-400">
                  DIGITAL<br />MARKETING<br />AGENCY
                </p>
              </div> 
            </div>

           
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:574-933-2692" className="flex items-center gap-2  text-white hover:text-cyan-400 transition-colors">
                <Phone size={20} />
                <span className="text-lg font-semibold">574-933-2692</span>
              </a>
              <button className="px-6 py-3  border-2 border-yellow-400 text-yellow-400 font-bold uppercase text-sm hover:bg-yellow-400 hover:text-gray-900 transition-all rounded">
                REQUEST A FREE QUOTE
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white px-5 border-b border-gray-700/30">
        <div className="max-w-7xl mx-auto  sm:px-6 bg-white    lg:px-8">
          <div className="hidden lg:flex items-center  justify-start gap-9 py-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-md font-bold font-sans text-black h-15 flex items-center hover:text-cyan-400 transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4  space-y-4 ">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-sm font-semibold font-sans  text-black hover:text-cyan-400 transition-colors py-2"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 space-y-4">
                <a href="tel:574-933-2692" className="flex items-center gap-2 text-white">
                  <Phone size={20} />
                  <span className="font-semibold">574-933-2692</span>
                </a>
                <button className="w-full px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-bold uppercase text-sm hover:bg-yellow-400 hover:text-gray-900 transition-all ">
                  REQUEST A FREE QUOTE
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8 ">
              <div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
                  We are best in
                </h2>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-yellow-400">
                  Seo.
                </h2>
              </div>

              <p className="text-xl font-normal text-gray-300 leading-relaxed max-w-xl">
                Ask DMA to create a comprehensive and aggressive digital marketing plan taking your business to new heights.
              </p>

              <a 
                href="https://www.digitalmarketingagency.com" 
                className="inline-block text-cyan-400 hover:text-cyan-300 underline text-sm"
              >
              
              </a>
            </div>

            {/* Right Side - Image with Tech Graphics */}
            <div className="relative">
              {/* Tech Graphics Background */}
              <div className="absolute inset-0 z-0">
                {/* Circular Elements */}
                <div className="absolute top-10 left-10 w-32 h-32 border-4 border-cyan-400/30 rounded-full animate-spin-slow"></div>
                <div className="absolute top-20 right-20 w-48 h-48 border-4 border-cyan-400/20 rounded-full"></div>
                <div className="absolute bottom-10 left-20 w-24 h-24 border-4 border-cyan-400/40 rounded-full"></div>
                
                {/* DMA Logo Circle */}
                <div className="absolute top-0 left-1/4 w-28 h-28 border-4 border-cyan-400 rounded-full flex items-center justify-center bg-[#1a1d3a]/80">
                  <span className="text-3xl font-bold text-cyan-400">DMA</span>
                </div>

                {/* Percentage Circle */}
                <div className="absolute bottom-20 right-10 w-20 h-20 border-4 border-cyan-400 rounded-full flex items-center justify-center bg-[#1a1d3a]/80">
                  <span className="text-lg font-bold text-cyan-400">3D</span>
                </div>

                {/* Dashboard Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <line x1="20%" y1="30%" x2="80%" y2="30%" stroke="#22d3ee" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="30%" y1="50%" x2="70%" y2="50%" stroke="#22d3ee" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="40%" y1="70%" x2="90%" y2="70%" stroke="#22d3ee" strokeWidth="2" strokeDasharray="5,5" />
                  <circle cx="25%" cy="40%" r="4" fill="#22d3ee" />
                  <circle cx="75%" cy="60%" r="4" fill="#22d3ee" />
                  <circle cx="85%" cy="35%" r="4" fill="#22d3ee" />
                </svg>

                {/* Tech Info Cards */}
                <div className="absolute top-1/4 left-0 bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/30 px-3 py-2 rounded text-xs">
                  <span className="text-cyan-400">Analytics</span>
                </div>
                <div className="absolute top-1/2 right-0 bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/30 px-3 py-2 rounded text-xs">
                  <span className="text-cyan-400">Reports</span>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative z-10">
                <div className="relative">
                  {/* Yellow Border Effect */}
                  <div className="absolute -bottom-6 -right-6 w-full h-full border-8 border-yellow-400 rounded-full opacity-50 lg:block hidden"></div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
                    alt="Digital Marketing Professional"
                    className="relative rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover mx-auto border-8 border-yellow-400 shadow-2xl"
                  />
                  
                  {/* Glowing effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
    </div>
  );
}