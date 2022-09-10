import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Tasks({ modal, status, add}) {
    const [taskName,setTaskName]=useState('');
    const [desc,setDesc] =useState('');

    const handleChange = (e) => {
        const name=e.target.name;
        const value=e.target.value;

        if(name == 'title'){
            setTaskName(value);
        }
        else{
            setDesc(value);
        }
    }

    const handleSave = () => {
        let taskObj={};
        taskObj["Name"]=taskName;
        taskObj["Desc"]=desc;
        add(taskObj);
    }

  return (
    <div>
      <Modal isOpen={modal} status={status}>
        <ModalHeader status={status}>Add a Task</ModalHeader>
        <ModalBody>
          <form class="row g-3">
            <div class="mb-3">
              <label for="title" class="form-label">
                Task Title
              </label>
              <input
                type="text"
                class="form-control"
                id="title"
                name="title"
                value={taskName}
                placeholder="Add Title" onChange={handleChange}
              ></input>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Description
              </label>
              <textarea
                class="form-control"
                id="description"
                name="description"
                value={desc} onChange={handleChange}
                rows="3"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleSave}>
            Add
          </Button>{" "}
          <Button color="danger" onClick={status}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
