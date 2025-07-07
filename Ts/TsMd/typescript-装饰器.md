## TS 装饰器

TypeScript 中的装饰器（Decorators）是一种特殊的声明，可用于修改类、方法、属性或参数的行为。它们本质是一个函数，通过 `@装饰器名` 的语法附加到目标声明上。下面通过基础案例说明其作用：

（在不破坏原有代码结构的前提下，扩展新的功能，这样的扩展便于维护、复用）

### **1. 类装饰器：修改类的定义**

**作用**：在类定义时拦截并修改类的构造函数或原型。

```
// 装饰器 = 一个接收构造函数并返回构造函数的函数
function simpleDecorator(constructor: Function) {
  console.log('类被装饰:', constructor.name);
}

@simpleDecorator // 应用装饰器
class Example {}

// 输出: 类被装饰: Example
```

```
function prefix(prefix: string) {
  return (constructor: Function) => {
    console.log(`${prefix} - 类被创建:`, constructor.name);
  };
}

@prefix("🐱")
class Kitty {}
```

**执行流程**：

1. **装饰器工厂调用**：
   `prefix("🐱")` 执行后返回一个**实际的装饰器函数**（即 `(constructor) => {...}`）。
2. **装饰器应用**：
   TypeScript 编译器将返回的装饰器函数应用到 `Kitty` 类上，并**自动传入 `Kitty` 的构造函数**作为参数。



### **扩展案例：为类添加额外功能**

```
//T 必须是一个构造函数类型，该构造函数可以接受任意数量、任意类型的参数（...args: any[]），并返回一个对象（{} 表示任意对象类型）。
function withExtraFeatures<T extends { new (...args: any[]): {} }>(constructor: T) {
  // 返回一个继承自原构造函数的新类
  return class extends constructor {
    // 添加新属性
    extraProperty = "这是装饰器添加的属性";
    
    // 添加新方法
    extraMethod() {
      return `来自装饰器的方法，实例名: ${this.constructor.name}`;
    }
    
    // 重写原方法（如果存在）
    toString() {
      return `${super.toString()} (扩展后)`;
    }
  };
}

@withExtraFeatures
class Example {
  constructor(public name: string) {}
  
  greet() {
    return `Hello, ${this.name}`;
  }
}

// 使用扩展后的类
const instance = new Example("World");

console.log(instance.extraProperty); // 输出: "这是装饰器添加的属性"
console.log(instance.extraMethod()); // 输出: "来自装饰器的方法，实例名: Example"
console.log(instance.greet());       // 输出: "Hello, World"
console.log(instance.toString());    // 输出: "[object Object] (扩展后)"
```



在 TypeScript 中，**类装饰器的返回值必须是构造函数类型**，且通常是原构造函数或其继承者。这是由装饰器的设计目标决定的：**修改或扩展类的定义**，而非替换为完全不相关的类型。

### **核心规则**

1. **返回值类型**：
   类装饰器的返回值必须是**构造函数类型**（即可以被 `new` 调用的函数）。
2. **常见模式**：
   - 返回原构造函数（不修改类定义，仅执行副作用）。 如果没有写返回值，就返回原类
   - 返回继承自原构造函数的新类（扩展类功能）。
3. **禁止行为**：
   - 不能返回非构造函数类型（如 `number`、`string` 或普通函数）。
   - 不能返回与原类无关的构造函数（会破坏类型系统）。



### **2. 方法装饰器：添加日志**

```
target原型对象 methodName被装饰的那个方法的名字  descriptor是对方法的描述对象，里面有一个value,
就是方法本身。 PropertyDescriptor类型是官方的给的类型 叫 属性描述器
function log(target: object, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  // 替换原方法
  descriptor.value = function() {
    console.log(`调用了 ${methodName}()`);
    return originalMethod.apply(this);
  };
}

class Calculator {
  @log // 装饰方法
  add(a: number, b: number) {
    return a + b;
  }
}

new Calculator().add(1, 2); // 输出: 调用了 add()
```



### **3. 属性装饰器：自动转换值**

```typescript
这里的target是实例的原型对象，propertyKey是加了装饰器的那个属性
function uppercase(target: object, propertyKey: string) {
  let value: string;
  
  // 重写属性的 getter/setter
  Object.defineProperty(target, propertyKey, {
    get: () => value,
    set: (newValue: string) => {
      value = newValue.toUpperCase();
    }
  });
}

class Person {
  @uppercase name: string; // 装饰属性
}

const p = new Person();
p.name = "alice";
console.log(p.name); // 输出: ALICE
```

`Object.defineProperty()`相比直接赋值的好处主要体现在对属性特性的精细控制，具体优势如下：

##### 特性控制

`Object.defineProperty()`允许精确设置属性的`configurable`、`writable`、`enumerable`等特性。例如，通过设置`configurable`为`false`可防止属性被修改或删除，而直接赋值无法实现此类控制。 ‌



