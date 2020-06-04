import React, { useRef } from "react";
import { ICreateTodo } from "./../types";

const CreateTodo:React.FC<ICreateTodo> = (props):JSX.Element => {

    const { addTodoFn, editMode, editItemObj, updateTodoFn } = props;
    const inputEl = useRef<HTMLInputElement>(null);

    if(editMode && editItemObj.name && inputEl && inputEl.current) {
        inputEl.current.value = editItemObj.name;
    } else if(inputEl.current){
        inputEl.current.value = "";
    }
    const addNewTodo = () => {
        if(inputEl && inputEl.current) {
            const todoItem:HTMLInputElement = inputEl.current;
            addTodoFn(todoItem.value);
            todoItem.value = "";
        }      
    }
    const updateTodo = () => {
        if(inputEl && inputEl.current) {
            const todoItem:HTMLInputElement = inputEl.current;
            updateTodoFn(todoItem.value);
            todoItem.value ="";
        } 
    }
    return(
        <div className="pa3">
            <input 
                className="pa2 w-40 w-60-m"
                type="text" 
                name="todo_name"
                ref={inputEl} 
                placeholder="Enter new todo item"
            />
            <button 
                className="pv2 ph4"
                type="submit" 
                onClick={editMode ? updateTodo : addNewTodo}
            >
                {editMode ? "UPDATE" : "ADD"}
            </button>
        </div>
    )
}

export default CreateTodo;