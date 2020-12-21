const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.taskInfos]);
    case "REMOVE_TODO":
      return state.filter((taskObject) => taskObject.id !== action.id);
    case "EDIT_TODO":
      const newState = state.map((taskObject) => {
        if (taskObject.id === action.taskInfos.id) {
          taskObject.content = action.taskInfos.content;
          return taskObject;
        }
        return taskObject;
      });
      return newState;
    default:
      return state;
  }
};

export default reducer;
