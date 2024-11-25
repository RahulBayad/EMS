import React, { useContext } from 'react'
import { authContext } from '../contexts/AuthProvider'

const AllTask = () => {
    const authData = useContext(authContext)    
  return (
      <div className='h-66 bg-[#1c1c1c] py-5 px-8 rounded mt-5'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>  
        <div className='overflow-auto h-48'>
            {authData?.employees?.map((emp,idx)=>{
            return <div key={idx} className='border-2 border-emerald-700 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5'>{emp.firstName}</h2>
                <h3 className='text-lg font-medium w-1/5 text-blue-400'>{emp.taskCount.newTask}</h3>
                <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{emp.taskCount.active}</h5>
                <h5 className='text-lg font-medium w-1/5 text-green-400'>{emp.taskCount.completed}</h5>
                <h5 className='text-lg font-medium w-1/5 text-red-400'>{emp.taskCount.failed}</h5>
            </div>
            })}
        </div>
        
    </div>
  )
}

export default AllTask