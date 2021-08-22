import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";

const TodoList = ({ state, todos, editItem }) => {
  if (!editItem) {
    return todos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          complete={todo.isComplete}
        />
      );
    });
  } else {
    return <TodoForm editItem={editItem} />;
  }
};

const mapStateToProps = (state) => {
  return { state: state, todos: state.todos, editItem: state.editItem };
};

export default connect(mapStateToProps)(TodoList);
