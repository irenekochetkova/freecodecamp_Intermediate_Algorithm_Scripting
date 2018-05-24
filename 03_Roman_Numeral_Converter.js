// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

//     Roman Numerals

//     Array.prototype.splice()

//     Array.prototype.indexOf()

//     Array.prototype.join()

function convertToRoman(num) {
  var obj = {M:1000, CM:900, DCCC:800, DCC:700, DC:600, D:500, CD:400, CCC:300, CC:200, C:100, XC:90, LXXX:80, LXX:70,  LX:60, L:50, XL:40, XXX:30, XX:20, X:10, IX:9, VIII:8, VII:7, VI:6, V:5, IV:4, III:3, II:2, I:1} // initialize variable to the object;
  var roman = ''; // initialize variable to the empty string;

  for (var key in obj) {
    while(num >= obj[key]) { // while the num variable is greater than or equal to the current  value of property;
     roman += key; // Add its equivalent roman numeral to original empty string.
     num -= obj[key]; // Make num equal to num less the value of property;
    }
  }

  return roman;
}


console.log(convertToRoman(36));
