import React from 'react'

const AcceptedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 w-1/4 bg-yellow-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h2 className='bg-red-500 font-medium rounded py-1 px-3 text-sm'>{data?.category}</h2>
          <h2 className='text-sm font-medium'>{data?.date}</h2>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data?.title}</h2>
        <p className='text-sm mt-2'>{data?.description}</p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm rounded'>Mark as Completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptedTask