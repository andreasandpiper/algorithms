
function mergeSort(array){
	
	if(array.length < 2){
		return array
	} else {
		var middle = parseInt(array.length/2);
		var left = array.slice(0, middle)
		var right = array.slice(middle, array.length)
		return merge(mergeSort(left), mergeSort(right)); 
	}
}

function merge(a1, a2){
	var sortedArray = []
	while(a1.length > 0 && a2.length > 0){

		if(a2[0] <=a1[0]){
			sortedArray.push(a2.shift())
		} else {
			sortedArray.push(a1.shift())
		}
	}
	sortedArray = sortedArray.concat(a1)
	sortedArray = sortedArray.concat(a2)
	return sortedArray;
}


mergeSort([6,9,2,3,10,22,100,5,24])