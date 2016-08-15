var definition = `
PROBLEM 1
https://projecteuler.net/problem=1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
`;


console.log(definition);

function calculate(i) {
    var result = 0;
    
    while(i--){
        if(i % 3 === 0 || i % 5 === 0){
            result += i;
        }
    }

    return result;
}

function run(){
  console.log(calculate(10));
  console.log(calculate(1000));  
}

exports.run= function(){run();}
