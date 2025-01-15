var boxes = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];
var chosenBoxes = []; //keeps track of which boxes have been taken 
var freeBoxes = [1,2,3,4,5,6,7,8,9];
var x_picks = [];
var o_picks = [];
var x_score = 0;
var o_score = 0;

var turn_number = 0;
var gameTime = 120; //seconds
var computerStatus = false;

//starts a new tic tac toe game. does not include clearing board
//displays both players' scores, and who's turn it is
//resets turn number and game timer
function startGame() {
    /* displays score of each player */
    let go = document.getElementById("scoreTracker");
    go.innerHTML = "X - " + x_score + ", O - " + o_score;

    turn_number = 1; //added here to show player x is always first
    showPlayer(turn_number);

    gameTime = 120; //reset to 120 seconds
    turn_number = 0;
}

//function to set each tic tac toe square to be empty. will be called multiple times
function clearBoard() {
    var clearBoard;
    clearBoard = document.getElementById("box1");
    clearBoard.innerHTML = " ";
    clearBoard = document.getElementById("box2");
    clearBoard.innerHTML = " ";
    clearBoard = document.getElementById("box3");
    clearBoard.innerHTML = " ";
    clearBoard = document.getElementById("box4");
    clearBoard.innerHTML = " ";
    clearBoard = document.getElementById("box5");
    clearBoard.innerHTML = " ";
    clearBoard = document.getElementById("box6");
    clearBoard.innerHTML = " ";
    clearBoard = document.getElementById("box7");
    clearBoard.innerHTML = " ";
    clearBoard = document.getElementById("box8");
    clearBoard.innerHTML = " ";
    clearBoard = document.getElementById("box9");
    clearBoard.innerHTML = " ";
}

//starts a new game
function newGame() {
    alert("The round is starting. Begin!");
    /*  score is the # of games the player has won. 
        clear the board and start a new game.
        current scores are kept.
    */
    chosenBoxes = [];
    freeBoxes = [1,2,3,4,5,6,7,8,9];
    x_picks = [];
    o_picks = [];

    clearBoard(); //clears board
    startGame(); 
}

//reset the board and the player scores
function resetGame() {
    alert("Resetting the board AND player scores.");
    /* reset the board AND scores. */
    x_score = 0;
    o_score = 0;

    chosenBoxes = [];
    freeBoxes = [1,2,3,4,5,6,7,8,9];
    x_picks = [];
    o_picks = [];

    clearBoard(); //clears board
    startGame();
}

function play(userChoice) {
    console.log("turn number: " + turn_number);
    showPlayer(turn_number);
    playGame(userChoice);
    if (boardFull() === true) {
        alert("It's a tie game! No one wins.");
        newGame();
    }
}

function playerXturn(boxNumber) {
    //check if spot is not yet taken
    //do something if it is take
    //if not taken, move on
    var placeX;
    if (chosenBoxes.includes(boxNumber) === true) {
        alert("Invalid option. Choose a different box.");
        return;
    }

    // place x
    let boxName = "box" + boxNumber;
    placeX = document.getElementById(boxName);
    placeX.innerHTML = "X";
    x_picks.push(boxNumber);
    chosenBoxes.push(boxNumber);

    var index = freeBoxes.indexOf(boxNumber);
    if (index > -1) { 
        freeBoxes.splice(index, 1); 
    }

    console.log("x_picks: " + x_picks);
    console.log(chosenBoxes);
    console.log("free: " + freeBoxes);
}

function playerOturn(boxNumber) {
    //check if spot is not yet taken
    //do something if it is taken
    //if not taken, move on
    var placeO; 
    if (chosenBoxes.includes(boxNumber) === true) {
        alert("Invalid option. Choose a different box.");
        return;
    }

    let boxName = "box" + boxNumber;
    //place o
    placeO = document.getElementById(boxName);
    placeO.innerHTML = "O";
    o_picks.push(boxNumber);
    chosenBoxes.push(boxNumber);
    
    var index = freeBoxes.indexOf(boxNumber);
    if (index > -1) { 
        freeBoxes.splice(index, 1); 
    }

    console.log("o_picks: " + o_picks);
    console.log(chosenBoxes);
    console.log("free: " + freeBoxes);
}

