let name='zs'
let age=20
let obj={
    name,//name:name 一样的时候可以省略
    age,//age:age
};
console.log(obj);

//对对象解构
// let{foo:foo,bar:bar}={foo:'foo' ,bar:'bar'}
// let{foo,bar}={foo:'foo' ,bar:'bar'}
// console.log("🚀 ~ foo:", foo+"🚀 ~ bar:", bar)

let{foo:bar}={foo:'foo' ,bar:'bar'}
console.log(bar)//foo

let{foo}={foo:'foo' ,bar:'bar'}
console.log(foo)//foo

let {first:f,second:s}={first:'hello',second:'word'}
console.log(f,s);//hello,word
//对象的解构赋值 内部机制 是先找到 同名属性 然后再复制给对应的变量 真正 被赋值的是后者不是前者

let obj1={
    p:['hello',{y:'word'}],
};
let{p:[x,{y:y}]}=obj1   //左边的解构和对象的结构要一致 要的变量进行替换然后 赋值
console.log(x,y);

let arr=[];
let obj2={};
({foo:obj2.prop,bar:arr[0]}={foo:123,bar:true})
console.log(obj2,arr);//{prop: 123} [true]

//对象的解构依然是可以赋默认值
let {a=3}={};
console.log(a);

let {b,c=5}={x:1}
console.log(b,c);//1,5


//默认值生效的条件是 对象 的属性值严格等于undefined

let {d=3}={x:undefined} //d=3
let {e=3}={x:null} //e=null

//如果解构失败就返回undefined
let {fooo}={bar:'123'}//undefined

//由于数组本质上是特殊的对象 因此 可以对数组进行对象属性的解构

let arr1=[1,2,3];
let {0:first,[arr1.length-1]:last}=arr1
console.log(first,last);//1,3  

//字符串解构   字符串会被解构成一个 类似数组的对象

const [g,h,z,j,k]='hello';
console.log(g,h,z,j,k);

const {length:len}='hello';//len=5

//解构的规则 只要等号右边的值不是 对象和数组 就将他转化 为对象 
// 由于 null 和 undefined无法转化为对象 所以 对二者的解构会报错

// let {prop:o }=null ; //或者undefine 会报错 Cannot destructure property 'prop' of 'null' as it is null.


// 解构赋值的作用  
// 1. 交换变量 
let p=1;
let q=2;
[p,q]=[q,p]
console.log(p,q);//2,1

// 2. 取出函数返回的多个值
function exam(){
    return [1,2,3]
};
const [r,t,u]=exam();
console.log(r,t,u);//1,2,3

function mf([v,w,vw]) {
    return v+w+vw
}
console.log(mf([1,2,3]));//数组是有序的

function fun({x,y,z}) {
    return x+y+z
}
console.log(fun({x:5,z:10,y:2}));

// 提取JSON数据  获取后端接口中想要的数据 或者属性
let jsonData={
    id:2,
    status:'OK',
    flag:true,
    data:[1,2,3,4,5,6],
    isSelect:true,
    enable:true
};
let {id,status,data:da}=jsonData;
console.log(id,status);
console.log(da);

//函数的扩展    函数的参数可以赋初值 

function log(x,y='world') {
    console.log(x,y);
}
log('hello')
log('hello','china')
log('hello','') //空字符串就是空字符串拼接  null 同样  只有undefine才是 默认值
//通常情况下 定义默认的参数 应该数行数的尾参数, 因为这样 比较容易看出到底省略那些参数 
// 如果 非尾部的参数设置了默认值 实际上这个参数无法省略

// 函数的length属性实际上是获取参数的个数 

//函数在传入;了默认参数 后 length就会失真
// console.log((function uhsdu({x,y,z}) {
// }).length);


//rest 参数 :用于获取 参数的多余 参数 ,这样就不需要使用 arguements对象了
function add (...values){
    let sum =0;
    for (let val of values){
        sum+=val;
    }
    return sum ;
}
console.log(add(2,3,5));

//箭头函数 
// es6允许使用箭头来定义函数 ()=>{}
let myFun =function (my) {
    return my ;
}
console.log(myFun(3));

let myFun1=v=>v;//参数 只有一个参数 可以不需要 括号   //语句也只有一个 
console.log(myFun1(2));
// 如果 箭头函数 不需要参数 或者 需要多个参数 使用 圆括号代表参数部分

let myFun2=(x,y)=>{
    //多条语句 
    return x+y  //如果语句较为简单花括号也可以省略

};
console.log(myFun2(2,4));

var sum1=(num1,num2)=>num1+num2;
console.log(sum1(5,5));

//如果箭头函数 代码块 部分 多余一条语句 既要用 大括号 括起来 并且 使用 return语句 返回 

//箭头函数 完整版 

const calc=(price ,tax)=>{
    const taxAmount =price + tax;
    const total =price+taxAmount;
    return total;
}

// 如果函数返回是一个对象  需要 用小括号 包裹 
let getTempitem =id=>({
    id:id ,
    name :'temp'
})
console.log( getTempitem(1));





















