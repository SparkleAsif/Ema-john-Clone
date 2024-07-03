import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import REviewItem from "../ReviewItem/REviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FaCreditCard } from "react-icons/fa";

const Order = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id); // delete from client side m--55-6
    setCart(remaining); // updating
    removeFromDb(id); //server side deleting
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div
      className="shop-container grid "
      style={{ gridTemplateColumns: "4fr 1fr" }}
    >
      <div className="review-container  m-[50px] mx-auto grid  gap-[25px] grid-cols-1  ">
        {cart.map((product) => (
          <REviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          ></REviewItem>
        ))}
      </div>
      <div className=" ">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to={"/checkout"}>
            <button className="flex items-center justify-between w-[100%] m-[10px] mx-auto border-black rounded-md p-1 bg-orange-500 text-white">
              Proceed Checkout <FaCreditCard className="text-2xl" />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
