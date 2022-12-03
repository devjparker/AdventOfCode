function readFile(){
    const path = require('path');
    const fs = require('fs');

    const input = fs
	    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	    .toString()
	    .trim()
	    .split('\n');

    return input;
} 

function partOne() {
    let array = readFile();

    /* myRock = 'X';
     myPaper = 'Y';
     myScissors = 'Z';
     opRock = 'A';
     opPaper = 'B';
     opScissors = 'C'; */

    let myPoints = 0;

    for (item in array) {
        let i = array[item];
        if (i[2] == 'X') {
            myPoints += 1;
        }
        else if (i[2] == 'Y') {
            myPoints += 2;
        }
        else if (i[2] == 'Z') {
            myPoints += 3;
        }
    }
    for (item in array) {
        let i = array[item];
        if((i[0] == 'C' && i[2] == 'X') || (i[0] == 'A' && i[2] == 'Y') || (i[0] == 'B' && i[2] == 'Z')) {
            myPoints += 6;
        }
        else if ((i[0] == 'A' && i[2] == 'X') || (i[0] == 'B' && i[2] == 'Y') || (i[0] == 'C' && i[2] == 'Z')) {
            myPoints += 3;
        }
    }
    return myPoints;
}
console.log(partOne()); //correct answer is 14531

function partTwo() {
    // lose = 'X';
    // draw = 'Y';
    // win = 'Z';

    let myPoints = 0;

    let array = readFile();

    for (item in array) {
        let i = array[item];
        if (i[2] == 'Y') {
            myPoints += 3;
        }
        else if (i[2] == 'Z') {
            myPoints += 6;
        }
    }

    for (item in array) {
        let i = array[item];
        if((i[0] == 'A' && i[2] == 'Y') || (i[0] == 'B' && i[2] == 'X') || (i[0] == 'C' && i[2] == 'Z')) {
            myPoints += 1; //I play rock
        }
        else if ((i[0] == 'A' && i[2] == 'Z') || (i[0] == 'B' && i[2] == 'Y') || (i[0] == 'C' && i[2] == 'X')) {
            myPoints += 2; //I play paper
        }
        else if ((i[0] == 'A' && i[2] == 'X') || (i[0] == 'B' && i[2] == 'Z') || (i[0] == 'C' && i[2] == 'Y')) {
            myPoints += 3; //I play scissors
        }
    }
    return myPoints;
}
console.log(partTwo()); //correct answer is 11258