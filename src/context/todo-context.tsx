import React from "react";
import { ITodoContext } from "./../types";

const TodoContext = React.createContext<ITodoContext>({
    cancelTodoFn: () => {},
    editTodoFn: () => {},
    removeTodoFn: () => {},
    editMode: false
});

export default TodoContext;