import React from 'react'

import { DeckFactory } from '../models/DeckFactory'

import HandComponent from './HandComponent';

import './TableComponent.css';


const TableComponent = () => {

  const deckFactory : DeckFactory = new DeckFactory();
  const deck = deckFactory.makeEuchreDeck();

  const hand1 = deck.splice(0,5);
  const hand2 = deck.splice(0,5);
  const hand3 = deck.splice(0,5);
  const hand4 = deck.splice(0,5);

  return (
    <>
        <HandComponent key={1} cards={hand1} className="player-1-hand"/>
        <HandComponent key={2} cards={hand2} className="player-2-hand"/>
        <HandComponent key={3} cards={hand3} className="player-3-hand"/>
        <HandComponent key={4} cards={hand4} className="player-4-hand"/>
    </>
  )
}

export default TableComponent