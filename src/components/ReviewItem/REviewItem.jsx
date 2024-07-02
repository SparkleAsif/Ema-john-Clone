import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const REviewItem = ({ product, handleRemoveFromCart }) => {
  const { id, img, name, quantity, price } = product;
  return (
    <div className="review-item flex border border-gray-400 rounded-sm p-2 w-[581px] h-[107px] space-x-3 ">
      <img src={img} alt="" className="w-[91px] h-[91px] " />
      <div className="flex-grow">
        <h2 className="text-lg font-bold">{name}</h2>
        <p>
          Price: <span className="text-yellow-500">${price}</span>
        </p>
        <p>
          Order Quantity <span className="text-yellow-600">{quantity}</span>{" "}
        </p>
      </div>
      <div className=" flex items-center justify-center">
        <button
          onClick={()=>handleRemoveFromCart(id)}
          className="p-3 w-[55px] h-[55px] text-red-600 text-2xl border rounded-full items-center justify-center flex bg-red-200  "
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default REviewItem;
