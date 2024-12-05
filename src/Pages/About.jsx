import React from 'react';

const About = () => {
    return (
        <div className='pt-16'>
            <div className="container mx-auto p-8 text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-6">About Our Blog App</h2>
                <p className="text-xl text-gray-600 mb-8">
                    Our blog app is designed to provide insightful articles and tutorials to developers and technology enthusiasts.
                    It features a collection of blog posts on React, web development, and other exciting topics.
                </p>
                <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                    <p className="text-gray-600 mb-4">
                        Our mission is to make learning web development easier and more accessible by providing high-quality articles,
                        tutorials, and resources for developers of all skill levels.
                    </p>
                    <p className="text-gray-600">
                        Whether you're a beginner or an experienced developer, we have something for everyone. Join our community today!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
