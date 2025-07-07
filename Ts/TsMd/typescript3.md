## TS 泛型

泛型允许我们在定义函数、类或接口时，使用类型参数来表示：来指定的类型，这些参数在具体使用时，才被指定 具体的类型。泛型能让同一段代码适用于多种类型，同时仍然保持类型的安全性。



## 泛型函数

泛型函数标识<>紧跟函数，然后进行定义，可以理解为数据类型的一种传递

以前没有使用泛型函数之前， 如果函数的入参和返回值都一样的时候，而且有多个页面需要使用

```
// A页面
function sayhello1(name:string,country:string):string{
    // 你要做的事情
    return name;
}
//B页面
function sayhello2(name:number,country:number):number{
    // 你要做的事情
    return name;
}
// C页面
function sayhello3(name:boolean,country:boolean):boolean{
    // 你要做的事情
    return name;
}
```

需要定义多个函数， 代码冗余，不方便维护



使用泛型函数的方式简化代码

**泛型函数的定义**

```
function HelloFun<T>(name:T,country:T):T {
    // 业务逻辑
    return name
}
```

**使用泛型函数**

```
HelloFun<string>('alice','china')
```

如果你传的参数不是字符串， 会报错， 因为和泛型函数的约定不一致



**强调：不管是定义泛型函数还是使用泛型函数， 都是<>紧跟函数，定义泛型函数的时候， 一般使用大写的T**



```
// 将数组每个元素转换为其类型的数组
function toArray<T>(arg: T): T[] {
  return [arg];
}

const numArray = toArray(1); // 类型为 number[]
const strArray = toArray("a"); // 类型为 string[]
```



## 定义多个泛型变量



```
// A页面
function sayhello11(name:string,count:number):string{
    // 你要做的事情
    return name;
}
//B页面
function sayhello22(name:number,count:string):number{
    // 你要做的事情
    return name;
}
```

当公共的函数， 接收多个参数， 但是参数数据类型不一致的时候，可以采用泛型函数， **并且传多个泛型变量简化代码**

使用方式也是<>紧跟函数

```
// 定义泛型函数， 但是需要接收2个泛型数据类型
function HelloFun2<T,U>(name:T,count:U):T{
    return name
}

```

使用泛型函数， 必须按照函数函数的方式传递数据类型， 以逗号分隔

```
// 使用泛型函数， 传数据类型
var oplll = HelloFun2<string,boolean>('aaa',true)
```

定义好泛型后， 传入参数的时候 必须按照你传入参数的数据数据类型传递



## 泛型接口

```
interface Iperson<T>{
   name:string,
   age:number,
   info:T
}
type detail = {
    state:number,
    result:Array<number>
}
let p9:Iperson<string> = {
   name:"tom",
   age:18,
   info:""
}
```





## 泛型类

定义一个class类，有list参数 ，是string[]，add添加

```
class TestClass {
    list:string[];
    constructor(arr:string[]){
        this.list = arr;
    }
    add(num:string) {
        this.list.push(num)
    }
    getList():string[]{
        return this.list
    }
}
```

目前定义的这个类， list参数必须是string[], 如果需求有发生改变， 需要list类型为number[], 或者对象类型的数据。 不方便进行扩展了

所以使用泛型类的方式定义， 把参数的数据类型作为变脸传递给类



定义泛型类的方式和函数泛型一样， 都是都函数后面紧跟<> 

**定义泛型类**

```
// 定义好了泛型类
class TestClassEl<T> {
    list:T[];
    constructor(arr:T[]){
        this.list = arr;
    }
    add(num:T) {
        this.list.push(num)
    }
    getList():T[]{
        return this.list
    }
}
```

**使用泛型类**

```
// 使用泛型类 ， list - string[]
var list1 = new TestClassEl<string>([])
list1.add('111')
list1.add('123')

// list -> number[]
var  list2 = new TestClassEl<number>([1])
list2.add(3)
list2.add(5)
```

练习：list是一个数组， 数组的每项是一个对象, 对象包含name和age

```
// 数据类型 接口 也是一种数据类型
interface IStuRrops {
    name:string,
    age?:number
}
var list3 = new TestClassEl<IStuRrops>([])
list3.add({name:'alice',age:10})
list3.add({name:'xiaohong'})
console.log(list3.list,'学生列表');
```







## keyof的使用

`keyof` 是一个非常强大的类型操作符，用于获取某个类型的**所有键（属性名）组成的联合类型**。

```
interface User {
  id: number;
  email: string;
}

type UserKeys = keyof User; // "id" | "email"
```

```
class Point {
  x: number;
  y: number;
  static origin = { x: 0, y: 0 };
}

type PointKeys = keyof Point; // "x" | "y"（静态属性不包含在内）
```

