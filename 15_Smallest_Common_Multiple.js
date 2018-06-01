// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
// *************************************************************************************************

function smallestCommons(arr) {
  var smallest = 0;
  var loop = 1;
  var newArr = getArr(arr);

  var i = 0;
  while (i < newArr.length) {
    smallest = newArr[0] * loop * newArr[1];// this line of code was from Basic Code Solution FreeCodeCamp;
    for (i = 2; i < newArr.length; i++) {
      if (smallest % newArr[i] !== 0) {
        break;
      }
    }
  loop++;
  } 

  return smallest;
}


function getArr(arr) {
  var sortedArr = arr.sort(function(a, b) {
    return a - b;
  });
  console.log(sortedArr);
  var max = sortedArr[1];
  var min = sortedArr[0];
  var newArr = [];

  for (var i = min; i <= max; i++) {
    newArr.push(i);
  }

  return newArr;  
}


console.log(getArr([5,1]));
console.log(getArr([23,18]));