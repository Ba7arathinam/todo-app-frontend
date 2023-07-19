import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
const ToDo = ({text, updateMode, deleteToDo}) => {
    return (
        <div className="todo">
            <div className="text">{text}</div>
            <div className="icons">
                <EditNoteIcon className='icon'  onClick={updateMode} />
                <DeleteIcon className='del' onClick={deleteToDo} />
            </div>
        </div>
    )
}

export default ToDo