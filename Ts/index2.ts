// 类的继承 
// 修饰符public  protected  private readonly

 
//导出一个空对象  防止ts编译时报错
// 不在乎导出什么 只要存在导出 就会被打包成一个独立的模块
// 独立的模块拥有独立的命名空间
// 这样就可以在html中引用了

// ts编译后会变成js

// protected 受保护的 属性外部不能直接调用 受保护的方法外部不能访问 子类继承之后可以使用
// private 私有属性 私有方法  外部不能访问 不能被继承 子类也不能访问 用于敏感数据处理|内部状态封装
// readonly 只读 不能修改 添加在 修饰符之后 配置常量 ID等不可变数据 只能在声明时|构造函数内初始化

//简写 
class Animal{
    // name:string;//属性 名称
    // category:string;//种类  科

    // 参数前添加修饰符  简写
    constructor(public name:string,protected category:string){
        // this.name = name;
        // this.category = category;
    }

    // 获取种类
    getCate(){
        console.log(`这个是${this.name}的种类是${this.category}`);
    }
}

// dog类
class Dog extends Animal{
    bark:string;
    constructor(name:string,category:string){
        super(name,category);
        this.bark='汪汪汪'; // 叫
    }

    // 获取信息
    getInfo(){
        console.log(`这个是${this.name}的种类是${this.category}叫${this.bark}`);
        this.getCate();
    }
}

let an=new Dog('旺财','犬科');
console.log(an.name);
console.log("🚀 ~ an.bark:", an.bark)
an.getCate();
an.getInfo();


// 抽象类 子类重写抽象类中的抽象方法 子类必须严格执行 不能被实例化 只能被继承
// 一般)不用于具体实现 

abstract class Package{
    constructor (public weight:number,public price:number){}
    showInfo()
    {
        console.log(`这个包裹的重量是${this.weight}kg 单价是${this.price}元/kg 计算的价格是:${this.countWeight()}元`);
    }
    // countWeight()
    // {
    //     console.log(`这个包裹的体积是${this.weight}kg`);
    // }
    abstract countWeight():number;
    abstract getAddress():string;
}
class standerPackage extends Package
{
    constructor(weight:number,price:number,public address:string)
    {
        super(weight,price);
        this.address = address;
    }
    countWeight(): number  {
        return this.weight * this.price;
        
    }
    getAddress(): string
    {
        // console.log(`地址是：${this.address}`);
        return `包裹的地址是：${this.address}`;
    }
}

let sp=new standerPackage(10,2,'四川');
console.log(sp.countWeight());
sp.showInfo();
let adress=sp.getAddress();
console.log("🚀 ~ adress:", adress)


// 接口interface 只定义结构 不实现逻辑 类,对象,函数的一种契约 代码一致性

interface IPerson{
    name:string;
    age:number;
    show(n:number):void;
}

// type别名 : 或|  从几种'值' 里的选出其中一个  和 与'&'从几个值中取出交叉的部分
// 别名能定义的值可以是任意值 
type snb=string | number | boolean;
let a:snb=true;//
a=1
a="male"
console.log("🚀 ~ a:", a);


interface Irouter1{
    path:string;
    info:string;
}
interface Irouter2{
    path:string;
    info:string;
    children:Irouter1[]; // children?:Irouter1[];
    // children:{path:string,info:string;}[];
}
type Irouter=Irouter1 | Irouter2;
// 路由 
let roter:Irouter[]=[
    {path:"/",info:'xx1'},
    {path:"/news",info:'xx2'},
    {path:"/news",info:'xx2',children:[{path:"/news/1",info:'xx3'}]},
]

console.log("🚀 ~ roter:", roter[2])



type TPerson={
    name:string;
    age:number;
    show(n:number):void;
}
let p:IPerson={
    name:'Ron',
    age:18,
    show(){
        console.log(`姓名：${this.name} 年龄：${this.age}`);
    }
}
let pList:IPerson[]=[
    {name:'Ron',age:18,show() {
        console.log(`姓名：${this.name}`);
    },},
    {name:'Ronnie',age:18,show() {
        console.log(`姓名：${this.name}`);
    },},
]
console.log("🚀 ~ p:", p)
console.log("🚀 ~ pList:", pList)

// 接口规范类
class Person implements IPerson{
    constructor(public name:string, public age:number){
    }
    show(n:number){
        console.log(`姓名：${this.name} 年龄：${this.age}`);
        console.log(`编号：${n}`);
    }
}
let per = new Person('Ronnie',20)
per.show(520)

// 接口规范函数的格式(规定输入的参数与返回值类型)

interface IFn{
    (str:string,n1:number,n2:number):number
}

let sum:IFn = function(str:string,n1:number,n2:number):number{
    // console.log(str);
    return n1+n2;
}
sum('Ronnie',520000,1314);
console.log(sum('Ronnie',520000,1314));

// 可索引接口 

