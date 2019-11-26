
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
  

  var checkForMatch = function () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    } else {
      console.log("Sorry, try again.");
    }
  };
  
 // push cardId into cardsInPlay array then check if 2 cards in play and match
  var flipCard = function (cardId) {
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length === 2) {
      checkForMatch();
      cardsInPlay = [];
    }
  };
  
 
  flipCard(0);
  flipCard(2);




