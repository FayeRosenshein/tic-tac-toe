// A Game should include:
// Two Player instances x
// A way to keep track of the data for the game board x
// A way to keep track of which player’s turn it currently is x
// A way to check the Game’s board data for win conditions 
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game

var assert = require("chai").assert;
var Game = require("../src/game");
var Player = require("../src/player");

describe("Game", function () {
    it('Should have 2 players', function () {
        var newPlayer1 = new Player({ id: 'one', token: '1' });
        var newPlayer2 = new Player({ id: 'two', token: '2' });

        var newGame = new Game({playerOne: newPlayer1, playerTwo: newPlayer2})

        assert.equal(newGame.playerOne, newPlayer1)
        assert.equal(newGame.playerTwo, newPlayer2)
    })
    it('Should have a game board', function () {
        var newPlayer1 = new Player({ id: 'one', token: '1' });
        var newPlayer2 = new Player({ id: 'two', token: '2' });

        var newGame = new Game({playerOne: newPlayer1, playerTwo: newPlayer2})

        assert.equal(newGame.gameBoard.length, 9)
    })
    it('Should know who the current player is', function () {
        var newPlayer1 = new Player({ id: 'one', token: '1' });
        var newPlayer2 = new Player({ id: 'two', token: '2' });

        var newGame = new Game({playerOne: newPlayer1, playerTwo: newPlayer2})

        assert.equal(newGame.currentPlayer, newGame.playerOne)
    })
    it('Should be able to tell win conditions', function () {
        var newPlayer1 = new Player({ id: 'one', token: '1' });
        var newPlayer2 = new Player({ id: 'two', token: '2' });

        var newGame = new Game({playerOne: newPlayer1, playerTwo: newPlayer2})

        
    })
})