import moment from "moment";
import { getSession } from "next-auth/client";
import Head from "next/head";
import db from "../../firebase";
import Header from "../components/Header";
import Order from "../components/Order";

const Orders = ({ orders, session }) => {

  return (
    <div>
      <Head>
      <title>Amazon | Orders</title>
      </Head>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-2 border-yellow-400">
          Your orders
        </h1>
        {session ? (
          <h2>{orders.length} orders </h2>
        ) : (
          <h2>Signin to see your orders</h2>
        )}
        <div className="mt-5 space-y-4">
          {orders?.map(
            ({ id, timestamp, images, amountShipping, items, amount }) => {
              return (
                <Order
                  key={id}
                  id={id}
                  timestamp={timestamp}
                  images={images}
                  amount={amount}
                  amountShipping={amountShipping}
                  items={items}
                />
              );
            }
          )}
        </div>
      </main>
    </div>
  );
};

export default Orders;
export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  // get the user login credentials
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }
  // firebase db
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("order")
    .orderBy("timestamp", "desc")
    .get();

  // stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().Images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      titles: order.data().title,
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );
  return {
    props: {
      orders,
      session
    },
  };
}
