/*----- constants -----*/
/*----- app's state (variables) -----*/
let deck, bankroll, bet, playerHand, dealerHand, winner;

/*----- cached element references -----*/
$dealerCards = $('.dealerCards');
$playerCards = $('.playerCards');
$bet = $('#bet');
$bankroll = $('#bankroll');
$dealBetBtns = $('#deal-bet-btns');
$hitStayBtns = $('#hit-stay-btns');
$dealBtn = $('.deal');

$dealerCards.text('Dealer cards: ');
$playerCards.text('Player cards: ');
/*----- event listeners -----*/
//click hit, stay, doubledown, split
$('#deal-bet-btns aside').on('click', 'button', handleBetClick);
$dealBtn.click(deal);
/*----- functions -----*/
init();

function init() {
  dealerHand = [];
  playerHand = [];
  bet = 0;
  bankroll = 1000;
  //
  render();
}

function handleBetClick(e) {
  let betAmount = parseInt(e.target.textContent.substr(1));
  if (betAmount <= bankroll) {
    bankroll -= betAmount;
    bet += betAmount;
    render();
  }
}

function deal() {
  deck = masterDeck.slice();
  winner = null;
  dealerHand = [];
  playerHand = [];
  playerHand.push(getCardFromDeck());
  dealerHand.push(getCardFromDeck());
  playerHand.push(getCardFromDeck());
  dealerHand.push(getCardFromDeck());
  computeSum();
  // check for blackjack
 render();
}

function getCardFromDeck() {
  let randomIndex = Math.floor((Math.random() * deck.length));
  let splicedCard = deck.splice(randomIndex, 1)[0];
  return splicedCard;
}

function computeSum() {
  let dealerSum = dealerHand[0].value + dealerHand[1].value;
  let playerSum = playerHand[0].value + playerHand[1].value;
  console.log('Dealer Sum: ' + dealerSum);
  console.log('Player Sum: ' + playerSum);
//check for 21 //win condition
}


// if (dealerSum === 17) {
//   //must stay
//  }
//   else if (dealerSum >= 22) {
//   console.log('Dealer busted');
//  }
// if (playerSum >= 22) {
//   console.log('You bust');
// }
function render() {
  // render playerHand
  playerHand.forEach(function(card) {
    let cardDiv = `<div class="card ${card.face}"></div>`;
    $playerCards.append(cardDiv);
  });
  // render dealterHand
  dealerHand.forEach(function(card, idx) {
    let cardDiv;
    if (!winner && dealerHand.length && idx===0) {
      cardDiv = `<div class="card back"></div>`;
    } else {
      cardDiv = `<div class="card ${card.face}"></div>`;
    }
    $dealerCards.append(cardDiv);
  });
  $bet.text(bet);
  $bankroll.text(bankroll);
  $dealBtn.prop("disabled", !bet);
  (!winner || !playerHand.length) ? $dealBetBtns.show() : $dealBetBtns.hide();
  (!winner && playerHand.length) ? $hitStayBtns.show() : $hitStayBtns.hide();
  (!winner && playerHand.length) ? $dealBetBtns.hide() : $dealBetBtns.show();

}
  //shuffle Deck
  //reset Deck
//play()
//calcHandValue()
//discardPile
//render();

//have a deck of cards
 //player can bet amount of money, or not play
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
