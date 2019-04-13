const EMPTY_TILE = 0
const SNAKE_HEAD = 1
const SNAKE_BODY = 2
const SNAKE_TAIL = 3
const FOOD       = 4

function getMove(state) {
  let board = buildGrid(state)
  let mySnake = state.you
  let head = mySnake.body[0]
  let nextDir = 'up'

  // Don't hit walls
  if(head.x == 0 && head.y != 0) {
    nextDir = 'up'
  } else if(head.y == board.length - 1) {
    nextDir = 'left'
  } else if(head.x == board[0].length - 1) {
    nextDir = 'down'
  } else if(head.y == 0) {
    nextDir = 'right'
  }

  return nextDir
}

function getName() {
  return 'Griffin'
}

function getColor() {
  return 'purple'
}