// SearchBar.js
// Created by Matt Parrella on 8/7/19
//
// This class will handle both the behavior and display style of the search bar component

import React, { Component } from 'react';
import './SearchBar.css';
import BusinessList from '../BusinessList/BusinessList';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions.sortByOption;
            return <li key={this.sortByOptionValule}></li>;
        });        
    }

    render() {
        return <div class="SearchBar">
        <div class="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div class="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div class="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>;
    }
    
}

export default SearchBar;
