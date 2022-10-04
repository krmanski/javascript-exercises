const sumAll = function(numberA, numberB) {
    //ensures that the arguments are positive and integers. 
    if ((numberA < 0) || (numberB < 0)) return "ERROR";
    if (!(Number.isInteger(numberA)) || !(Number.isInteger(numberB))) return "ERROR";
    //makes sure that it doesn't matter weather the bigger number is the first or second arg
    const bigNum = Math.max(numberA, numberB);
    const smallNum = Math.min(numberA, numberB);
    let sum = 0;
    
    for (i = smallNum; i < bigNum; i++){
        sum += i;
        console.log(`adding ${i} to ${sum}`)
    }
    return sum;

    //test line
    // console.log(`the small number is ${smallNum} and the big number is ${bigNum}`);
};




// PASS THESE TESTSS
// 'works with large numbers'
// DONE works with larger number first' 
// DONE returns ERROR with negative numbers'
// DONE returns ERROR with non-number parameters'

// Do not edit below this line
module.exports = sumAll;
