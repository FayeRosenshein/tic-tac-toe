var assert = require("chai").assert;
var Player = require("../src/player");

describe('Player', function () {
  it('Should have an ID', function () {
    var playerId = 'one'
    var newPlayer = new Player({id: playerId});

    assert.equal(newPlayer.id, playerId)
  })
  it('Should have a token', function () {
    var playerId = 'one'
    var playerToken = ''
    var newPlayer = new Player({id: playerId, token:playerToken});

    assert.equal(newPlayer.token, playerToken)
  })
  it('Should start with 0 wins', function () {
    var playerId = 'one'
    var playerToken = ''
    var newPlayer = new Player({id: playerId, token:playerToken});

    assert.equal(newPlayer.wins, 0)
  })
  it("Should be able to increase wins", function () {
    var playerId = 'one'
    var playerToken = ''
    var newPlayer = new Player({id: playerId, token: playerToken});

    newPlayer.increaseWins()
    
    assert.equal(newPlayer.wins, 1)
  })
})