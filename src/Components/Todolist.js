import React, { useEffect, useState } from "react";
import Tasks from "../modals/Tasks";
import Cards from "./Cards";

export default function Todolist() {
  const [modal, setModal] = useState(false);
  const status = () => setModal(!modal);

  useEffect(() => {
    let tasks=localStorage.getItem("taskContainer");
    
    // if obj is not undefined
    if(tasks){
        let obj=JSON.parse(tasks);
        setTaskContainer(obj);
    }
  }, [])

  const [taskContainer, setTaskContainer] = useState([]);

  const addTask = (taskObj) => {
    let tempList = taskContainer;
    tempList.push(taskObj);
    localStorage.setItem("taskContainer",JSON.stringify(tempList));
    console.log(taskObj);
    setTaskContainer(tempList);
    setModal(false);
  };

  const deleteTask =(index) => {
    let tempList=taskContainer;
    tempList.splice(index,1);
    localStorage.setItem("taskContainer",JSON.stringify(tempList));
    setTaskContainer(tempList);
    window.location.reload();
  }

  return (
    <>
      <div className="container-fluid text-center my-3 bg-secondary">
        {/* header container */}
        <div className="container-lg">
          <h1 className="display-5 text-warning">Todo List Application</h1>
          <button
            className="btn btn-danger my-3"
            onClick={() => setModal(true)}
          >
            Add Task
          </button>
        </div>
      </div>
      {/* task container */}
      <div className="task-container container-lg ">
        {taskContainer.map((obj, index) => (
          <Cards taskObj={obj} index={index} deleteTask={deleteTask}/>
        ))}
      </div>
      <Tasks modal={modal} status={status} add={addTask} />
    </>
  );
}
