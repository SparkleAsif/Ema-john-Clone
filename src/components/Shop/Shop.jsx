import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
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
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
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
        <Cart cart={cart}> </Cart>
      </div>
    </div>
  );
};

export default Shop;
