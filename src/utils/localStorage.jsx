export const employees = [
  {
      id: 1,
      firstName: "Aarav",
      email: "e1@e.com",
      password: "123",
      taskCount: {
          active: 2,
          completed: 1,
          newTask: 2,
          failed: 1
      },
      tasks: [
          {
              title: "Prepare monthly report",
              description: "Compile sales data for the past month.",
              date: "2024-11-25",
              category: "Reports",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          },
          {
              title: "Client meeting",
              description: "Discuss project requirements with the client.",
              date: "2024-11-22",
              category: "Meetings",
              active: false,
              newTask: false,
              completed: true,
              failed: false
          },
          {
              title: "Team training session",
              description: "Organize a training session for new hires.",
              date: "2024-11-30",
              category: "Training",
              active: true,
              newTask: true,
              completed: false,
              failed: true
          }
      ]
  },
  {
      id: 2,
      firstName: "Ananya",
      email: "employee2@example.com",
      password: "123",
      taskCount: {
          active: 2,
          completed: 0,
          newTask: 1,
          failed: 1
      },
      tasks: [
          {
              title: "Fix website bugs",
              description: "Resolve reported issues on the company website.",
              date: "2024-11-20",
              category: "Development",
              active: true,
              newTask: false,
              completed: false,
              failed: false
          },
          {
              title: "Prepare slides for presentation",
              description: "Design slides for the quarterly business review.",
              date: "2024-11-24",
              category: "Presentation",
              active: true,
              newTask: true,
              completed: false,
              failed: true
          }
      ]
  },
  {
      id: 3,
      firstName: "Vihaan",
      email: "employee3@example.com",
      password: "123",
      taskCount: {
          active: 1,
          completed: 1,
          newTask: 1,
          failed: 1
      },
      tasks: [
          {
              title: "Update inventory records",
              description: "Verify and update the stock inventory database.",
              date: "2024-11-21",
              category: "Inventory",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          },
          {
              title: "Plan holiday event",
              description: "Coordinate the company’s end-of-year celebration.",
              date: "2024-11-30",
              category: "Events",
              active: false,
              newTask: false,
              completed: true,
              failed: true
          }
      ]
  },
  {
      id: 4,
      firstName: "Isha",
      email: "employee4@example.com",
      password: "123",
      taskCount: {
          active: 1,
          completed: 1,
          newTask: 1,
          failed: 1
      },
      tasks: [
          {
              title: "System security audit",
              description: "Perform a security audit on internal systems.",
              date: "2024-11-19",
              category: "Security",
              active: false,
              newTask: false,
              completed: true,
              failed: false
          },
          {
              title: "Onboarding documentation",
              description: "Create onboarding documents for new employees.",
              date: "2024-11-23",
              category: "HR",
              active: true,
              newTask: true,
              completed: false,
              failed: true
          }
      ]
  },
  {
      id: 5,
      firstName: "Kabir",
      email: "employee5@example.com",
      password: "123",
      taskCount: {
          active: 2,
          completed: 0,
          newTask: 1,
          failed: 1
      },
      tasks: [
          {
              title: "Conduct user testing",
              description: "Test the new mobile app with users.",
              date: "2024-11-28",
              category: "Testing",
              active: true,
              newTask: true,
              completed: false,
              failed: true
          },
          {
              title: "Review financial statements",
              description: "Analyze financial data for accuracy.",
              date: "2024-11-20",
              category: "Finance",
              active: true,
              newTask: false,
              completed: false,
              failed: false
          }
      ]
  }
];


export const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }  
]

export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))    
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    return {employees, admin}
}