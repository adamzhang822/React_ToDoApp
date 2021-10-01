import React, { useState } from "react";

const Todo = ({
  title,
  isCompleted,
  removeTodo,
  editTodo,
  moveUp,
  moveDown,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  const [tempValue, setTempValue] = useState(title);
  const [completed, setCompleted] = useState(isCompleted);

  const handleInputOnChange = (e) => {
    setTempValue(e.target.value);
  };

  const handleEdit = () => {
    if (completed) return;
    setIsEditing(true);
  };

  const handleInputKeyDown = (e) => {
    const key = e.keyCode;
    if (key === 13) {
      editTodo({ title: tempValue });
      setValue(tempValue);
      setIsEditing(false);
    } else if (key === 27) {
      setTempValue(value);
      setIsEditing(false);
    }
  };

  const handleButtonClick = (e) => {
    setCompleted((oldCompleted) => {
      const newState = !oldCompleted;
      editTodo({ completed: newState });
      return newState;
    });
  };

  return (
    <div className="row">
      {isEditing ? (
        <div className="column seven wide">
          <div className="ui input fluid">
            <input
              onChange={handleInputOnChange}
              onKeyDown={handleInputKeyDown}
              autoFocus={true}
              value={tempValue}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="column five wide" onDoubleClick={handleEdit}>
            <h2
              className={`ui header`}
              style={{ color: completed ? "green" : "brown" }}
            >
              {value}
            </h2>
          </div>

          <div className="column one wide">
            <button
              className={`ui button circular icon ${
                completed ? "green" : "brown"
              }`}
              onClick={handleButtonClick}
            >
              <i className="check icon"></i>
            </button>
          </div>

          <div className="column one wide">
            <button
              className={`ui button circular icon ${
                completed ? "grey" : "brown"
              }`}
              onClick={handleEdit}
            >
              <i className="edit icon"></i>
            </button>
          </div>

          <div className="column one wide">
            <button
              onClick={removeTodo}
              className="ui button circular icon grey"
            >
              <i className="remove icon"></i>
            </button>
          </div>

          <div className="column one wide">
            <button onClick={moveUp} className="ui button circular icon blue">
              <i className="arrow up icon"></i>
            </button>
          </div>

          <div className="column one wide">
            <button onClick={moveDown} className="ui button circular icon pink">
              <i className="arrow down icon"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
