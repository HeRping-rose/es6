console.log('Hello, World!');
console.log('Hello, World!');
let a = 1;

// 命名严格声明数据类型
let name1: string = 'Ron'; // ts编译后会变成js
//当声明了基础数据类型后 就会严格按照数据类型来编译
// 如果不符合数据类型 就会报错
//基础number string boolean null undefined symble
// 引用 object array:类型[]=[]
// 特殊 any void never unknown enum(枚举类型)
// 这里的any表示任意类型 没有约束
// void表示没有返回值 一般用于定义函数 
console.log(name1);

let age: number = 18;// number类型
console.log(age);
let isOk: boolean = true;// boolean类型
console.log(isOk);
let nul: null = null;// null类型
console.log(nul);
let und: undefined = undefined;// undefined类型
console.log(und);
// let sym: symbol = Symbol();// symbol类型
// console.log(sym);

//数组 约束 <> 表示数组中存放的数据类型  两种方式都是一样的
let arr:Array<number> = [1, 2, 3];// 数组类型
console.log(arr);

let arr1: number[] = [1, 2, 3];// 数组类型
console.log(arr1);

let arr2: string[] = ['a', 'b', 'c'];// 数组类型
console.log(arr2);

let arr3: Array<string | number> = [1, 'a', 2, 'b', 3, 'c'];// 数组类型 可以存放多种数据类型
console.log(arr3);

//any类型 可以存放任意数据类型  any类型一般不建议使用
let anyArr: any[] = [1, 'a', true, null, undefined];
console.log(anyArr);

//可能有歧义
let x:string='hello';// string类型
let y:any=123;// number类型 //any类型   只声明不给赋值 没有类型 也没有约束 就是隐式 any类型
x=y;// 可能会报错 因为x是string类型 y是number类型 y是any类型 所以不会报错 但可能会有歧义
console.log(typeof(x));//x变成了number类型

//只要赋值了 我们其实也可以不给类型约束 他会自动推断类型 
let z = 'hello'; // z是string类型
console.log(z);

// z = 123; // 这里会报错 因为z是string类型 不能赋值为number类型
let c:any;
z=c; // 把一个any赋值给一个字符串型  不报错但是会有歧义
console.log(z);//undefined

// unKnown类型
let u: unknown; // unknown类型  表示未知类型
u=123;
// z=u; // 这里会报错 因为unknown类型不能直接赋值给string类型
z=u as string;// 这里使用类型断言 把unknown类型转换为string类型
console.log(u);// 123
console.log(z);// 123

//对象  对象 数组 函数 
// let obj1:Object={}
let obj1:object
obj1={}
obj1=[]
obj1=function(){}// object类型 可以是对象 数组 函数等
// obj1=123// obj1='hello' // 这里会报错 因为string类型不是object类型

//要指定key-value的类型 创建一个约束的对象的变量 约束 key的名字 和value的类型
let obj: { name: string; age: number; isOk?: boolean } = {
  name: 'Ron',
  age: 18,
  isOk: true// 可选属性 isOk 可以不写
};
console.log(obj);  

// 也可以使用索引签名来约束对象的属性
// 索引签名表示对象的属性 key必须是字符串string  value可以是any
let person:{name:string,age:number,[key:string]:any} = {
    name: 'Ron',
    age: 18,
    gender: 'male',
    hobby: ['coding', 'reading'],
}

// //定义包含了对象的数组   方式二
let goods2:Array<{name:string,price:number,stock:number}>=[
    {name:'iphone',price:8888,stock:100},
    {name:'ipad',price:6888,stock:200},
]

// ]
//定义包含了对象的数组   方式一  规定对象的类型 防止后面乱写对象出错
let goods:{name:string,price:number,stock?:number}[]=[
    {name:'iphone',price:8888,stock:100},
    {name:'ipad',price:6888},
    // {12:'阿是',2:2,2:'荣1'}
]
console.log(goods);
//或操作符  |

//元组类型  元组类型是一个特殊的数组类型 可以指定每个元素的类型和顺序 固定的长度与类型
// 不可变性 长度固定 类型固定 位置严格要求 
//使用场景  返回多个值 数据验证
let tuple: [string, number, boolean] = ['Ron', 18, true];
let response:[string,number,{data:number[]}] = ['success', 200, {data:[1,2,3]}];
console.log(tuple); 
console.log(response);

//用元祖约束 函数 固定返回多个值
function sum():[string,number,number]{
    let stu="Ron";
    let score=[100,80,90];
    let total=score.reduce((acc, cur) => acc + cur, 0); // 使用reduce方法计算总分//acc 是累加器 cur是当前值 0 是初始值
    return [stu,total,total/score.length];
}

let [name2, total, average] = sum(); // 解构赋值
console.log(name2, total, average); // Ron 270 90

