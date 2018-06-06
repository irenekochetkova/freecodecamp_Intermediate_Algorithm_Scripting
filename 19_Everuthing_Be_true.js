// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
// *******************************************************************************************************************

function truthCheck(collection, pre) {
  for (var i = 0; i < collection.length; i++) {
    var obj = collection[i];
    for (var key in obj) {
      var value = obj[key];
      if (!obj[pre]) {      
        return false;
      }
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");