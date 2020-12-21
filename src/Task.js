import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { connect } from "react-redux";
import { removeTodo } from "./actions";
import { editTodo } from "./actions";
import { TextField } from "@material-ui/core";

const Task = (props) => {
  const [newTask, setNewTask] = useState();
  const [isEditing, setIsEditing] = useState(false);

  const onInputChangeNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const deleted = () => {
    props.removeTodo2(props.taskObject.id);
  };

  const editing = () => {
    if (isEditing === false) {
      setIsEditing(true);
      console.log("isEditing has been turned to True");
    } else {
      setIsEditing(false);
      console.log("isEditing has been turned to False");
    }
  };

  const editValidated = () => {
    setIsEditing(false);
    props.editTodo2(newTask, props.taskObject.id);
    console.log("task edited succefully !");
  };

  return (
    <div>
      {props.taskObject.content}
      <DeleteIcon onClick={deleted} />
      <CreateIcon onClick={editing} />
      {isEditing && (
        <div>
          <TextField
            label="Nouvelle Tâche"
            onChange={onInputChangeNewTask}
            placeholder="Ecrivez une tâche"
            value={newTask}
          />
          <button onClick={editValidated}>Change the task</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { tasks: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo2: (id) => {
      return dispatch(removeTodo(id));
    },
    editTodo2: (task, id) => {
      return dispatch(editTodo(task, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