/* indicates which box was chosen */
function playGame(userChoice) {
    turn_number++;
    console.log("CURRENT TURN NUMBER: " + turn_number);

// the userChoices matter here
    switch (userChoice) {
        case '1':
            if (turn_number % 2 === 1) { //odd turn, player x
                playerXturn(1);
            }
            else { //even turn, player o
                playerOturn(1);
            }
            break;
        case '2':
            if (turn_number % 2 === 1) { //odd turn, player x
                playerXturn(2);
            }
            else { //even turn, player o
                playerOturn(2);
            }
            break;
        case '3':
            if (turn_number % 2 === 1) { //odd turn, player x
                playerXturn(3);
            }
            else { //even turn, player o
                playerOturn(3);
            }
            break;
        case '4':
            if (turn_number % 2 === 1) { //odd turn, player x
                playerXturn(4);
            }
            else { //even turn, player o
                playerOturn(4);
            }
            break;
        case '5':
            if (turn_number % 2 === 1) { //odd turn, player x
                playerXturn(5);
            }
            else { //even turn, player o
                playerOturn(5);
            }
            break;
        case '6':
            if (turn_number % 2 === 1) { //odd turn, player x
                playerXturn(6);
            }
            else { //even turn, player o
                playerOturn(6);
            }
            break;
        case '7':
            if (turn_number % 2 === 1) { //odd turn, player x
                playerXturn(7);
            }
            else { //even turn, player o
                playerOturn(7);
            }
            break;
        case '8':
            if (turn_number % 2 === 1) { //odd turn, player x
                playerXturn(8);
            }
            else { //even turn, player o
                playerOturn(8);
            }
            break;
        case '9':
            if (turn_number % 2 === 1) { //odd turn, player x
                playerXturn(9);
            }
            else { //even turn, player o
                playerOturn(9);
            }
            break;
    }

    //if vs computer (computerStatus = true)
    console.log("A TURN JUST PASSED: " + turn_number)
    let checkboxMark = document.getElementById("myCheck");
    let statusOfCheckbox = checkboxMark.checked; 
    if(statusOfCheckbox === true) {
        if (((turn_number+1) % 2 === 0) && (turn_number > 0)) {
            console.log("COMPUTER PLACING AN O")
            computer();
            console.log("COMPUTER PLACED O")
        }
    }

    //check if x has won
    if (checkXWin() === true) {
        alert("Player X Wins!");
        x_score++;
        newGame();
    }
    
    //check if o has won
    if (checkOWin() === true) {
        alert("Player O Wins!");
        o_score++;
        newGame();
    }
}

//check all possible winning combos for x
function checkXWin() {
    if (x_picks.includes(1) === true && x_picks.includes(2) === true && x_picks.includes(3) === true) {
        return true;
    }
    else if (x_picks.includes(4) === true && x_picks.includes(5) === true && x_picks.includes(6) === true) {
        return true;
    }
    else if (x_picks.includes(7) === true && x_picks.includes(8) === true && x_picks.includes(9) === true) {
        return true;
    }
    else if (x_picks.includes(1) === true && x_picks.includes(4) === true && x_picks.includes(7) === true) {
        return true;
    }
    else if (x_picks.includes(2) === true && x_picks.includes(5) === true && x_picks.includes(8) === true) {
        return true;
    }
    else if (x_picks.includes(3) === true && x_picks.includes(6) === true && x_picks.includes(9) === true) {
        return true;
    }
    else if (x_picks.includes(1) === true && x_picks.includes(5) === true && x_picks.includes(9) === true) {
        return true;
    }
    else if (x_picks.includes(3) === true && x_picks.includes(5) === true && x_picks.includes(7) === true) {
        return true;
    }
    return false;
}

