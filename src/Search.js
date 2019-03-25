import React from 'react';

export default function Search(props) {
  
    return (
      <form className="search-form">
        <legend>Search</legend>
        <input type="text" name="search-field" 
        onChange={event => props.handleQuery(event.target.value)}></input>
        <input type="submit" 
          onClick={(event) => {
            event.preventDefault();
            props.handleBookSearch();}}
          />
      </form>
      
    );
}

