import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React, { useState } from 'react';

const TrackOrderPage = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const trackOrder = (e) => {
    e.preventDefault();

    // make an API call to your backend to fetch the order status 

    const fetchedOrderStatus = {
      status: 'Shipped',
      date: 'August 25, 2023',
    };

    setOrderStatus(fetchedOrderStatus);
  };

  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Track Your Order</h1>

        <form onSubmit={trackOrder}>
          <div className="mb-4">
            <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700">
              Order Number
            </label>
            <input
              type="text"
              id="orderNumber"
              name="orderNumber"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-opacity-50"
          >
            Track Order
          </button>
        </form>

        {orderStatus && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2">Order Status</h2>
            <p className="text-sm text-gray-600">Status: {orderStatus.status}</p>
            <p className="text-xs text-gray-400">Date: {orderStatus.date}</p>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default TrackOrderPage;
