const fs = require('fs');
const {state} = require('./state')
const {boundingBoxes} = require('./boundingBoxes')
const {screensShot, extract, searchImage} = require('./imageLibrary')
const {randomImage} = require('./utils')
const {wait} = require('../config')

const init = () => {
  return state;
}

const play = (gameState) => {
  if(gameState.hand<10){
    const screen = randomImage();
    screensShot(screen).then( img =>
      Promise.all(boundingBoxes.map(box=>extract(img, box))).then(boxes=>{
        boxes.forEach((box) => {
          const searched = searchImage(box);
          if(searched && !searched.includes('new_')){
            console.log(searched);
          } else if(gameState.mode === 'training'){
            const randomFile = './cards/'+box.name+'/new_'+randomImage();
            fs.copyFile(box.image, randomFile,() => {});
          }
        })
        console.log(gameState);
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