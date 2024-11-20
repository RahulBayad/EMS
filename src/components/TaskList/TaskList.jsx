import React from 'react'

const TaskList = () => {
  return (
    <div id="taskList" className='h-[55%] py-5 overflow-x-auto mt-10 rounded-xl flex flex-nowrap gap-5'>
      <div className='flex-shrink-0 w-1/4 bg-blue-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h2 className='bg-red-500 font-medium rounded py-1 px-3 text-sm'>High</h2>
          <h2 className='text-sm font-medium'>20 Nov 2024</h2>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magni alias ea vero qui voluptatum!</p>
      </div>
      <div className='flex-shrink-0 w-1/4 bg-yellow-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h2 className='bg-red-500 font-medium rounded py-1 px-3 text-sm'>High</h2>
          <h2 className='text-sm font-medium'>20 Nov 2024</h2>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magni alias ea vero qui voluptatum!</p>
      </div>
      <div className='flex-shrink-0 w-1/4 bg-green-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h2 className='bg-red-500 font-medium rounded py-1 px-3 text-sm'>High</h2>
          <h2 className='text-sm font-medium'>20 Nov 2024</h2>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magni alias ea vero qui voluptatum!</p>
      </div>
      
      <div className='flex-shrink-0 w-1/4 bg-red-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h2 className='bg-red-500 font-medium rounded py-1 px-3 text-sm'>High</h2>
          <h2 className='text-sm font-medium'>20 Nov 2024</h2>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magni alias ea vero qui voluptatum!</p>
      </div>
      
    </div>
  )
}

export default TaskList