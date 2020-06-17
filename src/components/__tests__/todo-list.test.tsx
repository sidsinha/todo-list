import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TodoList from '../todo-list';

const todos = [
  {
      "id": 1,
      "name": "Get Milk",
      "isEditing": false
  },
  {
      "id": 2,
      "name": "Go for Run",
      "isEditing": false
  },
  {
      "id": 3,
      "name": "Watch Netflix",
      "isEditing": false
  }
]

afterEach(cleanup);

test('should render all todos', () => {
    const { getByText } = render(<TodoList todoData={todos} />);
    for (const todo of todos) {
      expect(getByText(todo.name)).toBeInTheDocument();
    }
  });

test('matches snapshot', () => {
    const { container } = render(<TodoList todoData={todos} />)
    expect(container.firstChild).toMatchSnapshot();
  });