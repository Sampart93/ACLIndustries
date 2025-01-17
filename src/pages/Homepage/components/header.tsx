import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaTiktok, FaYoutube, FaFacebookF, FaXTwitter, FaInstagram, FaGooglePlusG } from "react-icons/fa6";

const Header: React.FC = () => {
  return (
    <header className=" fixed top-0 left-0 w-full z-50 bg-[rgb(241,92,34)] text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Phone Number */}
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="w-5 h-5 text-white" />
          <span className="text-sm">01772 802980</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaXTwitter  className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaInstagram  className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaYoutube className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaTiktok className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaGooglePlusG className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
