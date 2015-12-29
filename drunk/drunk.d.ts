declare module drunk {
    interface IThenable<R> {
        then<U>(onFulfillment?: (value: R) => U | IThenable<U>, onRejection?: (error: any) => U | IThenable<U>): IThenable<U>;
    }
    interface IPromiseExecutor<R> {
        (resolve: (value?: R | IThenable<R>) => void, reject: (reason?: any) => void): void;
    }
    enum PromiseState {
        PENDING = 0,
        RESOLVED = 1,
        REJECTED = 2,
    }
    /**
     * ES6 Promise实现
     */
    class Promise<R> implements IThenable<R> {
        static all<R>(iterable: any[]): Promise<R[]>;
        static race<R>(iterable: any[]): Promise<R>;
        static resolve<R>(value?: R | IThenable<R>): Promise<R>;
        static reject<R>(reason?: R | IThenable<R>): Promise<R>;
        _state: PromiseState;
        _value: any;
        _listeners: any[];
        /**
         * @constructor
         */
        constructor(executor: IPromiseExecutor<R>);
        then<U>(onFulfillment?: (value: R) => U | IThenable<U>, onRejection?: (reason: any) => U | IThenable<U>): Promise<U>;
        catch<U>(onRejection?: (reason: any) => U | IThenable<U>): Promise<U>;
    }
}
/**
 * 配置模块
 */
declare module drunk.config {
    /**
     * 绑定指令的前缀
     */
    var prefix: string;
    /**
     * debug模式配置变量
     */
    var debug: boolean;
}
declare module drunk {
    /**
     * LRU Cache类
     */
    class Cache<T> {
        /**
         * 缓存节点的hash表
         */
        private _cacheMap;
        /**
         * 缓存头部
         */
        private _head;
        /**
         * 缓存尾部
         */
        private _tail;
        /**
         * 缓存容量
         */
        private _capacity;
        /**
         * 缓存节点计数
         */
        private _count;
        /**
         * @param  capacity  容量值
         */
        constructor(capacity: number);
        /**
         * 根据key获取缓存的值
         * @param key  要获取的字段
         */
        get(key: string): T;
        /**
         * 根据key和value设置缓存
         * @param   key   要缓存的字段
         * @param   value 要缓存的值
         */
        set(key: string, value: T): void;
        /**
         * 把节点放到头部
         * @param  cacheNode  缓存节点
         */
        private _putToHead(cacheNode);
        /**
         * 移除最后一个节点
         * @return 返回移除的节点的key
         */
        private _removeTail();
    }
}
/**
 * 工具方法模块
 */
declare module drunk.util {
    /**
     * 获取对象的为一id
     * @param  target  设置的对象
     */
    function uuid(target: any): number;
    /**
     * 判断是否是对象
     * @param   target 判断目标
     */
    function isObject(target: any): boolean;
    /**
     * 拓展对象
     * @param  destination  目标对象
     * @param  ...sources   不定长参数，源对象的集合
     * @return              返回输入的目标对象
     */
    function extend(destination: any, ...sources: any[]): any;
    /**
     * 深度拷贝对象
     * @param   target  需要拷贝的对象
     */
    function deepClone(target: any): any;
    /**
     * 转换成数组
     * @param   arrayLike  类似数组的对象
     * @return             转换后的数组
     */
    function toArray(arrayLike: any): any[];
    /**
     * 给数组添加item，确保item不重复
     * @param   array  数组
     * @param   item   值
     */
    function addArrayItem(array: any[], item: any): void;
    /**
     * 移除数组的指定值
     * @param   array  数组
     * @param   item   值
     */
    function removeArrayItem(array: any[], item: any): void;
    /**
     * 字符串驼峰化
     * @param   str 字符串
     */
    function camelCase(str: string): string;
    /**
     * Object.defineProperty的快捷方法，会设置configurable,writable默认为true
     * @param   target         设置的目标
     * @param   propertyName   属性
     * @param   propertyValue  值
     * @param   enumerable     该属性是否可枚举
     */
    function defineProperty(target: any, propertyName: string, propertyValue: any, enumerable?: boolean): void;
    /**
     * 属性代理,把a对象的某个属性的读写代理到b对象上,返回代理是否成功的结果
     * @param   a         对象a
     * @param   property  属性名
     * @param   b         对象b
     * @return            如果已经代理过,则不再代理该属性
     */
    function proxy(a: Object, property: string, b: Object): boolean;
    interface IAsyncJob {
        completed: boolean;
        cancel(): void;
    }
    /**
     * 创建一个异步工作
     * @param   work       回调函数
     * @param   context    上下文对象
     * @return             返回一个带有cancel方法的job对象
     */
    function execAsyncWork(work: () => any, context?: any): IAsyncJob;
}
declare module drunk {
    /**
     * Map类，可把任务类型的对象作为key
     */
    class Map<T> {
        /**
         * 对应Key的数据
         */
        private _store;
        /**
         * 所有的key的列表
         */
        private _keys;
        /**
         * 所有的key生成的uuid的列表
         */
        private _uuids;
        /**
         * 获取指定key的uuid
         */
        private _uuidOf(key);
        /**
         * 设值
         * @param   key  键,可为任意类型
         * @param  value 值
         */
        set(key: any, value: T): Map<T>;
        /**
         * 取值
         * @param key  键名
         */
        get(key: any): T;
        /**
         * 是否有对应键的值
         * @param  key 键名
         */
        has(key: any): boolean;
        /**
         * 删除指定键的记录
         * @param   key 键名
         */
        delete(key: any): boolean;
        /**
         * 清除所有的成员
         */
        clear(): void;
        /**
         * 遍历
         * @param   callback  回调
         * @param   context   上下文,回调里的this参数
         */
        forEach(callback: (value: T, key: any, map: Map<T>) => any, context?: any): void;
        /**
         * 获取所有的key
         */
        keys(): any[];
        /**
         * 获取所有的值
         */
        values(): T[];
        /**
         * map的成员个数
         */
        size: number;
    }
}
declare module drunk {
    interface IEventListener {
        (...args: any[]): void;
        __isOnce?: boolean;
    }
    /**
     * 事件管理类
     */
    class EventEmitter {
        /**
         * 注册事件
         * @param  type       事件类型
         * @param  listener   事件回调
         */
        $addListener(type: string, listener: IEventListener): EventEmitter;
        /**
         * 注册事件,$addListener方法的别名
         * @param   type       事件类型
         * @param   listener   事件回调
         */
        $on(type: string, listener: IEventListener): EventEmitter;
        /**
         * 注册一次性事件
         * @param   type      事件类型
         * @param   listener  事件回调
         */
        $once(type: string, listener: IEventListener): EventEmitter;
        /**
         * 移除指定类型的事件监听
         * @param   type     事件类型
         * @param   listener 事件回调
         */
        $removeListener(type: string, listener: IEventListener): EventEmitter;
        /**
         * 移除所有指定类型的事件,或当事件类型未提供时,移除所有该实例上所有的事件
         * @param   type  事件类型，可选
         */
        $removeAllListeners(type?: string): EventEmitter;
        /**
         * 派发指定类型事件
         * @param   type        事件类型
         * @param   ...args     其他参数
         */
        $emit(type: string, ...args: any[]): EventEmitter;
        /**
         * 获取指定事件类型的所有listener回调
         * @param   type  事件类型
         */
        $listeners(type: string): IEventListener[];
        /**
         * 获取事件实例的指定事件类型的回调技术
         * @param  emitter  事件类实例
         * @param  type     事件类型
         */
        static listenerCount(emitter: EventEmitter, type: string): number;
        /**
         * 移除对象的所有事件回调引用
         * @param  emitter  事件发射器实例
         */
        static cleanup(emitter: EventEmitter): void;
    }
}
/**
 * 搜索字符串解析模块
 */
declare module drunk.querystring {
    /**
     * 解析字符串生成一个键值对表
     * @param  str  搜索字符串
     */
    function parse(str: string): {
        [key: string]: string;
    };
    /**
     * 把一个键值对表转化为搜索字符串
     * @param  obj 键值对表
     */
    function stringify(obj: Object): string;
}
declare module drunk.util {
    /**
     * ajax方法参数接口
     */
    interface IAjaxOptions {
        /**
         * 请求的url
         */
        url: string;
        /**
         * 请求的类型(GET|POST|PUT|DELETE等)
         */
        type?: string;
        /**
         * 要发送的数据
         */
        data?: string | {};
        /**
         * 请求头配置
         */
        headers?: {
            [index: string]: string;
        };
        /**
         * withCredentials配置
         */
        xhrFields?: {
            withCredentials: boolean;
        };
        /**
         * withCredentials快捷配置
         */
        withCredentials?: boolean;
        /**
         * 请求的content-type
         */
        contentType?: string;
        /**
         * 接受的数据类型(目前只支持json)
         */
        dataType?: string;
    }
    /**
     * XMLHTTP request工具方法
     * @param   options  配置参数
     */
    function ajax<T>(options: IAjaxOptions): Promise<T>;
}
/**
 * 调度器模块
 */
