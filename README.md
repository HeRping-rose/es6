# es6



![image-20250701095220324](C:\Users\EDY\AppData\Roaming\Typora\typora-user-images\image-20250701095220324.png)

![image-20250701164357140](C:\Users\EDY\AppData\Roaming\Typora\typora-user-images\image-20250701164357140.png)

![image-20250701164422050](C:\Users\EDY\AppData\Roaming\Typora\typora-user-images\image-20250701164422050.png)

# **一. ES6特性：属性动态访问、空值合并运算符和扩展运算符,****var** **关键字的作用域特性**

`const obj = {studentName : 'zs' , age :20} // console.log('name',  obj.studentName); let temp  = 'studentName'; // obj.studentName console.log(obj[temp]) //es6 ?? //只能处理null 和undefined //0 flash '' let value1; let value2 = 2; const a = value1 ?? value2 console.log('a',a) // ... 扩展运算符 const arr1 = [1,2,3,4,5]; // 浅拷贝 const arr2 = [...arr1]; console.log(Math.max(...arr1))`

## **-----输出总结----**

运行完整代码会按顺序输出：

zs       // obj[temp] a 2      // value1 ?? value2 5        // Math.max(...arr1)

## **1.** **属性动态访问**

const obj = {studentName: 'zs', age: 20}; let temp = 'studentName'; console.log(obj[temp]); // 输出：zs

- **方括号语法** **obj[temp]** 允许通过变量动态访问对象属性。
- 此处 **temp** 的值是 **'studentName'**，因此 **obj[temp]** 等价于 **obj.studentName**（输出 **'zs'**）。

## **2.** **空值合并运算符 (****??****)**

let value1; // undefined let value2 = 2; const a = value1 ?? value2; console.log('a', a); // 输出：a 2

- **??** **的作用**：当左侧值为 **null** 或 **undefined** 时，返回右侧值；否则返回左侧值。
- **关键点**：**??** 只针对 **null/undefined**，**不处理其他假值**（如 **0**、**''**、**false**）：

console.log(0 ?? 2);     // 输出：0（0不是null/undefined） console.log('' ?? 2);    // 输出：''（空字符串不是null/undefined） console.log(null ?? 2);  // 输出：2 console.log(undefined ?? 2); // 输出：2

- **与** **||** **的区别**：逻辑或 **||** 会对所有假值（**0**、**''**、**false**、**null**、**undefined**）返回右侧值。

### **2.1 混合使用时的注意事项**

#### **❌ 禁止直接混合**

const value = a || b ?? c  // 语法错误！

JavaScript 引擎无法确定优先级，会直接抛出语法错误。

#### **✅ 正确写法（使用括号分组）**

const value = (a || b) ?? c

- **执行顺序**：

1. 1. 先计算 **(a || b)**
   2. 将结果用于 **?? c**

### **2.2 为什么需要括号？**

- **运算符优先级问题**：

- - **||** 优先级为 6
  - **??** 优先级为 5（比 **||** 低）

- 不加括号时，引擎会尝试解析为 **a || (b ?? c)**，但语法规范明确禁止这种写法

### **2.3关键区别总结**

| 场景               | ?? (空值合并)          |     || (逻辑或)        | |--------------------|-----------------------|-----------------------| | null               |  返回右侧值            | 返回右侧值             | | undefined          | 返回右侧值             | 返回右侧值             | | 0                  | 返回 0                 | 返回右侧值            | | '' (空字符串)       | 返回 ''               | 返回右侧值             | | false              | 返回 false            | 返回右侧值             |

## **3.** **扩展运算符 (****...****)与****var** **关键字的作用域特性**

## **3.** **扩展运算符 (****...****)与****var** **关键字的作用域特性**

//合并 const arr3 = [1,2]; const arr4 = [3,4]; const arr5 = [...arr3,...arr4]; // console.log('arr5', arr5); //合并对象 const obj1 = {name: 'zs', age: 20}; const obj2 = {sex: 'male', height: 170}; const obj3 = {...obj1,...obj2}; // console.log(obj3) const str = 'hello'; const strArr = [...str]; console.log(strArr);

### **-----举个例-----**

const arr1 = [1, 2, 3, 4, 5]; const arr2 = [...arr1];      // 浅拷贝数组 console.log(Math.max(...arr1)); // 输出：5

- **浅拷贝数组**：**[...arr1]** 创建 **arr1** 的副本（新数组），修改 **arr2** 不会影响 **arr1**。
- **展开数组为参数**：**Math.max(...arr1)** 等价于 **Math.max(1, 2, 3, 4, 5)**，将数组元素展开为单独参数。	

### **3.1 扩展运算符 (****...****) 的应用**

#### **(1) 合并数组**

const arr3 = [1, 2]; const arr4 = [3, 4]; const arr5 = [...arr3, ...arr4]; // [1, 2, 3, 4]

- 等同于 **arr3.concat(arr4)**
- **浅拷贝**：新数组与原数组无引用关系

#### **(2) 合并对象**

const obj1 = {name: 'zs', age: 20}; const obj2 = {sex: 'male', height: 170}; const obj3 = {...obj1, ...obj2};  // {name: 'zs', age:20, sex:'male', height:170}

- **同名属性覆盖**：后合并的对象属性会覆盖前者
- **浅拷贝**：新对象与原对象无引用关系

#### **(3) 字符串转数组**

