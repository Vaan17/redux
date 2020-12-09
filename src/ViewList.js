import React from "react";
import { connect } from "react-redux";

const ViewList = (props) => {
  const tasksToHTML = () => {
    const taskList = props.tasks.map((taskObject) => {
      return <div>{taskObject}</div>;
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
