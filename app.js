const squares = Array.from(document.querySelectorAll('.grid div'))
// alert(squares)
let currentPlayer = 'PlayerX'
const displayCurrentPlayer = document.getElementById('currentPlayer')
let timer = 0
const container = document.getElementById('container')
const winningArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
var count = 0
squares.forEach(square => {
  square.addEventListener('click', myFunction)
})

function myFunction (e) {
  // alert(e.target); return the div which is clickd
  const index = squares.indexOf(e.target)
  displayCurrentPlayer.innerHTML = currentPlayer
  if (currentPlayer === 'PlayerX') {
    if (squares[index].className === '') {
      squares[index].classList.add('playerX')
      currentPlayer = 'PlayerO'
      displayCurrentPlayer.innerHTML = currentPlayer
    } else {
      alert('SPACE ALREADY OCCUPIED')
    }
  } else {
    if (squares[index].className === '') {
      squares[index].classList.add('playerO')
      currentPlayer = 'PlayerX'
      displayCurrentPlayer.innerHTML = currentPlayer
    } else {
      alert('SPACE ALREADY OCCUPIED')
    }
  }
}
timer = setInterval(check, 1000)
function check () {
  for (var i = 0; i < winningArray.length; i++) {
    const square1 = squares[winningArray[i][0]]
    const square2 = squares[winningArray[i][1]]
    const square3 = squares[winningArray[i][2]]

    if (square1.classList.contains('playerX') &&
      square2.classList.contains('playerX') &&
      square3.classList.contains('playerX')) {
      alert('PLAYER X WINS')
      clearInterval(timer)
      squares.forEach(square => {
        square.className = ''
      })
      timer = setInterval(check, 1000)
    }
    if (square1.classList.contains('playerO') &&
      square2.classList.contains('playerO') &&
      square3.classList.contains('playerO')) {
      alert('PLAYER O WINS')
      clearInterval(timer)
      squares.forEach(square => {
        square.className = ''
      })
      timer = setInterval(check, 1000)
    }
  }
}

function myToggle (x) {
  x.classList.toggle('change')
  setTimeout(unhide, 10)
}
function unhide () {
  document.getElementById('overlay').style.display = 'block'
}

function hide () {
  document.getElementById('overlay').style.display = 'none'
  document.getElementById('container').classList.remove('change')
}

function reset () {
  squares.forEach(square => {
    square.className = ''
  })
  timer = setInterval(check, 1000)
}
setInterval(drawCase, 1000)
function drawCase () {
  for (var i = 0; i < squares.length; i++) {
    if (squares[i].className !== '') {
      count++
    }
  }
  if (count === 9) {
    alert('DRAW')
    reset()
    count = 0
  } else { count = 0 }
}
