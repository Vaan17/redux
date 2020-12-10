import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { removeTodo } from "./actions";

const Task = (props) => {
  const deleted = () => {
    props.removeTodo2(props.taskObject.id);
  };
  return (
    <div>
      {props.taskObject.content}
      <button onClick={deleted}>
        <DeleteIcon />
      </button>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
