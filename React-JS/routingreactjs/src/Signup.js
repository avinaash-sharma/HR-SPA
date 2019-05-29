import React from 'react';
import useSignUpForm from './CustomHooks';

const Signup = () => {
  const signup = () => {
    alert(`
Name: ${inputs.firstName} ${inputs.lastName}
Email: ${inputs.email}
Date of Birth: ${inputs.dob}
Phone Number: ${inputs.phoneNumber}
Experience: ${inputs.experience}`);

localStorage.setItem('inputs',JSON.stringify(inputs));
  }
  
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm({firstName: '', lastName: '', email: '', dob:'', phoneNumber:'',experience:'',file:'', password1: '', password2: ''}, signup);
  return (
       <div className="modal-content container">
      <center >
          <h1 style={{backgroundColor: '#3397ff',color:'white',fontSize:'24px',
fontWeight: '400'}}> Candidate Details</h1>
          <hr></hr>
    <div className="section is-fullheight " style={{paddingTop:'50px'}}>
      <div className="container">
        <div className="column is-4 is-offset-4">
        <table>
          <div className="box">
          <b>
            <form onSubmit={handleSubmit} autoComplete="off">
            <tr>
                
              <div className="field">
              
              <td>
                
                 <span style={{padding:'65px'}}>FirstName     :</span>
                </td>
                <td>
                <div className="control">
                  <input className="input" type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName}  />
                </div>
                </td>
                
              </div>
              </tr>
              <tr>
              <div className="field">
              <td>
              <span style={{padding:'65px'}}>LastName     :</span>
                </td>
                <td>
                <div className="control">
                  <input className="input" type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
                </div>
                </td>
                
              </div>
              </tr>
              
              <div className="field">
              <tr>
                  <td>
                  <span style={{padding:'58px'}}>Email id :</span>

                </td>
                
                <td>
                <div className="control">
                  <input className="input" type="text" name="email" onChange={handleInputChange} value={inputs.email} required />
                </div>
                </td>
                </tr>
                <tr>
                    <td>
                    <span style={{padding:'50px'}}>Date of birth :</span>
                                    </td>
                    <td>
                
                <div className="control">
                  <input className="input" type="date" name="dob" onChange={handleInputChange} value={inputs.dob} required />
                </div>
                </td>
                </tr>
                <tr>
                    <td>
                    <span style={{padding:'50px'}}>PhoneNumber:</span>
                </td>
                <td>
                <div className="control">
                  <input className="input" type="text" name="phoneNumber" onChange={handleInputChange} value={inputs.phoneNumber} required />
                </div>
                </td>
                </tr>
                <tr>
                    <td>
                    <span style={{padding:'50px'}}>Experience:</span>
                </td>
                <td>
                <div className="control">
                  <input className="input" type="text" name="experience" onChange={handleInputChange} value={inputs.experience} required />
                </div>
                </td>
                </tr>
                <tr>
                    <td>
                    <span style={{padding:'50px'}}>Upload Resume:</span>
                </td>
                <td>
                <div className="control">
                  <input className="input" type="file" name="file" onChange={handleInputChange} value={inputs.file} required />
                </div>
                </td>
                </tr>
              </div>
              <br></br><br></br>
            <button className="button is-block is-fullwidth is-success btn-primary btn" type="submit"  style={{marginLeft:'350px',marginBottom:'20px'}}>Next</button>
            </form></b>
          </div>
          </table>
        </div>
      </div>
    </div>
    </center>
    </div>
  )
}

// continue = e =>{
//     e.preventDefault();
//     this.props.nextstep();

// }var widgets = JSON.parse(localStorage.getItem('widgets'));

export default Signup;