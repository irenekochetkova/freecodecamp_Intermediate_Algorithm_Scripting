// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

//     Remainder
// ******************************************************

function sumFibs(num) {
  var arr = [1, 1];
  var sum = 2;
     
  for (var i = 0; i <= num; i++) {
    var currentEl = arr[arr.length - 1];
    var prevEl = arr[arr.length - 2];
    var fibNum = prevEl + currentEl;
    if (fibNum <= num)  {
      arr.push(fibNum);
    } else {
      break;
    }   
    if (fibNum % 2 !== 0) {
      sum += fibNum;
    }
  }

  return sum;
}

console.log(sumFibs(4));
console.log(sumFibs(1000));