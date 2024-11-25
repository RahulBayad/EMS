import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'    
import { authContext } from './contexts/AuthProvider'

function App() {

  const authData = useContext(authContext)

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  
  const handleLogin =(email,password)=>{
    const employee = authData.employees.find(emp =>emp.email == email && emp.password == password) 
    const admin = authData.admin.find(admin =>admin.email == email && admin.password == password)
    
    if(authData){
      if(email && employee){
        setUser({role : "Employee"})
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role : "Employee", data:employee}))
      }
      else if(email && admin){
        setUser({role : "Admin"})
        setLoggedInUserData(admin)
        localStorage.setItem("loggedInUser",JSON.stringify({ role : "Admin",data:admin}))
      }
    }
  }

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){      
      setUser(JSON.parse(loggedInUser))
    }
  },[])

  return (
    <>
      {user?.role === "Employee" ? <EmployeeDashboard updateUser={setUser} data={loggedInUserData}/> 
      : user?.role === "Admin" ? <AdminDashboard updateUser={setUser}/> 
      : <Login handleLogin={handleLogin}/>
      } 
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
      {/* <div className=''>Helo</div> */}
    </>
  )
}

export default App
