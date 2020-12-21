import React, { useState } from "react";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import { editTodo } from "./actions";

const EditTask = (props) => {
  const [newTask, setNewTask] = useState();
  let inputToEditing = false;

  const editing = () => {
    inputToEditing = true;
    console.log("switch to edit, ok");
  };

  const onInputChangeNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const editValidated = () => {
    inputToEditing = false;
    props.editTodo2(newTask);
    console.log("task edited succefully !");
  };

  return (
    <div>
      <CreateIcon onClick={editing} />
      <TextField
        label="Nouvelle Tâche"
        onChange={onInputChangeNewTask}
        placeholder="Ecrivez une tâche"
        value={newTask}
      />
      <button onClick={editValidated}>Change the task</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { tasks: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editTodo2: (task) => {
      return dispatch(editTodo(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
