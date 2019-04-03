import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  './KeyElements'
import KeyElements from './KeyElements'
import FinalProduct from "./FinalProduct";
import raeData from './rawData'
import Address from "./Address";

class App extends Component {
  render() {
      const rawDataModule=require('./rawData');
      // console.log(rawDataModule);
    return (
      <div className="App">
          <FinalProduct rawData={rawDataModule}/>
          <Address/>



      </div>
    );
  }
}

export default App;
