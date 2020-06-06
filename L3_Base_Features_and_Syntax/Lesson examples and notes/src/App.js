
//////// Classic class based way to manage state, uses this.state ////////
import React, { Component } from 'react'; //Classic state mgmt { Component } Using Hooks { useState }
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 27 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  };   // state property Only available in components that extends other components. This is before react hooks
switchNameHandler = (newName) => {
    //console.log('was clicked');
   this.setState({
     persons: [
       { name: newName, age: 28 },
       { name: 'Manu', age: 29 },
       { name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 27 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
       ]
     });
  };

render() {
  const styling = {   // inline syling
    backgroundColor: 'white',
    font: 'inheirit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!!</p>
          <button 
            style={styling}
            onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
          <Person name={this.state.persons[0].name} 
                  age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} 
                  age={this.state.persons[1].age} 
                  click={this.switchNameHandler.bind(this, 'Max!')}
                  changed={this.nameChangedHandler} />
          <Person name={this.state.persons[2].name} 
                  age={this.state.persons[2].age} >My Hobbies: Racing</Person>
      </div>
    );
    //return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!'); // 3 arguments in createElement method- 1st element is we want to render to the dom. 2nd is the configuration, and is optional. 3rd is any amount of children. *However this only renders text and not an element.*
    //below is the fix to the above return creating an h1 element. This is the same exact code as the initial jsx code written above. However these nested items can get a bit cumbersome, which is why the standard is the original jsx used above.
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now??'));
    }
}
export default App;

/* 
///////// React Hook method //////////
import React, { useState } from 'react'; //Classic state mgmt { Component } Using Hooks { useState }
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
             { name: 'Max', age: 27 },
             { name: 'Manu', age: 29 },
             { name: 'Stephanie', age: 26 }
           ]
  });

  const switchNameHandler = () => {
    //console.log('was clicked');
    setPersonsState({
     persons: [
       { name: 'Maximilian', age: 28 },
       { name: 'Manu', age: 29 },
       { name: 'Stephanie', age: 27 }
      ]
    });
  };
  return (
    <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} >My Hobbies: Racing</Person>
    </div>
  );
}

export default app;
 */
