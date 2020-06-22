// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, {Component} froom 'react';
class HelloWorld extends Component {
  render (){
    return(
      <div>Hello HelloWorld</div>
    );
  };
};
export default HelloWorld;

import React, {Componet} from 'react';
class Counter extends Component {
  render(){
    return(
      <div></div>
    )
  }
}
export default Counter;

class Counter extends Component {
  constructor()
  super()
  this.state = {
    count: 0,
  }
}