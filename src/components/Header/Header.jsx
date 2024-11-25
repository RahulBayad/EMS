import React from 'react'

const Header = ({data,updateUser}) => {
  const logout =()=>{
    localStorage.removeItem("loggedInUser")
    updateUser(null)
    // window.location.reload();
  }
  return (
    <div className='flex justify-between items-end'>
        <div className='text-2xl font-medium'>Hi,<br/> <span className='text-3xl font-semibold'>{data?.firstName}👋</span></div>
        <button onClick={logout} className=' bg-red-500 text-white text-lg font-medium rounded px-5 py-1'>Logout</button>
    </div>
  )
}

export default Header