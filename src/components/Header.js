import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";
import SideNav from "./SideNav";

const Header = () => {
  const [session] = useSession();
  const [openNav, setopenNav] = useState(false);
  const router = useRouter();
  const { cartItem } = useSelector((state) => state.basket);
  const openSideNav = () => {
    setopenNav(!openNav);
  };
  return (
    <header className="relative sticky top-0 right-0 left-0 z-20 ">
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
            onClick={() => router.push("/")}
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
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? ` hello ${session.user.name}` : "Signin"}</p>
            <p className="p">Acount & Lists</p>
          </div>
          <div
            className="link"
            onClick={() => session && router.push("/orders")}
          >
            <p>Return</p>

            <p className="p">& Orders</p>
          </div>
          <div
            className=" relative link flex items-center"
            onClick={() => router.push("/checkout")}
          >
            <span className="absolute top-0 right-0  md:right-10 bg-yellow-400 h-4 w-4 rounded-md text-center text-black">
              {cartItem.length}
            </span>
            <ShoppingCartIcon className="h-10 " />
            <p className="p  hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-amazon_blue-light space-x-3 p-2 pl-6 text-white text-sm">
        <p className="flex items-center cursor-pointer" onClick={openSideNav}>
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link ">Prime Videos </p>
        <p className="link">Amazon Business</p>
        <p className="link">today's Deals</p>
        <p className="hidden link lg:inline-flex">Electronics</p>
        <p className="hidden link lg:inline-flex">Food & Grocery</p>
        <p className="hidden link lg:inline-flex">Prime</p>
        <p className="hidden link lg:inline-flex">Buy Again</p>
        <p className="hidden link lg:inline-flex">Shopper Toolkit</p>
        <p className="hidden link lg:inline-flex">Health & Personal Care</p>
      </div>
      <div className="absolute top-0 lg:w-3/12  md:w-4/12 ">{openNav && <SideNav setopenNav={setopenNav} />}</div>
    </header>
  );
};

export default Header;
