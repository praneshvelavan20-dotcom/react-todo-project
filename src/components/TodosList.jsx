import TodoItem from './TodoItem';
import { useTodosContext } from '../context/TodosContext';
const TodosList = () => {
  const { todos } = useTodosContext();
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </ul>
  );
};
export default TodosList;