declare module drunk.Scheduler {
    /**
     * 调度方法
     * @param  work      调度的执行函数
     * @param  priority  优先级
     * @param  context   上下文
     */
    function schedule(work: IWork, priority?: Priority, context?: any): IJob;
    /**
     * 当指定优化级的任何都执行完成后触发的回调
     * @param  priority  优先级
     * @param  callback  回调
     */
    function requestDrain(priority: Priority, callback: () => any): void;
    interface IJob {
        priority: Priority;
        completed: boolean;
        cancel(): void;
        pause(): void;
        resume(): void;
    }
    interface IJobInfo {
        shouldYield: boolean;
        setWork(work: (jobInfo: IJobInfo) => any): void;
        setPromise(promise: Promise<IWork>): void;
    }
    interface IWork {
        (jobInfo: IJobInfo): any;
    }
    /**
     * 调度器优先级
     */
    enum Priority {
        max = 15,
        high = 13,
        aboveNormal = 9,
        normal = 0,
        belowNormal = -9,
        idle = -13,
        min = -15,
    }
}
/**
 * 转换后的可以监控对象
 * 添加了设置和移除字段的两个能发送数据更新的方法。
 */
declare module drunk.observable {
    /**
     * 可监控JSON对象的声明
     */
    interface ObservableObject {
        [name: string]: any;
        __observer__?: Observer;
        $set?(name: string, value: any): void;
        $remove?(name: string): void;
    }
    /**
     * 设置对象的属性，并发送更新的消息
     * @param  data   JSON对象或已经为observable的JSON对象
     * @param  name   字段名
     */
    function $set(data: ObservableObject, name: string, value: any): void;
    /**
     * 移除对象属性，并会发送更新的消息
     * @param  data  JSON对象或已经为observable的JSON对象
     * @param  name  字段名
     */
    function $remove(data: ObservableObject, name: string): void;
    /**
     * 对象转换成observable后指向的原型对象
     */
    var ObservableObjectPrototype: ObservableObject;
}
declare module drunk.observable {
    /**
     * 监控对象类，为每个需要监控的对象和数组生成一个实例，用于代理监听事件
     */
    class Observer extends EventEmitter {
        /**
         * 属性改变的回调函数列表
         */
        private _propertyChangedCallbackList;
        /**
         * 添加任意属性改变的回调
         */
        addPropertyChangedCallback(callback: IEventListener): void;
        /**
         * 移除任意属性改变的指定回调
         */
        removePropertyChangedCallback(callback: IEventListener): void;
        /**
         * 发送任意属性改变的通知
         */
        notify(): void;
    }
}
/**
 * observable模块的工具方法，用于创建可观察的数据，数据绑定等
 */
declare module drunk.observable {
    /**
     * 根据数据返回对应的Observer 实例，如果该数据已经存在对应的 Observer 实例则直接返回，否则创建一个新的实例
     * @param data 数组或JSON对象
     */
    function create<T>(data: ObservableArray<T> | ObservableObject | any): Observer;
    /**
     * 访问observableObject的字段时会调用的回调
     * @param   observer  返回的当前正在访问的数据的observer对象
     * @param   property  正在访问的数据的字段
     * @param   value     对应字段的数据
     * @param   data      可观察数据
     */
    let onPropertyAccessing: (observer: Observer, property: string, value: any, data: ObservableObject) => void;
    /**
     * 转换对象属性的getter/setter，使其能在数据更新是能接受到事件
     * @param  data  	 JSON对象
     * @param  property  JSON对象上的字段
     */
    function observe(data: ObservableObject, property: string, value: any): void;
    /**
     * 通知数据的指定属性更新
     * @param  data       数据
     * @param  property   要通知的字段名，如果该参数不提供，则派发该该数据更新的通知
     */
    function notify<T>(data: ObservableArray<T> | ObservableObject): void;
}
/**
 * 转换后的可以监控数组
 * 除了有常规数组的所有方法外还添加了几个工具方法，并在某些修改自身的方法调用后对新数据进行处理和
 * 发送数据更新的通知。
 */
