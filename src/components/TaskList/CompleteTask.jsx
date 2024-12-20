import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 w-1/4 bg-green-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h2 className='bg-red-500 font-medium rounded py-1 px-3 text-sm'>{data?.category}</h2>
          <h2 className='text-sm font-medium'>{data?.date}</h2>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data?.title}</h2>
        <p className='text-sm mt-2'>{data?.description}</p>
        <div className='mt-4'>
            <button className='w-full py-1 text-sm bg-green-500 rounded'>Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask