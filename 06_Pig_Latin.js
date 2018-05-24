// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

//     Array.prototype.indexOf()

//     Array.prototype.push()

//     Array.prototype.join()

//     String.prototype.substr()

//     String.prototype.split()
// *************************************************************

function translatePigLatin(str) {
  var vowels = "aouie";
  
  if (vowels.indexOf(str[0]) > -1 ) {
      return str + "way";
    }
  

  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) > -1) {
      return str.substr(i) + str.substr(0, i) + "ay";
    }
  }

  return str;
}