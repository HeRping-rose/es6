## DAY01-构造函数

### 基础

#### 一、面向对象的基础概念

两大编程思想：面向过程和面向对象

面向过程编程

​	1.面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个的一次调用的过程

​	2.举例：银行办理业务的流程

面向对象

​	1.在面向对象的程序开发中，每个对象都是功能的核心

​	2.面向对象编程具有灵活、代码可重用、容易维护和开发的优点，更适合多人合作的大型软件项目

面向对象的三大特征：封装、继承、多态

#### 二、类和对象的概念

类和对象:面向对象更切近我们的实际生活，可以使用面向对象描述现实世界，但是事物分为具体的事物和抽象的事物

![1610206156631](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/zhaijizhe/20210621140129.png)                            	                                                               		 

面向对象的思想特征

​	1.抽取对象共有的属性和行为封装成一个类（模板）

​	2.对类进行实例化。获取类的对象

类是对象的抽象定义，对象是类的具体实例

#### 三、对象中的属性和行为

现实生活中；万物皆对象，对象是一个具体的事物，看得见摸得着的事物。例如一部手机、一台电视，一个人

对象是由属性和方法组成的

​	1.属性：事物的特征，在对象中用属性来表示

​	2.方法：事物的行为，在对象中用函数来表示



## **构造函数**

		一个函数，一个算法，
		应该遵循单一职责原则，
		一个函数只做一件事，好维护
		function ran(min,max){
			return Math.round(Math.random()*(max-min)+min)
		}
		ran(0,61)
		
		函数的缺点：功能单一。
		如果碰到 复杂功能时，我们就需要用到构造函数来组织代码
		复杂功能：验证码
		1.随机0-61之间的数
		2.获取4个字符
		3.点击切换随机字符
		4.验证 验证码是否正确	



### 1. **工厂模式**

***手工生产产品\***

​	->通过***\*代码\****的形式来描述一个产品

​	->在js中用对象描述一个事物

~~~js
let car = {
    color:"红色",
    name:"奔驰c260",
    price:660000
}

let car2 = {
	color:"黑色",
    name:"宝马C级",
    price:250000
}
~~~

 

***\*工厂模式\****

工厂是批量生产产品-》

有一个用来创建 汽车（对象）的函数，每一次调用这个函数时，就创建一个车

 ~~~js
 let carFactory = function(color,name,price){
 		let obj = {};// 创建一个对象-》创建一辆车
 		obj.color = color;
 		obj.name = name;
 		obj.price = price;
     	return obj;
 }
 
 let car1 = carFactory("红色","奔驰c260",660000)
 let car2 = carFactory("黑色","宝马C级",250000)
 console.log(car1,car2)
 ~~~



### 2. **构造函数模式**

构造函数：就是专门用来批量的生产对象的函数

 

1.(约定熟成)构造函数的名字首字母大写

2.new操作符:当在调数调用时,前面加了new	操作符,那么这个函数就不再是一个普通的函数,就成为了一个构造函数,那么在构造函数的内部会自动的创建一个空对象(var obj = {} ),但是这个对象是看不见的,在构造函数内部用this来代表这个对象;并且会在构造函数末尾自动的返回这个对象(return obj;)

3.通过构造函数创建出来的对象叫做实例对象简单理解 实例对象就是打上了出厂标识的对象也就是说我们可以获知 实例对象 是由哪个构造函数所创建。	 通过构造函数创建出来的实例对象,会共用构造函数中的方法

 ~~~js
 
 
 <script type="text/javascript">
 
 			let carFactory = function(color,name,price){
 				//let obj = {};
 				this.color = color;
 				this.name = name;
 				this.price = price;
 				return obj;
 			}
 			let car1 = carFactory("红色","奔驰c260",660000)
 			let car2 = new carFactory("黑色","宝马C级",250000)
 			console.log(car1,car2)
 			
 </script>
 ~~~

 

​		 ***\*一个对象除了可以有属性外，还可以有方法\****

​		***\*（为了描述好一个事物，需要去描述它的静态特征（属性），还需要描述它的动态行为（方法））\****

~~~js
let carFactory = function(color,name,price){
    //let obj = {};
    this.color = color;
    this.name = name;
    this.price = price;
    this.info = function(){
        console.log(`这是一辆${this.color}的${this.name},售价￥${this.price.toFixed(2)}`)
    }

    this.sum = function(){}
    this.todo11 = function(){}
    this.todo22 = function(){}
    //return obj;
}


let car1 = new carFactory("红色","奔驰c260",660000)
car1.info()
let car2 = new carFactory("黑色","宝马C级",250000)
console.log(car1,car2)
~~~



### 3. 原型模式

~~~js
	let carFactory = function(color,name,price){
				this.color = color;
				this.name = name;
				this.price = price;
			}

			//所有共用的方法 写在 原型上
			//每一个构造函数由有一个自带的属性->prototype->它是原型对象->就是用来放共用的方法的仓库

			carFactory.prototype = {
				info:function(){
				console.log(`这是一辆${this.color}的${this.name},售价￥${this.price.toFixed(2)}`)
				},
				sum(){},
				todo11(){},
				todo22(){}
			}
			

			let car1 = new carFactory("红色","奔驰c260",660000)
			car1.info()
			let car2 = new carFactory("黑色","宝马C级",250000)
			console.log(car1,car2)
~~~



### 4. **原型链**

***\*原型链：\****当操作一个对象属性或方法时,先看这个属性或方法在不在对象的私有的空间中，如果有，就直载获取,如果在就使用如果不在,就***\**自动的通过\**\***__proto__向原型上查找,如果找到就使用,如果还没有找到,就再次通过原型对象的__proto__向上一级原型上查找,直到找到Object内置构造函数的原型对象为止,如果还没有找到就返回undefined;这种通过原型向上一级级查找的模式就原型链

 

