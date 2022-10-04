const leapYears = function(year) {
    if (!Number.isInteger(year)) return "ERROR";
    if (year % 4 !== 0) return false;
    if ((year % 100 == 0) && (year % 400 != 0)) return false;
    else return true;
};



//to test
// 'works with non century years'
// 'works with ridiculously futuristic non century years'
// 'works with century years'



// Do not edit below this line
module.exports = leapYears;
