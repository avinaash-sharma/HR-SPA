// import React, { Component } from 'react'
// // import { Text, View } from 'react-native'

// export default class Success extends Component {
//   render() {
//     return (
//       <div>
//       <form >
        
//  var columnDefs = "{[
//     {headerName: "deatils", field: "details", cellClass: "actions-button-cell", suppressSorting: true},
//     {headerName: "name", field: "name",enableFilterter:true ,enableSorting:true},
//     {headerName: "jobprofile", field: "jobprofile",enableFilterter:true ,enableSorting:true},
  
//     // {headerName: "Status",  field: "status",width: 90, cellRenderer: actionCellRenderer, cellClass: "actions-button-cell", suppressSorting: true}
//     ,{headerName: "feedback", field: "feedback", cellClass: "actions-button-cell", suppressSorting: true}
    
// ]};

// var dataSource = {[
//   {name: 'Abhishek kumar chaturvedi',  jobprofile: 'ICS_IMPACT'},
//   {name: 'Avinash sharma',  jobprofile: 'ICS_HDM'},
//   {name: 'Sri ram ',  jobprofile: 'ICS_UI'},
//   {name: 'Surbhi kumari',  jobprofile: 'ICS_SMP'}
//   ]};

// }};

             
//              </form>
//              </div>
//     );
//   }
// }

// export default Success


// import React, {Component} from 'react'
// import {BootstrapTable, TableHeaderColumn} from 
//        'react-bootstrap-table'
       
//        import {Grid} from 'ag-grid-community';
// // import console = require('console');
//       //  import '../css/Table.css'
//       var AgGrid = require('ag-grid-community');
// require('ag-grid-enterprise');
   
// class Success extends Component {
//   render() {
//     return (
//       <div  class="ag-theme-balham" >

//             <BootstrapTable data={data}>
//           <TableHeaderColumn isKey
//                              dataField='id'
//                             //  dataAlign='center'
//                             //  headerAlign="left"
//                             width= "80"
//                              headerName= "deatils"
      
//       //  cellRenderer= {actionCellRenders}
//        cellClass= "actions-button-cell"
//        suppressSorting= {true}
//                              tdStyle={
//                                  {backgroundColor: 'green'}}>
//             ID
//           </TableHeaderColumn>
      
//        <TableHeaderColumn
//          dataField='name'
//         //  dataAlign='center'
//         //  headerAlign="left"
//          width="34"
//       headerName= "name"
//       //  field="name"
//       enableFilterter="true"
//       enableSorting="true"
//       tdStyle={
//         {backgroundColor: 'green'}}>
// NAME
//       </TableHeaderColumn>
     
//       <TableHeaderColumn
//       dataField='jobprofile'
//         //  dataAlign='center'
//         //  headerAlign="left"
//          width= "34"
//          height= "378"
//       headerName="jobprofile"
       
//         tdStyle={
//                                  {backgroundColor: 'green'}}>
//             JOBPROFILE
//     </TableHeaderColumn>
//       <TableHeaderColumn 
//       dataField='status'
//       dataAlign='center'
//       headerAlign="left"
//       width= "34"

//         headerName= "status"
          
         
           
//             // {/* cellClass= "actions-button-cell" */}
//              suppressSorting= 'true'
//              tdStyle={
//                                  {backgroundColor: 'green'}}>
//             STATUS
// </TableHeaderColumn>
// <TableHeaderColumn
// dataField='feedback'
// dataAlign='center'
// headerAlign="left"
// width= "34"
//       headerName= "feedback"
      
//       //  {/* cellClass= "actions-button-cell" */}
//         suppressSorting= 'true'
//         tdStyle={
//                                  {backgroundColor: 'green'}}>
//             feedback
//    </TableHeaderColumn>
//     </BootstrapTable>
//       </div>
//     )
//   }
// }
// // console.log(localStorage.getItem('name'))
// var data = [
//   {id: 1, name: localStorage.getItem('name'), jobprofile: '2' ,status:'yes',feedback:'no'}
//   // {id: 1, name: 'Gob', jobprofile: '2' ,status:'yes',feedback:'no'},
//   // {id: 1, name: 'Gob', jobprofile: '2' ,status:'yes',feedback:'no'},
//   // {id: 1, name: 'Gob', jobprofile: '2' ,status:'yes',feedback:'no'},
//   // {id: 1, name: 'Gob', jobprofile: '2' ,status:'yes',feedback:'no'}
// ];

// var gridOptions = {
 
//   rowData: data,
//   enableColResize: true,
//   enableFilter: true,
//   enableSorting: true,
//   domLayout: 'autoHeight',
//   onGridReady: function (params) {
//       params.api.sizeColumnsToFit();
//   }
// };
//   document.addEventListener('DOMContentLoaded', function() {
//     var gridDiv1 = document.querySelector('#root');
   
//     new AgGrid.Grid(gridDiv1, gridOptions);
// });

// export default Success





import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { library } from '@fortawesome/fontawesome-svg-core'

import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';



class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [ {
        headerName: "details", field: "details",sortable: true, filter: true,
      },{
        headerName: "name", field: "name" ,sortable: true, filter: true 
      }, {
        headerName: "jobprofile", field: "jobprofile",sortable: true, filter: true 
      }, {
        headerName: "feedback", field: "feedback",sortable: true, filter: true 
      }
      ],
      rowData: [{
       details: "Details", name: localStorage.getItem('name'), jobprofile:' ASE', feedback:'FORM'
      }, {
        details:"1",  name: "Ford", jobprofile: "Mondeo", feedback: 32000
      }, {
        details:"1",  name: "Porsche", jobprofile: "Boxter", feedback: 72000
      }]
    }
  }

 
  render() {
    columnDefs.cellRenderer = function(params) {
      return '<b>' + params.value.toUpperCase() + '</b>';
  }
    return (
      <div 
        className="ag-theme-balham"
        style={{ 
        height: '500px', 
        width: '800px',
         margin: '5px auto'}}
         
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
          
        </AgGridReact>
      </div>
      
    );
  }
}





// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
// import './main'

// export default class Success extends Component {
//   render() {
//     return (
//       <div id="#myGrid1">
//       </div>
//     )
//   }
// }

// export default Success;
