## DAY01-类与继承

#### 一、创建类和对象

在ES6中新增了类的概念，可以使用class关键字声明一个类，之后以这个类来实例化

定义类的语法

```js
class 类名{
    
}
```

说明：类是以class关键字声明的，后面跟着类名和花括号中的类体

创建对象的语法

```js
const 对象名=new 类名();
```

使用new关键字创建类的对象

案例：创建一个人类，并实例化

```js
class Person{
  
}
let p=new Person();
console.log(p);
```

关于面向对象中的命令规范

​	1.名称只能由字母、数字、下划线、$符号组成 

​	2.不能以数字开头 

​	3.名称不能使用关键字。 

​	4.不允许出现中文及拼音命名 

​	5.类名首字母大写，如果多个单词，每个单词首字母大写 

​	6.常量名全大写 

#### 二、实例属性和行为

刚我们了解了如何创建一个对象，那么问题是对象是空的，我们要让对象饱满起来，有具体的东西，那么一个人有姓名、年龄、性别等属性。也有行走、吃饭、思考等行为。在程序中，我们如何体现呢？

语法结构

````js
class 类名{
    constructor(){
        this.属性名=初始值;
        this.属性名2=初始值;
        this.方法名=function(){
            
        }
    } 
}
````

创建并使用对象语法

```js
let 对象名=new 类名();
//调用属性
对象名.属性
//调用方法
对象名.方法();
```

案例：创建两个对象并使用

```js
class Person{
    constructor(){
        this.name='';
        this.age=0;
        this.intruduce=function(){
            return `我叫${this.name},今年${this.age}岁！`;
        }
    }
}
let p1=new Person();
p1.name="张三丰";
p1.age=120;
let p2=new Person();
p2.name="张无忌";
p2.age=25;
console.log(p1.intruduce());
console.log(p2.intruduce());
```

 在这结果中，我们可以得知，不同的对象的实例属性是相互独立的，互不影响   

 在es6中，我们对于实例方法还有一种写法，在constructor()外书写，如下： 

```js
class 类名{
    constructor(){
        
    }
    方法名([参数列表]){
        
    }
}
```

在constructor外直接书写方法名(){}的方式也是定义实例方法，效果跟写在constructor中是一样的。区别在于将实例属性和实例方法进行区分，constructor函数内部得以简化，代码结构更加简洁，也是推荐使用的方式。 

```js
class Person{
    constructor(){
        this.name='';
        this.age=0;
    }
    intruduce(){
        return `我叫${this.name},今年${this.age}岁！`;
    }
    specialty(content){
        return this.name+"擅长"+content;
    }
}
let p1=new Person();
p1.name="张三丰";
p1.age=120;
let p2=new Person();
p2.name="张无忌";
p2.age=25;
console.log(p1.intruduce());
console.log(p1.specialty('打太极'));
console.log(p2.intruduce());
console.log(p2.specialty('乾坤大挪移'));
```

注意

​	1.类里定义的函数不需要写function

​	2.多个函数之间不需要添加逗号隔开

​	3.constructor函数可以书写实例属性和实例方法，但推荐只编写实例属性。实例方法写在constructor函数外，class范围内。这样和实     

​       例属性进行分离，代码结构更加简洁和易懂。同时也会减少不必要的性能损失 

~~~js
class Person{
    constructor(name,age,job,specialty){
        this.name=name;
        this.age=age;
        this.job=job;
        this.specialty=specialty;
    }
    intruduce(){
        return `姓名:${this.name}\n年龄:${this.age}\n职位:${this.job}\n特长:${this.specialty}`;
    }
}
let p1=new Person('张三丰',120,'武当派掌门','太极拳');
let p2=new Person('张无忌',25,'明教教主','九阳真经,乾坤大挪移');
console.log(p1.intruduce());
console.log("*************************")
console.log(p2.intruduce());
~~~



#### 三、静态属性和方法

##### 一、概念

类属性和行为是面向对象中的共享属性和行为。即整个类只有一个，并不是对象私享。

##### 二、定义和使用

```js
class 类名{
    //定义类属性
    static 类属性名 = 类属性值;
    constructor(){}
    //定义类方法
    static 类方法名(){
        //类方法的代码
    }
}
// 使用： 
类名.类属性名来使用
类名.类方法名();
// 注意：普通对象无法直接使用类属性
```

