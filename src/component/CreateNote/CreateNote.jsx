import React, { useState } from 'react';
import './CreateNote.styles.css'
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
const CreateNote = (props) => {
const [expand, setExpand] = useState(false);


const [note, setNote ] = useState({
    title : '',
    content: '',
})

const expandIt = () =>{
    setExpand(true);
}
const backtoNormal = () =>{
    setExpand(false);
}

const InputEvent = (event) =>{

const {name, value} = event.target;

setNote((prevData) =>{
    return{
        ...prevData,
        [name]: value,
    }
})

}

const addEvent = () =>{
props.passNote(note)
setNote({
    title : '',
    content: '',
})
}
    return (
        <div className="main_note" onDoubleClick={backtoNormal}>
{
    expand ? 
            <input type="text" 
            name="title"
            value={note.title} 
            onChange={InputEvent} 
            placeholder="Title" 
            autoComplete="off"
            className="text-one" />
:null}

            <textarea cols="30" rows="5"
            name="content"
            value={note.content} 
            className="textarea-one"
            onChange={InputEvent}
             placeholder="Write a Note..." 
             onClick={expandIt} 
             
             />

            { expand ? 
            <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
            </Button> 
            : null}
        </div>
    );
};

export default CreateNote;