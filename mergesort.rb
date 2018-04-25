def merge(array)
	if array.length < 2 
		return array
	else 
		middle = array.length/2
		left = array[0..(middle - 1)]
		right = array[middle..-1]
		mergeSort(merge(left), merge(right))
	end 
end 

def mergeSort(left, right)
	sorted = []
	while !left.empty? && !right.empty?
		if left[0] < right[0]
			sorted.push(left.shift)
		else 
			sorted.push(right.shift)
		end 
	end 
	sorted + right + left
end 

merge([6,25, 4, 99, 9,5,1, 20, 50, 10, 17])