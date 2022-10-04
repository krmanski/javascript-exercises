const reverseString = function(stringToReverse) {
    //First we need to ensure the user passed in something and that it is a string
    if (stringToReverse == undefined) return "ERROR";
    const rawString = String(stringToReverse);
    let shrinkingString = rawString;
    let reversed = '';

    for (let i = 0; i < rawString.length; i++){
        let nextCharacter = shrinkingString.charAt(shrinkingString.length - 1);
        reversed += nextCharacter;
        //the old string now must be one letter shorter from the end.
        shrinkingString = shrinkingString.slice(0, -1);
        //temporary readout to test code
        // console.log(reversed);
        // console.log(nextCharacter);
        // console.log(shrinkingString);
    }
    return reversed;
    //remove last element of a string and append it as the next element in a blank string
};

// Do not edit below this line
module.exports = reverseString;
