// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

//     RegExp

//     String.prototype.replace()

function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase(); // Meanings: "\s" - white space, "_" - low line, "?=[A-Z]" - matches a hyphen if the hyphen appears as the first or last character enclosed in the square brackets.
}

spinalCase('This Is Spinal Tap');