function buildGrid(state) {
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