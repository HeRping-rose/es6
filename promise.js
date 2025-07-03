
setTimeout((x) => { 
    console.log('x:'+x);
}, 1000,'tom');

// promise 是一个容器 也是一个对象 promise对象中保存着异步操作的结果 不受外界影响 英文意思是承诺
// promise对象有三种状态 pending(进行中) fulfilled(已成功) rejected(已失败)
//避免 回调地狱 缺点 无法 立即取消promise 一旦建立立即执行 promise对象无法取消
//是一个构造函数 用来创造一个实例 promise对象

let promise = new Promise((resolve,reject)=>{ 
    // resolve,reject 也是函数 用来将结果返回出去
    // if(/*异步操作成功*/true){ 
    //     resolve(value);
    // }else{ 
    //     reject(error);
    // }
    //resolve方法作用 是将promise对象的状态从“未完成Pending”变为“成功Resolved”，在异步操作成功时调用，并将异步操作的结果，作为参数传递出去
    //reject方法作用 是将promise对象状态从“未完成Pending”变为“失败Rejected”，在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去
    // promise.then(fun,fun) promise对象成功和失败的回调函数 then方法接收两个参数 一个是成功回调 一个是失败回调 第二个参数可选
    setTimeout(()=>{ 
        resolve(value)
        resolve('success');
    },1000);
    setTimeout(()=>{ 
        reject(error)
        reject('failure');
    },1000);
});

function timeout(ms) { 
    return new Promise((resolve,reject)=>{ 
        setTimeout(resolve,ms,'done');//包裹异步操作  第三个参数是返回值 第二个参数是延迟时间 第一个参数是回调函数
    });
}
// .then 链式调用 
timeout(1000).then(value=>{
    console.log(value);//done
})
//promise 新建后就会立即执行

let promise1=new Promise((resolve,reject)=>{
    console.log('promise1');
    resolve();


})
promise1.then(()=>{//微任务  then()是promise对象成功和失败的回调函数
    console.log('resolved');//最后打印resolved
});//then()是promise对象成功和失败的回调函数 第二个参数可选 两个都是回调函数

console.log('hi');  //promise1
//                      hi
//                      resolved



// 异步加载图片
function loadImageAsync(url){
    return new Promise(function(resolve,reject){
        const image = new Image();
        image.onload = function(){
            resolve(image);
        };
        image.onerror = function(){
            reject(new Error('Could not load image at '+url));
        };
        image.src = url;
    });
}
let myImg=document.getElementById('myImg')

loadImageAsync('https://img2.baidu.com/it/u=2706669121,1943770177&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750')
    .then(function(image){
    console.log('Loaded image url:',image.src);
    myImg.src = image.src;
    
},function(error){
    console.log(error);
});



let cookMeal=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const hasFood=false;
        if(hasFood){
            resolve('eat')
        }else{
            reject('no food')
        }
    },5000)
})
console.log('先玩会儿');//第一步
//.then() 返回新的Promise 不是原来那个Promise 有两个回调 第二个可选 一个成功 一个失败
//  .catch() 相当于 错误回调的别名
cookMeal.then(result=>{
    console.log(result);//第三步eat
    console.log('开吃');//最后
    
}).catch(error=>{
    console.log(error);
    console.log('吃不了');//最后
})
console.log('继续玩');//第二步


let myPromise=new Promise((resolve,reject)=>{ 
    resolve('成功');
})
myPromise.then(result=>{
    console.log(result);
}).catch(error=>console.log(error))
//一般来说不要在 then() 中定义  rejected状态的回调函数 即then方法的第二个参数 而应该使用catch()来处理rejected状态的Promise


//all() 方法 接收一个数组作为参数，数组的元素是Promise实例，
// all() 方法的返回值是Promise实例，只有当所有 Promise 都成功时，该 Promise 状态才成功，
// all() 方法的返回值 Promise 的 resolve 回调函数的参数是一个数组，该数组的成员对应于参数数组成员 Promise 的 resolve 回调函数的参数。

// promise.race() 方法 接收一个数组作为参数，数组的元素是Promise实例，  谁快算谁
//  promise.race() 返回一个 Promise 实例，一旦迭代器中的某个 Promise 解决或拒绝(状态变更)，返回的 Promise 就会解决或拒绝。

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1');
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2');
    }, 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p3');
    })
})
Promise.all([p1, p2, p3]).then(res => {
    console.log(res);//[p1,p2,p3]
})
Promise.race([p1, p2, p3]).then(res => {
    console.log(res);//p3
}).catch(err=>{
    console.log(err);
})

// Promise.resolve() 方法 创建一个成功状态的Promise对象
//reject() 方法 创建一个失败的Promise对象
//.done() 方法  Promise对象状态改变后， regardless of the final state, it executes the specified callback function
//.finally() 方法  Promise对象状态改变后 regardless of the final state, it executes the specified callback function

//async function  
// 
// await

//异步  返回一个promise对象  可以使用then方法获取结果
async function getUser() {
  let response = await fetch('https://api.github.com/users/octocat')
  let user = await response.json()
  console.log(user)
}
getUser();

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('数据加载完成')
        },1000)

    })
}

//异步代码看起来像同步执行  
async function getData(){
    try{
        const result = await fetchData();
        console.log('结果:'+result);
    }catch(e){
        console.log('错误:'+e);
    }

}

getData();//结果:数据加载完成

async function handleTwoAsync(){
    //用Promise.all()方法处理多个异步操作
    const [data1,data2]=await Promise.all([
        fetchData1(),
        fetchData2()
    ])
    //同时处理data1和data2
}

//理解遇到await就会暂停执行async函数
async function  getdata1(){
    console.log('获取数据1...');
    //遇到await的时候就会 暂停函数执行 先执行外部代码
    const response = await fetch('https://api.github.com/users/github');
    const data = await response.json();
    return data;
    
}

console.log('调用函数前...');
getdata1();
// getdata1().then(data => console.log(data));
console.log('调用函数后...');

//

