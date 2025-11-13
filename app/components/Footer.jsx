"use client";
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function DMAFooter() {
  return (
    <footer className="bg-white text-[#181e4e] pt-5 ">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <div className="flex items-center gap-3 justify-center">
              <div className=" text-[#1a1f3d] font-black text-5xl px-4 py-2">
                DMA
              </div>
              <div className="text-left">
                <div className="text-gray-600 text-xs font-semibold tracking-wide">DIGITAL</div>
                <div className="text-gray-600 text-xs font-semibold tracking-wide">MARKETING</div>
                <div className="text-gray-600 text-xs font-semibold tracking-wide">AGENCY</div>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  mb-2">
          {/* What We Do */}
          <div>
            <h3 className="text-[#1a1f3d] font-bold text-md mb-4 uppercase">WHAT WE DO</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">SEO</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">PPC</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Reputation Management</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Social Media</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Web Development</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Marketing Automation</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-[#1a1f3d] font-bold text-md mb-4 uppercase">INDUSTRIES</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Luxury Communities</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Franchise</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">E-Commerce</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Crypto</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Assisted Living</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Other</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#1a1f3d] font-bold text-md mb-4 mt-4 md:mt-0 uppercase">COMPANY</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Our Team</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Testimonials</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Awards</a></li>
            </ul>
             <h3 className="text-[#1a1f3d] font-bold text-md mt-15 uppercase">NEWS</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Press & Media</a></li>
            </ul>
          </div>

         

          {/* Contact Us & News */}
          <div>
            <h3 className=" styles_footer-link-text__WvAFy text-base f-f-Lato font-bold leading-normal mt-4 md:mt-0 uppercase mb-2">CONTACT US</h3>
            <ul className="space-y-2.5 mb-6">
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Support</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Business Inquiries</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">@Facebook</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">@Twitter</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">@LinkedIn</a></li>
            </ul>
             <h3 className="    font-bold leading-normal uppercase mb-2">CAREERS</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Applicant Privacy</a></li>
            </ul>
           
          </div>

          {/* Blog & Bulletin */}
          <div>
            <h3 className=" styles_footer-link-text__WvAFy text-base f-f-Lato font-bold leading-normal uppercase mb-2">BLOG</h3>
            <p className="text-gray-700 text-sm mb-6">Read the latest Digital Marketing news</p>
            
            <h3 className="styles_footer-link-text__WvAFy text-base f-f-Lato font-bold leading-normal uppercase mb-2">THE DMA BULLETIN</h3>
            <p className="text-gray-700 text-sm mb-4">All our latest data stories & insights straight to your inbox</p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your Email" 
                className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:border-blue-600"
              />
              <button className="w-full bg-[#e8e9f3] hover:bg-blue-100 text-[#1a1f3d] font-semibold py-2 px-4 text-sm transition-colors">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>

     {/* Contact Banner */}
      <div className="bg-[#f8f8ff] border-t border-b border-[#D1D1D1]">
        <div className="container mx-auto h-auto lg:h-30 py-4 px-4 flex flex-col lg:flex-row gap-y-4 lg:gap-y-[2px] items-center justify-center lg:justify-between gap-x-4 lg:gap-x-1"> 
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center lg:justify-start gap-2 md:gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-3">
              <Phone className="text-orange-500 w-6 h-6 md:w-8 md:h-8" />
              <span className=" styles_need-help__q0BVc f-f-Mon font-extrabold text-3xl ">Need Help? Say Hello</span>
            </div>
            <a href="tel:574-933-2692" className="styles_footer-need-help__4IJvJ text-xl lg:text-5xl f-f-Mon font-extrabold leading-[67px] ">
              574-933-2692
            </a>
          </div>
          
          {/* Contact Info below phone */}
          <div className="flex flex-col items-center md:items-end justify-center md:justify-end text-center md:text-end gap-2 md:gap-2 lg:gap-2 text-gray-700 w-full lg:w-auto">
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-base lg:text-lg">
              <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              <span>111 E. Wacker Drive Chicago, IL 601</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-base lg:text-lg">
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              <a href="mailto:sales@digitalmarketingagency.com" className="hover:text-blue-600">
                sales@digitalmarketingagency.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Copyright & Links */}
            <div className="text-center lg:text-center justify-center ">
              <p className="text-gray-600 text-xs lg:text-sm">
                Copyright © 2025 Digital Marketing Agency. 
                <a href="#" className="hover:text-blue-600 ml-1">Terms & Conditions</a> | 
                <a href="#" className="hover:text-blue-600 ml-1">Privacy Statement</a> | 
                <a href="#" className="hover:text-blue-600 ml-1">Cookie Notice</a> | 
                <a href="#" className="hover:text-blue-600 ml-1">Global Unsubscribe</a> | 
                <a href="#" className="hover:text-blue-600 ml-1">Sitemap</a>
              </p>
            </div>

            {/* Contact Info */}
           
          </div>
        </div>
      </div>
    </footer>
  );
}