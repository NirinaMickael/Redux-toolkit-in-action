import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodoInterface {
  id: number,
  text : string,
  done : boolean
};

const initialState : TodoInterface[] = [
  {id:1,text:"faire les cours",done:true},
  {id:2,text:"Dormir",done:false}
];

export const todoSlice = createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTask : (state:TodoInterface[],action:PayloadAction<string>)=>{
      const newTask = {
        id:Date.now(),
        done : false ,
        text : action.payload
      }
      state.push(newTask);
    },
    toggleTask : (state:TodoInterface[],action:PayloadAction<number>)=>{
      const task = state.find(e=>e.id===action.payload) as TodoInterface;
      task.done = !task.done;
    },
    deleteTask : (state:TodoInterface[],action:PayloadAction<number>)=>{
      state = state.filter(e=>e.id!==action.payload);
      return state;  
    }
  }
}) 

export const {addTask,toggleTask,deleteTask} = todoSlice.actions;
export default todoSlice.reducer;