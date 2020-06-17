import { useState } from 'react';

export default function useEditMode(): [boolean, () => void, () => void] {
    const [editMode, setEditMode] = useState(false);

    const enableEditMode = ():void => {
      setEditMode(true);
    }
    const disableEditMode = ():void => {
      setEditMode(false);
    }
    return [editMode, enableEditMode, disableEditMode];
}