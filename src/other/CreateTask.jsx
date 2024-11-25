import React from 'react'
import { setLocalStorage } from '../utils/localStorage';

const CreateTask = () => {

  const submitHandler = (e)=>{
    e.preventDefault();
    let formData = {
      title : e.target.taskTitle.value,
      date : e.target.date.value,
      category : e.target.category.value,
      description : e.target.description.value,
      active : false,newTask : true,failed : false,completed : false
    }
    const employeeData = JSON.parse(localStorage.getItem("employees"))
    employeeData.map((emp)=>{
      if(emp.firstName === e.target.name.value){ 
        emp.tasks.push(formData)
        emp.taskCount.active += 1
      }
    })
    localStorage.setItem("employees",JSON.stringify(employeeData))
    e.target.reset();
  }
  
  return (
    <div className='mt-7 py-5 px-8 bg-[#1c1c1c] rounded'>
        <form onSubmit={submitHandler} className='flex flex-wrap w-full justify-between items-start'>  
            <div className='w-2/5 '> 
              <div className='mb-4'>
                <h3 className='text-sm'>Task Title</h3>
                <input 
                  name="taskTitle"
                  className='mt-1 rounded bg-transparent text-sm py-1 px-2 outline-none
                   w-full border border-gray-400' 
                  type="text" placeholder='Add a new task'
                />
              </div>
              <div className='mb-4'>
                <h3 className='text-sm'>Date</h3>
                <input 
                  type="date" 
                  name="date"
                  className='mt-1 rounded bg-transparent text-sm py-1 px-2 outline-none
                   w-full border border-gray-400'
                />
              </div>
              <div className='mb-4'>
                <h3 className='text-sm'>Assign to</h3>
                <input 
                  type="text" 
                  name="name"
                  placeholder='Employee name' 
                  className='mt-1 rounded bg-transparent text-sm py-1 px-2 outline-none
                   w-full border border-gray-400'
                />
              </div>
              <div className='mb-4'>
                <h3 className='text-sm'>Category</h3>
                <input 
                  type="text" 
                  name="category"
                  placeholder='Design, dev etc'
                  className='mt-1 rounded bg-transparent text-sm py-1 px-2 outline-none
                   w-full border border-gray-400' 
                />
              </div>
            </div>
            <div className='w-2/5'>
              <div className='mb-3'>
                <h3 className='text-sm'>Description</h3>
                <textarea name="description" className='mt-1 w-full h-44 text-sm p-2 bg-transparent outline-none rounded border border-gray-400'></textarea>
              </div>
              <button type='submit' className='py-3 font-semibold w-full bg-emerald-500 hover:bg-emerald-600 rounded'>Create Task</button>
            </div>
        </form>
      </div>
  )
}

export default CreateTask