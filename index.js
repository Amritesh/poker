const fs = require('fs');
const {state} = require('./state')
const {boundingBoxes} = require('./boundingBoxes')
const {imageLibrary} = require('./imageLibrary')
const {utils} = require('./utils')
const {config} = require('./config')

const init = () => {
  return state.gameState;
}


const play = (gameState) => {
  if(gameState.hand<10){
    const screen = utils.randomImage();
    imageLibrary.screensShot(screen).then( img =>
      Promise.all(boundingBoxes.map(box=>imageLibrary.extract(img, box))).then(boxes=>{
        boxes.forEach((box) => {
          const searched = imageLibrary.searchImage(box);
          if(searched && !searched.includes('new_')){
            console.log(searched);
          } else if(gameState.mode === 'training'){
            const randomFile = './cards/'+box.name+'/new_'+utils.randomImage();
            fs.copyFile(box.image, randomFile,() => {});
          }
        })
        console.log(gameState);
        fs.unlinkSync(screen);
        gameState.hand++;
        setTimeout(play,config.wait,gameState);
      })
    )
  } else { console.log('Game Over') }
}
const main = () => {
  const gameState = init();
  play(gameState);
}
main();