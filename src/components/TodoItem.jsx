import React from 'react'
import { useState } from "react";
import styles from "../styles/TodoItem.module.css"
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useTodosContext } from '../context/TodosContext';
import {useAuthContext} from '../context/AuthContext';

function TodoItem({item}) {
  const {delTodo, setUpdate ,setTodos} = useTodosContext();
  const [editing, setEditing] = useState(false);
  const {user} = useAuthContext();

  const handleChange = (id) => {
  setTodos((prevState) =>
    prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  );
};   
const handleEditing = () => {
    setEditing(true);
  };
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
 return (
  <><li className={styles.item}>
  <div className={styles.content} style={viewMode}>
     <input type="checkbox" checked={item.completed}
onChange={() => handleChange(item.id)}
/>
{item.title}
{user && (
          <button onClick={handleEditing}>
            <AiFillEdit
              style={{ color: '#5e5e5e', fontSize: '16px' }}
            />
          </button>
        )}
        {user && (
<button onClick={() => delTodo(item.id)}><FaTrash /></button>
)}
</div>
<input
      type="text"
      value={item.title}
      className={styles.textInput }
      style={editMode}
    onChange={ (e) => setUpdate(e.target.value, item.id  )  }
    onKeyDown={handleUpdatedDone}
    />
</li>
</>
  )
}

export default TodoItem