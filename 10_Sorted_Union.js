// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

//     Arguments object

//     Array.prototype.reduce()
// *******************************************************************

function uniteUnique(arr) {
  var newArray = [].concat.apply([], arguments);
  var result = newArray.reduce((accumulator, current) => {
    
    if (accumulator.indexOf(current) === -1) {
       accumulator.push(current);
    }
    return accumulator;
  }, []);

  return result;
 
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
