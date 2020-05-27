import React from "react";

const TodoContext = React.createContext({
    cancelTodoFn: () => {},
    editTodoFn: () => {},
    removeTodoFn: () => {},
    editMode: false
});

export default TodoContext;