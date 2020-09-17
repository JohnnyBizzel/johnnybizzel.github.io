<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <link rel="shortcut icon" type="image/x-icon" href="https://production-assets.codepen.io/assets/favicon/favicon-8ea04875e70c4b0bb41da869e81236e54394d63638a1ef12fa558a4a835f1164.ico" />
  <link rel="mask-icon" type="" href="https://production-assets.codepen.io/assets/favicon/logo-pin-f2d2b6d2c61838f7e76325261b7195c27224080bc099486ddd6dccb469b8e8e6.svg" color="#111" />
  <title> TIC-TAC-TOE (Noughts and Crosses)</title>
  
  <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'>

<style>
      @import url(https://fonts.googleapis.com/css?family=Share+Tech+Mono|Hammersmith+One|Comfortaa);
body {
  font-family: 'Share Tech Mono';
  background-color: #111719;
  color: #8AA3CB;
  font-size: 1.5em;
  text-shadow: -1px 1px 2px #5881AF, 1px -1px 2px #5881AF;
}

a {
  text-shadow: 0 0 0;
  text-decoration: none;
}

a:hover {
  text-shadow: 0 0 0;
  color: #8AA3CB;
  text-shadow: 1px -1px 1px #5881AF, 1px -1px 1px #5881AF;
}

.text-center {
  text-align: center;
}

.title {
  font-size: 2rem;
  float: left;
  padding-bottom: 30px;
  font-weight: bold;
}

.normalWeight {
  font-weight: normal;
}

.score {
  float: right;
  font-size: 2rem;
  padding-bottom: 20px;
  font-weight: bold;
}

.tictactoe-board {
  width: 440px;
  margin: 0px auto;
  padding: 20px;
  /*  border: 1px solid #111724;*/
}

.board-row {
  clear: both;
  width: 390px;
  margin: 0px auto;
  border: 0px solid silver;
  border-bottom: 0px solid #8AA3CB;
}

.f6 {
  font-size: 6em;
  text-align: center;
  vertical-align: middle;
}

.board-cell {
  display: inline-block;
  width: 120px;
  height: 135px;
  /* font-family:'Didact Gothic';*/
  font-family: 'Comfortaa';
  padding: 0px 5px 0px 3px;
  cursor: pointer;
  text-shadow: -1px 1px 8px #5881AF, 1px -1px 8px #5881AF;
}

.board-cell {
  border: 1px solid #8AA3CB;
  box-shadow: inset 0 0 10px #9ecaed;
}

/* @include box-shadow(inset 0 7px 9px -12px  #9ecaed, inset 7px 7px 11px 12px #9ecaed);
}*/
/* middle cells */
#cell-0-1 {
  border-top: 0;
  -moz-box-shadow: inset -8px -7px 12px -8px #9ecaed, inset 8px -7px 12px -8px #9ecaed;
  -webkit-box-shadow: inset -8px -7px 12px -8px #9ecaed, inset 8px -7px 12px -8px #9ecaed;
  box-shadow: inset -8px -7px 12px -8px #9ecaed, inset 8px -7px 12px -8px #9ecaed;
}

#cell-1-2 {
  border-right: 0;
  -moz-box-shadow: inset 8px 7px 12px -8px #9ecaed, inset 8px -7px 12px -8px #9ecaed;
  -webkit-box-shadow: inset 8px 7px 12px -8px #9ecaed, inset 8px -7px 12px -8px #9ecaed;
  box-shadow: inset 8px 7px 12px -8px #9ecaed, inset 8px -7px 12px -8px #9ecaed;
}

#cell-2-1 {
  border-bottom: 0;
  -moz-box-shadow: inset -8px 7px 12px -8px #9ecaed, inset 8px 7px 12px -8px #9ecaed;
  -webkit-box-shadow: inset -8px 7px 12px -8px #9ecaed, inset 8px 7px 12px -8px #9ecaed;
  box-shadow: inset -8px 7px 12px -8px #9ecaed, inset 8px 7px 12px -8px #9ecaed;
}

#cell-1-0 {
  border-left: 0;
  -moz-box-shadow: inset -8px -8px 12px -8px #9ecaed, inset -8px 7px 12px -8px #9ecaed;
  -webkit-box-shadow: inset -8px -8px 12px -8px #9ecaed, inset -8px 7px 12px -8px #9ecaed;
  box-shadow: inset -8px -8px 12px -8px #9ecaed, inset -8px 7px 12px -8px #9ecaed;
}

