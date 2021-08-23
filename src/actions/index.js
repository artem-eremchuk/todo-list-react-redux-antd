export const changeInput = (inputText) => {
  return {
    type: "CHANGE_INPUT",
    payload: {
      inputText: inputText,
    },
  };
};

export const addTodo = (inputText) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime(),
      text: inputText,
      isComplete: false,
    },
  };
};

export const editTodo = (obj) => {
  return {
    type: "EDIT_TODO",
    payload: obj,
  };
};

export const updateTodo = (obj) => {
  return {
    type: "UPDATE_TODO",
    payload: obj,
  };
};

export const completeTodo = (id) => {
  return {
    type: "COMPLETE_TODO",
    payload: {
      id: id,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    payload: {
      id: id,
    },
  };
};
