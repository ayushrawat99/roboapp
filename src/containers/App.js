import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      rob: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ rob: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { rob, searchfield } = this.state;
    const filteredRobots = rob.filter(rob =>{
      return rob.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !rob.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Roboapp</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList rob={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;