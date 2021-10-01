import React, { useState } from "react";

const Form = ({ changeFilter }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    changeFilter(inputValue);
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
              placeholder="Search for keywords (separated by space)"
            />
          </div>

          <div className="column two wide">
            <button type="submit" className="ui button circular icon brown">
              <i className="ui search icon"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
