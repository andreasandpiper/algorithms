function oneAway(str){
	if(str.length === 0){
		return; 
	}
	var result = []
	var count = 1; 
	var currentLetter = str[0];
	
	for(var i = 1; i < str.length ; i++){
		if(str[i] === currentLetter){
			count ++;
		} else {
			result.push(`${currentLetter}${count}`);
			currentLetter = str[i];
			count = 1; 
		}
	}
	
	result.push(`${currentLetter}${count}`);
	
	return result.join(""); 
}


var result = oneAway('aabcccccaaa');
console.log(result);
