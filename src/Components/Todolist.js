import React, { useState } from "react";
import Tasks from "../modals/Tasks";

export default function Todolist() {
  const [modal, setModal] = useState(false);
  const status = () => setModal(!modal);

  const [taskContainer, setTaskContainer] = useState([]);

  const addTask = (taskObj) => {
    let tempList = taskContainer;
    tempList.push(taskObj);
    console.log(taskObj);
    setTaskContainer(tempList);
    setModal(false);
  };

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
      <div className="container-lg">
        {taskContainer.map((obj) => (
          <li>{obj.Title}</li>
        ))}
      </div>
      <Tasks modal={modal} status={status} add={addTask} />
    </>
  );
}
