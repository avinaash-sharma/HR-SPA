self.actionCellRenderer = function () { };
self.actionCellRendered = function () { };
self.actionCellRenders = function () { };
self.actionCellRenderer.prototype = {
    init: function (params) {
        this.actionsButton = document.createElement('div');
        this.actionsButton.innerHTML = `
<div class="btn-group"  >
        
   
    <select name="dropdown" class=" btn-default dropdown-toggle" id="clickme"  >
    <option value="JOBPROFILE" disabled>JOBPROFILE</option>
    <option value="ICS_SMP" >ICS_SMP</option>
    <option value="ICS_HDM">ICS_HDM</option>
    <option value="ICS_UI">ICS_UI</option> 
    <option value="ICS_CDP">ICS_CDP</option>
    <option role="separator" class="divider" disabled ></option>
    </select>
    

</div>
        `;
    },
    getGui: function () {
        return this.actionsButton;
    },
    // refresh: function () {
    //     return true;
    // },
    // destroy: function () {
    //     $(this.actionsButton).remove();
    // }
}
self.actionCellRendered.prototype = {
    init: function (params) {
        this.actionsButton = document.createElement('div');
        this.actionsButton.innerHTML = `
<div class="btn-group "  >
     
<a href="#open-modal">Status Report</a>

<div id="open-modal" class="modal-window ">
  <div class="container modal-content">
 
<h1 class="modal-header">feedback forms
<a href="#modal-close" title="Close" class="modal-close"  ><i class="far fa-times-circle" style=" margin :30px;padding-top:5px "></i></a></h1>

   
    <form action="index.html" method="POST">

    Interviewer Name: <br>
    <input type="text" name="realname"><br>
    <br>
    
    Interviewer Email: <br>
    <input type="text" name="email"><br>
    <br>
    <div>
    Candidate Status: <br>
    <select name="dropdown" class="btn btn-default dropdown-toggle" id="clickme"  >
    <option role="separator" class="divider" ></option>
    <option value="Selected" >Selected</option>
    <option role="separator" class="divider" disabled></option>
    <option value="Round1">Round1</option>
    <option value="Round2">Round2</option>
    <option role="separator" class="divider" disabled></option>
    <option value="Rejected">Rejected</option>

    </select><br>
</div><br>
   
    Your Comments: <br>
    <textarea name="comments" rows="5" cols="25" style="width:356px; height:152px  "></textarea><br><br>
    
    <button class="btn btn-primary" type="submit" value="Submit">submit</button>
    <button class="btn btn-danger" type="close"  value="cancel">cancel</button>
    </form>

  </div>
</div>
</div>
        `;
    },
    getGui: function () {
        return this.actionsButton;
    },
  
}
self.actionCellRenders.prototype = {
    init: function (params) {
        this.actionsButton = document.createElement('div');
        this.actionsButton.innerHTML = `

        <div class="btn-group modal-content " >
        <a href="#candidatedetails"><i class="fas fa-address-card"></i></a>     
        <div id="candidatedetails" class="modal-window">  
        <div class="modal-content">
        <a href="#modal-close" title="Close" class="modal-close" ><i class="far fa-times-circle"></i></a>
        <h1>details form</h1>
        <form action="index.html" method="POST" >
        Name: <textfield id="name">Abhi</textfield>
        <br>
        Email: 
        <textfield id="email"></textfield><br>
        <div>
        Date of Birth :
          <textfield id="dob"></textfield><br>
      Experience :
        <textfield id="experience"></textfield>
        <text
        Phone Number :
        <input type="text" name="phoneNumber" readonly><br>
        <button class="btn btn-danger" type="close" value="cancel">cancel</button>
        <button class="btn btn-primary" type="submit" value="ok">ok</button>
        </form>
        </div>
          </div>
       </div>        
        `;
    },
    getGui: function () {
        return this.actionsButton;
    },
   
}
var comment = JSON.parse(localStorage.getItem('user1'));
  console.log("comment retrieve : ", comment);
var columnDefs = [
    {headerName: "deatils", field: "details",cellRenderer: actionCellRenders, cellClass: "actions-button-cell", suppressSorting: true},
    {headerName: "name", field: "name",enableFilterter:true ,enableSorting:true},
    {headerName: "jobprofile", field: "jobprofile",enableFilterter:true ,enableSorting:true ,cellRenderer: actionCellRenderer, cellClass: "actions-button-cell", suppressSorting: true},
  
    // {headerName: "Status",  field: "status",width: 90, cellRenderer: actionCellRenderer, cellClass: "actions-button-cell", suppressSorting: true}
    ,{headerName: "feedback", field: "feedback",cellRenderer: actionCellRendered, cellClass: "actions-button-cell", suppressSorting: true}
    
];

var dataSource = [
  {name: localStorage.getItem('name'),  jobprofile: 'ICS_IMPACT'},
  {name: 'Avinash sharma',  jobprofile: 'ICS_HDM'},
  {name: 'Sri ram ',  jobprofile: 'ICS_UI'},
  {name: 'Surbhi kumari',  jobprofile: 'ICS_SMP'}
  ];

var gridOptions = {
    columnDefs: columnDefs,
    rowData: dataSource,
    enableColResize: true,
    enableFilter: true,
    enableSorting: true,
    domLayout: 'autoHeight',
    onGridReady: function (params) {
        params.api.sizeColumnsToFit();
    }
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv1 = document.querySelector('#myGrid1');
    new agGrid.Grid(gridDiv1, gridOptions);
    document.getElementById("name").innerText=localStorage.getItem("name");
document.getElementById("email").innerText=localStorage.getItem("email");
document.getElementById("dob").innerText=localStorage.getItem("dob");
document.getElementById("experience").innerText=localStorage.getItem("experience");
});
