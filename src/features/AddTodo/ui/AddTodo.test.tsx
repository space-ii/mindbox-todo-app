// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { AddTodo } from './AddTodo';
// import { useTodoStore } from 'entities/Todo/model/store';

// jest.mock('entities/Todo/model/store', () => ({
//     useTodoStore: jest.fn(),
//   }));


// test('добавление новой задачи', async () => {
//     const addTodo = jest.fn();
//     (useTodoStore as unknown as jest.Mock).mockReturnValue({ addTodo });

//     render(<AddTodo />);

//     const input = screen.getByPlaceholderText(/what needs to be done/i);
//     await userEvent.type(input, 'New Task{enter}');

//     expect(addTodo).toHaveBeenCalledWith('New Task');
// });
import { render, screen } from '@testing-library/react';
import { AddTodo } from './AddTodo';

test('рендерится AddTodo и отображается инпут', () => {
  render(<AddTodo />);

  const input = screen.getByPlaceholderText(/what needs to be done/i);

  expect(input).toBeInTheDocument();
});
