import { CreateTodo } from "./components/createTodo";
import { Todos  } from "./components/Todos";
import {useState} from "react";
// specific way of state defintion 
function App() {

const[todos,setTodos]=useState([])


  return (
    <div>
      <CreateTodo> </CreateTodo>
      <Todos todos={[{title:"Task 1",
      description:"Perform task 1",
      completed: false
      }]}></Todos>
    </div>
  )
}



export default App 