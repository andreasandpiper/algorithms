class LinkedList {
  constructor(value){
    this.head = {
      value, 
      next: null
    }

    this.length = 1; 
  }
  
  addToHead(value) {
  	const newNode = { value }
  	newNode.next = this.head; 
  	this.head = newNode; 
  	this.length++
  	return this; 
  }
  
  removeFromHead(){
  	if(this.length ===0 ){
  		return undefined
  	}
  	
  	const value = this.head.value;
  	this.head = this.head.next; 
  	this.length --
  	
  	return value; 
  }
  
  findValue(value){
  	let thisNode = this.head; 
  	
  	while(thisNode){
  		if(thisNode.value == value){
  			return thisNode
  		}
  		
  		thisNode = thisNode.next
  	}
  	return thisNode; 
  	
  }
  
  removeValue(value){
  	 if(this.length === 0) {
        return undefined;
    }
    
    if (this.head.value === value) {
        this.removeFromHead();
        return this;
    }
    
  	let thisNode = this.head; 
  	
  	while(thisNode){
  		if(thisNode.next.value === value){
  			break;
  		}
  	}
  	
  	thisNode.next = thisNode.next.next; 
  	this.length--; 
  	return this;
  }
}

var list = new LinkedList("sup")
list.addToHead("yooo")
list.addToHead("hiii")
list.addToHead("1")
list.addToHead("2")

list.removeValue("2")
list.removeValue("1")
list.addToHead("3")

console.log(list)
