export interface ITodo {
    "id": number,
    "name": string,
    "isEditing": boolean
}

export interface IEditTodo {
    "index": number,
    "name"?: string
}

export interface ICreateTodo {
    "addTodoFn": (arg0: string) => void,
    "editMode": boolean,
    "editItemObj": IEditTodo,
    "updateTodoFn": (arg0: string) => void 
}
export interface ITodoList {
    "todoData": ITodo[],
}
export interface ITodoItem extends ITodo{
    index: number
}
export type ITodoContext = {
    cancelTodoFn: (arg0: number) => void,
    editTodoFn: (arg0: number) => void,
    removeTodoFn: (arg0: number) => void,
    editMode: boolean
  };