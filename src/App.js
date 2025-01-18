import { useState } from "react";
import "./styles.css";

/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [val, setVal] = useState("");
  const [city, setCity] = useState([]);
  const onChangeHandler = (e) => {
    setVal(e?.target?.value);
  };
  const addCities = () => {
    //Complete function
    let newVal = {
      cityname: val,
      id: Date.now(),
    };
    setCity([...city, newVal]);
    setVal("");
  };
  const removeCities = (id) => {
    setCity(city.filter((c) => c.id !== id));
  };

  return (
    <>
      <div className="App">
        <input type="text" value={val} onChange={(e) => onChangeHandler(e)} />
        <button onClick={() => addCities()}> add </button>
      </div>
      {city &&
        city.map((c) => {
          return (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div>{c.cityname}</div>
              <div onClick={() => removeCities(c.id)}> X</div>
            </div>
          );
        })}
    </>
  );
}

// function TodoList() {
//   const [tasks, setTasks] = useState([
//   {
//   id: 1,
//   text: 'Doctor Appointment',
//   completed: true
//   },
//   {
//   id: 2,
//   text: 'Meeting at School',
//   completed: false
//   }
//   ]);

//   const [text, setText] = useState('');
//  function addTask(text) {
//   const newTask = {
//   id: Date.now(),
//   text,
//   completed: false
//   };
//   setTasks([…tasks, newTask]);
//   setText('');
//   }
//  function deleteTask(id) {
//   setTasks(tasks.filter(task => task.id !== id));
//   }
//  function toggleCompleted(id) {
//   setTasks(tasks.map(task => {
//   if (task.id === id) {
//   return {…task, completed: !task.completed};
//   } else {
//   return task;
//   }
//   }));
//   }
//  return (
//   <div className="todo-list">
//   {tasks.map(task => (
//   <TodoItem
//   key={task.id}
//   task={task}
//   deleteTask={deleteTask}
//   toggleCompleted={toggleCompleted}
//   />
//   ))}
//  <input
//   value={text}
//   onChange={e => setText(e.target.value)}
//   />
//  <button onClick={() => addTask(text)}>Add</button>
//   </div>
//   );
//  }
//  export default TodoList;
