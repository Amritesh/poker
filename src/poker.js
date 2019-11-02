const fs = require('fs');
const {boundingBoxes} = require('./boundingBoxes')
const {screensShot, extract, searchImage} = require('./imageLibrary')
const {randomImage} = require('./utils')
const {wait} = require('../config')
const {GameState, Player, Card} = require('./components')

const init = () => {
  return new GameState();
}

const play = (gameState) => {
  gameState.clear();
  if(gameState.hand<5){
    const screen = randomImage();
    screensShot(screen).then( img => 
      Promise.all(boundingBoxes.map(box=>extract(img, box))).then(boxes=>{
        boxes.forEach((box) => {
          const match = searchImage(box);
          if(match && !match.includes('new_')){
            const card = new Card(match);
            console.log(card);
          } else if(gameState.mode === 'training'){
            const randomFile = './cards/'+box.name+'/new_'+randomImage();
            fs.copyFile(box.image, randomFile,() => {});
          }
        })
        // console.log(gameState);
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