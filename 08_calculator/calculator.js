const add = function(addend1, addend2) {
	return addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
	return (minuend - subtrahend);
};

const sum = function(array) {
	let sumTotal = array.reduce((total, arrayItem) =>{
    
    return total + arrayItem;

  }, 0);

  return sumTotal;
};

const multiply = function(array) {
	let sumTotal = array.reduce((total, arrayItem) =>{
    //iterrates over every item in the array and multiplies it by a running total.
    return total * arrayItem;
    //the initial value of this reduce() function must actually start at 1 instead of 0 because we are multiplying. Else everything would be 0. 
  }, 1);

  return sumTotal;
};

const power = function(base, exponent) {
  //makes an array with as many slots as the power. 
  //then fill puts the base number in each slot. So 4^3 would make a [4,4,4] array.
  let arrayToX = Array(exponent).fill(base);
  let product = multiply(arrayToX);
  return product;
};

const factorial = function(factor) {
	if (factor < 0) return "ERROR";
  if (factor === 0) return 1;
  let arrayToX = []
  for (let i = factor; i > 0; i--){
    console.log(i);
    arrayToX.push(i);
    console.log(arrayToX);
  }
  let product = multiply(arrayToX);
  return product;  

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
