import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex justify-between gap-5 mt-10'>
        <div className='bg-blue-400 rounded-xl px-9 py-6 w-[45%]'>
            <h2 className='text-3xl font-semibold'>1</h2>
            <h3 className='text-xl font-medium mt-1'>New Task</h3>
        </div>
        <div className='bg-green-400 rounded-xl px-9 py-6 w-[45%]'>
            <h2 className='text-3xl font-semibold'>3</h2>
            <h3 className='text-xl font-medium mt-1'>Completed Task</h3>
        </div>
        <div className='bg-yellow-400 rounded-xl px-9 py-6 w-[45%]'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium mt-1'>Accepted Task</h3>
        </div>
        <div className='bg-red-400 rounded-xl px-9 py-6 w-[45%]'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium mt-1'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber