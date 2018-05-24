// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

//     Math.max()

//     Math.min()

//     Array.prototype.reduce()
// *************************************************************

function sumAll(arr) {
  var max = Math.max(...arr); // this gets the largest number in the array;
  var min = Math.min(...arr); // this gets the lowest number in the array;

// need to create an array of all elements between and including largest and lowest numbers;

  var array = []; // this initializes an empty array to hold the elements;

  var i = min; // this initializes a variable and sets it equal to the lowest element of the arr;

  while (i <= max) { // use while loop and while i is less than or equal to the highest element in the arr;
    array.push(i); // push i to the array;
    i++; // this increments i;
  } // end while loop;
  
  return array.reduce((accumulator, currentValue) => accumulator + currentValue); // use reduce method to apply a function against an accumulator and each element in the array (from lowest number to largest number) to reduce it to a single value; 

}

sumAll([1, 4]);
// ========================================================

