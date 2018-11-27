import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="main-page">
        <div className="main-container">
          <div className="half-container">
            <div className="shadow-container">
              <div className="app-name-text">
                HARDCOURT ANALYTICS
              </div>
              <img src={logo} className="ball" alt="logo" />
              <div className="shadow"></div>
            </div>
          </div>
          <div className="half-container">
            <div className="contact">
              <a className="contact-text" href="http://angelojcruzjr.com"
                target="_blank" rel="noopener noreferrer">
                A project by Angelo Cruz...coming soon
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