declare module drunk.observable {
    /**
     * 可监控数组的声明
     */
    interface ObservableArray<T> extends Array<T> {
        __observer__?: Observer;
        $setAt?(index: number, value: any): void;
        $removeAt?<T>(index: number): T;
        $removeItem?(value: any): void;
        $removeAllItem?(value: any): void;
    }
    /**
     * 数组转换成observable后指向的原型对象
     */
    var ObservableArrayPrototype: ObservableArray<any>;
    /**
     * 设置数组指定数组下标的值，并发送数组更新通知
     * @param  array   observableArray类型的数组
     * @param  index   要设置的数组下标
     * @param  value   要设置的值
     */
    function $setAt<T>(array: ObservableArray<T>, index: number, value: T): void;
    /**
     * 根据索引移除数组中的元素，并发送数组更新通知
     * @param  array  observableArray类型的数组
     * @param  index  要移除的下标
     */
    function $removeAt<T>(array: ObservableArray<T>, index: number): T;
    /**
     * 删除数组中出现的一个指定值，并发送数组更新通知
     * @param  array  observableArray类型的数组
     * @param  value  要移除的值
     */
    function $removeItem<T>(array: ObservableArray<T>, value: any): void;
    /**
     * 删除数组中所有的指定值，并发送数组更新通知
     * @param  array  observableArray类型的数组
     * @param  value  要移除的值
     */
    function $removeAllItem<T>(array: ObservableArray<T>, value: any): void;
    /**
     * 删除所有数组元素
     */
    function removeAll<T>(array: ObservableArray<T>): void;
}
declare module drunk {
    class Watcher {
        private viewModel;
        private expression;
        private isDeepWatch;
        /**
         * 根据表达式和是否深度监听生成唯一的key,用于储存在关联的viewModel实例的watcher表中
         * @param   expression  表达式
         * @param   isDeepWatch 是否深度监听
         */
        static getNameOfKey(expression: string, isDeepWatch?: boolean): string;
        private _isInterpolate;
        private _actions;
        private _observers;
        private _properties;
        private _tmpObservers;
        private _tmpProperties;
        private _isActived;
        private _runActionJob;
        private _getter;
        /**
         * 表达式求值的结果
         */
        value: any;
        /**
         * 每个watcher对应一个表达式,watcher管理着对应这个表达式更新的回调函数.watcher在对表达式进行求值是,访问每个数据的getter,并得到该数据的observer引用,然后订阅该observer.当某个数据更新时该数据的observer实例会发送通知给所有的watcher,watcher接收到消息后会调用所有的表达式更新的回调.
         * @param   viewModel   ViewModel实例，用于访问数据
         * @param   expression  监听的表达式
         * @param   isDeepWatch 是否深度监听,当对象或数组里的任意一个数据改变都会发送更新消息
         */
        constructor(viewModel: ViewModel, expression: string, isDeepWatch?: boolean);
        /**
         * 添加数据更新回调
         * @param  action  回调函数
         */
        addAction(action: IBindingUpdateAction): void;
        /**
         * 移除数据更新回调
         * @param  action 回调函数
         */
        removeAction(action: IBindingUpdateAction): void;
        /**
         * 数据更新派发，会先做缓冲，防止在同一时刻对此出发更新操作，等下一次系统轮训时再真正执行更新操作
         */
        __propertyChanged(): void;
        /**
         * 立即获取最新的数据判断并判断是否已经更新，如果已经更新，执行所有的回调
         */
        __flush(): void;
        /**
         * 释放引用和内存
         */
        dispose(): void;
        /**
         * 执行表达式函数获取最新的数据
         */
        private __getValue();
        /**
         * 设置observable的属性访问回调为当前watcher实例的订阅方法,当访问某个属性是就会对该属性进行订阅
         */
        private __beforeGetValue();
        /**
         * 表达式求解完后的收尾工作,取消注册onPropertyAccessed回调,并对比旧的observer表和新的表看有哪些实例已经不需要订阅
         */
        private __afterGetValue();
        /**
         * 订阅属性的更新消息
         * @param  observer 属性的所属观察者
         * @param  property 属性名
         */
        private _subscribePropertyChanged(observer, property);
    }
}
declare module drunk {
    /**
     * 更新函数接口
     */
    interface IBindingUpdateAction {
        (newValue: any, oldValue: any): any;
    }
    /**
     * 绑定声明接口
     */
    interface IBindingDefinition {
        name?: string;
        isDeepWatch?: boolean;
        isTerminal?: boolean;
        priority?: number;
        expression?: string;
        retainAttribute?: boolean;
        init?(parentViewModel?: ViewModel, placeholder?: HTMLElement): void;
        update?(newValue: any, oldValue: any): void;
        release?(): void;
    }
    /**
     * 绑定构建函数接口
     */
    interface IBindingExecutor {
        (viewModel: ViewModel, element: any, parentViewModel?: ViewModel, placeHolder?: HTMLElement): any;
        isTerminal?: boolean;
        priority?: number;
    }
    /**
     * 绑定类
     */
    class Binding {
        viewModel: ViewModel;
        element: any;
        /**
         * binding名称
         */
        name: string;
        /**
         * 是否深度监听表达式
         */
        isDeepWatch: boolean;
        /**
         * 是否是绑定在一个插值表达式
         */
        isInterpolate: boolean;
        /**
         * 绑定的表达式
         */
        expression: string;
        /**
         * 绑定初始化方法
         */
        init: (parentViewModel?: ViewModel, placeholder?: HTMLElement) => void;
        /**
         * 绑定更新方法
         */
        update: IBindingUpdateAction;
        /**
         * 绑定释放方法
         */
        release: () => void;
        /**
         * 是否已经不可用
         */
        private _isActived;
        /**
         * 数据更新锁
         */
        private _isLocked;
        /**
         * 移除watcher方法
         */
        private _unwatch;
        /**
         * 内置的update包装方法
         */
        private _update;
        /**
         * 根据绑定的定义创建一个绑定实例，根据定义进行viewModel与DOM元素绑定的初始化、视图渲染和释放
         * @param  viewModel       ViewModel实例
         * @param  element         绑定元素
         * @param  definition      绑定定义
         */
        constructor(viewModel: ViewModel, element: any, descriptor: IBindingDefinition);
        /**
         * 初始化绑定
         */
        initialize(parentViewModel: any, placeholder?: HTMLElement): any;
        /**
         * 移除绑定并销毁
         */
        dispose(): void;
        /**
         * 设置表达式的值到viewModel上,因为值更新会触发视图更新,会返回来触发当前绑定的update方法,所以为了避免不必要的
         * 性能消耗,这里提供加锁操作,在当前帧内设置锁定状态,发现是锁定的情况就不再调用update方法,下一帧的时候再把锁定状态取消
         * @param  value    要设置的值
         * @param  isLocked 是否加锁
         */
        setValue(value: any, isLocked?: boolean): void;
    }
    module Binding {
        /**
         * 获取元素的所有绑定实例
         * @param  element  元素节点
         */
        function getAllBindingsByElement(element: Node): Binding[];
        /**
         * 添加引用
         * @param  element  元素节点
         * @param  binding  绑定实例
         */
        function setWeakRef(element: Node, binding: Binding): void;
        /**
         * 移除引用
         * @param   element  元素节点
         * @param   binding  绑定实例
         */
        function removeWeakRef(element: Node, binding: Binding): void;
        /**
         * 绑定创建的优先级
         */
        enum Priority {
            low = -100,
            high = 100,
            normal = 0,
            aboveNormal = 50,
            belowNormal = -50,
        }
        /**
         * 根据一个绑定原型对象注册一个binding指令
         * @param   name  指令名
         * @param   def   binding实现的定义对象或绑定的更新函数
         */
        function register<T extends IBindingDefinition>(name: string, definition: T): void;
        /**
         * 根据绑定名获取绑定的定义
         * @param   name      绑定的名称
         * @return            具有绑定定义信息的对象
         */
        function getByName(name: string): IBindingDefinition;
        /**
         * 获取已经根据优先级排序的终止型绑定的名称列表
         * @return 返回绑定名称列表
         */
        function getTerminalBindings(): string[];
        /**
         * 创建viewModel与模板元素的绑定
         * @param   viewModel  ViewModel实例
         * @param   element    元素
         */
        function create(viewModel: any, element: any, descriptor: IBindingDefinition, parentViewModel?: any, placeholder?: HTMLElement): any;
    }
}
declare module drunk {
    interface IModel extends observable.ObservableObject {
        [key: string]: any;
    }
    /**
     * ViewModel类， 实现数据与模板元素的绑定
     */
    class ViewModel extends EventEmitter {
        /**
         * 实例是否未被释放
         */
        _isActived: boolean;
        /**
         * 数据对象
         */
        _model: IModel;
        /**
         * 该实例下所有的绑定实例的列表
         */
        _bindings: Binding[];
        /**
         * 该实例下所有的watcher实例表
         */
        _watchers: {
            [expression: string]: Watcher;
        };
        /**
         * 过滤器方法,包含内置的
         */
        $filter: {
            [name: string]: filter.IFilter;
        };
        /**
         * 事件处理方法集合
         */
        handlers: {
            [name: string]: (...args: any[]) => any;
        };
        /**
         * @param   model  初始化数据
         */
        constructor(model?: IModel);
        /**
         * 初始化私有属性,并对model里的所有字段进行代理处理
         * @param  model  数据对象
         */
        protected __init(model?: IModel): void;
        /**
         * 代理某个属性到最新的IModel上
         * @param   property  需要代理的属性名
         */
        $proxy(property: string): void;
        /**
         * 执行表达式并返回结果
         * @param   expression      表达式
         * @param   isInterpolate   是否是插值表达式
         */
        $eval(expression: string, isInterpolate?: boolean): any;
        /**
         * 根据表达式设置值
         * @param   expression  表达式
         * @param   value       值
         */
        $setValue(expression: string, value: any): void;
        /**
         * 把model数据转成json并返回
         * @return   json格式的不带getter/setter的model对象
         */
        $getModel(): any;
        /**
         * 监听表达式的里每个数据的变化
         * @param   expression  表达式
         * @return              返回一个取消监听的函数
         */
        $watch(expression: string, action: IBindingUpdateAction, isDeepWatch?: boolean, isImmediate?: boolean): () => void;
        /**
         * 释放ViewModel实例的所有元素与数据的绑定,解除所有的代理属性,解除所有的视图于数据绑定,移除事件缓存,销毁所有的watcher
         */
        $release(): void;
        /**
         * 获取事件回调,内置方法
         * @param  handlerName  事件回调名称
         * @return              返回事件处理函数
         */
        __getHandler(handlerName: string): Function;
        /**
         * 根据getter函数获取数据
         * @param   getter         表达式解析生成的getter函数
         * @param   isInterpolate  是否是插值表达式
         * @param   event          事件对象
         * @param   el             元素对象
         */
        __getValueByGetter(getter: any, isInterpolate: any): any;
    }
}
/**
 * 简单的解析器,只是做了字符串替换,然后使用new Function生成函数
 */
