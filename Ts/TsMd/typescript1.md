

## Typescript介绍  约束 ---专业

1.ts是**微软**开发的一种语言，主要用于做一些比较**大型**的项目

2.ts是**强类型**语言，主要用来**约束数据**的类型

3.ts是js超集，浏览器也不识别ts语言， 需要借助插件帮我们把ts解析成js

4.React，vue3,arkTS底层都是基于ts开发



[官网链接](https://typescript.bootcss.com/tutorials/typescript-in-5-minutes.html)

**js是一种弱类型语言**

```
var username = 123;  
username = 'alice';   // 在js环境中不会报错
```

**ts是强类型语言**

```
var username = 123;  
username = 'alice';   // 在ts环境中会报错
```



## 编译TS文件

### 1.安装typescript

`node.js 安装`

`npm 是node自带的包管理器工具 用于下载,更新,删除 发布第三方包`

```
// npm i/un xxx包  安装和卸载
安装  -g 全局安装(global) 安装到全局的依赖 就可以使用到任意的项目中 (可以调用到) 一般全局安装的都会提供 命令行 工具 
那么删除的时候也要带 -g
```



```
npm install typescript -g   
```

### 2.使用命令tsc解析ts文件

在控制台输入 命令tsc +ts文件

```
tsc demo.ts
```

但是使用tsc命令不能实时的监听文件的改变

在执行tsc命令的时候， 如果报错如下：

![error](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/fulanyan/20230912143447.jpg)



解决办法：

第一步：以管理员运行PowerShell

第二步输入命令：`Set-ExecutionPolicy -Scope CurrentUser`

第三步输入命令：`RemoteSigned`

第四步输入命令：`A`或者`Y`



### 3.如何实时监听ts文件

通过命令 `tsc --init` 初始化一个配置文件 `tsconfig.json`

通过命令 tsc --watch 启动实时编译



## ts的数据类型

基础类型： string , number, boolean, null, undefined,symbol

引用类型：array, object

特殊类型： any, void , never, enum(枚举类型)，unknow

any: 任意类型， 没有约束

void ：一般用于定义函数 没有返回值的时候



### ts中定义基础类型

```
var username:string = 'alice';   //ts环境已经断言为username为string, 根据value

var num:number = 123;
// num = '123'  //报错

var isBool:boolean = true;
// isBool = 123;   // 报错
isBool = false; //正确

var isNull:null = null;
var okm:undefined = undefined;
```

ts中定义变量的时候， 变量+`:`+数据类型 = 初始值

如果在定义的时候， 不明确给数据类型， 只是给了数据的初始值，ts环境会根据初始值帮你做类型断言



### ts中定义数组

第一种方式： 

数据类型+[], 表示这个数组的每个元素都是 这个数据类型

```
//定义数组  - 》 数组每一项是string
var arr1:string[]  = ['aa','bb','cc']
var num1:number[] = [1,2,3]
```

第二种方式：使用泛型 , 泛型一般是作用于函数

```

var arro1:Array<string> = ['a','b','c']
```

泛型格式： `函数<数据类型>`  --> `Array<string>`

**在ts中定义变量的时候， 指定的数据类型都使用小写**

第三种方式： 使用any

当你不知道你数据类型可能是什么的时候，可以使用any

```
var arrOK:any = [1,'2',true,null];
```

说明：在项目中尽量少用any类型，做ts项目的时候， 需要指明数据类型， 更好的帮你检查类型错误 方便查看数据结构

```
// 显示
let some:any
// 隐
let some2

let x:string
x = some //不报错
```



```
let remote:unknown
let x:string
remote = 100
x = remote //报错，不能给字符串，赋值未知的类型
```



### ts中定义对象

```
用的少 太宽泛
let a:object  /* a能存 非基础类型 */
let b:Object  /* 用调用到Object原型方法的都行， toString() 除了 null undefined都行*/

a = {}
a = []
a = function(){}
a = new String("123")
class Person{}
a = new Person()
```

定义对象使用object类型的时候， 虽然定义的时候没报错， 但是object并不知道定义的对象有哪些属性

一般使用如下定义：明确指定对象有哪些属性

定义一个对象， 对象有username:string, age:number2个属性

```
var obja1:{username:string,age:number} = {username:'alice',age:20};
```

定义的对象只能有username和age属性， 并且类型必须按照接口定义来

```
obja1.username = 123;  //报错，类型不匹配
obja1.gender = '男';//报错， 接口没有定义gender属性
```



非必填属性 `变量名?:数据类型`

```
var obja1:{username:string,age:number,gender?:string} = {username:'alice',age:20};
obja1.gender = '男';//正确， 接口定义gender属性，非必填
```

```
// 所引签名     key 是任意字符串 值是任意的值
let person:{name:string,age?:number,[key:string]:any}
```

练习： 定义一个数组， 数组的每项都是一个学生的对象，包括name(string),age(numner),grade(string)

第一种： 类型+[]

```
var studentArr:{name:string,age:number,grade:string}[] = [{name:'xiaohong',age:10,grade:'一年级'}]   //定义一个空的数组

```



第二种：泛型定义  Array<数据类型>

```
var studentArr2:Array<{name:string,age:number,grade:string}> = [{name:'xiaohong',age:10,grade:'一年级'}]
studentArr2.push({
    name:'xiaobo',
    age:12,
    grade:'三年级'
})
```

使用ts定义数据， 可以赋初始值， 也可以给一个空的数组



**补充： 或操作符** 

有些属性可能是string,可能是number 使用 `|`

```
var kop:string | number = 123;
kop = 'op'

```

### 元组类型

**定义与特性**‌

- ‌**固定长度与类型**‌：元组在定义时需指定每个元素的类型（如 `[string, number, boolean]`），且长度和类型必须严格匹配。例如，若定义了三个元素的元组 `[string, number, boolean]`，则必须按顺序包含一个字符串、一个数字和一个布尔值。‌‌‌‌1
- ‌**类型检查**‌：每个元素的位置类型在声明时明确，赋值时必须符合这些类型要求。例如，若元组定义为 `[number, string]`，则只能存储一个数字和一个字符串。‌‌‌‌2
- ‌**不可变性**‌：一旦定义了元组的长度和类型，后续操作（如添加或删除元素）会导致编译错误。‌‌2‌‌3

‌**使用场景**‌

- ‌**返回多个值**‌：当函数需要返回多个不同类型的数据时（如坐标点、用户信息等），元组可以避免使用对象字面量，简化结构并保持类型安全。‌‌4‌‌5

- ‌**数据验证**‌：在处理固定格式的数据（如日志条目、配置参数）时，元组能确保数据顺序和类型的正确性。‌‌‌‌

  

用的比较少， 比如说定义数组， 第一项是string, 第二项是number

定义方式 变量+`:[数据类型1，数据类型2]`

```
var yarr:[string,number] = ['aa',12];
```

元组类型定义几个属性， 赋初始值的必须严格按照约定， **一般用于已知元素数量和类型的数组**



### ts中定义函数

1.函数没有返回值的时候使用void

```
function hello():void{
    console.log('op');
} 
```



2.函数有返回值使用`函数名:函数返回的数据类型`

```
// 函数返回值是一个number
function test2():number{
    // return 'aaaa';  //错误方式
    return 123;
}

//函数的返回值必须是一个对象{title:string,price?:number}
function test3():{title:string,price?:number}{
    // return 'aaaa';  //错误方式
    return {
        title:'苹果',
        price:10
    }
}
```

3.如果函数有参数，需要使用函数的属性进行约定

```
// 定义一个函数， 接收2个参数， 第一个是string , 第二个是number

function test4(str:string,num:number):{title:string,price?:number}{
    // 可能有写业务
    console.log(str);
    console.log(num);
    
    return {
        title:'苹果',
        price:10
    }
}
// 调用函数的时候， 必须按照定义函数时候，属性的约定来传值
test4('西瓜',2)
```



练习：编写一个ts函数， 用来计算所有数字的求和,  函数的参数个数未知，数据都是number, 返回的是number类型的数据



```
function calcTotal(...arr:number[]):number{
    // console.log(arr); 数组， 每一项都是number
    // forEach,  for of, reduce
   return arr.reduce((pre,next)=>{
        // pre: 每次循环求和的数据
        return pre + next
    },0) 
}

let res = calcTotal(10,20,30)
console.log(res,'求和所得值');
```



### 枚举类型

```
// 枚举类型  - 》 数据类型
// 定义一个枚举类型
enum PayStatus { SUCCESS=1,FAIL=0,PENDING=2 }

// 使用枚举
let paySus:PayStatus = PayStatus.SUCCESS;   // 成功
let payFail:PayStatus = PayStatus.FAIL;    //失败
let payPending:PayStatus = PayStatus.PENDING;   //正在进行

console.log(paySus,'成功');
console.log(payFail,'失败');
console.log(payPending,'正在进行');
```

帮我们更好的管理和维护代理， 提高代码的可读性



## ts的优势：

1. 更好的属性提示
2. 在ts环境中， 都不需要在浏览器执行，你就可以知道哪里出错了
3. 严格约定了代码的格式， 保持项目代码风格统一，代码整洁
4. 很好的约束了参数的类型和返回值，在使用的时候按照约定传值不容易出错，通过代码的提示不容易出错