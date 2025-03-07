import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Footer } from './Footer';
import { useTodoStore } from 'entities/Todo/model/store';
import { Filter } from 'entities/Todo/model/types';

jest.mock('entities/Todo/model/store', () => ({
  useTodoStore: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

test('переключение фильтров', async () => {
  const setFilter = jest.fn();

  (useTodoStore as unknown as jest.Mock).mockImplementation((selector) =>
    selector({
      todos: [],
      filter: Filter.All,
      setFilter,
      clearCompleted: jest.fn(),
    })
  );

  render(<Footer />);
  await userEvent.click(screen.getByTestId('filter-all'));
  expect(setFilter).toHaveBeenCalledWith(Filter.All);

  await userEvent.click(screen.getByTestId('filter-active'));
  expect(setFilter).toHaveBeenCalledWith(Filter.Active);

  await userEvent.click(screen.getByTestId('filter-completed'));
  expect(setFilter).toHaveBeenCalledWith(Filter.Completed);
});

test('очистка завершенных задач', async () => {
  const clearCompleted = jest.fn();

  (useTodoStore as unknown as jest.Mock).mockImplementation((selector) =>
    selector({
      todos: [],
      filter: Filter.All,
      setFilter: jest.fn(),
      clearCompleted,
    })
  );

  render(<Footer />);

  await userEvent.click(screen.getByTestId('clear-completed'));
  expect(clearCompleted).toHaveBeenCalled();
});
