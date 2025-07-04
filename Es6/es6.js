console.log("myArray methods in ES6");


const canvas=document.getElementById("myCanvas");
        // document.getElementsByName();
        // document.getElementsByTagName();
        const ctx=canvas.getContext("2d");
        ctx.fillStyle="#29b5ff";
        ctx.fillRect(0,0,100,100);
        console.log("🚀 ~ ctx:", ctx)
        ctx.moveTo(0,0);
        ctx.lineTo(200,100);
        ctx.stroke();

//三目运算符  表达式 ? 值1 : 值2
 
const obj = {  name: "John",
  age: 30,
  isStudent: false
};
let temp='name';
//obj.name;
console.log('name:'+obj[temp]);
console.log('age:'+obj['age']);


//es6  ??
// 只能处理 null undefined
let x = null;
let y = 10;
const result = x ?? y; // 如果 a 是 null 或 undefined，则返回 b，否则返回 a
console.log(result); // 输出: 10

//扩展运算符   ...  用于数组和对象的浅拷贝
const arr1 = [1, 2, 3]; 
const arr2 = [...arr1]; // 浅拷贝  数组
const arr5 = [...arr1,...arr2]; // 浅拷贝

console.log(arr2); // 输出: [1, 2, 3]
console.log(Math.max(...arr1)); // 输出: 3
console.log(arr5); // 输出: [1, 2, 3, 1, 2, 3]


const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1 }; // 浅拷贝      对象
console.log(obj2); // 输出: { x: 1, y: 2 }

// 合并数组  合并  对象
const obj4 = { a: 1, b: 2 };
const obj5 = { c: 3, d: 4 };
const mergedObj = { ...obj4, ...obj5 }; // 合并对象
console.log(mergedObj); // 输出: { a: 1, b: 2 , c: 3  d: 4}

// 解构赋值 
// destructuring es6允许按照一定的模式从数组和对象中提取值,然后对变量进行赋值
const arr3 = [1, 2, 3]; //可以是数组 对象 嵌套结构 
const [first, second, third] = arr3; // 解构赋值
console.log(first, second, third); // 输出: 1 2 3
const obj3 = { a: 1, b: 2, c: 3 };
const { a, b, c } = obj3; // 解构赋值   
console.log(a, b, c); // 输出: 1 2 3
//剩余函数 
const [m, ...rest] = [1,2,3,4,5,6]; // 剩余运算符
console.log("🚀 ~ m:", m)

const str= "Hello, World!";
const strArr=[...str]; // 将字符串转换为字符数组
console.log(strArr); // 输出: ['H', 'e', 'l', 'l 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']


// 嵌套
let [foo,[[bar,baz]]]=[1,[[2],2]];
console.log(foo,bar,baz);
let [,,myThird]=['a','b','c']
console.log(myThird);//c

let [q,p]=[1,2,3]
console.log(q,p); //1,2 按照索引

let [head,,tail]=[1,2,3,4]
console.log(head,tail);//1,4 

let [h,i,...j]=['a']

console.log('===='+h,i,j);// a, undefine, [] 空数组

//如果解构不成功就是undefine
let [o]=[];
console.log(o);//undefine

//不完全解构  等号左边的模式 只匹配一部分到右边的数组 解构依然是成功的 
 let [k,l]=[1,2,3]
 console.log(k,l);//1,2

 let [u,[v],w]=[1,[2,3],4]
 console.log([v]);
 
 console.log('uvw'+ u,v,w);//1,[2,3],4

 //数组结构的核心是按照位置 匹配  即下标 
 
 




// //箭头函数
const add = (a, b) => a + b; // 箭头函数
console.log(add(2, 3)); // 输出: 5

// //模板字符串
const name = "Alice";   
const greeting = `Hello, ${name}!`; // 模板字符串
console.log(greeting); // 输出: Hello, Alice!


var myFun='test function'
function test(){
    // console.log(myFun);
    if(true){
      var myFunStr='test function是局部变量'; // 使用 var 声明变量
        console.log("test function");
        console.log(myFunStr); // 输出: test function是局部变量
    }
}
test(); // 输出: test function  
// console.log(myFunStr); // 输出: myFunStr is not defined   test function是局部变量  

