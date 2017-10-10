// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if  (obj === null) {
    return 'null';
  } else if (typeof obj === 'function') {
    return undefined; 
  } else if (obj === undefined) {
    return undefined; 
  } else if (typeof obj === 'string') {
    return '"' + obj + '"'; 
  } else if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      var empty = ''; 
      for (var i = 0; i < obj.length; i++) {
        if (i !== obj.length - 1) {
          if (obj[i] === undefined) {
            return '[]'; 
          } else {
            empty += stringifyJSON(obj[i]) + ','; 
          }
        } else {
          if (obj[i] === undefined) {
            return '[]'; 
          } else {
            empty += stringifyJSON(obj[i]); 
          }
        }
      }
      return '[' + empty + ']';
    } else {
      empty = ''; 
      var keys = Object.keys(obj); 
      for (var i = 0; i < keys.length; i++) {
        if (i !== keys.length - 1) {
          if ((stringifyJSON(keys[i]) === undefined) || (stringifyJSON(obj[keys[i]]) === undefined)) {
            return '{}'; 
          } else {  
            empty += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]) + ','; 
          }
        } else {
          if ((stringifyJSON(keys[i]) === undefined) || (stringifyJSON(obj[keys[i]]) === undefined)) {
            return '{}'; 
          } else {
            empty += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]); 
          }
        }
      }
      return '{' + empty + '}'; 
    }
  } else if (obj === NaN){
    return undefined; 
  } else {
    return obj.toString(); 
  }
};
