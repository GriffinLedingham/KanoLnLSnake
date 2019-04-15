const EMPTY_TILE = 0
const SNAKE_HEAD = 1
const SNAKE_BODY = 2
const SNAKE_TAIL = 3
const FOOD       = 4

// Get snake's next move
function getMove(state) {
  let dirs = ['left','right','up','down']
  return dirs[Math.floor(Math.random()*dirs.length)]
}

// Snake name
function getName() {
  return 'Random Snake'
}

// Color string or Hex code of snake
function getColor() {
  return '#ffbdbd'
}