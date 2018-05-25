// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

//     String.prototype.charCodeAt()

//     String.fromCharCode()
// *****************************************************

function fearNotLetter(str) {
  for (var i = 0; i < str.length - 1; i++) {
    var unicode = str.charCodeAt(i) - str.charCodeAt(i + 1);
    if ( unicode !== -1) {
      var missLetter = String.fromCharCode(str.charCodeAt(i) + 1);
      return missLetter;
    }
  }
}

console.log(fearNotLetter("abce"));