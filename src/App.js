import React, { useEffect, useState, lazy, Suspense } from 'react';

import CreateTodo from "./components/create-todo";
import TodoList from "./components/todo-list";
import TodoContext from "./context/todo-context";

// const TodoList2 = lazy(() => import("./components/todo-list"));

const json = require("./data.json");

import logo from './logo.svg';
import './App.css';

const App = () => {

  function useEditObj() {
    const [editItemObj, setEditItemObj] = useState({});

    const emptyEditObj = () => {
      setEditItemObj({});
    }
    const setEditObj = (obj) => {
      setEditItemObj(obj);
    }
    return [editItemObj, emptyEditObj, setEditObj];
  }

  function useEditMode() {
    const [editMode, setEditMode] = useState(false);

    const enableEditMode = () => {
      setEditMode(true);
    }
    const disableEditMode = () => {
      setEditMode(false);
    }
    return [editMode, enableEditMode, disableEditMode];
  }
  
  const [todoData, setTodoData] = useState([]);
  const [editItemObj, emptyEditObj, setEditObj] = useEditObj();
  const [editMode, enableEditMode, disableEditMode] = useEditMode();


  useEffect(() => {
      const timer = setTimeout(()=>{ 
        setTodoData(json.data);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
  }, []);

  const addTodoFn = name => {
    const newId  = todoData.length + 1;
    const newTodoObj = {
      id: newId,
      name: name
    }
    setTodoData([
      ...todoData,
      newTodoObj
    ]);
  }
  const updateTodoFn = name => {
    const todoItem = todoData[editItemObj.index];
    todoItem.name = name;
    todoItem.isEditing = false;
    setTodoData([
      ...todoData
    ]);
    disableEditMode();
    emptyEditObj()
  }

  const removeTodoFn = id => {
    setTodoData(todoData.filter((todo)=>todo.id !== id));
    disableEditMode();
    emptyEditObj()
  }

  const editTodoFn = index => {
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

  const cancelTodoFn = index => {
    const todoItem = todoData[index];
    todoItem.isEditing = false;
    setTodoData([
      ...todoData
    ]);
    disableEditMode();
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Todo App</h2>
      </div>
        <div className="content">
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
