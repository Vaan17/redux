const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.taskInfos]);
    case "REMOVE_TODO":
      return state.filter((taskObject) => taskObject.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
