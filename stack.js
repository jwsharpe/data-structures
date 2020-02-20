class Stack {
  constructor(arr) {
    this.arr = arr;
  }
  pop() {
    return this.arr.pop();
  }
  push(ele) {
    return this.arr.push(ele);
  }
}

const STK = new Stack([1, 2, 3]);

STK.push(5);
console.log(STK);
