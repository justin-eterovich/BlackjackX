import React from "react"

import Deck from "./components/deck";
import Card from "./components/card";
import Table from "./components/table";

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

