import React, { Component } from 'react';

class Search extends Component {
  render(props) {
    return (
      <form className="search-form">
        <legend>Search</legend>
        <input type="text" name="search-field" 
        onChange={event => this.props.handleQuery(event.target.value)}></input>
        <input type="submit" 
          onClick={(event) => {
            event.preventDefault();
            this.props.handleBookSearch();}}
          />
      
      </form>
    );
  }
}

export default Search;
