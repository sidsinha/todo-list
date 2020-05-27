import React, { useContext, Fragment } from "react";
import TodoContext from "./../context/todo-context";

const Todo = props => {
    const context = useContext(TodoContext);
    const { index, id, name, isEditing } = props;

    return(
        <div className="todo">
        <span className="todo-index">{ index+1 }.</span>    
        <span className="todo-name">{ name }</span>
        {
            !context.editMode && <Fragment>
                <span className="todo-action delete" onClick={() => context.removeTodoFn(id)}>DELETE</span>
                <span className="todo-action edit" onClick={() => context.editTodoFn(index)}>EDIT</span>
            </Fragment>
        }
        {
            isEditing && <Fragment>
                <span className="todo-action delete" onClick={() => context.removeTodoFn(id)}>DELETE</span>
                <span className="todo-action cancel" onClick={() => context.cancelTodoFn(index)}>CANCEL</span>
            </Fragment>
        }
        <div className="clear"></div>
        </div>
    )
}

export default Todo;