import React, { Component } from 'react'
import { Container, Box, Typography, TextField,CircularProgress,Button } from '@material-ui/core';
import firebase from '../firebase';



class login extends Component {

constructor(props){
super(props);
this.state = {
email: "",
password: "",
show_progress: false,

};
this.handleChange = this.handleChange.bind();
this.login = this.login.bind();

}

handleChange = (e) => {
  this.setState({
    [e.target.name] : e.target.value
  }); 
};

login = () =>{
let valid_data = true;
this.setState.email_error = null;
this.setState.password_error = null;
if(this.state.email === ""){
  this.setState.email_error = "Required!";
  valid_data = false;
}
if(this.state.password === ""){
  this.setState.password_error = "Required!";
  valid_data = false;
}

if(valid_data){
  this.setState.show_progress = true;
}

this.setState({
  update:true
});

if(valid_data){
  firebase.firestore().collection("USERS")
  .where("email", "==", this.state.email)
  .where("IsAdmin", "==", true)
  .get()
  .then((querySnapshot) =>{
    if(!querySnapshot.empty){
      firebase
.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
.then((res)=>{this.history.props.replace("/");
alert('Hello');
})
.catch((err)=>{
        if(err.code==='auth/wrong-password'){
          this.setState.password_err="Incorrect password!"
        }
        this.setState({
          show_progress:false,
        });
      })

    }else{

      this.setState.email_error = "Not Allowed!"
      this.setState({
        show_progress:false
      });


    }
  })

}
};

    render() {
        return (
            <Container maxWidth="sm">
            <Box bgcolor="primary">Login
            <Typography variant="h5" color="textSecondary">Admin</Typography>
            <TextField
          label="Email"
          id="outlined-size-small"
          name="email"          
          onChange={this.handleChange}   
          error={this.state.email_error!= null}
          helperText={this.state.email_error}       
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
        />
        <TextField
        label="Password"
        type="password"
        name="password"
          onChange={this.handleChange}
          error={this.state.password_error!= null}
          helperText={this.state.password_error}
        id="outlined-size-small"
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
      />
     {this.state.show_progress ? (
      <CircularProgress color="secondary" />
      ):null}
      
<Button 
disableElevation
variant="contained" 
fullWidth 
color="primary" 
onClick={this.login}>
  Login
</Button>
        </Box>
            </Container>
        )
    }
}

export default login;
