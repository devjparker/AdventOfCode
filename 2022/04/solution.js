/* Part 1 goal, each line has two ranges. 
How many lines have a range that fully 
engulfs the other?*/

function readFile() {
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
    let rangeOneStart = 0;
    let rangeOneEnd = 0;
    let rangeTwoStart = 0;
    let rangeTwoEnd = 0;
    let sum = 0;
    let dashOne = 0;
    let comma = 0;
    let dashTwo = 0;

    for (item in array) {
        let i = array[item];
        for (char in i) {
            if (char <= 2 && i[char] == '-') {
                dashOne = char;
            } 
            if (char > 2 && i[char] == '-') {
                dashTwo = char;
            }
            if (i[char] == ',') {
                comma = char;
            }
        }
        rangeOneStart = parseInt(i.slice(0,dashOne));
        rangeOneEnd = parseInt(i.slice((parseInt(dashOne)+1), comma));
        rangeTwoStart = parseInt(i.slice((parseInt(comma)+1), dashTwo));
        rangeTwoEnd = parseInt(i.slice((parseInt(dashTwo)+1)));
        if(rangeOneStart <= rangeTwoStart && rangeOneEnd >= rangeTwoEnd) {
            sum += 1;
        } else if (rangeTwoStart <= rangeOneStart && rangeTwoEnd >= rangeOneEnd) {
            sum += 1;
        }
    }
    return sum;

}

console.log(partOne()); //correct answer 490

function partTwo() {
    let array = readFile();
    let rangeOneStart = 0;
    let rangeOneEnd = 0;
    let rangeTwoStart = 0;
    let rangeTwoEnd = 0;
    let sum = 0;
    let dashOne = 0;
    let comma = 0;
    let dashTwo = 0;

    for (item in array) {
        let i = array[item];
        for (char in i) {
            if (char <= 2 && i[char] == '-') {
                dashOne = char;
            } 
            if (char > 2 && i[char] == '-') {
                dashTwo = char;
            }
            if (i[char] == ',') {
                comma = char;
            }
        }
        rangeOneStart = parseInt(i.slice(0,dashOne));
        rangeOneEnd = parseInt(i.slice((parseInt(dashOne)+1), comma));
        rangeTwoStart = parseInt(i.slice((parseInt(comma)+1), dashTwo));
        rangeTwoEnd = parseInt(i.slice((parseInt(dashTwo)+1)));
        if(rangeOneStart <= rangeTwoStart && rangeOneEnd >= rangeTwoEnd) {
            sum += 1;
        } else if (rangeTwoStart <= rangeOneStart && rangeTwoEnd >= rangeOneEnd) {
            sum += 1;
        } else if (rangeOneStart <= rangeTwoStart && rangeOneEnd >= rangeTwoStart) {
            sum += 1;
        } else if (rangeTwoStart <= rangeOneStart && rangeTwoEnd >= rangeOneStart) {
            sum += 1;
        }
    }
    return sum;
}

console.log(partTwo()); //correct answer is 921