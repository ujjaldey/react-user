import React from 'react';

const Wrapper = (props) => {
  // children prop holds all the content you are passing between the opening and closing tag of your custom component.
  // so here you are returning only those children elements between the opening and closing tag.
  return props.children;
};

export default Wrapper;