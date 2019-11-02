class Sidepot {
  constructor(){
    this.quote = 0,
    this.amount = 0
  }

  update(quote,amount){
    this.quote = quote,
    this.amount = amount
  }
}

module.exports = {Sidepot}