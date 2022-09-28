import React, { useEffect } from "react";
import "./todo.module.css";
import { addTask, deleteTask, TodoInterface, toggleTask } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   console.log(tasks);
  // },[tasks])
  const DeleteTask = (id:number)=>{
    dispatch(deleteTask(id));
  }
  return (
    <div className="task-list">
      {tasks.map((task) => {
        return (
          <div className="task-item">
            <div className="info">
              <p  className={`${task.done? "line":"" }`}  >{task.text}</p>
            </div>
            <div className="action">
              <input
                type="checkbox"
                name="check"
                checked={task.done}
                onChange={() => {
                  dispatch(toggleTask(task.id));
                }}
              />
              {/* <label htmlFor="check">{task.text}</label> */}
              <button
                className="btn delete"
                onClick={() => {
                  DeleteTask(task.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(TaskList);
