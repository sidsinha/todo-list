import React from "react";
import Todo from "./todo";

const TodoList = props => {
    console.log("TodoList App");
    const { todoData } = props;
    return(
        <div className="todolist">
            {
                todoData.map((key, index) => {
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