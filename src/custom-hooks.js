import React, { useState } from "react";

export function useEditObj() {
    const [editItemObj, setEditItemObj] = useState({});
    const emptyEditObj = () => {
        setEditItemObj({});
    }
    return [editItemObj, emptyEditObj];
}