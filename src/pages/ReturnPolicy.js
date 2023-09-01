import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>

          <p className="mb-6">
            We create an environment where you can easily find the best
            products. We curate a collection of the best products from multiple
            stores in one place. In our collection, you get the products you
            need at the lowest possible cost.
          </p>

          <h2 className="text-2xl font-bold mb-3">WOKE CART LLC</h2>

          <p className="mb-6">
            At WOKE CART LLC, we are dedicated to providing you with a
            delightful shopping experience. Our ecommerce platform is designed
            to offer a wide range of products, exceptional customer service, and
            secure transactions. Whether you're looking for trendy fashion,
            electronics, home essentials, or more, we've got you covered.
          </p>

          <h2 className="text-2xl font-bold mb-3">Our Mission</h2>

          <p className="mb-6">
            Our mission is to make online shopping fun and convenient for
            everyone. We strive to offer a curated selection of high-quality
            products at competitive prices, ensuring that our customers find
            exactly what they need. We are committed to continuous improvement
            and innovation to meet the evolving needs of our customers.
          </p>

          <h2 className="text-2xl font-bold mb-3">Quality and Trust</h2>

          <p className="mb-6">
            At WOKE CART LLC, we prioritize quality and trust. We work with
            reputable suppliers and brands to deliver authentic products that
            meet our strict quality standards. Our customers can shop with
            confidence, knowing that every purchase is backed by our commitment
            to customer satisfaction and hassle-free returns.
          </p>

          <h2 className="text-2xl font-bold mb-3">Secure Shopping</h2>

          <p className="mb-6">
            Your security is of utmost importance to us. We have implemented
            robust security measures to protect your personal and payment
            information. Our website is secured with industry-standard
            encryption to ensure safe and secure online transactions. Shop with
            peace of mind, knowing that your data is protected.
          </p>

          <h2 className="text-2xl font-bold mb-3">
            Exceptional Customer Support
          </h2>

          <p className="mb-6">
            Our dedicated customer support team is here to assist you at every
            step of your shopping journey. If you have any questions, concerns,
            or need assistance with your order, feel free to reach out to our
            friendly support representatives. We are committed to providing
            prompt and helpful solutions to enhance your shopping experience.
          </p>

          <h2 className="text-2xl font-bold mb-3">Join WOKE CART Community</h2>

          <p className="mb-6">
            Join our vibrant and growing community of happy shoppers. Follow us
            on social media and subscribe to our newsletter to stay updated on
            the latest product launches, exclusive deals, and exciting
            promotions. We love to connect with our customers and hear your
            feedback.
          </p>

          <p>
            Thank you for choosing WOKE CART LLC. We look forward to serving you
            and providing you with a delightful shopping experience. Happy
            shopping!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
