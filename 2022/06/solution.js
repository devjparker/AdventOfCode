function readFile(){
    const path = require('path');
    const fs = require('fs');

    const input = fs
	    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	    .toString()
	    .trim()
	    .split('');

    return input;
} 
console.log(readFile());

function findUniqueChunk(part) {
    let input = readFile();
    let finalInput = 0;
    for (char in input) {
        let index = parseInt(char);
        let a = input[index];
        let b = input[index+1];
        let c = input[index+2];
        let d = input[index+3];
        let e = input[index+4];
        let f = input[index+5];
        let g = input[index+6];
        let h = input[index+7];
        let i = input[index+8];
        let j = input[index+9];
        let k = input[index+10];
        let l = input[index+11];
        let m = input[index+12];
        let n = input[index+13];

        let partOne = a == b || a == c || a == d || b == c || b == d || c == d;
        let partTwoA = a == b || a == c || a == d || a == e || a == f || a == g || a == h || a == i || a == j || a == k || a == l || a == m || a == n;
        let partTwoB = b == c || b == d || b == e || b == f || b == g || b == h || b == i || b == j || b == k || b == l || b == m || b == n;
        let partTwoC = c == d || c == e || c == f || c == g || c == h || c == i || c == j || c == k || c == l || c == m || c == n;
        let partTwoD = d == e || d == f || d == g || d == h || d == i || d == j || d == k || d == l || d == m || d == n;
        let partTwoE = e == f || e == g || e == h || e == i || e == j || e == k || e == l || e == m || e == n;
        let partTwoF = f == g || f == h || f == i || f == j || f == k || f == l || f == m || f == n;
        let partTwoG = g == h || g == i || g == j || g == k || g == l || g == m || g == n;
        let partTwoH = h == i || h == j || h == k || h == l || h == m || h == n;
        let partTwoI = i == j || i == k || i == l || i == m || i == n;
        let partTwoJ = j == k || j == l || j == m || j == n;
        let partTwoK = k == l || k == m || k == n;
        let partTwoL = l == m || l == n;
        let partTwoM = m == n;
        let partTwo = partTwoA || partTwoB || partTwoC || partTwoD || partTwoE || partTwoF || partTwoG || partTwoH || partTwoI || partTwoJ || partTwoK || partTwoL || partTwoM;
        if (part == 1) {
            if (!partOne) {
                console.log('match part one');
                finalInput = index + 4;
                    break;
                }
        } else if(part == 2) {
            if (!partTwo) {
                console.log('match part two');
                finalInput = index + 14;
                    break;
                }
        }
    }
    return finalInput;
}
console.log(findUniqueChunk(1)); //1896 correct answer
console.log(findUniqueChunk(2)); //3452 correct answer