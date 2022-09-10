import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Tasks({ modal, status, add}) {
    const [taskName,setTaskName]=useState('');
    const [desc,setDesc] =useState('');

    const handleChange = (e) => {
        const name=e.target.name;
        const value=e.target.value;

        if(name === 'title'){
            setTaskName(value);
        }
        else{
            setDesc(value);
        }
    }

    const handleSave = () => {
        let taskObj={};
        taskObj["Title"]=taskName;
        taskObj["Desc"]=desc;
        add(taskObj);
    }

  return (
    <div>
      <Modal isOpen={modal} status={status}>
        <ModalHeader status={status}>Add a Task</ModalHeader>
        <ModalBody>
          <form className="row g-3">
            <div className="mb-3">
              <label className="form-label">
                Task Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={taskName}
                placeholder="Add Title" onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={desc} onChange={handleChange}
                rows="3"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
            <Button color="success" onClick={handleSave}>Add</Button>{' '}
            <Button color="danger" onClick={status}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
