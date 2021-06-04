import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/basketAction";

const MIN_RATING = 1;
const MAX_RATING = 5;

const Product = ({ id, image, title, description, category, price }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const product = {
      id,
      image,
      title,
      description,
      category,
      price,
      hasPrime,
    };
dispatch(addToCart(product))

  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-sm text-gray-400 italic">
        {category}
      </p>
      <Image   src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div className="flex items-center">
          <img
            src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062018/untitled-4_14.png?7AQT1jLLtw4BOGJRIVFnqS736L1dd4dm&itok=2JbwG9t5"
            className="w-12"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto  button " onClick={addItemToCart}>
        Add To Basket
      </button>
    </div>
  );
};

export default Product;
