// const repeatString = function(text, number) {
//     let repeatedString = '';
//     repetant = text
//     for (let i = number; i < 3; i++){
//         repeatedString += repetant;
//         return repeatedString;
//     }
// };



function repeatString(text, number) {
    if (number < 0 ) return "ERROR";
    let repeatedString = '';
    let repetant = text
    for (let i = 0; i < number; i++){
        repeatedString += repetant;
        
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
