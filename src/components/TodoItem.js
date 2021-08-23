import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
  BorderOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";

import { connect } from "react-redux";
import { editTodo, completeTodo, removeTodo } from "../actions";

const TodoItem = (props) => {
  const { id, text, complete, todos, editTodo, completeTodo, removeTodo } =
    props;

  const isComplete = (complete) => {
    return complete ? (
      <CheckSquareOutlined
        className="complete-icon"
        onClick={() => completeTodo(id)}
      />
    ) : (
      <BorderOutlined
        className="complete-icon"
        onClick={() => completeTodo(id)}
      />
    );
  };

  return (
    <div className={complete ? "todo-row complete" : "todo-row"}>
      <div>{text}</div>
      <div className="icons">
        <DeleteOutlined
          className="delete-icon"
          onClick={() => removeTodo(id)}
        />
        <EditOutlined
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
