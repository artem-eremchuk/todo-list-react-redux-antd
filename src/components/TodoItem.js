import React from "react";
import { TiEdit } from "react-icons/ti";
import { RiCloseCircleLine } from "react-icons/ri";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import { connect } from "react-redux";
import { editTodo, completeTodo, removeTodo } from "../actions";

const TodoItem = (props) => {
  const { id, text, complete, todos, editTodo, completeTodo, removeTodo } =
    props;

  const isComplete = (complete) => {
    return complete ? (
      <RiCheckboxCircleLine
        className="complete-icon"
        onClick={() => completeTodo(id)}
      />
    ) : (
      <RiCheckboxBlankCircleLine
        className="complete-icon"
        onClick={() => completeTodo(id)}
      />
    );
  };

  return (
    <div className={complete ? "todo-row complete" : "todo-row"}>
      <div>{text}</div>
      <div className="icons">
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => removeTodo(id)}
        />
        <TiEdit
          className="edit-icon"
          onClick={() => editTodo(todos.find((todo) => todo.id === id))}
        />
        {isComplete(complete)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { editTodo, completeTodo, removeTodo })(
  TodoItem
);
