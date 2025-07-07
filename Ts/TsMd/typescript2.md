练习作业

1.编写一个函数，接受一个字符串string，返回类型为对象。
原始数据为：http://127.0.0.1:8888?id=1&name=xiaowang
最终结果：{id:1,name:"xiaowang"}

```
function searchParams(url:string):any{
   let search =  url.split('?')[1];
   // URLSearchParams是h5自带的方法，获取类似 id=1&name=xiaowang这种字符串的数据
   let paramsObj = new URLSearchParams(search); // URLSearchParams类型  
   //    Iterator类型数据可以使用for of循环
   let obj:any={};
   for(let [key,value] of paramsObj) {
    obj[key] = value;
   }
    return obj
}

let paramsobj = searchParams('http://127.0.0.1:8888?id=1&name1=xiaowang');
// 访问
console.log(paramsobj.name);
```



2.定义一个函数，参数是一个数组，数组中每项是number类型, 获取到数组中最大值和最小值，返回值是一个对象object

```
function calcNumber(arr:number[]):any{
    let max =  Math.max(...arr),
        // min = Math.min(...arr);  // 方式一
        min =  Math.min.apply(null,arr);   // 方式二
        
    return {
        max:max,
        min:min
    }
}

calcNumber([3,7,9])
```



## TS中类的概念



### 1. TS中定义类

回顾js中定义类

```
class People {
    static hobby=['画画'] ; 
    //实例属性
    constructor(name,age){
        this.username = name
        this.age = age;
    }
    hello(){
        console.log(this.username); 
        console.log('heelo');
    }
}

People('alice')
```



**ts中定义类**

```
class People {
    static hobby:string[]=['画画'];
    //实例属性
    username:string; // 定义构造器属性类型
    age:number;
    constructor(name:string,age:number){
        this.username = name;
        this.age  = age
    }
    hello():number{
        console.log(this.username); // 类的实例属性
        
        return 123;
    }
}
```

#### ts中定义类说明

**相同点**

​    ts中定义类与js中定义类的规范一样， 

1. 类的首字母大写
2. 定义静态属性使用关键字static, 但是需要显示申明数据类型，或者隐式判断
3. 如果类接收参数，constructor不能省略

**不同点：**

在ts中定义constructor实例属性的时候， 必须在类的定义先定义好实例属性类型， 然后在构造器中使用

```

```



### 2. TS中类的继承

ts中的继承和js中保持一致，也是使用extends关键字, 规范也一样， 不同的就是数据类型的约定 和 实例属性需要事先定义后，然后在构造器中使用

继承的时候， 参数顺序要和父类保持一致

```
// 继承 People , PoliceMan
class PoliceMan extends People {
    // 子类可能有自己的实例属性
    gender:string;
    constructor(name:string,age:number,gender:string){
        // 继承父类的属性 , 属性的顺序不能错
        super(name,age);
        //定义自己类的属性， 放在super的下面
        this.gender = gender;

    }
      walk():string{
        return '走路'
    }
}
var po1 = new PoliceMan('小刚',20,'男');
```

### 3.类中的修饰符

ts中类的修饰符是ts语法新加的，

public:公共的，默认， 常用， 在自己类中，能被继承，可以咋外部访问

private:私有的 ，只能在自己类中被访问，不能被继承和被外部访问， 一般用来做函数的封装的使用下

protected:保护类型， 能在类中访问和继承， 但是不能被外部访问

| 访问修饰符 | 含义         | 访问范围         |
| ---------- | ------------ | ---------------- |
| public     | 公共的，默认 | 父类，子类，外部 |
| private    | 私有的       | 父类             |
| protected  | 保护类型     | 父类，子类       |

public

```
class Animal {
  public name: string; // 公共属性

  constructor(name: string) {
    this.name = name;
  }

  public speak(): string { // 公共方法
    return `I'm ${this.name}`;
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  public bark(): string {
    // 子类可以直接访问父类的 public 属性
    return `${this.name} says woof!`;
  }
}

// 外部访问示例
const myDog = new Dog("Buddy");
console.log(myDog.name); // 直接访问 public 属性
console.log(myDog.speak()); // 调用 public 方法
console.log(myDog.bark()); // 调用子类的 public 方法
```

protected

```
class Animal {
  protected name: string; // 受保护的属性

  constructor(name: string) {
    this.name = name;
  }

