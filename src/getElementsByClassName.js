// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var matches = []; 
  var getMatches = function(item) {
    if ((item.classList !== undefined) && (item.classList.contains(className))) {
      matches.push(item); 
    } 
    if (item.hasChildNodes()) {
      for (var i = 0; i < item.childNodes.length; i++) {
        getMatches(item.childNodes[i]); 
      }
    }
    return matches; 
  };
  return getMatches(document.body); 
};


