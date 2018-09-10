var cards = ["queen", "queen", "king", "king"];
var cardOne = cards[0];
var cardTwo = cards[2];
var cardsInPlay = [];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("user flipped " + cardOne);
console.log("user flipped " + cardTwo);


if (cardsInPlay.length === 2){
	alert("you found a match!");
} else {
	alert("sorry, try again.");
}