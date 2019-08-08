// BusinessList.js
// Created by Matt Parrella on 8/7/2019
//
// This class will handle how the list of business objects will be dislayed on the page

import React from 'react';
import './BusinessList.css';
import Business from '../business/Business.js';


class BusinessList extends React.Component {
    render() {
        return <div class="BusinessList">
            <Business />
            <Business />
            <Business />
            <Business />        
      </div>;
    }
}

export default BusinessList;