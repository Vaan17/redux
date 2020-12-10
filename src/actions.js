let nextTodoId = 0;

export const addTodo = (content) => ({
  type: "ADD_TODO",
  taskInfos: {
    content,
    id: ++nextTodoId,
  },
});

export const removeTodo = (content) => ({
  type: "REMOVE_TODO",
  id: nextTodoId,
});

//... other actions
