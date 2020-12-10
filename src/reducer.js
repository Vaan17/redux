const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.taskInfos]);
    case "REMOVE_TODO":
      return state.filter((taskId) => taskId !== action.taskInfos.id);
    default:
      return state;
  }
};

export default reducer;
