import React, { Component } from 'react';
import logo from './logo.svg';
import Checkbox from './checkbox'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isChecked: false
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <div>
              <a href="https://github.com/PhmNgocNghia/react-bounce-checkbox" className="App-title">
                React Bouncy Checkbox
              </a>
            </div>
          <div>
            Created by <a href="https://phmngocnghia.github.io">PhmNgocNghia</a>
          </div>
        </header>
        <div className="App-intro">
          {['blue',
            'purple',
            'pink',
            'green',
            'orange',
            'gray',
            'red'].map(modifier => {
              return (
                <Checkbox
                  key={modifier}
                  textClassName="bouncechk__text"
                  className="bouncechk__customClassName"
                  text={modifier}
                  modifierClass={modifier}
                  checked={this.state.isChecked}
                  onChange={() => {
                    this.setState(state => ({ isChecked: !state.isChecked }))
                  }} />
              )
            })}
        </div>
      </div>
    );
  }
}

export default App;
