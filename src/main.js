//YAGNI You Ain't Gonna Need It
// var Game = require("../src/game")
// var Player = require("../src/player")

//jquery
var player1Token = document.getElementById('player1Token')
var player1WinCount = document.getElementById('player1WinCount')
var player2Token = document.getElementById('player2Token')
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


//GLOBAL VARIABLES
var boxes = [box0, box1, box2, box3, box4, box5, box6, box7, box8]

//functions and event delegation


function playTurn(event) {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerText = i
        var currentBox = boxes[i]
        if (event.target === currentBox)
        console.log(`${currentBox.innerText} is working`)
    }
}

function addToken(box) {

}
