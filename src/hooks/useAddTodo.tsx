
import { useMutation } from 'react-query';

//Importing Interfaces
import { ITodo } from "./../types";

const addNewTodo = async() => {
    
    await new Promise(resolve => setTimeout(resolve, 2000));

    // const newId:number  = todoData.length + 1;
    // const newTodoObj:ITodo = {
    //   id: newId,
    //   name: name,
    //   isEditing: false
    // }

    // return newTodoObj;

}

export default function useAddTodos() {
    return useMutation(addNewTodo);
}