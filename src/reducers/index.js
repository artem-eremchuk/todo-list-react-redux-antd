// REDUCERS
import { combineReducers } from "redux";

const changeInputReducer = (text = "", action) => {
  if (action.type === "CHANGE_INPUT") {
    return action.payload.inputText;
  }
  return text;
};

const addTodoReducer = (state, action) => {
  const todoItem = action.payload;
  if (!todoItem.text || /^s*$/.test(todoItem.text)) {
    return;
  }
  const newState = [todoItem, ...state];
  return newState;
};

const editTodoReducer = (state = null, action) => {
  if (action.type === "EDIT_TODO") {
    return action.payload;
  }
  return state;
};

const updaateTodo = (state, action) => {
  const newState = [...state].map((todo) => {
    if (todo.id === action.payload.id) {
      return { ...todo, text: action.payload.text };
    }
    return todo;
  });
  return newState;
};

const completeTodoReducer = (state, action) => {
  const id = action.payload.id;
  const newState = [...state].map((todo) => {
    if (todo.id === id) {
      return { ...todo, isComplete: !todo.isComplete };
    }
    return todo;
  });

  return newState;
};

const removeTodoReducer = (state, action) => {
  const id = action.payload.id;
  return [...state].filter((todo) => todo.id !== id);
};

// MAIN TODO LIST REDUCER
const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return addTodoReducer(state, action);
    case "COMPLETE_TODO":
      return completeTodoReducer(state, action);
    case "UPDATE_TODO":
      return updaateTodo(state, action);
    case "REMOVE_TODO":
      return removeTodoReducer(state, action);

    default:
      return state;
  }
};

export default combineReducers({
  inputText: changeInputReducer,
  editItem: editTodoReducer,
  todos: todoListReducer,
});
