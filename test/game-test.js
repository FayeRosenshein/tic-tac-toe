// player should be able to play a turn x
// player1 can win, draw, lose
//player2 can win, draw, lose
//player can only pick elements 0-8 
//player can't pick an element that has already been picked x
//player can't pick an element once game is over
//



var assert = require("chai").assert
var Game = require("../src/game")
var Player = require("../src/player")

describe("Game", function () {
    it('Should have 2 players', function () {
        var newPlayer1 = new Player({ id: 'one', token: '1' });
        var newPlayer2 = new Player({ id: 'two', token: '2' });

        var newGame = new Game({ playerOne: newPlayer1, playerTwo: newPlayer2 })

        assert.equal(newGame.playerOne, newPlayer1)
        assert.equal(newGame.playerTwo, newPlayer2)
    })
    it('Should have a game board', function () {
        var newPlayer1 = new Player({ id: 'one', token: '1' });
        var newPlayer2 = new Player({ id: 'two', token: '2' });

        var newGame = new Game({ playerOne: newPlayer1, playerTwo: newPlayer2 })

        assert.equal(newGame.gameBoard.length, 9)
    })
    it('Should know who the current player is', function () {
        var newPlayer1 = new Player({ id: 'one', token: '1' });
        var newPlayer2 = new Player({ id: 'two', token: '2' });

        var newGame = new Game({ playerOne: newPlayer1, playerTwo: newPlayer2 })

        assert.equal(newGame.currentPlayer, newGame.playerOne)
    })
    it('Should be able to tell win conditions', function () {
        var newPlayer1 = new Player({ id: 'one', token: '1' });
        var newPlayer2 = new Player({ id: 'two', token: '2' });
        var winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        var newGame = new Game({ playerOne: newPlayer1, playerTwo: newPlayer2 })

        for (var i = 0; i < winConditions.length; i++) {
            var triplet = winConditions[i]
            for (var j = 0; j < triplet.length; j++) {
                newGame.gameBoard[triplet[j]] = newPlayer1.id
            }
            newGame.checkEndCondition()
            assert.equal(newGame.hasWon, true)
        }
    })
    it('Should know when the game is a draw', function () {
        var newPlayer1 = new Player({ id: 'one', token: '1' });
        var newPlayer2 = new Player({ id: 'two', token: '2' });
        var newGame = new Game({ playerOne: newPlayer1, playerTwo: newPlayer2 })

        for (var i = 0; i < newGame.gameBoard.length; i++) {
            newGame.gameBoard[i] = i
        }

        newGame.checkEndCondition()

        assert.equal(newGame.hasWon, false)
        assert.equal(newGame.draw, true)
    })
    it('Should reset the game\'s board', function () {
        var newPlayer1 = new Player({ id: 'one', token: '1' });
        var newPlayer2 = new Player({ id: 'two', token: '2' });
        var newGame = new Game({ playerOne: newPlayer1, playerTwo: newPlayer2 })
        
        for (var i = 0; i < newGame.gameBoard.length; i++) {
            newGame.gameBoard[i] = i
        }
        
        newGame.checkEndCondition()
        newGame.resetGameBoard()

        assert.equal(newGame.gameBoard.length, 9)
        for (var i = 0; i < 9; i++) {
            assert.equal(newGame.gameBoard[i], '')
        }
        assert.equal(newGame.hasWon, false)
        assert.equal(newGame.draw, false)

        newGame.gameBoard[0] = newPlayer1.id
        newGame.gameBoard[1] = newPlayer1.id
        newGame.gameBoard[2] = newPlayer1.id
        
        newGame.checkEndCondition()
        assert.equal(newGame.hasWon, true)
        newGame.resetGameBoard()

        assert.equal(newGame.gameBoard.length, 9)
        for (var i = 0; i < 9; i++) {
            assert.equal(newGame.gameBoard[i], '')
        }
        assert.equal(newGame.hasWon, false)
        assert.equal(newGame.draw, false)
    })
    it('Should be able to change player by taking a turn', function () {
        var newPlayer1 = new Player({ id: 'one', token: '1' });
        var newPlayer2 = new Player({ id: 'two', token: '2' });
        var newGame = new Game({ playerOne: newPlayer1, playerTwo: newPlayer2 })
        
        
        assert.equal(newGame.currentPlayer, newPlayer1)
        newGame.changePlayer()
        assert.equal(newGame.currentPlayer, newPlayer2)
        newGame.changePlayer()
        assert.equal(newGame.currentPlayer, newPlayer1)
    })
    it('Should be able to fill grid space that is played', function () {
        var newPlayer1 = new Player({ id: 'one', token: '1' });
        var newPlayer2 = new Player({ id: 'two', token: '2' });
        var newGame = new Game({ playerOne: newPlayer1, playerTwo: newPlayer2 })

        var gridSpace = 0

        assert.equal(newGame.gameBoard[gridSpace], '')
        newGame.playTurn(gridSpace)
        assert.equal(newGame.gameBoard[gridSpace], '1')

        gridSpace = 1
        assert.equal(newGame.gameBoard[gridSpace], '')
        newGame.playTurn(gridSpace)
        assert.equal(newGame.gameBoard[gridSpace], '2')
    })
    it('Should not be able to play in a space that has already been played in', function () {
        var newPlayer1 = new Player({ id: 'one', token: '1' });
        var newPlayer2 = new Player({ id: 'two', token: '2' });
        var newGame = new Game({ playerOne: newPlayer1, playerTwo: newPlayer2 })

        gridSpace = 0
        assert.equal(newGame.gameBoard[gridSpace], '')
        newGame.playTurn(gridSpace)
        assert.equal(newGame.gameBoard[gridSpace], '1')
        newGame.playTurn(gridSpace)
        assert.equal(newGame.gameBoard[gridSpace], '1')
        assert.equal(newGame.currentPlayer, newPlayer2)
        gridSpace = 1
        newGame.playTurn(gridSpace)
        assert.equal(newGame.gameBoard[gridSpace], '2')
        newGame.playTurn(gridSpace)
        assert.equal(newGame.gameBoard[gridSpace], '2')
        assert.equal(newGame.currentPlayer, newPlayer1)
    })
    it('Should not be able to pick a number outside the grid', function () {
        var newPlayer1 = new Player({ id: 'one', token: '1' });
        var newPlayer2 = new Player({ id: 'two', token: '2' });
        var newGame = new Game({ playerOne: newPlayer1, playerTwo: newPlayer2 })

        this.gameBoard.length = 
    })
})