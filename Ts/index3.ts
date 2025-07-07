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