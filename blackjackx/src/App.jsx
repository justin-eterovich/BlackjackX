import React from "react"

import {Deck, Card, Table, Hand, Outcome, Interface} from "./components";

export default App = React.createClass({
  getinitialstate:function(){return Deck},

  shuffleDeck : function(deck){
    var shuffledDeck = {}
    let currentIndex = deck.length
    for (var i = 0; i < currentIndex; i++) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      shuffledDeck.push(deck[randomIndex]);
    }
    return shuffledDeck;
  },

  render: function() {
    return (
        <Table deck={this.shuffleDeck(this.state.deck)}/>
    );
  }

  
});

