import React, { useState } from "react";
import Tasks from "../modals/Tasks";

export default function Todolist() {
    const [modal,setModal]=useState(false);
    const status = () => setModal(!modal);
  return (
    <div className="container-fluid text-center my-3 bg-secondary">
        {/* header container */}
      <div className="container-lg">
        <h1 className="display-5 text-warning">Todo List Application</h1>
        <button className="btn btn-danger my-3" onClick={() => setModal(true)}>Add Task</button>
      </div>
        {/* task container */}
      <div className="container-lg">

      </div>
      <Tasks modal={modal}status={status}/>
    </div>
  );
}
