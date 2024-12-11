import React from 'react';
import { useParams } from 'react-router-dom';
import blogsArray from '../posts.js';

const BlogPostPage = () => {
    const { id } = useParams();
    const blog = blogsArray.find((blog) => blog.id === parseInt(id)); 

    if (!blog) {
        return <div>Blog not found!</div>; 
    }

    return (
        <div className='pt-20'>
            <div className="blog-post-page container mx-auto p-4">
                <h1 className="text-3xl font-extrabold mb-4">{blog.title}</h1>
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover rounded-md mb-4"
                />
                <p className="text-gray-600 mb-4">{blog.content}</p>
                <p className="font-semibold text-gray-800">Author: {blog.author}</p>
                <p className="text-gray-400">Date: {blog.date}</p>
            </div>
        </div>
    );
};

export default BlogPostPage;
