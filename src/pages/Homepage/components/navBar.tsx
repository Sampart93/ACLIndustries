import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../assets/logowithtext.png';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-[2.5rem] left-0 w-full z-40 bg-white text-[rgb(34,50,109)] py-3 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold">
          <img
            src={logo}
            alt="ACL Industrial Flooring Logo"
            className="h-12 w-auto mr-2"
          />
        </a>

        {/* Hamburger Menu for Tablet and Smaller */}
        <button
          className="custom:hidden text-[rgb(34,50,109)] focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>

        {/* Full Navigation Menu */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } custom:flex flex-col custom:flex-row space-y-4 custom:space-y-0 custom:space-x-6 absolute custom:relative bg-gray-800 custom:bg-transparent w-full custom:w-auto top-full left-0 p-4 custom:p-0`}
        >
          {/* Home */}
          <li>
            <a href="#home" className="hover:text-gray-300">
              HOME
            </a>
          </li>

          {/* Industries */}
          <li className="relative group">
            <a href="#industries" className="hover:text-gray-300 flex items-center">
              INDUSTRIES <span className="ml-1">&#9662;</span>
            </a>
            <ul className="hidden group-hover:block custom:absolute bg-white text-sm mt-2 p-2 rounded shadow-lg left-0 z-10 min-w-[250px] whitespace-normal">
              <li>
                <a href="#manufacturing" className="block hover:text-gray-300 px-4 py-2">
                  Warehouse
                </a>
              </li>
              <li>
                <a href="#healthcare" className="block hover:text-gray-300 px-4 py-2">
                  Breweries
                </a>
              </li>
              <li>
                <a href="#automotive" className="block hover:text-gray-300 px-4 py-2">
                  Automotive workshop epoxy resin flooring
                </a>
              </li>
              <li>
                <a href="#resin" className="block hover:text-gray-300 px-4 py-2">
                  Resin driveways and paving – Resin bound stone
                </a>
              </li>
            </ul>
          </li>

          {/* Flooring Types */}
          <li className="relative group">
            <a href="#flooring-types" className="hover:text-gray-300 flex items-center">
              FLOORING TYPES <span className="ml-1">&#9662;</span>
            </a>
            <ul className="hidden group-hover:block custom:absolute bg-white text-sm mt-2 p-2 rounded shadow-lg left-0 z-10 min-w-[250px] whitespace-normal">
              <li>
                <a href="#carpet" className="block hover:text-gray-300 px-4 py-2">
                  Carpet
                </a>
              </li>
              <li>
                <a href="#vinyl" className="block hover:text-gray-300 px-4 py-2">
                  Vinyl
                </a>
              </li>
            </ul>
          </li>

          {/* Other Links */}
          <li>
            <a href="#news" className="hover:text-gray-300">
              NEWS & PROJECTS
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="#downloads" className="hover:text-gray-300">
              DOWNLOADS
            </a>
          </li>

          {/* Areas */}
          <li className="relative group">
            <a href="#areas" className="hover:text-gray-300 flex items-center">
              AREAS <span className="ml-1">&#9662;</span>
            </a>
            <ul className="hidden group-hover:block custom:absolute bg-white text-sm mt-2 p-2 rounded shadow-lg left-0 z-10 min-w-[250px] whitespace-normal">
              <li>
                <a href="#north" className="block hover:text-gray-300 px-4 py-2">
                  North
                </a>
              </li>
              <li>
                <a href="#south" className="block hover:text-gray-300 px-4 py-2">
                  South
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#contact" className="hover:text-gray-300">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
