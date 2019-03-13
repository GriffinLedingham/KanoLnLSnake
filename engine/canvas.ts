import * as $ from 'jquery'

class Canvas {
  render(board) {
    $('#canvas').html('')
    for(let i in board) {
      for(let j in board[i]) {
        let classes = 'tile'
        switch(board[i][j]) {
          case 1:
            classes += ' head'
            break
          case 2:
            classes += ' body'
            break
          case 3:
            classes += ' tail'
            break
          case 4:
            classes += ' food'
            break
        }
        $('#canvas').append(`<div class="${classes}"></div>`)
      }
      $('#canvas').append(`<br>`)
    }
  }
}

export default Canvas