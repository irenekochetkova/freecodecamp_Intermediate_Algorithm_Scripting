// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

//     Array.prototype.splice()

//     String.prototype.replace()

//     Array.prototype.join()

// *********************************************************************
function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) { // this checks if the first character of before is capital
    after = after.replace(after[0], after[0].toUpperCase()); //if the first character of before is capital then the first character of after is replaced a capital
  }
  return str.replace(before, after);// return string where the before word is replaced with the after word
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
