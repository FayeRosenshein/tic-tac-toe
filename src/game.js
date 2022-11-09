class Game {
    constructor(gameInfo) {
        this.playerOne = gameInfo.playerOne
        this.playerTwo = gameInfo.playerTwo
        this.gameBoard = []
        for (var i = 0; i < 9; i++) {
            this.gameBoard.push('')
        }
        this.currentPlayer = this.playerOne
        this.hasWon = false
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
                this.gameBoard[triplet[0]] === this.gameBoard[triplet[2]]) {
                this.hasWon = true
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
        this.hasWon = false
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
        if (this.currentPlayer === this.playerOne && this.gameBoard[gridSpacePlayed] === '') {
            this.gameBoard[gridSpacePlayed] = this.currentPlayer.token
            this.changePlayer()
        } 
        if (this.currentPlayer === this.playerTwo && this.gameBoard[gridSpacePlayed] === '') {
            this.gameBoard[gridSpacePlayed] = this.currentPlayer.token
            this.changePlayer()
        }
    }
    playerWins(player) {
        if (player === this.playerOne) {
            this.playerOne.increaseWins()
            this.resetGameBoard()
        } else {
            this.playerTwo.increaseWins()
            this.resetGameBoard()
        }
    }
    playersDraw() {
        this.draw = true
    }
}
module.exports = Game