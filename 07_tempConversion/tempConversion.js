const ftoc = function(tempF) {
  //makes sure the user provided an integer
  if (!Number.isInteger(tempF)) return "ERROR";
  let answer = (tempF - 32) * (5 / 9);
  //rounds the number to one decimal place for readability. 
  answer = Math.round(answer * 10) / 10;

  //test line
  console.log(answer);
};

//PASS THESE TESTS
// 'math works'
// 'rounds to 1 decimal'
// 'works with negatives'

const ctof = function() {

};


//PASS THESE TESTS
// 'math works'
// 'rounds to 1 decimal'
// 'works with negatives'

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
