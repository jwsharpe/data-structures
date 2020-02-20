var isValid = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("hi");
    } else {
      if (stack.length) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (!stack.length) {
    return true;
  } else {
    return false;
  }
};

console.log(isValid("()()("));