declare module drunk.parser {
    interface IGetter {
        (viewModel: ViewModel, ...args: Array<any>): any;
        filters?: Array<filter.IFilterDef>;
        dynamic?: boolean;
        isInterpolate?: boolean;
    }
    interface ISetter {
        (viewModel: ViewModel, value: any): any;
    }
    /**
     * 解析表达式
     * @param  expression  表达式
     */
    function parse(expression: string): IGetter;
    /**
     * 解析表达式生成getter函数
     * @param   expression      表达式字符串
     * @param   isInterpolate   是否是一哥插值表达式
     * @param   skipFilter      跳过解析filter
     */
    function parseGetter(expression: string, isInterpolate?: boolean, skipFilter?: boolean): IGetter;
    /**
     * 解析表达式生成setter函数
     * @param   expression 表达式字符串
     */
    function parseSetter(expression: string): ISetter;
    /**
     * 解析包含插值绑定的字符串表达式， 类似"a {{interpolate_let}}"， 花括号里的就是插值变量
     * 先判断是否存在花括号， 然后在解析成tokens， 再根据token生成getter函数
     * @param   expression  表达式字符串
     * @param   justTokens  是否只需要返回tokens
     */
    function parseInterpolate(expression: string): IGetter;
    function parseInterpolate(expression: string, justTokens: boolean): any[];
    /**
     * 是否有插值语法
     * @param   str  字符串
     */
    function hasInterpolation(str: string): boolean;
}
/**
 * 数据过滤器模块
 * @module drunk.filter
 */
