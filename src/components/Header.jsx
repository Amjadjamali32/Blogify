import React from 'react';
import icon from "../assets/blogger.png";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-lg fixed w-full z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo and Brand */}
                <div className="flex items-center">
                    <img
                        src={icon}
                        alt="logo"
                        className="w-10 h-10 sm:w-12 sm:h-12 mr-3"
                    />
                    <Link
                        to="/"
                        className="text-xl sm:text-2xl font-bold hover:text-gray-200"
                    >
                        Blogify
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex">
                    <ul className="flex space-x-8">
                        <li>
                            <Link to="/" className="hover:text-gray-200">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-200">About</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="hover:text-gray-200">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-200">Contact</Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        className="text-white text-2xl focus:outline-none"
                        onClick={() =>
                            document.getElementById("mobile-menu").classList.toggle("hidden")
                        }
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                id="mobile-menu"
                className="md:hidden hidden bg-blue-700 text-white mt-2 p-4 rounded-lg shadow-lg"
            >
                <ul className="space-y-4">
                    <li>
                        <Link to="/" className="block hover:text-gray-200">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="block hover:text-gray-200">About</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="block hover:text-gray-200">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block hover:text-gray-200">Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
