//selectors

var tableRow = document.getElementsByTagName("tr");
var tableCell = document.getElementsByTagName("td");
var tableSlot = document.querySelector(".slot");
const playerTurn = document.querySelector(".player-turn");
const reset = document.querySelector(".reset");
const board = [];
for (let i = 0; i < 42; i++) {
  board.push(null);
}
let winCombos = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],
  [0, 7, 14, 21],
  [1, 8, 15, 22],
  [2, 9, 16, 23],
  [3, 10, 17, 24],
  [4, 11, 18, 25],
  [5, 12, 19, 26],
  [6, 13, 20, 27],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
  [14, 21, 28, 35],
  [15, 22, 29, 36],
  [16, 23, 30, 37],
  [17, 24, 31, 38],
  [18, 25, 32, 39],
  [19, 26, 33, 40],
  [20, 27, 34, 41],
  [0, 8, 16, 24],
  [1, 9, 17, 25],
  [2, 10, 18, 26],
  [3, 11, 19, 27],
  [7, 15, 23, 31],
  [8, 16, 24, 32],
  [9, 17, 25, 33],
  [10, 18, 26, 34],
  [14, 22, 30, 38],
  [15, 23, 31, 39],
  [16, 24, 32, 40],
  [17, 25, 33, 41],
  [21, 15, 9, 3],
  [22, 16, 10, 4],
  [23, 17, 11, 5],
  [24, 18, 12, 6],
  [28, 22, 16, 10],
  [29, 23, 17, 11],
  [30, 24, 18, 12],
  [31, 25, 19, 13],
  [35, 29, 23, 17],
  [36, 30, 24, 18],
  [37, 31, 25, 19],
  [38, 32, 26, 20],
];

//create a function to make sure color matches

function colorMatchCheck(one, two, three, four) {
  return one == two && one === three && one === four && one !== "white";
}

for (let i = 0; i < tableCell.length; i++) {
  tableCell[i].addEventListener("click", (e) => {
    console.log(`${e.target.rowIndex}, ${e.target.cellIndex}`);
  });
}

let player1color = "red";
let player1 = "myself";
let player2color = "green";
let player2 = "you";

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
  let row = []; //empty state

  for (let i = 5; i > -1; i--) {
    console.log(tableRow[i].cells[column]);
    //we have -ve loop because we want the loop to check the bottom first and then go up .
    if (tableRow[i].cells[column].style.backgroundColor == "white") {
      //-1 means no
      row.push(tableRow[i].cells[column]);
      if (currentPlayer == 1) {
        row[0].style.backgroundColor = player1color;
        console.log(row[0].id);
        let change = row[0].id;
        board[change] = player1color;
        currentPlayer = 2;
        playerTurn.textContent = `${player2}'s turn!`;
        winCombos.forEach((combo, i) => {
            if(board[combo[0]]==player1color){
                if(board[combo[0]]==board[combo[1]] && board[combo[0]]==board[combo[2]] && board[combo[0]]==board[combo[3]]){
                  playerTurn.textContent = 'player 1 wins';
                }
            }
        });
        break;
      }
      if (currentPlayer == 2) {
        row[0].style.backgroundColor = player2color;
        currentPlayer = 1;
        let change = row[0].id;
        board[change] = player2color;
        playerTurn.textContent = `${player1}'s turn!`;
        winCombos.forEach((combo, i) => {
            if(board[combo[0]]==player2color){
                if(board[combo[0]]==board[combo[1]] && board[combo[0]]==board[combo[2]] && board[combo[0]]==board[combo[3]]){
                  playerTurn.textContent = 'player 2 wins';
                }
            }
        });
        break;
      }
    }
  }
  console.log(board);
}

reset.addEventListener("click", () => {
    console.log('reset');
    console.log(tableSlot);
//   tableSlot.forEach((slot) => {
//     slot.style.background = "white";
//   });
    for(let i = 0; i <42; i++){
        document.getElementById(`${i}`).style.backgroundColor ='white'
        board[i]=null;
    }

});
