import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (> 0)'
      });
      return;
    }

    // this will call onAddUser method in the component from App.js, which will call addUserHandler() in App.js
    // that will add the user in the state, and the updated state will be passed to UserList component via users property
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    // to avoid div-soup, we are using <Wrapper> instead of <div> - which acts as single root element which return all the children
    <Wrapper>
      {/* show ErrorModal only if there are any errors */}
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;