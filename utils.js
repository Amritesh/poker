exports.utils = {
  convertCoords: (coords)=>{
    return coords.map(coord=>{
      coord[1][0] -= coord[0][0]
      coord[1][1] -= coord[0][1]
      coord[0][0] *= 100/61;
      coord[0][1] *= 100/61;
      coord[1][0] *= 100/61;
      coord[1][1] *= 100/61;
      return { width: Math.round(coord[1][0]), height: Math.round(coord[1][1]), left: Math.round(coord[0][0])+65, top: Math.round(coord[0][1]+30) }
    })
  },
  randomImage: ()=>{
    return Math.random().toString(36).substring(7)+'.png';
  }
}