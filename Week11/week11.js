function checkCondition() {
    var square1, square2, square3, square4, square5, square6, square7, square8, square9;
    square1 = document.getElementById("square1").value;
    square2 = document.getElementById("square2").value;
    square3 = document.getElementById("square3").value;
    square4 = document.getElementById("square4").value;
    square5 = document.getElementById("square5").value;
    square6 = document.getElementById("square6").value;
    square7 = document.getElementById("square7").value;
    square8 = document.getElementById("square8").value;
    square9 = document.getElementById("square9").value;

    // X win conditions
    if ((square1 == 'X') && (square2 == 'X') && (square3 == 'X')) {
        document.getElementById('turn').innerHTML = "X won!";
        document.getElementById("square4").disabled = true;
        document.getElementById("square5").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square8").disabled = true;
        document.getElementById("square9").disabled = true;
    }
    else if ((square4 == 'X') && (square5 == 'X') && (square6 == 'X')) {
        document.getElementById('turn').innerHTML = "X won!";
        document.getElementById("square1").disabled = true;
        document.getElementById("square2").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square8").disabled = true;
        document.getElementById("square9").disabled = true;
    }
    else if ((square7 == 'X') && (square8 == 'X') && (square9 == 'X')) {
        document.getElementById('turn').innerHTML = "X won!";
        document.getElementById("square1").disabled = true;
        document.getElementById("square2").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square5").disabled = true;
        document.getElementById("square6").disabled = true;
    }
    else if ((square1 == 'X') && (square4 == 'X') && (square7 == 'X')) {
        document.getElementById('turn').innerHTML = "X won!";
        document.getElementById("square2").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square5").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square8").disabled = true;
        document.getElementById("square9").disabled = true;
    }
    else if ((square2 == 'X') && (square5 == 'X') && (square8 == 'X')) {
        document.getElementById('turn').innerHTML = "X won!";
        document.getElementById("square1").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square9").disabled = true;
        
    }
    else if ((square3 == 'X') && (square6 == 'X') && (square9 == 'X')) {
        document.getElementById('turn').innerHTML = "X won!";
        document.getElementById("square1").disabled = true;
        document.getElementById("square2").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square5").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square8").disabled = true;
    }
    else if ((square1 == 'X') && (square5 == 'X') && (square9 == 'X')) {
        document.getElementById('turn').innerHTML = "X won!";
        document.getElementById("square2").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square8").disabled = true;
    }
    else if ((square3 == 'X') && (square5 == 'X') && (square7 == 'X')) {
        document.getElementById('turn').innerHTML = "X won!";
        document.getElementById("square1").disabled = true;
        document.getElementById("square2").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square8").disabled = true;
        document.getElementById("square9").disabled = true;
    }
    
    // O win conditions
    else if ((square1 == 'O') && (square2 == 'O') && (square3 == 'O')) {
        document.alert().innerHTML = "O won!";
        document.getElementById("square4").disabled = true;
        document.getElementById("square5").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square8").disabled = true;
        document.getElementById("square9").disabled = true;
    }
    else if ((square4 == 'O') && (square5 == 'O') && (square6 == 'O')) {
        document.alert().innerHTML = "O won!";
        document.getElementById("square1").disabled = true;
        document.getElementById("square2").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square8").disabled = true;
        document.getElementById("square9").disabled = true;
    }
    else if ((square7 == 'O') && (square8 == 'O') && (square9 == 'O')) {
        document.alert().innerHTML = "O won!";
        document.getElementById("square1").disabled = true;
        document.getElementById("square2").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square5").disabled = true;
        document.getElementById("square6").disabled = true;
    }
    else if ((square1 == 'O') && (square4 == 'O') && (square7 == 'O')) {
        document.alert().innerHTML = "O won!";
        document.getElementById("square2").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square5").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square8").disabled = true;
        document.getElementById("square9").disabled = true; 
    }
    else if ((square2 == 'O') && (square5 == 'O') && (square8 == 'O')) {
        document.alert().innerHTML = "O won!";
        document.getElementById("square1").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square9").disabled = true;
    }
    else if ((square3 == 'O') && (square6 == 'O') && (square9 == 'O')) {
        document.alert().innerHTML = "O won!";
        document.getElementById("square1").disabled = true;
        document.getElementById("square2").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square5").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square8").disabled = true;
    }
    else if ((square1 == 'O') && (square5 == 'O') && (square9 == 'O')) {
        document.alert().innerHTML = "O won!";
        document.getElementById("square2").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square8").disabled = true;
    }
    else if ((square3 == 'O') && (square5 == 'O') && (square7 == 'O')) {
        document.alert().innerHTML = "O won!";
        document.getElementById("square1").disabled = true;
        document.getElementById("square2").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square8").disabled = true;
        document.getElementById("square9").disabled = true;
    }
    //draw conditions
    else if ((square1 == 'X' || square1 == 'O') && (square2 == 'X' || square2 == 'O') && (square3 == 'X' || square3 == 'O') &&
        (square4 == 'X' || square4 == 'O') && (square5 == 'X' || square5 == 'O') && (square6 == 'X' || square6 == 'O') &&
        (square7 == 'X' || square7 == 'O') && (square8 == 'X' || square8 == 'O') && (square9 == 'X' || square9 == 'O')) {
            document.getElementById('turn').innerHTML = "The game is a draw :(";
    }
    //turn selector
    else {
        if (flag == 1) {
            document.getElementById('turn').innerHTML = "X's Turn";
        }
        else {
            document.getElementById('turn').innerHTML = "O's Turn";
        }
    }
}
function reset() {
    location.reload();
    document.getElementById('square1').value = '';
    document.getElementById("square2").value = '';
    document.getElementById("square3").value = '';
    document.getElementById("square4").value = '';
    document.getElementById("square5").value = '';
    document.getElementById("square6").value = '';
    document.getElementById("square7").value = '';
    document.getElementById("square8").value = '';
    document.getElementById("square9").value = '';
}

