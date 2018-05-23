// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

//     Comparison Operators

//     Array.prototype.slice()

//     Array.prototype.filter()

//     Array.prototype.indexOf()

//     Array.prototype.concat()

// *******************************************************************

function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2); // this concatenates arr1 and arr2;
  var sortedArr = newArr.sort(); // this sorts in ascending order;
  var newArray = []; // this initializes an empty array to hold the elements;

// use loop to go through every element of the sortedArr; 
  for (var i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== sortedArr[i + 1] && sortedArr[i] !== sortedArr[i - 1]) { // this compaires every element of the array to define symmetric difference
      newArray.push(sortedArr[i]); 
    }
  }
  
return newArray;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));