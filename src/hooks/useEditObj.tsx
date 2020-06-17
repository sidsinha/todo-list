import { useState } from 'react';
import { IEditTodo } from "./../types";

export default function useEditObj(): [IEditTodo, () => void, (obj:IEditTodo) => void] {
    const [editItemObj, setEditItemObj] = useState<IEditTodo>({
      index: -1
    });

    const emptyEditObj = ():void => {
      setEditItemObj({
        index: -1
      });
    }
    const setEditObj = (obj:IEditTodo):void => {
      setEditItemObj(obj);
    }
    return [editItemObj, emptyEditObj, setEditObj];

}