declare module drunk.filter {
    /**
     * Filter声明
     * @param   input       输入
     * @param   ...arggs    其他参数
     */
    interface IFilter {
        (...args: any[]): any;
    }
    interface IFilterDef {
        name: string;
        param?: parser.IGetter;
    }
    /**
     * 使用提供的filter列表处理数据
     * @param   value       输入
     * @param   filterDefs  filter定义集合
     * @param   viewModel   ViewModel实例
     * @param   ...args     其他参数
     */
    function pipeFor(value: any, filterDefs: any, filterMap: {
        [name: string]: IFilter;
    }, isInterpolate: boolean, ...args: any[]): any;
    /**
     * filter方法表
     */
    let filters: {
        [name: string]: IFilter;
    };
}
declare module drunk {
    interface IActionExecutor {
        (element: HTMLElement, ondone: Function): () => void;
    }
    interface IActionDefinition {
        created: IActionExecutor;
        removed: IActionExecutor;
    }
    interface IActionType {
        created: string;
        removed: string;
    }
    interface IAction {
        cancel?(): void;
        promise?: Promise<any>;
    }
    /**
     * 动画模块
     */
    module Action {
        /**
         * action的类型
         */
        let Type: {
            created: string;
            removed: string;
        };
        /**
         * 设置当前正在执行的action
         * @param   element 元素节点
         * @param   action  action描述
         */
        function setCurrentAction(element: HTMLElement, action: IAction): void;
        /**
         * 获取元素当前的action对象
         * @param   element  元素节点
         */
        function getCurrentAction(element: HTMLElement): IAction;
        /**
         * 移除当前元素的action引用
         * @param  element
         */
        function removeRef(element: HTMLElement): void;
        /**
         * 执行单个action,优先判断是否存在js定义的action,再判断是否是css动画
         * @param   element    元素对象
         * @param   detail     action的信息,动画名或延迟时间
         * @param   type       action的类型(created或removed)
         */
        function run(element: HTMLElement, detail: string, type: string): IAction;
        /**
         * 注册一个js action
         * @method register
         * @param  {string}              name        动画名称
         * @param  {IActionDefinition}   definition  动画定义
         */
        function register<T extends IActionDefinition>(name: string, definition: T): void;
        /**
         * 根据名称获取注册的action实现
         * @param   name  action名称
         */
        function getByName(name: string): IActionDefinition;
    }
}
/**
 * DOM操作的工具方法模块
 */
