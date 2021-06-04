import moment from "moment";
import Currency from "react-currency-formatter";
const Order = ({ id, amount, amountShipping, items, timestamp, images }) => {
  return (
    <div className="relative rounded-xl border">
      <div className="flex items-center space-x-10 p-5 bg-gray-200 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">Order Placed</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>
        <div>
          <p className="font-bold text-xs">Total</p>
          <p>
            <Currency quantity={amount} /> - Next Day delivery{" "}
            <Currency quantity={amountShipping} />
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-base self-end flex-1 text-right text-gray-900">
          {items?.length} Items
        </p>

        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          Order <b># {id}</b>
        </p>
      </div>
      <div className="p-5 sm:p-10">
        {/* {items.map((qty) => {
          return (
            <p className="flex">{qty.quantity}</p>
          );
        })} */}
        <div className="flex space-x-6 overflow-x-auto">
          {images?.map((image, i) => {
            return (
              <img
                key={i}
                src={image}
                className="h-20 object-contain sm:h-32"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Order;