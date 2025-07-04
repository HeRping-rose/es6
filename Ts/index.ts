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
let y:any=123;// number类型 //any类型
x=y;// 可能会报错 因为x是string类型 y是number类型 y是any类型 所以不会报错 但可能会有歧义
console.log(typeof(x));//x变成了number类型

// export {};