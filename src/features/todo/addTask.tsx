import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./todoSlice";

const AddTask = ()=>{
  const dispatch = useDispatch();
  
  const [inputUser,setInputUser] = useState<string>("");

  const AddTask = (e:React.MouseEvent<HTMLElement>)=>{
    e.preventDefault();
    dispatch(addTask(inputUser));
  }
  return (
    <form id="myForm">
      <div className="form-group">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="ajouter quelque tache"
          value={inputUser}
          onChange={(e)=>setInputUser(current=>e.target.value)}
        />
        <button className="btn add" onClick={(e:React.MouseEvent<HTMLElement>)=>AddTask(e)} >ADD</button>
      </div>
    </form>
  );
}

export default AddTask;