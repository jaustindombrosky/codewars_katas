//In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string

//example: 'This Is A Test' will return 'TIAT'
//7kyu

function makeString(s){
    var bac = []
    var sArr = s.split(" ");
    var i = 0;
    while(i < sArr.length){
      bac.push(sArr[i][0]);
      i ++;
    }
    var answer = '';
    i=0;
    while(i < bac.length){
      answer += bac [i];
      i ++;
    }
    return answer;
  }