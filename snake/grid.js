function buildGrid(state) {
  let board = []
  let height  = state.board.height
  let width   = state.board.width

  // Init empty board
  for(let i=0;i<height;i++) {
    board.push([])
    for(let j=0;j<width;j++) {
      board[i].push(0)
    }
  }

  state.board.snakes.forEach((snake) => {
    snake.body.forEach((snakePiece, i) => {
      if(parseInt(i) == 0) {
        board[snakePiece.y][snakePiece.x] = SNAKE_HEAD
      } else if(parseInt(i) == snake.body.length - 1) {
        board[snakePiece.y][snakePiece.x] = SNAKE_TAIL
      } else {
        board[snakePiece.y][snakePiece.x] = SNAKE_BODY
      }
    })
  })

  state.board.food.forEach((food) => {
    board[food.y][food.x] = FOOD
  })

  return board
}