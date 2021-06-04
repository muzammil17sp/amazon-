import Product from "./Product";
import Fade from "react-reveal/Fade";

const ProductFeed = ({ product }) => {
  return (
    <div className="grid grid-flow-row-dense  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      <Fade right>
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
      </Fade>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonKarigar/Saheli_store_banner.png"
          className="md:col-span-full "
          alt=""
        />
      <Fade right>
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
      </Fade>
      <Fade right>
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
      </Fade>
    </div>
  );
};

export default ProductFeed;
