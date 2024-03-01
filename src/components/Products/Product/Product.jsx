import { useNavigate } from "react-router-dom";
import "./Product.scss";
// import prod1 from "../../../assets/products/earbuds-prod-1.webp";
const Product = ({ id, data }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => {
        navigate("/product/" + id);
      }}
    >
      <div className="thumbnail">
        <img
          src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url}
          alt="g"
        />
      </div>
      <div className="prod-details">
        <span className="name"> {data?.Title}</span>
        <span className="price">&#8377;{data.price}</span>
        {/* &#8377 is uniique code for ruppee sign */}
      </div>
    </div>
  );
};

export default Product;
