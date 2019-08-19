// Business.js
// Created by Matt Parrella on 8/6/2019
//
// This class will handle how a 'Business' component will be formatted and styled

import React, { Component } from 'react';
import './Business.css';



class Business extends Component {

  render() {
        const { business } = this.props;
        return <div class="Business">
        <div class="image-container">
          <img src={business.imageSrc} alt=''/>
        </div>
        <h2>{business.name}</h2>
        <div class="Business-information">
          <div class="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state} {business.zipCode}</p>
          </div>
          <div class="Business-reviews">
            <h3>{business.category}</h3>
            <h3 class="rating">{business.rating}</h3>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>;
    }

}

export default Business;

