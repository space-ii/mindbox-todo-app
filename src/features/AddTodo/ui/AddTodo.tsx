import { useTodoStore } from 'entities/Todo/model/store';
import { useState } from 'react';
import styles from './AddTodo.module.scss';

export const AddTodo = () => {
  const [title, setTitle] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <span className={styles.arrow}>❯</span>
        <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What needs to be done?"
            className={styles.input}
        />
    </form>
  );
};
