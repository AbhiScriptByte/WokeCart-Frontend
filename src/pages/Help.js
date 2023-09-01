import React, { useState } from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const HelpPage = () => {
  const [faqItems, setFaqItems] = useState([
    { question: "How do I place an order?", answer: "Placing an order is easy! Simply browse our products, add items to your cart, and proceed to checkout." },
    { question: "What payment methods do you accept?", answer: "We accept major credit cards and PayPal as payment methods." },
    { question: "How can I track my order?", answer: "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your order's status." },
    { question: "What's your return policy?", answer: "We offer a 30-day return policy for most items. Please review our Return Policy page for more details." },
    { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to many countries. Shipping fees and delivery times may vary based on your location." },
  ]);

  const toggleAnswer = (index) => {
    const updatedFaqItems = [...faqItems];
    updatedFaqItems[index].open = !updatedFaqItems[index].open;
    setFaqItems(updatedFaqItems);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900">Help Center</h1>
          <p className="mt-2 text-lg text-gray-600">
            Welcome to our Help Center. If you have any questions or need assistance, please find the information below or contact our customer support.
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800">Frequently Asked Questions</h2>
            <div className="mt-4 space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                  <button className="flex justify-between w-full" onClick={() => toggleAnswer(index)}>
                    <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                    <span className="text-gray-600">{item.open ? '-' : '+'}</span>
                  </button>
                  {item.open && <p className="mt-2 text-gray-600">{item.answer}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
          <p className="mt-2 text-gray-600">
            If you need further assistance, feel free to contact our customer support team:
          </p>
          <ul className="mt-4 space-y-2">
            <li>Email: support@wokecart.com</li>
          </ul>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpPage;
