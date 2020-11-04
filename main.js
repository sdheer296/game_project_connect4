//selectors

var tableRow = document.getElementsByTagName("tr");
var tableCell = document.getElementsByTagName("td");
var tableSlot = document.querySelector(".slot");
const playerTurn = document.querySelector(".player-turn");
const reset = document.querySelector(".reset");

for (let i = 0; i < tableCell.length; i++) {
  tableCell[i].addEventListener("click", (e) => {
    console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);

    //
  });
}

// while (!player1) {
//   var player1 = prompt("player 1: Enter your name.You will be red");
// }

let player1color = "red";
let player1 = "myself";
let player2color = "green";
let player2 = "you";


// while (!player2) {
//   var player2 = prompt("player 2: Enter your name.You will be green");
// }

// let player2color = "green";

var currentPlayer = 1;
playerTurn.textContent = `${player1}'s turn!`;

Array.prototype.forEach.call(tableCell, (cell) => {
  // we want to go for all the cells and cell is the callback

  cell.addEventListener("click", changeColor);
  cell.style.backgroundColor = "white"; //cell background is white so thats why we need this method here
});



function changeColor(e) {
  //in this function, we will create a variable called  column  and it will take an event and e is an event
  console.log(e.target);
  let column = e.target.cellIndex; // whenever we click on any of these cells, it will take the actual column index for eg: 1st index or 2,3
//  let cellNum = column.split('')[column.length-1];
  console.log(column);
  let row = [];

  for (let i = 5; i > -1; i--) {
    console.log(tableRow[i].cells[column]);
    //why -ve coz we want the loop to check the bottom first and then go up -ve.
    if (tableRow[i].cells[column].style.backgroundColor == "white") {
      //-1 means no
      row.push(tableRow[i].cells[column]);
      if (currentPlayer == 1) {
        row[0].style.backgroundColor = player1color;
        currentPlayer =2;
        break;
      }
      if(currentPlayer == 2){
        row[0].style.backgroundColor = player2color;
        currentPlayer = 1;
        break;

      }
    }
  }
}

reset.addEventListener('click',() =>{
    tableSlot.forEach(slot =>{
        slot.style.background = 'white';
    });
    playerTurn.style.backgroundColor = 'black';
    return(currentPlayer ===1 ? playerTurn.textContent = `${player}'s turn ` : playerTurn.textContent = `${player2}'s turn`);
    })

