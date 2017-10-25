import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button className="btn--standard">{props.message}</button>
  );
}

export default Button;