/* corners */
#cell-0-2 {
  border-right: 0;
  border-top: 0;
  box-shadow: inset 5px -5px 8px -5px #9ecaed;
}

#cell-0-0 {
  border-left: 0;
  border-top: 0;
  box-shadow: inset -5px -5px 9px -4px #9ecaed;
}

#cell-2-0 {
  border-left: 0;
  border-bottom: 0;
  box-shadow: inset -5px 5px 9px -4px #9ecaed;
}

#cell-2-2 {
  border-right: 0;
  border-bottom: 0;
  box-shadow: inset 5px 5px 9px -4px #9ecaed;
}

.message {
  float: left;
  font-size: 2rem;
  clear: both;
  padding-top: 5px;
}

#youO,
#compO {
  font-family: 'Hammersmith One';
}

#resetBtn {
  cursor: pointer;
}

    </style>

  
  
  
  
</head>

<body translate="no" >

  <div class="title">*** Noughts and Crosses --- TIC TAC TOE ***<br/><br/><div class="normalWeight">YOU ARE <span id="youX" class="glyphicon glyphicon-remove"></span><span id="youO" style="display:none; font-weight:bold">O</span>, CPU IS <span id="compO" style="font-weight:bold">O</span><span id="compX" class="glyphicon glyphicon-remove" style="display:none"></span> <a href="#" style="text-decoration:none;" id="swapSides">(swap)</a></div></div>

<div class="score">USER: <span class="playerScore">0</span> CPU: <span class="computerScore">0</span></div>


<div class="message">
 > <span class="message-text"></span><br/>
  > <label id="resetBtn" class="normalWeight">[RESET GAME]</label> 
</div>
<div class="tictactoe-board">
  <div class="board-row">
    <div class="board-cell board-cell-l f6" id="cell-0-0"><span id="token0">&emsp;</span></div><div class="board-cell f6" id="cell-0-1"><span id="token1">&emsp;</span></div><div class="board-cell board-cell-r f6" id="cell-0-2"><span id="token2">&emsp;</span></div>
<div class="board-cell board-cell-l f6" id="cell-1-0"><span id="token3">&emsp;</span></div><div class="board-cell f6" id="cell-1-1"><span id="token4">&emsp;</span></div><div class="board-cell board-cell-r f6" id="cell-1-2"><span id="token5">&emsp;</span></div><div class="board-cell board-cell-l f6" id="cell-2-0"><span id="token6">&emsp;</span></div><div class="board-cell f6" id="cell-2-1"><span id="token7">&emsp;</span></div><div class="board-cell no-b f6" id="cell-2-2"><span id="token8">&emsp;</span></div>
  </div>
</div>
  
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>

    <script>
    "use strict";
Array.prototype.containsArray = function(val) {
    var hash = {};
    for(var i=0; i<this.length; i++) {
        hash[this[i]] = i;
    }
    return hash.hasOwnProperty(val);
}

var playerChoice = "×";
var computerChoice = "o";
var playerScore = 0;
var computerScore = 0;
var playersTurn = false;
var gameStarted = false;
var computerSpot = '#cell-' + getRandomInt(0, 2) + '-' + getRandomInt(0, 2);
var interval;
var winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
var boardArray = ['', '', '', '', '', '', '', '', ''];
// Place an item.
$(document).ready(function() {

  $("#swapSides").click(function() {
    // todo: allow if game not started!
    console.log('gameStarted=' + gameStarted);
    if (!gameStarted) {
      if (playerChoice == "o") {
        playerChoice = "×";
        computerChoice = "o";
      } else {
        playerChoice = "o";
        computerChoice = "×";
      }
      $("#youO").toggle();
      $("#youX").toggle();
      $("#compO").toggle();
      $("#compX").toggle();
    }
  });

  $(".board-cell").click(function() {
    //figure out loop logic for if a spot is taken.    

    if (!gameStarted) playersTurn = true;
    if (playersTurn) {
      // $(this).text(playerChoice);
      var okMove = updateBoardArray("#" + this.id, playerChoice);
      if (!okMove) return;
      console.log('board=' + boardArray);
      gameStarted = true;
      playersTurn = false;
    } else { // needed???
      playersTurn = true;
    }
    // check if the player won with the current board
    var checkForWin = checkWin(playerChoice, boardArray);
    if (checkForWin.length === 3) {
      console.log("User wins");
      $('.message-text').text('USER WINS');
      indicateWinner(checkForWin);      
      playerScore += 1;
      playersTurn = false;
      $('.playerScore').html(playerScore);
      // TODO Ask user for another game...
      return;
      interval = setTimeout(function() {
        resetBoard()
      }, 5000);
    } else if (checkTie()) {
      console.log("Tie");
      $('.message-text').text('Stalemate');
      // TODO Ask user for another game...
      return;
      interval = setTimeout(function() {
        resetBoard()
      }, 5000);
    } else {
      // computer's go
      gameStarted = true;
      // todo - set level, for now pass zero
      computerMove(1);
    }
  });
});

