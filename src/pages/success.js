import Header from "../components/Header";
import Head from "next/head";

import { CheckCircleIcon } from "@heroicons/react/solid";
import {useRouter} from "next/router"
const success = () => {
    const router = useRouter()
  return (
    <div className="bg-gray-100  h-screen">
      <Head>
      <title>Amazon | Success</title>
      </Head>
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10 " />
            <h1 className="text-3xl  ">
              Thank you your order has been confirmed
            </h1>
          </div>
          <p>
                      Thank you for shopping we,ll send a confirmation when item has
                      shipped if you like to check the status of item please click the
                      link below
          </p>
                  <button onClick={()=>router.push("/orders")} className="button mt-8">Go to my orders</button>
        </div>
      </main>
    </div>
  );
};

export default success;