```js
class Auth {
  // 静态属性：存储本地存储的键名（全局共享）
  static STORAGE_KEY = 'user_token';
  
  // 静态方法：获取本地token（无需实例化）
  static getToken() {
    return localStorage.getItem(this.STORAGE_KEY);
  }
  
  // 静态方法：验证token是否存在（全局逻辑）
  static isLoggedIn() {
    return !!this.getToken();
  }
  
  // 实例方法：基于静态方法实现登录逻辑
  login(token) {
    if (token) {
      localStorage.setItem(Auth.STORAGE_KEY, token);
      return true;
    }
    return false;
  }
  
  // 实例方法：基于静态方法实现登出逻辑
  logout() {
    if (Auth.isLoggedIn()) {
      localStorage.removeItem(Auth.STORAGE_KEY);
      return true;
    }
    return false;
  }
}

// 使用示例：
console.log(Auth.isLoggedIn()); // 直接调用静态方法检查登录状态
const auth = new Auth();
auth.login('valid_token'); // 实例方法修改本地存储
console.log(Auth.getToken()); // 静态方法获取token
```

注意： static 是用于修饰类属性的关键字。即表示是个类属性。可以定义多个类属性。

##### 三、类方法和实例方法的区别

语法上:类方法是通过`static`在构造函数外定义的，而实例方法是在构造函数里通过`this`来定义的

使用上: 类方法通过类名来使用，实例方法通过对象名来调用

##### 小结

1.类属性和行为是面向对象中的共享属性和行为。即整个类只有一个，并不是对象私享。

2.static 是用于修饰类属性的关键字。即表示是个类属性。可以定义多个类属性

3.类方法和实例方法的区别



#### 四、继承

之前我们学习了如何使用对象来处理一些程序，但我们其实会发现存在的一些问题，比如说学生类和画家类都是属于人，都有一些基本的属性和行为，比如说姓名、年龄、性别等属性。那么我们就会在代码中定义两遍一样的属性，而如果定义的类多了，那么问题就会更明显，即存在代码重复的问题，以及像学生、画家、上班族等定义的类，其实都是属与人这个类的，那么如果我们再人这个类中定义基本的属性和行为，而其他的类可以去使用人这个类的东西，是否可以实现呢？答案肯定是可以的，我们会借助面向对象的特性加上JavaScript来实现以上的需求

##### 一、为什么要继承？

```js
/**
 * 为什么要继承
 */
class JavaTeacher{
    constructor(name,school){
        this.name=name;
        this.school=school;
    }
    //类中的函数不要写function
    introduce(){
        return `我是${this.school}的${this.name}`;
    }
    //类中函数的类外一种写法：函数表达式
    giveLession=function(){
        console.log('打开Intellj IEDA');
        console.log('调试录音设备');
        console.log('讲解本章主要内容');
        console.log('课堂练习');
        console.log('安排今日作业');
    }
    hobby(){
        
    }
}

class WebTeacher{
    constructor(name,school){
        this.name=name;
        this.school=school;
    }
    introduce(){
        return `我是${this.school}的${this.name}`;
    }
    giveLession=function(){
        console.log('打开vscode');
        console.log('调试录音设备');
        console.log('讲解本章主要内容');
        console.log('课堂练习');
        console.log('安排今日作业');
    }
    drive(){
        
    }
}
//实例化对象：let/const 对象名=new 类名();
const panda=new JavaTeacher('潘峰','柏吉学院');
console.log(panda.introduce());
panda.giveLession();
console.log('***********************************');
const zhangtao=new WebTeacher('张涛','柏吉学院');
console.log(zhangtao.introduce());
zhangtao.giveLession();
```

如果代码存在着大量重复。使用继承就能改变它。

##### 二、什么是继承

现实生活中的继承

继承在生活中并不陌生，比如子承父业、继承遗产，都是跟继承相关的。那继承的好处在于直接使用，而不需要自己再去争取，比如某某搬砖工，被迫继承10亿的遗产。对吧。继承都是直接使用。那程序中有类似于继承这样的操作么。

![image-20210817165152728](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/zhaijizhe/20210817165155.png)

