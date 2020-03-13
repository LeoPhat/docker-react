import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.          
        </p> */}
        <p color="blue">Dinh Van Vinh Phat</p>
        <p color="blue">Cai gi vay troi???</p>
        <div>
          <div>
            Dinh Truc My - Dang Thi Hoang Phuong - 12:10 PM
          </div>
        </div>

      </div>
    );
  }
}

export default App;
