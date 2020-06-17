import React, { useEffect, useState } from 'react';

//Importing Other react components
import CreateTodo from "./components/create-todo";
import TodoList from "./components/todo-list";

//Importing Context
import TodoContext from "./context/todo-context";

//Importing Interfaces
import { ITodo, APIResponse } from "./types";

//Importing Hooks
import useEditMode from "./hooks/useEditMode";
import useEditObj from "./hooks/useEditObj";
import useTodos from "./hooks/useTodos";

//Importing Styles, Images
import "./App.css";
import logo from "./logo.svg";

// const jsonData = require("./data.json");

const App: React.FC = () => {

  const { status, data } = useTodos();

  const [todoData, setTodoData] = useState<ITodo[]>([]);
  const [editItemObj, emptyEditObj, setEditObj] = useEditObj();
  const [editMode, enableEditMode, disableEditMode] = useEditMode();

  useEffect(() => {
    if(status === "success") {
      setTodoData(data);
    }
  }, [status, data]);

  const addTodoFn = (name:string):void => {
    const newId:number  = todoData.length + 1;
    const newTodoObj:ITodo = {
      id: newId,
      name: name,
      isEditing: false
    }
    setTodoData([
      ...todoData,
      newTodoObj
    ]);
  }

  const updateTodoFn = (name:string):void => {
    const todoItem:any = todoData[editItemObj.index];
      todoItem.name = name;
      todoItem.isEditing = false;
    
    setTodoData([
      ...todoData
    ]);
    disableEditMode();
    emptyEditObj()
  }

  const removeTodoFn = (id:number):void => {
    setTodoData(todoData.filter((todo)=>todo.id !== id));
    disableEditMode();
    emptyEditObj()
  }

  const editTodoFn = (index:number):void => {
    const todoItem = todoData[index];
    todoItem.isEditing = true;
    setTodoData([
      ...todoData
    ]);
    enableEditMode();
    setEditObj({
      index: index,
      name: todoItem.name
    })
  }

  const cancelTodoFn = (index:number):void => {
    const todoItem = todoData[index];
    todoItem.isEditing = false;
    setTodoData([
      ...todoData
    ]);
    disableEditMode();
  }

  return (
      <div className="tc courier">
        <div className="bg-black">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="white">Welcome to Todo App</h2>
        </div>
        <div className="w-70 w-90-m w-100-s mt0 center bg-light-gray pa3">
          <h4>You have {todoData.length} todo items</h4>
          <CreateTodo 
            editItemObj={editItemObj} 
            editMode={editMode}
            addTodoFn={addTodoFn}
            updateTodoFn={updateTodoFn}
          />
          <TodoContext.Provider value={{
            cancelTodoFn: cancelTodoFn,
            editTodoFn: editTodoFn, 
            removeTodoFn: removeTodoFn,
            editMode: editMode
          }}
        >
          <TodoList todoData={todoData} />
        </TodoContext.Provider>
        </div>
      </div>
  );
}

export default App;
