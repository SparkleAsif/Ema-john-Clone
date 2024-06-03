import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

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
            <div className="cart-container p-3 bg-orange-300">
                <h4>Order Summary</h4>
                <p>Selected Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;