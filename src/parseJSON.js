// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var digits = '0123456789';
  if (json === 'null') {
    return null; 
  } else if (json === 'true') {
    return true; 
  } else if (json === 'false') {
    return false; 
  } else if (json.slice(0, 1) === '"') {
    var empty = ''; 
    var dup = json.slice(); 
    for (var i = 1; i < json.length - 1; i++) {
      empty += dup.slice(i, (i + 1));
    } 
    return empty; 
  } else if (digits.includes(json.slice(0, 1))) {
    return Number(json); 
  } else if (json.slice(0, 1) === '[') {
    var parsedArr = [];
    
  }
};
