import React, { createContext, useEffect, useState } from 'react'
import { setLocalStorage, getLocalStorage } from '../utils/localStorage';

export const authContext = createContext();
 
const AuthProvider = ({children}) => {
  
  const [userData , setUserData] = useState(null);
  
  useEffect(()=>{
    const isEmpAvail = JSON.parse(localStorage.getItem("employees"))
    const isAdminAvail = JSON.parse(localStorage.getItem("admin"))

    if(!isEmpAvail && !isAdminAvail){
      setLocalStorage();
    }   
    const {employees , admin} = getLocalStorage();
    setUserData({employees , admin})
  },[])
  
  return (
    <authContext.Provider value={userData}>
      {children}
    </authContext.Provider>
  )
}


export default AuthProvider