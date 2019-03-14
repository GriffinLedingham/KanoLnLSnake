import Game from './game'
import Canvas from './canvas'

window['start'] = () => {
  const canvas = new Canvas()
  const game = new Game(canvas)
}