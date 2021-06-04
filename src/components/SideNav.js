import {GlobeAltIcon , FlagIcon, XIcon} from "@heroicons/react/solid"
import { signin, signIn, signout, signOut, useSession } from "next-auth/client";
const SideNav = ({ setopenNav }) => {
  const [session] = useSession()
  // const setUser = () => {
  //   if (session.user.email) {
  //      signOut
  //   }
  //    signin
  // }
  return (
    <div className="h-screen overflow-scroll 	z-1 bg-white relative  ">
      <div className="flex flex-col" >
        <h2 onClick={session?signOut: signin} className="p-4  bg-gray-800 w-full text-white text-2xl font-bold">
          Hello, {session ? session.user.name : "Signin" }
        </h2>
        <XIcon className="h-12 absolute text-white right-0 mt-2"  onClick={()=>setopenNav(false)} />
        <div className="space-y-4 mt-4 mx-5">
          <h3 className="font-bold text-2xl">Digital Content & Devices</h3>
          <p className="text-1xl ">Amazon Music</p>
          <p className="text-1xl ">Kindle E-readers & Books</p>
          <p className="text-1xl ">Appstore for Android</p>
          <h3 className="font-bold text-2xl">Shop By Department</h3>
          <p className="text-1xl ">Electronics</p>
          <p className="text-1xl">Computer</p>
          <p className="text-1xl">Arts & Crafts</p>
          <h3 className="font-bold text-2xl">Programs & Features</h3>
          <p className="text-1xl">Gift Cards</p>
          <p className="text-1xl">Amazon Live</p>
          <p className="text-1xl"> International Shopping</p>
          <h3 className="font-bold text-2xl">Help & Setting</h3>
          <p className="text-1xl"> Your Account</p>
          <p className="text-1xl flex items-center"><GlobeAltIcon className="h-8 text-gray-400"/> English</p>
          <p className="text-1xl flex items-center "><FlagIcon className="h-8 text-red-500"/> United State</p>
          <p className="text-1xl">Customer Services</p>
          <p className="text-1xl font-bold link" onClick={session? signout : signIn}> { session? "signout" : "signin"}</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
