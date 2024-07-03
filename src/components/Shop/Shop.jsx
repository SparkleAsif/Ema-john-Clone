import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { FaArrowRight } from "react-icons/fa";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    //product load
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id
    for (const id in storedCart) {
      // step 2: get the product using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // step 3: get quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the addedproduct to the save Produt
        savedCart.push(addedProduct);
      }
      //   console.log("Added Product", addedProduct);
    }
    // step 5: set the cart
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];
    // const newCart = [...cart, product];
    // if product doest exist in the cart, then set quantity
    // IF Exist update quantity by 1;
    const exist = cart.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd) => pd.id != product.id);
      newCart = [...remaining, exist];
    }

    setCart(newCart);
    addToDb(product.id);
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
      <div className="products-container p-3 m-12 grid grid-cols-3 gap-11 ">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart ">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to={"/order"}>
            <button className="flex items-center justify-between w-[100%] m-[10px] mx-auto border-black rounded-md p-1 bg-orange-500 text-white">
              Review Order
              <FaArrowRight className="text-2xl" />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