declare module drunk.dom {
    /**
     * 根据提供的html字符串创建html元素
     * @param   html  html字符串
     * @return        创建好的html元素或元素列表数组
     */
    function create(htmlString: string): Node | Node[];
    /**
     * 设置元素的innerHTML
     * @param   container  元素
     * @param   value      值
     */
    function html(container: HTMLElement, value: string): void;
    /**
     * 在旧的元素节点前插入新的元素节点
     * @param  newNode  新的节点
     * @param  oldNode  旧的节点
     */
    function before(newNode: any, oldNode: Node): void;
    /**
     * 在旧的元素节点后插入新的元素节点
     * @param  newNode  新的节点
     * @param  oldNode  旧的节点
     */
    function after(newNode: any, oldNode: Node): void;
    /**
     * 移除元素节点
     * @param  target  节点
     */
    function remove(target: any): Promise<any>;
    /**
     * 新的节点替换旧的节点
     * @param  newNode  新的节点
     * @param  oldNode  旧的节点
     */
    function replace(newNode: any, oldNode: Node): void;
    /**
     * 为节点注册事件监听
     * @param  element  元素
     * @param  type     事件名
     * @param  listener 事件处理函数
     */
    function on(element: HTMLElement, type: string, listener: (ev: Event) => void): void;
    /**
     * 移除节点的事件监听
     * @param  element  元素
     * @param  type     事件名
     * @param  listener 事件处理函数
     */
    function off(element: HTMLElement, type: string, listener: (ev: Event) => void): void;
    /**
     * 添加样式
     * @param   element    元素
     * @param   token      样式名
     */
    function addClass(element: HTMLElement, token: string): void;
    /**
     * 移除样式
     * @param  element    元素
     * @param  token      样式名
     */
    function removeClass(element: HTMLElement, token: string): void;
}
/**
 * 模板工具模块， 提供编译创建绑定，模板加载的工具方法
 */
