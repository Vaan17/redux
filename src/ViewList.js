import React, { useState } from "react";
import { connect } from "react-redux";
import Task from "./Task";
import { TaskToDo, TasksNumber, BorderTasks } from "./styleComponent";

const ViewList = (props) => {
  const tasksToHTML = () => {
    const taskList = props.tasks.map((taskObject) => {
      return <Task taskObject={taskObject} key={taskObject.id} />;
    });
    return <div>{taskList}</div>;
  };

  return (
    <BorderTasks>
      <TaskToDo>Tasks to do </TaskToDo>
      <TasksNumber>
        X<small>Tasks</small>
      </TasksNumber>
      {tasksToHTML()}
    </BorderTasks>
  );
};

const mapStateToProps = (state) => {
  return { tasks: state };
};

const mapDispacthToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispacthToProps)(ViewList);
