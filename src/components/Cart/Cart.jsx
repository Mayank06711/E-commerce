import { useContext } from "react";
import { Context } from "../../utils/context";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import {loadStripe} from "@stripe/stripe-js";
import makePaymentRequest  from "../../utils/api";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
const Cart = ({ setShowCart }) => {
  const { cartItem , cartSubTotal } = useContext(Context);
  
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);



  return (
    <div className="cart-panel">
      <div className="opac-layer">opac layer </div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>

        {!cartItem?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No Products in Cart.</span>
            <button className="return-cta">Return To Shop</button>
          </div>
        )}

        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal:</span>
              <span className="text total">&#8377;{cartSubTotal}</span>
            </div>
            <div className="button">
              <button className="checkout-cta" >Checkout</button>
              {/* onClick={handlePayment} */}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