//变量提升 
console.log(myVar);
var myVar = 10; // 使用 var 声明变量  用 var 声明的变量会被提升到函数或全局作用域的顶部  
// 在声明之前访问 myVar 会导致 undefined，因为变量提升只提升声明，不提升赋值
// 这意味着在声明之前访问 myVar 会得到 undefined，而不是 ReferenceError
//全局覆盖,从上往下执行 var  声明变量的时候 
console.log(myVar);

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    // console.log(i); // 输出: 5 5 5 5 5  var变量全局覆盖 变量提升导致的问题 let 解决了这个问题
    //let 变量  const 常量  
  }, 1000);
}


//js事件执行  event loop    先输出 同步再执行 异步
console.log("结束"); // 输出: 结束
setTimeout(() => {
  //异步
  // console.log("定时器结束"); // 输出: 定时器结束
}, 2000);
console.log('end'); // 输出: end

// //es6  块级变量  let 和 const  {}  里面就是一个块  
// {
//   let blockLet = "I am a block variable";
//   // console.log(blockVar); // 输出: I am a block variable
//   var blockVar = "I am a block variable var"; // 使用 var 声明变量
//   // console.log(blockVar); // 输出: I am a block variable var
// }
// // console.log(blockVar);// blockVar is not defined  块级作用于外 不可访问
// console.log(blockVar); // 输出: I am a block variable var

// var globalArr = []; // 全局变量
// for (let index = 0; index < 10; index++) {
//   array[index]= function() {
//     console.log("index:", index);
//   }
  
  
  
// }
// globalArr[1]()

// //暂时性 死区 (temporal dead zone, TDZ) 是指在块级作用域内使用 let 或 const 声明的变量在声明之前不可访问。
// // 在块级作用域内使用 let 或 const 声明的变量在声明之前不可访问
// //es6 明确指定 如果 块中存在 Let或者const 声明的变量，则在该块级作用域内，不能访问同名的全局变量或函数。
// // 这意味着在块级作用域内，在let 和 const 声明变量 使用 就会报错
// var tempVar = 10; // 全局变量
// if(true) {
//   // console.log(tempVar); // 输出: 10
//   tempVar = 'abc'; // 块级作用域内的变量
//   //其他代码
//   let tempVar; // 块级作用域内的变量
//   // console.log(tempVar); // 输出: 20
// }

function testTDZ(x=y,y=2) {
  return x + y; // 报错: Cannot access 'y' before initialization
  // console.log(tdzVar); // 报错: Cannot access 'tdzVar' before initialization
}
// testTDZ(); // Cannot access 'y' before initialization 以及Let 和const不出现变量提升 主要是为了减少运行时的错误 

// function f(){
//   let fa=1;
//   // let fa=2;//不允许重复定义 
//   console.log(fa); // 报错: Identifier 'fa' has already been declared
// }
// f(); // 报错: Identifier 'fa' has already been declared

// function func(arg) 
// {
//   let arg = 10; // 报错: Identifier 'arg' has already been declared
//   console.log(arg);  
// }
// func(5); // 报错: Identifier 'arg' has already been declared

//const  str; 声明一个只读的变量 需要立即初始化 不能留在以后赋值 否则会报错  必须赋初值不然也会报错
const PI = 3.14; // 声明一个常量   常量名一般大写
// PI = 3.14159; // 报错: Assignment to constant variable.//重新赋值也不被允许

const xxx = { a: 1, b: 2 }; //在栈空间的地址是不能改变的  不能改变他的地址  除非用temp

//顶层对象  
//在浏览器环境中指的是window对象 在node环境中指的是global对象



// 默认值

//
let [ast=true]=[]

let [as,sd='b']=['as']
console.log(as,sd);

let [sa,ds='b']=['as',undefined]
console.log(sa,ds);//a,b

//默认值可以引用解构赋值的其他变量 但是该变量 必须已经声明
let [mor=1,fuz=mor]=[];
console.log(mor,fuz);//1,1
let [mr=1,fuy=mor]=[2];
console.log(mr,fuy);//2,1

let [my=1,fy=my]=[1,2];
console.log(mr,fy);//2,2

// let [zy=zz,zz=1]=[];
// console.log(zy,zz);// Cannot access 'zz' before initialization
