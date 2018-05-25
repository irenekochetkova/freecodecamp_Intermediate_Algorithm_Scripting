function fearNotLetter(str) {
  for (var i = 0; i < str.length - 1; i++) {
    var unicode = str.charCodeAt(i) - str.charCodeAt(i + 1);
    if ( unicode !== -1) {
      var missLetter = String.fromCharCode(str.charCodeAt(i) + 1);
      return missLetter;
    }
  }
}

console.log(fearNotLetter("abcde"));