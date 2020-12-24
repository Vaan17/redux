import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { connect } from "react-redux";
import { removeTodo } from "./actions";
import { editTodo } from "./actions";
import { TextField } from "@material-ui/core";
import {
  MyButton,
  DeleteOrCancelButton,
  EditButton,
  CardContent,
  CardEditMode,
  CardSize,
  ButtonPos1,
} from "./styleComponent";

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
    setNewTask("");
    props.editTodo2(newTask, props.taskObject.id);
    console.log("task edited succefully !");
  };

  return (
    <div>
      {!isEditing && (
        <CardSize>
          <CardContent>
            <div>
              {props.taskObject.content}
              <br />
              <ButtonPos1>
                <EditButton startIcon={<CreateIcon />} onClick={editing}>
                  Edit
                </EditButton>

                <DeleteOrCancelButton
                  startIcon={<DeleteIcon />}
                  onClick={deleted}
                >
                  Delete
                </DeleteOrCancelButton>
              </ButtonPos1>
            </div>
          </CardContent>
        </CardSize>
      )}

      {isEditing && (
        <CardSize>
          <CardEditMode>
            <TextField
              style={{ marginBottom: 20 }}
              label="Nouvelle Tâche"
              onChange={onInputChangeNewTask}
              placeholder="Ecrivez une tâche"
              value={newTask}
            />
            <br />
            <ButtonPos1>
              <MyButton onClick={editValidated}>Change the task</MyButton>

              <DeleteOrCancelButton onClick={editing}>
                Cancel
              </DeleteOrCancelButton>
            </ButtonPos1>
          </CardEditMode>
        </CardSize>
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
