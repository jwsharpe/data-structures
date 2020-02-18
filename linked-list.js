//Creating an node!
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

const HEAD = new Node("1", new Node("2", new Node("4", new Node("5"))));

console.log(HEAD);

//Reversing of a linked list
let node = HEAD;
let rev = null;
while (node) {
  rev = new Node(node.data, rev);
  node = node.next;
}
console.log(rev);
console.log(HEAD);
