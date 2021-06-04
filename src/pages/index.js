import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ product }) {
  
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl  mx-auto">
        <Banner />
        <ProductFeed product={product} />
      </main>
      <Footer/>
    </div>
  );
}
export async function getServerSideProps(context) {
  const product = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
  return {
    props: {
    product
  }}
}