//Clicks mark X when flag is 1, O when 0, then switches the value to alternate turns.
flag = 1;
function markSquare1() {
    if (flag == 1) {
        document.getElementById("square1").value = "X";
        document.getElementById("square1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square1").value = "O";
        document.getElementById("square1").disabled = true;
        flag = 1;
    }
}
 
function markSquare2() {
    if (flag == 1) {
        document.getElementById("square2").value = "X";
        document.getElementById("square2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square2").value = "O";
        document.getElementById("square2").disabled = true;
        flag = 1;
    }
}
 
function markSquare3() {
    if (flag == 1) {
        document.getElementById("square3").value = "X";
        document.getElementById("square3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square3").value = "O";
        document.getElementById("square3").disabled = true;
        flag = 1;
    }
}
 
function markSquare4() {
    if (flag == 1) {
        document.getElementById("square4").value = "X";
        document.getElementById("square4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square4").value = "O";
        document.getElementById("square4").disabled = true;
        flag = 1;
    }
}
 
function markSquare5() {
    if (flag == 1) {
        document.getElementById("square5").value = "X";
        document.getElementById("square5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square5").value = "O";
        document.getElementById("square5").disabled = true;
        flag = 1;
    }
}
 
function markSquare6() {
    if (flag == 1) {
        document.getElementById("square6").value = "X";
        document.getElementById("square6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square6").value = "O";
        document.getElementById("square6").disabled = true;
        flag = 1;
    }
}
 
function markSquare7() {
    if (flag == 1) {
        document.getElementById("square7").value = "X";
        document.getElementById("square7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square7").value = "O";
        document.getElementById("square7").disabled = true;
        flag = 1;
    }
}
 
function markSquare8() {
    if (flag == 1) {
        document.getElementById("square8").value = "X";
        document.getElementById("square8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square8").value = "O";
        document.getElementById("square8").disabled = true;
        flag = 1;
    }
}
 
function markSquare9() {
    if (flag == 1) {
        document.getElementById("square9").value = "X";
        document.getElementById("square9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square9").value = "O";
        document.getElementById("square9").disabled = true;
        flag = 1;
    }
}