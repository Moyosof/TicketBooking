import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  // const [isRegistered, setIsRegistered] = useState(false);
  // const [userName, setUserName] = useState('');
  
  // const handleSignUp = (event) => {
  //   event.preventDefault();
  //   setIsRegistered(true);
  //   setUserName('Moyo');
  // };

  // if (isRegistered) {
  //   return (
  //     <div>
  //       <p>Welcome, {userName}!</p>
  //       <button onClick={() => setIsRegistered(false)}>Logout</button>
  //     </div>
  //   );
  // }

  return (
    <div>
        <div>
      <div className=" mt-4 grow flex items-center justify-around">
        <div className=" mb-">
          <h1 className=" text-center text-4xl mb-4 ">Register</h1>
          <form className=" max-w-md mx-auto" >
            <input type="text" placeholder='full name' />
            <input type="email" placeholder="your@email.com" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder='confirm paassword' />
            <button className="primary">Login</button>
            <div className=" text-center py-2 text-gray-500">
              Already a member? 
              <Link to={'/login'} className=" underline text-black"> Login Here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RegisterPage