// 接口继承 和 合并叠加
interface ISuperProps{
    id:number;
    name:string;
    role:string;
    menus:{id:number,path:string}[];
    age:number;
}
let myUsers:ISuperProps[] = [
    {id:1,name:'Ronnie',role:'admin',menus:[],age:18},
    {id:2,name:'Ronnie',role:'admin',menus:[],age:18},

    {id:3,name:'Ronnie',role:'admin',menus:[],age:18},
]
function getUser(list:ISuperProps[]){
    return list.filter(item=>(item as ISuperProps).menus);//类型断言
}
getUser(myUsers)


// 泛型 函数 <T>  里面的T表示任意类型 (类型 形参  
//  函数调用时 带了<string> 类型参数就变成了 (实参)
// 在 <T> 就接收了这一次调用传入的参数 T=string
// 接下来给普通的(name:T) 形参赋值
// :T 表示返回值类型
function say<T>(name:T):T{ 
    return name;
}
say<string>('hello')
console.log("🚀 ~ say<string>('hello'):", say<string>('hello'))
say<number>(123);
console.log("🚀 ~ say<number>(123):", say<number>(123))
//自动推断  
say(false);
console.log(say(false));

// 接口泛型 
interface IName<T>{
    name:string;
    age:number;
    info:T;
}
let na:IName<string> = {name:'张三',age:18,info:'hello'}
console.log("🚀 ~ na:", na)
interface smallobj{state:number,result:number}

let na1:IName<smallobj> = {
    name:"rong",
    age:20,
    info:{state:200,result:123}
}
console.log("🚀 ~ na1:", na1)

// 泛型 类
 class  TestClass<T>{
    constructor(public list:T[]){}
    add(val:T){
        this.list.push(val);// 
    }
 }
 let list1=new TestClass(["phone","computer"]);
 let list2=new TestClass([100,399]);

 // 实现增加两种不同类型的 数组
list1.add("mouse");// 添加mouse
list2.add(50);// 添加 number
console.log("🚀 ~ list1:", list1)
console.log("🚀 ~ list2:", list2)

interface inter{
    name:string,
    age:number,
    hobby:string[],
}

type type=keyof inter; // 获取对象中的属性名  "name" | "age" | "hobby" 静态属性不包含在内
// as 断言+keyof 获取对象中的属性名

let interObj:inter={
    name:"Ronnie",
    age:23,
    hobby:["三","瓦","农"],
}
let nameKey="name" as type;//用键值取别名 判断 用到的时候判断key 值
let hobbyKey="hobby" as type;
console.log(interObj[nameKey]);//获取对象属性名Key
console.log(interObj[hobbyKey]);
let hob=interObj[hobbyKey];
console.log(typeof(hob));
// 判断是否是数组 类型守卫（type guard）对hob变量进行运行时类型检查，确保其为数组后再访问索引[0]。
if (Array.isArray(hob)) {
    console.log(hob[0]); // 安全访问
} else {
    console.log("hob is not an array");
}
console.log((hob as Array<string>)[2]);

// 与泛型结合 动态获取 类型的key
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const name=getValue({name:"alen",age:22},"name");
console.log(name);


// 对泛型进行约束 <T 必须是一种包含了length属性对象的子集或者实例
function getLength<T extends {length:number}>(arg: T): number {//{then?:    }
        return arg.length;

}
console.log(getLength([1,2,3]));//数组有length属性 //3
console.log(getLength('1,2,3'));//字符串有length属性 //5
// console.log(getLength(333));//number没有类型属性


function merge<T extends object, U extends {[K in keyof T]?:T[K] }> (target:T, source:U): T & U {

    return {...target, ...source};
}
const mer=merge(
    {name:'Ron',age:20},
    {hobby:'Ron',age:18}
)
console.log(mer);


// - `T extends Array<infer U> ? U : T`：条件类型，提取数组元素类型 `U`。
// - `infer` 关键字用于在条件类型中捕获类型变量。
type FirstElement<T> = T extends Array<infer U> ? U : T;
function process<T>(arg:T):FirstElement<T>{
    if(Array.isArray(arg)){
        return arg[0] as FirstElement<T>;// as
    } 
    return arg as FirstElement<T>;
}
const num =process([1,2,3]) //类型 为number
console.log("🚀 ~ num:", num)//1
const str =process('hello') //类型为string
console.log("🚀 ~ str:", str)//hello
     

// 1. **类型安全**：在编译阶段捕获错误（如访问不存在的属性）。
// 2. **代码复用**：一套逻辑处理多种符合约束的类型。
// 3. **精确类型推导**：IDE 能根据约束提供更准确的类型提示。











// function fetchData(): Promise<number> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(10), 1000);
//   });
// }

// async function getData() {
//   const data = await fetchData();
//   console.log('第三次拿到数据:', data); // 输出 10
// }
// fetchData()
//   .then(data => {
//     console.log('第一次拿到数据:', data); // 输出 10
//     return data * 2; // 返回新值
//   })
//   .then(result => {
//     console.log('第二次拿到数据:', result); // 输出 20
//   })
//   .catch(error => {
//     console.error('发生错误:', error);
//   });

// getData();






export {};