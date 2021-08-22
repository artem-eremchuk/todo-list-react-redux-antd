import React from "react";
import { connect } from "react-redux";
import { changeInput, addTodo, editTodo, updateTodo } from "../actions";

const TodoForm = ({
  inputText,
  changeInput,
  addTodo,
  editItem,
  editTodo,
  updateTodo,
}) => {
  const handleChange = (e) => {
    if (editItem) {
      editTodo({ ...editItem, text: e.target.value });
    } else {
      changeInput(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem) {
      updateTodo(editItem);
      editTodo(null);
    } else {
      addTodo(inputText);
      changeInput("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {editItem ? (
        <>
          <input
            type="text"
            name="text"
            autoComplete="off"
            className="todo-input edit"
            placeholder="Updata your Todo"
            value={editItem.text}
            onChange={handleChange}
          />
          <button className="todo-button edit">Update</button>)
        </>
      ) : (
        <>
          {" "}
          <input
            type="text"
            name="text"
            autoComplete="off"
            className="todo-input"
            placeholder="Add a Todo"
            value={inputText}
            onChange={handleChange}
          />
          <button className="todo-button">Add Todo</button>)
        </>
      )}
    </form>
  );
};

const mapStateToProps = (state) => {
  return { inputText: state.inputText };
};

export default connect(mapStateToProps, {
  changeInput,
  addTodo,
  editTodo,
  updateTodo,
})(TodoForm);
