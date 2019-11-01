const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
const sharp = require('sharp');
const screenshot = require('screenshot-desktop');
const {config} = require('../config')

exports.imageLibrary = {
  screensShot: (name) => {
    return screenshot({ filename: name, format: 'png'})
    .then(img=>img)
  },
  testMatch:(image1, image2) => {
    const img1 = PNG.sync.read(fs.readFileSync(image1));
    const img2 = PNG.sync.read(fs.readFileSync(image2));
    const {width, height} = img1;
    const diff = new PNG({width, height});
    return img1.width === img2.width 
      && img1.height === img2.height 
      && pixelmatch(img1.data, img2.data, diff.data, width, height);
  },
  searchImage: box => {
    let cards = fs.readdirSync(config.cardsFolder+box.name);
    return cards.find((testCard)=>{
      let similarity = module.exports.imageLibrary.testMatch(box.image,config.cardsFolder+box.name+'/'+testCard);
      return similarity !== false && similarity<10;
    })
  },
  extract:(originalImage, box)=>{
    return sharp(originalImage).extract(box.bounds).toFile(box.image)
    .then(()=>box)
  },
}