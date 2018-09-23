// Difference Two Arrays
// Advanced Solution Part 2
// ex) [1,2,3,5,7] & [1,2,3,4,5,8,9]

function diffArray(arr1, arr2) {
   var newArr = [];

   // concatenate the two arrays and sort the items in growing order

   var ordArr = arr1.concat(arr2).sort();

   // Loop through the ordered array and push to the empty newArr
   // not a twin the ordered arr (only items that are not equal to the previous nor to the next item)
   for (var i =0; i< ordArr.length; i++) {
       if (ordArr[i] !== ordArr[i+1] && ordArr[i] !== ordArr[i-1]) {
        newArr.push(ordArr[i])
       }
   }
   return newArr;
 }
 
 console.log(diffArray([1,2,3,5,7], [1,2,3,4,5,8,9]))