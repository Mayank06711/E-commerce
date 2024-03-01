import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ products, innerPage, headingText }) => {
  // since we have not sent innerPage from home page sp sectipon heading will be shown only on hoe page it will not be hsown onn category page
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}

        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </div>
    </div>
  );
};

export default Products;
