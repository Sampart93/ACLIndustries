import React from 'react';
import { FaTiktok, FaYoutube, FaFacebookF, FaXTwitter, FaInstagram, FaGooglePlusG } from "react-icons/fa6";
import Stlogo from '../../../assets/stlogo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgb(241,92,34)] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center md:flex-row md:justify-between md:items-start md:text-left gap-8">
        {/* Follow Us */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4 border-b-2 border-gray-600 pb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebookF size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FaXTwitter size={24} />
            </a>
            <a href="#" aria-label="Google" className="hover:text-gray-400">
              <FaGooglePlusG size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-400">
              <FaYoutube size={24} />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-gray-400">
              <FaTiktok size={24} />
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex-1 md:text-right">
          <h3 className="text-lg font-bold mb-4 border-b-2 border-gray-600 pb-2">Contact Us</h3>
          <p>ACL Industrial Flooring (ACL) Limited</p>
          <p>41 St. Thomas's Road, Chorley, PR7 1JE</p>
          <p>Tel: 01772 802980</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-sm text-center mt-8 tablet:mt-0">
  <p className="mb-1">Copyright 2025 © ACL Industrial Flooring</p>
  <p className="mr-1">Powered by</p>
  <div className="flex justify-center mt-2">
    <img
      src={Stlogo}
      alt="SpartTech Logo"
      className="h-10 w-auto"
    />
  </div>
</div>
    </footer>
  );
};

export default Footer;
