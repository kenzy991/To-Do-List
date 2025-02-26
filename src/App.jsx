import { useState } from "react";
import ToDo from "./component/ToDo";
import Budgets from "./component/Budgets";
import YourList from "./component/YourList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
      setTasks([...tasks, newTask]); 
  };

  return (
    <div className="w-full h-full rounded-xl my-0 md:w-[50%] md:h-[95%] bg-[#171b2f] border-none md:rounded-3xl pt-9">


          <ToDo onAddTask={handleAddTask} />
          <YourList tasks={tasks} />
      </div>
  );
}

export default App;
