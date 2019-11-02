const {testMatch} = require('./src/imageLibrary')
const {convertCoords} = require('./src/utils')

test('matches two photos and returns similarity', () => {
  const file1='./cards/m2/m2_ts.png',file2='./cards/m2/m2_tsf.png';
  expect(testMatch(file1,file2)).toBe(492);
});

test('converts coordinates to bounding box', () => {
  const coords = [
    [[36,135],[59,170]],
    [[59,136],[100,170]],
    [[164,80],[223,107]],
    [[393,80],[453,107]],
    [[366,357],[603,395]],
    [[162,163],[196,208]],
    [[197,165],[230,207]],
  ]
  const bounds = convertCoords(coords);
  expect(bounds.length).toBe(coords.length);
});