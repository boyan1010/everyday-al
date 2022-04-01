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

### Day4

- 3月31日：
  - 手写题：（12分钟）手写关于a、b都为0时，使用===无法区分，借助js中除数为0时不会抛出异常，对结果进行比较，-Infinity !== Infinity 不同（Object.is特别注意0及NaN的判断）
  - 算法题：毁灭吧，思路都知道，就是写不出来。
    - 测试通过，但是代码逻辑不清晰，解题过程中，部分逻辑混乱，比如数字的获取与push字符及'['的先后选项 -- 代码水平不高
    - 需要再复习

1.手写题：https://bigfrontend.dev/zh/problem/implement-Object.is

```javascript
function is(a, b) {
  // your code here
  if(Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }
  if(a === 0 && b === 0) {
    return 1 / a === 1 / b;
  }
  return a === b;
}
```

2.算法题：https://leetcode-cn.com/problems/decode-string/

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const len = s.length;
    let i = 0;
    const stack = [];
    let num = "";
    while(i < len) {
        const c = s[i];
        if(c === ']') {
            let char = stack.pop();
            let str = "";
            while(char !== '[') {
                str = char + str;
                char = stack.pop();
            }
            const n = stack.pop();
            str = str.repeat(n);
            stack.push(str);
        } else if(isNumber(c)) {
            num += c;
        } else {
             if(num) {
                stack.push(Number(num));
                num = "";
            }
            stack.push(c);
        }
        i++;
    }
    return stack.join("");
};

function isNumber(c) {
    return !Number.isNaN(Number(c));
}
```

### Day5手写 
1.算法题：https://leetcode-cn.com/problems/implement-queue-using-stacks/

```javascript
var MyQueue = function() {
    // 队首出队stack
    this._de = [];
    // 入队stack
    this._en = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this._en.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this._de.length == 0) {
        this._mv();
    }
    return this._de.pop();
};
MyQueue.prototype._mv = function() {
    while(this._en.length) {
        this._de.push(this._en.pop())
    }
    console.log(this._de, this._en)
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    const result = this.pop();
    this._de.push(result);
    return result;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this._de.length === 0 && this._en.length === 0;
};

```
2.手写题：https://bigfrontend.dev/zh/problem/the-angle-between-hour-hand-and-minute-hand-of-a-clock

```javascript

/**
 * @param {string} time
 * @returns {number} 
 */
const MINUTE = 60;
const HOUR = 12;
const ANGLE = 360;
const EVERY_HOUR_ANGLE = 360 / 12;
function angle(time) {
  // your code here
  // 分针的角度
  // 12:15
  const [h, m] = time.split(":");
  const ma = Math.abs(m / MINUTE * ANGLE);
  const hour = h % HOUR;
  const ha = (hour + m / MINUTE) * EVERY_HOUR_ANGLE ;
  const angle = Math.abs(ma - ha);
  return Math.round(Math.min(angle, ANGLE - angle))
}
const time = "01:00";
console.log(angle(time));
```