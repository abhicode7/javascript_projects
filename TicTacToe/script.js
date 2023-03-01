// initialize variables
var board, currentPlayer, gameWon;

// function to reset the game
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameWon = false;
  renderBoard();
}

// function to render the board
function renderBoard() {
  // loop through the squares and add X or O as appropriate
  for (var i = 1; i <= 9; i++) {
    var square = document.getElementById(i);
    square.textContent = board[i - 1];
  }

  // update the current player
  var playerDisplay = document.getElementById("player");
  playerDisplay.textContent = currentPlayer;
}

// function to check if the game has been won
function checkWin() {
  var winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (var i = 0; i < winCombos.length; i++) {
    var [a, b, c] = winCombos[i];
    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }

  // check for tie game
  if (!board.includes("")) {
    return "tie";
  }

  return null;
}

// function to handle a square being clicked
function squareClick(event) {
  // get the ID of the clicked
  var squareID = event.target.id;
  var squareIndex = parseInt(squareID) - 1;
  
  // if the square is already taken or the game has been won, return
  if (board[squareIndex] !== "" || gameWon) {
  return;
  }
  
  // set the square to the current player's mark
  board[squareIndex] = currentPlayer;
  
  // check if the game has been won
  var winner = checkWin();
  if (winner !== null) {
  gameWon = true;
  if (winner === "tie") {
  alert("It's a tie!");
  } else {
  alert("Player " + winner + " has won!");
  }
  } else {
  // switch to the other player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
  
  // render the updated board
  renderBoard();
  }
  
  // add event listeners
  var squares = document.getElementsByClassName("square");
  for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", squareClick);
  }
  var resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", resetGame);
  
  // initialize the game
  resetGame();