import * as $ from 'jquery'

class Canvas {
  renderBackground(board) {
    $('#board_bg').html('')
    for(let i in board) {
      for(let j in board[i]) {
        let classes = 'tile bg'
        $('#board_bg').append(`<div class="${classes}"></div>`)
      }
      $('#board_bg').append(`<br>`)
    }
  }

  render(board, snakeColor, snakeName, snakeHealth) {
    $('#snake_name').text(snakeName)
    $('#snake_health_inner').css('width', `${snakeHealth}%`)
    $('#canvas').html('')
    for(let i in board) {
      for(let j in board[i]) {
        let classes = 'tile'
        let isSnake = false
        switch(board[i][j]) {
          case 0:
            classes += ' board'
            break
          case 1:
            isSnake = true
            classes += ' head'
            break
          case 2:
            isSnake = true
            classes += ' body'
            break
          case 3:
            isSnake = true
            classes += ' tail'
            break
          case 4:
            classes += ' food'
            break
        }
        if(isSnake) {
          $('#canvas').append(`<div class="${classes}" style="background:${snakeColor};"></div>`)
        } else {
          $('#canvas').append(`<div class="${classes}"></div>`)
        }
      }
      $('#canvas').append(`<br>`)
    }
  }
}

export default Canvas