import React from 'react';

function BlogPost({ post }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-500 mb-1">Published on {post.date}</p>
      <p className="text-gray-500 mb-3">By {post.author}</p>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;
