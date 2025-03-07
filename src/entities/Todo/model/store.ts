import { create } from "zustand";
import { Filter, Todo } from "./types";

interface TodoStore {
    todos: Todo[];
    filter: Filter;
    setFilter: (filter: Filter) => void;
    addTodo: (title: string) => void;
    toggleTodo: (id: string) => void;
    clearCompleted: () => void
}

export const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    filter: Filter.All,
    setFilter: (filter: Filter) =>
        set({ filter }),
    addTodo: (title) =>
        set((state) => ({
        todos: [...state.todos, { id: crypto.randomUUID(), title, completed: false }],
        })),
    toggleTodo: (id) =>
        set((state) => ({
        todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
        })),
    clearCompleted: () =>
        set((state) => ({
        todos: state.todos.filter((todo) => !todo.completed),
        })),
}))
