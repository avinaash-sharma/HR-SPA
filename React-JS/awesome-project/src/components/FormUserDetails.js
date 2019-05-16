import React, { Component } from 'react';

import MuiThemeProvider  from
 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextstep();

    }
    back = e =>{
        e.preventDefault();
        this.props.prevstep();

    }
  render() {
      const{values,handlechange}=this.props;

    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
        
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="CANDIDATE DETAILS"/><br/><br/>
                <TextField
                    hintText="Enter FirstName"
                    floatingLabelFixed="First Name"
                    onChange={handlechange('firstname')}
                    defaultValue={values.firstname}
                    
                /><br/>
                   <TextField
                    hintText="Enter LastName"
                    floatingLabelFixed="Last Name"
                    onChange={handlechange('lastname')}
                    defaultValue={values.lastname}
                    
                /><br/>
                   <TextField
                   
                    hintText="Enter E-mail Id"
                    type="email"
                    floatingLabelFixed="Email"
                    onChange={handlechange('email')}
                    defaultValue={values.email}
                    
                /><br/>
                   <TextField
                    hintText="Enter Phone Number"
                    floatingLabelFixed="Phone Number"
                    onChange={handlechange('phoneno')}
                    defaultValue={values.phoneno}
                    
                /><br/>
                   <TextField
                    
                    type="date"
                    floatingLabelFixed="Date oOf Birth"
                    onChange= { handlechange('dob')}
                    defaultValue= { values.dob}
                    
                /><br/>
                   <TextField
                   hintText="Experience In Years"
                    type="number"
                    floatingLabelFixed="experience"
                    onChange={handlechange('experience')}
                    defaultValue={values.experience}
                    
                /><br/>
                {/* <span>Upload Resume : </span> */}
                   <input
                    
                    type="file"
                   
                    onChange={handlechange('uploadresume')}
                    defaultValue={values.uploadresume}
                    
                /><br/>
                <RaisedButton 
                label="continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
                />

                <RaisedButton 
                label="back"
                primary={true}
                style={styles.button}
                onClick={this.back}
                />
                
            </React.Fragment>
        </MuiThemeProvider>
        </form>
      </div>
    );
  }
}
const styles={
    button:{
        margin:25
    }
}
export default FormUserDetails