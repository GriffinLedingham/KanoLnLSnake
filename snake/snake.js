const SNAKE_HEAD = 1
const SNAKE_BODY = 2
const SNAKE_TAIL = 3
const FOOD       = 4

function getMove(state) {
  let board = buildGrid(state)
  let mySnake = state.you
  let mySnakeHead = mySnake.body[0]
  let safeDirs = []

  if(mySnakeHead.x > 0 && board[mySnakeHead.y][mySnakeHead.x - 1] == 0) {
    safeDirs.push('left')
  }
  if(mySnakeHead.x < state.board.width - 1 && board[mySnakeHead.y][mySnakeHead.x + 1] == 0) {
    safeDirs.push('right')
  }
  if(mySnakeHead.y > 0 && board[mySnakeHead.y - 1][mySnakeHead.x] == 0) {
    safeDirs.push('up')
  }
  if(mySnakeHead.y < state.board.height - 1 && board[mySnakeHead.y + 1][mySnakeHead.x] == 0) {
    safeDirs.push('down')
  }

  return safeDirs[Math.floor(Math.random()*safeDirs.length)]
}

function getName() {
  return 'Griffin'
}

function getColor() {
  return 'green'
}