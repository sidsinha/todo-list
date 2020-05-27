import React, { useRef } from "react";

const CreateTodo = props => {

    const { addTodoFn, editMode, editItemObj, updateTodoFn } = props;
    const todoRef = useRef();

    if(editMode) {
        todoRef.current.value = editItemObj.name;
    } else if(todoRef.current){
        todoRef.current.value = "";
    }
    const addNewTodo = () => {
        const todoItem = todoRef.current;
        addTodoFn(todoItem.value);
        todoItem.value = "";
    }
    const updateTodo = () => {
        const todoItem = todoRef.current;
        updateTodoFn(todoItem.value);
        todoItem.value ="";
    }
    return(
        <div className="create-todo">
            <input 
                type="text" 
                name="todo_name"
                ref={todoRef} 
                placeholder="Enter new todo item"
            />
            <button 
                type="submit" 
                onClick={editMode ? updateTodo : addNewTodo}
            >
                {editMode ? "UPDATE" : "ADD"}
            </button>
        </div>
    )
}

export default CreateTodo;