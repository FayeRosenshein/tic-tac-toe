class Player{
    constructor(playerInfo) {
        this.id = playerInfo.id
        this.token = playerInfo.token
        this.wins = 0
    }
    increaseWins() {
        this.wins++
    }
}