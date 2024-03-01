import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const Context = createContext();

// creating a component

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const location = useLocation();

  useEffect(()=>{window.scrollTo(0,0)}, [location])

  useEffect(() => {
   let count = 0;
   cartItem.map((item)=>count+=item.attributes.quantity)
   setCartCount(count)




    let subTotal = 0;

    cartItem.map(
      (items) =>
        (subTotal += items.attributes.price * items.attributes.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartItem]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItem];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity; //if  product is in cart
    } else {
      product.attributes.quantity = quantity; // new product added
      items = [...items, product];
    }
    setCartItem(items);
  };
  const handleRemoveFromCart = (product) => {
    let items = [...cartItem];
    items = items.filter((p) => p.id !== product.id);
    setCartItem(items);
  };
  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItem];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItem(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItem,
        setCartItem,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};
// children will be all components that we will be adding in AppContext component

export default AppContext;
