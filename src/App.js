import React, { useState, Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: "Max", age: 28},
//       { name: "Justin", age: 22},
//       { name: "Bob", age: 26},
//     ],
//     otherState: 'some other value',
//     showPersons: false
//   })

//   const [ usernameState, setUsernameState] = useState({
//     username: "USERNAME"
//   })

//   const switchNameHandler = (newName) => {
//     setPersonsState({
//       persons: [
//         { name: newName, age: 28},
//         { name: "Justin Lieu", age: 22},
//         { name: "Bob Smith", age: 26},
//       ]
//     })
//   }

//   const nameChangedHandler = event => {
//     setPersonsState({
//       persons: [
//         { name: "Max", age: 28},
//         { name: event.target.value, age: 22},
//         { name: "Bob Smith", age: 26},
//       ]
//     })
//   }

//   const usernameChangedHandler = event => {
//     setUsernameState({
//       username: event.target.value
//     })
//   }

//   const togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons: !doesShow });
//   }

//   const style = {
//     backgroundColor: "white",
//     font: "inherit",
//     border: "1px solid green",
//     padding: "8px",
//     cursor: "pointer"
//   };

//   return (
//     <div className="App">
//       <h1>App</h1>

//       <UserInput changed={usernameChangedHandler} username={usernameState.username} />

//       <button onClick={this.togglePersonsHandler} style={style}>Toggle Persons</button>
//       {this.state.showPersons ?
//         <div>
//         <Person name={personsState.persons[0].name} 
//         age={personsState.persons[0].age} 
//         click={switchNameHandler.bind(this, "hello")}/>

//         <Person name={personsState.persons[1].name} 
//         age={personsState.persons[1].age} 
//         click={switchNameHandler.bind(this, "world")}
//         changed = {nameChangedHandler}>props children</Person>

//         <Person 
//         name={personsState.persons[2].name} 
//         age={personsState.persons[2].age} />
//       </div> : null }
      

//       <UserOutput username={usernameState.username} />
//       <UserOutput username={usernameState.username} />
//     </div>
//   );
  
// }

class App extends Component {
  state = {
    persons: [
      { id: 'a12', name: "Max", age: 28},
      { id: 'asdf4', name: "Justin", age: 22},
      { id: '32gsf', name: "Bob", age: 26},
    ],
    otherState: 'some other value',
    showPersons: false,
    username: 'USERNAME'
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28},
        { name: event.target.value, age: 22},
        { name: "Bob Smith", age: 26},
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons});
  }

  usernameChangedHandler = event => {
    this.setState({
      username: event.target.value
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow });
  }

  render(){
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid green",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            key={person.id} />
          })}
        </div>
      )
    }
  
    return (
      <div className="App">
        <h1>App</h1>
  
        <UserInput changed={this.usernameChangedHandler} username={this.state.username} />
  
        <button onClick={this.togglePersonsHandler} style={style}>Toggle Persons</button>
        {persons}
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
