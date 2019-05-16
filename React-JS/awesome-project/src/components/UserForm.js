import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import Confirm from './Confirm';
import Success from './Success';
export class UserForm extends Component {
    state ={
        step :1,
        firstname:"",
        lastname:"",
        email:"",
        phoneno:"",
        dob:"",
        experience:"",
        uploadresume:"",
        valuesRecieved:"",
    };

    //nextstep proceed
    nextstep =()=>{
        const {step}=this.state;
        this.setState({
            step: step+1
        });
    };

    //previous step proceed
    prevstep =()=>{
        const {step}=this.state;
        this.setState({
            step: step-1
        });
    };

    //handle fields change
    handlechange = input => e => {
        this.setState({[input]: e.target.value});
    }

    
  render() {
      const {step}=this.state;
      const{firstname,lastname,email,phoneno,dob,experience,uploadresume}=this.state;
      const values = {firstname,lastname,email,phoneno,dob,experience,uploadresume}
      const valuesRecieved={firstname,lastname,email,phoneno,dob,experience,uploadresume};
    //   values.forEach(element => {
    //       console.log(element.Component);
     // });
 switch(step){
     case 1:
     return(
         <FormUserDetails
         nextstep={this.nextstep}
         handlechange={this.handlechange}
         
         values = {values}
         />
  );
     case 2:
     return(
         <Confirm
         nextstep={this.nextstep}
         prevstep={this.prevstep}
         values = {values}
         />
  );
  case 3:
  return(
     <Success
     />
     );

     
}
  }
}

export default UserForm;