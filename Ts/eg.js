// 参数解析
function decode(url) {
    var mid = url
        .split("?")[1] //获取参数 [1]是获取后半部分
        .split("&")
        .map(function (i) { return i
        .split("="); });
    var obj = {};
    mid.forEach(function (i) { obj[i[0]] = i[1]; }); // 循环遍历
    return obj;
}
var res4 = decode("http://127.0.0.1:8888?id=1&name=xiaowang");
var res5 = decode("https://fanyi.baidu.com/mtpe-individual/multimodal?query=amend&lang=en2zh");
console.log(res4); // { id: '1', name: 'xiaowang' }
console.log(res5); // { query: 'amend', lang: 'en2zh' }
// 获取数组中的最大值和最小值
function getMaxAndMin(list) {
    var max = Math.max.apply(Math, list); //获取最大值
    var min = Math.min.apply(Math, list); //获取最小值
    //返回对象
    return {
        max: max,
        min: min
    };
}
getMaxAndMin([3, 7, 9]);
console.log(getMaxAndMin([3, 7, 9]));
