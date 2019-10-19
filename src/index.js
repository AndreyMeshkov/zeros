module.exports = function zeros(expression) {
  // your solution
  let array = expression.split("*");
  let result = 0;
  let numberTwo = 0;
  let numberFive = 0;
  
    for (var i = 0; i < array.length; i++);{
      var partArray = array[i];
  
      if (partArray.indexOf("!!") > -1) {
      stepFactorial = 2;
      valueFactorial = + partArray.slice(0,-2);
    } else {
      stepFactorial = 1;
      valueFactorial = + partArray.slice(0,-1);
    }
    if (stepFactorial === 1) {
      for (let j = 1 ; j <= valueFactorial ; j++) {
      if (j % 2 === 0) { 
        numberTwo++
      }
      if (j % 5 === 0) {
        numberFive++
      }
      
      }
    }
    if (stepFactorial === 2) {
      if (valueFactorial % 2 === 0) {
        for(let k = 2; k <= valueFactorial; k += 2) {
          if (k % 2 === 0) { 
            numberTwo++
          }
        }
      }
      else {
        for(let l = 1; l <= valueFactorial; l += 2) {
          if (l % 5 === 0) {
            numberFive++
        }
      }
    }
  }
}
result += Math.min(numberTwo, numberFive);
return result;
}

function newFunction(partArray) {
  return partArray.indexOf("!!") > -1;
}
