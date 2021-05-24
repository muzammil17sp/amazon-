import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex bg-yellow-400  hover:bg-yellow-500 items-center  h-10  rounded-md flex-grow cursor-pointer">
          <input
            type="text"
            className="p-2 h-full flex-grow w-6 flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-11 p-4" />
        </div>
        <div className="text-white flex items-center text-xs  space-x-6 mx-4 whitespace-nowrap ">
          <div className="link">
            <p>Hello Muzammil</p>
            <p className="p">Acount & Lists</p>
          </div>
          <div className="link">
            <p>Return</p>

            <p className="p">& Orders</p>
          </div>
                  <div className=" relative link flex items-center">
                      <span className="absolute top-0 right-0  md:right-10 bg-yellow-400 h-4 w-4 rounded-md text-center text-black">0</span>
            <ShoppingCartIcon className="h-10 " />
            <p className="p  hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>
          <div className="flex items-center bg-amazon_blue-light space-x-3 p-2 pl-6 text-white text-sm">
              <p className="flex items-center"><MenuIcon className="h-6 mr-1" />All</p>
              <p className="link ">Prime Videos </p>
              <p className="link">Amazon Business</p>
              <p className="link">today's Deals</p>
              <p className="hidden link lg:inline-flex">Electronics</p>
              <p  className="hidden link lg:inline-flex">Food & Grocery</p>
              <p  className="hidden link lg:inline-flex">Prime</p>
              <p  className="hidden link lg:inline-flex">Buy Again</p>
              <p  className="hidden link lg:inline-flex">Shopper Toolkit</p>
              <p  className="hidden link lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
