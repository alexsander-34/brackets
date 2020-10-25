module.exports = function check(str, bracketsConfig) {
  // your solution
  let string =str;
  let bra = bracketsConfig.map(function (element) {
    return element.join('');
  });
  let brackets = bra ;
  for (let j =0 ;j < bra.length;j++){
    j=j+1;
  }
  for (let i = 0; i < brackets.length; i++) {
    if(string.includes(brackets[i])) {
      string = string.replace(brackets[i], "");
      i = -1;
    }
  }
  if (string) {
    return false;
  } 
  else {
    return true;
  }
}
