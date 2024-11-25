import React from 'react'
import Header from '../Header/Header'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'

const AdminDashboard = ({updateUser}) => {
  return (
    <div className='p-10 h-screen w-full'>
      <Header updateUser={updateUser}/>
      <CreateTask />
      <AllTask/>
    </div>
  )
}

export default AdminDashboard