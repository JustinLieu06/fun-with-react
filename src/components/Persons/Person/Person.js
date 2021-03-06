import React from 'react';
// import "./Person.css";

//create a react element inside a component?
// const StyledDiv = styled.div`
// width: 60%;
// margin: 16px auto;
// border: 1px solid #eee;
// box-shadow: 0px 2px 3px #ccc;
// padding: 16px;
// text-align: center;

// @media (min-width: 500px) {
//   width: 450px;
// }
// `;

const person = ( props ) => {
  return (
    // <div className="Person" style={style}>
    <div className={classes.Person}>
      <p onClick={props.click}>My name is {props.name} and my age is {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
}

export default person;