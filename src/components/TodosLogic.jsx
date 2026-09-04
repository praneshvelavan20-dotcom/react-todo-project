import React from 'react'
import InputTodo from './InputTodo'
import TodosList from './TodosList'
import { v4 as uuidv4 } from "uuid";
import { TodosProvider } from '../context/TodosContext';
function TodosLogic() {
  
  
  return (
    <>
    <TodosProvider>
      <InputTodo  />
      <TodosList  />
      </TodosProvider>
    </>
  )
}

export default TodosLogic
