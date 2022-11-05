// Player methods must include, but are not limited to:
// constructor - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)
// increaseWins - increases the count of the player’s wins


var assert = require("chai").assert;
var Player = require("../src/player");

describe("Player", function () {
  it('should be a class', function () {
  var newPlayer = new Player();

  assert.instanceOf(newPlayer, Player);
  })
})