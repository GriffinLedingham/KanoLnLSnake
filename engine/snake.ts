class Snake {
  public body:    Array<{x: number, y: number}>
  public health:  number
  public name:    string
  public color:   string
  public id:      string
  public alive:   boolean

  constructor() {
    this.id = 'lnl-snake'
    this.name = window['getName']()
    this.color = window['getColor']()
    this.health = 100
    this.body = [{x:4,y:5},{x:4,y:6},{x:4,y:7}]
    this.alive = true
  }

  applyMove(direction, board, turn) {
    switch(direction) {
      case 'up':
        this.body.unshift({x: this.body[0].x, y: this.body[0].y - 1})
        break
      case 'down':
        this.body.unshift({x: this.body[0].x, y: this.body[0].y + 1})
        break
      case 'left':
        this.body.unshift({x: this.body[0].x - 1, y: this.body[0].y})
        break
      case 'right':
        this.body.unshift({x: this.body[0].x + 1, y: this.body[0].y})
        break
    }

    if(turn == 0 || this.health < 100) {
      this.body.pop()
    }

    try {
      if(board[this.body[0].y][this.body[0].x] == 4) {
        this.health = 100
      } else {
        this.health -= 1
      }
    } catch(e) {
      alert('Game Over')
    }
  }

  getMove(state) {
    return window['getMove'](state)
  }

  getSnakeStateData() {
    return {
      id: this.id,
      name: this.name,
      health: this.health,
      body: this.body
    }
  }
}

export default Snake