***\*原型模式的细节\****

​	1.所有的函数(普通函数,构造函数)都天生自带一个prototype(原型)的属性.这个属性的值是一个对象

​	2.prototype(原型)对象,上面也天生自带一个constructor(构造函数)属性,这个属性的值就是当前构造函数的引用地址(这个属性指向它的构造函数)

​	3.所有的对象(自定义对象,实例对象)都天生自带一个 __proto__的属性,这个属性的值指向当前实例的原型对象

 

##  6种this的情况

#### 一、全局中的this

当 this 不在任何函数内部时，this 始终是指向全局对象。

说明：

​	1.在浏览器中，全局对象是 Window；

​	2.在 Nodejs 中，全局对象是 Global；

示例：

```js
/*
 *  在浏览器全局对象中声明的变量实际上是放在window对象中的 
 * 
 */
var a="全局中的a变量";
console.log(a);
console.log(window.a);
console.log(this.a);
console.log(this===window);
//在全局上下中定义变量和在window对象中定义的变量的区别
//在全局上下文中定义的变量不能通过delete进行删除
//定义在window对象中的变量可以通过delete进行删除
delete a;
console.log(a);
window.b="我是window中的b变量";
//删除window对象中的b
delete window.b;
this.c="我是全局中的c";
//删除this对象中的c
delete this.c;
console.log(this.c);
//一个特殊属性的说明
this.name="我是全局中的name";
console.log(window.name);
```

#### 二、普通函数中的 this

普通函数，指的是直接通过 `函数名()` 调用的函数，都是普通函数。

普通函数中的 this，始终是指向全局对象。

示例：

```js
/*
    在非严格模式下：在普通函数中的this代表的是window对象
    在严格模式下:普通对象中的this绑定undefined对象
*/
'use strict'
function foo(){
    console.log(this);
}
foo();
```

>注意：严格模式下，则不能将全局对象用于默认绑定，this会绑定到undefined

#### 三、对象方法中的 this

对象方法，指的是通过 `对象.方法名()` 调用的函数，都是对象的方法。

对象方法中的 this，始终是指向调用该方法的对象。

示例1：

```js
const student = {
    sayName() {
        console.log(this);
        console.log(this===student) //true
    }
}
student.sayName();
```

示例2：

```js
const student = {
    name: 'student',
    sayName() {
        console.log(this);
    }
}

const person = {
    name: 'person'
};

person.sayName = student.sayName;
person.sayName();
```

#### 四、事件方法中的 this

事件方法，指的就是各类事件的事件处理函数。

事件方法中的 this，始终是指向绑定该事件的元素节点。

示例：

```js
const outer = document.querySelector('.outer');
// 事件源
outer.onclick = function() {
    console.log(this);
}
```

#### 五、构造函数（类）

构造函数，指的就是通过 `new 函数名()` 调用的函数。

构造函数中的 this，始终是指向 new 出来的实例对象。

示例：

```js
function Person() {
    this.name = 'zhangsan'
}

Person.prototype.sayName = function() {
    console.log(this);
}

const p = new Person();
```

#### 六、箭头函数中的 this

当一个函数是箭头函数时，以上情况都不用考虑了。

由于箭头函数中没有 this，因此当我们在箭头函数中使用 this 时，实际上使用的是箭头函数父级的 this。

箭头函数父级判断：箭头函数在哪个函数内部创建的，该函数就是箭头函数的父级。

示例：

```js
let foo = () => {
     console.log(this);
}
foo(); //window
```

```js
function fn(){
   let foo=()=>{
      console.log(this);
    }
    foo();
}
fn();  //window
```

```js
const person={
   name:'person',
   fn(){
      let foo=()=>{
            console.log(this);
      }
      foo();
    }
}
person.fn();
```

#### 七、改变 this 的指向

改变 this 指向的方法有三个：

`call()`：

​	1.在改变函数 this 指向的同时，立即执行该函数

​	2.当需要传递参数时，call 方法将参数依次传递即可

`apply()`

​	1.在改变函数 this 指向的同时，立即执行该函数

​	2.当需要传递参数时，apply 方法需要将所有参数放在同一个数组中进行传递

`bind()`

​	1.在改变函数 this 指向的时候，返回一个被改变的新函数，需要手动重新调后用再执行

​	2.当需要传递参数时，bind 方法直接从返回的新函数中传递即可

​	3.bind()改变this指向，只能生效一次

示例：

```js
const student={
    name:'student'
}
const teacher={
    name:'teacher'
}
const person={
    name:'person',
    introduce(age,gender){
       console.log(`${this.name}今年${age}岁,性别是${gender}`);
    }
}
person.introduce(23,'女');
person.introduce.call(student,33,'男');
person.introduce.apply(student,[22,'女']);
let newIntroduce=person.introduce.bind(teacher);
newIntroduce(56,'男');
let newnewIntroduce=newIntroduce.bind(student);
newnewIntroduce(23,'女');
```



#### 小结

1.当 this 不在任何函数内部时，this 始终是指向全局对象。

2.普通函数中的 this，始终是指向全局对象

3.对象方法中的 this，始终是指向调用该方法的对象。

4.事件方法中的 this，始终是指向绑定该事件的元素节点。

5.构造函数中的 this，始终是指向 new 出来的实例对象。

6.由于箭头函数中没有 this，因此当我们在箭头函数中使用 this 时，实际上使用的是箭头函数父级的 this

7.改变 this 指向的方法可通过call()、apply()、bind()方法实现。

### 

### 随堂作业

### 扩展内容（选填）

### 教案附件（选填）