// Game object
var Game =  class {
  constructor(win, score, boardAry, movLnkTo) {
     this.win = false;
    this.score = 0;
    this.boardArr = [];
    this.parentGame = 0;
  }
}
   
  //  obj = new Object();

function scoreGame(game,depth) {
  if (game(playerChoice) == game.win) {
    return 10 - depth;
  } else if (game(computerChoice) == game.win) {
    return depth - 10;
  } else {
    return 0;
  }
}
  
var moves = [];

function miniMax(game, depth, whosGoToken) {
  var scores = [];
  
  var parentGame = -1;
  var movesLen = moves.length;
  if (movesLen > 0) {
    // Find board and set Parent Game
    var movesPrevBoards = [];    
    for(var mi = 0; mi < movesLen; mi++ ) {
      var mvAr = moves[mi].boardArr.slice();
     movesPrevBoards.push(mvAr);
    }
    parentGame = movesPrevBoards.containsArray(game.boardArr);
  } 
  if (game.win == true) return 0; // next choice boardArray index;
  /* given board array, create boards for all possible next moves
      and store these in {moves} array */

  // find the empty spaces and add to possible free spaces.
  // an Array of T/F, true being free space.
  var freeSpaces = game.boardArr.map(function(sp) {
    return sp == '';
  });
  // set game board to test:

  var lenFS = freeSpaces.length;
  var i;
  for(i = 0; i < lenFS; i++) {
    var testBoard = game.boardArr.slice();
    if (freeSpaces[i]) {
      var possGame = new Game;
      possGame.boardArr = testBoard;
      possGame.boardArr[i] = whosGoToken;
      possGame.win = checkWin(computerChoice, testBoard).length === 3;
      possGame.parentGame = parentGame;
      moves.push(possGame);
    }      
  }

  console.log(moves);
  // Switch sides and search moves...
  moves.forEach(function(mv){
    var bestChoice = miniMax(mv, 0, (whosGoToken == playerChoice ? computerChoice : playerChoice));    
  });
}

function computerMove(level) {
  // the computer randomly chooses a cell
  var bestGo = -1;
  console.log('computerMoving as ' + computerChoice + '; Level= ' + level);
  if (level > 0) { // Using A.I.
    var testGame = new Game;
    testGame.score = 0;
    testGame.boardArr = boardArray;
    bestGo = miniMax(testGame, 0, computerChoice);    
  } else {
    // using random
    while ($(computerSpot).children().html() == playerChoice ||
      $(computerSpot).children().html() == computerChoice) {
      computerSpot = '#cell-' + getRandomInt(0, 2) + '-' + getRandomInt(0, 2);
    }
  }

 // place token
  setTimeout(function() {
    // $(computerSpot).text(computerChoice);
    if (level > 0) { // A.I. passes a number
      updateBoardArray(bestGo, computerChoice);
    } else {  // random passes a cell.
      updateBoardArray(computerSpot, computerChoice);  
    }   
    console.log('board=' + boardArray);
    playersTurn = true;
    //check if the computer wins - returns a winning line array.
    var checkForWin = checkWin(computerChoice, boardArray);
    if (checkForWin.length === 3) {
      console.log("Computer wins");
      $('.message-text').text('CPU WINS');
      indicateWinner(checkForWin);
      
      computerScore += 1;
      playersTurn = true;
      $('.computerScore').html(computerScore);

      /*interval = setTimeout(function() {
        resetBoard()
      }, 2000);*/

    } else if (checkTie()) {
      console.log("Tied");
      $('.message-text').text('Strange game. The only way to win is not to play.');
      // ToDo warn user it's a tie, press reset to start.
      /*interval = setTimeout(function() {
        resetBoard()
      }, 1000);*/
    };
  }, 500);
};

