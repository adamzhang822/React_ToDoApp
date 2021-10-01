import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from "./Form";
import Section from "./Section";
import List from "./List";
import Filter from "./Filter";

const appTitle = "Task Manager";

const ToDoList = () => {
  const [todoList, setToDoList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [filterString, setFilterString] = useState("");

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3030/todos/");
      setToDoList(response.data);
      setFilteredList(response.data);
    })();
  }, []);

  useEffect(() => {
    const keywords = filterString.split(" ");
    const newFilteredList = todoList.filter((item) =>
      keywords.map((word) => item.title.includes(word)).some((match) => match)
    );
    setFilteredList(newFilteredList);
  }, [filterString, todoList]);

  const addTodo = async (item) => {
    const { data } = await axios.post("http://localhost:3030/todos/", item);
    setToDoList((oldList) => [...oldList, data]);
  };

  const removeTodo = async (id) => {
    const response = await axios.delete(`http://localhost:3030/todos/${id}`);
    setToDoList((oldList) => oldList.filter((item) => item._id !== id));
  };

  const editTodo = async (id, item) => {
    const { data } = await axios.put(`http://localhost:3030/todos/${id}`, item);
  };

  const changeFilter = (filterString) => {
    setFilterString(filterString);
  };

  const moveUp = (id) => {
    const index = todoList.findIndex((task) => task._id === id);
    if (index === 0 || todoList.length <= 1) return;
    setToDoList((prevList) => {
      let swapped = [...prevList];
      let temp = swapped[index];
      swapped[index] = swapped[index - 1];
      swapped[index - 1] = temp;
      return swapped;
    });
  };

  const moveDown = (id) => {
    const index = todoList.findIndex((task) => task._id === id);
    if (index === todoList.length - 1 || todoList.length <= 1) return;
    setToDoList((prevList) => {
      let swapped = [...prevList];
      let temp = swapped[index];
      swapped[index] = swapped[index + 1];
      swapped[index + 1] = temp;
      return swapped;
    });
  };

  return (
    <div className="ui container center aligned">
      <Section>
        <h1 style={{ color: "brown" }}>{appTitle}</h1>
      </Section>

      <Section>
        <Filter changeFilter={changeFilter} />
        <br />
        <div className="row">
          <h4 style={{ color: "brown" }}>Current keywords: {filterString}</h4>
        </div>
      </Section>

      <div className="centered">
        <Section>
          <Form addTodo={addTodo} />
        </Section>
      </div>

      <Section>
        <List
          removeTodo={removeTodo}
          list={filteredList}
          editTodo={editTodo}
          moveUp={moveUp}
          moveDown={moveDown}
        />
      </Section>
    </div>
  );
};

export default ToDoList;
