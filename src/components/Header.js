import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    setUserName('Moyo');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };
  return (
    <>
    <header style={{zIndex:"9"}} className=" top-0 sticky  bg-white flex justify-between lg:h-[60px] items-center lg:mx-[3rem] lg">
          <div >
            <Link to={'/'} href="" className=''>
              <img src={logo} alt="Logo" className=' w-20 h-17 lg:w-40 lg:h-20 '/>
            </Link>
          </div>
          
          <div className=' lg:flex items-center  lg:border rounded-full lg:py- lg:px-4 lg:w-[400px] lg:gap-2 lg:justify-between'>
            <div>
              <input type="text" placeholder='Search by Event ' className=' hidden lg:block lg:border outline-none border-transparent lg:flex-1 lg:w-[300px] lg:p-4 lg:py-2 lg:px-4'  />
              
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>
          <Link to={'/login'} className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            <div className='overflow-hidden'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
              </svg>
             </div>
             {/* {isLoggedIn && <span className="text-black font-bold">Welcome {userName}</span>} */}
          </Link>
          {/* {isLoggedIn ? (
            <button onClick={handleLogout} className='ml-4'> Logout</button>
          ):(
            <Link to="/login">Login</Link>
          )} */}
        </header>
    </>
  )
}

export default Header