declare module drunk.Template {
    /**
     * 编译模板元素生成绑定方法
     * @param   node        模板元素
     * @param   isRootNode  是否是根元素
     * @return              绑定元素与viewModel的方法
     */
    function compile(node: any): IBindingExecutor;
}
declare module drunk.Template {
    /**
     * 加载模板，先尝试从script标签上查找，找不到再发送ajax请求，
     * 加载到的模板字符串会进行缓存
     * @param    urlOrId  script模板标签的id或模板的url地址
     * @returns           一个Promise 对象,Promise的返回值为模板字符串
     */
    function load(urlOrId: string): Promise<string>;
}
declare module drunk.Template {
    /**
     * 把模块连接渲染为documentFragment,会对样式和脚本进行处理,避免重复加载,如果提供宿主容器元素,则会把
     * 模板渲染到改容器中
     * @param   href              模板连接
     * @param   hostedElement     容器元素
     * @param   useCache          是否使用缓存还是重新加载
     * @return                    返回一个Promise对象
     */
    function renderFragment(href: string, hostedElement?: HTMLElement, useCache?: boolean): Promise<Node>;
}
declare module drunk {
    interface IComponent {
        name?: string;
        init?: () => void;
        data?: {
            [name: string]: any;
        };
        filters?: {
            [name: string]: filter.IFilter;
        };
        watchers?: {
            [expression: string]: IBindingUpdateAction;
        };
        handlers?: {
            [name: string]: Function;
        };
        element?: Node | Node[];
        template?: string;
        templateUrl?: string;
    }
    interface IComponentContructor<T extends IComponent> {
        extend?<T extends IComponent>(name: string | T, members?: T): IComponentContructor<T>;
        (...args: any[]): void;
    }
    interface IComponentEvent {
        created: string;
        release: string;
        mounted: string;
    }
    class Component extends ViewModel {
        /**
         * 组件是否已经挂在到元素上
         */
        private _isMounted;
        /**
         * 组件被定义的名字
         */
        name: string;
        /**
         * 作为模板并与数据进行绑定的元素,可以创建一个组件类是指定该属性用于与视图进行绑定
         */
        element: Node | Node[];
        /**
         * 组件的模板字符串,如果提供该属性,在未提供element属性的情况下会创建为模板元素
         */
        template: string;
        /**
         * 组件的模板路径,可以是页面上某个标签的id,默认先尝试当成标签的id进行查找,找到的话使用该标签的innerHTML作为模板字符串,
         * 未找到则作为一个服务端的链接发送ajax请求获取
         */
        templateUrl: string;
        /**
         * 组件的数据,会被初始化到Model中,可以为一个函数,函数可以直接返回值或一个处理值的Promise对象
         */
        data: {
            [name: string]: any;
        };
        /**
         * 该组件作用域下的数据过滤器表
         */
        filters: {
            [name: string]: filter.IFilter;
        };
        /**
         * 该组件作用域下的事件处理方法
         */
        handlers: {
            [name: string]: (...args:any[]) => void;
        };
        /**
         * 监控器描述,key表示表达式,值为监控回调
         */
        watchers: {
            [expression: string]: (newValue: any, oldValue: any) => void;
        };
        /**
         * 组件类，继承ViewModel类，实现了模板的准备和数据的绑定
         * @param  model  初始化的数据
         */
        constructor(model?: IModel);
        /**
         * 实例创建时会调用的初始化方法,派生类可覆盖该方法
         */
        init(): void;
        /**
         * 属性初始化
         * @param  model 数据
         */
        protected __init(model?: IModel): void;
        /**
         * 处理模板，并返回模板元素
         */
        $processTemplate(templateUrl?: string): Promise<any>;
        /**
         * 把组件挂载到元素上
         * @param  element         要挂在的节点或节点数组
         * @param  ownerViewModel  父级viewModel实例
         * @param  placeholder     组件占位标签
         */
        $mount<T extends Component>(element: Node | Node[], ownerViewModel?: T, placeholder?: HTMLElement): void;
        /**
         * 释放组件
         */
        $release(): void;
    }
    module Component {
        /**
         * 组件的事件名称
         */
        let Event: IComponentEvent;
        /**
         * 获取挂在在元素上的viewModel实例
         * @param   element 元素
         * @return  Component实例
         */
        function getByElement(element: any): Component;
        /**
         * 设置element与viewModel的引用
         * @param   element    元素
         * @param   component  组件实例
         */
        function setWeakRef<T extends Component>(element: any, component: T): void;
        /**
         * 移除挂载引用
         * @param  element  元素
         */
        function removeWeakRef(element: any): void;
        /**
         * 根据组件名字获取组件构造函数
         * @param  name  组件名
         * @return  组件类的构造函数
         */
        function getByName(name: string): IComponentContructor<any>;
        /**
         * 自定义一个组件类
         * @param  name     组件名，必然包含'-'在中间
         * @param  members  组件成员
         * @return          组件类的构造函数
         */
        function define<T extends IComponent>(members: T): IComponentContructor<T>;
        function define<T extends IComponent>(name: string, members: T): IComponentContructor<T>;
        /**
         * 当前组件类拓展出一个子组件
         * @param    name       子组件名
         * @param    members    子组件的成员
         * @return              组件类的构造函数
         */
        function extend<T extends IComponent>(members: T): IComponentContructor<T>;
        function extend<T extends IComponent>(name: string, members: T): IComponentContructor<T>;
        /**
         * 把一个继承了drunk.Component的组件类根据组件名字注册到组件系统中
         * @param  name          组件名
         * @param  componentCtor 组件类
         */
        function register(name: string, componentCtor: any): void;
    }
}
declare module drunk {
    interface IItemDataDescriptor {
        key: string | number;
        idx: number;
        val: any;
    }
    /**
     * 用于repeat作用域下的子viewModel
     * @param $parent     父级ViewModel
     * @param ownModel    私有的数据
     */
    class RepeatItem extends Component {
        private $parent;
        _isUsed: boolean;
        _isBinded: boolean;
        _placeholder: Comment;
        _element: any;
        protected _models: IModel[];
        constructor($parent: Component | RepeatItem, ownModel: any);
        /**
         * 这里只初始化私有model
         */
        protected __init(ownModel: any): void;
        /**
         * 继承父级viewModel的filter和私有model
         */
        protected __inheritParentMembers(): void;
        /**
         * 代理指定model上的所有属性
         */
        protected __proxyModel(model: IModel): void;
        /**
         * 重写代理方法,顺便也让父级viewModel代理该属性
         */
        $proxy(property: string): void;
        /**
         * 重写获取事件处理方法,忘父级查找该方法
         */
        __getHandler(handlerName: string): (...args: any[]) => any;
        /**
         * 实例释放
         */
        $release(): void;
        /**
         * 把数据转成列表,如果为空则转成空数组
         * @param  target  把对象转成带有item信息的数组
         */
        static toList(target: any): IItemDataDescriptor[];
    }
}
