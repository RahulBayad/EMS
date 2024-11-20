import React from 'react'

const CreateTask = () => {
  return (
    <div className='mt-7 py-5 px-8 bg-[#1c1c1c] rounded'>
        <form className='flex flex-wrap w-full justify-between items-start'>  
            <div className='w-2/5 '> 
              <div className='mb-4'>
                <h3 className='text-sm'>Task Title</h3>
                <input 
                  className='mt-1 rounded bg-transparent text-sm py-1 px-2 outline-none
                   w-full border border-gray-400' 
                  type="text" placeholder='Add a new task'
                />
              </div>
              <div className='mb-4'>
                <h3 className='text-sm'>Date</h3>
                <input 
                  type="date" 
                  className='mt-1 rounded bg-transparent text-sm py-1 px-2 outline-none
                   w-full border border-gray-400'
                />
              </div>
              <div className='mb-4'>
                <h3 className='text-sm'>Assign to</h3>
                <input 
                  type="text" 
                  placeholder='Employee name' 
                  className='mt-1 rounded bg-transparent text-sm py-1 px-2 outline-none
                   w-full border border-gray-400'
                />
              </div>
              <div className='mb-4'>
                <h3 className='text-sm'>Category</h3>
                <input 
                  type="text" 
                  placeholder='Design, dev etc'
                  className='mt-1 rounded bg-transparent text-sm py-1 px-2 outline-none
                   w-full border border-gray-400' 
                />
              </div>
            </div>
            <div className='w-2/5'>
              <div className='mb-3'>
                <h3 className='text-sm'>Description</h3>
                <textarea className='mt-1 w-full h-44 text-sm p-2 bg-transparent outline-none rounded border border-gray-400'></textarea>
              </div>
              <button type='submit' className='py-3 font-semibold w-full bg-emerald-500 hover:bg-emerald-600 rounded'>Create Task</button>
            </div>
        </form>
      </div>
  )
}

export default CreateTask