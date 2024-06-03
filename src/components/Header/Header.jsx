import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='flex justify-between items-center min-w-[100%] max-w-[1440px] px-20 py-3 bg-[#1C2B35]'>
            <img className='' src={logo} alt="" />
            <div className='flex space-x-4 text-white' >
                <a className='text-white ml-6 hover:text-orange-500' href="shop">shop</a>
                <a className='text-white ml-6 hover:text-orange-500' href="Order">Order</a>
                <a className='text-white  ml-6 hover:text-orange-500' href="Inventory"> Inventory</a>
                <a className='text-white ml-6 hover:text-orange-500' href="Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;