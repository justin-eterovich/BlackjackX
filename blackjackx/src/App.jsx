import React from "react"
import deck from "./components/deck";

export default App = React.createClass({
  getinitialstate:function(){return deck},

  shuffleDeck : function(deck){
    var shuffledDeck = {}
    let currentIndex = deck.length
    for (var i = 0; i < currentIndex; i++) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      shuffledDeck.push(deck[randomIndex]);
    }
    return shuffledDeck;
  },
})