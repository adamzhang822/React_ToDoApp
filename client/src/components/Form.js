import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    addTodo({
      title: inputValue,
      completed: false,
      id: Date.now() + Math.random(),
    });
    setInputValue("");
  };

  return (
    <form className="ui form" onSubmit={handleFormSubmit}>
      <div className="ui grid center aligned">
        <div className="row">
          <div className="column five wide">
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your task..."
            />
          </div>

          <div className="column two wide">
            <button type="submit" className="ui button circular icon brown">
              <i className="ui plus icon"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
