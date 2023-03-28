import { useState } from "react";

const myTasks = [
  {id: 1, name: "Homework", status: false},
  {id: 2, name: "Clean Room", status: true},
  {id: 3, name: "Throw Out Trash", status: false},
  {id: 4, name: "Finish React Project", status: true},
]

function Add({add, onAddClick}){
    return (
        <button onClick={onAddClick}>Add</button>
    )}

function Delete({remove, onDeleteClick}){
    return (
        <button onClick={onDeleteClick}>-</button>
    )}

function Status({task, onStatusChange}){
    return (
      <input type="checkbox" checked={task.status} onChange={onStatusChange}/>
    )}


export default function App(){
    const [tasks, setTasks] = useState(myTasks);
    const [newTask, setNewTask] = useState("");


    const handleAddClick = () => {
        setTasks([...tasks, {id: tasks.length + 1, name: newTask, status: false}]);
        setNewTask("");
    }

    const handleDeleteClick = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const handleStatusClick = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, status: !task.status} : task));
    }


    return (
        <div>
            <h1>Kayla's ToDo App</h1>

            <input type="text" value={newTask} placeholder="Enter task..." onChange={(e) => setNewTask(e.target.value)}/>
            <Add add={handleAddClick} onAddClick={handleAddClick}/>

            <table>
              <thead>
                <tr>
                 <th>Status</th>
                  <th>Task</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id}>
                    <td>
                      <Status task={task} onStatusChange={() => handleStatusClick(task.id)}/>
                    </td>
                    <td>{task.name}</td>
                    <td>
                      <Delete remove={handleDeleteClick} onDeleteClick={() => handleDeleteClick(task.id)}/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
    )}