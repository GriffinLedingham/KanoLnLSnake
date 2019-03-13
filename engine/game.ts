import Snake from './snake'
import Canvas from './canvas'

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
    setTimeout(() => {this.update()}, 1000)
  }

  update() {
    const snakeMove = this.snake.getMove(this.buildGameState())
    this.snake.applyMove(snakeMove, this.buildGrid(), this.turn)

    for(let i in this.food) {
      if(this.food[i].x == this.snake.body[0].x && this.food[i].y == this.snake.body[0].y) {
        this.food.splice(parseInt(i),1)
      }
    }

    this.turn += 1
    this.canvas.render(this.buildGrid())
    setTimeout(() => {this.update()}, 1000)
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