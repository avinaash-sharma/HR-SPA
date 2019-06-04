import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Theme from './Theme';

function App() {
  return (
    <div className="App">
      <Theme />
    </div>
  );
}
ReactDOM.render(<Theme/>, document.getElementById('root'));

export default App;
