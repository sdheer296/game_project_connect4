//selectors

var tableRow = document.getElementsByTagName("tr");
var tableCell = document.getElementsByTagName("td");
var tableSlot = document.querySelector(".slot");
const playerTurn = document.querySelector(".player-turn");
const reset = document.querySelector(".reset");



let winCombos = [
    [0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6],
    [7,8,9,10],[8,9,10,11],[9,10,11,12],[10,11,12,13],
    [14,15,16,17],[15,16,17,18],[16,17,18,19],[17,18,19,20],
    [21,22,23,24],[22,23,24,25],[23,24,25,26],[24,25,26,27],
    [28,29,30,31],[29,30,31,32],[30,31,32,33],[31,32,33,34],
    [35,36,37,38],[36,37,38,39],[37,38,39,40],[38,39,40,41],

    //Adding winning logic vertically

[0,7,14,21],[7,14,21,28],[14,21,28,35],
[1,8,15,22],[8,15,22,29],[15,22,29,36],
[2,9,16,23],[9,16,23,30],[16,23,30,37],
[3,10,17,24],[10,17,24,31],[17,24,31,38],
[4,11,18,25],[11,18,25,32],[18,25,32,39],
[5,12,19,26],[12,19,26,33],[19,26,33,40]
[6,13,20,27],[13,20,27,34],[20,27,34,41],

    //Adding winning logic bottoms up vertical

    [35,28,21,14],[28,21,14,7],[21,14,7,0],
    [36,29,22,15],[29,22,15,8],[22,15,8,1],
    [37,30,23,16],[30,23,16,9],[23,16,9,2],
    [38,31,24,17],[31,24,17,10],[24,17,10,3],
    [39,32,25,18],[32,25,18,11],[25,18,11,4],
    [40,33,26,19],[33,26,19,12],[26,19,12,5],
    [41,34,27,20],[34,27,20,13],[27,20,13,6],

    //Adding winning logic right to left horizontal

    [6,5,4,3],[5,4,3,2],[4,3,2,1],[3,2,1,0],
    [13,12,11,10],[12,11,10,9],[11,10,9,8],[10,9,8,7],
    [20,19,18,17],[19,18,17,16],[18,17,16,15,],[17,17,15,14],
    [27,26,25,24],[26,25,24,23],[25,24,23,22],[24,23,22,21],
    [34,33,32,31],[33,32,31,30],[32,31,30,29],[31,30,29,28],
    [41,40,39,38],[40,39,38,37],[39,38,37,36],[38,37,36,35]

        //diagonal winning logic
        [21,15,9,3],[28,22,16,10],[22,16,10,4],
        [35,29,23,17],[29,23,17,11],[23,17,11,5],
        [36,30,24,18],[30,24,18,12],[24,18,12,6],
        [37,31,25,19],[31,25,19,13],[38,32,26,20],
        [3,11,19,27],[2,10,18,26],[10,18,26,34],
        [1,9,17,25],[9,17,25,33],[17,25,33,41],
        [0,8,16,24],[8,16,24,32],[16,24,32,40],
        [7,15,23,31],[15,23,31,39],[14,22,30,38],
        [27,19,11,3],[34,26,18,10],[26,18,10,2],
        [41,33,25,17],[33,25,17,9],[25,17,9,1],
        [40,32,24,16],[32,24,16,8],[24,16,8,0],
        [39,31,23,15],[31,23,15,7],[38,30,22,14],

]



//create a function to make sure color matches

function colorMatchCheck(one,two,three,four){
    return(one ==two && one ===three && one ===four && one !=='white');
}

function horizontalcheck{
    for(let row = 0;row <tableRow.length; row++){
        for(let col = 0; col <4 ; col++{
            if(colorMatchCheck(tableRow))

        }
    }

}
function verticalCheck{
    for (let col = 0; col < 7; col++){
        for (row = 0; row <3; row++){
            if(colorMatchCheck(tableRow[row].col.style.backgroundColor))

        }
    }

}

 function diagonalCheckLeft{

 }
  function diagonalCheckRight{

  }





for (let i = 0; i < tableCell.length; i++) {
  tableCell[i].addEventListener("click", (e) => {
    console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);

    //
  });
}

// while (!player1) {
//   var player1 = prompt("player 1: Enter your name.You will be red");
// }
  //need players and gave them colors

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
  let column = e.target.cellIndex;            // whenever we click on any of these cells, it will take the actual column index for eg: 1st index or 2,3
//  let cellNum = column.split('')[column.length-1];
  console.log(column);
  let row = [];                 //empty state

  for (let i = 5; i > -1; i--) {
    console.log(tableRow[i].cells[column]);
    //we have -ve loop because we want the loop to check the bottom first and then go up .
    if (tableRow[i].cells[column].style.backgroundColor == "white") {
      //-1 means no
      row.push(tableRow[i].cells[column]);
      if (currentPlayer == 1) {
        row[0].style.backgroundColor = player1color;
        currentPlayer =2;
        playerTurn.textContent = `${player2}'s turn!`;
        
        break;
    
      }
      if(currentPlayer == 2){
        row[0].style.backgroundColor = player2color;
        currentPlayer = 1;
        playerTurn.textContent = `${player1}'s turn!`;
        break;

      }
    }
  }
}




reset.addEventListener('click',() =>{
    tableSlot.forEach(slot =>{
        slot.style.background = 'white';
    });
    playerTurn.style.Color = 'black';
    return(currentPlayer ===1 ? playerTurn.textContent = `${player}'s turn ` : playerTurn.textContent = `${player2}'s turn`);
    })

