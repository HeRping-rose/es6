
// 参数解析
function decode(url:string):{[index:string]:any}{
    let mid= url
        .split("?")[1]//获取参数 [1]是获取后半部分
        .split("&")
        .map(i=>i
        .split("="));

    let obj:{[index:string]:any}={};

    mid.forEach(i=>{obj[i[0]]=i[1];});// 循环遍历
    
    return obj;
}
let res4=decode("http://127.0.0.1:8888?id=1&name=xiaowang")
let res5=decode("https://fanyi.baidu.com/mtpe-individual/multimodal?query=amend&lang=en2zh");

console.log(res4);// { id: '1', name: 'xiaowang' }
console.log(res5);// { query: 'amend', lang: 'en2zh' }



// 获取数组中的最大值和最小值
function getMaxAndMin(list:number[]):{max:number,min:number}{
    let max=Math.max(...list);//获取最大值
    let min=Math.min(...list);//获取最小值
    //返回对象
    return {
        max:max,
        min:min
    }

}
getMaxAndMin([3,7,9]);
console.log(getMaxAndMin([3,7,9]));
