import React from 'react';
import Signup from './Signup';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">

      <Signup />
    </div>
  );
}


ReactDOM.render(<Signup/>, document.getElementById('root'));
export default App;