  protected speak(): string { // 受保护的方法
    return `I'm ${this.name}`;
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  public bark(): string {
    // 子类可以访问父类的 protected 成员
    return `${this.speak()} and I say woof!`;
  }
}

class Labrador extends Dog {
  constructor(name: string) {
    super(name);
  }

  public info(): string {
    // 孙子类也能访问 protected 成员
    return `My name is ${this.name}`;
  }
}

// 外部访问示例
const myDog = new Dog("Buddy");
// console.log(myDog.name); // 错误：无法在类外部访问 protected 成员
// console.log(myDog.speak()); // 错误：无法在类外部访问 protected 方法
console.log(myDog.bark()); // 可以访问，因为 bark() 是 public

const myLab = new Labrador("Max");
console.log(myLab.info()); // 孙子类的 public 方法可访问 protected 属性
```

private

```
class Animal {
  private name: string; // 私有属性

  constructor(name: string) {
    this.name = name;
  }

  private speak(): string { // 私有方法
    return `I'm ${this.name}`;
  }

  public getInfo(): string {
    // 类内部可以访问 private 成员
    return this.speak();
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  public bark(): string {
    // 子类无法访问父类的 private 成员
    // return `${this.speak()}`; // 错误：Property 'speak' is private
    return "Woof!";
  }
}

// 外部访问示例
const myDog = new Dog("Buddy");
// console.log(myDog.name); // 错误：无法访问 private 属性
// console.log(myDog.speak()); // 错误：无法访问 private 方法
console.log(myDog.getInfo()); // 可以通过公共方法间接访问
console.log(myDog.bark());
```



### 4.ts类的只读属性

h5中表单会使用readonly属性作为form只读属性

ts中使用关键字 readonly作为属性的只读属性， 不能被修改

**使用： 直接在属性定义的前面加上 readonly**

```
 readonly student:string = '小红'; // 定义属性并赋值
```

如何和属性修饰符一起使用， 在属性修饰符后面 添加

```
protected readonly username:string; // 定义构造器属性类型
```



```
class People {
    static hobby:string[]=['画画'];
    //实例属性
    protected readonly username:string; // 定义构造器属性类型
    age:number;
    
