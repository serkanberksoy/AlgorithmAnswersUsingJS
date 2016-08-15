var definition = `
PROBLEM 2 - Largest prime factor
https://projecteuler.net/problem=3

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
`;

console.log(definition);

function checkPrime(num){
  var result = true;
  
  for(var i = 2; i < num; i++){
    if(num % i === 0){
      result = false;
      break;
    }
  }
  
  return result;
}

function bruteForce(num) {
    var maxPrime = 0;
    
     var y = 0;
    var i = parseInt(num / 2);
    while(i--){            
      if(num % i === 0){        
        
      if(y++ % 100 === 0){console.log(i)}
      
        if(checkPrime(i)){
          maxPrime = i;
          break;
        }
      }
    }

    return maxPrime;
}


/*
http://www.mathblog.dk/project-euler-problem-3/
We can use the Fundamental Theorem of Arithmetic which states:
Any integer greater than 1 is either a prime number, 
or can be written as a unique product of prime numbers(ignoring the order).

const long numm = 600851475143;
long newnumm = numm;
long largestFact = 0;
 
int counter = 2;
while (counter * counter <= newnumm) {
    if (newnumm % counter == 0) {
        newnumm = newnumm / counter;
        largestFact = counter;
    } else {
        counter++;
    }
}
if (newnumm > largestFact) { // the remainder is a prime number
    largestFact = newnumm;
}
*/

function largestprime(n) {
	var i = 2;
  
	while(i <= n) {
    	if (n % i === 0) {
      		n /= i;
    	} else {
      		i++;
    	}
  	}
  
	return i;
}

function run(){
  console.log(largestprime(13195));
  console.log(largestprime(600851475143));  
}

exports.run= function(){run();}

