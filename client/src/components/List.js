import React from "react";
import Todo from "./Todo";

const List = ({ list, removeTodo, editTodo, moveUp, moveDown }) => {
  const renderedList = list.map((item) => {
    return (
      <Todo
        title={item.title}
        key={item._id}
        isCompleted={item.completed}
        removeTodo={(e) => removeTodo(item._id)}
        editTodo={(updatedItem) => editTodo(item._id, updatedItem)}
        moveUp={(e) => moveUp(item._id)}
        moveDown={(e) => moveDown(item._id)}
      />
    );
  });

  return <div className="ui grid center aligned">{renderedList}</div>;
};

export default List;
