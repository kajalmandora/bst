const BinarySearchTree = function(){
    const Node = function(key){
      this.key = key,
      this.left = null,
      this.right = null
    }
    
    let root = null;
    
    let insertNode = function(node, newNode){
      //If new value is less than the current 
      if(newNode.key < node.key){
        //If left is empty 
        if(node.left === null){
          node.left = newNode;
        }else{
          //Check for descendants
          insertNode(node.left, newNode);
        }
      }else{
        if(node.right === null){
          //If right is empty 
          node.right = newNode;
        }else{
          //Check for descendants
          insertNode(node.right, newNode);
        }
      }
    }
    
    this.insert = function(key) {
      let newNode = new Node(key);
      //If no root then add at root
      if(root == null){
        root = newNode;
      }else{
        //Find the appropriate place to insert the new node
        insertNode(root, newNode);
      }
    }
    
    this.search = (key, node = root) => {
      //If no element then return false
      if(node === null){
        return false;
      }
      
      //Else recursively check if the key is present at any descendants
      if(key < node.key){
        //Check the left descendants
        return this.search(key, node.left);
      }else if(key > node.key){
        //Check the right descendants
        return this.search(key, node.right);
      }else{
        return true;
      }
    }
    
    this.min = (node = root) => {
      if(node){
        //Return the left most descendant's value
        while(node && node.left !== null){
          node = node.left;
        }
        
        return node.key
      }
      
      return null;
    }
    
    this.max = (node = root) => {
      if(node){
        //Return the right most descendant's value
        while(node && node.right !== null){
          node = node.right;
        }
        
        return node.key
      }
      
      return null;
    }
    
    
  }
 
const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(250);



console.log(tree.min());
console.log(tree.max());
console.log(tree.search(18));


//3
//25
//false