//函数 
function fn(){
    // console.log('Hello, Function!');
    console.log(true);
    //这个函数 有返回值/?  并没写返回值 不写也是有返回值的 默认返回undefined未定义
    // return undefined; //默认就是有这句话的
}  //ts中如果没有规定写返回值 那么默认是没有,返回值的类型为void空 
// 当看到void立马就知道这个函数就不需要取返回值 也不会拿返回值去做其他事

let  res=fn();//调用函数fn() 调用结束后可以得到这个函数的返回值是 undefined 然后把 undefined 赋给 res
//if(条件表达式) 中无论写什么 他都会自动的调用 boolean() 方法 把 res 转换成布尔值 
//值是 true 进入 if 块 值是 false 不进入 else 块
console.log(res); // undefined

//js中只有 5个假值 0, '', null, undefined, NaN  其他都为真值
// if(res){  //js中可以使用  但是在ts中会报错 因为res是void 空 不能用作条件表达式
//     console.log('res is true');
// }else{
//     console.log('res is false');
// }
//函数 接收两个参数他们都是 number 那么函数返回值也必须是 number
function sum1(a: number, b: number): number {
    return a + b;
}
function factory(info:{brand:string,price:number}):{res:string,data:number}{
    return {res:'success',data:info.price*.8}
}
factory({brand:"XiaoMi",price:123})
function pay(
    info:{name:string,price:number}[],
    payAcount:number,
    payAddress:{address:string,phone:number}
):{state:string,code:number,total:number}{
    return {state:'success',code:200,total:payAcount}
}

let payIn=pay([{name:"phone",price:6899},{name:"pencil",price:489}],1245,{address:"xxx小区",phone:159})
console.log(payIn);

//...如果用在形参上 叫rest参数 剩余参数
function sumScore(name:string,...scores:number[]){
    console.log(name,scores);
    return scores.reduce((pre,cur)=>pre+=cur,0)
}
let resScore=sumScore("Ron",99,80,95)
console.log(resScore);


//枚举类型  增加代码可读性> 减少代码量  防止误操作
//当枚举类型值不赋值时，默认从0开始递增  当枚举类型值赋值时，默认从指定的值开始递增
enum Code{
    SUCCESS=200,
    ERROR=400,//错误
    UNAUTHORIZED=401,//未授权
    NOT_FOUND=404,//未找到
    SERVER_ERROR=500,//服务器错误
}
console.log(Code);
console.log(Code.SUCCESS);//200
console.log(Code['SUCCESS']);//200
console.log(Code[400]);//ERROR

function load(code:Code){
    switch(code){
        case Code.SUCCESS:
            console.log('成功');
            break;
        case Code.ERROR:
            console.log('错误');
            break;
        case Code.UNAUTHORIZED:
            console.log('未授权');
            break;
        case Code.NOT_FOUND:
            console.log('未找到');
            break;
        case Code.SERVER_ERROR:
            console.log('服务器错误');
    }
    return response;
}
load(500);
load(Code.SUCCESS)

enum Gender{
    MALE="男",
    FEMALE="女",
    UNKNOWN="未知"
}
function sex(gender:Gender){
    switch (gender) {
        case Gender.MALE:
            console.log('男');
            break;
        case Gender.FEMALE:
            console.log('女');
            break;
        default:
            console.log('未知');
    }
}
sex(Gender.MALE);
sex("女" as Gender);


enum direction{
    UP,
    DOWN,
    LEFT,
    RIGHT
}
function move(dir:direction){
    switch (dir) {
        case direction.UP:
            console.log('向上');
            break;
        case direction.DOWN:
            console.log('向下');
            break;
        case direction.LEFT:
            console.log('向左');
            break;
        case direction.RIGHT:
            console.log('向右');
            break;
    }
}
move(direction.UP)


// ts中的类定义  需要对属性进行约束 

class People{
    static hobby:string[]=['画画','打游戏'] ; 

    // 静态属性 实例属性约束
    username:string='ron';
    age:number;
    tel:number=120;
    //实例属性
    constructor(name:string,age:number){
        // this.tel=this.tel; //当赋值之后默认添加这个属性
        this.username = name
        this.age = age;
    }
    hello(){
        console.log(this.username); 
        console.log('hello');
    }
}
let p = new People('Ron',23);
console.log(p);
// console.log(p.hello());


class Peo{
    // public firstname:string;
    // lastname:string;
    // cardNumber:number;
    // password:string
    //简洁写法 直接在构造函数的参数中给修饰符
    constructor(public firstname:string,lastname:string,cardNumber:number,password:string){
        // this.firstname = firstname;
        // this.lastname = lastname;
        // this.cardNumber = cardNumber;
        // this.password = password;
    }
    getInfo(){
        console.log(this.firstname);
    }
}
class Peo1 extends Peo{
    constructor(firstname:string,lastname:string,cardNumber:number,password:string){
        super(firstname,lastname,cardNumber,password);
    }
    getName(){
        console.log(this.firstname);
    }
}

let peo=new Peo("李","三",123456789,"123456");
peo.getInfo();//内部访问
console.log(peo.firstname);//外部访问
;
let peo1=new Peo1("张","三",123456789,"123456");







    // export {};