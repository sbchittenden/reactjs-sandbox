import React, { Component } from 'react';
import Card from './Card';
import './Deck.css';

class Deck extends Component {
  render() {
    return (
      <div className="Deck">
        <Card />
      </div>
    );
  }
}

export default Deck;