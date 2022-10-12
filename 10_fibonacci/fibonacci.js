const fibonacci = function(number) {
    let n = parseInt(number);
    
    if (n < 0) return "OOPS";

    let fib = [0];
    
    for(let i = 1; i <= n; i++){
        if (fib.length < 2){
            fib.push(1);
            // console.log(fib);
        } else {
            let addend1 = fib[fib.length -1];
            let addend2 = fib[fib.length -2];
            let step = addend1 + addend2;
            // console.log(`${addend1} + ${addend2}`);
            fib.push(step);
            // console.log(fib);
        }
        
    }

    let answer = (fib[fib.length -1]);
    return answer;


};



//return that n of fibonacci





// Do not edit below this line
module.exports = fibonacci;
