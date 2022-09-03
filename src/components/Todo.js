import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../redux/action/index";
import "./Todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <h1 className="header"> Add Your List Here</h1>

          <div className="addItems">
            <input
              className="inp"
              type="text"
              placeholder="add items.."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <button
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
              className="addBtn"
            >
              Add
            </button>
          </div>

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <button
                    className="deleteBtn"
                    onClick={() => dispatch(deleteTodo(elem.id))}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
