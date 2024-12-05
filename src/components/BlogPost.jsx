import React from 'react';
import { Link } from 'react-router-dom'; 

const BlogPost = ({ title, image, description, id }) => {
    const truncatedDescription = description.split(' ').slice(0, 30).join(' ') + (description.split(' ').length > 30 ? '...' : '');
    const truncatedTitle = title.length > 30 ? title.substring(0, 30) + '...' : title;

    return (
        <div className="blog-post bg-white p-4 rounded-lg shadow-lg flex flex-col h-full">
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">{truncatedTitle}</h2>
            <p className="text-gray-600 mb-4 flex-grow truncate">{truncatedDescription}</p>
            <Link
                to={`/blog/${id}`}
                className="text-blue-600 hover:text-blue-800 font-semibold"
            >
                Read More
            </Link>
        </div>
    );
};

export default BlogPost;
