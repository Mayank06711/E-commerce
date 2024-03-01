import { useContext } from "react";
import { MdClose } from "react-icons/md";
import Prod from "../../../assets/products/earbuds-prod-3.webp";
import { Context } from "../../../utils/context";
import "./CartItem.scss";
const CartItem = () => {
  const { cartItem, handleAddToCart, handleRemoveFromCart , handleCartProductQuantity } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItem.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
          </div>
          <div className="prod-details">
            <span className="name">{item.attributes?.Title}</span>
            <MdClose className="close-btn" onClick={()=>handleRemoveFromCart(item)}/>
            <div className="quantity-buttons">
              <span onClick={()=>handleCartProductQuantity('dec' , item)}>-</span>
              <span>{item.attributes?.quantity}</span>
              <span onClick={()=> handleCartProductQuantity('inc' , item)}>+</span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>X</span>
              <span className="highlight">&#8377;{item.attributes?.price }</span>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="cart-product">
        <div className="img-container">
          <img src={Prod} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">product name</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>+</span>
            <span>5</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>X</span>
            <span>&#8377;4553</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CartItem;
