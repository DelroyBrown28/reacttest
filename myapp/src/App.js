import React, { Component } from 'react';
import Ninjas from './ninjas.js';

class App extends Component {
  state = {
    ninjas : [
      {name: 'Ryu', age: 30, belt: 'Black', id: 1},
      {name: 'Delroy', age: 29, belt: 'Leather', id: 2},
      {name: 'Betty', age: 77, belt: 'Cotton', id: 3},
    ]
  }
  render() {
    return (
      <div className="App">
       <h1>My first React app!</h1>
       <p>Welcome :)</p>
       <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
