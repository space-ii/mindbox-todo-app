import { filterTodos } from 'entities/Todo/lib/filterTodos';
import { useTodoStore } from 'entities/Todo/model/store';
import styles from './TodoList.module.scss';

export const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const filter = useTodoStore((state) => state.filter);

  const filteredTodos = filterTodos(todos, filter);


  return (
    <ul className={styles.list}>
      {filteredTodos.map((todo) => (
        <li key={todo.id} className={styles.item}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className={styles.checkbox}
          />
          <span className={todo.completed ? styles.completed : ''}>
            {todo.title}
          </span>
        </li>
      ))}
    </ul>
  );
};
