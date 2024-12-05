import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">About Us</h3>
                        <p className="text-gray-400 text-sm">
                            Our blog app provides insightful articles and tutorials to help developers stay up-to-date with the latest trends in React and web development.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li>
                                <a href="/" className="hover:text-blue-400">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-blue-400">About</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-blue-400">Contact</a>
                            </li>
                            <li>
                                <a href="/blog" className="hover:text-blue-400">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                        <div className="flex flex-col space-y-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                                <i className="fab fa-facebook-f text-lg"></i> Facebook
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                                <i className="fab fa-twitter text-lg"></i> Twitter
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
                                <i className="fab fa-linkedin-in text-lg"></i> LinkedIn
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                        <p className="text-gray-400 text-sm mb-2">Email: amjadalijamali41@gmail.com</p>
                        <p className="text-gray-400 text-sm">Phone: +92 3262600358</p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} BlogApp. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
