var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];
var cardOne;
var cardTwo;


cardOne = cards[0];//assign card one to cards at variable
cardTwo = cards[2];//assign card two to cards at varible

cardsInPlay.push(cardOne);//Push value into cards in play
cardsInPlay.push(cardTwo);//Push value into cards in play

if(cardsInPlay.length === 2)
{
	if(cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match.");
	}
	else
	{
		alert("Sorry try again.")
	}
}

console.log("user flipped " + cardsInPlay[0] + ".");
console.log("user flipped " + cardsInPlay[1] + ".");

