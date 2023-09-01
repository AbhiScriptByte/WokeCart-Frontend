import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from 'react-redux';

import CheckoutForm from "./CheckoutForm";
import "../Stripe.css";
import { selectCurrentOrder } from "../features/order/orderSlice";

const stripePromise = loadStripe("pk_test_51NbSpRSD71ZLfzgHyvQOoz6PTFKBY5wKQFgl1ebp5h49nsx1WZSyl6rdPk1Jb3xlsIx5D0sortpEfLFEfU3kezZM00A2TZJDjd");

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state
  const currentOrder = useSelector(selectCurrentOrder);

  useEffect(() => {
    if (currentOrder) {
      setLoading(true); // Set loading to true before fetching
      fetch("/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ totalAmount: currentOrder.totalAmount, orderId: currentOrder.id }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
          setLoading(false); // Set loading to false after fetching
        })
        .catch((error) => {
          console.error("Error fetching payment intent:", error);
          setLoading(false); // Set loading to false in case of error
        });
    }
  }, [currentOrder]);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="Stripe">
      {loading ? (
        <p>Loading...</p>
      ) : (
        clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )
      )}
    </div>
  );
}
