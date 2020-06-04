import React from "react";
import Todo from "./todo";
import { ITodo, ITodoList } from "./../types";

const TodoList = (props:ITodoList) => {
    const { todoData } = props;
    return(
        <div className="ba b--silver w-70 w-100-m center bg-silver">
            {
                todoData.map((key:ITodo, index:number) => {
                    return <Todo 
                        name={key.name} 
                        isEditing={key.isEditing}
                        id={key.id} 
                        index={index}
                        key={index}
                    />
                })
            }
        </div>
    )
}

export default TodoList;