### **核心原理**

- **类装饰器**：接收类的构造函数，可修改类的定义。
- **方法装饰器**：接收 `target`（类的原型）、`methodName`（方法名）、`descriptor`（方法描述符），可拦截方法调用。
- **属性装饰器**：接收 `target` 和 `propertyKey`，通常通过 `Object.defineProperty` 修改属性行为。

```typescript
function Entry(targetClass) {
  // 1. 验证目标是否为有效组件
  if (!targetClass.prototype.__isComponent) {
    throw new Error('@Entry 只能用于被 @Component 标记的类');
  }
  
  // 2. 注册为应用入口组件
  AppRegistry.entryComponent = targetClass;
  
  // 3. 应用启动逻辑
  setTimeout(() => {
    if (AppRegistry.entryComponent) {
      console.log('应用启动，渲染入口组件:', targetClass.name);
      const appInstance = new targetClass();
      renderApp(appInstance);
    }
  }, 0);
  
  return targetClass;
}

const ComponentRegistry = new Map();

// ====================
// 2. @component 装饰器 - 用于标记和注册组件类
function component(targetClass) {
  // 1. 验证目标是否为类
  if (typeof targetClass !== 'function') {
    throw new Error('@component 只能用于类');
  }
  
  // 2. 为组件类添加特殊标识
  targetClass.prototype.__isComponent = true;
  
  // 3. 注册组件到框架中
  ComponentRegistry.set(targetClass.name, targetClass);
  
  // 4. 返回增强后的类（添加生命周期钩子等）
  return class extends targetClass {
    constructor(...args) {
      super(...args);
      this.__initComponent(); // 初始化组件内部状态
    }
    
    __initComponent() {
      // 框架内部初始化逻辑（如状态管理、生命周期管理）
      console.log(`组件 ${targetClass.name} 初始化`);
    }
    
    // 框架会自动调用这个方法来构建UI
    render() {
      if (typeof this.build === 'function') {
        return this.build(); // 执行用户定义的build方法
      }
    }
  }
}

// 3. @state 装饰器 - 用于标记组件的状态属性
function state(target, propertyKey) {
  // 1. 存储原始属性名
  const privateField = `_${propertyKey}`;
  
  // 2. 为每个实例创建独立的状态存储
  target[privateField] = target[propertyKey];
  
  // 3. 定义getter/setter
  Object.defineProperty(target, propertyKey, {
    get() {
      return this[privateField];
    },
    
    set(newValue) {
      // 存储新值
      this[privateField] = newValue;
      
      // 触发UI更新（核心功能）
      console.log(`状态 ${propertyKey} 变更为: ${newValue}`);
      this.__triggerUIUpdate(); // 框架内部方法，触发组件重渲染
    }
  });

@Entery
@component
class Index {
  @state name = "";
  build() {
    return {
      type: 'Text',
      content: '按钮',
      size: 100
    };
  }
}
```

### **1. Struct **

`Struct` 是用于声明自定义组件的关键语法结构，是一个 **“组件描述模板”**，专门用于定义鸿蒙组件的 **UI 结构、属性和行为**。

**声明式编程的体现**：鸿蒙采用声明式 UI 框架（如 ArkTS），`Struct` 的作用是用代码 “声明” 组件 “长什么样”“怎么交互”，框架会根据这些声明自动渲染界面

- 与类的区别
  - 没有传统类的 “继承” 机制（鸿蒙组件通过 `extends` 继承基础组件，而非 Struct 本身）。
  - 更轻量，专注于 UI 描述，不涉及复杂的业务逻辑封装。

当你声明一个 `Struct` 时，实际上创建了一个 **组件构造函数**，例如

```
struct MyButton {
  // 组件属性和内容
  build() {
    Text('按钮')
      .size(100)
  }
}
```

使用时通过 `MyButton()` 直接实例化组件，类似构造器调用，但本质是框架根据 `Struct` 的声明生成可渲染的组件实例。



##### ** Struct 的核心组成部分**

- **属性（@State、@Prop 等装饰器）**：用于定义组件的状态和外部传入参数，例如：

```
struct MyComponent {
  @State count: number = 0  // 组件内部状态
  @Prop title: string       // 外部传入属性
  // ...
}
```

**build () 方法**：必须实现的方法，用于描述组件的 UI 结构（类似 XML 布局，但用代码动态生成）

##### **2. 为什么用 Struct 而非类？**

- **声明式框架的设计需求**：鸿蒙的 UI 框架需要高效追踪组件状态变化，`Struct` 的轻量级结构和装饰器机制（如 `@State`）能更方便地实现数据与 UI 的自动同步。
- **组件化开发的便捷性**：`Struct` 让开发者可以像搭积木一样组合组件，每个 `Struct` 专注于一个独立的 UI 单元，符合 “关注点分离” 原则。

