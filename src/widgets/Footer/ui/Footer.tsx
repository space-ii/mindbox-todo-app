import { useTodoStore } from 'entities/Todo/model/store';
import { Filter } from 'entities/Todo/model/types';
import { FilterButton } from 'shared/ui/FilterButton/FilterButton';
import styles from './Footer.module.scss';
import { ClearButton } from 'shared/ui/ClearButton/ClearButton';

export const Footer = () => {
  const todos = useTodoStore((state) => state.todos);
  const filter = useTodoStore((state) => state.filter);
  const setFilter = useTodoStore((state) => state.setFilter);
  const clearCompleted = useTodoStore((state) => state.clearCompleted);

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <footer
        className={styles.footer}
    >
      <span>{itemsLeft} items left</span>
      <div
        className={styles.filters}
        >
      <FilterButton data-testid="filter-all" isActive={filter === Filter.All} onClick={() => setFilter(Filter.All)}>
          All
        </FilterButton>
        <FilterButton data-testid="filter-active" isActive={filter === Filter.Active} onClick={() => setFilter(Filter.Active)}>
          Active
        </FilterButton>
        <FilterButton data-testid="filter-completed" isActive={filter === Filter.Completed} onClick={() => setFilter(Filter.Completed)}>
          Completed
        </FilterButton>
      </div>
      <ClearButton data-testid="clear-completed" onClick={clearCompleted}>Clear completed</ClearButton>
    </footer>
  );
};
