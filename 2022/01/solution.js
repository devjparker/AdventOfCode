function readFile(){
    const path = require('path');
    const fs = require('fs');

    const input = fs
	    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	    .toString()
	    .trim()
	    .split('\n\n');

    return input;
}    

//console.log(input);
function makeSumsArray(){

    const input = readFile();

    var sums = [];
    var sum = 0;

    for (i in input) {
        let temp = input[i].split('\n');
        //console.log(temp);
        for (let j = 0; j < temp.length; j++) {
            //console.log(temp[j]);
            sum += parseInt(temp[j]);
        }
        //console.log(sum);
        sums.push(sum);
        sum = 0;
        //console.log(sums);
    }
    return sums;
}

function findMax(array) {
    var answer = array[0];
    var answerIndex = 0;
    //array[112] = 0;
    //array[123] = 0;
    //console.log(answer);
    for (let i = 0; i < array.length; i++) {
        if (answer < array[i]) {
            answer = array[i];
        }
    }
    
    console.log(answer);
    return answer;
}

function partOne() {
    findMax(makeSumsArray());
}

function partTwo() {
    var ans1 = 0;
    var ans2 = 0;
    var ans3 = 0;
    var answerIndex = 0;

    var array = makeSumsArray();
    ans1 = findMax(array);
    answerIndex = array.indexOf(ans1);

    array[answerIndex] = 0;

    ans2 = findMax(array);
    answerIndex = array.indexOf(ans2);

    array[answerIndex] = 0;

    ans3 = findMax(array);
    answerIndex = array.indexOf(ans3);

    array[answerIndex] = 0;

    console.log(ans1 + ans2 + ans3);
}
partOne(); //correct answer 71124
partTwo(); //204639