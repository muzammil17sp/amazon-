import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { adjustQuantity, RemovefromCart } from "../actions/basketAction";
import Fade from "react-reveal/Fade";

const CheckoutProduct = ({
  id,
  title,
  image,
  description,
  price,
  hasPrime,
  rating,
  qty,
}) => {
  const dispatch = useDispatch();
  const [Quantity, setQuantity] = useState(qty);
  const removeFromCart = () => {
    dispatch(RemovefromCart(id));
  };

  useEffect(() => {
    dispatch(adjustQuantity(id, Quantity));
  }, [Quantity, setQuantity]);

  return (
    <Fade right>
      {" "}
      <div className="grid grid-cols-5">
        <Image src={image} height={200} width={200} objectFit="contain" />
        <div className="col-span-3 mx-5">
          <p>{title}</p>

          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
              ))}
          </div>

          <p className="text-xs my-2 line-clamp-3">{description}</p>
          <br />
          <p>
            {qty} X {price} ={" "}
            <Currency quantity={+qty * price.toFixed()} currency="GBP" />
          </p>

          {hasPrime && (
            <div className="flex items-center space-x-2">
              <img
                src="https://links.papareact.com/fdw"
                className="w-12"
                loading="lazy"
              />
              <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center  space-x-2 my-auto justify-self-end">
          <div className="flex space-x-3">
            <button
              className="button  text-2xl"
              onClick={() => setQuantity(Quantity + 1)}
              disabled={Quantity === 10}
            >
              +
            </button>
            <button
              disabled={Quantity === 1}
              className="button  text-2xl"
              onClick={() => setQuantity(Quantity - 1)}
            >
              -
            </button>
          </div>

          <button className="button  text-1xl mt-4" onClick={removeFromCart}>
            Remove from Cart
          </button>
        </div>
      </div>
    </Fade>
  );
};

export default CheckoutProduct;
