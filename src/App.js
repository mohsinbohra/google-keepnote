import React, { useState } from 'react';

import './App.css';
import {  Switch, Route } from 'react-router-dom';
import login from './pages/login';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import CreateNote from './component/CreateNote/CreateNote';
import Note from './component/Note/Note';


function App() {

  const [addItem, setAddItem] = useState([]);

const addNote = (note) =>{
  // alert('I am clicked');
setAddItem((prevData) =>{
  return [...prevData, note];
}
)
console.log(note);
}

const onDelete =(id) =>{
  setAddItem((olddata) =>
olddata.filter((currdata,indx) =>{
  return indx !== id;
})
  )
}


  return (
    <div className="App">
    <Header />
    <CreateNote passNote={addNote} />
   
{addItem.map((val, index)=> {
  return( <Note 
  key={index}
  id={index}
  title={val.title}
  content={val.content}
  deleteItem={onDelete}
  /> )
})}

    <Footer />
    <div className="clear"></div>
    <Switch>
<Route exact path='/'></Route>

    <Route exact path='/login' component={login} />
    <Route path='*' render={()=>"404 Not Found"} />
    </Switch>
    
    </div>
  );
}

export default App;
