import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 27 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }   // state property Only available in components that extends other components. This is before react hooks

  switchNameHandler = () => {
    //console.log('was clicked');
    // Don't do this: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
     })
  };

  render() {
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!!</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >My Hobbies: Racing</Person>
      </div>
    );
    //return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!'); // 3 arguments in createElement method- 1st element is we want to render to the dom. 2nd is the configuration, and is optional. 3rd is any amount of children. *However this only renders text and not an element.*
    //below is the fix to the above return creating an h1 element. This is the same exact code as the initial jsx code written above. However these nested items can get a bit cumbersome, which is why the standard is the original jsx used above.
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now??'));
  }
}

export default App;
