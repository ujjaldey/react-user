import React from 'react';

import classes from './Card.module.css';

const Card = props => {
  // here we are merging both the styles from parent component and current component
  // props.className is coming from the className as defined in the tag: <Card className={classes.input}>
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;