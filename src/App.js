import React, { Component } from 'react';
import Search from './Search';
import Results from './Results';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      query: '',
      results: {}
    }
  }


  handleQuery (newQuery) {
    this.setState ({query: newQuery})
  }

  handleBookSearch () {
    console.log(this.state.query);
    //fetch request
    //update state results
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Google Book Search</h1>
        </header>
        <Search handleBookSearch={this.handleBookSearch.bind(this)}
        handleQuery={this.handleQuery.bind(this)}/>
        <Results />
      </div>
    );
  }
}

export default App;
