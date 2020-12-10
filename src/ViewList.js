import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

const ViewList = (props) => {
  const tasksToHTML = () => {
    const taskList = props.tasks.map((taskObject) => {
      return <Task taskObject={taskObject} />;
    });
    return <div>{taskList}</div>;
  };

  return <div>A faire : {tasksToHTML()}</div>;
};

const mapStateToProps = (state) => {
  return { tasks: state };
};

const mapDispacthToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispacthToProps)(ViewList);
