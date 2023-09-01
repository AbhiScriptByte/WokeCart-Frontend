import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  // Check if 'item' is undefined or null
  if (!item) {
    return null; // or some appropriate placeholder content
  }

  return (
    <Link className="block" to={`/product/${item.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
        <div className="relative">
          {item.attributes?.isNew && (
            <span className="absolute top-0 left-0 bg-green-500 text-white py-1 px-2 rounded-br-md">
              New Season
            </span>
          )}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{item.attributes?.title}</h2>
          <div className="flex justify-between">
            <h3 className="text-sm text-gray-500">${item.oldPrice || item.attributes?.price + 20}</h3>
            <h3 className="text-lg font-semibold">${item.attributes?.price}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
