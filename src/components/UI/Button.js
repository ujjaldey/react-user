import React from 'react';

import classes from './Button.module.css';

const Button = props => {
  // if props.type is undefined, use type as 'button'
  // onClick is also passed while calling the tag
  // use the content betwen the <Button></Button> tags as the content for <button></button>
  return (
    <button
      className={classes.button} type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;