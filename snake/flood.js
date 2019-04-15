class FloodFill {
  constructor() {
    this.oldVal = null
    this.spacesHit = []
  }

  flood(mapData, x, y, newVal) {
    let foods = {}
    this.oldVal = mapData[y][x]
    for (let i = 0; i < mapData.length; i++) {
      for (let j = 0; j < mapData[0].length; j++) {
        if (mapData[i][j] == FOOD) {
          mapData[i][j] = newVal
          if(!foods.hasOwnProperty(i)) foods[i] = {}
          foods[i][j] = true
        }
      }
    }
    this.floodFillRecursive(mapData, x, y, newVal)
    let area = 0
    for (let i = 0; i < mapData.length; i++) {
      for (let j = 0; j < mapData[0].length; j++) {
        if (mapData[i][j] == newVal) {
          mapData[i][j] = this.oldVal
          if(foods.hasOwnProperty(i) && foods[i].hasOwnProperty(j)) {
            mapData[i][j] = FOOD
          }
          area++
        }
      }
    }
    return area
  }

  floodFillRecursive(mapData, x, y, newVal) {
    let mapWidth = mapData[0].length,
        mapHeight = mapData.length

    if(mapData[y][x] !== this.oldVal){
        return true
    }

    this.spacesHit.push([x,y])
    mapData[y][x] = newVal

    if (x > 0){ // left
        this.floodFillRecursive(mapData, x-1, y, newVal)
    }
    if(y > 0){ // up
        this.floodFillRecursive(mapData, x, y-1, newVal)
    }
    if(x < mapWidth-1){ // right
        this.floodFillRecursive(mapData, x+1, y, newVal)
    }
    if(y < mapHeight-1){ // down
        this.floodFillRecursive(mapData, x, y+1, newVal)
    }
  }
}
