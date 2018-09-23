//Sum All Numbers in a Range
// Basic Solution
// ex) [3,1] && [1,4]

function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);

    var temp = 0;
    for (var i = min; i <= max; i++) {
        temp += i;
    }
    return temp;
}

console.log(sumAll([3,1]));
console.log(sumAll([1,4]));