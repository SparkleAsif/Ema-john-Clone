import React from 'react';

const Cart = ({cart}) => {
    // const cart = props.cart;  methode 1
    // const {cart} =props;         methode 2

    let totalPrice=0;
    let totalShipping=0;
    
    for(const product of cart){
        totalPrice=totalPrice+product.price;
        totalShipping=totalShipping+ product.shipping;
    }
    const tax =totalPrice*7/100;
    const grand=totalPrice+totalShipping+tax;

    return (
        <div className='bg-orange-300 leading-10 p-6 sticky top-0'>
            <h6 className='font-bold text-xl bg-orange-300'>
                Order Summary</h6>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:$ {totalPrice} </p>
            <p>Total Shipping Carge:$ {totalShipping} </p>
            <p>Tax:$ {tax} </p>
            <h6 className='font-bold text-sm'>Grand Total: $ {grand.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;