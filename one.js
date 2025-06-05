/*Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
Examples

minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]


All test arrays will have at least one element and are valid.*/

///////////////////////////////////////////////////////////////////////

/*
function minMax(myList) {
  for (let i = 0; i < myList.length; i++) {
    var maxNum = Math.max(...myList);
    var minNum = Math.min(...myList);
  }
  console.log(minNum, maxNum);
}
let arr = [1, 2, 3, 4, 5];
minMax(arr);
*/

////////////////////////////////////////////////////////////////////////

function minMax(myList) {
  var min = myList[0];
  var max = myList[0];
  for (let i = 1; i < myList.length; i++) {
    if (myList[i] < min) {
      min = myList[i];
    }
    if (myList[i] > max) {
      max = myList[i];
    }
  }
  console.log(min, max);
}
let arr = [6, 2, 3, 4, 5];
minMax(arr);
