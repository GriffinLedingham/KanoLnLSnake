import Game   from './game'
import Canvas from './canvas'
import * as $ from 'jquery'

window['start'] = () => {
  let params = new URLSearchParams(window.location.search)
  let snakePath = 'snake/snake.js'
  if(params.get('snake') != null) {
    snakePath = `snake/${params.get('snake')}.js`
  }
  $.ajax({
    url: snakePath,
    dataType: 'JSONP',
    type: 'GET',
    async: false,
    crossDomain: true,
    success: () => {},
    complete: function (data) {
      const canvas = new Canvas()
      const game = new Game(canvas)
    }
  });
}