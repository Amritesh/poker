const fs = require('fs');
const {boundingBoxes} = require('./boundingBoxes')
const {screensShot, extract, searchImage} = require('./imageLibrary')
const {randomImage} = require('./utils')
const {wait} = require('../config')
const {GameState, Player, Card} = require('./components')

const init = () => {
  return new GameState();
}

const getCard = (box, gameState) => {
  const match = searchImage(box);
  if(match){
    const card = new Card(match);
    if(match.includes('m1_') || match.includes('m2_')){
      gameState.players[0].cards.push(card);
    } else if(card.rank !== '' && card.type !== ''){
      gameState.commonCards.push(card);
    }
  } else{
    const randomFile = './cards/'+box.name+'/new_'+randomImage();
    fs.copyFile(box.image, randomFile,() => {});
  }
}

const play = (gameState) => {
  gameState.clear();
  if(gameState.hand<1000){
    const screen = randomImage();
    screensShot(screen).then( img => 
      Promise.all(boundingBoxes.map(box=>extract(img, box))).then(boxes=>{
        boxes.forEach(box=>getCard(box,gameState));
        gameState.getNextMove();
        fs.unlinkSync(screen);
        gameState.hand++;
        setTimeout(play,wait,gameState);
      })
    )
  } else { console.log('Game Over') }
}

const start = () => {
  const gameState = init();
  play(gameState);
}

module.exports = {start}