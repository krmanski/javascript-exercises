const findTheOldest = function(array) {
    return array.reduce((oldestSoFar, currentPerson) =>{
        //get numbers out of these objects and process them into 2 numbers that can be compared.
        let oldestAgeSoFar = oldestSoFar.yearOfDeath - oldestSoFar.yearOfBirth;
        let currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        //compare the 2 ages. The if-statement sends the OBJECT of the older person to the next function to be compared against the next. 
        return oldestAgeSoFar < currentPersonAge ? currentPerson : oldestSoFar;
},)
};

function calculateAge(birthYear, deathYear){
    return deathYear - birthYear;
    
}
//itterate through the array to pluck the birht and death year from each
//use reduce()
//default death year to current date if no death year
//return answer as an object


const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1945,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


let x = findTheOldest(people)


// Do not edit below this line
// module.exports = findTheOldest;
