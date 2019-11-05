const {testMatch} = require('./src/imageLibrary')
const {convertCoords} = require('./src/utils')

test('matches two photos and returns similarity', () => {
  const file1='./cards/m2/m2_ts.png',file2='./cards/m2/m2_tsf.png';
  expect(testMatch(file1,file2)).toBe(492);
});

test('converts coordinates to bounding box', () => {
  const coords = [
    [[204,196],[244,250]],
    [[248,196],[288,250]],
    [[292,196],[332,250]],
    [[336,196],[376,250]],
    [[380,196],[420,250]]
  ]
  const bounds = convertCoords(coords);
  console.log(bounds)
  expect(bounds.length).toBe(coords.length);
});