import Snake from './snake'
import Canvas from './canvas'

const TURN_TIME = 100

class Game {
  public food: Array<{x:number, y:number}>
  public turn: number
  public snake: Snake
  public canvas: Canvas
  constructor(canvas) {
    this.canvas = canvas
    this.turn = 0
    this.food = [
      {x: 4, y: 8},
      {x: 7, y: 1}
    ]
    this.snake = new Snake()
    this.canvas.renderBackground(this.buildGrid())
    setTimeout(() => {this.update()}, TURN_TIME)
  }

  update() {
    const snakeMove = this.snake.getMove(this.buildGameState())
    const nextTile = this.getTileInDirection(snakeMove)
    const beforeMoveGrid = this.buildGrid()
    if(this.checkDeath(beforeMoveGrid, nextTile)) {
      alert('Game Over')
      return false
    }

    this.snake.applyMove(snakeMove, this.buildGrid(), this.turn)

    for(let i in this.food) {
      if(this.food[i].x == this.snake.body[0].x && this.food[i].y == this.snake.body[0].y) {
        this.food.splice(parseInt(i),1)
        this.spawnFood()
      }
    }

    this.turn += 1

    this.canvas.render(this.buildGrid(), this.snake.color, this.snake.name, this.snake.health)
    if(!this.checkDeath(beforeMoveGrid, nextTile)) {
      setTimeout(() => {this.update()}, TURN_TIME)
    } else {
      alert('Game Over')
    }
  }

  getTileInDirection(direction) {
    let tile = null
    let snakeHead = this.snake.body[0]
    if(direction == 'up') {
      tile = {x:snakeHead.x, y: snakeHead.y - 1}
    }
    if(direction == 'down') {
      tile = {x:snakeHead.x, y: snakeHead.y + 1}
    }
    if(direction == 'left') {
      tile = {x:snakeHead.x - 1, y: snakeHead.y}
    }
    if(direction == 'right') {
      tile = {x:snakeHead.x + 1, y: snakeHead.y}
    }
    return tile
  }

  spawnFood() {
    let maxIt = 1000
    let board = this.buildGrid()
    let emptyTile = false
    while(!emptyTile || maxIt == 0) {
      let x = Math.floor(Math.random()*10)
      let y = Math.floor(Math.random()*10)
      if(board[y][x] == 0) {
        this.food.push({x:x,y:y})
        emptyTile = true
      }
      maxIt--
    }
  }

  checkDeath(board, nextTile) {
    return nextTile == null
        || nextTile.y < 0
        || nextTile.x < 0
        || nextTile.x > (board[0].length - 1)
        || nextTile.y > (board.length - 1)
        || board[nextTile.y][nextTile.x] == 1
        || board[nextTile.y][nextTile.x] == 2
        || board[nextTile.y][nextTile.x] == 3
        || this.snake.health == 0
  }

  buildGrid() {
    let board = [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0]
    ]

    for(let i in this.snake.body) {
      let snakePiece = this.snake.body[i]
      if(parseInt(i) == 0) {
        board[snakePiece.y][snakePiece.x] = 1
      } else if(parseInt(i) == this.snake.body.length - 1) {
        board[snakePiece.y][snakePiece.x] = 3
      } else {
        board[snakePiece.y][snakePiece.x] = 2
      }
    }

    for(let i in this.food) {
      board[this.food[i].y][this.food[i].x] = 4
    }

    return board
  }

  buildGameState() {
    let snakeData = this.snake.getSnakeStateData()
    return {
      game: {id: 'lnl-snake-game'},
      turn: this.turn,
      board: {
        height:10,
        width:10,
        snakes: [snakeData],
        food: this.food
      },
      you: snakeData
    }
  }
}

export default Game