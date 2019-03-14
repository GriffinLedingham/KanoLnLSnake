const EMPTY_TILE = 0
const SNAKE_HEAD = 1
const SNAKE_BODY = 2
const SNAKE_TAIL = 3
const FOOD       = 4

function getMove(state) {
  let board = buildGrid(state)
  let mySnake = state.you
  let mySnakeHead = mySnake.body[0]
  let safeDirs = []

  if(mySnakeHead.x > 0) {
    let left = board[mySnakeHead.y][mySnakeHead.x - 1]
    if(left == EMPTY_TILE || left == FOOD) {
      safeDirs.push('left')
    }
  }
  if(mySnakeHead.x < state.board.width - 1) {
    let right = board[mySnakeHead.y][mySnakeHead.x + 1]
    if(right == EMPTY_TILE || right == FOOD) {
      safeDirs.push('right')
    }
  }
  if(mySnakeHead.y > 0) {
    let up = board[mySnakeHead.y - 1][mySnakeHead.x]
    if(up == EMPTY_TILE || up == FOOD) {
      safeDirs.push('up')
    }
  }
  if(mySnakeHead.y < state.board.height - 1) {
    let down = board[mySnakeHead.y + 1][mySnakeHead.x]
    if(down == EMPTY_TILE || down == FOOD) {
      safeDirs.push('down')
    }
  }

  return safeDirs[Math.floor(Math.random()*safeDirs.length)]
}

function getName() {
  return 'Griffin'
}

function getColor() {
  return 'purple'
}