继承是面向对象中的一个逻辑概念。是指一个类可以用另一个类里面的属性和行为。而我们称有这种关系的类分别称为子类和父类。被继承的类叫父类，而子类能够使用父类里的属性和行为。

继承的好处在于子类无需重复定义一样的属性和行为，增加开发效率。同时子类拥有父类一样的属性和行为，那么就相当于子类是父类的扩展，如学生类的父类是人，而学生类除了人这个类基本的属性和行为以外，还可以有自己扩展的属性和行为。

继承的特征

​	1.父类更抽象、子类更具体

![image-20210622100122736](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/zhaijizhe/20210622103127.png)

​	2.父类具有一般行为，子类具有自己的特殊行为（扩展）

![image-20210622101217414](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/zhaijizhe/20210622103139.png)

继承，指的就是子类可以继承父类所有的属性和方法，同时子类还可以拥有自己的属性和方法。

##### 三、怎么继承

编写父类

```js
class Teacher{
   constructor(name,school){
      this.name=name;
      this.school=school;
   }
   introduce(){
       return `我是${this.school}的${this.name}老师`;
   }
   giveLession(){
       console.log("回顾上节课程内容");
       console.log("讲解本章内容");
       console.log("总结本章内容");
       console.log("安排今日作业"); 
   } 
}
/*
```

编写子类，子类继承父类，使用extends关键字，具体语法如下

```js
/*
  使用extends关键字来实现继承
  如果子类构造函数要调用父类构造函数，需要使用super(参数)来调用 
*/
class ComputerTeacher extends Teacher{
    constructor(name,school){
       //如果子类中的构造方法要调用父类构造方法
       super(name,school);
    }
    
}
```

如果子类中有具体化父类中已存在方法的内容，我们这个时候就要重写讲内容编写了，这个行为就称为重写

子类重写：在继承关系中，子类中方法和父类方法同名，参数个数，顺序，类型相同的这种现象称为方法重写，完全执行子类方法中的内容

但是如果在子类的普通方法还要调用父类的普通方法，使用super.父类普通方法()

在构造函数中如果要调用父类的构造函数，必须要将父类构造函数的调用放在子类构造函数首行

```js
class ComputerTeacher extends Teacher{
    constructor(name,school,language){
       //如果子类中的构造方法要调用父类构造方法
       super(name,school);
       this.language=language;
      
    }
    giveLession(){
        console.log("打开开发环境");
        //这里的super.普通方法的位置在子类中是任意的
        super.giveLession();
    }
    writeProgram(){
        console.log(`我正在使用${this.language}语言编程`);
    }
}

class MusicTeacher extends Teacher{
    constructor(name,school,type){
        super(name,school);
        this.type=type;
    }
    singsong(){
        console.log(`我正在唱${this.type}`);
    }
}
```

![image-20210622112511595](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/zhaijizhe/20210622113554.png)

实例化对象

```js
let giles=new ComputerTeacher("翟吉喆","柏吉学院","js");
console.log(giles.introduce());
giles.giveLession();
giles.writeProgram();
console.log("**************************************");

let peter=new ComputerTeacher("彭老师","某家培训解构","C#");
console.log(peter.introduce());
peter.giveLession();
peter.writeProgram();
console.log("****************************************");
let lsj=new MusicTeacher("李双江","中国音乐学院","民族歌曲");
console.log(lsj.introduce());
lsj.giveLession();
lsj.singsong();
```



### 课堂小结

1.继承的特征：父类更抽象、子类更具体；父类具有一般行为，子类具有自己的特殊行为（扩展）

2.子类继承父类，使用extends关键字

3.子类重写：在继承关系中，子类中方法和父类方法同名，参数个数，顺序，类型相同的这种现象称为方法重写，完全执行子类方法中的内容

4.如果在子类的普通方法还要调用父类的普通方法，使用super.父类普通方法()



### 随堂作业

1.定义一个战斗机类和直升飞机类。战斗机和直升飞机都有属性：种类、速度、型号 和行为；起飞，降落 。 战斗机有额外的属性：子弹数量 行为：攻击 。直升飞机 有额外的属性：螺旋桨个数 。设计这几个类

2.设计一个武器系统。有屠龙刀、倚天剑、打狗棍，每种武器都有属性：名字、伤害值。行为：输出武器所有信息。

