import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions";
import ViewList from "./ViewList";

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
    <div>
      <TextField
        label="Tâche"
        onChange={onInputChangeTask}
        placeholder="Ecrivez une tâche"
        value={tempTask}
      />
      <button onClick={toAdd}>Add the Todo</button>
      <ViewList />
    </div>
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
