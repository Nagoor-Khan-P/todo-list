import React, { useState } from "react";
import EditTask from "../modals/EditTask";

export default function Cards({taskObj, index, deleteTask}) {

    const [modal, setModal]=useState(false);
    const status = () => setModal(!modal);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        },
        {
            primaryColor : "#f5078e",
            secondaryColor : "#dbc8d7"
        },
        {
            primaryColor : "#09cee8",
            secondaryColor : "#d3e1e3"
        }
    ]

    const handleUpdate =() => {

    }

    const handleDelete = () => {
        deleteTask(index);
    }

  return (
    <div class="card-wrapper me-4 ms-4">
      <div
        class="card-top"
        style={{ "background-color": colors[index % 7].primaryColor }}
      ></div>
      <div class="task-holder">
        <span
          class="card-header"
          style={{
            "background-color": colors[index % 7].secondaryColor,
            "border-radius": "10px",
          }}
        >
          {taskObj.Title}
        </span>
        <p className="mt-3">{taskObj.Desc}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            class="far fa-edit me-3"
            style={{ color: colors[index % 7].primaryColor, cursor: "pointer" }}
            onClick={() => setModal(true)}
          ></i>
          <i
            class="fas fa-trash-alt"
            style={{ color: colors[index % 7].primaryColor, cursor: "pointer" }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <EditTask
        modal={modal}
        status={status}
        handleUpdate={handleUpdate}
        taskObj={taskObj}
      />
    </div>
  );
}
