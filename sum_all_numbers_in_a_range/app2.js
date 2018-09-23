//Sum All Numbers in a Range
// Basic Solution
// ex) [3,1] && [1,4]

function sumAll(arr) {
    // buckle up everything to one!
    // Using ES6 arrow function (one-line)
    arr.sort((a,b) => a-b);
    var [firstNum, lastNum] = arr
   // Using Arithmetic Progression Summing Formula
   var sum = (lastNum - firstNum +1) * (firstNum + lastNum) / 2; 
    return sum;
}

console.log(sumAll([3,1]));
console.log(sumAll([1,4]));