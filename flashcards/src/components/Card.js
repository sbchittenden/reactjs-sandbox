import React, { Component } from 'react';
import './Card.css';
import Button from './Button';
import robot from '../images/robot.svg';
import point from '../images/gesture-point.svg';



class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div className="icon-wrapper">
          <img className="icon" src={icons.robot} alt=""/>
        </div>

        <Button message="Click me right now!" />
      </div>
    );
  }
}

var icons = {
  robot,
  point,
}




export default Card;