// x will be whoevers hit spots you are checking
function checkWin(x, board) {
  // New check using arrays
  // if not more than 2 attempts win is impossible
  var count = 0;
  var theWinningLine = []; // empty array to store the winning line
  // check number of counters placed so far
  for (var i = 0; i < board.length; ++i) {
    if (board[i] == x)
      count++;
  }
  if (count < 3) {
    return theWinningLine;  // empty array - no win found
  } else { // more than 3 guesses so check for the win
    // search for winning position
    var w;
    var winArLen = winningCombinations.length;    
    for (w = 0; w < winArLen; w++) {
      var foundCounter = 0; // counter in a winning combination
      winningCombinations[w].forEach(function(cbn) {
        if (board[cbn] == x) {
          foundCounter++;
        }
      });
      if (foundCounter === 3) {
        theWinningLine = winningCombinations[w];        
      }
    }

  };

  return theWinningLine;
}

// Shows the winning line by flashing the tokens.
// Waits for reset game to be clicked.
function indicateWinner(winningLine) {
    var interval1, interval2, interval0;
  
    interval0 = setInterval(function() {
      $(findHtmlCell(winningLine[0])).fadeToggle("fast", "swing");
    }, 500);
    interval1 = setInterval(function() {
      $(findHtmlCell(winningLine[1])).fadeToggle("fast", "linear");
    }, 500);
    interval2 = setInterval(function() {
      $(findHtmlCell(winningLine[2])).fadeToggle("fast", "linear");
    }, 500);

    $('#resetBtn').click(function() {
      console.log("resetting");
      clearInterval(interval0);
      clearInterval(interval1);
      clearInterval(interval2);
      resetBoard();
    });
}

//clear the board (should be modal?)
function resetBoard() {
  clearTimeout(interval);
  gameStarted = false;
  console.log('gameStarted=' + gameStarted);
  boardArray = ['', '', '', '', '', '', '', '', ''];
  $('.board-cell').children().html('&emsp;');
  // TODO Not sure if this works::
  $('.board-cell').children().show();
  $('.message-text').text('');

}

function checkTie() {
  return (!boardArray.includes(''));
}

// computer's random choice
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Todo: computer's AI choice
function removeDisplayNone(element) {
  $(element).css("display", "block");
}

function updateBoardArray(cell, playerCh) {
  switch (cell) {
    case 0:
    case "#cell-0-0":
      if (boardArray[0] != '') return false; // space occupied, invalid move
      boardArray[0] = playerCh;
      $("#token0").html(playerCh);
      removeDisplayNone("#token0");
      break;
    case 1:
    case "#cell-0-1":
      if (boardArray[1] != '') return false;
      boardArray[1] = playerCh;
      $("#token1").html(playerCh);
      removeDisplayNone("#token1");
      break;
    case 2:
    case "#cell-0-2":
      if (boardArray[2] != '') return false;
      boardArray[2] = playerCh;
      $("#token2").html(playerCh);
      removeDisplayNone("#token2");
      break;
    case 3:
    case "#cell-1-0":
      if (boardArray[3] != '') return false;
      boardArray[3] = playerCh;
      $("#token3").html(playerCh);
      removeDisplayNone("#token3");
      break;
    case 4:
    case "#cell-1-1":
      if (boardArray[4] != '') return false;
      boardArray[4] = playerCh;
      $("#token4").html(playerCh);
      removeDisplayNone("#token4");
      break;
    case 5:
    case "#cell-1-2":
      if (boardArray[5] != '') return false;
      boardArray[5] = playerCh;
      $("#token5").html(playerCh);
      removeDisplayNone("#token5");
      break;
    case 6:
    case "#cell-2-0":
      if (boardArray[6] != '') return false;
      boardArray[6] = playerCh;
      $("#token6").html(playerCh);
      removeDisplayNone("#token6");
      break;
    case 7:
    case "#cell-2-1":
      if (boardArray[7] != '') return false;
      boardArray[7] = playerCh;
      $("#token7").html(playerCh);
      removeDisplayNone("#token7");
      break;
    case 8:
    case "#cell-2-2":
      if (boardArray[8] != '') return false;
      boardArray[8] = playerCh;
      $("#token8").html(playerCh);
      removeDisplayNone("#token8");
      break;
  }
  return true; // valid move made
}

function findHtmlCell(pos) {
  switch (pos) {
    case 0:
      return "#token0";
      break;
    case 1:
      return "#token1";
      break;
    case 2:
      return "#token2";
      break;
    case 3:
      return "#token3";
      break;
    case 4:
      return "#token4";
      break;
    case 5:
      return "#token5";
      break;
    case 6:
      return "#token6";
      break;
    case 7:
      return "#token7";
      break;
    case 8:
      return "#token8";
      break;

  }

}
  </script>

  
  

</body>
</html>