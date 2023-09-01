import React from 'react';
import BlogPost from '../blogPost';
import blogData from '../blogData'; 

// To Do: 
// create blog section by admin
// store blog to backend
// show with api 

function Blog() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4"></h2>
      <a href="admin/write-blog">
      <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Write a Blog
              </button>
              </a>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {blogData.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
