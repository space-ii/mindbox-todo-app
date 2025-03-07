import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoList } from './TodoList';
import { useTodoStore } from 'entities/Todo/model/store';
import { Filter } from 'entities/Todo/model/types';

jest.mock('entities/Todo/model/store', () => ({
  useTodoStore: jest.fn(),
}));

test('отображение задач и переключение статуса', async () => {
  const toggleTodo = jest.fn();
  (useTodoStore as unknown as jest.Mock).mockImplementation((selector) =>
    selector({
      todos: [
        { id: '1', title: 'Test Task', completed: false },
      ],
      filter: Filter.All,
      toggleTodo,
    })
  );

  render(<TodoList />);

  expect(screen.getByText('Test Task')).toBeInTheDocument();

  await userEvent.click(screen.getByRole('checkbox'));
  expect(toggleTodo).toHaveBeenCalledWith('1');
});
