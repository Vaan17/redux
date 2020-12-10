let nextTodoId = 0;

export const addTodo = (content) => ({
  type: "ADD_TODO",
  taskInfos: {
    content,
    id: ++nextTodoId,
  },
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  id: id,
});

//... other actions
