import React, { useContext, Fragment } from "react";
import TodoContext from "./../context/todo-context";
import { ITodoItem } from "./../types";

const Todo:React.FC<ITodoItem> = props => {
    const context = useContext(TodoContext);
    const { index, id, name, isEditing } = props;

    return(
        <div className="bg-white ma2 pa3 flex justify-between">
        <span className="b pr2">{ index+1 }.</span>    
        <span className="tl" style={{"flex": 2}}>{ name }</span>
        {
            !context.editMode && 
            <Fragment>
                <span className="f6 pointer mr3 bg-light-green ph3" onClick={() => context.editTodoFn(index)}>EDIT</span>
                <span className="f6 pointer bg-red ph3 white hover-bg-black" onClick={() => context.removeTodoFn(id)}>DELETE</span>  
            </Fragment>
        }
        {
            isEditing && 
            <Fragment>
                <span className="f6 pointer mr3 bg-orange ph3" onClick={() => context.cancelTodoFn(index)}>CANCEL</span>
                <span className="f6 pointer bg-red ph3 white hover-bg-black" onClick={() => context.removeTodoFn(id)}>DELETE</span>
            </Fragment>
        }
        </div>
    )
}

export default Todo;