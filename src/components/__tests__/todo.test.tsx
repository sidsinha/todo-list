import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Todo from '../todo';

const todoProps = {
  index: 0,
  id: 1, 
  name: "Go for Walk", 
  isEditing: false
}

afterEach(cleanup);

test('render 1 todo item', () => {
    const { getByTestId } = render(<Todo {...todoProps} />);
    expect(getByTestId('todo-name')).toHaveTextContent('Go for Walk');
    expect(getByTestId('todo-edit')).toHaveTextContent('EDIT');
    expect(getByTestId('todo-delete')).toHaveTextContent('DELETE');
  });

test('render 1 todo item', () => {
    const { getByTestId } = render(<Todo {...todoProps} />);
    expect(getByTestId('todo-name')).toHaveTextContent('Go for Walk');
  });

test('click on Edit', async() => {
    render(<Todo {...todoProps} />);
    const EditLink = screen.getByTestId("todo-edit");
    fireEvent.click(EditLink);
    // expect(screen.queryByText('CANCEL')).toBeInTheDocument();
  });

test('matches snapshot', () => {
    const { container } = render(<Todo {...todoProps} />)
    expect(container.firstChild).toMatchSnapshot();
  });
