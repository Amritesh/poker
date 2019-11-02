class Card {
  constructor(image){
    this.rank = '',
    this.type = ''
    this.getCardInfo(image);
  }

  getCardInfo(image){
    this.rank = '',
    this.type = ''
  }
}

module.exports = {Card}