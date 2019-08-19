/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Business from '../business/Business';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Matt\'s Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
business,
business,
business,
business,
business,
business
];

function App() {
  return (
    <div className="app">
      <h1>ravenous</h1>
      <SearchBar></SearchBar>
      <BusinessList businesses={businesses} />    
    </div>
  );
}

export default App;
