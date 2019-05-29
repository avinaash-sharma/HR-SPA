import React,{Component} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      isLoaded:false,

      columnDefs: [
        {headerName: "ID", field: "id"},
        {headerName: "Name", field: "name"},
        {headerName: "UserName", field: "username"},
        {headerName: "address", field: "address"},
        {headerName: "Phone", field: "phone",editable: true},
        {headerName: "Website", field: "website"}],
      

      rowData:[]

    }
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(rowData => this.setState({rowData}))
    .then(json=>{
      this.setState({
        isLoaded:true,
        items:json,

      })
    });
  }
  render(){
    var {isLoaded,items}=this.state;
    if(!isLoaded){
      return <div>Loading...</div>;
    }
    else{
      return (<div className="App">
      <div
            className="ag-theme-balham"
            style={{ height: '1200px', width: '1200px' }}
        >

            <AgGridReact
                enableSorting={true}
                enableFilter={true}
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}>
                
            </AgGridReact>
      </div>
      </div>);
    }
    
  }
  
}

export default App;





// <ul>
// {items.map(item =>(
//   <li key={item.id}>ZipCode:{item.address.zipcode} | Eamil:{item.email}</li>  
// ))};
// </ul>