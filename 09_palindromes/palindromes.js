const punc = /[!,-./:;<=>?@[\]^_`{|}~]/g;
const palindromes = function (string) {
    //make the arg an array if it is not already
    if ((typeof string) != 'string')  return "ERROR. Please only use a string."  
    const upperCaseString = string.toUpperCase();
    const processedString = upperCaseString.replace(punc,"");
    
    const transArray = Array.from(processedString);
    
    const newArray = []
    //take each item from the rear of the array and add to new array
    for (i = transArray.length; i > 0; i--){
        let letter = transArray.pop();
        newArray.push(letter);
        // console.log(letter, transArray, newArray);
    }
    let reversedString = newArray.join("");
    
    if (processedString == reversedString){
        return true;
    } else if (processedString != reversedString){
        return false;
    }

}








// Do not edit below this line
module.exports = palindromes;
