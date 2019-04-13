const EMPTY_TILE = 0
const SNAKE_HEAD = 1
const SNAKE_BODY = 2
const SNAKE_TAIL = 3
const FOOD       = 4

function getMove(state) {
  let board = buildGrid(state)
  let foods = state.board.food
  let mySnake = state.you
  let head = mySnake.body[0]
  let dirScores = {
    left: 0,
    right: 0,
    up: 0,
    down: 0
  }

  // Iteration 1 - Safe directions
  if(head.x > 0) {
    let left = board[head.y][head.x - 1]
    if(left == EMPTY_TILE || left == FOOD) {
      dirScores.left += 10
    }
  }
  if(head.x < state.board.width - 1) {
    let right = board[head.y][head.x + 1]
    if(right == EMPTY_TILE || right == FOOD) {
      dirScores.right += 10
    }
  }
  if(head.y > 0) {
    let up = board[head.y - 1][head.x]
    if(up == EMPTY_TILE || up == FOOD) {
      dirScores.up += 10
    }
  }
  if(head.y < state.board.height - 1) {
    let down = board[head.y + 1][head.x]
    if(down == EMPTY_TILE || down == FOOD) {
      dirScores.down += 10
    }
  }

  // Iteration 2 - Move towards food
  for(let index in foods) {
    let food = foods[index]
    if(food.x < head.x) {
      dirScores.left += 2
    }
    if(food.x > head.x) {
      dirScores.right += 2
    }
    if(food.y < head.y) {
      dirScores.up += 2
    }
    if(food.y > head.y) {
      dirScores.down += 2
    }
  }

  // Default to up in case no best direction is found
  let bestDir = 'up'
  let bestDirScore = -Infinity

  // Pick best direction
  for(let dir in dirScores) {
    let dirScore = dirScores[dir]
    if(dirScore > bestDirScore) {
      bestDir = dir
      bestDirScore = dirScore
    }
  }

  return bestDir
}

function getName() {
  return 'Griffin'
}

function getColor() {
  return 'purple'
}