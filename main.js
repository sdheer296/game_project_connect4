//selectors

var tableRow = document.getElementsByTagName('tr');
var tableCell = document.getElementsByTagName('td');
var tableSlot = document.querySelector('.slot');
const playerTurn = document.querySelector('.player-turn');
const reset = document.querySelector('.reset');


for (let i = 0; i < tableCell.length ; i++) {

    tableCell[i].addEventListener('click' , (e) =>{

        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
    })
}


while(!player1){
    var player1 = prompt('player 1: Enter your name.You will be red');
}

player1color = 'red';

while(!player2){
    var player2 = prompt('player 2: Enter your name.You will be green');
}

player2color = 'green';

var currentPlayer = 2;
playerTurn.textContent = `${player2}'s turn!`;



