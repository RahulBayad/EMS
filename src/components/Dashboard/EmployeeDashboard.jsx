import React, { memo, useMemo } from 'react'
import Header from '../Header/Header'
import TaskListNumber from '../TaskList/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data , updateUser}) => {
  // console.log("{data}", data);
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header updateUser={updateUser} data={data}/>
        <TaskListNumber />
        <TaskList/>
    </div>
  )
}

export default memo(EmployeeDashboard)