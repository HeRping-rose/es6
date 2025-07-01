function greet(name) {
    return `Hello, ${name}!`;
}

function add(a,b) {
    return a+b;
}
const handle=(x,y)=>{
    let z=x+y;
    return z;
}
// console.log(handle(1,2));
;
//箭头函数 其中一个重要用处就是简化回调函数 

let arr =[1,2,3]
let arr2=arr.map(function(x){ //map 生成一个 一样长度的数组  
    return x*x  
})
// console.log(arr2); //[1,4,9]  

//箭头函数 和... rest 结合 
const nums=(...rest)=>rest;
// console.log(nums(1,2,3,4,5));//[1,2,3,4,5]

const headandTail=(head,...tail)=>[head,tail]
// console.log(headandTail(1,2,3,4,5,6));//[1,[2,3,4,5,6]]

let arr1 =[1,2,3]
let arr3=arr.map((x,i,arrary)=>{ //map 生成一个 一样长度的数组  
    // console.log(x,i,arrary);//1 0 (3) [1, 2, 3]
//                            2 1 [1, 2, 3]
//                            3 2 [1, 2, 3]
    return x*x  
})
// console.log(arr2); //[1,4,9]    

let arr4 =[1,2,3]
let total =arr.reduce((x,y)=>x+y,0); //累加的结果   0是初始值   若是数组为空 并且没有初始值会报错
// console.log(total);//6
// // ruduceRight(f,initial)// 累加的结果  从右向左 
// console.log(arr.reduceRight((x,y)=>x/y)); // 1.5
//every(predicate,0)// 判断是否所有元素都满足条件  返回true/false 
// console.log(arr.every(x=>x>0));//true
// console.log(arr.every(x=>x<0));//false  当返回积为false时 停止判断 终止递归
//some(predicate,0)// 满足条件的元素  如果至少满足一个则返回true  否则/alse  predicate:断言函数//返回true终止递归 
// console.log(arr.some(x=>x>2));//true 
// filter(predicate)// 筛选元素  返回一个新数组  predicate:断言函数
// console.log(arr.filter(x=>x>=2));//[2,3]
// console.log(arr.filter(x=>x=x%2===1));//[1,3] //偶数   等于1则是 奇数  常用
//forEach(callback)// 迭代数组  callback:回调函数  元素本身 元素索引 目标索引
arr.forEach((x,i,array)=>{ // forEach 迭代数组   //当作用于稀疏数组时 会跳过空位
    array[i]++;
    // console.log(x,i,array);
})
//indexOf(element,start)// 查找元素  返回索引  start:开始索引  默认为0  返回-1则元素不存在
// console.log(arr);//[2,3,4]

// console.log(arr.indexOf(3));//  返回索引为 1
//lastIndexOf(element,start)// 倒序查找元素  返回索引  start:开始索引  默认为数组长度-1  返回-1则元素不存在
//concat(element1,element2,element3...)// 拼接数组  返回新数组  element1,element2,element3...为数组元素
// console.log(arr.concat(1,5,6));//[2,3,4,5,6]
let arr5=arr.concat(1,5,6)
//sort(compare) // 排序数组  返回新数组  compare:比较函数  默认为升序  返回负数则交换位置  返回正数则不交换位置
// console.log(arr5.sort((a,b)=>a-b));//[1,2,3,4,5,6]
// arr5.sort((a,b)=>b-a);//[6,5,4,3,2,1]
// console.log(arr5.sort((a,b)=>b-a));//
// split(separator,limit)// 分割字符串  返回数组  separator:分隔符  limit:限制数量  返回数组元素数量为limit  默认为正无穷大
console.log('1,2,3,4,5,6'.split(','));//['1', '2', '3', '4', '5', '6']
//jion(separator)// 组合数组  返回字符串  separator:分隔符  默认为,  与spit相反
console.log(['1', '2', '3', '4', '5', '6'].join('-'));//1,2,3,4,5,6
//pop() // 删除数组末尾元素  返回删除的元素  若数组为空则返回undefined
console.log(arr5.pop()); //6
console.log(arr5);//[2, 3, 4, 1, 5]
// push(element) // 在元素末尾添加元素  返回数组长度  若添加元素为空则返回undefined
console.log(arr5.push(6,7,8));//8
console.log(arr5);//[2, 3, 4, 1, 5, 6, 7, 8]
//shift() // 删除数组开头元素  返回删除的元素  若数组为空则返回undefined
//unshift(element) // 在元素开头添加元素  返回数组长度  若添加元素为空则返回undefined
//reverse() // 反转数组  返回新数组 
console.log(arr5.reverse());//[8, 7, 6, 5, 1, 4, 3, 2]
//splice(start,deleteCount,element1,element2,element3...) // 删除数组元素  返回被删除的元素  start:开始索引  deleteCount:删除数量  element1,element2,element3...为数组元素
console.log(arr5.splice(2,1));//6
console.log(arr5);//[8, 7, 5, 1, 4, 3, 2]
//slice(start,end) 
// 截取数组元素  返回新数组  start:开始索引  end:结束索引  但是 不包含索引为end的元素 
// end为空则截取到数组末尾  start为负数则从数组末尾开始计算  end为负数则从数组末尾开始计算
//sort(compare) // 排序数组  返回新数组  compare:比较函数  默认为升序  返回负数则交换位置  返回正数则不交换位置
console.log(arr5.sort());//[1, 2, 3, 4, 5, 7, 8]
console.log(arr5.sort((a,b)=>b-a));//[8, 7, 5, 4, 3, 2, 1]
//splice(start,deleteCount,element1,element2,element3...) // 删除数组元素  返回被删除的元素  start:开始索引  deleteCount:删除数量  element1,element2,element3...为数组元素
console.log(arr5.splice(2,1));//5
console.log(arr5);//[8, 7, 4, 3, 2, 1]
//toString() // 数组转换为字符串  返回字符串  默认为逗号分隔
//toLocaleString() // 数组转换为字符串  返回字符串  默认为逗号分隔  与toString()不同  返回不同语言的格式
console.log(arr5.toString());//8,7,4,3,2,1
console.log(arr5.toLocaleString('en-US',{style:'currency',currency:'USD'}));//$8.00,$7.00,$4.00,$3.00,$2.00,$1.00

