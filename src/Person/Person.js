import React from 'react';
import "./Person.css";
import Radium from 'radium';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>My name is {props.name} and my age is {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
}

export default Radium(person);