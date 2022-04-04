import React, { useState, useRef, Fragment } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
// import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    console.log(nameInputRef, ageInputRef);
    // returns the value of the ref element
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (> 0)'
      });
      return;
    }

    // this will call onAddUser method in the component from App.js, which will call addUserHandler() in App.js
    // that will add the user in the state, and the updated state will be passed to UserList component via users property
    props.onAddUser(enteredName, enteredUserAge);
    // setEnteredUsername('');
    // setEnteredAge('');
    // we should not manipulate the dom using Refs. but it's okay if we are just resetting the value of an input element
    // otherwise go back to the state based value.
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    // to avoid div-soup, we are using <Wrapper> instead of <div> - which acts as single root element which return all the children
    // We can use <Fragment> or <> instead of Wrapper
    // <Wrapper>
    <Fragment>
      {/* show ErrorModal only if there are any errors */}
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' ref={nameInputRef} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' ref={ageInputRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Fragment>
    // </Wrapper>
  );
};

export default AddUser;