//checks all possible winning combos for o
function checkOWin() {
    if (o_picks.includes(1) === true && o_picks.includes(2) === true && o_picks.includes(3) === true) {
        return true;
    }
    else if (o_picks.includes(4) === true && o_picks.includes(5) === true && o_picks.includes(6) === true) {
        return true;
    }
    else if (o_picks.includes(7) === true && o_picks.includes(8) === true && o_picks.includes(9) === true) {
        return true;
    }
    else if (o_picks.includes(1) === true && o_picks.includes(4) === true && o_picks.includes(7) === true) {
        return true;
    }
    else if (o_picks.includes(2) === true && o_picks.includes(5) === true && o_picks.includes(8) === true) {
        return true;
    }
    else if (o_picks.includes(3) === true && o_picks.includes(6) === true && o_picks.includes(9) === true) {
        return true;
    }
    else if (o_picks.includes(1) === true && o_picks.includes(5) === true && o_picks.includes(9) === true) {
        return true;
    }
    else if (o_picks.includes(3) === true && o_picks.includes(5) === true && o_picks.includes(7) === true) {
        return true;
    }
    return false;
}

//for if the last pick is a winning or losing board
function boardFull() {
    if (chosenBoxes.length === 9 && checkOWin() === false && checkXWin() === false) {
        return true;
    }
    console.log("chosenbox size: " + chosenBoxes.length);
    console.log("checkXWin: " + checkXWin())
    console.log("checkOWin: " + checkOWin());
    return false;
}

//shows current player
function showPlayer(turn) {
    if (turn % 2 === 1) {
        let go2 = document.getElementById("showplayer");
        go2.innerHTML = "Player X"; //the next player (odd turns)
        console.log("turn number: " + turn);
    }
    else {
        let go2 = document.getElementById("showplayer");
        go2.innerHTML = "Player O"; //the next player (even turns)
        console.log("turn number: " + turn);
    }
}

/* timer */
var timeCounter = setInterval(startTimer, 1000);
function startTimer() {
    showtimer.innerHTML = gameTime--;
    if ((gameTime < -1)) {
        alert("Time's up! Starting new game.")
        newGame();
    }
}

/* computer */
function computer() {
    computerStatus = true;
    
    var randomBox;
    var computerTurn = true;
    let checkboxMark = document.getElementById("myCheck");
    let statusOfCheckbox = checkboxMark.checked; 

    if ((statusOfCheckbox === true) && ((turn_number+1) % 2 === 0) && (turn_number > 0)) { //if vs ai and turn is even and >0
        while ((computerTurn === true) && (boardFull() === false)) {
            randomBox = (Math.floor(Math.random() * 9)) + 1; //generate a random number
            console.log("random box number: " + randomBox);
            if (freeBoxes.includes(randomBox)) { // if the random box is free
                playAI(randomBox);
                computerTurn = false;
                break; //break out of loop
            }
        }
    }
    else {
        computerTurn = false;
    }
}

function playAI(aiChoice) {
    console.log("turn number: " + turn_number);
    showPlayer(turn_number);

    turn_number++;
    console.log("CURRENT TURN NUMBER: " + turn_number);

    switch (aiChoice) {
        case 1:
            playerOturn(1);
            break;
        case 2:
            playerOturn(2);
            break;
        case 3:
            playerOturn(3);
            break;
        case 4:
            playerOturn(4);
            break;
        case 5:
            playerOturn(5);
            break;
        case 6:
            playerOturn(6);
            break;
        case 7:
            playerOturn(7);
            break;
        case 8:
            playerOturn(8);
            break;
        case 9:
            playerOturn(9);
            break;
    }
}

/* darkmode */
function darkmode() {
    let checkboxMark = document.getElementById("darkmode");
    let statusOfCheckbox = checkboxMark.checked; 
    if(statusOfCheckbox === true) {//dark
        document.body.style.background = "linear-gradient(#201f35, #271f35)";
        document.body.style.color = "white"; //text color
    }
    else {//light
        document.body.style.background = "linear-gradient(#6ec7fa, #bae6ff)";
        document.body.style.color = "black"; //text color
    }
}