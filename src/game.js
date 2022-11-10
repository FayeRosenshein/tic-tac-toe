class Game {
    constructor(gameInfo) {
        this.playerOne = gameInfo.playerOne
        this.playerTwo = gameInfo.playerTwo
        this.gameBoard = []
        for (var i = 0; i < 9; i++) {
            this.gameBoard.push('')
        }
        this.currentPlayer = this.playerOne
        this.turnCount = 0
        this.winner = ''
        this.draw = false
    }
    checkEndCondition() {
        var winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]]
        for (var i = 0; i < winConditions.length; i++) {
            var triplet = winConditions[i];
            if (this.gameBoard[triplet[0]] === this.gameBoard[triplet[1]] &&
                this.gameBoard[triplet[0]] === this.gameBoard[triplet[2]] && this.gameBoard[triplet[0]] !== '') {
                    this.playerWins(this.currentPlayer)
                }
            }
            var hasEmpty = this.gameBoard.includes('')
            if (!hasEmpty) {
                this.draw = true
            }
    }
    resetGameBoard() {
        this.gameBoard = []
        for (var i = 0; i < 9; i++) {
            this.gameBoard.push('')
        }
        this.playerOne.wins = this.playerOne.wins
        this.playerTwo.wins = this.playerTwo.wins
        this.turnCount = 0
        this.winner = ''
        this.draw = false
    }
    changePlayer() {
        if (this.currentPlayer === this.playerOne) {
            this.currentPlayer = this.playerTwo
        }  else {
            this.currentPlayer = this.playerOne
        }
    }
    playTurn(gridSpacePlayed) {
        if(gridSpacePlayed > 8 || gridSpacePlayed < 0) {
            return `no`
        }
        if (this.gameBoard[gridSpacePlayed] !== '') {
            return `no`
        }
        if (this.winner !== '') {
            return 'no'
        }
        this.gameBoard[gridSpacePlayed] = this.currentPlayer.token
        this.turnCount += 1
        this.checkEndCondition()
        this.changePlayer()
    }
    playerWins(player) {
            player.increaseWins()
            this.winner = player
        }
    playersDraw() {
        this.draw = true
    }
}
module.exports = Game