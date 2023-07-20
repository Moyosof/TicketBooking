import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userName, setUserName] = useState('');

  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   setIsLoggedIn(true);
  //   setUserName('Moyo');
  // };
  // const handleLogout = () =>{
  //   setIsLoggedIn(false);
  //   setUserName('');
  // }
  
  // if(isLoggedIn){
  //   return(
  //     <div>
  //       <p>{userName}!</p>
  //       <button onClick={handleLogout}>Logout</button>
  //     </div>
  //   )
  // }

  return (
    <div>
      <div className=" mt-4 grow flex items-center justify-around">
        <div className=" mb-">
          <h1 className=" text-center text-4xl mb-4 ">Login</h1>
          <form className=" max-w-md mx-auto" >
            <input type="email" placeholder="your@email.com" />
            <input type="password" placeholder="password" />
            <button className="primary">Login</button>
            <div className=" text-center py-2 text-gray-500">
              Don't have an account yet? 
              <Link to={'/register'} className=" underline text-black"> Register Here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