//类数组对象 
let obj={
    0:'a',
    1:'b',
    2:'c',
    length:3
}
console.log(obj);//{0: 'a', 1: 'b', 2: 'c', length: 3}
console.log(Array.prototype.join.call(obj,'-'));

//es6 新增方法
//Array.from(obj) // 类数组对象转换为数组  返回新数组  
// Array.from(obj,callback) // 类数组对象转换为数组  返回新数组  两个参数  第一个参数为类数组对象  第二个参数为转换函数
console.log(Array.from(obj)); //[a,b,c]  

// new Array(3);//[,,,] 还是[3] 的歧义问题
//Array.of(element1,element2,element3...) // 创建数组  返回新数组  可以避免new Array()导致的歧义问题  element1,element2,element3...为数组元素
console.log(Array.of(1,2,3));//[1,2,3]
// Array.isArray(obj) // 判断是否为数组  返回true/false

// Array.find(predicate,thisArg) // 查找元素  返回第一个满足条件的元素  predicate:断言函数  thisArg:this对象 找不到则返回undefined
console.log([1,2,3,4,5].find(x=>x>2));//3

// Array.findIndex(predicate,thisArg) // 查找元素  返回第一个满足条件的元素索引  predicate:断言函数  thisArg:this对象 找不到则返回-1
console.log([1,2,3,4,5].findIndex(x=>x>2));//2
// Array.fill(value,start,end) // 填充数组  返回新数组  value:填充的值  start:开始索引  end:结束索引  默认为数组末尾  返回新数组
console.log([1,2,3,4,5].fill(0,2,4));//[1,2,0,0,5]
console.log([1,2,3,4,5].fill(0));//[0,0,0,0,0]

// Array.flat()// 展开数组  返回新数组 实现数组扁平化 
console.log([1,2,[3,4,[5,6]]].flat());//[1,2,3,4,[5,6]]

// Array.copyWithin(target,start,end) // 复制数组  返回新数组  target:目标索引  start:开始索引  end:结束索引  默认为数组末尾  返回新数组
// console.log([1,2,3,4,5].copyWithin(0,2,4));//[3,4,5,4,5]
// console.log([1,2,3,4,5].copyWithin(0));//[1,2,3,4,5]

// // Array.entries() // 迭代数组  返回迭代器  迭代器对象有next()方法  返回迭代结果  迭代结果为数组  数组元素为索引和元素  迭代结束返回undefined


//keys() // 迭代数组  返回迭代器  迭代器对象有next()方法  返回迭代结果  迭代结果为索引  迭代结束返回undefined
//values() // 迭代数组  返回迭代器  迭代器对象有next()方法  返回迭代结果  迭代结果为元素  迭代结束返回undefined
for(let value of [1,2,3,4,5].keys()){//[0,1,2,3,4]
    // console.log(value);//返回索引 
}
for(let value of [1,2,3,4,5].values()){//[1,2,3,4,5]
    // console.log(value);//返回元素 
}
for(let [index,value] of [1,2,3,4,5].entries()){//[0,1][1,2][2,3][3,4][4,5]
    // console.log(index,value);//返回下标 和 元素 
    console.log(`${index}:${value}`);// 字符串 拼接 
    
}


// this   严格模式下 undefined
function f(){
    "use strict";
    console.log(this);//undefined
};
f()
console.log(this);//window

//构造函数 this 指向实例对象  因为 箭头函数没有this
// 箭头函数 中 this 指向外层函数的 this

//call apply bind  改变this指向   this 指向 函数的调用者  
function greet(msg){
    console.log(`${msg} , ${this.name}`);//window
};
const user ={name :'bob'};
greet.call(user,'hello');//hello,bob //this 指向 user
greet.apply(user,['hello']);//hello,bob //以数组方式 传参
const bindGreet = greet.bind(user); //this 绑定了 user 创建一个新函数  this 永久绑定到了 user
bindGreet('hello');

//dom 操作   创建一个函数  
document.getElementById('btn').addEventListener('click',()=>{
    console.log(this.id);//undefined
    console.log(this);//window
});

//类和原型中 的this 
class Person{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
}
let p = new Person('james');
p.sayName();

// js事件循环 event loop  js是单线程的  为了异步处理  js的异步处理机制  的原理 挺重要
//微任务 优先级高于宏任务
//调用栈 栈 同步任务的执行 按照先后顺序处理函数的调用
//任务队列
//异步≠多线程  
//回调地域机制 :过多使用回调 回调地狱（Callback Hell）指在异步编程中，多层嵌套的回调函数导致代码结构复杂、难以维护的现象
// 常见于需要顺序执行异步任务的场景（如网络请求、文件读写）


//递归 函数 递归调用自身 函数调用自身 自己调用自己
function factorial(n) {
  if (n ===0) {
    return 1; 
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(4));

//树形结构  递归处理 
const menu = { 
    name:'',
    children:[
        {
            name:'',
            children:[
                {
                    name:'',
                    children:[
                        {
                            name:'',
                            children:[]
                        }
                    ]
                }
            ]
        }
    ]
};



