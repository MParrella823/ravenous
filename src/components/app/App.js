/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div class="App">
      <header class="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kayt is hot!
        </p>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
