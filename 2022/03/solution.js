/* The goal for this is to take an input of lines,
each line with one half being one pocket. Each letter
has a number value a-z = 1-26, A-Z 27-52. Find the letter
that appears in both halves on each line, sum the number
of each line's "priority (number)". */
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
function findPriorityLetters() {

    let array = readFile();
    let priorityLetter = [];

    for (item in array) {
        let i = array[item];
        let length = i.length;
        let halfPoint = i.length/2;
        let firstHalf = i.slice(0, halfPoint);
        let secondHalf = i.slice(halfPoint);
        
        for (char in firstHalf) {
            if (secondHalf.includes(firstHalf[char])) {
                priorityLetter.push(firstHalf[char]);
                break; //forgot this first time around
            }
        }
    }
    return priorityLetter;
}

function setPriority(array) {
    let chunk = array;
    let priority = [];
    for (item in chunk) {
        let i = chunk[item];
        if (i == 'a') priority.push(1);
        else if (i == 'b') priority.push(2);
        else if (i == 'c') priority.push(3);
        else if (i == 'd') priority.push(4);
        else if (i == 'e') priority.push(5);
        else if (i == 'f') priority.push(6);
        else if (i == 'g') priority.push(7);
        else if (i == 'h') priority.push(8);
        else if (i == 'i') priority.push(9);
        else if (i == 'j') priority.push(10);
        else if (i == 'k') priority.push(11);
        else if (i == 'l') priority.push(12);
        else if (i == 'm') priority.push(13);
        else if (i == 'n') priority.push(14);
        else if (i == 'o') priority.push(15);
        else if (i == 'p') priority.push(16);
        else if (i == 'q') priority.push(17);
        else if (i == 'r') priority.push(18);
        else if (i == 's') priority.push(19);
        else if (i == 't') priority.push(20);
        else if (i == 'u') priority.push(21);
        else if (i == 'v') priority.push(22);
        else if (i == 'w') priority.push(23);
        else if (i == 'x') priority.push(24);
        else if (i == 'y') priority.push(25);
        else if (i == 'z') priority.push(26);
        else if (i == 'A') priority.push(27);
        else if (i == 'B') priority.push(28);
        else if (i == 'C') priority.push(29);
        else if (i == 'D') priority.push(30);
        else if (i == 'E') priority.push(31);
        else if (i == 'F') priority.push(32);
        else if (i == 'G') priority.push(33);
        else if (i == 'H') priority.push(34);
        else if (i == 'I') priority.push(35);
        else if (i == 'J') priority.push(36);
        else if (i == 'K') priority.push(37);
        else if (i == 'L') priority.push(38);
        else if (i == 'M') priority.push(39);
        else if (i == 'N') priority.push(40);
        else if (i == 'O') priority.push(41);
        else if (i == 'P') priority.push(42);
        else if (i == 'Q') priority.push(43);
        else if (i == 'R') priority.push(44);
        else if (i == 'S') priority.push(45);
        else if (i == 'T') priority.push(46);
        else if (i == 'U') priority.push(47);
        else if (i == 'V') priority.push(48);
        else if (i == 'W') priority.push(49);
        else if (i == 'X') priority.push(50);
        else if (i == 'Y') priority.push(51);
        else if (i == 'Z') priority.push(52); 
    }
    return (priority);
}

function sumPriority(array) {
    let chunk = array;
    let sum = 0;
    for (item in chunk) {
        sum += chunk[item];
    }
    return sum;
}

console.log(sumPriority(setPriority(findPriorityLetters()))); //correct answer 7845
/*Part 1, first attempt got 10438, too high,
 *correct answer was 7845, forgot a break in my for/if */

 /*Part 2, looking at 3 lines at a time, find the matching character,
 that's your priority number, sum those.*/

function findBadge() {
    let array = readFile();
    let priorityLetter = [];

    for (let item = 0; item in array; item += 3) {
        
        let x = array[item];
        let y = array[item + 1];
        let z = array[item + 2];

        for (char in x) {
            let letter = x[char];
            if (y.includes(letter) && z.includes(letter)) {
                priorityLetter.push(letter);
                break;
            }
        }
    }
    return priorityLetter;
}
console.log(sumPriority(setPriority(findBadge()))); //first attempt 4034 too high
//correct answer to part to is 2790