import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function AdminBlogEditorPage() {
  const [content, setContent] = useState('');

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <>
    <Navbar />
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Write a New Blog Post</h2>
      <ReactQuill value={content} onChange={handleContentChange} />
      <br></br>
      <a href="/">
      <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Post
              </button>
              <h4> Note: Your Blog publish after reviewed.</h4>
              </a>
    </div>
    <Footer />
    </>
  );
}

export default AdminBlogEditorPage;
