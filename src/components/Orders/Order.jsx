import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import REviewItem from "../ReviewItem/REviewItem";
import { removeFromDb } from "../../utilities/fakedb";

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart]= useState(savedCart);
    const handleRemoveFromCart = (id)=>{
     const remaining = cart.filter(product=> product.id !==id); // delete from client side
     setCart(remaining); // updating 
     removeFromDb(id); //server side deleting
     
    }
  return (
    <div
      className="shop-container grid "
      style={{ gridTemplateColumns: "4fr 1fr" }}
    >
      <div className="review-container  m-[50px] mx-auto grid  gap-[25px] grid-cols-1  ">
      {
          cart.map(product => <REviewItem
          key ={product.id}
          product={product}
          handleRemoveFromCart = {handleRemoveFromCart}
          ></REviewItem>)
        }
      </div>
      <div className=" ">
        <Cart cart={cart}> </Cart>
      </div>
    </div>
  );
};

export default Order;
