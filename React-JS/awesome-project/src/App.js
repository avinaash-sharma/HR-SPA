import React from 'react';

import './App.css';
import UserForm from './components/UserForm';
 import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
function App() {
  return (
    <div className="App">
     <UserForm />
    </div>
  );
}

export default App;
