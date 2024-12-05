import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="pt-4">
            <div className="container mx-auto p-4 pt-20 text-center">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Welcome to Our Blog App!</h1>
                <p className="text-xl text-gray-600 mb-6">
                    Stay up-to-date with the latest trends in React and web development through our blog posts.
                </p>
                <div className="flex justify-center gap-6">
                    <Link
                        to="/about"
                        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                    >
                        About Us
                    </Link>
                    <Link
                        to="/contact"
                        className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
            <div className="container mx-auto p-4 text-center mb-16">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Featured Blog Posts</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Discover some of the most popular articles that have helped our readers.
                </p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">React Basics</h3>
                        <p className="text-gray-600 mb-4">An introductory guide to getting started with React.</p>
                        <Link to="/blog/1" className="text-blue-600 hover:text-blue-800 font-semibold">
                            Read More
                        </Link>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Components and Props</h3>
                        <p className="text-gray-600 mb-4">Learn how components and props work in React.</p>
                        <Link to="/blog/2" className="text-blue-600 hover:text-blue-800 font-semibold">
                            Read More
                        </Link>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">React State Management</h3>
                        <p className="text-gray-600 mb-4">A beginner's guide to state management in React.</p>
                        <Link to="/blog/3" className="text-blue-600 hover:text-blue-800 font-semibold">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto p-4 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        We offer high-quality content to help you stay updated and learn new things about React and web development.
                    </p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Contributors</h3>
                            <p className="text-gray-600">
                                Our team consists of experienced professionals in React and web development.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Content</h3>
                            <p className="text-gray-600">
                                We provide well-researched, in-depth articles to improve your skills.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Interactive Community</h3>
                            <p className="text-gray-600">
                                Join discussions, share ideas, and learn from others in our community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-4 text-center mb-16">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get Started with Our Blog</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Start learning today by exploring our latest blog posts and tutorials.
                </p>
                <Link
                    to="/blog"
                    className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition"
                >
                    Explore Blog Posts
                </Link>
            </div>
        </div>
    );
};

export default Home;
