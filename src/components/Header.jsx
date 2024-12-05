import React from 'react';
import icon from "../assets/blogger.png";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-3 shadow-lg fixed w-full z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-xl font-semibold flex items-center">
                    <img src={icon} alt="logo" className='w-1/6 sm:w-1/12 md:w-1/10 lg:w-1/12 ms-4'/>
                    <Link to="/" className="hover:text-gray-200 font-bold mx-2 mt-2 sm:mt-0">Blogify</Link>
                </div>
                <nav className="hidden md:flex">
                    <ul className="flex space-x-10 me-5">
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
                <div className="md:hidden flex items-center">
                    <button className="text-white" onClick={() => document.getElementById("mobile-menu").classList.toggle("hidden")}>
                        <i className="fas fa-bars"></i> 
                    </button>
                </div>
            </div>
            <div id="mobile-menu" className="md:hidden hidden bg-blue-700 text-white p-4">
                <ul>
                    <li>
                        <Link to="/" className="block py-2 hover:text-gray-200">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="block py-2 hover:text-gray-200">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block py-2 hover:text-gray-200">Contact</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="block py-2 hover:text-gray-200">Blogs</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
