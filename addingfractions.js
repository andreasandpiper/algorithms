function GCD(num1, num2){
	//this will exceed stack call if one of the numbers is prime
	var maxNum = num1; 
	var multiple = 2; 
	
  	while(maxNum % num2 !== 0){
  		maxNum = multiple * num1; 
  		multiple++;
  	}
  	return maxNum; 
  }


function addFractions(str){
  var fractions = str.split("+");
  var rightFraction = fractions[0].split("/")
  var leftFraction = fractions[1].split("/")
  
  var gcd = GCD(Math.max(rightFraction[1], leftFraction[1]), Math.min(rightFraction[1], leftFraction[1]))
  
  var rightNumerator = (gcd / rightFraction[1] ) * rightFraction[0];
  var leftNumerator = (gcd / leftFraction[1]) * leftFraction[0]; 
  
  var numerator = rightNumerator + leftNumerator; 

  var result = simplify(numerator, gcd)
	return result; 

}

function simplify(num, denom){
	var minNum = Math.min(num, denom);
	
	while(minNum > 1){
		if(num % minNum === 0 && denom % minNum === 0){
			num = num / minNum;
			denom = denom / minNum;
			simplify(num, denom);
		}
		minNum--; 
	}
	return(num + "/" + denom);
}


var result = addFractions("9/10+1/6");
console.log(result)