```
type Person = {
  name: string;
  age: number;
  isAdult: boolean;
};

type PersonKeys = keyof Person; // 等价于 "name" | "age" | "isAdult"

const key: PersonKeys = "age"; // 合法
// const invalidKey: PersonKeys = "gender"; // 错误："gender" 不在联合类型中
```

##### 例：

在js环境中如下方式，没有问题，可以正确访问

```
var peopleObj = {
    name:'alice',
    age:20,
    hobby:['唱歌']
}

var nameKey = 'name';   // age, hobby
peopleObj[nameKey]
```



在ts中， 如果属性是变量的时候， 获取对象中的某个属性 需要使用as 断言 + keyof实现

```
// 定义接口
interface IPeopleObjProps {
    name: string;
    age: number;
    hobby: string[];
}
// 获取接口的key的集合 
type DPeople = keyof IPeopleObjProps;    // 获取到的联合类型赋值给一个别名DPeople

项目读取对象属性
var peopleObj:IPeopleObjProps = {
    name:'alice',
    age:20,
    hobby:['唱歌']
}

var nameKey = 'name';   // age, hobby 
peopleObj[nameKey]  // 报错
peopleObj[nameKey as DPeople]

或者不使用别名 直接 
peopleObj[nameKey as keyof IPeopleObjProps ]
```

###  **与泛型结合：动态获取类型的键**

在泛型中，`keyof` 常用于约束参数必须是类型的某个键：

```
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "Alice", age: 30 };
const name = getProperty(person, "name"); // 类型为 string
// const invalid = getProperty(person, "gender"); // 错误："gender" 不是 Person 的键
```

**关键点**：

- `K extends keyof T`：约束 `K` 必须是 `T` 的键（属性名）。
- `T[K]`：索引访问类型，表示 `T` 中 `K` 属性的类型（如 `Person["name"]` 为 `string`）。



### 泛型约束



##### **1. `extends` 在泛型约束中的含义**

在泛型中，`extends` 表示**类型约束**：
**`K extends T` 意味着 `K` 必须是 `T` 的子类型**（即 `K` 的类型范围不能超出 `T`）。

```
// 普通泛型（无约束）：T 可以是任意类型
function identity<T>(arg: T): T {
  return arg;
}

// 带约束的泛型：T 必须是 string 的子类型（即 T 只能是 string 或其字面量类型）
function printString<T extends string>(arg: T): T {
  console.log(arg);
  return arg;
}

identity(123); // ✅ T 为 number
// printString(123); // ❌ 错误：number 不满足 string 约束
printString("hello"); // ✅ T 为 string
```

### **案例 1：基础约束 - 限制泛型为特定类型的子类型**

**需求**：创建函数，仅处理包含 `.length` 属性的类型（如数组、字符串）

```
// 约束 T 必须包含 length 属性
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

console.log(getLength([1, 2, 3])); // 3
console.log(getLength("hello"));  // 5
// console.log(getLength(123));    // ❌ 错误：number 没有 length 属性
```

### **案例 4：多泛型参数的交叉约束**

**需求**：实现函数，合并两个对象，并确保第二个对象的属性类型与第一个对象兼容。

```
function merge<T extends object, U extends { [K in keyof T]?: T[K] }>(
  target: T,
  source: U
): T & U {
  return { ...target, ...source };
}

const merged = merge(
  { name: "Alice", age: 30 },
  { age: 31, hobby: "reading" } // ✅ age 类型兼容，hobby 是新增属性
);

// const error = merge(
//   { name: "Alice" },
//   { name: 123 } // ❌ 错误：number 不能赋值给 string
// );
```

### **案例 5：条件类型 + 约束**

**需求**：创建函数，根据参数类型返回不同结果类型（若为数组则返回第一个元素类型，否则返回原类型）。

```
type FirstElement<T> = T extends Array<infer U> ? U : T;

function process<T>(arg: T): FirstElement<T> {
  if (Array.isArray(arg)) {
    return arg[0] as FirstElement<T>; // 类型断言（运行时逻辑需要）
  }
  return arg as FirstElement<T>;
}

const num = process([1, 2, 3]); // 类型为 number
const str = process("hello");   // 类型为 string
```

**关键点**：

- `T extends Array<infer U> ? U : T`：条件类型，提取数组元素类型 `U`。
- `infer` 关键字用于在条件类型中捕获类型变量。

### **泛型约束的核心价值**

1. **类型安全**：在编译阶段捕获错误（如访问不存在的属性）。
2. **代码复用**：一套逻辑处理多种符合约束的类型。
3. **精确类型推导**：IDE 能根据约束提供更准确的类型提示。

