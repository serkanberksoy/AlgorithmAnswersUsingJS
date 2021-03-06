var definition = `
PROBLEM 2 - Even Fibonacci numbers
https://projecteuler.net/problem=2

Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
find the sum of the even-valued terms.
`;

console.log(definition);

function fibonacci(n) {
   return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2);
}

function calculate(max) {
    var result = 0;
    
    for(var i = 2; i < max; i++){
      var f = fibonacci(i);
      
      if(f > 4000000) break;
      
      if(f % 2 === 0){
        result += f;
      }
    }

    return result;
}

function run(){
  console.log(calculate(10000000));
  //console.log(calculate(1000));  
}

exports.run= function(){run();}
