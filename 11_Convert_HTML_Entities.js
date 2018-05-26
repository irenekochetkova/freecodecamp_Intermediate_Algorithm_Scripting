// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

//     RegExp

//     HTML Entities

//     String.prototype.replace()
// ****************************************************

function convertHTML(str) {
  var chars = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':"&apos;"
    };
    
    var newStr =  str.replace(/[&<>"']/g, function(match) {
      return chars[match]
    });

  return newStr;
}