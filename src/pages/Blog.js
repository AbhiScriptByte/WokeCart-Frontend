import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Blog from '../components/blog';

function BlogPage() {
  return(
    <>
    <Navbar/>
    <div>
        <Blog> </Blog>
    </div>
    <Footer/>
    </> 
)
}
export default BlogPage;
