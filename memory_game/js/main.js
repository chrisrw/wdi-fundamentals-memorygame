var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped" + " " + cardOne);
console.log("User flipped" + " " + cardTwo);

if (cardOne === cardTwo) {
    alert("You found a match!");
} else {
    alert("Keep trying!");
}
