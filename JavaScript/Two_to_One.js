//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
//each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
//a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```
//7kyu

function longest(s1, s2) {
    s1 = s1.split("");
    s2 = s2.split("");
    var nstring = s1.concat(s2);
    nstring = nstring.sort();
    var result = [];
    for(var i = 0; i<nstring.length; i++){
      if(result.indexOf(nstring[i])===-1){
        result.push(nstring[i]);
        }
      }
      result = result.join("");
      return result; 
  }