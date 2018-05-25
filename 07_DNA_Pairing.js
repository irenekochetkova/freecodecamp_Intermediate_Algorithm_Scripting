
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

//     Array.prototype.push()

//     String.prototype.split()
// ***********************************************

function pairElement(str) {
  var letters = str.split("");
  var pairsArray = [];
  var pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }

  for (var key of letters) {
    pairsArray.push([key, pairs[key]]);
  }
  return pairsArray;
}

pairElement("GCG");

// ***********************************************

function pairElement(str) {
  var pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };

  return str.split("").map(function(el) {
    return [el, pairs[el]];
  });
}

pairElement("GCG");

// *************************************************

function pairElement(str) {
  var DNApairs = [];
  var letters = str.split("");
  
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] === "C") {
      DNApair.push([letters[i], "G"]);
    } else if (letters[i] === "G") {
      DNApair.push([letters[i], "C"]);
    }
      else if (letters[i] === "A") {
      DNApair.push([letters[i], "T"]);
    } else if (letters[i] === "T") {
      DNApair.push([letters[i], "A"]);
    } 
  }

  return DNApair;
}

pairElement("GCG");
// *************************************************