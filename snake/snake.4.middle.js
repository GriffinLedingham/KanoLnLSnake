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
  }
  // Check right
  if(head.x < width - 1) {
    let rightTile = board[head.y][head.x + 1]
    if(rightTile == EMPTY_TILE || rightTile == FOOD) {
      dirScores.right += 10
    }
  }
  // Check up
  if(head.y > 0) {
    let upTile = board[head.y - 1][head.x]
    if(upTile == EMPTY_TILE || upTile == FOOD) {
      dirScores.up += 10
    }
  }
  // Check down
  if(head.y < height - 1) {
    let downTile = board[head.y + 1][head.x]
    if(downTile == EMPTY_TILE || downTile == FOOD) {
      dirScores.down += 10
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

function getName() {
  return 'Middle Snake'
}

function getColor() {
  return '#ffffff'
}