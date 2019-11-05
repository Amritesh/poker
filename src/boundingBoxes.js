const myCards = [
  { 
    name: 'm1',
    bounds: { width: 38, height: 57, left: 124, top: 251 },
    image: 'photos/m1.png'
  },
  { 
    name: 'm2',
    bounds: { width: 67, height: 56, left: 162, top: 253 },
    image: 'photos/m2.png'
  }
]

const otherPlayerCards = [
  { 
    name: 'o2',
    bounds: { width: 98, height: 44, left: 334, top: 161 },
    image: 'photos/o2.png'
  },
  { 
    name: 'o3',
    bounds: { width: 98, height: 44, left: 709, top: 161 },
    image: 'photos/o3.png'
  }
]

const commonCards = [
  { 
    name: 'c1',
    bounds: { width: 65, height: 90, left: 400, top: 350 },
    image: 'photos/c1.png'
  },
  { 
    name: 'c2',
    bounds: { width: 65, height: 90, left: 470, top: 350 },
    image: 'photos/c2.png'
  },
  { 
    name: 'c3',
    bounds: { width: 65, height: 90, left: 540, top: 350 },
    image: 'photos/c3.png'
  },
  { 
    name: 'c4',
    bounds: { width: 65, height: 90, left: 610, top: 350 },
    image: 'photos/c4.png'
  },
  { 
    name: 'c5',
    bounds: { width: 65, height: 90, left: 680, top: 350 },
    image: 'photos/c5.png'
  },
]

const debugBoxes = [
  { 
    name: 'table',
    bounds: { width: 1000, height: 720, left: 65, top: 30 },
    image: 'photos/table.png'
  },
  { 
    name: 'controls',
    bounds: { width: 389, height: 62, left: 665, top: 615 },
    image: 'photos/controls.png'
  },
  { 
    name: 'commonCards',
    bounds: { width: 350, height: 90, left: 400, top: 350 },
    image: 'photos/commonCards.png'
  },
]

const controls = []

const pot = []

const boundingBoxes = [...commonCards];

module.exports = {boundingBoxes}