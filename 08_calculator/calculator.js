const add = function(addend1, addend2) {
	return addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
	return (minuend - subtrahend);
};

const sum = function(array) {
	let sumTotal = array.reduce((total, arrayItem) =>{
    console.log(total, arrayItem);
    return total + arrayItem;

  }, 0);

  return sumTotal;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
