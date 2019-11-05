const {Player} = require('./Player')

class GameState {
  constructor() {
    this.tournamentId = 0
    this.game = 0
    this.hand = 0
    this.spinCount = 0
    this.buyin = 0
    this.sb = 0
    this.pot = 0
    this.sidepots = []
    this.commonCards = []
    this.players = []
    this.db = 0
    this.me = 0
    this.callAmount = 0
    this.minimumRaiseAmount = 0
  }

  clear(){
    this.clearPlayers();
    this.clearCommonCards();
  }

  addPlayer(player){
    this.players.push(player);
  }

  clearPlayers(){
    this.players.length = 0;
    const player = new Player();
    this.players.push(player);
  }

  addCommonCard(card){
    this.cards.push(card);
  }

  clearCommonCards(){
    this.commonCards.length = 0;
  }

  getWinProbability(){
    return this.players[this.me].cards.length/7;
  }

  getNextMove(){
    // console.log(this.players[0].cards)
    if(this.commonCards.length)
      console.log(this.commonCards);
  }
}

module.exports = {GameState}