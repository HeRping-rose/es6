"use strict";
// 类的继承 
// 修饰符public  protected  private readonly
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
//导出一个空对象  防止ts编译时报错
// 不在乎导出什么 只要存在导出 就会被打包成一个独立的模块
// 独立的模块拥有独立的命名空间
// 这样就可以在html中引用了
// ts编译后会变成js
// protected 受保护的 属性外部不能直接调用 受保护的方法外部不能访问 子类继承之后可以使用
// private 私有属性 私有方法  外部不能访问 不能被继承 子类也不能访问 用于敏感数据处理|内部状态封装
// readonly 只读 不能修改 添加在 修饰符之后 配置常量 ID等不可变数据 只能在声明时|构造函数内初始化
//简写 
var Animal = /** @class */ (function () {
    // name:string;//属性 名称
    // category:string;//种类  科
    // 参数前添加修饰符  简写
    function Animal(name, category) {
        this.name = name;
        this.category = category;
        // this.name = name;
        // this.category = category;
    }
    // 获取种类
    Animal.prototype.getCate = function () {
        console.log("\u8FD9\u4E2A\u662F".concat(this.name, "\u7684\u79CD\u7C7B\u662F").concat(this.category));
    };
    return Animal;
}());
// dog类
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, category) {
        var _this = _super.call(this, name, category) || this;
        _this.bark = '汪汪汪'; // 叫
        return _this;
    }
    // 获取信息
    Dog.prototype.getInfo = function () {
        console.log("\u8FD9\u4E2A\u662F".concat(this.name, "\u7684\u79CD\u7C7B\u662F").concat(this.category, "\u53EB").concat(this.bark));
        this.getCate();
    };
    return Dog;
}(Animal));
var an = new Dog('旺财', '犬科');
console.log(an.name);
console.log("🚀 ~ an.bark:", an.bark);
an.getCate();
an.getInfo();
// 抽象类 子类重写抽象类中的抽象方法 子类必须严格执行 不能被实例化 只能被继承
// 一般)不用于具体实现 
var Package = /** @class */ (function () {
    function Package(weight, price) {
        this.weight = weight;
        this.price = price;
    }
    Package.prototype.showInfo = function () {
        console.log("\u8FD9\u4E2A\u5305\u88F9\u7684\u91CD\u91CF\u662F".concat(this.weight, "kg \u5355\u4EF7\u662F").concat(this.price, "\u5143/kg \u8BA1\u7B97\u7684\u4EF7\u683C\u662F:").concat(this.countWeight(), "\u5143"));
    };
    return Package;
}());
var standerPackage = /** @class */ (function (_super) {
    __extends(standerPackage, _super);
    function standerPackage(weight, price, address) {
        var _this = _super.call(this, weight, price) || this;
        _this.address = address;
        _this.address = address;
        return _this;
    }
    standerPackage.prototype.countWeight = function () {
        return this.weight * this.price;
    };
    standerPackage.prototype.getAddress = function () {
        // console.log(`地址是：${this.address}`);
        return "\u5305\u88F9\u7684\u5730\u5740\u662F\uFF1A".concat(this.address);
    };
    return standerPackage;
}(Package));
var sp = new standerPackage(10, 2, '四川');
console.log(sp.countWeight());
sp.showInfo();
var adress = sp.getAddress();
console.log("🚀 ~ adress:", adress);
var a = true; //
a = 1;
a = "male";
console.log("🚀 ~ a:", a);
// 路由 
var roter = [
    { path: "/", info: 'xx1' },
    { path: "/news", info: 'xx2' },
    { path: "/news", info: 'xx2', children: [{ path: "/news/1", info: 'xx3' }] },
];
console.log("🚀 ~ roter:", roter[2]);
var p = {
    name: 'Ron',
    age: 18,
    show: function () {
        console.log("\u59D3\u540D\uFF1A".concat(this.name, " \u5E74\u9F84\uFF1A").concat(this.age));
    }
};
var pList = [
    { name: 'Ron', age: 18, show: function () {
            console.log("\u59D3\u540D\uFF1A".concat(this.name));
        }, },
    { name: 'Ronnie', age: 18, show: function () {
            console.log("\u59D3\u540D\uFF1A".concat(this.name));
        }, },
];
console.log("🚀 ~ p:", p);
console.log("🚀 ~ pList:", pList);
// 接口规范类
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.show = function (n) {
        console.log("\u59D3\u540D\uFF1A".concat(this.name, " \u5E74\u9F84\uFF1A").concat(this.age));
        console.log("\u7F16\u53F7\uFF1A".concat(n));
    };
    return Person;
}());
var per = new Person('Ronnie', 20);
per.show(520);
var sum = function (str, n1, n2) {
    // console.log(str);
    return n1 + n2;
};
sum('Ronnie', 520000, 1314);
console.log(sum('Ronnie', 520000, 1314));
var myUsers = [
    { id: 1, name: 'Ronnie', role: 'admin', menus: [], age: 18 },
    { id: 2, name: 'Ronnie', role: 'admin', menus: [], age: 18 },
    { id: 3, name: 'Ronnie', role: 'admin', menus: [], age: 18 },
];
function getUser(list) {
    return list.filter(function (item) { return item.menus; }); //类型断言
}
getUser(myUsers);
// 泛型 函数 <T>  里面的T表示任意类型 (类型 形参  
//  函数调用时 带了<string> 类型参数就变成了 (实参)
// 在 <T> 就接收了这一次调用传入的参数 T=string
// 接下来给普通的(name:T) 形参赋值
// :T 表示返回值类型
function say(name) {
    return name;
}
say('hello');
console.log("🚀 ~ say<string>('hello'):", say('hello'));
say(123);
console.log("🚀 ~ say<number>(123):", say(123));
//自动推断  
say(false);
console.log(say(false));
var na = { name: '张三', age: 18, info: 'hello' };
console.log("🚀 ~ na:", na);
var na1 = {
    name: "rong",
    age: 20,
    info: { state: 200, result: 123 }
};
console.log("🚀 ~ na1:", na1);
// 泛型 类
var TestClass = /** @class */ (function () {
    function TestClass(list) {
        this.list = list;
    }
    TestClass.prototype.add = function (val) {
        this.list.push(val); // 
    };
    return TestClass;
}());
var list1 = new TestClass(["phone", "computer"]);
var list2 = new TestClass([100, 399]);
// 实现增加两种不同类型的 数组
list1.add("mouse"); // 添加mouse
list2.add(50); // 添加 number
console.log("🚀 ~ list1:", list1);
console.log("🚀 ~ list2:", list2);
// as 断言+keyof 获取对象中的属性名
var interObj = {
    name: "Ronnie",
    age: 23,
    hobby: ["三", "瓦", "农"],
};
var nameKey = "name"; //用键值取别名 判断 用到的时候判断key 值
var hobbyKey = "hobby";
console.log(interObj[nameKey]); //获取对象属性名Key
console.log(interObj[hobbyKey]);
var hob = interObj[hobbyKey];
console.log(typeof (hob));
// 判断是否是数组 类型守卫（type guard）对hob变量进行运行时类型检查，确保其为数组后再访问索引[0]。
if (Array.isArray(hob)) {
    console.log(hob[0]); // 安全访问
}
else {
    console.log("hob is not an array");
}
console.log(hob[2]);
// 与泛型结合 动态获取 类型的key
function getValue(obj, key) {
    return obj[key];
}
var name = getValue({ name: "alen", age: 22 }, "name");
console.log(name);
// 对泛型进行约束 <T 必须是一种包含了length属性对象的子集或者实例
function getLength(arg) {
    return arg.length;
}
console.log(getLength([1, 2, 3])); //数组有length属性 //3
console.log(getLength('1,2,3')); //字符串有length属性 //5
// console.log(getLength(333));//number没有类型属性
function merge(target, source) {
    return __assign(__assign({}, target), source);
}
var mer = merge({ name: 'Ron', age: 20 }, { hobby: 'Ron', age: 18 });
console.log(mer);
function process(arg) {
    if (Array.isArray(arg)) {
        return arg[0]; // as
    }
    return arg;
}
var num = process([1, 2, 3]); //类型 为number
console.log("🚀 ~ num:", num); //1
var str = process('hello'); //类型为string
console.log("🚀 ~ str:", str); //🚀 ~ str: hello
// 1. **类型安全**：在编译阶段捕获错误（如访问不存在的属性）。
// 2. **代码复用**：一套逻辑处理多种符合约束的类型。
// 3. **精确类型推导**：IDE 能根据约束提供更准确的类型提示。
// {new ( ...args : any[] ) : {} } 验证是不是一个类 
function withEtr(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty = 'new property';
            _this.hello = 'override';
            return _this;
        }
        class_1.prototype.sayHello = function () {
            return " ".concat(this.hello, " world! ");
        };
        class_1.prototype.toString = function () {
            return "".concat(this.newProperty, " ").concat(this.sayHello(), "(\u6269\u5C55\u540E)");
        };
        return class_1;
    }(constructor));
}
// ts 装饰器 
var Example = function () {
    var _classDecorators = [withEtr];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Example = _classThis = /** @class */ (function () {
        function Example_1(name) {
            this.name = name;
        }
        Example_1.prototype.greet = function () {
            console.log("Hello, ".concat(this.name, "!"));
        };
        return Example_1;
    }());
    __setFunctionName(_classThis, "Example");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Example = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Example = _classThis;
}();
var example = new Example('World');
example.greet(); // Hello, World!
example.toString();
console.log("🚀 ~ example.toString():", example.toString()); // new property  override world! (扩展后)
//添加装饰器 额外的去扩展一些方法 
//添加了@装饰器 上面的函数自动接收这被装饰的类作为参数
// function withEtr<T extends {new (...args : any[] ) : {} } >(constructor:T)
// <传入数据类型被T接收了 T要满足可以用new 创建,...args接收任意参数 any[]接收任意数据类型, :{}>只接受对象为返回值
// return class extends constructor{} 传入了原来的一个类 现在用一个新的类去继承他 ,那么这个新类有原来属性和方法
// 然后去扩展属性和方法 与原来的类没有关系了 return 返回新的类替换掉原来的类
// // 函数装饰器
// target原型对象 methodName被装饰的那个方法的名字  descriptor是对方法的描述对象，里面有一个value,
// 就是方法本身。 PropertyDescriptor类型是官方的给的类型 叫 属性描述器
function Log(target, methodName, descriptor) {
    var originalMethod = descriptor.value;
    // 替换原方法
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("\u8C03\u7528\u4E86 ".concat(methodName, "()"));
        return originalMethod.apply(this, args);
    };
}
var Calculator = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _add2_decorators;
    return _a = /** @class */ (function () {
            function Calculator() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            //   @log // 装饰方法
            Calculator.prototype.add2 = function (a, b) {
                return a + b;
            };
            return Calculator;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _add2_decorators = [Log];
            __esDecorate(_a, null, _add2_decorators, { kind: "method", name: "add2", static: false, private: false, access: { has: function (obj) { return "add2" in obj; }, get: function (obj) { return obj.add2; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
new Calculator().add2(1, 2); // 输出: 调用了 add()
// 属性装饰器
function uppercase(target, propertyKey) {
    var value;
    // 重写属性的 getter/setter
    Object.defineProperty(target, propertyKey, {
        get: function () { return value; },
        set: function (newValue) {
            value = newValue.toUpperCase();
        }
    });
}
var Person5 = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    return _a = /** @class */ (function () {
            function Person5() {
                this.name = __runInitializers(this, _name_initializers, ""); // 装饰属性
                __runInitializers(this, _name_extraInitializers);
            }
            return Person5;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [uppercase];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var p5 = new Person5();
p.name = "alice";
console.log(p.name); // 输出: ALICE
