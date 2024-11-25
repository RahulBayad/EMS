import React from 'react'
import AcceptedTask from './AcceptedTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (
    <div id="taskList" className='h-[55%] py-5 overflow-x-auto mt-10 rounded-xl flex flex-nowrap gap-5'>
      {
        data?.tasks.map((task,idx)=>{
          if(task.active){[]
            return <AcceptedTask key={idx} data={task}/>
          }
          if(task.newTask){
            return <NewTask key={idx} data={task}/>
          }
          if(task.completed){
            return <CompleteTask key={idx} data={task}/>
          }
          if(task.failed){
            return <FailedTask key={idx} data={task}/>
          }
        })
      }  
    </div>
  )
}

export default TaskList