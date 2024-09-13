import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Header = () => {

    const {user, logOut} = useContext(AuthContext);
    console.log(user);
    
    const handleLogOut=()=>{
        logOut()
        .then(result=>{

        })
        .catch(error =>console.error(error))
    }


    return (
        <nav className='flex justify-between items-center min-w-[100%] max-w-[1440px] px-20 py-3 bg-[#1C2B35]'>
            <img className='' src={logo} alt="" />
            <div className='flex space-x-4 text-white' >
                <Link className='text-white ml-6 hover:text-orange-500' to="/">shop</Link>
                <Link className='text-white ml-6 hover:text-orange-500' to="/Order">Order</Link>
                <Link className='text-white  ml-6 hover:text-orange-500' to="/inventory"> Inventory</Link>
                <Link className='text-white ml-6 hover:text-orange-500' to="/login">Login</Link>
                <Link className='text-white ml-6 hover:text-orange-500' to="/signUp">Sign Up</Link>
               {user && <span className='text-sm' >{user.email}
                <button 
               className='border rounded-md p-1 ml-1 bg-white text-black hover:bg-orange-500'
               onClick={handleLogOut}>Sign Out</button></span>}
            </div>
        </nav>
    );
};

export default Header;