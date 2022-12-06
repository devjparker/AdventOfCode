/* This one will be a little more difficult
to format the original "stacks". Once we get that,
moving the items from stack to stack should be
easier. Goal output is the top item from each "stack".*/

function getDirections() {
    const path = require('path');
    const fs = require('fs');

    const input = fs
	    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	    .toString()
	    .trim()
	    .split('\n')
        .slice(10);

    let directions = [];
    for (item in input) {
        let i = input[item];
        let temp = [];
        if (i[6] == ' ') {
            temp.push(parseInt(i.slice(5,6)));
            temp.push(parseInt(i.slice(12,13)));
            temp.push(parseInt(i.slice(17)));
        } else {
            temp.push(parseInt(i.slice(5,7)));
            temp.push(parseInt(i.slice(13,14)));
            temp.push(parseInt(i.slice(18)));
        }
        directions.push(temp);
        
    }

    return directions;
} 

function flipArray(array) {
    let backwardsTempArray = [];
    let length = array.length - 1;
    for (length; length >= 0; length--) {
        backwardsTempArray.push(array[length]);
    }
    return backwardsTempArray;
}

let stackOne = [];
let stackTwo = [];
let stackThree = [];
let stackFour = [];
let stackFive = [];
let stackSix = [];
let stackSeven = [];
let stackEight = [];
let stackNine = [];

function getStacks() {
    const path = require('path');
    const fs = require('fs');

    const input = fs
	    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	    .toString()
	    .split('\n')
        .slice(0,8);
    
    let temp1 = [];
    let temp2 = [];
    let temp3 = [];
    let temp4 = [];
    let temp5 = [];
    let temp6 = [];
    let temp7 = [];
    let temp8 = [];
    let temp9 = [];
    for (item in input) {
        let temp = input[item];
        if (temp[1] != ' ' && temp[1] != '[' && temp[1] != ']') {
            temp1.push(temp[1]);
        }
        if (temp[5] != ' ' && temp[5] != '[' && temp[5] != ']') {
            temp2.push(temp[5]);
        }
        if (temp[9] != ' ' && temp[9] != '[' && temp[9] != ']') {
            temp3.push(temp[9]);
        }
        if (temp[13] != ' ' && temp[13] != '[' && temp[13] != ']') {
            temp4.push(temp[13]);
        }
        if (temp[17] != ' ' && temp[17] != '[' && temp[17] != ']') {
            temp5.push(temp[17]);
        }
        if (temp[21] != ' ' && temp[21] != '[' && temp[21] != ']') {
            temp6.push(temp[21]);
        }
        if (temp[25] != ' ' && temp[25] != '[' && temp[25] != ']') {
            temp7.push(temp[25]);
        }
        if (temp[29] != ' ' && temp[29] != '[' && temp[29] != ']') {
            temp8.push(temp[29]);
        }
        if (temp[33] != ' ' && temp[33] != '[' && temp[33] != ']') {
            temp9.push(temp[33]);
        }
    }

    stackOne = flipArray(temp1);
    stackTwo = flipArray(temp2);
    stackThree = flipArray(temp3);
    stackFour = flipArray(temp4);
    stackFive = flipArray(temp5);
    stackSix = flipArray(temp6);
    stackSeven = flipArray(temp7);
    stackEight = flipArray(temp8);
    stackNine = flipArray(temp9);
}


