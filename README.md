# everyday-algorithms
每日手写 及 算法 
 
- 算法目标：10分钟之内运行完成
- 手写目标：5分钟运行完成

doc：整理文档
solv：解题

> 提示：适应一下没有代码提示的编辑器！！！


#### Day1

1.手写算法
https://leetcode-cn.com/problems/add-to-array-form-of-integer/


```javascript
//  时间复杂度： O(max(n,logk)) 
funciton resolve(num, k) {
  const len = num.length;
  let i = len - 1;
  const result = []
  while(i >= 0) {
    const sum = num[i] + k % 10;
    result.push(sum % 10);
    k = Math.floor(k / 10);
    if(sum >= 10) {
      k++;
    }
    i--;
  }
  while(k) {
    result.push(k % 10);
    k = Math.floor(k / 10);
  }
  return result.reverse();
}

```

2.编程题
```
//1.手写函数柯里化
function curry(func) {
  //此处补全
}
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

alert(curriedSum(1, 2, 3)); // 6, still callable normally
alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
alert(curriedSum(1)(2)(3)); // 6, full currying

```

### Day2

1.手写算法
https://leetcode-cn.com/problems/shortest-distance-to-a-character

2.编程题
实现symbol polyfill
//题解：如果浏览器不支持情况下 写出让代码让浏览器支持symbol





### Day3

- 3月30日：做题时间未达标，第一题15m，由于没有代码提示，导致没有发现API错误；第二题，10m中内做题失败，代码冗余，代码水平太差


1.编程题：https://bigfrontend.dev/zh/problem/implement-Promise-allSettled

```javascript

/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
  if(!Array.isArray(promises)) {
    throw Error("invalid array");
  }
  if(promises.length == 0) {
    return Promise.resolve([])
  }
  let count = 0;
  const len = promises.length;
  // your code here
  const result = new Array(len);
  return new Promise(resolve => {
    promises.forEach((promise, i) => {
      Promise.resolve(promise).then(
        res => {
          result[i] = {
            status: "fulfilled",
            value: res
          };
        } ,
        error=> {
          result[i] = {
            status: "rejected",
            reason: error
          };
         
        }
      ).finally(() => {
          count++;
          if(count === len) {
            resolve(result);
          }
      })
    })
  })
  
}

```

2.算法题：https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/

```javascript
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    const m = num.length;
    let i = m -1;
    const result = [];
    while(i>=0) {
        const sum = num[i] +  k % 10;
        result.push(sum % 10);
        k = Math.floor(k / 10);
        if(sum >= 10) k++
        i--;
    }
    while(k) {
        result.push(k % 10);
        k = Math.floor(k / 10)
    }
    return result.reverse()
    
};
```