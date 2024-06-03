import React from 'react';
import { IoCart } from "react-icons/io5";

const Product = (props) => {

    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product-container w-[300px] h-[510px] border rounded-lg relative'>
            <img className='w-[286px] h-[286px] rounded-[7px] m-2' src={img} alt="" />
            <div className='ml-[14px] space-y-1'>
                <h6 className='font-body font-bold leading-6 text-xl tracking-[0.0015em] '>{name}</h6>
                <p className='font-bold'>$Price : {price}</p>
                <div className='space-y-2'>

                    <p className='mt-5'>Manufacturer : {seller}</p>
                    <p>ratings :{ratings}Stars</p>
                </div>
            </div>

            <button onClick={() => handleAddToCart(props.product)} className='bg-orange-300 w-full absolute inset-x-0 bottom-0 p-3 rounded-b-md hover:bg-orange-400 flex justify-center items-center '>
                Add To Cart 
                <IoCart className='text-xl' />

            </button>


        </div>
    );
};

export default Product;