// Type definitions for feng3d v0.0.5
// Project: http://www.feng3d.com/
// Definitions by: feng <https://github.com/wardenfeng/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module feng3d {
}
declare module feng3d {
    /**
     * 事件
     * @author feng 2014-5-7
     */
    class Event {
        private _type;
        private _bubbles;
        private _target;
        private _currentTarget;
        private _isStopBubbles;
        private _isStop;
        /**
         * 事件携带的自定义数据
         */
        data: any;
        /**
         * 创建一个作为参数传递给事件侦听器的 Event 对象。
         * @param type 事件的类型，可以作为 Event.type 访问。
         * @param data 携带数据
         * @param bubbles 确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         */
        constructor(type: string, data?: any, bubbles?: boolean);
        /**
         * 是否停止处理事件监听器
         */
        isStop: boolean;
        /**
         * 是否停止冒泡
         */
        isStopBubbles: boolean;
        tostring(): string;
        /**
         * 表示事件是否为冒泡事件。如果事件可以冒泡，则此值为 true；否则为 false。
         */
        readonly bubbles: boolean;
        /**
         * 事件的类型。类型区分大小写。
         */
        readonly type: string;
        /**
         * 事件目标。
         */
        target: IEventDispatcher;
        /**
         * 当前正在使用某个事件侦听器处理 Event 对象的对象。
         */
        readonly currentTarget: IEventDispatcher;
    }
}
declare module feng3d {
    /**
     * IEventDispatcher 接口定义用于添加或删除事件侦听器的方法，检查是否已注册特定类型的事件侦听器，并调度事件。
     * @author feng 2016-3-22
     */
    interface IEventDispatcher {
        /**
         * 名称
         */
        name: string;
        /**
         * 使用 EventDispatcher 对象注册事件侦听器对象，以使侦听器能够接收事件通知。
         * @param type						事件的类型。
         * @param listener					处理事件的侦听器函数。
         * @param thisObject                listener函数作用域
         * @param priority					事件侦听器的优先级。数字越大，优先级越高。默认优先级为 0。
         */
        addEventListener(type: string, listener: (event: Event) => void, thisObject: any, priority?: number): void;
        /**
         * 从 EventDispatcher 对象中删除侦听器. 如果没有向 IEventDispatcher 对象注册任何匹配的侦听器，则对此方法的调用没有任何效果。
         *
         * @param type						事件的类型。
         * @param listener					要删除的侦听器对象。
         * @param thisObject                listener函数作用域
         */
        removeEventListener(type: string, listener: (event: Event) => void, thisObject: any): void;
        /**
         * 将事件调度到事件流中. 事件目标是对其调用 dispatchEvent() 方法的 IEventDispatcher 对象。
         * @param event						调度到事件流中的 Event 对象。
         */
        dispatchEvent(event: Event): void;
        /**
         * 检查 EventDispatcher 对象是否为特定事件类型注册了任何侦听器.
         *
         * @param type		事件的类型。
         * @return 			如果指定类型的侦听器已注册，则值为 true；否则，值为 false。
         */
        hasEventListener(type: string): boolean;
    }
}
declare module feng3d {
    /**
     * 为了实现非flash原生显示列表的冒泡事件，自定义事件适配器
     * @author feng 2016-3-22
     */
    class EventDispatcher implements IEventDispatcher {
        /**
         * 名称
         */
        name: string;
        /**
         * 冒泡属性名称为“parent”
         */
        bubbleAttribute: string;
        /**
         * 事件适配主体
         */
        private target;
        /**
         * 构建事件适配器
         * @param target		事件适配主体
         */
        constructor(target?: IEventDispatcher);
        /**
         * 使用 EventDispatcher 对象注册事件侦听器对象，以使侦听器能够接收事件通知。
         * @param type						事件的类型。
         * @param listener					处理事件的侦听器函数。
         * @param thisObject                listener函数作用域
         * @param priority					事件侦听器的优先级。数字越大，优先级越高。默认优先级为 0。
         */
        addEventListener(type: string, listener: (event: Event) => void, thisObject: any, priority?: number): void;
        /**
         * 从 EventDispatcher 对象中删除侦听器. 如果没有向 IEventDispatcher 对象注册任何匹配的侦听器，则对此方法的调用没有任何效果。
         *
         * @param type						事件的类型。
         * @param listener					要删除的侦听器对象。
         * @param thisObject                listener函数作用域
         */
        removeEventListener(type: string, listener: (event: Event) => void, thisObject: any): void;
        /**
         * 将事件调度到事件流中. 事件目标是对其调用 dispatchEvent() 方法的 IEventDispatcher 对象。
         * @param event						调度到事件流中的 Event 对象。
         */
        dispatchEvent(event: Event): void;
        /**
         * 检查 EventDispatcher 对象是否为特定事件类型注册了任何侦听器.
         *
         * @param type		事件的类型。
         * @return 			如果指定类型的侦听器已注册，则值为 true；否则，值为 false。
         */
        hasEventListener(type: string): boolean;
        /**
         * 销毁
         */
        destroy(): void;
        /**
         * 派发冒泡事件
         * @param event						调度到事件流中的 Event 对象。
         */
        private dispatchBubbleEvent(event);
        /**
         * 获取冒泡对象
         * @param event						调度到事件流中的 Event 对象。
         */
        protected getBubbleTargets(event: Event): IEventDispatcher[];
    }
}
declare module feng3d {
    /**
     * 组件事件
     * @author feng 2015-12-2
     */
    class ComponentEvent extends Event {
        /**
         * 添加子组件事件
         * data = { container: IComponent, child: IComponent }
         */
        static ADDED_COMPONENT: string;
        /**
         * 移除子组件事件
         * data = { container: IComponent, child: IComponent }
         */
        static REMOVED_COMPONENT: string;
        /**
         * 事件目标。
         */
        target: IComponent;
    }
}
declare module feng3d {
    /**
     * 组件接口
     * @author feng 2016-4-24
     */
    interface IComponent extends IEventDispatcher {
        /**
         * 组件数量
         */
        numComponents: number;
        /**
         * 父组件
         */
        parentComponent: IComponent;
        /**
         * 添加组件
         * @param component 被添加组件
         */
        addComponent(component: IComponent): void;
        /**
         * 添加组件到指定位置
         * @param component		被添加的组件
         * @param index			插入的位置
         */
        addComponentAt(component: IComponent, index: number): void;
        /**
         * 移除组件
         * @param component 被移除组件
         */
        removeComponent(component: IComponent): void;
        /**
         * 移除组件
         * @param index		要删除的 Component 的子索引。
         */
        removeComponentAt(index: number): IComponent;
        /**
         * 获取组件在容器的索引位置
         * @param component			查询的组件
         * @return				    组件在容器的索引位置
         */
        getComponentIndex(com: IComponent): number;
        /**
        * 设置子组件的位置
        * @param component				子组件
        * @param index				    位置索引
        */
        setComponentIndex(component: IComponent, index: number): void;
        /**
         * 获取指定位置索引的子组件
         * @param index			位置索引
         * @return				子组件
         */
        getComponentAt(index: number): IComponent;
        /**
         * 根据组件名称获取组件
         * <p>注意：此处比较的是componentName而非name</p>
         * @param componentName		组件名称
         * @return 					获取到的组件
         */
        getComponentByName(componentName: String): IComponent;
        /**
        * 获取与给出组件名称相同的所有组件
        * <p>注意：此处比较的是componentName而非name</p>
        * @param componentName		组件名称
        * @return 					获取到的组件
        */
        getComponentsByName(componentName: String): IComponent[];
        /**
         * 根据类定义获取组件
         * <p>如果存在多个则返回第一个</p>
         * @param cls				类定义
         * @return
         */
        getComponentByClass<T extends IComponent>(cls: new (...args) => T): T;
        /**
         * 根据类定义查找组件
         * @param cls		类定义
         * @return			返回与给出类定义一致的组件
         */
        getComponentsByClass<T extends IComponent>(cls: new (...args) => T): T[];
        /**
         * 根据类定义获取或创建组件
         * <p>当不存在该类型对象时创建一个该组件并且添加到容器中</p>
         * @param cls
         * @return
         */
        getOrCreateComponentByClass<T extends IComponent>(cls: new (...args) => T): T;
        /**
        * 判断是否拥有组件
        * @param com	被检测的组件
        * @return		true：拥有该组件；false：不拥有该组件。
        */
        hasComponent(com: IComponent): boolean;
        /**
         * 交换子组件位置
         * @param index1		第一个子组件的索引位置
         * @param index2		第二个子组件的索引位置
         */
        swapComponentsAt(index1: number, index2: number): void;
        /**
         * 交换子组件位置
         * @param a		第一个子组件
         * @param b		第二个子组件
         */
        swapComponents(a: IComponent, b: IComponent): void;
        /**
         * 派发子组件事件
         * <p>事件广播给子组件</p>
         * @param event     事件
         * @param depth     广播深度
         */
        dispatchChildrenEvent(event: Event, depth: number): void;
    }
}
declare module feng3d {
    /**
     * 组件容器（集合）
     * @author feng 2015-5-6
     */
    class Component extends EventDispatcher implements IComponent {
        /**
         * 父组件
         */
        protected _parentComponent: IComponent;
        /**
         * 组件列表
         */
        protected components: IComponent[];
        /**
         * 创建一个组件容器
         */
        constructor();
        /**
         * 初始化组件
         */
        protected initComponent(): void;
        /**
         * 父组件
         */
        readonly parentComponent: IComponent;
        /**
         * 子组件个数
         */
        readonly numComponents: number;
        /**
         * 添加组件
         * @param component 被添加组件
         */
        addComponent(component: IComponent): void;
        /**
         * 添加组件到指定位置
         * @param component		被添加的组件
         * @param index			插入的位置
         */
        addComponentAt(component: IComponent, index: number): void;
        /**
         * 移除组件
         * @param component 被移除组件
         */
        removeComponent(component: IComponent): void;
        /**
         * 移除组件
         * @param index		要删除的 Component 的子索引。
         */
        removeComponentAt(index: number): IComponent;
        /**
         * 获取组件在容器的索引位置
         * @param component			查询的组件
         * @return				    组件在容器的索引位置
         */
        getComponentIndex(component: IComponent): number;
        /**
         * 设置子组件的位置
         * @param component				子组件
         * @param index				位置索引
         */
        setComponentIndex(component: IComponent, index: number): void;
        /**
         * 获取指定位置索引的子组件
         * @param index			位置索引
         * @return				子组件
         */
        getComponentAt(index: number): IComponent;
        /**
         * 根据组件名称获取组件
         * <p>注意：此处比较的是componentName而非name</p>
         * @param componentName		组件名称
         * @return 					获取到的组件
         */
        getComponentByName(name: String): IComponent;
        /**
         * 获取与给出组件名称相同的所有组件
         * <p>注意：此处比较的是componentName而非name</p>
         * @param name		        组件名称
         * @return 					获取到的组件
         */
        getComponentsByName(name: String): IComponent[];
        /**
         * 根据类定义获取组件
         * <p>如果存在多个则返回第一个</p>
         * @param cls				类定义
         * @return                  返回指定类型组件
         */
        getComponentByClass<T extends IComponent>(cls: new (...args) => T): T;
        /**
         * 根据类定义查找组件
         * @param cls		类定义
         * @return			返回与给出类定义一致的组件
         */
        getComponentsByClass<T extends IComponent>(cls: new (...args) => T): T[];
        /**
         * 根据类定义获取或创建组件
         * <p>当不存在该类型对象时创建一个该组件并且添加到容器中</p>
         * @param cls       类定义
         * @return          返回与给出类定义一致的组件
         */
        getOrCreateComponentByClass<T extends IComponent>(cls: new (...args) => T): T;
        /**
         * 判断是否拥有组件
         * @param com	被检测的组件
         * @return		true：拥有该组件；false：不拥有该组件。
         */
        hasComponent(com: IComponent): boolean;
        /**
         * 交换子组件位置
         * @param index1		第一个子组件的索引位置
         * @param index2		第二个子组件的索引位置
         */
        swapComponentsAt(index1: number, index2: number): void;
        /**
         * 交换子组件位置
         * @param a		第一个子组件
         * @param b		第二个子组件
         */
        swapComponents(a: IComponent, b: IComponent): void;
        /**
         * 派发子组件事件
         * <p>事件广播给子组件</p>
         * @param event     事件
         * @param depth     广播深度
         */
        dispatchChildrenEvent(event: Event, depth?: number): void;
        /**
         * 处理被添加组件事件
         */
        protected onBeAddedComponent(event: ComponentEvent): void;
        /**
         * 处理被移除组件事件
         */
        protected onBeRemovedComponent(event: ComponentEvent): void;
        /**
         * 获取冒泡对象
         */
        protected getBubbleTargets(event?: Event): IEventDispatcher[];
        /**
         * 处理添加组件事件，此处为被添加，设置父组件
         */
        private _onAddedComponent(event);
        /**
         * 处理移除组件事件，此处为被移除，清空父组件
         */
        private _onRemovedComponent(event);
    }
}
declare module feng3d {
    /**
     * 断言
     * @b			判定为真的表达式
     * @msg			在表达式为假时将输出的错误信息
     * @author feng 2014-10-29
     */
    function assert(b: boolean, msg?: string): void;
}
declare module feng3d {
    /**
     * 获取对象的类名
     * @author feng 2016-4-24
     */
    function getClassName(value: any): string;
}
declare module feng3d {
    class StringUtils {
        /**
         * 获取字符串
         * @param obj 转换为字符串的对象
         * @param showLen       显示长度
         * @param fill          长度不够是填充的字符串
         * @param tail          true（默认）:在尾部添加；false：在首部添加
         */
        static getString(obj: any, showLen?: number, fill?: string, tail?: boolean): string;
    }
}
declare module feng3d {
    /**
     * 构建Map类代替Dictionary
     */
    class Map<K, V> {
        /**
         * key,value组合列表
         */
        private list;
        /**
         * 删除
         */
        delete(k: K): void;
        /**
         * 添加映射
         */
        push(k: K, v: V): void;
        /**
         * 通过key获取value
         */
        get(k: K): V;
        /**
         * 获取键列表
         */
        getKeys(): K[];
        /**
         * 清理字典
         */
        clear(): void;
        /**
         * 通过key获取(key,value)组合
         */
        private _getKV(k);
    }
}
declare module feng3d {
    /**
     * 获取对象UID
     * @author feng 2016-05-08
     */
    function getUID(object: {
        __uid__?: string;
    }): any;
}
declare module feng3d {
    class Version {
        /**
         * 获取对象版本
         * @param object 对象
         */
        getVersion(object: Object): number;
        /**
         * 升级对象版本（版本号+1）
         * @param object 对象
         */
        upgradeVersion(object: Object): void;
        /**
         * 设置版本号
         * @param object 对象
         * @param version 版本号
         */
        setVersion(object: Object, version: number): void;
        /**
         * 判断两个对象的版本号是否相等
         */
        equal(a: Object, b: Object): boolean;
        /**
         * 断言object为对象类型
         */
        private assertObject(object);
    }
    /**
     * 对象版本
     */
    var version: Version;
}
declare module feng3d {
    /**
     * 判断a对象是否为b类型
     */
    function is(a: any, b: Function): boolean;
}
declare module feng3d {
    /**
     * 如果a为b类型则返回，否则返回null
     */
    function as(a: any, b: Function): any;
}
declare module feng3d {
    /**
     * 颜色
     * @author feng 2016-09-24
     */
    class Color {
        /**
         * 红色，0-1
         */
        r: number;
        /**
         * 绿色，0-1
         */
        g: number;
        /**
         * 蓝色，0-1
         */
        b: number;
        /**
         * 透明度，0-1
         */
        a: number;
        private _color;
        /**
         * 构建颜色
         */
        constructor(color?: number);
        /**
         * 颜色值，32位整数值
         */
        color: number;
        readonly x: number;
        readonly y: number;
        readonly z: number;
        readonly w: number;
    }
}
declare module feng3d {
    /**
     * 数学常量类
     */
    class MathConsts {
        /**
         * 弧度转角度因子
         */
        static RADIANS_TO_DEGREES: number;
        /**
         * 角度转弧度因子
         */
        static DEGREES_TO_RADIANS: number;
    }
}
declare module feng3d {
    /**
     * 矩形
     * @author feng 2016-04-27
     */
    class Rectangle {
        /**
         * X坐标
         */
        x: number;
        /**
         * Y坐标
         */
        y: number;
        /**
         * 宽度
         */
        width: number;
        /**
         * 高度
         */
        height: number;
        /**
         * 是否包含指定点
         * @param x 点的X坐标
         * @param y 点的Y坐标
         */
        contains(x: number, y: number): boolean;
    }
}
declare module feng3d {
    /**
     * Vector3D 类使用笛卡尔坐标 x、y 和 z 表示三维空间中的点或位置
     * @author feng 2016-3-21
     */
    class Vector3D {
        /**
        * 定义为 Vector3D 对象的 x 轴，坐标为 (1,0,0)。
        */
        static X_AXIS: Vector3D;
        /**
        * 定义为 Vector3D 对象的 y 轴，坐标为 (0,1,0)
        */
        static Y_AXIS: Vector3D;
        /**
        * 定义为 Vector3D 对象的 z 轴，坐标为 (0,0,1)
        */
        static Z_AXIS: Vector3D;
        /**
        * Vector3D 对象中的第一个元素，例如，三维空间中某个点的 x 坐标。默认值为 0
        */
        x: number;
        /**
        * Vector3D 对象中的第二个元素，例如，三维空间中某个点的 y 坐标。默认值为 0
        */
        y: number;
        /**
        * Vector3D 对象中的第三个元素，例如，三维空间中某个点的 z 坐标。默认值为 0
        */
        z: number;
        /**
        * Vector3D 对象的第四个元素（除了 x、y 和 z 属性之外）可以容纳数据，例如旋转角度。默认值为 0
        */
        w: number;
        /**
        * 当前 Vector3D 对象的长度（大小），即从原点 (0,0,0) 到该对象的 x、y 和 z 坐标的距离。w 属性将被忽略。单位矢量具有的长度或大小为一。
        */
        readonly length: number;
        /**
        * 当前 Vector3D 对象长度的平方，它是使用 x、y 和 z 属性计算出来的。w 属性将被忽略。尽可能使用 lengthSquared() 方法，而不要使用 Vector3D.length() 方法的 Math.sqrt() 方法调用，后者速度较慢。
        */
        readonly lengthSquared: number;
        /**
         * 创建 Vector3D 对象的实例。如果未指定构造函数的参数，则将使用元素 (0,0,0,0) 创建 Vector3D 对象。
         * @param x 第一个元素，例如 x 坐标。
         * @param y 第二个元素，例如 y 坐标。
         * @param z 第三个元素，例如 z 坐标。
         * @param w 表示额外数据的可选元素，例如旋转角度
         */
        constructor(x?: number, y?: number, z?: number, w?: number);
        /**
         * 将当前 Vector3D 对象的 x、y 和 z 元素的值与另一个 Vector3D 对象的 x、y 和 z 元素的值相加。
         * @param a 要与当前 Vector3D 对象相加的 Vector3D 对象。
         * @return 一个 Vector3D 对象，它是将当前 Vector3D 对象与另一个 Vector3D 对象相加所产生的结果。
         */
        add(a: Vector3D): Vector3D;
        /**
         * 返回一个新 Vector3D 对象，它是与当前 Vector3D 对象完全相同的副本。
         * @return 一个新 Vector3D 对象，它是当前 Vector3D 对象的副本。
         */
        clone(): Vector3D;
        /**
         * 将源 Vector3D 对象中的所有矢量数据复制到调用方 Vector3D 对象中。
         * @return 要从中复制数据的 Vector3D 对象。
         */
        copyFrom(sourceVector3D: Vector3D): void;
        /**
         * 返回一个新的 Vector3D 对象，它与当前 Vector3D 对象和另一个 Vector3D 对象垂直（成直角）。
         */
        crossProduct(a: Vector3D): Vector3D;
        /**
         * 按照指定的 Vector3D 对象的 x、y 和 z 元素的值递减当前 Vector3D 对象的 x、y 和 z 元素的值。
         */
        decrementBy(a: Vector3D): void;
        /**
         * 返回两个 Vector3D 对象之间的距离。
         */
        static distance(pt1: Vector3D, pt2: Vector3D): number;
        /**
         * 如果当前 Vector3D 对象和作为参数指定的 Vector3D 对象均为单位顶点，此方法将返回这两个顶点之间所成角的余弦值。
         */
        dotProduct(a: Vector3D): number;
        /**
         * 通过将当前 Vector3D 对象的 x、y 和 z 元素与指定的 Vector3D 对象的 x、y 和 z 元素进行比较，确定这两个对象是否相等。
         */
        equals(toCompare: Vector3D, allFour?: boolean): boolean;
        /**
         * 按照指定的 Vector3D 对象的 x、y 和 z 元素的值递增当前 Vector3D 对象的 x、y 和 z 元素的值。
         */
        incrementBy(a: Vector3D): void;
        /**
         * 将当前 Vector3D 对象设置为其逆对象。
         */
        negate(): void;
        /**
         * 通过将最前面的三个元素（x、y、z）除以矢量的长度可将 Vector3D 对象转换为单位矢量。
         */
        normalize(thickness?: number): void;
        /**
         * 按标量（大小）缩放当前的 Vector3D 对象。
         */
        scaleBy(s: number): void;
        /**
         * 将 Vector3D 的成员设置为指定值
         */
        setTo(xa: number, ya: number, za: number): void;
        /**
         * 从另一个 Vector3D 对象的 x、y 和 z 元素的值中减去当前 Vector3D 对象的 x、y 和 z 元素的值。
         */
        subtract(a: Vector3D): Vector3D;
        /**
         * 返回当前 Vector3D 对象的字符串表示形式。
         */
        toString(): string;
    }
}
declare module feng3d {
    /**
     * Matrix3D 类表示一个转换矩阵，该矩阵确定三维 (3D) 显示对象的位置和方向。
     * 该矩阵可以执行转换功能，包括平移（沿 x、y 和 z 轴重新定位）、旋转和缩放（调整大小）。
     * Matrix3D 类还可以执行透视投影，这会将 3D 坐标空间中的点映射到二维 (2D) 视图。
     *
     *  ---            方向              平移 ---
     *  |   scaleX      0         0       tx    |
     *  |     0       scaleY      0       ty    |
     *  |     0         0       scaleZ    tz    |
     *  |     0         0         0       tw    |
     *  ---  x轴        y轴      z轴          ---
     *
     *  ---            方向              平移 ---
     *  |     0         4         8       12    |
     *  |     1         5         9       13    |
     *  |     2         6        10       14    |
     *  |     3         7        11       15    |
     *  ---  x轴        y轴      z轴          ---
     */
    class Matrix3D {
        /**
         * 一个由 16 个数字组成的矢量，其中，每四个元素可以是 4x4 矩阵的一列。
         */
        rawData: Float32Array;
        /**
         * 一个保存显示对象在转换参照帧中的 3D 坐标 (x,y,z) 位置的 Vector3D 对象。
         */
        position: Vector3D;
        /**
         * 一个用于确定矩阵是否可逆的数字。
         */
        readonly determinant: number;
        /**
         * 前方（+Z轴方向）
         */
        readonly forward: Vector3D;
        /**
         * 上方（+y轴方向）
         */
        readonly up: Vector3D;
        /**
         * 右方（+x轴方向）
         */
        readonly right: Vector3D;
        /**
         * 创建 Matrix3D 对象。
         * @param   datas    一个由 16 个数字组成的矢量，其中，每四个元素可以是 4x4 矩阵的一列。
         */
        constructor(datas?: Float32Array | number[]);
        /**
         * 创建旋转矩阵
         * @param   degrees         角度
         * @param   axis            旋转轴
         * @param   pivotPoint      旋转中心点
         */
        static createRotationMatrix3D(degrees: number, axis: Vector3D): Matrix3D;
        /**
         * 创建缩放矩阵
         * @param   xScale      用于沿 x 轴缩放对象的乘数。
         * @param   yScale      用于沿 y 轴缩放对象的乘数。
         * @param   zScale      用于沿 z 轴缩放对象的乘数。
         */
        static createScaleMatrix3D(xScale: number, yScale: number, zScale: number): Matrix3D;
        /**
         * 创建位移矩阵
         * @param   x   沿 x 轴的增量平移。
         * @param   y   沿 y 轴的增量平移。
         * @param   z   沿 z 轴的增量平移。
         */
        static createTranslationMatrix3D(x: number, y: number, z: number): Matrix3D;
        /**
         * 通过将另一个 Matrix3D 对象与当前 Matrix3D 对象相乘来后置一个矩阵。
         */
        append(lhs: Matrix3D): void;
        /**
         * 在 Matrix3D 对象上后置一个增量旋转。
         * @param   degrees         角度
         * @param   axis            旋转轴
         * @param   pivotPoint      旋转中心点
         */
        appendRotation(degrees: number, axis: Vector3D, pivotPoint?: Vector3D): void;
        /**
         * 在 Matrix3D 对象上后置一个增量缩放，沿 x、y 和 z 轴改变位置。
         * @param   xScale      用于沿 x 轴缩放对象的乘数。
         * @param   yScale      用于沿 y 轴缩放对象的乘数。
         * @param   zScale      用于沿 z 轴缩放对象的乘数。
         */
        appendScale(xScale: number, yScale: number, zScale: number): void;
        /**
         * 在 Matrix3D 对象上后置一个增量平移，沿 x、y 和 z 轴重新定位。
         * @param   x   沿 x 轴的增量平移。
         * @param   y   沿 y 轴的增量平移。
         * @param   z   沿 z 轴的增量平移。
         */
        appendTranslation(x: number, y: number, z: number): void;
        /**
         * 返回一个新 Matrix3D 对象，它是与当前 Matrix3D 对象完全相同的副本。
         */
        clone(): Matrix3D;
        /**
         * 将 Vector3D 对象复制到调用方 Matrix3D 对象的特定列中。
         * @param   column      副本的目标列。
         * @param   vector3D    要从中复制数据的 Vector3D 对象。
         */
        copyColumnFrom(column: number, vector3D: Vector3D): void;
        /**
         * 将调用方 Matrix3D 对象的特定列复制到 Vector3D 对象中。
         * @param   column       要从中复制数据的列。
         * @param   vector3D     副本的目标 Vector3D 对象。
         */
        copyColumnTo(column: number, vector3D: Vector3D): void;
        /**
         * 将源 Matrix3D 对象中的所有矩阵数据复制到调用方 Matrix3D 对象中。
         * @param   sourceMatrix3D      要从中复制数据的 Matrix3D 对象。
         */
        copyFrom(sourceMatrix3D: Matrix3D): void;
        /**
         * 将源 Vector 对象中的所有矢量数据复制到调用方 Matrix3D 对象中。利用可选索引参数，您可以选择矢量中的任何起始文字插槽。
         * @param   vector      要从中复制数据的 Vector 对象。
         * @param   index       vector中的起始位置
         * @param   transpose   是否转置当前矩阵
         */
        copyRawDataFrom(vector: Float32Array, index?: number, transpose?: boolean): void;
        /**
         * 将调用方 Matrix3D 对象中的所有矩阵数据复制到提供的矢量中。
         * @param   vector      要将数据复制到的 Vector 对象。
         * @param   index       vector中的起始位置
         * @param   transpose   是否转置当前矩阵
         */
        copyRawDataTo(vector: Array<number>, index?: number, transpose?: boolean): void;
        /**
         * 将 Vector3D 对象复制到调用方 Matrix3D 对象的特定行中。
         * @param   row         要将数据复制到的行。
         * @param   vector3D    要从中复制数据的 Vector3D 对象。
         */
        copyRowFrom(row: number, vector3D: Vector3D): void;
        /**
         * 将调用方 Matrix3D 对象的特定行复制到 Vector3D 对象中。
         * @param   row         要从中复制数据的行。
         * @param   vector3D    将作为数据复制目的地的 Vector3D 对象。
         */
        copyRowTo(row: number, vector3D: Vector3D): void;
        /**
         * 拷贝当前矩阵
         * @param   dest    目标矩阵
         */
        copyToMatrix3D(dest: Matrix3D): void;
        /**
         * 将转换矩阵的平移、旋转和缩放设置作为由三个 Vector3D 对象组成的矢量返回。
         * @return      一个由三个 Vector3D 对象组成的矢量，其中，每个对象分别容纳平移、旋转和缩放设置。
         */
        decompose(): Vector3D[];
        /**
         * 使用不含平移元素的转换矩阵将 Vector3D 对象从一个空间坐标转换到另一个空间坐标。
         * @param   v   一个容纳要转换的坐标的 Vector3D 对象。
         * @return  一个包含转换后的坐标的 Vector3D 对象。
         */
        deltaTransformVector(v: Vector3D): Vector3D;
        /**
         * 将当前矩阵转换为恒等或单位矩阵。
         */
        identity(): void;
        /**
         * 反转当前矩阵。逆矩阵
         * @return      如果成功反转矩阵，则返回 true。
         */
        invert(): boolean;
        /**
         * 通过将当前 Matrix3D 对象与另一个 Matrix3D 对象相乘来前置一个矩阵。得到的结果将合并两个矩阵转换。
         * @param   rhs     个右侧矩阵，它与当前 Matrix3D 对象相乘。
         */
        prepend(rhs: Matrix3D): void;
        /**
         * 在 Matrix3D 对象上前置一个增量旋转。在将 Matrix3D 对象应用于显示对象时，矩阵会在 Matrix3D 对象中先执行旋转，然后再执行其他转换。
         * @param   degrees     旋转的角度。
         * @param   axis        旋转的轴或方向。常见的轴为 X_AXIS (Vector3D(1,0,0))、Y_AXIS (Vector3D(0,1,0)) 和 Z_AXIS (Vector3D(0,0,1))。此矢量的长度应为 1。
         * @param   pivotPoint  一个用于确定旋转中心的点。对象的默认轴点为该对象的注册点。
         */
        prependRotation(degrees: number, axis: Vector3D, pivotPoint?: Vector3D): void;
        /**
         * 在 Matrix3D 对象上前置一个增量缩放，沿 x、y 和 z 轴改变位置。在将 Matrix3D 对象应用于显示对象时，矩阵会在 Matrix3D 对象中先执行缩放更改，然后再执行其他转换。
         * @param   xScale      用于沿 x 轴缩放对象的乘数。
         * @param   yScale      用于沿 y 轴缩放对象的乘数。
         * @param   zScale      用于沿 z 轴缩放对象的乘数。
         */
        prependScale(xScale: number, yScale: number, zScale: number): void;
        /**
         * 在 Matrix3D 对象上前置一个增量平移，沿 x、y 和 z 轴重新定位。在将 Matrix3D 对象应用于显示对象时，矩阵会在 Matrix3D 对象中先执行平移更改，然后再执行其他转换。
         * @param   x   沿 x 轴的增量平移。
         * @param   y   沿 y 轴的增量平移。
         * @param   z   沿 z 轴的增量平移。
         */
        prependTranslation(x: number, y: number, z: number): void;
        /**
         * 设置转换矩阵的平移、旋转和缩放设置。
         * @param   components      一个由三个 Vector3D 对象组成的矢量，这些对象将替代 Matrix3D 对象的平移、旋转和缩放元素。
         */
        recompose(components: Vector3D[]): void;
        /**
         * 使用转换矩阵将 Vector3D 对象从一个空间坐标转换到另一个空间坐标。
         * @param   vin   一个容纳要转换的坐标的 Vector3D 对象。
         * @return  一个包含转换后的坐标的 Vector3D 对象。
         */
        transformVector(vin: Vector3D, vout?: Vector3D): Vector3D;
        /**
         * 使用转换矩阵将由数字构成的矢量从一个空间坐标转换到另一个空间坐标。
         * @param   vin     一个由多个数字组成的矢量，其中每三个数字构成一个要转换的 3D 坐标 (x,y,z)。
         * @param   vout    一个由多个数字组成的矢量，其中每三个数字构成一个已转换的 3D 坐标 (x,y,z)。
         */
        transformVectors(vin: number[], vout: number[]): void;
        /**
         * 将当前 Matrix3D 对象转换为一个矩阵，并将互换其中的行和列。
         */
        transpose(): void;
        /**
         * 比较矩阵是否相等
         */
        compare(matrix3D: Matrix3D, precision?: number): boolean;
        /**
         * 以字符串返回矩阵的值
         */
        toString(): string;
    }
}
declare module feng3d {
    /**
     * 3d面
     */
    class Plane3D {
        /**
         * 平面A系数
         * <p>同样也是面法线x尺寸</p>
         */
        a: number;
        /**
         * 平面B系数
         * <p>同样也是面法线y尺寸</p>
         */
        b: number;
        /**
         * 平面C系数
         * <p>同样也是面法线z尺寸</p>
         */
        c: number;
        /**
         * 平面D系数
         * <p>同样也是（0，0）点到平面的距离的负值</p>
         */
        d: number;
        /**
         * 对齐类型
         */
        _alignment: number;
        /**
         * 普通平面
         * <p>不与对称轴平行或垂直</p>
         */
        static ALIGN_ANY: number;
        /**
         * XY方向平面
         * <p>法线与Z轴平行</p>
         */
        static ALIGN_XY_AXIS: number;
        /**
         * YZ方向平面
         * <p>法线与X轴平行</p>
         */
        static ALIGN_YZ_AXIS: number;
        /**
         * XZ方向平面
         * <p>法线与Y轴平行</p>
         */
        static ALIGN_XZ_AXIS: number;
        /**
         * 创建一个平面
         * @param a		A系数
         * @param b		B系数
         * @param c		C系数
         * @param d		D系数
         */
        constructor(a?: number, b?: number, c?: number, d?: number);
        /**
         * 通过3顶点定义一个平面
         * @param p0		点0
         * @param p1		点1
         * @param p2		点2
         */
        fromPoints(p0: Vector3D, p1: Vector3D, p2: Vector3D): void;
        /**
         * 根据法线与点定义平面
         * @param normal		平面法线
         * @param point			平面上任意一点
         */
        fromNormalAndPoint(normal: Vector3D, point: Vector3D): void;
        /**
         * 标准化平面
         * @return		标准化后的平面
         */
        normalize(): Plane3D;
        /**
         * 计算点与平面的距离
         * @param p		点
         * @returns		距离
         */
        distance(p: Vector3D): number;
        /**
         * 顶点分类
         * <p>把顶点分为后面、前面、相交三类</p>
         * @param p			顶点
         * @return			顶点类型 PlaneClassification.BACK,PlaneClassification.FRONT,PlaneClassification.INTERSECT
         * @see				feng3d.core.math.PlaneClassification
         */
        classifyPoint(p: Vector3D, epsilon?: number): number;
        /**
         * 输出字符串
         */
        toString(): string;
    }
}
declare module feng3d {
    /**
     * 点与面的相对位置
     * @author feng
     */
    class PlaneClassification {
        /**
         * 在平面后面
         * <p>等价于平面内</p>
         * @see #IN
         */
        static BACK: number;
        /**
         * 在平面前面
         * <p>等价于平面外</p>
         * @see #OUT
         */
        static FRONT: number;
        /**
         * 在平面内
         * <p>等价于在平面后</p>
         * @see #BACK
         */
        static IN: number;
        /**
         * 在平面外
         * <p>等价于平面前面</p>
         * @see #FRONT
         */
        static OUT: number;
        /**
         * 与平面相交
         */
        static INTERSECT: number;
    }
}
declare module feng3d {
    /**
     * 渲染模式
     * @author feng 2016-09-28
     */
    enum RenderMode {
        /**
         * 点渲染
         */
        POINTS,
        LINE_LOOP,
        LINE_STRIP,
        LINES,
        TRIANGLES,
        TRIANGLE_STRIP,
        TRIANGLE_FAN,
    }
}
declare module feng3d {
    /**
     * 渲染数据拥有者
     * @author feng 2016-6-7
     */
    class RenderDataHolder extends Component {
        private indexBuffer;
        private programBuffer;
        private attributes;
        private uniforms;
        private shaderParams;
        /**
         * 创建Context3D数据缓冲
         */
        constructor();
        /**
         * 映射索引缓冲
         */
        mapIndexBuffer(value: Uint16Array): void;
        /**
         * 映射属性缓冲
         */
        mapAttributeBuffer(name: string, value: Float32Array, stride: number): void;
        /**
         * 映射程序缓冲
         * @param vertexCode        顶点渲染程序代码
         * @param fragmentCode      片段渲染程序代码
         */
        mapProgram(vertexCode: string, fragmentCode: string): void;
        /**
         * 映射常量
         */
        mapUniform(name: string, data: Matrix3D | Vec4): void;
        /**
         * 映射渲染参数
         */
        mapShaderParam(shaderParamID: ShaderParamID, param: any): void;
        /**
         * 处理获取索引缓冲事件
         */
        private onGetIndexBuffer(event);
        /**
         * 处理获取属性缓冲事件
         */
        private onGetAttributeBuffer(event);
        /**
         * 处理获取缓冲事件
         */
        private onGetUniformBuffer(event);
        /**
         * 处理获取缓冲事件
         */
        private onGetProgramBuffer(event);
        /**
         * 处理获取缓冲事件
         */
        private onGetShaderParam(event);
    }
}
declare module feng3d {
    /**
     * 3D对象渲染数据
     * @author feng 2016-06-20
     */
    class RenderData {
        object3D: Object3D;
        /**
         * 顶点索引缓冲
         */
        indexBuffer: IndexRenderData;
        /**
         * 渲染程序缓存
         */
        programBuffer: ProgramRenderData;
        /**
         * 属性数据列表
         */
        attributes: {
            [name: string]: {
                type: string;
                buffer?: AttributeRenderData;
            };
        };
        /**
         * 常量数据列表
         */
        uniforms: {
            [name: string]: {
                type: string;
                buffer?: UniformRenderData;
            };
        };
        /**
         * 渲染模式
         */
        renderMode: RenderMode;
        /**
         * 渲染数据字典
         */
        private static renderDataMap;
        /**
         * 获取3D对象渲染数据实例
         */
        static getInstance(object3D: Object3D): RenderData;
        private renderBufferMap;
        getRenderBuffer(context3D: WebGLRenderingContext): RenderBuffer;
        /**
         * 构建3D对象渲染数据
         */
        constructor(object3D: Object3D);
        /**
         * 准备数据
         */
        prepare(): void;
        /**
         * 准备程序
         */
        private prepareProgram();
        /**
         * 准备索引
         */
        private prepareIndex();
        /**
         * 准备属性
         */
        private prepareAttributes();
        /**
         * 准备常量
         */
        private prepareUniforms();
        /**
         * 准备常量
         */
        private prepareShaderParams();
    }
}
declare module feng3d {
    /**
     * 渲染缓冲
     * @author feng 2016-06-20
     */
    class RenderBuffer {
        /**
         * 3D上下文
         */
        private context3D;
        /**
         * 渲染数据
         */
        private renderData;
        /**
         * 构建渲染缓冲
         * @param context3D     3D环境
         * @param renderData    渲染数据
         */
        constructor(context3D: WebGLRenderingContext, renderData: RenderData);
        /**
         * 激活缓冲
         */
        active(): void;
        /**
         * 激活程序
         */
        activeProgram(): void;
        /**
         * 激活属性
         */
        private activeAttributes();
        /**
         * 激活常量
         */
        private activeUniforms();
        /**
         */
        private draw();
    }
}
declare module feng3d {
    /**
     * 渲染程序数据
     * @author feng 2016-05-09
     */
    class ProgramRenderData {
        /**
         * 顶点渲染程序代码
         */
        vertexCode: string;
        /**
         * 片段渲染程序代码
         */
        fragmentCode: string;
        /**
        * 获取程序常量列表
        */
        getUniforms(): {
            [name: string]: {
                type: string;
            };
        };
    }
    /**
     * 索引渲染数据
     */
    class IndexRenderData {
        /**
         * 索引数据
         */
        indices: Uint16Array;
    }
    /**
     * 属性渲染数据
     * @author feng 2014-8-14
     */
    class AttributeRenderData {
        /**
         * 属性名称
         */
        name: string;
        /**
         * 属性数据
         */
        data: Float32Array;
        /**
         * 属性数据长度
         */
        size: number;
    }
    /**
     * 常量渲染数据
     */
    class UniformRenderData {
        /**
         * 常量名称
         */
        name: string;
        /**
         * 数据
         */
        data: Matrix3D | Vec4;
    }
    /**
     * 渲染常量向量类型
     */
    interface Vec4 {
        x: number;
        y: number;
        z: number;
        w: number;
    }
}
declare module feng3d {
    /**
     * 渲染代码工具
     * @author feng 2016-06-22
     */
    class ShaderCodeUtils {
        /**
         * 获取程序属性列表
         */
        static getAttributes(code: string): {
            [name: string]: {
                type: string;
            };
        };
        /**
         * 获取程序常量列表
         */
        static getUniforms(code: string): {
            [name: string]: {
                type: string;
            };
        };
        /**
         * 获取属性gpu地址
         */
        static getAttribLocations(context3D: WebGLRenderingContext, vertexCode: string, fragmentCode: string): {
            [name: string]: {
                type: string;
                location?: number;
            };
        };
    }
}
declare module feng3d {
    /**
     * 对象池
     * @author feng 2016-04-26
     */
    class RenderBufferPool {
        /**
         * @param context3D     3D环境
         */
        private getContext3DBufferPool(context3D);
        /**
         * 获取渲染程序
         * @param context3D     3D环境
         * @param vertexCode    顶点着色器代码
         * @param fragmentCode  片段着色器代码
         * @return  渲染程序
         */
        getWebGLProgram(context3D: WebGLRenderingContext, vertexCode: string, fragmentCode: string): WebGLProgram;
        /**
         * 获取顶点渲染程序
         * @param context3D         3D环境
         * @param vertexCode        顶点渲染代码
         * @return                  顶点渲染程序
         */
        getVertexShader(context3D: WebGLRenderingContext, vertexCode: string): WebGLShader;
        /**
         * 获取顶点渲染程序
         * @param context3D         3D环境
         * @param fragmentCode      顶点渲染代码
         * @return                  顶点渲染程序
         */
        getFragmentShader(context3D: WebGLRenderingContext, fragmentCode: string): WebGLShader;
        /**
         * 获取索引缓冲
         */
        getIndexBuffer(context3D: WebGLRenderingContext, indices: Uint16Array): WebGLBuffer;
        /**
         * 获取顶点属性缓冲
         * @param data  数据
         */
        getVABuffer(context3D: WebGLRenderingContext, data: Float32Array): WebGLBuffer;
        /**
         * 3D环境缓冲池
         */
        private context3DBufferPools;
    }
    /**
     * 3D环境对象池
     */
    var context3DPool: RenderBufferPool;
}
declare module feng3d {
    /**
     * Context3D缓冲事件
     * @author feng 2016-05-26
     */
    class Context3DBufferEvent extends Event {
        /**
         * 获取AttributeBuffer
         */
        static GET_ATTRIBUTEBUFFER: string;
        /**
         * 获取IndexBuffer
         */
        static GET_INDEXBUFFER: string;
        /**
         * 获取ProgramBuffer
         */
        static GET_PROGRAMBUFFER: string;
        /**
         * 获取UniformBuffer
         */
        static GET_UNIFORMBUFFER: string;
        /**
         * 获取UniformBuffer
         */
        static GET_SHADERPARAM: string;
    }
    /**
     * 获取AttributeBuffer事件数据
     */
    class GetAttributeBufferEventData {
        /**
         * 属性名称
         */
        name: string;
        /**
         * 属性缓冲
         */
        buffer: AttributeRenderData;
    }
    /**
     * 获取IndexBuffer事件数据
     */
    class GetIndexBufferEventData {
        /**
         * 索引缓冲
         */
        buffer: IndexRenderData;
    }
    /**
     * 获取ProgramBuffer事件数据
     */
    class GetProgramBufferEventData {
        /**
         * 渲染程序缓存
         */
        buffer: ProgramRenderData;
    }
    /**
     * 获取UniformBuffer事件数据
     */
    class GetUniformBufferEventData {
        /**
         * 常量名称
         */
        name: string;
        /**
         * 常量缓存
         */
        buffer: UniformRenderData;
    }
    /**
     * 获取ShaderParam事件数据
     */
    class GetShaderParamEventData {
        /**
         * 参数名称
         */
        shaderParamID: ShaderParamID;
        /**
         * 参数数据
         */
        data: any;
    }
}
declare module feng3d {
    /**
     * 渲染数据编号
     * @author feng 2016-06-20
     */
    class RenderDataID {
        /**
         * 顶点索引
         */
        static index: string;
        /**
         * 模型矩阵
         */
        static uMVMatrix: string;
        /**
         * 投影矩阵
         */
        static uPMatrix: string;
        static diffuseInput_fc_vector: string;
    }
}
declare module feng3d {
    /**
     * 渲染参数编号
     * @author feng 2016-10-15
     */
    enum ShaderParamID {
        /**
         * 渲染模式
         */
        renderMode = 0,
    }
}
declare module feng3d {
    /**
     * 渲染器
     * @author feng 2016-05-01
     */
    class Renderer {
        private context3D;
        private shaderProgram;
        private scene;
        private camera;
        /**
         * 构建渲染器
         * @param context3D    webgl渲染上下文
         * @param scene 场景
         * @param camera 摄像机对象
         */
        constructor(context3D: WebGLRenderingContext, scene: Scene3D, camera: Camera3D);
        /**
         * 初始化GL
         */
        private initGL();
        /**
         * 渲染
         */
        render(): void;
        /**
         * 绘制3D对象
         */
        private drawObject3D(object3D);
    }
}
declare module feng3d {
    /**
     * 3D对象
     * @author feng 2016-04-26
     */
    class Object3D extends Component {
        /**
         * 3D空间
         */
        space3D: Space3D;
        /**
         * 容器
         */
        private readonly container3D;
        /**
         * 场景空间
         */
        private readonly sceneSpace3D;
        /**
         * 构建3D对象
         */
        constructor(name?: string, conponents?: Component[]);
        /********************
         *
         * Container3D 组件中方法
         *
         *******************/
        /**
         * 父对象
         */
        readonly parent: Object3D;
        /**
         * 添加子对象
         * @param child		子对象
         * @return			新增的子对象
         */
        addChild(child: Object3D): void;
        /**
         * 添加子对象到指定位置
         * @param   child   子对象
         * @param   index   添加到的位置
         */
        addChildAt(child: Object3D, index: number): void;
        /**
         * 移除子对象
         * @param   child   子对象
         * @return			被移除子对象索引
         */
        removeChild(child: Object3D): number;
        /**
         * 获取子对象索引
         * @param   child   子对象
         * @return  子对象位置
         */
        getChildIndex(child: Object3D): number;
        /**
         * 移出指定索引的子对象
         * @param childIndex	子对象索引
         * @return				被移除对象
         */
        removeChildAt(childIndex: number): Object3D;
        /**
         * 获取子对象
         * @param index         子对象索引
         * @return              指定索引的子对象
         */
        getChildAt(index: number): Object3D;
        /**
         * 获取子对象数量
         */
        readonly numChildren: number;
        /*********************
         *
         *********************/
        /**
         * 场景空间变换矩阵
         */
        readonly sceneTransform3D: Matrix3D;
        /**
         * 通知场景变换改变
         */
        notifySceneTransformChange(): void;
        /*********************
         *
         *********************/
        /**
         * 创建
         */
        static createPrimitive(type: PrimitiveType): Object3D;
    }
}
declare module feng3d {
    /**
     * 3D视图
     * @author feng 2016-05-01
     */
    class View3D {
        private context3d;
        private _camera;
        private _scene;
        private renderer;
        private canvas;
        /**
         * 绘制宽度
         */
        private renderWidth;
        /**
         * 绘制高度
         */
        private renderHeight;
        /**
         * 构建3D视图
         * @param canvas    画布
         * @param scene     3D场景
         * @param camera    摄像机
         */
        constructor(canvas: any, scene?: Scene3D, camera?: Camera3D);
        /** 3d场景 */
        scene: Scene3D;
        /**
         * 绘制场景
         */
        private drawScene();
        /**
         * 重置尺寸
         */
        private resize();
        /**
         * 摄像机
         */
        camera: Camera3D;
    }
}
declare module feng3d {
    /**
     * 3D对象组件
     * @author feng 2016-09-02
     */
    class Object3DComponent extends Component {
        /**
         * 父组件
         */
        protected _parentComponent: Object3D;
        /**
         * 所属对象
         */
        readonly object3D: Object3D;
        /**
         * 构建3D对象组件
         */
        constructor();
    }
}
declare module feng3d {
    /**
     * 3D空间
     * @author feng 2016-04-26
     */
    class Space3D extends Object3DComponent {
        /**
         * 构建3D空间
         * @param x X坐标
         * @param y Y坐标
         * @param z Z坐标
         * @param rx X旋转
         * @param ry Y旋转
         * @param rz Z旋转
         * @param sx X缩放
         * @param sy Y缩放
         * @param sz Z缩放
         */
        constructor(x?: number, y?: number, z?: number, rx?: number, ry?: number, rz?: number, sx?: number, sy?: number, sz?: number);
        /**
         * X坐标
         */
        x: number;
        /**
         * Y坐标
         */
        y: number;
        /**
         * Z坐标
         */
        z: number;
        /**
         * X旋转
         */
        rx: number;
        /**
         * Y旋转
         */
        ry: number;
        /**
         * Z旋转
         */
        rz: number;
        /**
         * X缩放
         */
        sx: number;
        /**
         * Y缩放
         */
        sy: number;
        /**
         * Z缩放
         */
        sz: number;
        /**
         * 空间变换矩阵
         */
        transform3D: Matrix3D;
        /**
         * 更新变换矩阵
         */
        private updateTransform3D();
        /**
         * 使变换矩阵无效
         */
        protected invalidateTransform3D(): void;
        readonly inverseTransform: Matrix3D;
        /**
         * 发出状态改变消息
         */
        private notifyTransformChanged();
        lookAt(target: Vector3D, upAxis?: Vector3D): void;
        private _x;
        private _y;
        private _z;
        private _rx;
        private _ry;
        private _rz;
        private _sx;
        private _sy;
        private _sz;
        private _transform3D;
        private _transform3DDirty;
        private _inverseTransform;
        private _inverseTransformDirty;
    }
    /**
     * 3D对象事件(3D状态发生改变、位置、旋转、缩放)
     * @author feng 2014-3-31
     */
    class Space3DEvent extends Event {
        /**
         * 平移
         */
        static POSITION_CHANGED: string;
        /**
         * 旋转
         */
        static ROTATION_CHANGED: string;
        /**
         * 缩放
         */
        static SCALE_CHANGED: string;
        /**
         * 变换
         */
        static TRANSFORM_CHANGED: string;
        /**
         * 变换已更新
         */
        static TRANSFORM_UPDATED: string;
        /**
         * 发出事件的3D元素
         */
        data: Space3D;
    }
}
declare module feng3d {
    /**
     * 3D容器组件
     * @author feng 2016-04-26
     */
    class Container3D extends Object3DComponent {
        /**
         * 父对象
         */
        readonly parent: Object3D;
        /**
         * 构建3D容器组件
         */
        constructor();
        /**
         * 添加子对象
         * @param child		子对象
         * @return			新增的子对象
         */
        addChild(child: Object3D): void;
        /**
         * 添加子对象到指定位置
         * @param   child   子对象
         * @param   index   添加到的位置
         */
        addChildAt(child: Object3D, index: number): void;
        /**
         * 移除子对象
         * @param   child   子对象
         * @return			被移除子对象索引
         */
        removeChild(child: Object3D): number;
        /**
         * 获取子对象索引
         * @param   child   子对象
         * @return  子对象位置
         */
        getChildIndex(child: Object3D): number;
        /**
         * 移出指定索引的子对象
         * @param childIndex	子对象索引
         * @return				被移除对象
         */
        removeChildAt(childIndex: number): Object3D;
        /**
         * 获取子对象
         * @param index         子对象索引
         * @return              指定索引的子对象
         */
        getChildAt(index: number): Object3D;
        /**
         * 获取子对象数量
         */
        readonly numChildren: number;
        /******************************************************************************************************************************
         * @protected
         ******************************************************************************************************************************/
        /**
         * 处理被添加组件事件
         */
        protected onBeAddedComponent(event: ComponentEvent): void;
        /**
         * 处理被移除组件事件
         */
        protected onBeRemovedComponent(event: ComponentEvent): void;
        /******************************************************************************************************************************
         * @private
         ******************************************************************************************************************************/
        /**
         * 父对象
         */
        private _parent;
        /**
         * 子对象列表
         */
        private children;
        /**
         * 处理添加子对象事件
         */
        private onAddedContainer3D(event);
        /**
         * 处理删除子对象事件
         */
        private onRemovedContainer3D(event);
    }
}
declare module feng3d {
    /**
     * 3D容器事件
     */
    class Container3DEvent extends Event {
        /**
         * 添加了子对象
         * data={parent: Object3D, child: Object3D}
         */
        static ADDED: string;
        /**
         * 删除了子对象
         * data={parent: Object3D, child: Object3D}
         */
        static REMOVED: string;
        /**
         * 事件数据
         */
        data: {
            parent: Object3D;
            child: Object3D;
        };
    }
}
declare module feng3d {
    /**
     * 3D对象场景空间
     * @author feng 2016-09-02
     */
    class SceneSpace3D extends Object3DComponent {
        /**
         * 构建3D对象场景空间
         */
        constructor();
        /**
         * 场景空间变换矩阵
         */
        readonly sceneTransform3D: Matrix3D;
        protected onBeAddedComponent(event: ComponentEvent): void;
        /**
         * 使变换矩阵失效，场景变换矩阵也将失效
         */
        protected onTransformChanged(event: Space3DEvent): void;
        /**
         * 通知场景变换改变
         */
        notifySceneTransformChange(): void;
        /**
         * 场景变化失效
         */
        protected invalidateSceneTransform(): void;
        /**
         * 相对场景空间
         */
        private sceneSpace3D;
        /**
         * 场景空间是否变脏
         */
        private sceneSpace3DDirty;
        /**
         * 更新场景空间
         */
        private updateSceneSpace3D();
    }
    /**
     * 3D对象事件(3D状态发生改变、位置、旋转、缩放)
     * @author feng 2014-3-31
     */
    class SceneSpace3DEvent extends Event {
        /**
         * 场景变换矩阵发生变化
         */
        static SCENETRANSFORM_CHANGED: string;
        /**
         * 发出事件的3D元素
         */
        data: SceneSpace3D;
    }
}
declare module feng3d {
    /**
     * 3D场景节点
     */
    class Scene3DNode extends EventDispatcher {
        /**
         * 父节点
         */
        parent: Scene3DNode;
        /**
         * 子节点列表
         */
        children: Scene3DNode[];
        /**
         * 3D对象
         */
        object3D: Object3D;
        /**
         * 构建3D场景节点
         * @param object3D 3D对象
         * @param parent 父节点
         */
        constructor(object3D: Object3D, parent: Scene3DNode);
        /**
         * 节点名称
         */
        name: string;
        /**
         * 添加3D对象生成节点
         */
        addObject3D(object3D: Object3D): this;
        /**
         * 移除3D对象节点
         */
        removeObject(object3D: Object3D): this;
        /**
         * 根据名称深度查找节点
         * @param name 节点名称
         */
        find(name: string): Scene3DNode;
        /**
         * 是否可渲染
         */
        readonly renderable: boolean;
        /**
         * 获取可渲染对象列表
         */
        getRenderables(renderables?: Object3D[]): Object3D[];
    }
}
declare module feng3d {
    /**
     * 3D场景
     * @author feng 2016-05-01
     */
    class Scene3D extends Object3D {
        private _renderables;
        /**
         * 构造3D场景
         */
        constructor();
        /**
         * 处理添加对象事件
         */
        private onAdded(event);
        /**
         * 处理添加对象事件
         */
        private onRemoved(event);
        /**
        * 获取可渲染对象列表
        */
        getRenderables(): Object3D[];
    }
}
declare module feng3d {
    /**
     * 3D场景事件
     * author feng 2016-05-01
     */
    class Scene3DEvent extends Event {
        /**
         * 添加3D场景节点
         */
        static ADDED: string;
        /**
         * 删除3D场景节点
         */
        static REMOVED: string;
        /**
         * 数据
         */
        data: Scene3DNode;
        /**
         * 构建3D场景事件
         * @param type 事件的类型，可以作为 Event.type 访问。
         * @param data 携带数据
         * @param bubbles 确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         */
        constructor(type: string, data?: Scene3DNode, bubbles?: boolean);
    }
}
declare module feng3d {
    /**
     * opengl顶点属性名称
     */
    class GLAttribute {
        /**
         * 坐标
         */
        static position: string;
        /**
         * 法线
         */
        static normal: string;
        /**
         * 切线
         */
        static tangent: string;
        /**
         * uv（纹理坐标）
         */
        static uv: string;
    }
}
declare module feng3d {
    /**
     * 几何体
     * @author feng 2016-04-28
     */
    class Geometry extends RenderDataHolder {
        private _vaIdList;
        /** 顶点属性数据步长字典 */
        private strideObj;
        /** 顶点属性数据字典 */
        private vaDataObj;
        private _indices;
        /**
         * 创建一个几何体
         */
        constructor();
        /**
         * 索引数据
         */
        /**
         * 更新顶点索引数据
         */
        indices: Uint16Array;
        /**
         * 获取顶点属性步长(1-4)
         * @param vaId          顶点属性编号
         * @return 顶点属性步长
         */
        getVAStride(vaId: string): number;
        /**
         * 设置顶点属性数据
         * @param vaId          顶点属性编号
         * @param data          顶点属性数据
         * @param stride        顶点数据步长
         */
        setVAData(vaId: string, data: Float32Array, stride: number): void;
        /**
         * 获取顶点属性数据
         * @param vaId 数据类型编号
         * @return 顶点属性数据
         */
        getVAData(vaId: string): Float32Array;
        /**
         * 顶点属性编号列表
         */
        readonly vaIdList: string[];
    }
}
declare module feng3d {
    /**
     * 几何体事件
     * @author feng 2015-12-8
     */
    class GeometryEvent extends Event {
        /**
         * 获取几何体顶点数据
         */
        static GET_VA_DATA: string;
        /**
         * 改变几何体顶点数据事件
         */
        static CHANGED_VA_DATA: string;
        /**
         * 改变顶点索引数据事件
         */
        static CHANGED_INDEX_DATA: string;
        /**
         * 事件目标
         */
        target: Geometry;
        /**
         * 构建几何体事件
         */
        constructor(type: string, data?: any, bubbles?: boolean);
    }
}
declare module feng3d {
    /**
     * 几何体组件
     */
    class GeometryComponent extends Component {
        /**
         * 父组件
         */
        protected _parentComponent: Geometry;
        /**
         * 所属对象
         */
        readonly geometry: Geometry;
        /**
         * 构建几何体组件
         */
        constructor();
    }
}
declare module feng3d {
    /**
     * 线段组件
     * @author feng 2016-10-16
     */
    class SegmentGeometry extends GeometryComponent {
        /**
         * 几何体是否变脏
         */
        private geometryDirty;
        private _segments;
        /**
         * 添加线段
         * @param segment		线段数据
         */
        addSegment(segment: Segment, needUpdateGeometry?: boolean): void;
        /**
         * 更新几何体
         */
        updateGeometry(): void;
        /**
         * 获取线段数据
         * @param index 		线段索引
         * @return				线段数据
         */
        getSegment(index: number): Segment;
        /**
         * 移除所有线段
         */
        removeAllSegments(): void;
        /**
         * 线段列表
         */
        readonly segments: Segment[];
    }
    /**
     * 线段
     * @author feng 2016-10-16
     */
    class Segment {
        thickness: number;
        start: Vector3D;
        end: Vector3D;
        startColor: number;
        endColor: number;
        /**
         * 创建线段
         * @param start 起点坐标
         * @param end 终点坐标
         * @param colorStart 起点颜色
         * @param colorEnd 终点颜色
         * @param thickness 线段厚度
         */
        constructor(start: Vector3D, end: Vector3D, colorStart?: number, colorEnd?: number, thickness?: number);
        /**
         * 坐标数据
         */
        readonly positionData: number[];
    }
}
declare module feng3d {
    /**
     * 镜头事件
     * @author feng 2014-10-14
     */
    class LensEvent extends Event {
        static MATRIX_CHANGED: string;
        /**
         * 镜头
         */
        data: LensBase;
        /**
         * 创建一个镜头事件。
         * @param type      事件的类型
         * @param lens      镜头
         * @param bubbles   确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         */
        constructor(type: string, lens?: LensBase, bubbles?: boolean);
    }
}
declare module feng3d {
    /**
     * 坐标系统类型
     * @author feng 2014-10-14
     */
    class CoordinateSystem {
        /**
         * 默认坐标系统，左手坐标系统
         */
        static LEFT_HANDED: number;
        /**
         * 右手坐标系统
         */
        static RIGHT_HANDED: number;
    }
}
declare module feng3d {
    /**
     * 摄像机镜头
     * @author feng 2014-10-14
     */
    abstract class LensBase extends Component {
        protected _matrix: Matrix3D;
        protected _scissorRect: Rectangle;
        protected _viewPort: Rectangle;
        protected _near: number;
        protected _far: number;
        protected _aspectRatio: number;
        protected _matrixInvalid: boolean;
        private _unprojection;
        private _unprojectionInvalid;
        /**
         * 创建一个摄像机镜头
         */
        constructor();
        /**
         * 投影矩阵
         */
        matrix: Matrix3D;
        /**
         * 最近距离
         */
        near: number;
        /**
         * 最远距离
         */
        far: number;
        /**
         * 视窗缩放比例(width/height)，在渲染器中设置
         */
        aspectRatio: number;
        /**
         * 场景坐标投影到屏幕坐标
         * @param point3d 场景坐标
         * @param v 屏幕坐标（输出）
         * @return 屏幕坐标
         */
        project(point3d: Vector3D, v?: Vector3D): Vector3D;
        /**
         * 投影逆矩阵
         */
        readonly unprojectionMatrix: Matrix3D;
        /**
         * 屏幕坐标投影到摄像机空间坐标
         * @param nX 屏幕坐标X -1（左） -> 1（右）
         * @param nY 屏幕坐标Y -1（上） -> 1（下）
         * @param sZ 到屏幕的距离
         * @param v 场景坐标（输出）
         * @return 场景坐标
         */
        abstract unproject(nX: number, nY: number, sZ: number, v: Vector3D): Vector3D;
        /**
         * 投影矩阵失效
         */
        protected invalidateMatrix(): void;
        /**
         * 更新投影矩阵
         */
        protected abstract updateMatrix(): any;
    }
}
declare module feng3d {
    /**
     * 透视摄像机镜头
     * @author feng 2014-10-14
     */
    class PerspectiveLens extends LensBase {
        private _fieldOfView;
        private _focalLength;
        private _focalLengthInv;
        private _yMax;
        private _xMax;
        private _coordinateSystem;
        /**
         * 创建一个透视摄像机镜头
         * @param fieldOfView 视野
         * @param coordinateSystem 坐标系统类型
         */
        constructor(fieldOfView?: number, coordinateSystem?: number);
        /**
         * 视野
         */
        fieldOfView: number;
        /**
         * 焦距
         */
        focalLength: number;
        unproject(nX: number, nY: number, sZ: number, v?: Vector3D): Vector3D;
        /**
         * 坐标系类型
         */
        coordinateSystem: number;
        /**
         * 更新投影矩阵
         */
        protected updateMatrix(): void;
    }
}
declare module feng3d {
    /**
     * 摄像机
     * @author feng 2016-08-16
     */
    class Camera3D extends Object3D {
        private _viewProjection;
        private _viewProjectionDirty;
        private _lens;
        /**
         * 创建一个摄像机
         * @param lens 摄像机镜头
         */
        constructor(lens?: LensBase);
        /**
         * 场景投影矩阵，世界空间转投影空间
         */
        readonly viewProjection: Matrix3D;
        /**
         * 处理镜头变化事件
         */
        private onLensMatrixChanged(event);
        private onSpaceTransformChanged(event);
    }
}
declare module feng3d {
    /**
     * 3D基元类型
     * @author feng 2016-05-01
     */
    enum PrimitiveType {
        /**
         * 平面
         */
        Plane = 0,
        /**
         * 立方体
         */
        Cube = 1,
        /**
         * 球体
         */
        Sphere = 2,
        /**
         * 胶囊
         */
        Capsule = 3,
        /**
         * 圆柱体
         */
        Cylinder = 4,
    }
}
declare module feng3d.primitives {
    /**
     * 创建平面几何体
     * @param width 宽度
     * @param height 高度
     * @param segmentsW 横向分割数
     * @param segmentsH 纵向分割数
     * @param yUp 正面朝向 true:Y+ false:Z+
     * @param elements 顶点元素列表
     */
    function createPlane(width?: number, height?: number, segmentsW?: number, segmentsH?: number, yUp?: boolean, elements?: string[]): Geometry;
}
declare module feng3d.primitives {
    /**
     * 创建立方几何体
     * @param   width           宽度
     * @param   height          高度
     * @param   depth           深度
     * @param   segmentsW       宽度方向分割
     * @param   segmentsH       高度方向分割
     * @param   segmentsD       深度方向分割
     * @param   tile6           是否为6块贴图
     * @param   elements        需要生成数据的属性
     */
    function createCube(width?: number, height?: number, depth?: number, segmentsW?: number, segmentsH?: number, segmentsD?: number, tile6?: boolean, elements?: string[]): Geometry;
}
declare module feng3d.primitives {
    /**
     * 创建球形几何体
     * @param radius 球体半径
     * @param segmentsW 横向分割数
     * @param segmentsH 纵向分割数
     * @param yUp 正面朝向 true:Y+ false:Z+
     * @param elements 顶点元素列表
     */
    function createSphere(radius?: number, segmentsW?: number, segmentsH?: number, yUp?: boolean, elements?: string[]): Geometry;
}
declare module feng3d.primitives {
    /**
     * 创建胶囊几何体
     * @param radius 胶囊体半径
     * @param height 胶囊体高度
     * @param segmentsW 横向分割数
     * @param segmentsH 纵向分割数
     * @param yUp 正面朝向 true:Y+ false:Z+
     * @param elements 顶点元素列表
     */
    function createCapsule(radius?: number, height?: number, segmentsW?: number, segmentsH?: number, yUp?: boolean, elements?: string[]): Geometry;
}
declare module feng3d.primitives {
    /**
     * 创建圆柱体
     */
    function createCylinder(topRadius?: number, bottomRadius?: number, height?: number, segmentsW?: number, segmentsH?: number, topClosed?: boolean, bottomClosed?: boolean, surfaceClosed?: boolean, yUp?: boolean, elements?: string[]): Geometry;
}
declare module feng3d {
    /**
     * 材质
     * @author feng 2016-05-02
     */
    class Material extends RenderDataHolder {
        vertexShaderStr: string;
        fragmentShaderStr: string;
        pass: MaterialPass;
        /**
        * 渲染模式
        */
        renderMode: RenderMode;
        /**
         * 构建材质
         */
        constructor();
    }
}
declare module feng3d {
    /**
     * 颜色材质
     * @author feng 2016-05-02
     */
    class ColorMaterial extends Material {
        vertexShaderStr: string;
        fragmentShaderStr: string;
        /**
         * 颜色
         */
        private _color;
        /**
         * 构建颜色材质
         * @param color 颜色
         * @param alpha 透明的
         */
        constructor(color?: Color);
        /**
         * 颜色
         */
        color: Color;
    }
}
declare module feng3d {
    /**
     * 线段材质
     * @author feng 2016-10-15
     */
    class SegmentMaterial extends Material {
        /**
        * 渲染模式
        */
        renderMode: RenderMode;
        /**
         * 构建颜色材质
         * @param color 颜色
         * @param alpha 透明的
         */
        constructor(color?: Color);
    }
}
declare module feng3d {
    /**
     * 材质通道
     */
    class MaterialPass {
    }
}
declare module feng3d {
    class ControllerBase {
        protected _targetObject: Object3D;
        /**
         * 控制器基类，用于动态调整3D对象的属性
         */
        constructor(targetObject: Object3D);
        /**
         * 手动应用更新到目标3D对象
         */
        update(interpolate?: boolean): void;
        targetObject: Object3D;
    }
}
declare module feng3d {
    class LookAtController extends ControllerBase {
        protected _lookAtPosition: Vector3D;
        protected _lookAtObject: Object3D;
        protected _origin: Vector3D;
        protected _upAxis: Vector3D;
        private _pos;
        constructor(targetObject?: Object3D, lookAtObject?: Object3D);
        upAxis: Vector3D;
        lookAtPosition: Vector3D;
        lookAtObject: Object3D;
        update(interpolate?: boolean): void;
    }
}
