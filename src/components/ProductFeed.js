import Product from "./Product";

const ProductFeed = ({ product }) => {
  console.log(product);
  return (
    <div className="grid grid-flow-row-dense  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {product
        .slice(0, 4)
        .map(({ id, image, title, description, category, price }) => {
          return (
            <Product
              key={id}
              id={id}
              image={image}
              title={title}
              description={description}
              category={category}
              price={price}
            />
          );
        })}
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonKarigar/Saheli_store_banner.png"
        className="md:col-span-full "
        alt=""
      />
      <div className="md:col-span-2">
      {product
        .slice(4, 5)
        .map(({ id, image, title, description, category, price }) => {
          return (
            <Product
              key={id}
              id={id}
              image={image}
              title={title}
              description={description}
              category={category}
              price={price}
            />
          );
        })}
      </div>
      {product
        .slice(5, product.length)
        .map(({ id, image, title, description, category, price }) => {
          return (
            <Product
              key={id}
              id={id}
              image={image}
              title={title}
              description={description}
              category={category}
              price={price}
            />
          );
        })}
    </div>
   
  );
};

export default ProductFeed;
