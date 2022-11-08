class Game {
    constructor(gameInfo) {
        this.playerOne = gameInfo.playerOne
        this.playerTwo = gameInfo.playerTwo
        this.gameBoard = []
        for(var i = 0; i < 9; i++) {
            this.gameBoard.push('')
        }
        this.currentPlayer = this.playerOne
    }
}
module.exports = Game