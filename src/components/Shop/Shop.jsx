import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts]=useState([]);
    const [cart, setCart]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[]);

    const handleAddToCart = (product)=>{
        const newCart=[...cart, product];
        setCart(newCart);

    }

    return (
        <div className='shop-container grid ' style={{ gridTemplateColumns: '4fr 1fr' }}>
            <div className="products-container p-3 m-12 grid grid-cols-3 gap-11 ">
                {
                    products.map( product=><Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart '>
                <Cart cart={cart}> </Cart>
            </div>
           
        </div>
    );
};

export default Shop;