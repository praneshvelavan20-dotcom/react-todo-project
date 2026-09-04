import React from 'react'
import { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import {useTodosContext} from '../context/TodosContext';
import {useAuthContext} from '../context/AuthContext';
const InputTodo = () => {
  const { addTodoItem } = useTodosContext();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const {user} = useAuthContext();
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
  e.preventDefault();
  if (title.trim()) {
    addTodoItem(title);
    setTitle('');
    setMessage('');
  } else {
    setMessage('Please add an item');
  }
};

  return (
    <>
    <form className="form-container input-text" onSubmit={handleSubmit}>
      

      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
      />
      {user && (
      <button className="input-submit" type="submit">
        <FaPlusCircle />
      </button>)}
    </form>
    <span className="submit-warning">{message}</span>
</>
  );
  
};
export default InputTodo;
