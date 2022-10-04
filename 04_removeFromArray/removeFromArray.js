const removeFromArray = function(array, toRemove) {
    
    let clensedArray = array;
    for (i = 1; i < arguments.length; i++){
        let filterQuery = arguments[i]; 
        clensedArray = clensedArray.filter(x => x !== filterQuery);
    }
    return clensedArray;


};
let array1 = [1, 2, 3, 4, 5, 6, 7, 8];

    //get an argument specifically from here
    (arguments[0]);
    (arguments[2]);
    //get the last argument passed into the function, no matter how many there were. 
    (arguments[(arguments.length -1)]);


let filteredArray = array1.filter(x => x > 3);
//Take array and iterate through each item of it
    //See if each item of the array is === to the args passed in
    //make sure function can remove multiple args
console.log(filteredArray);

// Do not edit below this line
module.exports = removeFromArray;
