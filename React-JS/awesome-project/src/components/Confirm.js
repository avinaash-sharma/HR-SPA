import React, { Component } from 'react';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import MuiThemeProvider  from
 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    // continue = e =>{
    //     e.preventDefault();
    //     this.props.nextstep();

    // }
    onClickSubmit = e =>{
      e.preventDefault();
      console.log('this is From onClickSubmit');
      // const { valuesRecieved } = this.props;
      // var name={name:this.props.values.firstname};
      
     
     var user1={firstname:this.props.values.firstname,lastName:this.props.values.lastName,experience:this.props.values.experience,dob:this.props.values.dob,phoneno:this.props.values.phoneno, eamil:this.props.values.dob};
      localStorage.setItem('name',JSON.stringify(this.props.values.firstname));
      localStorage.setItem('user1',JSON.stringify(user1));
      this.props.nextstep();
      // browserHistory.push('/check.html');
    }

    
    back = e =>{
        e.preventDefault();
        this.props.prevstep();

    }
  render() {
      const { values:{firstname,lastname,email,phoneno,dob,experience}}=this.props;
      
    return (
      <div>
      <form onSubmit={this.onClickSubmit}>
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title=" CANDIDATE DETAILS"/><br/><br/>
               <List>
                   <ListItem
                        primaryText="First Name"
                        secondaryText={firstname}
                   />
                                      <ListItem
                        primaryText="Last Name"
                        secondaryText={lastname}
                   />
                                      <ListItem
                        primaryText="Email-id"
                        secondaryText={email}
                   />
                                      <ListItem
                        primaryText="Phone Number"
                        secondaryText={phoneno}
                   />
                                      <ListItem
                        primaryText="Date Of Birth"
                        secondaryText={dob}
                   />
                                      <ListItem
                        primaryText="Experience"
                        secondaryText={experience}
                   />
               </List>
                <RaisedButton 
                label="confirm"
                type="submit"
                primary={true}
                style={styles.button}
                // onClick={this.continue}
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
export default Confirm