    readonly student:string = '小红'; // 定义属性并赋值
    constructor(name:string,age:number){
        this.username = name;
        this.age  = age;
    }
    hello():number{
        console.log(this.username); // 类的实例属性， 在类中使用
         this.student = '小妹   // 报错， 只能读不能修改
        // this.username = 'poo'   // 报错
        return 123;
    }
}
```

简写

```
class People {
    public username
    public age
    constructor(name:string,age:number){
        this.username = name;
        this.age  = age
    }
    hello():number{
        console.log(this.username); // 类的实例属性
        
        return 123;
    }
}
// 简写
class person2{
    constructor(public name:string, public age:number){

    }
}
```

抽像类： 经理写好基类，基类的方法需要实现（重写），你需要严格实现， 提供共享方法

```
// 抽象类
abstract class Package {
    constructor(public weight:number){}
    // 要实现的抽象方法
    abstract count():number
    // 具体方法
    show(){
        console.log(`包裹：${this.weight}kg,费用:${this.count()}`)
    }
}

class standerpackage extends Package {
    constructor(weight:number,public price:number){super(weight)}
    count(): number {
        return this.weight * this.price
    }
}
const s1 = new standerpackage(10,5)
s1.show()

class expresspackage extends Package {
    constructor(weight:number,public price:number,public add:number){super(weight)}
    count(): number {
        if(this.weight>10){
            // 超出10kg部分，每公斤多收2元
            return 10*this.price+(this.weight-10)*this.add
        }else{
             return this.weight * this.price
        }
    }
}

const s2 = new expresspackage(10,5,2)
s2.show()
```



## interface接口

interface是一种定义结构的方式，主要作用是为：类、对象、函数等提供一种契约，这样可以确保代码的一致性和类型安全，但要注意interface只能定义格式。不能包含任何实现。

接口起到了限制和规范的作用。接口定义了需要遵循的规范.

**接口就是一种数据的规范和约定**

接口类型：

1. 属性类型接口
2. 函数类型接口
3. 可索引接口
4. 类类型接口
5. 接口扩展



### 1.用接口定义类的结构

（只有规范，没有实现，抽象类可以有具体实现）

```
interface IPerson {
    name:string
    age:number
    speak(n:number):void
}
// implements 实现 ， 就是person需要实现 iperson
class Person2 implements IPerson {
    constructor(public name:string,public age:number){}
    speak(n: number): void {
        for(let i=0;i<n;i++){
            console.log(`你好:我是${this.name},年龄是${this.age}`)
        }
    }
}
let p = new Person2("小明",20)
p.speak(4)

//class Person2 implements IPerson, other {}  注意：一个类可以去实现多个接口
```



### 2.接口定义对象的结构

多个页面使用同样的数据类型和约定，没使用接口之前

```
// A页面
var objk1:{username:string,age:number} = {username:'xaohong',age:20}
// B页面
var objk2:{username:string,age:number} = {username:'xiaobo',age:20} 
// c页面
var objk3:{username:string,age:number} = {username:'xiaobo',age:20} 

```

当约定一样， 代码冗余， 可读性不强，可以在项目中定义接口， 统一的处理数据的约定

接口的定义使用关键字interface + 接口的名字

**定义接口**

```
// 对某个变量进行约定
interface IPeopleProps {
    username:string
    age?:number   // ?非必填，可选项
    readonly gender:string
}
```

注意： 建议接口名字首字母大写

##### **使用接口定义一个对象**

```
// A页面   B页面 c页面
var obj:IPeopleProps = {username:'xiaobai',age:10,gender:"男"}
```

可以把接口理解为一种数据类型，使用的时候 和 简单数据类型一样 `变量名:接口名=数据`



##### 使用接口定义一个数组

没使用接口之前，定义数组， 而且数组每项是一个对象

```
var student1:{username:string,age?:number | null, gender:string}[] = [{username:'alice',age:20,gender:'男'}]
```

使用过接口后， 简化，更优雅

```
var student1:IPeopleProps[] = [{username:'alice',age:20,gender:'男'}]
```

或者

```
var student1:Array<IPeopleProps> = [{username:'alice',age:20,gender:'男'}]
```



接口一般是用来约束复杂数据类型的



### 3.接口定义函数的结构

function 接收参数 ， 返回值

函数类型接口就是对函数的约束 ， 也就是对函数的参数和返回值进行约束

使用函数接口类型的时候， 一般使用函数表达式

**使用函数接口**

先定义好函数接口， 定义函数接口的时候， 必须是 

`(参数名1：数据类型，参数2：数据类型):函数返回值数据类型`

```
// LoginFun函数名
interface ILoginfun {
    (account:string,password:string):number
}
```

**使用函数接口**

```
// 定义函数类型接口 定义  函数
const LoginSend:ILoginfun = (account,password)=>{
    // 你要处理的业务
    return 123
}
LoginSend('xiaowang','123456')
```

使用函数接口的时候， 参数可以简写如上， 参数可以不用写数据类型， 也可以写， 但是如果写，你必须写对



扩展： 定义一个函数， 函数的参数是对象， 返回值字符串

```
// 定义函数类型接口
interface IformFun {
    (obj:{account:string,password:string}):string
}
// 函数表达式
var formSubmit:IformFun = function(obj){
    return 'success'
}

let puiuu = formSubmit({account:'aaa',password:'123'})
```



### 4.可索引接口

可索引接口主要是针对复杂数据类型的， 一般是数组或者对象

数组的索引肯定是number,从0开始, 创建索引接口的时候， 因为索引是变量，所以都用如下方式创建

`[索引名:索引数据类型]:数据类型`

#### 数组的索引接口

**创建一个数组的索引接口**

```
interface NumberArray {
  [index: number]: number; // 数字索引，值为 number 类型
}
```

**使用数组的索引接口**

```
const arr: NumberArray = [1, 2, 3];
console.log(arr[0]); // 1（合法，符合索引签名）
// arr[0] = "a"; // 错误：不能将 string 赋值给 number
```

#### 创建对象的索引接口

对象的索引是字符串， 这里说的对象只的是es5中的object

```
interface StringDictionary {
  [key: string]: string; // 字符串索引，值为 string 类型
}

const dict: StringDictionary = {
  name: "Alice",
  age: "25", // 值必须是 string 类型
};

console.log(dict["name"]); // "Alice"
// dict.count = 100; // 错误：不能将 number 赋值给 string
```

### 5.接口继承与合并

```
interface IPerson {
    name:string
    age:number
}

interface IPerson2 extends IPerson {
    tel:number
}

let p:IPerson2 = {
    name:"小明",
    age:20,
    tel:213123
}

或者
interface IPerson {
    name:string
    age:number
}

interface IPerson {
    tel:number
}

let p:IPerson2 = {
    name:"小明",
    age:20,
    tel:213123
}
```



## **type别名**

type可以为任意类型创建别名，让代码更简介、可读性更强，同时能更方便地进行类型复用和扩展：

```
type Tdata = string;
```

没使用别名

```
var uname1:string | number = 'hello';
var uname2:string | number = 123;
```

使用别名(交叉类型) 或

```
type Tdata = string | number;

var uname1:Tdata = 'hello';
var uname2:Tdata = 123;
```

```
function printdata(data:Tdata):void{
	console.log(data)
}
printdata(1)
print("1") 都行

type s = "慢" | "快"
function aaa(data:s){

} 
aaa("快")  /* 可以选 */

type gender = 0 | 1 
let sex:gender = 2

```

扩展：

定义2个接口 IA1  IA2

```
interface IA1 {
    name:string,
    role:string
}

interface IA2 {
    name:string,
    role:string,
    menus:string[]
}
```

定义别名

```
type PersonData = IA1 | IA2;
```

使用别名

```
var arrNew:PersonData[] = [{name:'xiaohong',role:'普通'},{name:'xiaogang',role:'超级',menus:['首页','用户']}]
```



## 课堂练习

定义一个数组，里面存放用户信息。两种不同类型的用户（普通管理员和超级管理员）

普通管理员（id、name、role、dept, age）

超级管理员（id、name、role、menus:[{id :1,path:"/home"}],age）

**定义两个函数，传递一个数组进去**

1、返回所有的超级管理员

2、求年龄最小的用户是谁

**参考数据**

```
let myUsers = [
    {id:1,name:"xiaowang",role:"商品管理员",dept:"库管",age:20},
    {id:1,name:"xuaobo",role:'超级管理员', menus:[{id:1,path:"/home"}],age:18},
    {id:1,name:"xiaohong",role:'超级管理员',menus:[{id:1,path:"/home"}],age:12},
    {id:1,name:"xiaowei",role:'超级管理员',menus:[{id:1,path:"/home"}],age:50}
]
```



定义接口

```

// 普通管理员
interface INormalProps {
    id: number;
    name: string;
    role: string;
    dept:string;
    age:number;
}
// 超级管理员
interface ISuperProps {
    id: number;
    name: string;
    role: string;
    menus:{id:number,path:string}[];
    age:number;
}
// 别名
type UManageProps = INormalProps | ISuperProps;

```

**1、返回所有的超级管理员**

```
function getSuperMan(arr:UManageProps[]):UManageProps[]{
    // 过滤超级管理  如果只是过滤， 一般就是用filter, 除了过滤 
    let mydata = arr.filter((item)=>{
        return (item as ISuperProps).menus;
        // return item.role == '超级管理员'
    })
    return mydata;
}

let datas = getSuperMan(myUsers);
console.log(datas);
```

补充as关键字：

as是类型断言的关键字，作用是告诉编译器“我确定这个值就是某种类型”，让编译器按指定类型处理，避免类型检查错误。

let a1 = document.getElementById("abc") as HTMLDivElement

a1.innerHTML

a1.onclick = function(){}



**2、求年龄最小的用户是谁**

```
function findMinAge(arr:UManageProps[]):UManageProps{
    //方式一： 使用reduce求最小值
//    let datas =  arr.reduce((pre,next)=>{
//         return (pre.age - next.age)>0  ? next : pre
//     })
    //方式二： 先排序, 升序 ， 从小到大, 获取数组的第一项
    let datas = arr.sort((a,b)=>{
        return  a.age - b.age;
    })
    return datas[0]
}
let minobj = findMinAge(myUsers);
console.log(minobj);
```



使用别名(联合类型) 与

```
interface area {
    height:number
    width:number 
}

type address = {
    city:string
    road:string
    detail:string
}
type house = area & address

let myhouse:house = {
    city:"12",
    road:"34",
    detail:"324",
    height:11,
    width:32
}
```



### interface与type的区别

相同点：interface和type都可以用于定义对象结构，两者在许多场景中是可以互唤的。

不同点：

1.interface：更专注于定义对象和类、函数的结构，支持继承、合并

2.type：可以定义类型别名、联合类型、交叉类型，但不支持继承和自动合并



装饰器 不修改原有的结构  新增 新的内容  也就是便于 扩展 好维护（不动原有）

