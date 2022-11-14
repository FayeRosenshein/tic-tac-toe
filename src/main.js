//YAGNI You Ain't Gonna Need It
// var Game = require("../src/game")
// var Player = require("../src/player")



//jquery
var playGameButton = document.getElementById('playGameButton')
var topBanner = document.querySelector('.tic-tac-toe-title')
var currentPlayerBanner = document.getElementById('TTTCurrentPlayer')
var currentWinner = document.querySelector('.winner')
var player1Token = document.getElementById('player1Token')
var player1TokenClass = document.querySelector('.play-1-token')
var player1WinCount = document.getElementById('player1WinCount')
var player2Token = document.getElementById('player2Token')
var player2TokenClass = document.querySelector('.play-2-token')
var player2WinCount = document.getElementById('player2WinCount')
var box0 = document.getElementById('gridItem0')
var box1 = document.getElementById('gridItem1')
var box2 = document.getElementById('gridItem2')
var box3 = document.getElementById('gridItem3')
var box4 = document.getElementById('gridItem4')
var box5 = document.getElementById('gridItem5')
var box6 = document.getElementById('gridItem6')
var box7 = document.getElementById('gridItem7')
var box8 = document.getElementById('gridItem8')
var gamePage = document.querySelector('.banner-wrapper')
var playAgainPage = document.querySelector('.play-again')
var welcomePage = document.querySelector('.welcome-page')
var newGameButton = document.getElementById('newGameButton')
var keepPlayingButton = document.getElementById('keepPlayingButton')

//GLOBAL VARIABLES
var boxes = [box0, box1, box2, box3, box4, box5, box6, box7, box8]
var player1Id = '1'
var playerToken1 = player1Token.src
var player1 = new Player({ id: player1Id, token: playerToken1 })
var player2Id = '2'
var playerToken2 = player2Token.src
var player2 = new Player({ id: player2Id, token: playerToken2 })
var game = new Game({ playerOne: player1, playerTwo: player2 })
var currentPlayer = game.currentPlayer

//eventListeners
box0.addEventListener('click', playTurn)
box1.addEventListener('click', playTurn)
box2.addEventListener('click', playTurn)
box3.addEventListener('click', playTurn)
box4.addEventListener('click', playTurn)
box5.addEventListener('click', playTurn)
box6.addEventListener('click', playTurn)
box7.addEventListener('click', playTurn)
box8.addEventListener('click', playTurn)
keepPlayingButton.addEventListener('click', playAgain)
newGameButton.addEventListener('click', doNotPlayAgain)
playGameButton.addEventListener('click', gameStarts)



//functions and event delegation

function newGame(show) {
    if (show === true) {
        playAgainPage.classList.remove('hidden')
        gamePage.classList.add('hidden')
        welcomePage.classList.add('hidden')
    } else {
        playAgainPage.classList.add('hidden')
        gamePage.classList.remove('hidden')
        welcomePage.classList.add('hidden')
        topBanner.classList.remove('hidden')
    }
}

function playAgain(event) {
    newGame(true)
    if (event.target === keepPlayingButton) {
        newGame(false)
        gameStarts()
    }
}
function doNotPlayAgain(event) {
    location.reload(event)
}

function playTurn(event) {
    if (game.winner !== '' || game.draw === true) {
        return
    }
    var currentBox = event.target
    currentBox.src = game.currentPlayer.token
    for (var i = 0; i < boxes.length; i++) {
        if (event.target === boxes[i]) {
            game.playTurn(i)
            gameEnds()
        }
    }
    displayCurrentPlayer()
}

function blankGrid() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].src = 'assets/No_image.svg.png'
    }
}

function gameEnds() {
    if (game.winner !== '' || game.draw === true) {
        displayWins()
        displayCurrentWinner(true)
        setTimeout(playAgain, 3000)

    }
}

function gameStarts() {
    blankGrid()
    game.resetGameBoard()
    displayCurrentWinner(false)
    displayCurrentPlayer()
    newGame(false)
}

function displayCurrentPlayer() {
    currentPlayerBanner.innerText = `PLAYER ${game.currentPlayer.id}`
}

function displayWins() {
    player1WinCount.innerText = player1.wins
    player2WinCount.innerText = player2.wins
}

function displayCurrentWinner(show) {
    if (show === true) {
        currentWinner.classList.remove('hidden')
        currentPlayerBanner.classList.add('hidden')
    } else {
        currentWinner.classList.add('hidden')
        currentPlayerBanner.classList.remove('hidden')
    }
    if (game.winner !== '') {
        currentWinner.innerText = `PLAYER ${game.currentPlayer.id} WINS`
    } else {
        currentWinner.innerText = `Sorry, no one wins`
    }
}



