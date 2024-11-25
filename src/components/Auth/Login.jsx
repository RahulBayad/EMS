import React, { memo, useState } from 'react'

const Login = ({handleLogin}) => {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault();
    handleLogin(email , password)
    
    // setEmail("");
    // setPassword("");
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='flex items-center justify-center border-2 border-emerald-600 rounded-xl p-20 text-lg'>  
        <form onSubmit={(e)=>submitHandler(e)} className='gap-5'>
          
            <input 
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)} 
              required 
              className='w-full outline-none bg-transparent border-2 border-emerald-600 rounded-full p-2 pl-5 placeholder:text-gray-300' placeholder='Enter your email' />
            <br />
            <input 
              type="password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)} 
              className='mt-3 w-full outline-none bg-transparent border-2 border-emerald-600  rounded-full p-2 pl-5 placeholder:text-gray-300' placeholder='Enter your password'/>
         
          <button type='submit' className='mt-7 border-2 border-white w-full bg-emerald-600 font-semibold text-white rounded-full p-2'>Login</button>
        </form>
      </div>
    </div>              
  )
}

export default  memo(Login)