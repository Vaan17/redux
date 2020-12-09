const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.payload.content]);
    case "REMOVE_TODO":
      return state.filter((task) => task !== action.task);
    default:
      return state;
  }
};

export default reducer;
