import React from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='flex justify-between items-center min-w-[100%] max-w-[1440px] px-20 py-3 bg-[#1C2B35]'>
            <img className='' src={logo} alt="" />
            <div className='flex space-x-4 text-white' >
                <Link className='text-white ml-6 hover:text-orange-500' to="/">shop</Link>
                <Link className='text-white ml-6 hover:text-orange-500' to="/Order">Order</Link>
                <Link className='text-white  ml-6 hover:text-orange-500' to="/inventory"> Inventory</Link>
                <Link className='text-white ml-6 hover:text-orange-500' to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;