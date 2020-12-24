import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions";
import { MyButton, TaskInput } from "./styleComponent";
import AddIcon from "@material-ui/icons/Add";

const AddTodo = (props) => {
  const toAdd = () => {
    props.addTodo2(tempTask);
    setTempTask("");
  };

  const [tempTask, setTempTask] = useState("");

  const onInputChangeTask = (event) => {
    setTempTask(event.target.value);
  };

  return (
    <TaskInput>
      <TextField
        label="Tâche"
        onChange={onInputChangeTask}
        placeholder="Ecrivez une tâche"
        value={tempTask}
      />
      <MyButton startIcon={<AddIcon />} onClick={toAdd}>
        Add
      </MyButton>
    </TaskInput>
  );
};

const mapStateToProps = (state) => {
  return { tasks: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo2: (task) => {
      return dispatch(addTodo(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
