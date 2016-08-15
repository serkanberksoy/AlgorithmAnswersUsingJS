var definition = `
PROBLEM 4 - Largest palindrome product
https://projecteuler.net/problem=4

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
`;

console.log(definition);

function checkPalindromNumber(i, j){
	var numStr = (i * j) + '';
	for(i = 0; i < numStr.length; i++){
		if(numStr[i] != numStr[numStr.length - 1 - i]){
			return false;
		}
	}
	
	return true;
}

function calculate(place) {	
	var max = Math.pow(10, place) - 1;
	var min = Math.pow(10, place - 1);
	
	var result;
	
	outerLoop:
	for(var i = max; i >= min; i--){
		innerLoop:
		for(var j = max; j >= min; j--){
			
			if ((result / j) > 999 || j*j < result || i*i < result) {
            	break innerLoop;
        	} 
			
			if(checkPalindromNumber(i,j)){
				if(result === undefined){
					result = i * j;
				} else {
					if(result < i * j){
						result = i * j;
					}
				}				
			}
		} 
	}
  
	return result;
}

function run(){
  console.log(calculate(2));
  console.log(calculate(3));  
}

exports.run = function(){run();}