const str = 'hello'; const strArr = [...str]; // ['h','e','l','l','o']

- 等同于 **str.split('')**
- 利用了字符串的 **可迭代性**

### **3.2** **var** **关键字的作用域特性**

// var // 声明全局变量 var globalVar = 10; function test(){        console.log(globalVar); // 这里访问了全局变量 } test() // var 声明函数作用域 function example(){    if(true){        var functionVar = 20;    }    console.log(functionVar) } console.log(globalVar) // console.log(functionVar);

####  **输出结果分析**

test();             // 输出：10 example();          // 输出：20 console.log(globalVar); // 输出：10

**完整输出顺序**：

10                     // test() 访问全局变量 20                     // example() 内部访问函数作用域变量 10                     // 全局作用域访问 globalVar

#### **(1) 全局作用域**

var globalVar = 10; function test(){    console.log(globalVar); // 10（访问全局变量） } test();

- **var** 在全局作用域声明时，会创建 **全局对象属性**（浏览器中可通过 **window.globalVar** 访问）

#### **(2) 函数作用域（无块级作用域！）**

function example(){    if(true){        var functionVar = 20; // 实际作用域是整个函数    }    console.log(functionVar); // 20（在if块外可访问） } example();

- **变量提升**：**var** 声明会被提升到函数顶部
- **无块级作用域**：在 **if/for** 等块中声明的变量会泄露到函数作用域

#### **(3) 外部访问报错**

console.log(functionVar); // ReferenceError（函数作用域外不可访问）

- **functionVar** 的作用域仅限于 **example** 函数内部

### **3.3 关键区别：****var** **vs** **let/const**

| 特性         | **var**                   | **let/const**(ES6)    |
| ------------ | ------------------------- | --------------------- |
| 作用域       | 函数作用域                | 块级作用域            |
| 全局声明     | 成为全局对象属性          | 不在全局对象上        |
| 变量提升     | 声明提升（值为undefined） | 提升但不初始化（TDZ） |
| 重复声明     | 允许                      | 禁止                  |
| 循环中的表现 | 最后一次赋值              | 每次迭代新绑定        |

### **3.4 为什么避免使用** **var****？**

1. **变量泄露**：容易意外污染外部作用域

for(var i=0; i<5; i++){} console.log(i); // 5（泄露到外部）

1. **重复声明**：可能导致逻辑错误

var x = 10; var x = 20; // 无警告覆盖值

1. **理解成本高**：提升机制容易导致代码阅读困难

💡 现代开发中，优先使用 **const**（常量）和 **let**（变量），仅在需要兼容旧环境时使用 **var**。

## 

# **二. 变量提升****、****全局变量覆盖****、****事件循环机制** **和** **块级作用域** **等核心 JavaScript 概念**

// 变量提升 (hoisting) // 用var声明的变量会被提升到作用域的顶部，所以在变量声明之前就可以访问它，此时的变量的值为undefined console.log(x); var x = 5; console.log('x',x) console.log('------') //-------------- var x; console.log(x); x = 5; console.log('x',x)  //全局变量覆盖 var name = 'zs'; var name = 'ls'; console.log(name)   // JS事件机制 （event loop） console.log('start'); //异步 setTimeout(()=>{        console.log('timeOut') },2000) console.log('end') //先打印'start','end',2秒后再打印'timeOut'  // es6 块级变量 let cosnt {} {        let a = 10;        var b = 1; } // console.log('a',a) // 只能拿到 b 的值 console.log('b',b)  for(let i = 0; i < 3; i++){        console.log('i',i); } // console.log('i',i) var a = []; for(let i = 0;i<10 ; i++){        a[i] = function(){                console.log(i);        } } a[i]()

### **-----完整输出结果-----**

undefined    // console.log(x) 提升 x 5          // 赋值后 ------       // 分隔线 ls           // 全局变量覆盖 start        // 同步任务 end          // 同步任务 b 1          // var 变量泄露 i 0          // for循环 i 1 i 2 6            // a[6]() 调用 timeOut      // 2秒后（异步回调）

## **1. 变量提升（Hoisting）**

### **1.1 什么是变量提升？**

在 JavaScript 中，使用 **var** 声明的变量会经历"提升"过程：声明部分被移动到作用域顶部，但赋值操作保留在原位置。

console.log(x); // undefined - 变量已声明但未赋值 var x = 5; console.log('x', x); // x 5 - 变量已赋值

实际执行过程：

var x;          // 声明提升到作用域顶部（初始值为 undefined） console.log(x); // 输出 undefined x = 5;          // 赋值操作 console.log('x', x); // 输出 x 5

### **1.2 函数声明 vs 函数表达式**

// 函数声明 - 整体提升 sayHello(); // 正常工作 function sayHello() {    console.log("Hello!"); } // 函数表达式 - 只有变量声明提升 sayHi(); // TypeError: sayHi is not a function var sayHi = function() {    console.log("Hi!"); };

## **2. 全局变量覆盖问题**

### **2.1 var 的全局特性**

var name = 'zs';     // 全局变量 var name = 'ls';     // 重复声明 - 覆盖前一个值 console.log(name);   // 输出 'ls' // 成为 window 对象的属性 console.log(window.name === 'ls'); // 在浏览器中输出 true

### **2.2 为什么避免使用 var？**

1. **重复声明无警告**：容易导致命名冲突
2. **全局污染**：意外创建全局变量
3. **作用域问题**：没有块级作用域

## **3. JavaScript 事件循环机制（Event Loop）**

### **3.1 单线程与异步处理**

JavaScript 是单线程语言，通过事件循环机制处理异步操作：

console.log('start'); // 同步任务 // 异步任务 - 放入任务队列 setTimeout(() => {    console.log('timeOut') // 2秒后执行 }, 2000); console.log('end'); // 同步任务

#### **执行顺序**

1. 同步任务：**'start'** → **'end'**
2. 异步任务：2秒后执行 **'timeOut'**

### **3.2 宏任务 vs 微任务**

| 类型       | 示例                           | 执行优先级 |
| ---------- | ------------------------------ | ---------- |
| **微任务** | Promise.then, process.nextTick | 高         |
| **宏任务** | setTimeout, setInterval        | 低         |

console.log('script start'); setTimeout(() => {    console.log('setTimeout'); }, 0); Promise.resolve().then(() => {    console.log('promise'); }); console.log('script end'); // 输出顺序: // script start // script end // promise // setTimeout

## **4. 块级作用域（ES6 let/const）**

### **4.1 let/const 的块级作用域**

{    let a = 10; // 块级作用域变量    var b = 1;  // 函数作用域变量 } console.log('b', b); // b 1 - 可以访问 console.log('a', a); // ReferenceError: a is not defined

### **4.2 for 循环中的块级作用域**

// 使用 let - 每次迭代创建新作用域 for(let i = 0; i < 3; i++) {    setTimeout(() => {        console.log(i); // 0, 1, 2    }, 100); } // 使用 var - 共享同一个变量 for(var j = 0; j < 3; j++) {    setTimeout(() => {        console.log(j); // 3, 3, 3    }, 100); }

#### **4.2.2**  **使用** **let** **的循环（输出 0, 1, 2）**  

- **块级作用域绑定**：**let** 在每次循环迭代时创建一个 **新的独立作用域**。每次迭代的 **i** 都是独立的变量副本，互不影响。

- **闭包捕获机制**：每个 **setTimeout** 回调函数捕获的是 **当次迭代的** **i**。回调执行时访问的是自己作用域内的 **i**。

**执行流程**：

| 迭代 | **i**的值 | 回调捕获的**i** |
| ---- | --------- | --------------- |
| 0    | **i=0**   | 独立的**i=0**   |
| 1    | **i=1**   | 独立的**i=1**   |
| 2    | **i=2**   | 独立的**i=2**   |

结果：回调输出各自捕获的值（0, 1, 2）。

#### **4.2.3**  **使用** **var** **的循环（输出 3, 3, 3）**

for(var j = 0; j < 3; j++) {  setTimeout(() => {    console.log(j); // 3, 3, 3  }, 100); }

- **函数作用域/全局作用域**：**var** 声明的 **j** **属于全局作用域**（或外层函数作用域），整个循环共享同一个 **j**。
- **异步执行问题**：循环执行完毕时 **j** 已递增到 **3**（**j=3** 时终止循环）。所有 **setTimeout** 回调共享最终的 **j=3**。

**执行流程**：

1. 循环同步执行：**j** 从 0 → 1 → 2 → 3（循环终止）。
2. 100ms 后回调执行：**所有回调访问同一个全局** **j****（值为 3）**。

结果：输出三个 **3**。

#### **4.2.4  关键差异总结**

| 特性         | **let**                    | **var**                  |
| ------------ | -------------------------- | ------------------------ |
| **作用域**   | 块级作用域（每次迭代独立） | 函数/全局作用域（共享）  |
| **变量绑定** | 每次迭代创建新变量         | 始终共享同一个变量       |
| **闭包捕获** | 捕获迭代时的瞬时值         | 捕获最终值（循环结束后） |
| **输出结果** | **0, 1, 2**                | **3, 3, 3**              |

#### **4.2.5  如何修复** **var** **的问题？**

使用 **IIFE（立即执行函数）** 创建独立作用域：

for(var j = 0; j < 3; j++) {  (function(j) { // 捕获当次 j 的值    setTimeout(() => {      console.log(j); // 0, 1, 2    }, 100);  })(j); // 传入当前 j }

原理：每次迭代通过 IIFE 创建一个新作用域，捕获当前的 **j** 值。

#### **4.2.6  结论**

- **let**：天然为循环迭代创建独立作用域，是解决异步回调捕获问题的标准方案。
- **var**：共享作用域导致回调访问最终值，需额外通过闭包隔离作用域。

## **5. 闭包与作用域链**

### **5.1 闭包的本质**

闭包是指函数能够访问并记住其词法作用域，即使该函数在其词法作用域之外执行。

var a = []; for(let i = 0; i < 10; i++) {    a[i] = function() {        console.log(i);    } } a[6](); // 输出 6

### **5.2 执行原理**

1. 使用 **let** 时，每次循环都会创建**新的块级作用域**
2. 每个函数闭包捕获的是**当次迭代的** **i** **值**
3. 调用 **a[6]()** 时输出创建该函数时的 **i** 值（6）

### **5.3 var 的问题**

var b = []; for(var j = 0; j < 10; j++) {    b[j] = function() {        console.log(j); // 所有函数共享同一个j    } } b[6](); // 输出 10（循环结束后的值）

## **6. 总结：var vs let/const**

| 特性             | **var**                   | **let/const**(ES6)    |
| ---------------- | ------------------------- | --------------------- |
| **作用域**       | 函数作用域                | 块级作用域            |
| **提升**         | 声明提升（值为undefined） | 提升但不初始化（TDZ） |
| **重复声明**     | 允许                      | 禁止                  |
| **全局声明**     | 成为window属性            | 不在window上          |
| **循环中的表现** | 共享同一个变量            | 每次迭代新绑定        |
| **闭包问题**     | 需要额外解决方案          | 自然解决              |
| **暂时性死区**   | 不存在                    | 存在                  |

**现代开发建议**：

1. 默认使用 **const**（优先）
2. 需要重新赋值时使用 **let**
3. 避免使用 **var**（除非特殊需求）
4. 使用块级作用域 **{}** 组织代码

理解这些核心概念是掌握 JavaScript 的关键，它们构成了语言的基础行为模式和工作原理。

# **三. JavaScript 作用域与声明进阶详解**

// 暂时性死区 (temporal dead zone： TDZ) // es6明确规定，如果区块中存在let或者const命令，则这个区域内这些命令声明的变量 // 从一开始就形成封闭的作用域，只要在声明之前使用这些变量，就会报错 var temp = 123; if(true) {        temp = 'abc'; // 死区开始        //其他代码                        let temp; // 死区结束 } function bar(x=y,y=2) {  return [x,y] }; bar() //es6规定暂时性死区 以及let和const不出现变量提升 主要是为了减少运行时的错误 function f() {  let a=10;  var a=2; } f();  function func(arg) {  let arg; } func();  // const 声明一个只读的变量，需要立即初始化，不能留在以后赋值 // 以下情况都会报错 const str = '' const PI = 3.1415926; PI = 3; const PI; // 用const定义的引用类型，不能改变其地址，但能改变其内部的值 const arr = []; arr[0] = 1;    //改变值 console.log('arr',arr); arr = [1,2,3]; //改变地址

## **1. 暂时性死区 (Temporal Dead Zone - TDZ)**

### **1.1 核心概念**

ES6 明确规定，在代码块中如果存在 **let** 或 **const** 声明，这些变量会形成**封闭作用域**。在变量声明之前访问这些变量会触发暂时性死区错误。

var temp = 123; if(true) {    // 死区开始    temp = 'abc'; // ReferenceError: Cannot access 'temp' before initialization    // 其他代码...        let temp; // 死区结束 }

### **1.2 TDZ 设计目的**

1. **防止意外错误**：强制开发者在声明后使用变量
2. **提高代码可读性**：避免隐式提升带来的混淆
3. **增强类型安全**：减少未初始化变量的使用

### **1.3 函数参数中的 TDZ**

function bar(x = y, y = 2) {    return [x, y]; } bar(); // ReferenceError: Cannot access 'y' before initialization

- 参数 **x** 的默认值 **y** 在 **y** 声明之前使用，触发 TDZ

## **2. 块级作用域与变量声明规则**

### **2.1 禁止重复声明**

function f() {    let a = 10;    var a = 2; // SyntaxError: Identifier 'a' has already been declared } function func(arg) {    let arg; // SyntaxError: Identifier 'arg' has already been declared }

### **2.2 不同作用域可重复声明**

function outer() {    let x = 1;        if(true) {        let x = 2; // 允许：不同块级作用域        console.log(x); // 2    }        console.log(x); // 1 }

## **3. const 声明详解**

### **3.1 基本规则**

1. **必须立即初始化**
2. **不能重新赋值**
3. **变量名不能重复**

// 有效声明 const PI = 3.1415926; // 无效声明 const NAME; // SyntaxError: Missing initializer in const declaration PI = 3;    // TypeError: Assignment to constant variable

### **3.2 引用类型的特殊行为**

const arr = []; arr[0] = 1;    // 允许：改变内容 console.log(arr); // [1] arr = [1,2,3]; // TypeError: Assignment to constant variable const obj = {name: 'zs'}; obj.age = 20;   // 允许：添加属性 obj.name = 'ls';// 允许：修改属性值

### **3.3 冻结对象防止修改**

const person = Object.freeze({    name: 'Alice',    address: {        city: 'Beijing'    } }); person.age = 30; // 静默失败（严格模式下报错） person.address.city = 'Shanghai'; // 嵌套对象仍可修改 // 深度冻结方案 function deepFreeze(obj) {    Object.freeze(obj);    Object.keys(obj).forEach(key => {        if (typeof obj[key] === 'object')             deepFreeze(obj[key]);    }); }

## **4. var vs let vs const 对比**

| 特性             | **var**        | **let**        | **const**      |
| ---------------- | -------------- | -------------- | -------------- |
| **作用域**       | 函数作用域     | 块级作用域     | 块级作用域     |
| **提升**         | 声明提升       | TDZ            | TDZ            |
| **重新赋值**     | 允许           | 允许           | **禁止**       |
| **重复声明**     | 允许           | 禁止           | 禁止           |
| **初始化要求**   | 不需要         | 不需要         | **必须初始化** |
| **全局属性**     | 成为window属性 | 不是window属性 | 不是window属性 |
| **循环变量**     | 共享           | 每次迭代独立   | 每次迭代独立   |
| **推荐使用场景** | 避免使用       | 循环计数器等   | 常量、配置项等 |

## **5. 最佳实践指南**

### **5.1 变量声明优先级**

1. **默认使用** **const**
2. 需要重新赋值时使用 **let**
3. **避免使用** **var**

### **5.2 代码示例**

// 好的实践 const MAX_SIZE = 100; const config = {apiUrl: 'https://api.example.com'}; for(let i = 0; i < MAX_SIZE; i++) {    // 使用let作为循环变量 } // 避免的实践 var temp = 10; // 避免var let shouldChange = true; // 应该使用const // 需要重新赋值时使用let let counter = 0; counter = processItems(items);

### **5.3 块级作用域组织代码**

// 使用IIFE模拟块级作用域 (ES5) (function() {    var privateVar = 'secret';    // ... })(); // ES6直接使用块 {    const privateVar = 'secret';    let tempValue = calculate();    // ... } // privateVar 和 tempValue 在此不可访问

## **6. 常见问题解决方案**

### **6.1 循环中的异步操作**

// 问题：使用var导致共享变量 for(var i = 0; i < 5; i++) {    setTimeout(() => console.log(i), 100); // 输出5个5 } // 解决方案1：使用let for(let j = 0; j < 5; j++) {    setTimeout(() => console.log(j), 100); // 0,1,2,3,4 } // 解决方案2：闭包 for(var k = 0; k < 5; k++) {    (function(index) {        setTimeout(() => console.log(index), 100);    })(k); }

### **6.2 常量对象修改防护**

const settings = Object.freeze({    apiKey: '12345-abcde',    maxRetries: 3 }); // 尝试修改 settings.maxRetries = 5; // 在严格模式下会报错 // 深度防护模式 const deepSettings = deepFreeze({    apiKey: '12345-abcde',    preferences: {        theme: 'dark',        notifications: true    } });

## **7.总结**

JavaScript 的作用域和变量声明规则经历了重大演变：

1. **TDZ 机制** 解决了变量提升带来的问题
2. **块级作用域** (**let**/**const**) 替代了函数作用域 (**var**)
3. **const 声明** 提供了真正的常量概念

现代 JavaScript 开发应遵循：

- 优先使用 **const** 声明不可变绑定
- 需要重新赋值时使用 **let**
- 完全避免使用 **var**
- 利用块级作用域组织代码逻辑
- 对需要保护的常量对象使用 **Object.freeze()**

这些实践能显著提高代码的可读性、可维护性，并减少潜在错误。

# **四.ES6 解构赋值全面解析**

解构赋值是 ES6 引入的强大特性，它允许我们按照特定模式从数组和对象中提取值并赋值给变量。下面我将详细解析解构赋值的各种用法和技巧。

// 解构：es6允许按照一定的模式从数组和对象中提取值，然后对变量进行赋值， //被称为结构。（Destructuring） let [a,b,c] = [1,2,3] let [d,e,f] = [4,5,6] console.log(a,b,c) // 嵌套 let [foo,[[bar], baz]] = [1,[[2],3]] console.log(foo,bar,baz) let[,,third] = ['a','b','c'] console.log(third) let[x, y] = [1,2,3] console.log(x,y) let [head, ...tail] = [1,2,3,4] console.log('head',head); console.log('tail',tail)  let[x,y, ...z] = ['a']; //如果解构不成功，变量的值为undefined console.log('x',x); //"x", "a" console.log('y',y); //"y", undefined console.log('z',z); //"z", [] let [foo] = []; console.log('foo',foo); //"foo", undefined // 不完全解构：等号左边的模式只匹配一部分等号右边的数组，解构依然是成功的 let [x,y] = [1,2,3]; console.log(x,y); //1, 2 //数组解构的核心是按照位置匹配，及数组下标 let [a,[b],d] = [1,[2,3],4]; console.log('b',b) //2 let [a,b,d] = [1,[2,3],4]; console.log('数组',b) //"数组", [2, 3]  // 默认值 let [foo = true] = []; console.log('foo',foo); // "foo", true let [x, y = 'b'] = ['a']; console.log(x, y) //"a", "b" let [x, y = 'b'] = ['a',undefined] console.log(x, y) // "a", "b" // 默认值可以引用解构赋值的其他变量，但是该变量已经声明 let [x = 1, y = x] = []; console.log(x,y) //1, 1 let [x = 1,y = x] = [2]; console.log(x,y) //2, 2 let [x = 1,y = x] = [1,2] console.log(x,y) //1, 2 let [x = y,y = 1] = [] console.log(x,y) //报错 未声明 let name = "zs" let age = 20 let obj = {  name,  age }; console.log('obj',obj)  //"obj", { //   age: 20, //   name: "zs" // } // 对象的解构赋值 let {foo, bar} = {foo: 'foo',bar: 'bar'} console.log(foo,bar) //"foo", "bar" let {baz} = {foo: 'aaa',bar: 'bbb'} console.log(baz) //undefined let {foo: baz} = {foo:'aaa',bar: 'bbb'} console.log(foo) //foo 不是变量，baz才是 let obj = {first:'hello', second: 'world'}; let {first: f,second: s} = obj; console.log(f,s); //"hello", "world" //对象的解构赋值内部机制是先找到同名属性，然后在赋值给对应的变量，真正被赋值的是后者，不是前者 let {foo: baz} = {foo: 'aaa',bar: 'bbb'} console.log('baz',baz) //"baz", "aaa"  let obj = {  p: ["hello", { y: "world" }], } // 解构将'hello','world'分别打印出来 let {  p: [x, { y: y }] } = obj console.log(x, y) //"hello", "world" let obj = {}; let arr = []; ({foo: obj.prop, bar: arr[0]} = {foo:123, bar:true}) console.log(obj) //{prop: 123} console.log(arr) //[true] // 对象的解构依然可以赋默认值 let {x = 3} = {}; console.log('x',x) //"x", 3 let {x, y = 5} = {x: 1}; console.log(x,y) //1, 5 let {message: msg = 'something went wrong'} = {}; console.log(msg); //"something went wrong" // 默认值生效的条件是，对象的属性值严格等于undefined let {x = 3} = {x : undefined} console.log(x) //3 let {x = 3} = {x: null}  console.log(x) //null // 解构失败，变量的值等于undefined let {foo} = {bar: 'baz'}; console.log(foo); //undefined  // 由于数组本质上是特殊的对象，因此，可以对数组进行对象属性的解构 let arr = [1,2,3] let { 0:first, [arr.length -1]: last} = arr; console.log(first,last) //1, 3 // 字符串解构，字符串被转化成一个类似数组的对象 const [a,b,c,d,e] = 'hello'; console.log(a,b,c,d,e) //"h", "e", "l", "l", "o" const {length: len} = 'hello'; console.log(len) //5 // 解构赋值的规则：只要等号右边的值不是 对象或数组，就将它转化为对象 // 由于null和undefined无法转化为对象，所以对二者结构会报错 let {prop: x} = null;  //报错 Cannot destructure property 'prop' of 'null' as it is null. let {prop: x} = undefined; //报错 Cannot destructure property 'prop' of 'undefined' as it is undefined. // 解构赋值的用途 // 1.交换变量 let x = 1; let y = 2; [x, y] = [y, x]; console.log(x, y); //2, 1 // 2.取出函数返回的多个值 function example() {  return [1, 2, 3]; } const [a, b, c] = example(); console.log(a, b, c); //1, 2, 3 // 3.函数参数的定义 function f([x, y, z]) {  return x + y + z; } console.log(f([1, 2, 3])); //6 function f2({ x: x, y: y, z: z }) {  return x + y + z; } console.log(f2({ z: 3, y: 3, x: 2 })); //8 // 4.提取JSON数据 (只获取需要的数据或属性) let jsonData = {  id: 42,  status: "OK",  data: [123, 456],  flag: true,  isSelct: true,  enabal: true, }; let { id, status, data: d } = jsonData; console.log(id, status); //42, "OK" console.log(d) //[123, 456]

## **1. 数组解构**

### **1.1 基础用法**

let [a, b, c] = [1, 2, 3]; console.log(a, b, c); // 1 2 3

### **1.2 嵌套解构**

let [foo, [[bar], baz]] = [1, [[2], 3]]; console.log(foo, bar, baz); // 1 2 3

### **1.3 跳过元素**

let [,, third] = ['a', 'b', 'c']; console.log(third); // 'c'

### **1.4 剩余运算符**

let [head, ...tail] = [1, 2, 3, 4]; console.log(head); // 1 console.log(tail); // [2, 3, 4]

### **1.5 解构不成功**

let [x, y] = [1];  console.log(x, y); // 1 undefined (y 未定义)

### **1.6 不完全解构**

let [x, y] = [1, 2, 3]; console.log(x, y); // 1 2 (忽略第三个元素)

### **1.7 默认值**

let [foo = true] = []; // 使用默认值 console.log(foo); // true let [x, y = 'b'] = ['a'];  console.log(x, y); // 'a' 'b' let [x = y, y = 1] = []; // 错误！y 未声明

## **2. 对象解构**

### **2.1 基础用法**

let {foo, bar} = {foo: 'aaa', bar: 'bbb'}; console.log(foo, bar); // 'aaa' 'bbb'

### **2.2 变量重命名**

let {foo: baz} = {foo: 'aaa'}; console.log(baz); // 'aaa' (baz 是变量，foo 是匹配模式)

### **2.3 嵌套对象解构**

let obj = {  p: ["hello", { y: "world" }] }; let {  p: [x, { y }] } = obj; console.log(x, y); // "hello" "world"

### **2.4 默认值**

let {x = 3} = {};  console.log(x); // 3 let {x, y = 5} = {x: 1};  console.log(x, y); // 1 5 let {message: msg = 'something went wrong'} = {}; console.log(msg); // 'something went wrong'

### **2.5 默认值生效条件**

let {x = 3} = {x: undefined}; // 默认值生效 console.log(x); // 3 let {x = 3} = {x: null}; // 默认值不生效（null ≠ undefined） console.log(x); // null

## **3. 特殊类型解构**

### **3.1 字符串解构**

const [a, b, c, d, e] = 'hello'; console.log(a, b, c, d, e); // 'h' 'e' 'l' 'l' 'o' const {length: len} = 'hello'; console.log(len); // 5

### **3.2 数组对象解构**

let arr = [1, 2, 3]; let {0: first, [arr.length - 1]: last} = arr; console.log(first, last); // 1 3

### **3.3 函数参数解构**

function move({x = 0, y = 0} = {}) {  return [x, y]; } console.log(move({x: 3, y: 8})); // [3, 8] console.log(move({x: 3}));        // [3, 0] console.log(move({}));            // [0, 0] console.log(move());              // [0, 0]

## **4. 解构赋值常见用途**

### **4.1 交换变量值**

let x = 1; let y = 2; [x, y] = [y, x]; console.log(x, y); // 2 1

### **4.2 函数返回多个值**

function getUser() {  return {name: 'Alice', age: 30}; } const {name, age} = getUser(); console.log(name, age); // Alice 30

### **4.3 函数参数定义**

// 有序参数 function sum([x, y, z]) {  return x + y + z; } console.log(sum([1, 2, 3])); // 6 // 命名参数 function connect({host, port, user}) {  console.log(`连接 ${user}@${host}:${port}`); } connect({port: 8080, host: 'example.com', user: 'admin'});

### **4.4 提取 JSON 数据**

const jsonData = {  id: 42,  status: "OK",  data: {    items: [      {id: 1, name: "手机"},      {id: 2, name: "电脑"}    ]  } }; const {  id,   status,   data: {items: products} } = jsonData; console.log(id, status); // 42 "OK" console.log(products); // [{id:1,name:"手机"}, {id:2,name:"电脑"}]

### **4.5 模块导入指定方法**

// 只导入需要的方法 const { readFile, writeFile } = require('fs'); // 使用导入的方法 readFile('example.txt', 'utf8', (err, data) => {  if (err) throw err;  console.log(data); });

### **4.6 设置函数参数默认值**

function createElement(type, {className = '', content = ''} = {}) {  const el = document.createElement(type);  el.className = className;  el.textContent = content;  return el; } const div = createElement('div', {  className: 'container',  content: 'Hello World' });

## **5. 解构赋值注意事项**

### **5.1 解构失败处理**

// 数组解构失败 let [missing] = []; console.log(missing); // undefined // 对象解构失败 let {missing} = {}; console.log(missing); // undefined

### **5.2 无法解构 null 和 undefined**

try {  let {prop} = null; // 报错 } catch(e) {  console.error(e.message);   // Cannot destructure property 'prop' of 'null' as it is null. } try {  let {prop} = undefined; // 报错 } catch(e) {  console.error(e.message);  // Cannot destructure property 'prop' of 'undefined' as it is undefined. }

### **5.3 解构赋值与变量声明**

解构赋值可以与变量声明分开：

let a, b; [a, b] = [1, 2]; // 正确 // 但对象解构需要括号 ({a, b} = {a: 1, b: 2}); // 正确

## **6. 解构赋值高级技巧**

### **6.1 多层嵌套解构**

const company = {  name: 'TechCorp',  departments: [    {      name: 'Engineering',      manager: {name: 'Alice', age: 35}    },    {      name: 'Marketing',      manager: {name: 'Bob', age: 40}    }  ] }; const {  departments: [    ,     {manager: {name: marketingManager}}  ] } = company; console.log(marketingManager); // 'Bob'

### **6.2 解构 + 计算属性**

const key = 'username'; const {[key]: user} = {username: 'jsmith', age: 30}; console.log(user); // 'jsmith'

### **6.3 解构迭代器**

const map = new Map(); map.set('name', 'John'); map.set('age', 30); for (const [key, value] of map) {  console.log(`${key}: ${value}`); } // name: John // age: 30

## **7.总结**

解构赋值是 ES6 中最实用且强大的特性之一，它极大地简化了从数组和对象中提取数据的过程。关键要点：

1. **数组解构**：基于位置匹配，支持嵌套、跳过元素、剩余运算符
2. **对象解构**：基于属性名匹配，支持重命名、嵌套、默认值
3. **特殊类型**：字符串可解构为字符数组，数组可视为对象解构
4. **常见用途**：

- - 变量交换
  - 函数多返回值处理
  - 函数参数定义
  - JSON 数据提取
  - 模块方法导入

1. **注意事项**：

- - 解构失败返回 **undefined**
  - 无法解构 **null** 和 **undefined**
  - 对象解构赋值需要括号

掌握解构赋值可以显著提高代码的可读性和简洁性，是现代 JavaScript 开发中必不可少的技能。

# **五.JavaScript 函数扩展特性的详细总结，包含默认参数、函数长度属性、rest 参数和箭头函数**

// 函数的拓展 function log(x, y = "world") {  console.log(x, y); } log("hello"); //"hello", "world" log("hello", "China"); //"hello", "China" log("hello", ""); //"hello", "" log("hello", undefined); //"hello", "world" // 通常情况下，定义了默认值的参数，应该是函数的尾参数，因为这样比较容易看出来到底省略了哪些参数 // 如果非尾部的参数设置了默认值，实际上这个参数无法省略 function f(x = 1, y) {  return [x, y]; } console.log(f()); //[1, undefined] console.log(f(2)); //[2, undefined] // 函数的length属性 console.log(function f2(a, b, c) {}.length); //3 // 在传入了默认的参数后，length就失真 console.log(function f3(a, b = 2, c = 2) {}.length); //1 // rest 参数： 用于获取参数的多余参数，这样就不需要使用arguments对象了； function add(...values) {  let sum = 0;  for (let val of values) {    sum += val;  }  return sum; } console.log(add(2, 5, 3)); //10 // 箭头函数 // es6允许使用箭头 => 来定义函数 let f = function (v) {  return v; }; console.log(f(3)); //3 let f2 = (v) => v; console.log(f2(2)); //2 // 如果箭头函数不需要参数，或者需要或多个参数，使用圆括号代表参数部分 let f3 = (a, b) => {  //多条语句   return a + b; }; console.log(f3(1, 2)); //3 //列子 var sum = function (num1, num2) {  return num1 + num2 } var sum2 = (num1, num2) => num1 + num2 console.log(sum(1,2)) //3 console.log(sum2(1,2)) //3 // 如果箭头函数代码块部分多余一条语句，就要使用大括号括起来，并且使用return语句返回 // 如果返回对象，用括号包裹 let getTempItem = (id) => ({  id: id,  name: "temp", }) console.log(getTempItem(1))

### **1. 函数默认参数**

- **基本用法**：允许为参数设置默认值

- **特性**：

- - 默认值生效条件：参数严格等于 **undefined**（省略参数或显式传 **undefined**）
  - 非尾部默认值参数无法省略（需用 **undefined** 占位）

- **示例**：

function log(x, y = "world") {  console.log(x, y); } log("hello");           // "hello world"（使用默认值） log("hello", "China");  // "hello China" log("hello", "");       // "hello "（空字符串有效） log("hello", undefined);// "hello world"（触发默认值） // 非尾部默认值 function f(x = 1, y) {  return [x, y]; } f();         // [1, undefined] f(2);        // [2, undefined] f(undefined, 5); // [1, 5]（必须用 undefined 触发默认值）

### **2. 函数长度属性（****length****）**

- **定义**：表示**期望的参数个数**（不含默认值参数）

- **规则**：

- - 只计算第一个默认值参数之前的参数
  - 默认值参数及其后的参数不计入 **length**

- **示例**：

console.log((function(a, b, c) {}).length); // 3 console.log((function(a, b = 2, c = 2) {}).length); // 1（只计算 a）

### **3. Rest 参数**

- **作用**：替代 **arguments** 对象，收集多余参数为数组

- **语法**：**...变量名**

- **规则**：

- - 必须是最后一个参数
  - 真正的数组对象（可使用数组方法）

- **示例**：

function add(...values) {    // 步骤1: 使用剩余参数收集所有传入参数  return values.reduce((sum, val) => sum + val, 0);    // 步骤2: 使用reduce累加 } console.log(add(2, 5, 3)); // 10

#### **3.1 关键概念解析：**

1. **剩余参数** **...values**：

- - 函数定义中的 **...values** 表示"收集所有传入参数组成数组"
  - 当调用 **add(2, 5, 3)** 时：

values = [2, 5, 3]  // 所有参数被放入数组

1. **reduce()** **方法**：

array.reduce(callback, initialValue)

- - 遍历数组，将元素累积为单个值

  - 参数说明：

  - - **callback**：处理每个元素的函数 **(accumulator, currentValue) => {...}**
    - **initialValue**：累加器的初始值（这里是 **0**）

#### **3.2 执行过程详解：**

当执行 **values.reduce((sum, val) => sum + val, 0)** 时：

| 迭代次数 | **sum**(累加器) | **val**(当前值)  | 返回值     |
| -------- | --------------- | ---------------- | ---------- |
| 初始值   | **0**(初始值)   | -                | -          |
| 第1次    | **0**           | **2**(数组第1个) | **0+2=2**  |
| 第2次    | **2**           | **5**(数组第2个) | **2+5=7**  |
| 第3次    | **7**           | **3**(数组第3个) | **7+3=10** |

最终返回值：**10**

#### **3.3 技术要点总结：**

| 概念            | 说明                       | 在本例中的作用               |
| --------------- | -------------------------- | ---------------------------- |
| 剩余参数**...** | 收集所有参数为数组         | 将**add(2,5,3)**→**[2,5,3]** |
| **reduce()**    | 数组累积计算               | 实现数组元素求和             |
| 箭头函数        | **(sum,val) => sum + val** | 定义累加逻辑                 |
| 初始值**0**     | 设置累加起点               | 确保空数组返回0              |

这个模式是函数式编程的典型应用，通过组合高阶函数（**reduce**）和箭头函数，用声明式的方式简洁地实现计算逻辑。

### **4. 箭头函数**

- **核心特性**：

- - 简写函数语法：**(params) => expression**
  - 单行表达式隐式返回（无需 **return**）
  - 多行语句需用 **{}** 包裹并显式返回
  - 返回对象字面量需用 **()** 包裹：**() => ({ key: value })**

- **参数规则**：

- - 单参数可省略 **()**
  - 零/多参数必须使用 **()**

- **示例**：

// 基础形式 const f = v => v;  // 单参数简写 console.log(f(3)); // 3 // 多参数 const sum = (num1, num2) => num1 + num2; console.log(sum(1, 2)); // 3 // 多行语句 const calc = (a, b) => {  const result = a + b;  return result * 2; }; console.log(calc(1, 2)); // 6 // 返回对象 const getTempItem = id => ({ id, name: "temp" }); console.log(getTempItem(1)); // { id: 1, name: "temp" }

### **5.关键注意事项**

| 特性           | 注意事项                                                     |
| -------------- | ------------------------------------------------------------ |
| 默认参数       | 默认值仅对**undefined**生效，**null**/**false**/**0**等不会触发 |
| 函数**length** | 默认值参数后的所有参数不计入长度（无论是否有默认值）         |
| Rest 参数      | 函数中只能有一个，且必须在最后                               |
| 箭头函数       | 没有自己的**this**/**arguments**/**super**，不能用作构造函数（无**new**能力） |

这些特性极大提升了 JavaScript 函数的表达能力和简洁性，特别适合函数式编程和简化回调函数场景。