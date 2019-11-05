class Card {
  constructor(image){
    this.rank = '',
    this.type = ''
    this.getCardInfo(image);
  }

  getCardInfo(image){
    if(!image.includes('blank')){
      this.rank = image.slice(3,4),
      this.type = image.slice(4,5)
    }
  }
}

module.exports = {Card}