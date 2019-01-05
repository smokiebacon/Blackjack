/*----- constants -----*/


/*----- app's state (variables) -----*/
let shuffledDeck, money, bet, playerHand, dealerHand;



$dealerCards = $('.dealerCards');
$playerCards = $('.playerCards');

dealerHand = [];
playerHand = [];



$dealerCards.text(`Dealer cards: ${dealerHand}`);
$playerCards.text(`Player cards: ${playerHand}`);

console.log('Dealer hand:' + dealerHand);
console.log('Player hand:' + playerHand);



/*----- cached element references -----*/


/*----- event listeners -----*/

//click hit, stay, or nextRound, or entireNewGame
$('.hit').click(deal);

/*----- functions -----*/
init();
deal();

function init() {
  money = 1000;
  render();
}
function deal() {

  let randomIndex = Math.floor((Math.random() * deck.length));
  let randomCard = deck[randomIndex];
  let splicedCard = deck.splice(randomIndex, 1)[0];
  playerHand.push(splicedCard)
  console.log(playerHand);
  playerHand.forEach(function(card) {
    let cardDiv = `<div class="card ${card.face}"></div>`;
    $playerCards.append(cardDiv);
})

}

function computeSum (hand) {

}

function render() {
  // render playerHand
  // render dealterHand

}
  //shuffle Deck
  //reset Deck



//play()
//calcHandValue()
//discardPile

//render();
//****** IN RESPONSE TO USER INTERACTION (SUCH AS A CLICK)
 //--UPDATE ALL RELEVANT STATE
 // RENDER()


//have a deck of cards
 //player can bet a number, or not play
//deals to players first, with player getting 1 card
//dealer get dealt a card (facedown)
//players get dealt a card
//dealer gets a card (faceup)
//last player get a card



//play function
 //calculate sumOfCards
 //first player gets to choose to hit or stay
    //if hit, dealt a card. recalculate sumOfCards
     //while sumOfCards less than 22, able to keep hitting
     //if sumOfCards >= 22, bust. lose bet and put cards in discard pile
     //else if sumOfCards === 21, stay.
//dealer turn
 //calculate sumOfCards
  //while sumOfCards <= 17, needs to hit.
   //if sumOfCards is 17 or less than 22, must stay
   //if deal hits 21 with first 2 cards, all players w/o 21 loses


//winner


//compare values
//higher value <22 wins
