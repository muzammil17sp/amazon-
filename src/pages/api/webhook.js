import { buffer } from "micro";
import * as admin from "firebase-admin";

// connection to firebase from firebase
const serviceAcccount = require("../../../permission.json");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAcccount),
    })
  : admin.app();
//   connection to stripe
const stripe = require("stripe")("sk_test_51IwamyLORq85fxv2VFZbckr0YqooUZaVfoNzpaN0cJCXI5fWE0elnf5QavKYslnwK0aBYHG9zK1t1mNoZBxmW01R00I7Jfm5do");
const endPointSecret = "whsec_qyFFi9BKNqzmvpEZAQXSe4xqdFQs5kCL"
const fulfilOrder = async (session) => {
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("order")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
        Images: JSON.parse(session.metadata.images),
        title: JSON.parse(session.metadata.title),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`success Order ${session.id} had been addes to the database`);
    });
};

export default async (request, response) => {
  if (request.method === "POST") {
    const requestBuffer = await buffer(request);
    const payload = requestBuffer.toString();
    const sig = request.headers["stripe-signature"];
    let event;
    // verify the event come from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endPointSecret);
    } catch (error) {
      console.log("error" + error);
      return response.status(400).send(`Webhook error ${error.message}`);
    }
    //   handle the complete checkout session
    if ((event.type = "checkout.session.completed")) {
      const session = event.data.object;
      //   fulfil the order  post the order detail to firebase database
      return fulfilOrder(session)
        .then(() => response.status(200))
        .catch((error) => response.status(400).send(`Webhook error ${error}`));
    }
  }
};
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
