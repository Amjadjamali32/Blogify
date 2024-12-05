import React from 'react';
import blogsArray from '../posts.js'; // Import the blogsArray
import BlogPost from './BlogPost';

const BlogList = () => {
    return (
        <div className='pt-16'>
        <div className="container mx-auto p-4">
            <h2 className='text-center font-extrabold my-4 text-3xl'>Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {blogsArray.map((blog) => (
                    <BlogPost
                        key={blog.id}
                        title={blog.title}
                        image={blog.image}
                        description={blog.description}
                        content={blog.content}
                        id={blog.id}
                    />
                ))}
            </div>
        </div>
        </div>
    );
};

export default BlogList;
