//1.手写函数柯里化
function curry(func) {
  //此处补全
  const length = func.length;
  let savedArgs = [];
  function fn(...args) {
    savedArgs = [...savedArgs, ...args];
    if(savedArgs.length >= length) {
      const result =  func(...savedArgs);
      savedArgs = [];
      return result;
    }
    return  fn
  }
  return fn;
}
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying


