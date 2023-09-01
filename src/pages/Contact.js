import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900">Contact Us</h1>
          <p className="mt-2 text-lg text-gray-600">
            Have a question or feedback? We're here to help! Please fill out the form below to get in touch with us.
          </p>

          <div className="mt-8">
            <form className="max-w-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-500" />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-500" />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-500"></textarea>
              </div>

              <button type="submit" className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-opacity-50">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
