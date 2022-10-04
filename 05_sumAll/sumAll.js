const sumAll = function(numberA, numberB) {
    if ((numberA < 0) || (numberB < 0)) return "ERROR";
    if (!(Number.isInteger(numberA)) || !(Number.isInteger(numberB))) return "ERROR";
    const bigNum = Math.max(numberA, numberB);
    const smallNum = Math.min(numberA, numberB);
    console.log(`the small number is ${smallNum} and the big number is ${bigNum}`)
};




// PASS THESE TESTSS
// 'works with large numbers'
// DONE works with larger number first' 
// DONE returns ERROR with negative numbers'
// DONE returns ERROR with non-number parameters'

// Do not edit below this line
module.exports = sumAll;
