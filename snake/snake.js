function getMove(state) {
  let dirs = ['left','right','up','down']
  return dirs[Math.floor(Math.random()*dirs.length)]
}

function getName() {
  return 'Griffin'
}

function getColor() {
  return 'green'
}