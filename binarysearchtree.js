class Node {
  constructor(value){
      this.value = value, 
      this.right = null, 
      this.left = null
    }
}

class BinarySearchTree {
	constructor(array){
		this.tree = this.createTree(array);
	}
	
	createTree(array){
		if(array.length === 0){
			return; 
		}
		var middle = parseInt(array.length/2);

		this.root = new Node(array[middle]);
		this.root.left = buildTree(array.slice(0, middle));
		this.root.right = buildTree(array.slice(middle + 1));
		
		function buildTree(array){
			if (array.length < 2){
				return new Node(array[0]); 
			}
			var middle = parseInt(array.length/2);
			var left = array.slice(0,middle);
			var right = array.slice(middle + 1);
	
			var nextRoot = new Node(array[middle])
			nextRoot.right = buildTree(right);
			nextRoot.left = buildTree(left);
			return nextRoot; 
		}

		return this; 
	}
	
}

BinarySearchTree.prototype.find = function(value){
	var currentNode = this.root; 
	
	while(currentNode){
		if(value === currentNode.value){
			return true; 
		} else if (value > currentNode.value) {
			if(currentNode.right){
				currentNode = currentNode.right
			} else {
				return false; 
			}
			
		} else {
			if(currentNode.left){
				currentNode = currentNode.left
			} else {
				return false; 
			}
		}
	}
	
	
}

BinarySearchTree.prototype.push = function(value){
	var currentNode = this.root; 
	
	while(currentNode){
		if(value < currentNode.value){
			if(currentNode.left){
				currentNode = currentNode.left;
			} else {
				currentNode.left = new Node(value);
				return currentNode.left; 
			}
		} else if (value > currentNode.value) {
			if(currentNode.right){
				currentNode = currentNode.right;
			} else {
				currentNode.right = new Node(value);
				return currentNode.right
			}
		} else {
			return undefined; 
		}
	}
	
}

var values = [1,2, 3, 4]
var tree = new BinarySearchTree(values);
tree.push(5)
tree.find(5)
