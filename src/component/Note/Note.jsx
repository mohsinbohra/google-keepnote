import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Button } from '@material-ui/core';
const Note = (props) => {

const deleteNote = () =>{
    props.deleteItem(props.id);
}

    return (
        <>
        <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <Button onClick={deleteNote}>
        <DeleteOutlineIcon className="deleteIcon" />
        </Button>
        </div>
        
        </>
    );
};

export default Note;