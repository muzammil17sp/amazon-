import Header from "../components/Header";
import Image from "next/image";
import Head from "next/head";

import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromice = loadStripe("pk_test_51IwamyLORq85fxv2nZRZkZ4EI8PQtYQfaXEqmFI6MzjM8ySynYEZL9tsb6czlvzPWwWctExf8rTTR6uIDKyKGIeU00QLnSG2wk");
const checkout = () => {
  const [session] = useSession();
  const { cartItem } = useSelector((state) => state.basket);

  const item = cartItem.reduce((a, b) => a + b.qty, 0);
  const total = cartItem.reduce((a, b) => a + b.price * b.qty, 0);

  const createCheckoutSession = async () => {
    const stripe = await stripePromice;
    // calling the backend api to create a checkout session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      item: cartItem,
      email: session.user.email,
    });

    // redirecting user to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) alert(result.error.message);
  };

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon | Checkout</title>
      </Head>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {cartItem.length === 0
                ? "Your Shopping Cart is empty."
                : "Your Shopping Cart"}
            </h1>

            {cartItem.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
                qty={item.qty}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col bg-white p-10 shadow-md">
          {cartItem.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal {item} items :
                <span className="font-bold">
                  <Currency quantity={total.toFixed()} currency="GBP" />
                </span>
              </h2>
              <button
                role="link"
                disabled={!session}
                onClick={createCheckoutSession}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Signin to Checkout" : "Proceed to Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default checkout;
