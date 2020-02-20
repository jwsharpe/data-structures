class Node {
  constructor(data, children) {
    this.data = data;
    this.children = children;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.children = [b, c, d];
d.children = [e, f];
//              a
//          b   c   d
//                 e  f

const dfs = HEAD => {
  const stack = [];
  stack.push(HEAD);
  let node = HEAD;
  while (stack.length) {
    node = stack.pop();
    console.log("dfs", node.data, stack.length);
    if (node.children) {
      node.children.forEach(child => {
        stack.push(child);
      });
    }
  }
};

const bfs = HEAD => {
  const queue = [];
  queue.push(HEAD);
  let node = HEAD;
  while (queue.length) {
    node = queue.shift();
    console.log("bfs", node.data, queue.length);
    if (node.children) {
      node.children.forEach(child => {
        queue.push(child);
      });
    }
  }
};

bfs(a);
