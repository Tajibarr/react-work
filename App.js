import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Taji', age: 19 },
      { name: 'Hasani', age: 19 },
      { name: 'Jen', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 19 },
        { name: 'sani', age: 19 },
        { name: 'Jen', age: 27 }
      ]
    });
  };

  nameChangedHandler= (event) => {
    this.setState({
      persons: [
        { name: 'Taji', age: 19 },
        { name: event.target.value, age: 19 },
        { name: 'Jen', age: 27 }
      ]
    });
  

  }


  render() {

    const style ={
      bakgroundColor: 'black',
      font: 'inherit',
      border: '1px solid red', 
      padding: '8px',
      cursor: 'pointer'

    };
    return (
      <div className="App">
        <h1>Test</h1>
        <p>Working</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('saniiiiiiii')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this,'sanisprints')} 
         changed={this.nameChangedHandler} >My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
