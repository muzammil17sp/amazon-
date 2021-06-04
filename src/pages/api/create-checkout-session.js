const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export default async (request, response) => {
  const { item, email } = request.body;


  const transformedItems = item.map((value) => ({
    description: value.description,
    quantity: value.qty,
    price_data: {
      currency: "gbp",
      unit_amount: value.price * 100,
      product_data: {
        name: value.title,
        images: [value.image],
      },
    },
  }));
 
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1IwlWVLORq85fxv29i1YWS9p"],
    shipping_address_collection: {
      allowed_countries: ["BD", "GB", "CA", "IN", "NL"],
    },
    line_items: transformedItems,

    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(item.map((item) => item.image)),
      title: JSON.stringify(item.map((item) => item.title)),
    },
  });
  response.status(200).json({
    id: session.id,
  });
};