function moveStacks(part) {
    getStacks();
    let directions = getDirections();
    let tempArray = [];

    for (array in directions) {
        let temp = directions[array];
        tempArray = sliceArray(part, temp[0], temp[1]);
        addToArray(tempArray, temp[2]);
        removeFromArray(temp[0], temp[1]);
        
    }
    console.log(stackOne, '\n', stackTwo, '\n', stackThree, '\n',stackFour, 
    '\n', stackFive, '\n', stackSix, '\n', stackSeven, '\n', stackEight, '\n', stackNine);

    let one = stackOne[stackOne.length-1];
    let two = stackTwo[stackTwo.length-1];
    let three = stackThree[stackThree.length-1];
    let four = stackFour[stackFour.length-1];
    let five = stackFive[stackFive.length-1];
    let six = stackSix[stackSix.length-1];
    let seven = stackSeven[stackSeven.length-1];
    let eight = stackEight[stackEight.length-1];
    let nine = stackNine[stackNine.length-1];

    console.log(one + two + three + four + five + six + seven + eight + nine);
}
function sliceArray(part, numToMove, integer) {
    let tempArray = [];
    if (integer == 1) {
        tempArray = stackOne.slice((numToMove)*(-1))
    } else if (integer == 2) {
        tempArray = stackTwo.slice((numToMove)*(-1))
    } else if (integer == 3) {
        tempArray = stackThree.slice((numToMove)*(-1))
    } else if (integer == 4) {
        tempArray = stackFour.slice((numToMove)*(-1))
    } else if (integer == 5) {
        tempArray = stackFive.slice((numToMove)*(-1))
    } else if (integer == 6) {
        tempArray = stackSix.slice((numToMove)*(-1))
    } else if (integer == 7) {
        tempArray = stackSeven.slice((numToMove)*(-1))
    } else if (integer == 8) {
        tempArray = stackEight.slice((numToMove)*(-1))
    } else if (integer == 9) {
        tempArray = stackNine.slice((numToMove)*(-1))
    }
    if (part == 1) return flipArray(tempArray);
    else if(part == 2) return tempArray;
}

function addToArray(array, stackTo) {
    if (stackTo == 1) {
        for (item in array) {
            stackOne.push(array[item]);
        }
    } else if (stackTo == 2) {
        for (item in array) {
            stackTwo.push(array[item]);
        }
    } else if (stackTo == 3) {
        for (item in array) {
            stackThree.push(array[item]);
        }
    } else if (stackTo == 4) {
        for (item in array) {
            stackFour.push(array[item]);
        }
    } else if (stackTo == 5) {
        for (item in array) {
            stackFive.push(array[item]);
        }
    } else if (stackTo == 6) {
        for (item in array) {
            stackSix.push(array[item]);
        }
    } else if (stackTo == 7) {
        for (item in array) {
            stackSeven.push(array[item]);
        }
    } else if (stackTo == 8) {
        for (item in array) {
            stackEight.push(array[item]);
        }
    } else if (stackTo == 9) {
        for (item in array) {
            stackNine.push(array[item]);
        }
    }
}

function removeFromArray(numToMove, arrayNum) {
    if (arrayNum == 1) {
        stackOne = stackOne.slice(0, stackOne.length - numToMove);
    } else if (arrayNum == 2) {
        stackTwo = stackTwo.slice(0, stackTwo.length - numToMove);
    } else if (arrayNum == 3) {
        stackThree = stackThree.slice(0, stackThree.length - numToMove);
    } else if (arrayNum == 4) {
        stackFour = stackFour.slice(0, stackFour.length - numToMove);
    } else if (arrayNum == 5) {
        stackFive = stackFive.slice(0, stackFive.length - numToMove);
    } else if (arrayNum == 6) {
        stackSix = stackSix.slice(0, stackSix.length - numToMove);
    } else if (arrayNum == 7) {
        stackSeven = stackSeven.slice(0, stackSeven.length - numToMove);
    } else if (arrayNum == 8) {
        stackEight = stackEight.slice(0, stackEight.length - numToMove);
    } else if (arrayNum == 9) {
        stackNine = stackNine.slice(0, stackNine.length - numToMove);
    }
}

moveStacks(1); //correct answer BSDMQFLSP
moveStacks(2); //correct answer PGSQBFLDP

/* First attempt was PGSQBFLDP, incorrect.
I realize now that I kept the substring order, 
whereas I need to move the crates one at a time
like the towers of hanoi.
Second attempt my backwards tempArray didn't get to index 0
so I had SSSSLLLLQ, incorrect
Third attempt BSDMQFLSP, correct

//part two, it seems I first solved part two, so let's try my first answer
PGSQBFLDP is the correct answer for part two
*/