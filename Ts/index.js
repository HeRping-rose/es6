var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Hello, World!');
console.log('Hello, World!');
var a = 1;
// 命名严格声明数据类型
var name1 = 'Ron'; // ts编译后会变成js
//当声明了基础数据类型后 就会严格按照数据类型来编译
// 如果不符合数据类型 就会报错
//基础number string boolean null undefined symble
// 引用 object array:类型[]=[]
// 特殊 any void never unknown enum(枚举类型)
// 这里的any表示任意类型 没有约束
// void表示没有返回值 一般用于定义函数 
console.log(name1);
var age = 18; // number类型
console.log(age);
var isOk = true; // boolean类型
console.log(isOk);
var nul = null; // null类型
console.log(nul);
var und = undefined; // undefined类型
console.log(und);
// let sym: symbol = Symbol();// symbol类型
// console.log(sym);
//数组 约束 <> 表示数组中存放的数据类型  两种方式都是一样的
var arr = [1, 2, 3]; // 数组类型
console.log(arr);
var arr1 = [1, 2, 3]; // 数组类型
console.log(arr1);
var arr2 = ['a', 'b', 'c']; // 数组类型
console.log(arr2);
var arr3 = [1, 'a', 2, 'b', 3, 'c']; // 数组类型 可以存放多种数据类型
console.log(arr3);
//any类型 可以存放任意数据类型  any类型一般不建议使用
var anyArr = [1, 'a', true, null, undefined];
console.log(anyArr);
//可能有歧义
var x = 'hello'; // string类型
var y = 123; // number类型 //any类型   只声明不给赋值 没有类型 也没有约束 就是隐式 any类型
x = y; // 可能会报错 因为x是string类型 y是number类型 y是any类型 所以不会报错 但可能会有歧义
console.log(typeof (x)); //x变成了number类型
//只要赋值了 我们其实也可以不给类型约束 他会自动推断类型 
var z = 'hello'; // z是string类型
console.log(z);
// z = 123; // 这里会报错 因为z是string类型 不能赋值为number类型
var c;
z = c; // 把一个any赋值给一个字符串型  不报错但是会有歧义
console.log(z); //undefined
// unKnown类型
var u; // unknown类型  表示未知类型
u = 123;
// z=u; // 这里会报错 因为unknown类型不能直接赋值给string类型
z = u; // 这里使用类型断言 把unknown类型转换为string类型
console.log(u); // 123
console.log(z); // 123
//对象  对象 数组 函数 
// let obj1:Object={}
var obj1;
obj1 = {};
obj1 = [];
obj1 = function () { }; // object类型 可以是对象 数组 函数等
// obj1=123// obj1='hello' // 这里会报错 因为string类型不是object类型
//要指定key-value的类型 创建一个约束的对象的变量 约束 key的名字 和value的类型
var obj = {
    name: 'Ron',
    age: 18,
    isOk: true // 可选属性 isOk 可以不写
};
console.log(obj);
// 也可以使用索引签名来约束对象的属性
// 索引签名表示对象的属性 key必须是字符串string  value可以是any
var person = {
    name: 'Ron',
    age: 18,
    gender: 'male',
    hobby: ['coding', 'reading'],
};
// //定义包含了对象的数组   方式二
var goods2 = [
    { name: 'iphone', price: 8888, stock: 100 },
    { name: 'ipad', price: 6888, stock: 200 },
];
// ]
//定义包含了对象的数组   方式一  规定对象的类型 防止后面乱写对象出错
var goods = [
    { name: 'iphone', price: 8888, stock: 100 },
    { name: 'ipad', price: 6888 },
    // {12:'阿是',2:2,2:'荣1'}
];
console.log(goods);
//或操作符  |
//元组类型  元组类型是一个特殊的数组类型 可以指定每个元素的类型和顺序 固定的长度与类型
// 不可变性 长度固定 类型固定 位置严格要求 
//使用场景  返回多个值 数据验证
var tuple = ['Ron', 18, true];
var response = ['success', 200, { data: [1, 2, 3] }];
console.log(tuple);
console.log(response);
//用元祖约束 函数 固定返回多个值
function sum() {
    var stu = "Ron";
    var score = [100, 80, 90];
    var total = score.reduce(function (acc, cur) { return acc + cur; }, 0); // 使用reduce方法计算总分//acc 是累加器 cur是当前值 0 是初始值
    return [stu, total, total / score.length];
}
var _a = sum(), name2 = _a[0], total = _a[1], average = _a[2]; // 解构赋值
console.log(name2, total, average); // Ron 270 90
//函数 
function fn() {
    // console.log('Hello, Function!');
    console.log(true);
    //这个函数 有返回值/?  并没写返回值 不写也是有返回值的 默认返回undefined未定义
    // return undefined; //默认就是有这句话的
} //ts中如果没有规定写返回值 那么默认是没有,返回值的类型为void空 
// 当看到void立马就知道这个函数就不需要取返回值 也不会拿返回值去做其他事
var res = fn(); //调用函数fn() 调用结束后可以得到这个函数的返回值是 undefined 然后把 undefined 赋给 res
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
function sum1(a, b) {
    return a + b;
}
function factory(info) {
    return { res: 'success', data: info.price * .8 };
}
factory({ brand: "XiaoMi", price: 123 });
function pay(info, payAcount, payAddress) {
    return { state: 'success', code: 200, total: payAcount };
}
var payIn = pay([{ name: "phone", price: 6899 }, { name: "pencil", price: 489 }], 1245, { address: "xxx小区", phone: 159 });
console.log(payIn);
//...如果用在形参上 叫rest参数 剩余参数
function sumScore(name) {
    var scores = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        scores[_i - 1] = arguments[_i];
    }
    console.log(name, scores);
    return scores.reduce(function (pre, cur) { return pre += cur; }, 0);
}
var resScore = sumScore("Ron", 99, 80, 95);
console.log(resScore);
//枚举类型  增加代码可读性> 减少代码量  防止误操作
//当枚举类型值不赋值时，默认从0开始递增  当枚举类型值赋值时，默认从指定的值开始递增
var Code;
(function (Code) {
    Code[Code["SUCCESS"] = 200] = "SUCCESS";
    Code[Code["ERROR"] = 400] = "ERROR";
    Code[Code["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    Code[Code["NOT_FOUND"] = 404] = "NOT_FOUND";
    Code[Code["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(Code || (Code = {}));
console.log(Code);
console.log(Code.SUCCESS); //200
console.log(Code['SUCCESS']); //200
console.log(Code[400]); //ERROR
function load(code) {
    switch (code) {
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
load(Code.SUCCESS);
var Gender;
(function (Gender) {
    Gender["MALE"] = "\u7537";
    Gender["FEMALE"] = "\u5973";
    Gender["UNKNOWN"] = "\u672A\u77E5";
})(Gender || (Gender = {}));
function sex(gender) {
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
sex("女");
var direction;
(function (direction) {
    direction[direction["UP"] = 0] = "UP";
    direction[direction["DOWN"] = 1] = "DOWN";
    direction[direction["LEFT"] = 2] = "LEFT";
    direction[direction["RIGHT"] = 3] = "RIGHT";
})(direction || (direction = {}));
function move(dir) {
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
move(direction.UP);
// ts中的类定义  需要对属性进行约束 
var People = /** @class */ (function () {
    //实例属性
    function People(name, age) {
        // 静态属性 实例属性约束
        this.username = 'ron';
        this.tel = 120;
        // this.tel=this.tel; //当赋值之后默认添加这个属性
        this.username = name;
        this.age = age;
    }
    People.prototype.hello = function () {
        console.log(this.username);
        console.log('hello');
    };
    People.hobby = ['画画', '打游戏'];
    return People;
}());
var p = new People('Ron', 23);
console.log(p);
// console.log(p.hello());
var Peo = /** @class */ (function () {
    // public firstname:string;
    // lastname:string;
    // cardNumber:number;
    // password:string
    //简洁写法 直接在构造函数的参数中给修饰符
    function Peo(firstname, lastname, cardNumber, password) {
        this.firstname = firstname;
        // this.firstname = firstname;
        // this.lastname = lastname;
        // this.cardNumber = cardNumber;
        // this.password = password;
    }
    Peo.prototype.getInfo = function () {
        console.log(this.firstname);
    };
    return Peo;
}());
var Peo1 = /** @class */ (function (_super) {
    __extends(Peo1, _super);
    function Peo1(firstname, lastname, cardNumber, password) {
        return _super.call(this, firstname, lastname, cardNumber, password) || this;
    }
    Peo1.prototype.getName = function () {
        console.log(this.firstname);
    };
    return Peo1;
}(Peo));
var peo = new Peo("李", "三", 123456789, "123456");
peo.getInfo(); //内部访问
console.log(peo.firstname); //外部访问
;
var peo1 = new Peo1("张", "三", 123456789, "123456");
// export {};
