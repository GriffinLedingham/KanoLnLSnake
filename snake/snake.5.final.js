const EMPTY_TILE = 0
const SNAKE_HEAD = 1
const SNAKE_BODY = 2
const SNAKE_TAIL = 3
const FOOD       = 4

// Get snake's next move
function getMove(state) {
  let board   = buildGrid(state)
  let height  = state.board.height
  let width   = state.board.width

  let mySnake = state.you
  let head    = mySnake.body[0]

  // Safety scores
  let dirScores = {
    left:   0,
    right:  0,
    up:     0,
    down:   0
  }

  // Check left
  if(head.x > 0) {
    let leftTile = board[head.y][head.x - 1]
    if(leftTile == EMPTY_TILE || leftTile == FOOD) {
      dirScores.left += 10
    }
    if(leftTile == FOOD) {
      dirScores.left += 5
    }
  }
  // Check right
  if(head.x < width - 1) {
    let rightTile = board[head.y][head.x + 1]
    if(rightTile == EMPTY_TILE || rightTile == FOOD) {
      dirScores.right += 10
    }
    if(rightTile == FOOD) {
      dirScores.right += 5
    }
  }
  // Check up
  if(head.y > 0) {
    let upTile = board[head.y - 1][head.x]
    if(upTile == EMPTY_TILE || upTile == FOOD) {
      dirScores.up += 10
    }
    if(upTile == FOOD) {
      dirScores.up += 5
    }
  }
  // Check down
  if(head.y < height - 1) {
    let downTile = board[head.y + 1][head.x]
    if(downTile == EMPTY_TILE || downTile == FOOD) {
      dirScores.down += 10
    }
    if(downTile == FOOD) {
      dirScores.down += 5
    }
  }

  // All food on the board
  let foods = state.board.food

  // Iterate all foods
  for(let food of foods) {
    // Is food to the left? If not, to the right?
    if(food.x < head.x) {
      dirScores.left += 2
    } else if(food.x > head.x) {
      dirScores.right += 2
    }
    // Is food above us? If not, below us?
    if(food.y < head.y) {
      dirScores.up += 2
    } else if(food.y > head.y) {
      dirScores.down += 2
    }
  }

  // Default to up in case no best direction is found
  let bestDir = 'up'
  let bestScore = -Infinity

  // Pick best direction
  for(let dir in dirScores) {
    // Score of this direction
    let dirScore = dirScores[dir]
    // Is the score better than previous best?
    if(dirScore > bestScore) {
      // If so, make this our new best direction
      bestDir = dir
      bestScore = dirScore
    }
  }

  return bestDir
}

// Snake name
function getName() {
  return 'Final Snake'
}

// Color string or Hex code of snake
function getColor() {
  return '#f1cbff'
}