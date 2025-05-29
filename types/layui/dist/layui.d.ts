// Type definitions for layui-src 2.9.26
// Project: https://github.com/layui/layui/releases/tag/v2.9.25
// Definitions by: javabitar <https://github.com/javabitar>
// Definitions by: sight <https://github.com/Sight-wcg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.7
/// <reference types="jquery" />
declare const layui: Layui;
declare const lay: Layui.LayStatic;
declare const layer: Layui.Layer;
/**
 * 动态加载等特殊场景设置 layui 目录
 * @since 2.6.6
 */
declare const LAYUI_GLOBAL: { dir: string };
interface Window {
  layui: Layui;
  lay: Layui.LayStatic;
  layer: Layui.Layer;
  /**
   * 动态加载等特殊场景设置 layui 目录
   * @since 2.6.6
   */
  LAYUI_GLOBAL: { dir: string };
}
// Layui.d.ts
interface Layui extends Layui.GlobalModules {
    // -----------------Static members of layui-------------------------------------
    $: JQueryStatic;
    /**
     * 版本号 
     */
    v: string;

    // -----------------The layui instance members-------------------------------------

    /**
     * 获得 UI 的一些配置及临时缓存信息
     */
    cache: Layui.CacheData;
    /**
     * 内置模块名和外置名称映射
     */
    modules: Layui.ModulesPathMap;
    /**
     * 对象是否为泛数组结构
     * @param obj 如 Array、NodeList、jQuery 对象等
     * @deprecated 已废弃，使用 {@link Layui.isArray|isArray}
     * @see https://layui.dev/docs/2/base.html#api
     * @since 2.6.8
     * @example
     * ```js
     * layui._isArray([1,6]); // true	
     * layui._isArray($('div')); // true
     * layui._isArray(document.querySelectorAll('div')); // true
     * ```
     */
    _isArray(obj: any): boolean;
    /**
     * 对象是否为泛数组结构
     * @param obj 如 Array、NodeList、jQuery 对象等
     * @see https://layui.dev/docs/2/base.html#api
     * @since 2.6.9
     * @example
     * ```js
     * layui._isArray([1,6]); // true	
     * layui._isArray($('div')); // true
     * layui._isArray(document.querySelectorAll('div')); // true
     * ```
     */
    isArray(obj: any): boolean;
    /**
     * 获取给定元素的数据类型
     * 常见类型字符: Function | Array | Date | RegExp | Object | Error | Symbol;
     * @param operand  参数
     * @deprecated 已废弃，使用 {@link Layui.typeof|typeof}
     * @see https://layui.dev/docs/2/base.html#api
     * @since 2.6.8
     * @example
     * ```js
     * layui._typeof([]); // array 
     * layui._typeof({}); // object 
     * layui._typeof(new Date()); // date
     * ```
     */
    _typeof(operand: any): string;
    /**
     * 获取给定元素的数据类型
     * 常见类型字符: Function | Array | Date | RegExp | Object | Error | Symbol;
     * @param operand 参数
     * @see https://layui.dev/docs/2/base.html#api
     * @since 2.6.9
     * @example
     * ```js
     * layui._typeof([]); // array 
     * layui._typeof({}); // object 
     * layui._typeof(new Date()); // date
     * ```
     */
    typeof(operand: any): string;
    /**
     * 动态加载 CSS文件（相对路径）
     * @param filename 文件名，相对路径 例如 `a.css`，`./a/a.css`
     * @param callback CSS 文件加载成功后的回调，若加载出现异常则不会调用
     * @param cssname 用于 id 标识，比如 `xx` 则生成 link 标签的 id 是 `layuicss-xx`，如果不传，则用文件名拼接，比如 layui.js 则 id 是 `layuicss-layuijs`
     */
    addcss(filename: string, callback: () => void, cssname?: string): any;
    /**
     * 动态加载 CSS文件（相对路径）
     * @param filename 文件名，相对路径 例如 `a.css`，`./a/a.css`
     * @param cssname 用于 id 标识，比如 `xx` 则生成 link 标签的 id 是 `layuicss-xx`，如果不传，则用文件名拼接，比如 layui.js 则 id 是 `layuicss-layuijs`
     */
    addcss(filename: string, cssname?: string): any;
    /**
     * 全局配置，设置并返回（layui 级别配置，影响 layui.xx 模块配置）
     * @param options 参数
     * @see https://layui.dev/docs/2/base.html#api
     */
    config(options?: Layui.GlobalConfigOptions): Layui;
    /**
     * 对 localStorage 的封装
     * @param tableName  key键，Storage 中的一个 key
     * @param settings 存储的json对象数据
     * @see https://layui.dev/docs/2/base.html#api
     * @example
     * ```js
     * // 【增】：向 test 表插入一个 nickname 字段，如果该表不存在，则自动建立。
     * layui.data('test', {
     *   key: 'nickname',
     *   value: '张三'
     * });
     * 
     * // 【删】：删除 test 表的 nickname 字段
     * layui.data('test', {
     *   key: 'nickname',
     *   remove: true
     * });
     * layui.data('test', null); // 删除 test 表
     * 
     * // 【改】：同【增】，会覆盖已经存储的数据
     * 
     * // 【查】：向 test 表读取全部的数据
     * var localTest = layui.data('test');
     * console.log(localTest.nickname); // 获得“张三”
     * ```
     */
    data(tableName: string, settings?: { key: string; value?: any; remove?: boolean } | null): any;
    /**
     * 对 sessionStorage 的封装
     * @param tableName  key键，Storage 中的一个 key
     * @param settings 存储的json对象数据
     * @see https://layui.dev/docs/2/base.html#api
     * @example
     * ```js
     * // 【增】：向 test 表插入一个 nickname 字段，如果该表不存在，则自动建立。
     * layui.sessionData('test', {
     *   key: 'nickname',
     *   value: '张三'
     * });
     * 
     * // 【删】：删除 test 表的 nickname 字段
     * layui.sessionData('test', {
     *   key: 'nickname',
     *   remove: true
     * });
     * layui.sessionData('test', null); // 删除 test 表
     * 
     * // 【改】：同【增】，会覆盖已经存储的数据
     * 
     * // 【查】：向 test 表读取全部的数据
     * var localTest = layui.sessionData('test');
     * console.log(localTest.nickname); // 获得“张三”
     * ```
     */
    sessionData(tableName: string, settings?: { key: string; value?: any; remove?: boolean } | null): any;
    /**
     * 扩展一个 layui 模块，挂载到 layui 上
     * @param mods 模块名，用于声明该模块所依赖的模块
     * @param callback 回调函数：通过回调中参数 export 来挂载模块到 layui
     * 模块加载完毕的回调函数，它返回一个 exports 参数，用于输出该模块的接口。
     * 其参数 exports 是一个函数，它接受两个参数，第 1 个参数为模块名，第 2 个参数为模块接口。
     */
    define(mods: string[] | string, callback: Layui.ExportsCallback): any;
    /**
     *  扩展一个 layui 模块，挂载到layui上
     * @param callback 回调函数：通过回调中参数 export 来挂载模块到 layui
     * 模块加载完毕的回调函数，它返回一个 exports 参数，用于输出该模块的接口。
     * 其参数 exports 是一个函数，它接受两个参数，第 1 个参数为模块名，第 2 个参数为模块接口。
     */
    define(callback: Layui.ExportsCallback): any;
    /**
     * 获取浏览器信息
     * @see https://layui.dev/docs/2/base.html#api
     */
    device<K extends PropertyKey>(key?: K): K extends string ? Layui.deviceReturn & Record<K, boolean | string | undefined> : Layui.deviceReturn;
    /**
     * 对象（Array、Object、DOM 对象等）遍历，可用于取代 for 语句
     * @param collection Array 对象
     * @param callback 回调函数，返回 true 停止遍历，和 jQUery.each 相反
     * @see https://layui.dev/docs/2/base.html#api
     */
    each<T>(collection: ArrayLike<T>, callback: (this: T, indexInArray: number, value: T) => any): Layui;
    each<T, K extends keyof T>(collection: T, callback: (this: T[K], propertyName: K, valueOfProperty: T[K]) => any): Layui;
    /**
     * 执行自定义模块事件，搭配 onevent 使用
     * @param modName 模块名称，比如form
     * @param events 事件，比如：select(filter)
     * @param params 回调参数，作为绑定的回调函数的参数
     * @param fn 回调函数
     * @see https://layui.dev/docs/2/base.html#api
     * @example
     * ```js
     * // 实例一：按照select后边括号内容filter来匹配，比如filter空或没有括号则可匹配到
     * layui.onevent("form", "select()", console.log);
     * layui.event("form","select()",[1,2,3]);
     * 
     * // 实例二：{*}可匹配全部filter
     * layui.onevent("form", "select(xx)", console.log)
     * layui.event("form","select({*})",[1,2,3]);
     * 
     * // 实例三：filter严格匹配
     * layui.onevent("form", "select(xx)", console.log);
     * layui.event("form","select(xx)",[1,2,3]);
     * ```
     */
    event(modName: string, events: string, params?: any, fn?: (...arg: any) => any): any;
    /**
     * 拓展一个模块别名，如：`layui.extend({test: '/res/js/test'})`
     * @param options
     * @see https://layui.dev/docs/2/base.html#api
     */
    extend(options: { [index: string]: string }): Layui;
    /**
     * 用于获取模块对应的 define 回调函数
     * @param modName 模块名
     * @see https://layui.dev/docs/2/base.html#api
     */
    factory(modName: string): (...args: any[]) => any;
    /**
     * 获得一个原始 DOM 节点的 style 属性值，例如：`layui.getStyle(document.body, 'font-size')`
     * @param node HTMLElement 元素
     * @param name 标签的 css 属性，例如 `font-size`
     * @see https://layui.dev/docs/2/base.html#api
     */
    getStyle(node: HTMLElement | null, name: string): any;
    /**
     * 向控制台打印一些异常信息，目前只返回了 error方法
     * @example
     * ```js
     * layui.hint().error('出错啦');
     * layui.hint().error('出错啦','warn');
     * ```
     */
    hint(): { error: (msg: any, type?: string | 'log' | 'info' | 'error' | 'warn' | 'debug') => void };
    /**
     * 图片预加载
     * @param url 图片地址直接作为 Image.src 值
     * @param callback 回调函数
     * @param error
     * @see https://layui.dev/docs/2/base.html#api
     */
    img(url: string, callback?: (img: HTMLImageElement) => void, error?: (e: Event | string) => void): any;
    /**
     * 动态加载外部 CSS 文件
     * @param href css 文件的地址(绝对or相对)直接作为 link 的 href，如果要加载当前目录 `/css/aa.css` 可使用 `layui.addcss("aa.css")`
     * @param callback css 文件加载成功后的回调，错误则不会调用
     * @param cssname 用于 id 标识，比如 `xx` 则生成 link 标签的 id 是 `layuicss-xx`，如果不传，则用文件名拼接，比如 layui.js 则 id 是 `layuicss-layuijs`
     * @see https://layui.dev/docs/2/base.html#api
     */
    link(href: string, callback: () => void, cssname?: string): any;
    /**
     * 动态加载外部 CSS 文件
     * @param href css地址
     * @param cssname 用于 id 标识，比如 `xx` 则生成 link 标签的 id 是 `layuicss-xx`，如果不传，则用文件名拼接，比如 layui.js 则 id 是 `layuicss-layuijs`
     * @see https://layui.dev/docs/2/base.html#api
     */
    link(href: string, cssname?: string): any;
    /**
     * 用于移除模块相关事件的监听
     * 如：`layui.off('select(filter)', 'form')`，那么 `form.on('select(filter)', callback)` 的事件将会被移除。
     * @param events  事件名
     * @param modName 模块名，比如 `layer,table,form` 等
     * @see https://layui.dev/docs/2/base.html#api
     */
    off(events: string, modName: string): Layui;
    /**
     * 禁止使用，请传入 callback
     * @param events 事件名
     * @param modName 模块名，比如 `layer,table,form` 等
     * @see https://layui.dev/docs/2/base.html#api
     */
    on(events: string, modName: string): Layui;
    /**
     *  触发指定模块的指定事件
     * @param events 事件名
     * @param modName 模块名,比如 layer,table,form等
     * @param callback 回调函数
     * @see https://layui.dev/docs/2/base.html#api
     * @example
     * ```js
     * layui.on("select(filter)","form",console.log);
     * ```
     */
    on(events: string, modName: string, callback: (obj: any) => any): (...arg: any) => any;
    /**
     * 禁止使用，请传入callback
     * 增加自定义模块事件。有兴趣的同学可以阅读 layui.js 源码以及 form 模块
     * @param modName 模块名,比如 layer,table,form 等
     * @param events 事件名
     * @see https://layui.dev/docs/2/base.html#api
     */
    onevent(modName: string, events: string): Layui;
    /**
     * 增加自定义模块事件。有兴趣的同学可以阅读 layui.js 源码以及 form 模块
     * @param modName 模块名,比如 layer,table,form等
     * @param events 事件名
     * @param callback 回调函数
     * @see https://layui.dev/docs/2/base.html#api
     */
    onevent(modName: string, events: string, callback: (obj: any) => any): (...arg: any) => any;
    /**
     * 获得 `location.hash` 路由结构
     * @param hash  默认 location.hash
     * @see https://layui.dev/docs/2/base.html#api
     */
    router(hash?: string): Layui.UrlHash;
    /**
     *  将数组中的对象按某个成员重新对该数组排序
     * @param obj 有比较key的对象数组
     * @param key 对象的一个属性，用于取值比较
     * @param desc true则启用降序， 默认false即升序
     * @see https://layui.dev/docs/2/base.html#api
     */
    sort(obj: any[], key: string, desc?: boolean): any;
    /**
     * 阻止事件冒泡
     * @param event 阻止的事件对象
     * @see https://layui.dev/docs/2/base.html#api
     */
    stope(event?: Event): void;
    /**
     *  用于将一段 URL 链接中的 `pathname、search、hash` 属性值进行对象化处理
     * @param href  http(s)地址，若不传，则自动读取当前页面的 url（即：location.href）
     * @see https://layui.dev/docs/2/base.html#api
     */
    url(href?: string): {
        hash: Layui.UrlHash;
        pathname: string[];
        search: object;
    };
    /**
     * 使用特定模块
     * @param mods 内置或自定模块名 (若模块不存在则抛 js 错误，callback 不会执行)
     * @param callback 回调函数
     * @param exports 数组，存储对 mods 解析后加载的模块
     */
    use<K extends keyof Layui.GlobalModules>(
        mods: K,
        callback: (this: Layui, module: Layui.GlobalModules[K]) => any,
        exports?: any[],
    ): { v: string };
    /**
     * 使用自定模块
     * @param mods 自定义模块，非内置模块
     * @param callback 回调函数
     * @param exports 数组，存储对 mods解析后加载的模块
     */
    use(mods: string, callback: (this: Layui, module: any) => any, exports?: any[]): { v: string };
    /**
     * 使用多模块
     * @param mods 内置或自定模块名 (若模块不存在则抛 js 错误，callback 不会执行)
     * @param callback 回调函数
     * - 不建议 callback 中设置参数因为没有 TS 约束，可用 layui.xx 调用具体模块
     * - 手动在 callback 回调中指定类型比如 util:layui.Util
     * @param exports 暴露出挂载的对象
     */
    use(mods: string[], callback: (this: Layui, ...module: any) => any, exports?: any[]): { v: string };
    /**
     * 使用特定模块
     * @param callback 回调函数，从 layui 2.6 开始，首个参数是 callback 函数，则表示引用所有内置模块到 `layui.xx`
     * @param exports 无任何用途，可不传
     */
    use(callback: (this: Layui, module: { config: Layui.PlainObject; time: number }) => any, exports?: any[]): { v: string };
    /**
     * 弃用某模块，以便重新扩展新的同名模块
     * @param modules 模块名称，支持数组，可同时弃用多个模块
     * @example layui.disuse('table')
     * @since 2.7.0
     */
    disuse(modules: Layui.MaybeArray<Layui.LiteralStringUnion<keyof Layui.GlobalModules>>): any;
    /**
     * 防抖
     * @param fn 
     * @param wait
     * @see https://layui.dev/docs/2/base.html#api
     * @since 2.8.3
     */
    debounce<T extends (...args: any[]) => any>(fn: T, wait: number): T;
    /**
     * 节流
     * @param fn
     * @param wait
     * @see https://layui.dev/docs/2/base.html#api
     * @since 2.8.3
     */
    throttle<T extends (...args: any[]) => any>(fn: T, wait: number): T;
    /**
     * @deprecated 2.8.0 已移除
     */
    global: Record<string, any>;
}

// misc.d.ts
declare namespace Layui {
    // utils
    type Primitive = null | undefined | string | number | boolean | symbol | bigint;
    type Fn = () => void;
    type AnyFn = (...args: any[]) => any;
    type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never;
    type MaybeArray<T> = T | T[];
    type MaybePromise<T> = T | Promise<T> | JQuery.Deferred<T>;
    type PlainObject<T = any> = {
        [key: string]: T;
    }
    type OmitIndexSignature<ObjectType> = {
        [KeyType in keyof ObjectType as {} extends Record<KeyType, unknown>
        ? never
        : KeyType]: ObjectType[KeyType];
    };
    type LiteralUnion<LiteralType, BaseType extends Primitive> = LiteralType | (BaseType & Record<never, never>);
    type LiteralStringUnion<T> = LiteralUnion<T, string>;


    type Selector = string;
    type ExportsCallback = (this: Layui, fn: (app: string, exports: object) => void) => void;

    /**
     * 全局属性
     */
    interface GlobalConfigOptions {
        /**
         * layui.js 所在目录（如果是 script 单独引入 layui.js，无需设定该参数）
         */
        dir?: string;
        /**
         * 一般用于更新模块缓存，默认不开启。设为 true 即让浏览器不缓存。也可以设为一个固定的值，如：201610
         */
        version?: boolean;
        /**
         * 用于开启调试模式，默认 false，如果设为 true，则 JS 模块的节点会保留在页面
         */
        debug?: boolean;
        /**
         * 设定扩展的 layui 模块的所在目录，一般用于外部模块扩展
         */
        base?: string;
    }

    /**
     * 缓存的所有数据
     */
    interface CacheData {
        base: string;
        builtin: {
            [T in keyof BuiltinModules]: string;
        };
        /**
         * 记录模块回调
         */
        callback: {
            [T in keyof GlobalModules]: AnyFn
        };
        /**
         * layui.js所在目录，如果是 script 单独引入 layui.js，无需设定该参数
         */
        dir: string;
        /**
         * 记录模块自定义事件
         */
        event: Record<string, Record<string, Array<AnyFn>>>;
        host: string;
        /**
         * 记录模块物理路径
         */
        modules: ModulesPathMap;
        /**
         * 记录模块加载状态
         */
        status: {
            [T in keyof GlobalModules]: boolean;
        };
        /**
         *  符合规范的模块请求最长等待秒数
         */
        timeout: number;
        version: string;
    }

    /**
     * 内置模块名和外置名称映射
     */
    type ModulesPathMap = { [T in keyof GlobalModules]: string };

    interface GlobalModules extends Omit<BuiltinModules, 'all'>{
        [index:string]: any;
    }
    interface BuiltinModules {
        all: any;
        carousel: Carousel;
        code: Code;
        colorpicker: ColorPicker;
        dropdown: Dropdown;
        element: Element;
        flow: Flow;
        form: Form;
        jquery: JQueryStatic;
        lay: LayStatic;
        laydate: Laydate;
        layedit: Layedit;
        layer: Layer;
        laypage: Laypage;
        laytpl: Laytpl;
        'layui.all': string;
        rate: Rate;
        slider: Slider;
        table: Table;
        treeTable: TreeTable;
        transfer: Transfer;
        tree: Tree;
        upload: Upload;
        util: Util;
    }

    /**
     * 地址中的参数和路径信息
     */
    interface UrlHash {
        hash: string;
        href?: string;
        path: string[];
        search: { [index: string]: string };
    }

    interface deviceReturn {
        /**
         * 当前浏览器所在的底层操作系统，如：Windows、Linux、Mac 等
         */
        os: string;
        /**
         * 当前浏览器是否为 ie6-11 的版本，如果不是 ie 浏览器，则为 false
         */
        ie: boolean;
        /**
         * 当前浏览器是否为微信 App 环境
         */
        weixin: boolean;
        /**
         * 当前浏览器是否为安卓系统环境
         */
        android: boolean;
        /**
         * 当前浏览器是否为 iOS 系统环境
         */
        ios: boolean;
        /**
         * 当前浏览器是否为移动设备环境
         * @since v2.5.7
         */
        mobile: boolean;
    }
}
// modules/carousel.d.ts
declare namespace Layui {
    interface CarouselOptions {
        /**
         * 指向容器选择器，如：elem: '#id'，也可以是 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 设定轮播容器宽度，支持像素和百分比
         * @default '600px'
         */
        width?: string;
        /**
         * 设定轮播容器高度，支持像素和百分比
         * @default '280px'
         */
        height?: string;
        /**
         * 是否全屏轮播
         * @default false
         */
        full?: boolean;
        /**
         * 轮播切换动画方式
         * - `default` 左右切换
         * - `updown` 上下切换
         * - `fade` 渐隐渐显切换
         * @default 'default'
         */
        anim?: 'default' | 'updown' | 'fade';
        /**
         * 是否自动切换
         * - `true` 自动滚动，鼠标移入会暂停、移出重新恢复
         * - `false` 不自动滚动
         * - `alway` 始终自动滚动，不受鼠标移入移出影响（2.7.0）
         * @default true
         */
        autoplay?: boolean | 'always';
        /**
         * 自动切换的时间间隔，单位：ms（毫秒），不能低于 800
         * @default 3000
         */
        interval?: number;
        /**
         * 初始开始的条目索引
         * @default 0
         */
        index?: number;
        /**
         * 切换箭头默认显示状态
         * - `hover` 悬停显示
         * - `always` 始终显示
         * - `none` 始终不显示
         * @default 'hover'
         */
        arrow?: 'hover' | 'always' | 'none';
        /**
         * 指示器位置
         * - `inside` 容器内部
         * - `outside` 容器外部
         * - `none` 不显示
         * 
         * 如果设定了 anim: 'updown'，则 indicator 参数的 outside 值无效
         * @default 'inside'
         */
        indicator?: 'insider' | 'outsider' | 'none';
        /**
         * 指示器的触发事件
         * @default 'click'
         */
        trigger?: string;
        /**
         * 轮播切换后的回调函数
         * @param obj 轮播条目对象
         * @since 2.7.0
         */
        change?(obj: CarouselItem): void;
    }

    interface CarouselItem {
        /**
         * 当前条目的索引
         */
        index: number;
        /**
         * 上一个条目的索引
         */
        prevIndex: number;
        /**
         * 当前条目的元素对象
         */
        item: JQuery;
    }

    interface CarouselClass {
        /**
         * 配置属性
         */
        config: Required<CarouselOptions>;
        /**
         * @internal
         */
        elemItem: JQuery;
        /**
         * @internal
         */
        timer: number;
        /**
         * @internal
         */
        haveSlider: boolean;
        /**
         * @internal
         */
        elemInd: JQuery;
        /**
         * 轮播渲染
         * @internal
         */
        render(): void;
        /**
         * 获取上一个等待条目的索引
         * @internal
         */
        prevIndex(): number;
        /**
         * 获取下一个等待条目的索引
         * @internal
         */
        nextIndex(): number;
        /**
         * 手动递增索引值
         * @internal
         */
        addIndex(num: number): void;
        /**
         * 手动递减索引值
         * @internal
         */
        subIndex(num: number): void;
        /**
         * 自动轮播
         * @internal
         */
        autoplay(): void;
        /**
         * 箭头
         * @internal
         */
        arrow(): void;
        /**
         * 指示器
         * @internal
         */
        indicator(): void;
        /**
         * 滑动切换 type ：sub 减，其他增
         * @internal
         */
        slide(type: string, num: number): void;
        /**
         * 事件处理
         * @internal
         */
        events(): void;
        /**
         * 重置轮播
         * @param options 基础参数
         */
        reload(options?: Partial<CarouselOptions>): void;
        /**
         * 切换到指定的索引
         * @param index 轮播下标，从 0 开始计算
         * @since 2.8.0
         */
        goto(index: number): void;
    }

    /**
     * 轮播
     * @see https://layui.dev/docs/2/carousel/
     */
    interface Carousel {
        config: Required<CarouselOptions>;
        /**
         * 渲染方法
         * @param options 基础参数
         * @return 实例对象，包含操作当前实例的相关成员方法
         */
        render(options: CarouselOptions): CarouselClass;
        /**
         * 绑定切换事件
         * @param event  事件
         * @param callback  回调
         */
        on(event: string, callback: (this: CarouselClass, obj: CarouselItem) => any): any;
        /**
         * 设置轮播组件的全局参数
         * @param options 基础参数
         */
        set(options: Partial<CarouselOptions>): this;
    }
}

// modules/code.d.ts
declare namespace Layui {
    interface CodeOptions {
        /**
         * 指定元素的选择器 默认值为 `.layui-code`
         * @default '.layui-code'
         */
        elem?: string;
        /**
         * 是否开启 Code 预览功能，可选值有：
         * - `true` 开启 Code 的普通预览
         * - `false` 关闭 Code 预览（默认）
         * - `"iframe"` 开启 Code 在 iframe 模式中预览
         *
         * 当开启该\属性时，elem 指定的元素需要设置成以下结构：
         * ```html
         * <pre class="layui-code" lay-options="{}">
         *   <textarea>
         * code content
         *   </textarea>
         * </pre>
         * ```
         * @default false
         * @since 2.8.0
         */
        preview?: boolean | 'iframe';
        /**
         * 开启预览后的面板布局方式，值为一个数组，数组的可选成员有：
         * - code 代码区域
         * - preview 预览区域
         *
         * 面板将根据数组的排列顺序来显示，如：
         * ```js
         * layout: ['code', 'preview']
         * ```
         * @since 2.8.0
         */
        layout?: Array<'code' | 'preview'>;
        /**
         * 设置 Code 和预览区域的公共样式
         * @since 2.8.0
         */
        style?: string;
        /**
         * 设置 Code 区域的局部样式，优先级高于 {@link CodeOptions.style|style} 属性
         * @since 2.8.0
         */
        codeStyle?: string;
        /**
         * 设置预览区域的局部样式，优先级高于 {@link CodeOptions.style|style} 属性
         * @since 2.8.0
         */
        previewStyle?: string;
        /**
         * 设置实例的唯一索引
         * @since 2.8.0
         */
        id?: string;
        /**
         * 追加实例面板的 `className`，以便对其自定义样式
         * @since 2.8.0
         */
        className?: string;
        /**
         * 用于开启 `preview` 属性后的面板头部右侧区域工具栏图标，值为一个数组，内置成员：
         * - `full` 最大化显示
         * - `window` 在新窗口预览。一般当 `layout: 'iframe'` 时开启，且 `code` 中须包含完整的 `HTML` 方可在新窗口正常预览
         *
         * 工具图标将根据数组的排列顺序来显示，如：
         * ```js
         * tools: ['full', 'window']
         * ```
         * 亦可自定义值，值对应图标 `className` 的 `layui-icon-` 后的名称，并通过 `toolsEvent` 回调函数中处理事件
         * 自定义扩展 2.8.17
         * @since 2.8.0
         */
        tools?: Array<'full' | 'window' | { title: string[]; type: string; event: (obj: any) => void }>;
        /**
         * 点击工具栏的回调函数，函数返回 tools 设置的名称
         * @param othis 当前图标元素对象
         * @param type tools 中设置的对应值
         * @since 2.8.0
         */
        toolsEvent?(othis: JQuery, type: string): void;
        /**
         * 自定义默认文本
         * @since 2.8.0
         * @example
         * ```js
         * text: {
         *   code: '代码栏标题', // 默认:  </>
         *   preview: '预览栏标题' // 默认: Preview
         * }
         * ```
         */
        text?: { code?: string; preview?: string };
        /**
         * 是否开启 Code 栏头部区域
         * @default false
         * @since 2.8.0
         */
        header?: boolean;
        /**
         * 是否显示行号
         * @default true
         * @since 2.7.3
         */
        ln?: boolean;
        /**
         * 设定标题 默认值为code
         */
        title?: string;
        /**
         * 设置最大高度,请注意必须加px,默认无：则会自适应高度，且不会出现滚动条
         */
        height?: string;
        /**
         * 是否转义html标签
         * @default true
         */
        encode?: boolean;
        /**
         * 风格选择，默认可不填（浅色模式），若为深色模式，填写：skin:'dark'
         */
        skin?: string;
        /**
         * 自定义右上角内容，可传入任意 html
         * @deprecated 2.8.2 已弃用，请使用 {@link CodeOption.tools|tools}
         */
        about?: boolean;
        /**
         * 组件渲染完毕的回调函数
         * @param obj 参数
         * - `obj.container` 当前面板的容器对象
         * - `obj.render()` 对预览中的 `element,form` 等组件进行渲染
         * @since 2.8.0
         */
        done?(obj: { container: JQuery; options: Required<CodeOptions>; render(): void }): void;
        /**
         * 所有实例渲染完毕后的回调
         */
        allDone?(): void;
        /**
         * 开启代码复制功能图标
         * @since 2.8.2
         */
        copy?: boolean;
        /**
         * 点击复制按钮的回调函数
         * 返回 false 阻止内置提示(2.9.21+)
         * @param code 当前 code 内容
         * @param cpoied 是否复制成功(2.9.21+)
         * @since 2.8.2
         */
        onCopy?(code: string, cpoied: boolean): void | boolean;
        /**
         * 用于重新渲染 code，例如代码高亮处理
         * @param code 当前 code 内容
         * @param opts 当前选项
         * @since 2.8.17
         */
        codeRender?(code: string, opts: Required<CodeOptions>): string;
        /**
         * 用于解析 code 内容，例如去掉注释，替换链接等
         * 
         * 内部私有方法
         * @internal
         * @param code 当前 code 内容
         * @param opts 当前选项
         * @since 2.8.0
         */
        codeParse?(code: string, opts: Required<CodeOptions>): string;
        /**
         * 指定语法高亮器，支持 `hljs,prism,shiki`
         * @since 2.8.17
         */
        highlighter?: 'hljs' | 'prism' | 'shiki';
        /**
         * 指定语言类型
         * @since 2.8.17
         */
        lang?: string;
        /**
         * 是否在代码域右上角显示语言类型
         * @default false
         * @since 2.8.17
         */
        langMarker?: boolean;
        /**
         * 是否自动换行
         * @default true
         * @since 2.8.17
         */
        wordWrap?: boolean;
        /**
         * 设置原始 code 值，默认取目标元素中的内容
         * @since 2.8.18
         */
        code?: string;
    }

    interface CodeReturn{
        config: Required<CodeOptions>;
        reload(opts?: Partial<CodeOptions>): void;
        updateOptions(opts: Partial<CodeOptions>): Required<CodeOptions>;
        reloadCode(opts?: Partial<CodeOptions>): void;
    }

    /**
     * 代码预览
     * @see https://layui.dev/docs/2/code/
     */
    interface Code {
        /**
         * 渲染代码面板
         * @param options 
         * @param _mod 传入 `reloadCode` 则重新渲染代码面板。仅供内部使用的私有属性
         */
        (options?: CodeOptions, _mod?: 'reloadCode' ): CodeReturn;
    }
}

// modules/colorpicker.d.ts
declare namespace Layui {
    interface ColorPickerOptions {
        /**
         * 绑定元素选择器或 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 默认颜色值，值的格式跟随 format 属性的设定
         */
        color?: string;
        /**
         * 颜色显示/输入格式，支持 
         * - `hex` 
         * - `rgb`。 
         * 
         * 若同时开启 alpha 属性，则颜色值自动变为 rgba
         * @default 'hex'
         */
        format?: 'hex' | 'rgb' | 'rgba';
        /**
         * 是否开启透明度。当同时开启 format: 'rgb' 时，color 值将采用 rgba 格式
         * @default false
         */
        alpha?: boolean;
        /**
         * 是否开启预定义颜色栏
         */
        predefine?: boolean;
        /**
         * 预定义颜色，此参数需配合 {@link predefine|`predefine:true`} 使用
         * @example
         * ```js
         * colorpicker.render({
         *   elem: '#ID-colorpicker-demo-predefine-2',
         *   color: '#9d8a0e',
         *   predefine: true, // 开启预定义颜色
         *   colors: ['#ff8c00','#00ced1','#9d8a0e'] //自定义预定义颜色项
         * });
         * ```
         */
        colors?: Array<string>;
        /**
         * 下拉框大小
         * @default 'sm'
         */
        size?: 'lg' | 'sm' | 'xs';
        /**
         * 颜色被改变的回调
         * @param color 当前颜色值
         */
        change?(this: ColorPickerOptions, color: string): void;
        /**
         * 颜色选择完毕的回调函数。点击“确认”和“清除”按钮均会触发
         * @param color 当前选中的颜色值
         */
        done?(this: ColorPickerOptions, color: string): void;
        /**
         * 取消颜色选择的回调函数
         * @param value 当前颜色值
         * @since 2.8.0
         */
        cancel?(this: ColorPickerOptions, color: string): void;
        /**
         * 颜色选择面板被关闭触发的回调函数
         * @param value 当前颜色值
         * @since 2.8.0
         */
        close?(this: ColorPickerOptions, color: string): void;
    }

    /**
     * 颜色选择器
     * @see https://layui.dev/docs/2/colorpicker/
     */
    interface ColorPicker {
        config: Record<string, any>;
        index: number;
        /**
         * colorpicker 组件渲染方法
         * @param option 属性选项
         */
        render(option: ColorPickerOptions): ColorPicker;
        /**
         * 全局设置
         * @param option 属性选项
         */
        set(option: ColorPickerOptions): ColorPicker;
        /**
         * 绑定切换事件
         * @param event 事件名
         * @param callback 回调函数
         */
        on(event: string, callback: (this: Layui, params: any) => any): any;
    }
}

// modules/dropdown.d.ts
declare namespace Layui {
    interface DropdownOptionsData {
        /**
         * 菜单标题
         */
        title?: string;
        /**
         * 菜单 ID。用户菜单项唯一索引
         */
        id?: string | number;
        /**
         * 菜单项的超链接地址。若填写，点击菜单将直接发生跳转
         */
        href?: string;
        /**
         * 菜单项是否禁用状态
         * @default false
         * @since 2.8.0
         */
        disabled?: boolean;
        /**
         * 菜单 url 打开方式，需设置 href 属性后才生效。 一般可设为 _blank 或 _self 等
         */
        target?: string;
        /**
         * 菜单项的类型，支持的可选值如下：
         * - `normal` 普通菜单项（默认）
         * - `group` 纵向组合收缩菜单
         * - `parent` 横向父级菜单
         * - `-` 分割线
         */
        type?: 'normal' | 'group' | 'parent' | '-';
        /**
         * 子级菜单数据项。参数同父级，可无限嵌套
         */
        child?: DropdownOptionsData[];
        /**
         * 自定义当前菜单项模板，优先级高于全局设定的 templet
         */
        templet?: string;
        [index: string]: any;
    }

    interface DropdownOptions {
        /**
         * 绑定元素选择器或 DOM 对象
         */
        elem?: string | Element | JQuery;
        /**
         * 菜单列数据项，也可用 {@link content|content} 选项自定义模板
         */
        data?: DropdownOptionsData[];
        /**
         * 设定实例唯一索引，以便用于其他方法对实例进行相关操作。若该属性未设置，则默认从 elem 属性绑定的元素中的 id 属性值中获取
         */
        id?: string;
        /**
         * 触发组件的事件类型。支持所有事件
         * @default 'click'
         */
        trigger?: keyof HTMLElementEventMap
        /**
         * 是否初始即显示组件面板
         * @default false
         */
        show?: boolean;
        /**
         * 下拉面板相对绑定元素的水平对齐方式
         * @default 'left'
         * @since 2.6.8
         */
        align?: 'left' | 'center' | 'right';
        /**
         * 是否允许菜单组展开收缩
         * @default true
         */
        isAllowSpread?: boolean;
        /**
         * 是否初始展开子菜单
         * @default true
         */
        isSpreadItem?: boolean;
        /**
         * 延迟关闭的毫秒数。当 trigger 为 hover 时才生效
         * @default 300
         * @since 2.9.2 支持数组类型，数组成员值分别表示显示延迟时间和隐藏延迟时间
         */
        delay?: number | [show: number, hide: number];
        /**
         * 自定义组件的样式类名
         */
        className?: string;
        /**
         * 设置组件的 style 属性
         */
        style?: string;
        /**
         * 设置弹出时的遮罩。支持以下方式赋值：
         * - 若值为 `number` 类型，则表示为遮罩透明度，如: `shade: 0.3`
         * - 若值为 Array 类型，则可同时设置透明度和背景色，如: `shade: [0.3, '#000']`
         * @default 0
         * @since 2.8.0
         */
        shade?: number | [opacity: number, bgColor: string];
        /**
         * 全局定义菜单的列表模板，可添加任意 html 字符，且支持 laytpl 模板语法
         * @since 2.8.0 支持函数类型
         * @example
         * ```js
         * templet: function(d){
         *   return '<i class="layui-icon layui-icon-tips"></i> ' + d.title;
         * }
         * ```
         */
        templet?: string | ((d: any) => string);
        /**
         * 自定义组件内容，从而替代默认的菜单结构
         */
        content?: string;
        /**
         * 设置触发点击事件的菜单范围。支持以下可选值：
         * - `all`: 即代表父子菜单均可触发事件
         * - 默认无需设置，即父级菜单不触发事件
         * @since 2.8.0
         */
        clickScope?: 'all';
        /**
         * 自定义 data 数据源中常用的字段名称
         * @since 2.8.15
         */
        customName?: { [K in keyof DropdownOptionsData]: string };
        /**
         * 是否开启手风琴动画
         * @default false
         * @since 2.8.18
         */
        accordion?: boolean;
        /**
         * 点击触发元素时是否关闭面板
         * @default true
         * @since 2.9.18
         */
        closeOnClick?: boolean;
        /**
         * 组件成功弹出后的回调，并返回两个参数
         * @param elemPanel 弹出的面板
         * @param elem 点击的面板
         */
        ready?(this: DropdownOptions, elemPanel: JQuery, elem: JQuery): void;
        /**
         * 菜单项被点击时的回调
         * @param data 菜单项数据
         * @param othis 当前点击的菜单项元素对象
         * @param e 事件对象
         * @since 2.8.0 支持返回 false，阻止关闭面板
         * @since 2.9.18 支持事件对象 e 参数，e 为点击事件的事件对象
         */
        click?(this: DropdownOptions, data: any, othis: JQuery, e: JQuery.Event): void | boolean;
        /**
         * 面板关闭后的回调函数
         * @param elem 当前组件绑定的目标元素对象
         * @since 2.9.7
         */
        close?(this: DropdownOptions, elem: JQuery): void;
        /**
         * 点击 dropdown 外部时的回调函数，返回 `false` 可阻止关闭
         * @param e 事件对象
         * @since 2.9.18
         */
        onClickOutside?(this: DropdownOptions, e: Event): boolean | void;
    }

    interface DropdownReturn {
        config: Required<DropdownOptions>;
        /**
         * 重载面板
         * @param options 
         */
        reload(options?: Partial<DropdownOptions> | object): void;
        /**
         * 打开面板
         * @since 2.9.8
         */
        open(): void;
        /**
         * 关闭面板
         * @since 2.8.0
         */
        close(): void;
    }

    /**
     * 下拉菜单
     * @see https://layui.dev/docs/2/dropdown/
     */
    interface Dropdown {
        config: Required<DropdownOptions>;
        index: number;
        /**
         * 全局设置
         * @param options 
         */
        set(options: Partial<DropdownOptions>): Dropdown;
        /**
         * 给 dropdown 绑定事件，当前只有 click 即 event 类似: `click(id|filter)`
         * @param event 事件名 如：`click(id|filter)` 括号内是 `.layui-menu` 的 `id=""` 或者 `lay-filter=""`
         * @param callback 回调中的参数是 `<li lay-options="{id: 101}">` 中 `lay-options` 的值
         */
        on(event: string, callback: (this: HTMLElement, obj: any) => any): any;
        /**
         * 重载实例
         * @param id 组件渲染时定义的 id 属性值
         * @param options 全部基础参数
         */
        reload(id: string, options?: Partial<DropdownOptions>): DropdownReturn;
        /**
         * 仅数据或内容重载
         * @param id 组件渲染时定义的 id 属性值
         * @param options 全部基础参数
         * @since 2.8.0
         */
        reloadData(id: string, options: Partial<DropdownOptions>): DropdownReturn;
        /**
         * 核心入口
         */
        render(options: DropdownOptions): DropdownReturn;
        /**
         * 关闭面板
         * @param id 组件渲染时定义的 id 属性值
         * @since 2.8.0
         */
        close(id: string): DropdownReturn;
        /**
         * 打开面板
         * @param id 组件渲染时定义的 id 属性值
         * @since 2.9.8
         */
        open(id: string): DropdownReturn;
    }
}

// modules/element.d.ts
declare namespace Layui {
    interface TabOptions {
        /**
         * 选项卡的标题
         */
        title: string;
        /**
         * 选项卡的内容,支持传入 html 字符串
         */
        content: string;
        /**
         * 选项卡标题的 lay-id 属性值
         */
        id?: string;
        /**
         * 添加后自动切换
         * @default false
         * @since 2.8.6
         */
        change?: boolean;
        /**
         * 是否开启删除图标
         * @default false
         * @since 2.9.11
         */
        allowClose?: boolean;
    }

    interface TabElement {
        /**
         * 指定tab头元素项
         */
        headerElem: string | HTMLElement | JQuery;
        /**
         * 指定tab主体元素项
         */
        bodyElem: string | HTMLElement | JQuery;
    }

    interface ElementEventParam {
        /**
         * 当前 tab 项的所在下标
         */
        index: number;
        /**
         * 当前的 tab 容器
         */
        elem: JQuery;
        /**
         * 前的 tab 项 ID
         * @since 2.9.11
         */
        id: string;
    }
    interface ElementEventMap {
        /**
         * tab 切换事件
         */
        tab(this: HTMLElement, data: ElementEventParam): void;
        /**
         * tab 切换前的事件
         * 返回 false 阻止切换
         * @since 2.9.16
         */
        tabBeforeChange(this: HTMLElement, data: Pick<ElementEventParam, 'elem'> & { to: Omit<ElementEventParam, 'elem'>; from: Omit<ElementEventParam, 'elem'> }): void | boolean;
        /**
         * tab 删除事件
         */
        tabDelete(this: HTMLElement, data: ElementEventParam): void;
        /**
         * tab 删除前的事件
         * 返回 false 取消关闭操作
         * @since 2.9.11+
         */
        tabBeforeDelete(this: HTMLElement, data: ElementEventParam): void | boolean;
        /**
         * 导航栏点击事件
         * @param othis 点击元素的 jQuery 对象
         */
        nav(this: HTMLElement, othis: JQuery): void;
        /**
         * 折叠面板点击事件
         * @param data 事件对象
         * - `title` 折叠面板标题元素
         * - `content` 折叠面板内容元素
         * - `show` 折叠面板是否展开，true 为展开状态，false 为收起状态
         */
        collapse(this: HTMLElement, data: { title: JQuery, content: JQuery, show: boolean }): void;
    }
    /**
     * 元素操作
     */
    interface Element {
        config: Record<string, any>;
        /**
         * 全局设置
         * @param options 选项 
         */
        set(options: Record<string, any>): this;
        /**
         * 用于元素的一些事件触发
         * @param event 事件名称
         * @param callback 事件回调函数
         */
        on<K extends keyof ElementEventMap>(event: `${K}(${TableFilter})`, callback: ElementEventMap[K]): void;
        on<K extends keyof ElementEventMap>(event: K, callback: ElementEventMap[K]): void;
        on<K extends string>(event: `${K}(${TableFilter})`, callback: AnyFn): void;
        /**
         * 用于新增一个Tab选项
         * @param filter tab元素的 lay-filter="value" 过滤器的值
         * @param options 设定可选值的对象
         */
        tabAdd(filter: string, options: TabOptions): void;
        /**
         * 用于删除指定的Tab选项
         * @param filter tab 元素的 `lay-filter="value"` 过滤器的值
         * @param layid 选项卡标题列表的 lay-id 属性的值
         * @param force 是否强制删除，默认为false。如果为true，则会直接删除，不会触发事件 (2.9.21+)
         */
        tabDelete(filter: string, layid: string, force?: boolean): void;
        /**
         * 用于外部切换到指定的Tab项上
         * @param filter 对应容器 lay-filter 的属性值
         * @param layid 比如：lay-id="xx"中的 'xx'
         * @param force 是否强制切换，默认为false。如果为true，则会直接切换，不会触发事件 (2.9.15+)
         */
        tabChange(filter: string, layid: string, force?: boolean): void;
        /**
         * 用于绑定自定义 Tab 元素（即非 layui 自带的 tab 结构）
         * @param option 参数
         * @see https://layui.dev/docs/2/tab/
         */
        tab(option: TabElement): void;
        /**
         * 用于动态改变进度条百分比
         * @param filter 对应进度条容器 lay-filter 的属性值
         * @param percent 比例，百分比字符串，例如：'30%'、'50%'
         * @example
         * ```js
         * element.progress('demo', '30%')
         * ```
         */
        progress(filter: string, percent: string): void;
        /**
         * Element 渲染方法，用于重新渲染 Element 组件。
         * @param type 渲染类型，未指定时将重新渲染页面内所有类型的 Element 组件
         * - `tab` 渲染 tab 选项卡
         * - `nav` 渲染导航栏目
         * - `breadcrumb` 渲染面包屑
         * - `progress` 渲染进度条
         * - `collapse` 渲染叠面板
         * @param filter 元素的 `lay-filter=""` 的值，用于局部更新，
         * @since 自 2.9.16+ {@link filter} 支持 jQuery 对象
         * @deprecated 已废弃，使用 {@link Element.render|render}
         */
        init(type?: 'tab' | 'nav' | 'breadcrumb' | 'progress' | 'collapse', filter?: string | JQuery): void;
        /**
         * Element 渲染方法，用于重新渲染 Element 组件
         * @param type 渲染类型，未指定时将重新渲染页面内所有类型的 Element 组件
         * - `tab` 渲染 tab 选项卡
         * - `nav` 渲染导航栏目
         * - `breadcrumb` 渲染面包屑
         * - `progress` 渲染进度条
         * - `collapse` 渲染折叠面板
         * @param filter 元素的 `lay-filter=""` 的值，用于局部更新，
         * @since 自 2.9.16+ {@link filter} 支持 jQuery 对象
         * @see https://layui.dev/docs/2/nav/- 导航栏
         * @see https://layui.dev/docs/2/tab/- 选项卡
         * @see https://layui.dev/docs/2/panel/- 折叠面板
         * @see https://layui.dev/docs/2/progress/- 进度条
         * @see https://layui.dev/docs/2/nav/#separator- 面包屑
         */
        render(type?: 'tab' | 'nav' | 'breadcrumb' | 'progress' | 'collapse', filter?: string | JQuery): void;
    }
}

// modules/flow.d.ts
declare namespace Layui {
    interface FlowOptions {
        /**
         * 指定列表容器的选择器
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 指定触发流加载的滚动条所在元素选择器
         * @default document
         */
        scrollElem?: string | HTMLElement | Document;
        /**
         * 是否自动加载。如果设为 false，会在列表底部生成一个 `加载更多` 的按钮，点击时才会加载下一页数据
         * @default true
         */
        isAuto?: boolean;
        /**
         * 用于显示末页内容，可传入任意 HTML 字符。默认为：`没有更多了`
         */
        end?: string;
        /**
         * 是否开启信息流中的图片懒加载。若设为 true ，则只会对在可视区域的图片进行按需加载。
         * 但同时，在拼接列表字符的时候，您不能给列表中的 `<img>` 标签赋值 `src`，必须要用 `lay-src` 属性取代，如：
         * ```html
         * layui.each(data, function(index, item){
         *  lis.push('<li><img lay-src="'+ item.src +'"></li>');
         * });
         * ```
         */
        isLazyimg?: boolean;
        /**
         * 与底部的临界距离。即当滚动条与底部产生该距离时，触发加载。`isAuto:true` 时有效。
         * @default 50
         */
        mb?: number;
        /**
         * 指定触发加载的方向
         * @default 'bottom'
         * @since 2.9.7
         */
        direction?: 'bottom' | 'top';
        /**
         * 自定义"加载更多"按钮文本
         * @since 2.9.11
         */
        moreText?: string;
        /**
         * 到达临界点触发加载的回调
         */
        done?: (page: number, next: (html: string, hasMore: boolean) => void) => void;
    }

    /**
     * 流加载
     * @see https://layui.dev/docs/2/flow/
     */
    interface Flow {
        /**
         * 流加载
         * @param option 信息流参数
         */
        load(option: FlowOptions): void;

        /**
         * 图片懒加载
         * @param option 参数
         */
        lazyimg(option: {
            /**
             * 指定开启懒加载的img元素选择器，如 `elem: '.demo img'` 或 `elem: 'img.load'`
             * @default 'img'
             */
            elem?: string;
            /**
             * 滚动条所在元素选择器
             * @default document
             */
            scrollElem?: string | HTMLElement | Document;
        }): void;
    }
}

// modules/form.d.ts
declare namespace Layui {
    interface LayFormData {
        /**
         * 被执行事件的元素 DOM 对象，一般为 button 对象,可能是 `input select button` 等不能用 HTMLElement
         */
        elem: HTMLButtonElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        /**
         * 表单元素美化后的 jQuery 对象
         */
        othis: JQuery;
        /**
         * DOM 对象值
         */
        value: string;
        /**
         * 被执行提交的 form 对象，一般在存在 form 标签时才会返回
         */
        form: HTMLFormElement;
        /**
         * 当前容器的全部表单字段，名值对形式：{name: value}
         */
        field: any;
    }

    interface LayFormVerifyConfigCallback {
        /**
         * @param value 当前进入验证的表单项的值
         * @param elem 当前进入验证的表单项的 DOM 元素
         * @return 返回验证信息；返回 true 阻止默认提示风格
         */
        (value: string, elem: HTMLButtonElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): string | boolean | void;
    }
    interface LayFormVerifyConfig {
        [index: string]: LayFormVerifyConfigCallback | [RegExp, string];
    }

    interface FormConfig {
        /**
         * 设置表单元素的自动完成属性，等同于原生表单的 autocomplete 属性
         */
        autocomplete: string;
        /**
         * form内置的验证
         */
        verify: {
            /**
             * 日期验证 date[0] 是正则,date[1] 是验证失败的提示（"日期格式不正确"）
             */
            date: [RegExp, string];
            /**
             * 邮箱验证 email[0] 是正则,email[1] 是验证失败的提示（"邮箱格式不正确"）
             */
            email: [RegExp, string];
            /**
             * 身份证号验证 identity[0]是正则, identity[1] 是验证失败的提示（ 请输入正确的身份证号"）
             */
            identity: [RegExp, string];
            /**
             * 验证数字，如果参数不是数字则返回"只能填写数字"，是数字则无返回值
             * @param arg 参数 比如 1,"1",-1
             */
            number: (arg: any) => string | null;
            /**
             * 手机号验证 phone[0] 是正则,phone[1] 是验证失败的提示（"请输入正确的手机号"）
             */
            phone: [RegExp, string];
            /**
             * 空值验证 required[0] 是正则,required[1] 是为空的提示（"必填项不能为空"）
             */
            required: [RegExp, string];
            /**
             * url验证 url[0] 是正则,url[1] 是验证失败的提示（"链接格式不正确"）
             */
            url: [RegExp, string];
            [index: string]: [RegExp, string] | AnyFn;
        };
    }

    /**
     * 表单
     * @see https://layui.dev/docs/2/form/
     */
    interface Form {
        config: FormConfig;
        /**
         * 取值，取出所有子元素是 `input,select,textarea` 且有 `name` 属性的表单元素值
         * @param filter 表单容器 `lay-filter=""` 属性的值
         * @param itemForm 表单 field 子元素的父容器，没有则是第一个 `.layui-form` 作为父元素。实例：`$(".layui-form")`
         */
        getValue(filter: string, itemForm?: JQuery): Record<string, string>;
        /**
         * 表单 field 元素回调事件 （每个表单都有一个默认事件）
         * @param event 类似：`select(x)|checkbox(x)|switch(x)|radio(x)|submit(x)` x 为 field上的 `lay-filter="x"`
         * @param callback 回调函数
         */
        on(event: string, callback: (data: LayFormData) => any): any;
        /**
         * 渲染元素，对动态插入的元素渲染
         * @param type 对应表单组件类型，若不填，则指向所有类型
         * @param filter 对应 class="layui-form" 所在元素的 lay-filter 属性值，用于指定需渲染的表单区域
         */
        render(type?: 'input' | 'select' | 'checkbox' | 'radio' | null, filter?: string): Form;
        /**
         * 允许指定表单元素的 jQuery 对象，从而完成定向渲染。且支持两种方式的指向：
         * - 若 jQuery 对象指向表单域容器（class="layui-form"），则渲染该表单域中的所有表单项(2.8.0)
         * - 若 jQuery 对象指向的不是表单域容器，则只对该对象进行渲染
         * @example
         * ```
         * // 定向渲染（一般当表单存在动态生成时，进行渲染）
         * // 传入需要渲染的相应表单元素的 jQuery 对象
         * form.render($('#form-id')); // 渲染 id="form-id" 的表单域中的所有表单项
         * form.render($('#select-id')); // 仅渲染 id="select-id" 的表单项
         * ```
         * @param obj 表单元素的 jQuery 对象
         * @since 2.7.0
         */
        render(obj?: JQuery): Form;
        /**
         * 提交方法，可以实现在任意位置对指定表单的主动提交
         * @param filter 表单域容器的 lay-filter 属性值
         * @param callback 执行提交事件后的回调函数
         * @since 2.7.0
         */
        submit(filter: string, callback?: (data: LayFormData) => any): any;
        /**
         * 触发指定表单项的验证。验证通过，返回 true，否则返回 false
         * @param elem 元素选择器或 jQuery 对象
         * @since 2.7.0
         */
        validate(elem: string | JQuery): boolean;
        /**
         * 表单取值
         * @param filter 单域容器的 lay-filter 属性值
         */
        val(filter: string): Record<string, any>;
        /**
         * 表单赋值
         * @param filter 单域容器的 lay-filter 属性值
         * @param obj 要设置的值
         */
        val(filter: string, obj: Record<string, any>): Record<string, any>;
        /**
         * 维护表单验证
         * @param config 验证参数
         */
        verify(config: LayFormVerifyConfig): Form;
        /**
         * 设置验证规则中是否同时包含必填
         * @since 2.8.11
         * @deprecated 2.8.17 已移除
         */
        verIncludeRequired: boolean;
    }
}

// modules/lay.d.ts
declare namespace Layui {
    interface Lay<TElement = HTMLElement> extends ArrayLike<TElement>, Iterable<TElement> {
        /**
         * 当前的选择器
         */
        selector: string | undefined;
        /**
         * 添加 CSS 类
         * @param className 类名
         * @param remove 是否是移除 `className`, 默认 `false`
         */
        addClass(className: string, remove?: boolean): this;
        /**
         * 追加内容
         * @param elem html 或者元素对象
         */
        append(elem?: string | HTMLElement): this;
        /**
         * 设置元素属性
         * @param key 属性名
         * @param value 属性值
         */
        attr(key: string, value: any): this;
        /**
         * 获取第一个元素属性
         */
        attr(): string;
        /**
         * 添加 css style
         * @param key 属性名
         * @param value 值
         */
        css(key: string, value: any): this;
        /**
         * 获取 css style
         * @param key 属性名
         */
        css(key: string): string;
        /**
         * 对元素遍历
         * @param fn 回调函数，返回 `true` 则停止遍历，和 jQuery 相反
         */
        each(fn: (this: TElement, index: number, elem: TElement) => any): this;
        /**
         * 查找子元素
         * @param selector 选择器
         */
        find(selector: string | HTMLElement): this;
        /**
         * 是否包含 css 类
         * @param className 类名
         */
        hasClass(className: string): boolean;
        /**
         * 设置高度
         * @param value 元素宽度
         */
        height(value: number | string): this;
        /**
         * 获取第一个元素高度
         */
        height(): number;
        /**
         * 设置元素的 `innerHTML`
         * @param html html 字符串
         */
        html(html: string): this;
        /**
         * 获取第一个元素的 `innerHTML`
         */
        html(): string;
        /**
         * 解除事件
         * @param eventName 事件名
         * @param fn 回调
         * @since 2.9.11 新增 options
         */
        off<K extends keyof HTMLElementEventMap>(
            eventName: K,
            fn: (this: TElement, e: HTMLElementEventMap[K]) => any,
            options?: boolean | EventListenerOptions
        ): this;
        off<K extends keyof DocumentEventMap>(
            eventName: K,
            fn: (this: TElement, e: DocumentEventMap[K]) => any,
            options?: boolean | EventListenerOptions
        ): this;
        off<K extends keyof WindowEventMap>(
            eventName: K,
            fn: (this: TElement, e: WindowEventMap[K]) => any,
            options?: boolean | EventListenerOptions
        ): this;
        /**
         * 事件绑定，注意：只支持内置事件，不支持自定义事件
         * @param eventName 事件名 比如click，自定事件会绑定失败
         * @param fn 回调
         * @since 2.9.11 新增 options
         */
        on<K extends keyof HTMLElementEventMap>(
            eventName: K,
            fn: (this: TElement, e: HTMLElementEventMap[K]) => any,
            options?: boolean | AddEventListenerOptions
        ): this;
        on<K extends keyof DocumentEventMap>(
            eventName: K,
            fn: (this: TElement, e: DocumentEventMap[K]) => any,
            options?: boolean | AddEventListenerOptions
        ): this;
        on<K extends keyof WindowEventMap>(
            eventName: K,
            fn: (this: TElement, e: WindowEventMap[K]) => any,
            options?: boolean | AddEventListenerOptions
        ): this;
        /**
         * 移除元素
         * @param elem 实际是 removeChild(elem)
         */
        remove(elem: HTMLElement): this
        /**
         * 移除指定的 `attribute`
         * @param key 属性名
         */
        removeAttr(key: string): this;
        /**
         *  移除 className
         * @param className
         */
        removeClass(className: string): this;
        /**
         * 设置元素的 value
         * @param value 值
         */
        val(value: any): this;
        /**
         * 获取第一个元素的value
         */
        val(): string;
        /**
         * 设置宽度
         * @param value 元素宽度
         */
        width(value: number | string): this;
        /**
         * 获取第一个元素宽度
         */
        width(): number;
        [n: number]: TElement;
    }

    interface LayTouchSwipeState {
        /**
         * 初始坐标
         */
        pointerStart: { x: number; y: number };
        /**
         * 结束坐标
         */
        pointerEnd: { x: number; y: number };
        /**
         * X 轴移动距离
         */
        distanceX: number;
        /**
         * Y 轴移动距离
         */
        distanceY: number;
        /**
         * 滑动方向
         */
        direction: 'none' | 'right' | 'left' | 'up' | 'down';
        /**
         * 开始时间
         */
        timeStart: Date;
    }

    interface LayPositionOptions {
        /**
         * 元素的定位模式
         * @default 'absolute'
         */
        position?: 'absolute' | 'fixed';
        /**
         * 点击类型，默认为 'left'，如果 {@link opts.target} 是 document 或 body 元素，则为 'right'
         */
        clickType?: 'left' | 'right';
        /**
         * 对齐方式
         * @default 'left'
         */
        align?: 'left' | 'center' | 'right';
        /**
         * 顶部没有足够区域显示时，是否允许底部溢出
         */
        allowBottomOut?: boolean;
        /**
         * 边距
         */
        margin?: number;
        /**
         * 事件对象，仅右键生效
         */
        e?: MouseEvent | { clientX: number; clientY: number };
        /**
         * 是否重载，用于出现滚动条时重新计算位置
         * 这是一个仅供内部使用的私有参数
         */
        SYSTEM_RELOAD?: boolean;
        /**
         * 相对于触发元素的额外偏移量[x,y]
         */
        offset?: [offsetX: number, offsetY: number]
    }

    type LayOnClickOutsideScope = HTMLElement | Document | Window;
    type LayOnClickOutsideScopeEventMap<SElement> = SElement extends Window
        ? WindowEventMap
        : SElement extends Document
        ? DocumentEventMap
        : SElement extends HTMLElement
        ? HTMLElementEventMap
        : never;
    type LayOnClickOutsideEventMap<SElement> = Pick<LayOnClickOutsideScopeEventMap<SElement>, 'click' | 'mousedown' | 'mouseup' | 'touchstart' | 'touchend' | 'pointerdown' | 'pointerup'>;
    interface LayOnClickOutsideOpsions<E extends keyof LayOnClickOutsideEventMap<S>, S extends LayOnClickOutsideScope> {
        /**
         * 监听的事件类型
         * @default 'pointerdown''
         */
        event?: E;
        /**
         * 监听范围
         * @default document
         */
        scope?: S;
        /**
         * 忽略监听的元素或选择器字符串
         */
        ignore?: Array<string | HTMLElement>
        /**
         * 对内部事件侦听器使用捕获阶段
         * @default true
         */
        capture?: boolean;
    }

    interface LayStatic {
        /**
         * 查找 DOM 作为返回实例的操作对象
         * @param selector 选择器
         */
        (window: Window): Lay<Window>;
        <T extends keyof HTMLElementTagNameMap>(selector: T): Lay<HTMLElementTagNameMap[T]>;
        <T extends keyof SVGElementTagNameMap>(selector: T): Lay<SVGElementTagNameMap[T]>;
        <T extends globalThis.Element = HTMLElement>(selector: Layui.Selector): Lay<T>;
        (element: HTMLSelectElement): Lay<HTMLSelectElement>;
        <T extends globalThis.Element>(element_or_elementArray: T | ArrayLike<T>): Lay<T>;
        <T>(selection: Lay<T>): Lay<T>;
        <T extends Layui.PlainObject>(object: T): Lay<T>;
        <T = HTMLElement>(): Lay<T>;
        /**
         * 版本
         */
        v: string;
        /**
         * 把多个对象深度克隆到 target
         * @param target 一个对象
         * @param objectN 包含额外的属性合并到第一个参数
         */
        extend<T, U, V, W, X, Y, Z>(
            target: T,
            object1: U,
            object2: V,
            object3: W,
            object4: X,
            object5: Y,
            object6: Z,
        ): T & U & V & W & X & Y & Z;
        extend<T, U, V, W, X, Y>(
            target: T,
            object1: U,
            object2: V,
            object3: W,
            object4: X,
            object5: Y,
        ): T & U & V & W & X & Y;
        extend<T, U, V, W, X>(target: T, object1: U, object2: V, object3: W, object4: X): T & U & V & W & X;
        extend<T, U, V, W>(target: T, object1: U, object2: V, object3: W): T & U & V & W;
        extend<T, U, V>(target: T, object1: U, object2: V): T & U & V;
        extend<T, U>(target: T, object1: U): T & U;
        extend<T>(target: T): this & T;
        extend(target: any, object1: any, ...objectN: any[]): any;
        /**
         * 如果是 ie 则是版本字符串，非 ie 为 false
         */
        ie: boolean | string;
        layui: Layui;
        /**
         * 获取当前 JS 所在目录
         */
        getPath: string;
        /**
         * 阻止事件冒泡
         */
        stope(event: Event | JQuery.Event): void;
        /**
        * 对象（Array、Object、DOM 对象等）遍历，可用于取代 for 语句
        * @param collection 集合，可以是数组或对象等可遍历的元素
        * @param callback 回调函数，返回 true 停止遍历，和 jQUery.each 相反
        */
        each<T>(collection: ArrayLike<T>, callback: (this: T, indexInArray: number, value: T) => any): Lay;
        each<T, K extends keyof T>(collection: T, callback: (this: T[K], propertyName: K, valueOfProperty: T[K]) => any): Lay;
        /**
         * 数字前置补零
         * @param num 原始数字
         * @param length 数字长度，默认值 2。如果原始数字长度小于 length，则前面补零
         * @returns 返回补 0 后的数字
         * @example
         * ```js
         * lay.digit(6, 2); // "06"
         * lay.digit('7', 3); // "007"
         * ```
         */
        digit(num: number | string, length?: number): string;
        /**
         * 创建元素
         * @param elemName 元素的标签名
         * @param attr 添加到元素上的属性
         * @example
         * ```js
         * lay.elem('div', {id: 'test'}) // <div id="test"></div>
         * ```
         */
        elem<K extends keyof HTMLElementTagNameMap>(tagName: K, attr?: Record<string, any>): HTMLElementTagNameMap[K];
        elem(tagName: string, attr?: Record<string, any>): HTMLElement;
        /**
         * 当前页面body是否存在滚动条
         */
        hasScrollbar(): boolean;
        /**
         * 创建 style 样式
         * @param options 
         * 可配置的选项
         * - target: 目标容器，指定后会将样式追加到目标容器，默认 `body`；
         * - id: 样式元素的 id，默认自增
         * - text: 样式内容
         * @since 2.8.15
         * @example
         * ```html
         * <div id="targetEl">
         *   <!-- 样式追加到目标容器 -->
         *   <style id="LAY-STYLE-DF-0">.card{color: #000}</style>
         * </div>
         * 
         * lay.style({
         *   target: '#targetEl',
         *   text: '.card{color: #000}'
         * }) // <style id="LAY-STYLE-DF-0">.card{color: #000}</style>
         * ```
         */
        style(options: { target?: string | HTMLElement | JQuery; id?: string; text: string }): HTMLStyleElement;
        /**
         * 将元素定位到指定目标元素附近
         * @param target 目标元素
         * @param elem 定位元素
         * @param opts 可配置的选项
         * @example
         * ```js
         * <button id="targetEl">dropdown</button>
         * <ul id="contentEl" class="dropdown-menu">
         *   <li>菜单1</li>
         *   <li>菜单2</li>
         * </ul>
         * 
         * // 下拉菜单将被定位到按钮附近
         * lay.position(
         *   $('#targetEl')[0],
         *   $('#contentEl')[0],
         *   {
         *     position: 'fixed',
         *     align: 'center'
         *   }
         * )
         * ```
         */
        position(target: HTMLElement, elem: HTMLElement, opts?: LayPositionOptions): void;
        /**
         * 获取元素上的属性配置项
         * @param elem HTML 元素
         * @param attr 可配置的选项，string 类型指定属性名
         * @example
         * ```js
         * <div id="testEl" lay-options="{color:red}" lay-toc="{hot: true}"></div>
         * 
         * var elem = $('#testEl')
         * lay.options(elem) // {color:red}
         * lay.options(elem[0]) // {color:red}
         * lay.options('#testEl') // {color:red}
         * lay.options('#testEl', {attr: 'lay-toc'}) // {hot: true}
         * lay.options('#testEl', 'lay-toc') // {hot: true}
         * 
         * $('#testEl').attr('lay-toc') // '{hot: true}'
         * ```
         */
        options(elem: string | HTMLElement | JQuery, attr?: string | Record<string, string>): Record<string, any>;
        /**
         * 元素是否属于顶级元素（document 或 body）
         * @param elem HTML 元素
         */
        isTopElem(elem: unknown): elem is Document | HTMLBodyElement;
        /**
         * 获取 style rules
         * @param style HTMLStyle 元素
         * @param callback 用来返回 style 元素中的每个 `style rule` 的函数，返回 true 终止遍历
         * @example
         * ```js
         * <style id="test">
         * .lay-card{
         *   color: #000;
         * }
         * .lay-btn-success{
         *   color: green;
         * }
         * </style>
         * 
         * lay.getStyleRules($('#test')[0], function(rule, index){
         *   if(rule.selectorText === '.lay-card'){
         *     console.log(index, rule.cssText) // 0 '.lay-card{color: #000}'
         *     rule.style.color = '#EEE';
         *     return true; // 终止遍历
         *   }
         * }) // RuleList
         * ```
         */
        getStyleRules(style: HTMLStyleElement, callback: (ruleItem: CSSStyleRule, index: number) => boolean): CSSRuleList;
        clipboard: {
            /**
             * 剪贴板写入文本
             * @param text 写入剪贴板的文本
             * @param done 写入成功/完成回调
             * @param error 写入失败回调
             *
             * @since 2.8.17
             */
            writeText(text: string, done?: () => void, error?: (err: any) => void): void;
        };
        /**
         * 检测是否支持 Passive Event Listeners
         * @since 2.9.2
         * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
         */
        passiveSupported: boolean;
        /**
         * 是否支持 touch events
         * @since 2.9.2
         */
        touchEventsSupported(): boolean;
        /**
         * 基于 touch 事件的触摸滑动
         * @param elem
         * @param options
         * @since 2.9.2
         */
        touchSwipe(
            elem: string | Element | JQuery,
            options: {
                onTouchStart(e: TouchEvent, state: LayTouchSwipeState): void;
                onTouchMove(e: TouchEvent, state: LayTouchSwipeState): void;
                onTouchEnd(e: TouchEvent, state: LayTouchSwipeState): void;
            }
        ): void;
        /**
         * 监听指定元素外部的点击
         * @param target 被监听的元素
         * @param handler 事件触发时执行的函数
         * @param options
         * @return 返回一个停止事件监听的函数
         */
        onClickOutside<
            E extends keyof LayOnClickOutsideEventMap<S> = 'pointerdown',
            S extends LayOnClickOutsideScope = Document
        >(
            target: HTMLElement,
            handler: (e: LayOnClickOutsideEventMap<S>[E]) => void,
            options?: LayOnClickOutsideOpsions<E, S>
        ): Fn;
        /**
         * 判断一个对象是否具有某个自身的属性，而不考虑继承的属性
         * @param obj 对象
         * @param key 属性名
         */
        hasOwn<O, K extends PropertyKey, V = unknown>(obj: O, key: K): obj is O & Record<K, V>;
    }
}

// modules/laydate.d.ts
declare namespace Layui {
    interface LayDateCallbackParam {
        year?: number;
        month?: number;
        date?: number;
        hours?: number;
        minutes?: number;
        seconds?: number;
    }

    interface LayDateOptions {
        /**
         * 绑定的元素
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 控件选择类型。支持以下可选值：
         * - year 年选择器，只提供年列表选择
         * - month 年月选择器，只提供年、月选择
         * - date 日期选择器（默认），可选择：年、月、日选择
         * - time 时间选择器，只提供时、分、秒选择
         * - datetime 日期时间选择器，可选择：年月日、时分秒
         * @default 'date'
         */
        type?: 'year' | 'month' | 'date' | 'time' | 'datetime';
        /**
         * 开启左右面板的范围选择，将会根据 type 类型呈现对应的范围选择面板。该属性值支持以下类型：
         * - 若为 boolean 类型，即表示是否开启范围选择，若设为 true，则开始日期与结束日期默认采用 - 连接符
         * - 若为 string 类型，则表示开启范围选择，且自定义开始日期与结束日期的连接符。如： range: '~'
         * - 若为 array 类型，即表示开启范围选，且开始日期和结束日期分别赋值在两个目标选择器中，如：
         * ```js
         * range: ['#start', '#end']
         * ```
         * @default false
         */
        range?: string | boolean | any[];
        /**
         * 是否开启日期范围选择时的区间联动标注模式，该模式必须开启 range 属性后生效。日期范围默认采用的是左右面板独立选择模式，设置该属性后，将采用左右面板联动选择模式
         * @default false
         * @since 2.8.0
         */
        rangeLinked?: boolean;
        /**
         * 是否开启全面板，即日期和时间显示在同一面板。 当 `type: 'datetime'` 且未设置 `range` 属性时生效
         * @default false
         * @since 2.8.0
         */
        fullPanel?: boolean;
        /**
         * 自定义格式化输出，默认为 yyyy-MM-dd。支持的格式如下表所示：
         * | 格式符 | 描述 |
         * | --- | --- |
         * | yyyy | 年份，输出四个字符。若不足四位，则前置补零 |
         * | y | 年份，允许一位 |
         * | MM | 月份，输出两个字符。若不足两位，则前置补零 |
         * | M | 月份，允许一位 |
         * | dd | 日期，输出两个字符。若不足两位，则前置补零 |
         * | d | 日期，允许一位 |
         * | HH | 小时，输出两个字符。若不足两位，则前面补零 |
         * | H | 小时，允许一位 |
         * | mm | 分钟，输出两个字符。若不足两位，则前面补零 |
         * | m | 分钟，允许一位 |
         * | ss | 秒数，输出两个字符。若不足两位，则前面补零 |
         * | s | 秒数，允许一位 |
         * 
         * @default 'yyyy-MM-dd'
         */
        format?: string;
        /**
         * 标注节假日及补班日，值是一个二维数组
         * @since 2.7.3
         * @since 2.9.9 支持函数类型
         * @example
         * ```
         * holidays: [
         *  // 2023 年的节假日
         *  ['2023-1-1','2023-1-2','2023-1-3'],
         *  // 2023 年的补班日
         *  ['2023-1-28','2023-1-29']
         * ]
         * ```
         */
        holidays?: string[][] | ((ymd: { year: number; month: number; date: number }, render: (val: string | string[][]) => void) => void);
        /**
         * 初始值
         * - 若为 `string` 类型，则必须和 `format` 属性格式对应
         * ```
         * value: '2018-08-18'
         * ```
         * - 若为 `date` 对象类型，则可直接赋值 `new Date()`
         * ```
         * value: new Date(1534766888000) // 参数即为：2018-08-20 20:08:08 的毫秒数
         * ```
         * - 当开启 `range` 时，初始设置日期范围值
         * 
         * ```
         * // 开始日期 - 结束日期
         * value: '1900-01-01 - 2100-01-01'
         * ```
         */
        value?: string | Date | number;
        /**
         * 是否将初始值填充在目标元素中，一般配合 value 属性使用
         * @default true
         */
        isInitValue?: boolean;
        /**
         * 开启面板左侧的快捷选择栏，
         * 其中 `value` 支持以下类型：
         * - 若为 `string` 类型，必须和 `format` 设置的格式对应
         * - 若为 `Date` 对象类型，则可通过操作 `new Date()` 来对选项值进行相应的返回计算
         * - 若为 `Array` 类型，则数组成员可填写开始日期和结束日期
         * - 若为 `Function` 类型，返回值同上 2.8.16
         * @since 2.8.0
         * @example
         * ```
         * shortcuts: [
         *   {
         *     text: "某一天", // 快捷选项文本
         *     value: '2023-05-01' // 快捷选项值， string 类型必须和 format 设置的格式对应
         *   },
         *   {
         *     text: "今天",
         *     value: Date.now() // Date 类型
         *   },
         *   {
         *     text: "明天",
         *     value: function(){
         *       var now = new Date();
         *       now.setDate(now.getDate() + 1);
         *       return now;
         *     }()
         *   },
         *   {
         *     text: "未来一年",
         *     value: function(){  // 数组类型可指定时间范围
         *       var now = new Date();
         *       now.setFullYear(now.getFullYear() + 1);
         *       return [new Date(), now]; 
         *     }
         *   },
         * ]
         * ```
         */
        shortcuts?: { text: string, value: string | Date | Date[] | (() => string | Date | Date[]) }[];
        /**
         * 设置起始周。 支持 0-6 的数字，0 即代表从周日开始
         * @default 0
         * @since 2.7.0
         */
        weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6
        /**
         * 用于是否在面板左下角显示当前结果的预览。当 `type:datetime` 时强制为 `false`。
         * @default true
         */
        isPreview?: boolean;
        /**
         * 限制可供选择的最小日期时间值。默认值： 
         * - `min: '1900-1-1'` 
         * - `max: '2099-12-31'`
         * 
         * 属性值支持以下可选类型：
         * 
         * - 若值为字符类型，则：年月日必须用 `-` 连接，且时分秒必须用 `:` 连接。 此处无需遵循 `format` 设定的格式；
         * - 若值为整数类型，且数字 ＜ 86400000，则数字代表天数，如： `min: -7` 即代表最小日期在 7 天前，正数代表若干天后；
         * - 若值为整数类型，且数字 ≥ 86400000，则数字代表毫秒数，如：`max: 4073558400000` 即代表最大日期在公元 3000年1月1日。
         * @example
         * ```
         * min: '2017-1-1 00:00:00' // 最小日期时间值
         * min: -7 // 最小日期为 7 天前
         * max: 7 // 最大日期为 7 天后
         * ```
         */
        min?: string | number;
        /**
         * 限制可供选择的最小日期时间值。默认值： 
         * - `min: '1900-1-1'` 
         * - `max: '2099-12-31'`
         * 
         * 属性值支持以下可选类型：
         * 
         * - 若值为字符类型，则：年月日必须用 `-` 连接，且时分秒必须用 `:` 连接。 此处无需遵循 `format` 设定的格式；
         * - 若值为整数类型，且数字 ＜ 86400000，则数字代表天数，如： `min: -7` 即代表最小日期在 7 天前，正数代表若干天后；
         * - 若值为整数类型，且数字 ≥ 86400000，则数字代表毫秒数，如：`max: 4073558400000` 即代表最大日期在公元 3000年1月1日。
         * @example
         * ```
         * min: '2017-1-1 00:00:00' // 最小日期时间值
         * min: -7 // 最小日期为 7 天前
         * max: 7 // 最大日期为 7 天后
         * ```
         */
        max?: string | number;
        /**
         * 自定义弹出控件的事件
         * @default 'click'
         */
        trigger?: string;
        /**
         * 是否在渲染时默认显示组件面板。组件在执行渲染时，默认需通过触发目标元素的事件，方可显示组件面板，而该属性可跳过目标元素的事件，直接显示组件面板。
         * @default false
         */
        show?: boolean;
        /**
         * 阻止关闭事件冒泡
         */
        closeStop?: string;
        /**
         * 设置组件面板的定位方式。支持以下可选值：
         * 
         * - `absolute`  绝对定位，始终吸附在绑定元素周围。
         * - `fixed` 固定定位，初始吸附在绑定元素周围，不随浏览器滚动条所左右。一般用于在固定定位的弹层中使用。
         * - `static` 静态定位，控件将直接嵌套显示在指定容器中。用法详见：[#示例](#demo-static)
         * @default 'absolute'
         */
        position?: 'abolute' | 'fixed' | 'static';
        /**
         * 设置组件面板的层叠顺序。一般用于解决与其它元素的互相被遮掩的问题。若 `position: 'static'` 时，则该属性无效。
         * @default 99999999
         */
        zIndex?: number;
        /**
         * 开启弹出日期面板时的遮罩
         * - 若为 number 类型，则表示遮罩透明度。如 `shade: 0.5`
         * - 若为 Array 类型，则可设置遮罩颜色和透明度，如：`shade: [0.5, '#000']`
         * @since 2.8.0
         */
        shade?: number | [opacity: number, bgColor: string];
        /**
         * 是否显示组件面板的底部栏
         * @default true
         */
        showBottom?: boolean;
        /**
         * 工具按钮。默认值：['clear', 'now', 'confirm']
         */
        btns?: Array<'clear' | 'now' | 'confirm'>;
        /**
         * 是否在选中目标值时即自动确认
         * 开启 range 时，该参数无效
         * @default true
         * @since 2.8.0
         */
        autoConfirm?: boolean;
        /**
         * 语言
         */
        lang?: 'cn' | 'en';
        /**
         * 主题
         * @example
         * ```
         * theme: '#FF5722' // 自定义主题
         * theme: 'molv' // 内置墨绿色主题
         * theme: 'grid' // 内置格子主题
         * theme: 'circle' // 内置圆圈高亮主题（2.8.0）
         * theme: ['grid', '#FF5722'] // 格子主题+自定义颜色，顺序无关，自定义颜色优先级更高（2.8.0）
         * theme: ['#FF5722', '#FF5723'] // 定义主色和辅色 （2.8.4）
         * ```
         */
        theme?: MaybeArray<LiteralStringUnion<'molv' | 'grid' | 'circle'>>;
        /**
         * 是否显示公历节日
         * @default false
         */
        calendar?: boolean;
        /**
         * 自定义日期标记
         * @since 2.9.9 支持函数类型
         */
        mark?: { [key: string]: string } | ((ymd: { year: number; month: number; date: number }, render: ((val: object) => void) | string) => void);
        /**
         * @internal
         */
        eventElem?: string | HTMLElement | JQuery;
        /**
         * 仅用于格式化日期显示的格式，不影响日期值
         * @param value 日期字符串
         * @since 2.9.9
         * @example
         * ```js
         * formatToDisplay: function (value) {
         *   var date = new Date(value);
         *   var displayValue = [
         *     value,
         *     date.toLocaleDateString(Intl.LocalesArgument, { weekday: 'long' })
         *   ].join(' ')；
         *   return displayValue;
         * };
         * ```
         */
        formatToDisplay?(value: string): string;
        /**
         * 设置不可选取的日期
         * @param date 当前的日期对象
         * @param type 面板类型，'start'|'end'
         * @return 返回值为 true 的日期会被禁用
         * @since 2.9.8
         */
        disabledDate?(date: Date, type: 'start' | 'end'): void | boolean;
        /**
         * 设置不可选取的时间
         * @param date 当前的日期对象
         * @param type 面板类型，'start'|'end'
         * @return 数组中指定的时间会被禁用
         * @since 2.9.8
         */
        disabledTime?(
            date: Date,
            type: 'start' | 'end'
        ): {
            hours?(): number[];
            minutes?(hour: number): number[];
            seconds?(hour: number, minute: number): number[]
        };
        /**
         * 自定义单元格内容
         * @param ymd 当前单元格日期对象
         * @param render 渲染函数
         * @param info 上下文信息
         * - type 表示面板模式
         * @since 2.9.9
         */
        cellRender?(
            ymd: { year: number; month: number; date: number },
            render: (val: string | HTMLElement | JQuery) => void,
            info: { type: 'year' | 'month' | 'date' }
        ): void;
        /**
         * 控件初始打开的回调
         * @param date 基础参数
         */
        ready?(dateParam: LayDateCallbackParam): void;
        /**
         * 日期时间被切换后的回调   this to test and elem
         * @param value 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
         * @param date 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
         * @param endDate 开启范围选择（range: true）才会返回。对象成员同上 date
         */
        change?(value: string, date: LayDateCallbackParam, endDate: LayDateCallbackParam): void;
        /**
         * 控件选择完毕后的回调
         * @param value 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
         * @param date 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
         * @param endDate 开启范围选择（range: true）才会返回。对象成员同上 date
         */
        done?(value: string, date: LayDateCallbackParam, endDate: LayDateCallbackParam): void;
        /**
         * 点击底部栏「确定」按钮时的回调函数
         * @param value 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
         * @param date 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
         * @param endDate 开启范围选择（range: true）才会返回。对象成员同上 date
         * @since 2.8.0
         */
        onConfirm?(value: string, date: LayDateCallbackParam, endDate: LayDateCallbackParam): void;
        /**
         * 点击底部栏「现在」按钮时的回调函数
         * @param value 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
         * @param date 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
         * @param endDate 开启范围选择（range: true）才会返回。对象成员同上 date
         * @since 2.8.0
         */
        onNow?(value: string, date: LayDateCallbackParam, endDate: LayDateCallbackParam): void;
        /**
         * 点击底部栏「清空」按钮时的回调函数
         * @param value 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
         * @param date 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
         * @param endDate 开启范围选择（range: true）才会返回。对象成员同上 date
         * @since 2.8.0
         */
        onClear?(value: string, date: LayDateCallbackParam, endDate: LayDateCallbackParam): void;
        /**
         * 组件面板被完全关闭（移除）后触发的回调
         * @param this 组件实例
         * @since 2.7.4
         */
        close?(this: any): void;
    }

    interface LaydateReturn {
        config: Required<LayDateOptions>;
        /**
         * 提示
         * @param content 提示内容
         */
        hint(content: string): void;
        /**
         * 重载
         * @param options 选项
         */
        reload(options?: Partial<LayDateOptions>): void;
    }

    /**
     * 日期选择器
     * @see https://layui.dev/docs/2/laydate/
     */
    interface Laydate {
        v: string;
        index: number;
        /**
         * 设置全局参数
         * @param options 
         */
        set(options?: Partial<LayDateOptions>): Laydate;
        /**
         * 主体 CSS 等待事件
         * @param callback 
         */
        ready(callback: AnyFn): Laydate;
        /**
         * 核心方法
         * @param options 基础参数
         */
        render(options: LayDateOptions): LaydateReturn;
        /**
         * 重载
         * @param id 组件渲染时定义的 id 属性值
         * @param options 基础参数
         * @since 2.8.0
         */
        reload(id: string, options?: Partial<LayDateOptions>): void;
        /**
         * 配置基础路径
         * 
         * 如果你不是采用 layui 或者普通 script 标签方式加载的 laydate.js
         * 而是采用 requirejs 等其它方式引用 laydate
         * 那么你需要设置基础路径，以便加载 `laydate.css`
         *  
         * @deprecated 2.8.0 之后不再提供独立版本
         */
        path: string;
        /**
         * 在指定的日期面板弹出一个提示层
         * @param id 组件渲染时定义的 id 属性值
         * @since 2.8.0
         */
        hint(
            id: string,
            option?: {
                /**
                 * 提示内容
                 */
                content: string;
                /**
                 * 提示层自动消失所需的毫秒数
                 */
                ms: number
            }
        ): void;
        /**
         * 获取 laydate 对应 id 的实例
         * @param id 组件渲染时定义的 id 属性值
         * @since 2.8.0
         */
        getInst(id: string): Laydate;
        /**
         * 解除实例绑定 
         * @remark 对目标元素对应的实例的完全解除，即触发元素事件时，不再执行组件渲染
         * @param id 组件渲染时定义的 id 属性值
         * @since 2.8.0
         */
        unbind(id: string): void;
        /**
         * 关闭日期面板
         * @param id 组件渲染时定义的 id 属性值。 若 id 参数不填，则关闭当前打开的日期面板
         * @since 2.7.5
         */
        close(id: string): Laydate;
        /**
         * 获取指定年月的最后一天
         * @param month month 默认为当前月
         * @param year year 默认为当前年
         */
        getEndDate(month?: number, year?: number): number;
    }
}
// modules/layedit.d.ts
declare namespace Layui {
    interface LayEditOptions {
        /**
         * 重新定制编辑器工具栏，如：`tool: ['link', 'unlink', 'face']` 。可选值：
         * - 'strong' 加粗
         * - 'italic' 斜体
         * - 'underline' 下划线
         * - 'del' 删除线
         * - '|' 分割线
         * - 'left' 左对齐
         * - 'center' 居中对齐
         * - 'right' 右对齐
         * - 'link' 超链接
         * - 'unlink' 清除链接
         * - 'face' 表情
         * - 'image' 插入图片
         * - 'help' 帮助
         */
        tool?: string[];
        /**
         * 不显示编辑器工具栏，一般用于隐藏默认配置的工具 bar
         */
        hideTool?: string[];
        /**
         * 设定编辑器的初始高度
         */
        height?: number | string;
        /**
         * 设定图片上传接口，如：uploadImage: {url: '/upload/', type: 'post'}，需要服务端返回
         * ```
         * {
         *   "code": 0, // 0表示成功，其它失败
         *   "msg": "" // 提示信息  一般上传失败后返回
         *   "data": {
         *     "src": "图片路径",
         *     "title": "图片名称" //可选
         *    }
         *  }
         * ```
         */
        uploadImage?: { url: string; type: string };
    }

    /**
     * 富文本编辑器
     * @deprecated 2.8.0 已移除
     */
    interface Layedit {
        /**
         * 用于建立编辑器的核心方法
         * @param id 实例元素（一般为 textarea）的id值
         * @param options 编辑器的可配置项
         */
        build(id: string, options?: Partial<LayEditOptions>): any;
        /**
         * 设置编辑器的全局属性
         * @param options
         */
        set(options: Partial<LayEditOptions>): Layedit;
        /**
         * 获得编辑器的内容
         * @param index 即执行 layedit.build 返回的值
         */
        getContent(index: number): string;
        /**
         *  获得编辑器的纯文本内容
         * @param index 即执行 layedit.build 返回的值
         */
        getText(index: number): string;
        /**
         *  用于同步编辑器内容到 textarea（一般用于异步提交）
         * @param index 即执行 layedit.build 返回的值
         */
        sync(index: number): void;
        /**
         * 获取编辑器选中的文本
         * @param index 即执行 layedit.build 返回的值
         */
        getSelection(index: number): string;
    }
}
// modules/layer.d.ts
declare namespace Layui {
    /**
     * 按钮回调
     * 
     * - yes 和 btn1 触发时默认不关闭弹层，需主动调用 layer.close 关闭
     * - btn2 即以后的回调触发时默认关闭，返回 false 阻止关闭
     * - 开启 btnAsync 异步按钮时，所有按钮行为一致，回调触发时默认关闭，返回 false 阻止关闭
     * @param index 当前层索引参数
     * @param layero 当前层的jqDOM
     * @param that 实例对象(2.8+)
     */
    type LayerBtnCallback = (index: number, layero: JQuery, that: any) => boolean | Promise<boolean> | JQueryDeferred<boolean> | void;
    /**
     * 点击标题栏关闭按钮的回调函数
     * @param index 当前层索引参数
     * @param layero 当前层的DOM对象
     * @param that 实例对象(2.8+)
     */
    type LayerCallbackCancel = (index: number, layero: JQuery, that: any) => boolean | void;
    /**
     * 弹层被关闭且销毁后的回调函数
     */
    type LayerCallbackEnd = () => void;
    /**
     * @param index 当前层索引参数
     * @param layero 当前层的DOM对象(2.8+)
     * @param that 实例对象(2.8+)
     */
    type LayerCallbackFull = (layero: JQuery) => void;
    /**
     * @param index 当前层索引参数
     * @param layero 当前层的DOM对象
     * @param that 实例对象(2.8+)
     */
    type LayerCallbackMin = (layero: JQuery, index: number, that: any) => void;
    /**
     * @param index 当前层索引参数
     * @param layero 当前层的DOM对象(2.8+)
     * @param that 实例对象(2.8+)
     */
    type LayerCallbackRestore = (layero: JQuery, index: number, that: any) => void;
    /**
     * 输入层
     * @param value 输入的值
     * @param index 当前层实例的索引
     * @param layero 当前层的 jQuery 对象 
     */
    type LayerCallbackPrompt = (value: string, index: number, layero: JQuery) => void;
    type layerTypeMap = {
        0: 'dialog',
        1: 'page',
        2: 'iframe',
        3: 'loading',
        4: 'tips'
    }
    type LayerType = keyof layerTypeMap;
    type LayerIndex = number;
    /**
     * 弹层选项
     * @see https://layui.dev/docs/2/layer/#api
     */
    interface LayerOptions {
        /**
         * 弹层类型。可选值有：
         * 
         * - 0 dialog 信息框（默认），同时只能存在一个层
         * - 1 page 页面层，可同时存在多个层
         * - 2 iframe 内联框架层，可同时存在多个层
         * - 3 loading 加载层，同时只能存在一个层
         * - 4 tips 贴士层，可配置同时存在多个层
         * 
         * layer 弹层由以上 5 种类型构成。不同的类型代表不同的弹出形态，layer 提供的所有的弹出方式均由此衍生
         * @default 0
         */
        type?: LayerType;
        /**
         * 标题，值为 false 时不显示
         * @example
         * title :'标题'
         * title: ['文本', 'font-size:18px;']  // 指定文本样式
         */
        title?: string | boolean | [text: string, style: string];
        /**
         * 弹层内容。 可传入的值比较灵活，支持以下使用场景：
         * 
         * - 若 `type: 1`（页面层）: 则 `content` 可传入值如下：
         * 
         * ```
         * // 普通字符
         * layer.open({
         *   type: 1, 
         *   content: '传入任意文本或 HTML'
         * });
         * // 捕获页面已存在的 DOM 元素或 jQuery 对象
         * layer.open({
         *   type: 1,
         *   content: $('#id') // 捕获层
         * });
         * ```
         * 
         * 注意： 若采用捕获层，则捕获的元素必须存放在 `<body>` 根节点下，否则可能被父级容器的相对定位所影响
         * - 若 `type: 2`（iframe 层）: 则 `content` 可传入值如下：
         * 
         * ```
         * // iframe URL
         * layer.open({
         *   type: 2, 
         *   content: 'http://cn.bing.com' // URL
         * }); 
         * // 是否屏蔽 iframe 滚动条
         * layer.open({
         *   type: 2, 
         *   // 数组第二个成员设为 no，即屏蔽 iframe 滚动条
         *   content: ['http://cn.bing.com', 'yes']
         * }); 
         * ```
         * 
         * - 若为其他弹层类型，传入普通字符即可
         * 
         * @default ''
         * 
         */
        content?: string | HTMLElement | JQuery | [iframeUrl: string, showScrollbar: 'yes' | 'no'] | [tipsContent: string, tipsReferenceEl: string | HTMLElement];
        /**
         * 弹层的主题风格。通过赋值对应的 className，实现对主题样式的定制
         * @default ''
         * @example
         * skin: 'demo-class' // 自定义
         * skin:'layui-layer-lan' // 内置深蓝主题
         * skin: 'layui-layer-molv' // 内置墨绿主题
         * skin: 'layui-layer-win10' // 内置 Windows 10 风格主题(2.8.0)
         */
        skin?: 'layui-layer-lan' | 'layui-layer-molv' | 'layui-layer-win10' | (string & {});
        /**
         * 设置弹层的宽高，其值支持以下可选类型：支持以下可选类型：
         * - 若为 `array` 类型，则可同时设置宽高
         *   - `area: ['520px', '320px']` 固定宽度和高度
         *   - `area: ['auto', '320px']` 宽度自动，高度固定
         *   - `area: ['520px', 'auto']` 宽度固定，高度自动
         * - 若为 `string` 类型，则可定义宽度和宽高均自适应：
         *   - `area: '520px'` 宽度固定，高度自适应
         *   - `area: 'auto'` 宽度和高度均自适应
         * @default 'auto'
         */
        area?: 'auto' | `${number}px` | [width: 'auto' | `${number}px`, height: 'auto' | `${number}px`];
        /**
         * 弹层的偏移坐标。 支持以下可选值：
         * - `offset: 'auto'` 坐标始终垂直水平居中
         * - `offset: '16px'` 只设置垂直坐标，水平保持居中
         * - `offset: ['16px', '16px']` 设置垂直和水平坐标
         * - `offset: 't'` 上边缘
         * - `offset: 'r'` 右边缘
         * - `offset: 'b'` 下边缘
         * - `offset: 'l'` 左边缘
         * - `offset: 'rt'` 右上角
         * - `offset: 'rb'` 右下角
         * - `offset: 'lt'` 左上角
         * - `offset: 'lb'` 左下角
         * 
         * 当设置边缘坐标时，可配合 `anim` 属性实现抽屉弹出效果
         * @default  'auto'
         */
        offset?: 'auto' | 't' | 'r' | 'b' | 'l' | 'rt' | 'rb' | 'lt' | 'lb' | `${number}px` | [y: `${number}px`, x: `${number}px`];
        /**
         * 提示图标。信息框和加载层的私有参数
         * - 当 type 为 0(信息框)可以传入 0-6 启用图标
         * - 当 type 为 3(加载层)可以传入 0-2 启用图标
         * @default -1  //不显示图标
         * @example
         * type:0,icon: 0  //0(❕),1(✔),2(❌),3(❔),4(🔒),5(😭),6(😀)， 其他数字同 0
         * type:3,icon:0  //0(3个点),1（慢圈）,2(慢快圈)，其他数字同0
         */
        icon?: number;
        /**
         * 自定义按钮。
         * 
         * 信息框模式时(type:0)，btn 默认是一个确认按钮，其它层类型则默认不显示，加载层和tips层则无效。
         * 按钮可无限数量，每一个按钮均会按照数组顺序生成对应的回调函数。
         * 
         * 2.8.0- 按钮1 的回调为 `yes`，2.8.0+ `yes` 和 `btn1` 等效，推荐非 confirm 使用 btn1
         * 
         * @default '确认'
         * @example
         * ```js
         * // eg1       
         * layer.confirm('询问框？', {
         *   btn: ['按钮1', '按钮2', '按钮3']
         * });
         * // eg2
         * layer.open({
         *   content: 'test',
         *   btn: ['按钮1', '按钮2', '按钮3'],
         *   // 按钮1 的回调
         *   btn1: function(index, layero, that){},
         *   btn2: function(index, layero, that){
         *     // 按钮2 的回调
         *     // return false // 点击该按钮后不关闭弹层
         *   },
         *   btn3: function(index, layero, that){
         *     // 按钮3 的回调
         *     // return false // 点击该按钮后不关闭弹层
         *   }
         * });
         * ```
         */
        btn?: string | string[];
        /**
         * 按钮水平对其方式
         * - `btnAlign: 'l'` 按钮左对齐
         * - `btnAlign: 'c'` 按钮水平居中对齐
         * - `btnAlign: 'r'` 按钮右对齐。默认值，无需设置
         * @default 'r'
         */
        btnAlign?: 'l' | 'c' | 'r';
        /**
         * 是否开启标题栏的关闭图标，或设置关闭图标风格
         * - `closeBtn: 0` 不显示关闭图标
         * - `closeBtn: 1` 关闭图标默认风格 X
         * - `closeBtn: 2` 关闭图标风格二 O+X
         * 
         * `title: false` 时强制为 2
         *  @default 1
         */
        closeBtn?: 0 | 1 | 2 | boolean;
        /**
         * 弹层的遮罩
         * @default 0.3
         * @example
         * shade: 0.3 // 设置遮罩深色背景的透明度
         * shade: 0  // 不显示遮罩
         * shade: [0.8, '#393D49'] // 设置透明度和遮罩颜色
         */
        shade?: boolean | number | [opacity: number, bgColor: string];
        /**
         * 是否点击遮罩时关闭弹层，当遮罩存在时有效
         * @default false
         */
        shadeClose?: boolean;
        /**
         * 弹层自动关闭所需的毫秒数
         * 
         * 提示框、加载层、Tips 层三种弹出模式默认开启
         * @default 0
         * @example
         * time: 5000 // 即代表5秒后自动关闭
         * time: -1 // 不自动关闭弹层
         */
        time?: number;
        /**
         * 弹层的唯一索引值
         * 
         * 一般用于页面层或 iframe 层弹出时的状态识别，设置该属性可防止弹层的重复弹出
         * @default ''
         */
        id?: string;
        /**
         * 弹层的出场动画。支持以下可选值：
         * 
         * - `anim: 0` 平滑放大。默认
         * - `anim: 1` 从上掉落
         * - `anim: 2` 从最底部往上滑入
         * - `anim: 3` 从左滑入
         * - `anim: 4` 从左翻滚
         * - `anim: 5` 渐显
         * - `anim: 6` 抖动
         * 
         * 边缘抽屉动画,一般配合 `offset` 属性实现边缘弹出(2.8+)
         * 
         * - `anim: 'slideDown'` 从上边缘往下
         * - `anim: 'slideLeft'` 从右边缘往左
         * - `anim: 'slideUp'` 从下边缘往上
         * - `anim: 'slideRight'`  从左边缘往右
         * @default 0
         */
        anim?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 'slideDown' | 'slideLeft' | 'slideRight' | 'slideUp' | (string & {});
        /**
         * 是否开启弹层关闭时的动画
         * @default true
         */
        isOutAnim?: boolean;
        /**
         * 是否开启标题栏的最大化和最小化图标
         * 
         * 该参数值对 `type:1` 和 `type:2` 有效
         * @default false
         */
        maxmin?: boolean;
        /**
         * 弹层是否固定定位，即始终显示在页面可视区域
         * @default true
         */
        fixed?: boolean;
        /**
         * 是否允许拖拽弹层右下角拉伸尺寸，该参数对 loading(type:3)、tips(type:4) 层无效
         * @default true
         */
        resize?: boolean;
        /**
         * 打开弹层时，是否允许浏览器出现滚动条
         * @default true
         */
        scrollbar?: boolean;
        /**
         * 弹层的最大宽度。当 `area` 属性设置宽度自适应时有效
         * @default 360
         */
        maxWidth?: number;
        /**
         * 弹层的最大高度。当 `area` 属性设置宽度自适应时有效
         */
        maxHeight?: number;
        /**
         * 弹层的初始层叠顺序值
         * @default 19891014
         */
        zIndex?: number;
        /**
         * 绑定弹层的拖拽元素。 默认为触发弹层的标题栏进行拖拽。也可以设置 `move: false` 禁止拖拽
         * @default '.layui-layer-title'
         */
        move?: string | boolean | HTMLElement;
        /**
         * 是否允许拖拽到窗口外
         * @default false
         */
        moveOut?: boolean;
        /**
         * 设置 tips 层的吸附位置和背景色，tips 层的私有属性
         * 
         * - 若为 `number` 类型，则支持 `1-4` 的可选值，分别代表*上右下左*的吸附位置。如： `tips: 1`
         * - 若为 `array` 类型，则支持设置吸附位置和背景色，如：
         * 
         * ```js
         * tips: [1, '#000'] // 吸附在触发元素上方的深色贴士层
         * ```
         * @default 2 
         * @example
         * layui.layer.tips('提示内容','#abc',{tips:1})
         * layui.layer.tips('提示内容','#abc',{tips:[1, 'red']})  // 指定颜色
         * layui.layer.tips('提示内容','#abc',{tips:[1, '#f00']})
         * layui.layer.tips('提示内容','#abc',{tips:[1, 'rgb(255,0,0)']})
         */
        tips?: 1 | 2 | 3 | 4 | [placement: 1 | 2 | 3 | 4, bgColor: string];
        /**
         * 是否允许同时存在多个 tips 层，即不销毁上一个 tips
         * @default false
         */
        tipsMore?: boolean;
        /**
         * 点击标题栏的最小化时，是否从页面左下角堆叠排列
         * @default true
         * @since 2.6
         */
        minStack?: boolean;
        /**
         * 是否移除弹层触发元素的焦点，避免按回车键时重复弹出
         * @default true
         * @since 2.8.0
         */
        removeFocus?: boolean;
        /**
         * 关闭弹层时，是否将弹层设置为隐藏状态（而非移除），当再次打开，直接显示原来的弹层。
         * 
         * 若设为 true，则必须设置 id 属性
         * @default false
         * @since 2.8.3
         */
        hideOnClose?: boolean;
        /**
         * 异步按钮。开启之后，除 `layer.prompt` 的按钮外，
         * 按钮回调的返回值将支持 `boolean | Promise<boolean> | JQueryDeferred<boolean>` 类型，
         * 返回 `false` 或 `Promise.reject` 时阻止关闭。
         * 
         * 注意，此时 `yes` 和 `btn1`(两者等效) 回调的默认行为发生了变化，即由触发时不关闭弹层变为关闭弹层
         * @default false
         * @since 2.9.13
         */
        btnAsync?: boolean;
        /**
         * 确定按钮回调方法，yes 和 btn1 等效
         * 
         * - yes 和 btn1 触发时默认不关闭弹层，需主动调用 layer.close 关闭
         * - btn2 即以后的回调触发时默认关闭，返回 false 阻止关闭
         * - 开启 btnAsync 异步按钮时，所有按钮行为一致，回调触发时默认关闭，返回 false 阻止关闭
         */
        yes?: LayerBtnCallback;
        /**
         * 确定按钮回调方法，yes 和 btn1 等效
         * 
         * - yes 和 btn1 触发时默认不关闭弹层，需主动调用 layer.close 关闭
         * - btn2 即以后的回调触发时默认关闭，返回 false 阻止关闭
         * - 开启 btnAsync 异步按钮时，所有按钮行为一致，回调触发时默认关闭，返回 false 阻止关闭
         */
        btn1?: LayerBtnCallback;
        /**
         * 自定义按钮回调
         * 
         * - yes 和 btn1 触发时默认不关闭弹层，需主动调用 layer.close 关闭
         * - btn2 即以后的回调触发时默认关闭，返回 false 阻止关闭
         * - 开启 btnAsync 异步按钮时，所有按钮行为一致，回调触发时默认关闭，返回 false 阻止关闭
         */
        btn2?: LayerBtnCallback;
        /**
         * 自定义按钮回调
         * 
         * - yes 和 btn1 触发时默认不关闭弹层，需主动调用 layer.close 关闭
         * - btn2 即以后的回调触发时默认关闭，返回 false 阻止关闭
         * - 开启 btnAsync 异步按钮时，所有按钮行为一致，回调触发时默认关闭，返回 false 阻止关闭
         */
        btn3?: LayerBtnCallback;
        /**
         * 自定义按钮回调
         */
        btn4?: LayerBtnCallback;
        /**
         * 自定义按钮回调
         */
        btn5?: LayerBtnCallback;
        /**
         * 自定义按钮回调
         */
        btn6?: LayerBtnCallback;
        /**
         * 自定义按钮回调
         */
        btn7?: LayerBtnCallback;
        /**
         * 自定义按钮回调
         */
        btn8?: LayerBtnCallback;
        /**
         * 自定义按钮回调
         */
        btn9?: LayerBtnCallback;
        /**
         * 打开弹层成功后的回调函数
         * @param layero 弹层的最外层元素的 jQuery 对象
         * @param index 弹层的索引值
         * @param that 弹层内部原型链中的 this, 当前弹层实例对象（2.8.0）
         */
        success?(layero: JQuery, index: number, that: any): void;
        /**
         * 右上角关闭按钮触发的回调
         */
        cancel?: LayerCallbackCancel;
        /**
         * 层销毁后触发的回调
         */
        end?: LayerCallbackEnd;
        /**
         * 最大化后触发的回调
         */
        full?: LayerCallbackFull;
        /**
         * 最小化后触发的回调
         */
        min?: LayerCallbackMin;
        /**
         * 还原后触发的回调
         */
        restore?: LayerCallbackRestore;
        /**
         * 拖动完毕后的回调方法
         * @default null
         */
        moveEnd?(layero: JQuery): any;
        /**
         * 监听窗口拉伸动作
         * @default null
         */
        resizing?(layero: JQuery): any;
        /**
         * 弹层被关闭前的回调函数。如果返回 false 或者 Promise.reject，将会取消关闭操作
         * @param layero 弹层元素的 jQuery 对象
         * @param index 弹层索引
         * @param that 实例对象
         * @since 2.9.11
         */
        beforeEnd?(layero: JQuery, index: number, that: any): boolean | JQueryDeferred<boolean> | Promise<boolean> | void;
        /**
         * 只提供默认的一种拖拽风格
         * 
         * 固定 1，不能修改
         * @internal
         */
        readonly moveType?: number;
        /**
         * @deprecated 2.7
         * @see {@link LayerOptions.fixed|fixed}
         */
        fix?: boolean;
        /**
         * @deprecated 2.7
         * @see {@link LayerOptions.anim|anim}
         */
        shift?: number;
    }

    /**
     * 配置layer层的基础参数
     * @example
     * ```js
     * layui.layer.config({
     *    anim: 1, // 默认动画风格
     *    skin: 'layui-layer-molv', // 默认皮肤
     *    extend: 'myskin/style.css', // 样式位置
     *    //...
     * });
     * ```
     */
    interface LayerConfigOptions extends LayerOptions {
        /**
         * layer.js 所在的目录，可以是绝对目录，也可以是相对目录
         * 
         * 仅用于 layer 独立版本
         * @example
         * path: '/res/layer/'
         */
        path?: string;
        /**
         * 要加载的拓展css皮肤
         * 
         * - 如果是独立版的 layer，则将 myskin 存放在 ./skin 目录下
         * - 如果是 layui 中使用 layer，则将 myskin 存放在 ./css/modules/layer 目录下
         * @example
         * extend: 'myskin/style.css'
         */
        extend?: string[] | string;
    }

    interface LayerPromptOptions extends Omit<LayerOptions, 'type' | 'yes' | 'content' | 'btn' | 'skin'> {
        /**
         * 输入框类型。支持以下可选值：
         * - 0 文本输入框
         * - 1 密令输入框
         * - 2 多行文本输入框
         * @default 0
         */
        formType?: 0 | 1 | 2;
        /**
         * 输入框初始值
         * @default ''
         */
        value?: string;
        /**
         * 可输入的最大字符长度
         * @default 500
         */
        maxlength?: number;
        /**
         * 输入框内容为空时的占位符
         * @since 2.8.0
         */
        placeholder?: string;
    }

    interface LayerTabOptions extends Omit<LayerOptions, 'type' | 'skin' | 'title' | 'content'> {
        tab: Array<{ title: string; content: string }>;
    }

    interface LayerPhotosData {
        /**
         * 相册标题
         */
        title?: string;
        /**
         * 相册id
         * @example
         * id: 123
         */
        id?: number;
        /**
         * 初始显示的图片序号
         * @default 0
         */
        start?: number;
        /**
         * 相册包含的图片，数组格式
         * @example 
         * ```js
         * "data": [{
         *     "alt": "图片名",
         *     "pid": 666, //图片id
         *     "src": "", //原图地址
         *     "thumb": "" //缩略图地址
         * }]
         * ```
         */
        data?: Array<LayerPhotosDataItem>;
    }

    interface LayerPhotosDataItem {
        /**
         * 图片名
         */
        alt?: string;
        /**
         * 图片id
         */
        pid?: number;
        /**
         * 原图地址
         */
        src?: string;
        /**
         * 缩略图地址
         * @deprecated 已弃用，未实现的选项
         */
        thumb?: string;
    }

    interface LayerPhotosOptions extends Omit<LayerOptions, 'type' | 'id' | 'area' | 'title' | 'closeBtn' | 'shade' | 'move' | 'moveType' | 'moveOut' | 'scrollbar' | 'isOutAnim' | 'skin' | 'end'> {
        /**
         * 图片层的数据源
         * 
         * JSON 对象或者选择器，元素的 jQUery 对象，用于构造 img
         */
        photos?: LayerPhotosData | string | JQuery;
        /**
         * 图片层切换后的回调函数
         * @param pic 当前图片的一些信息
         * @param layero 当前元素
         */
        tab?(pic: LayerPhotosDataItem, layero: JQuery): void;
        /**
         * 是否隐藏图片底部栏
         * @default false
         * @since 2.8.0
         * @deprecated 2.8.16 已移除，请使用 {@link LayerPhotosOptions.footer|footer}
         */
        hideFooter?: boolean;
        /**
         * 是否显示顶部工具栏
         * @default true
         * @since 2.8.16
         */
        toolbar?: boolean;
        /**
         * 是否隐藏底部栏
         * @default false
         * @since 2.8.16
         */
        footer?: boolean;
    }

    /**
     * 弹层组件
     * @see https://layui.dev/docs/2/layer/
     */
    interface Layer {
        ie: boolean;
        index: number;
        path: string;
        v: string;
        zIndex: number;
        /**
         * 初始化全局配置
         * @param options 基础参数
         * @param fn
         */
        config(options: LayerConfigOptions, fn?: any): void;
        /**
         * 执行初始化，就绪后执行回调参数
         * 
         * 初始化就绪 (CSS完成的回调)，当你在页面一打开就要执行弹层时可放入回调中
         * @param callback 就绪后的回调
         */
        ready(callback: () => void): void;
        /**
         * 原始核心方法
         * @param options 基础参数选项
         * @return 返回弹层索引
         * @see https://layui.dev/docs/2/layer/#open
         */
        open(options?: LayerOptions): LayerIndex;
        /**
         * 普通信息框
         * @param content 内容
         * @param options 基础属性选项
         * @param yes 点击确定后的回调
         * @see https://layui.dev/docs/2/layer/#alert
         */
        alert(content: any, options?: Omit<LayerOptions, 'type' | 'yes' | 'content'>, yes?: LayerBtnCallback): LayerIndex;
        /**
         * 普通信息框
         * @param content 内容
         * @param yes 点击确定后的回调
         * @see https://layui.dev/docs/2/layer/#alert
         */
        alert(content: any, yes?: LayerBtnCallback): LayerIndex;
        /**
         * 询问框
         * @param content 提示内容
         * @param options 基础属性选项
         * @param yes 确认回调
         * @param cancel 点击第二个按钮（默认「取消」）后的回调函数
         * @see https://layui.dev/docs/2/layer/#confirm
         * @example 
         * ```js
         * layer.confirm('is not?', {
         *    icon: 3,
         *    title: '提示',
         *    cancel: (index, layero) => {
         *        console.log("点击了右上角关闭");
         *        //return false  //点击右上角叉号不能关闭
         *    }
         * }, (index, layero) => {
         *    console.log("点击了下边的第一个按钮'确定'");
         *    layer.close(index);//需要手动关闭
         * }, (index, layero) => {
         *    console.log("点击了下边的第二个按钮'取消'");
         *    //return false // 点击取消不能关闭
         * });
         * ```
         */
        confirm(content: any, options?: Omit<LayerOptions, 'type'>, yes?: LayerBtnCallback, cancel?: LayerCallbackCancel): LayerIndex;
        /**
         * 询问框
         * @param content 提示内容
         * @param yes 确认回调
         * @param cancel 点击第二个按钮（默认「取消」）后的回调函数
         * @see https://layui.dev/docs/2/layer/#confirm
         * @example 
         * ```js
         * layer.confirm('is not?', (index,layero) => {
         *   // do something
         *    layer.close(index);
         * },(index,layero)=>{
         *   return false // 返回false则取消关闭
         * });
         * ```
         */
        confirm(content: any, yes: LayerBtnCallback, cancel?: LayerCallbackCancel): LayerIndex;
        /**
         * 提示框
         * @param content 提示内容
         * @param options 基础属性选项
         * @param end 关闭后的回调
         * @see https://layui.dev/docs/2/layer/#msg
         */
        msg(content: string, options?: Omit<LayerOptions, 'type' | 'skin' | 'title' | 'resize' | 'end'>, end?: LayerCallbackEnd): LayerIndex;
        /**
         * 提示框
         * @param content 提示内容
         * @param end 关闭后的回调
         * @see https://layui.dev/docs/2/layer/#msg
         */
        msg(content: string, end?: LayerCallbackEnd): LayerIndex;
        /**
         * 加载层
         * @param icon 加载图标风格，支持 0-2 可选值，默认0
         * @param options 基础属性选项
         * @see https://layui.dev/docs/2/layer/#load
         */
        load(icon?: 0 | 1 | 2, options?: Omit<LayerOptions, 'type' | 'resize'>): LayerIndex;
        /**
         * 加载层
         * @param options 基础属性选项
         * @see https://layui.dev/docs/2/layer/#load
         */
        load(options?: Omit<LayerOptions, 'type' | 'resize'>): LayerIndex;
        /**
         * tips 层
         * @param content 显示的内容
         * @param referenceEl 吸附的目标元素选择器或对象
         * @param options 基础属性选项
         * @see https://layui.dev/docs/2/layer/#tips
         */
        tips(content?: string, referenceEl?: string | HTMLElement | JQuery, options?: Omit<LayerOptions, 'type' | 'content' | 'closeBtn' | 'resize'>): LayerIndex;
        /**
         * 输入层
         * @param options 参数
         * @param yes 点击确定后的回调函数，用该参数而不是用 options 的 yes
         * @see https://layui.dev/docs/2/layer/#prompt
         * @example 
         * ```js
         * layui.layer.prompt({
         *    formType: 2, // 输入框类型，支持0（文本）默认1（密码）2（多行文本）
         *    value: '初始值', // 初始时的值，默认空字符
         *    maxlength: 140, // 可输入文本的最大长度，默认500
         *    title: '请输入值',
         *    area: ['800px', '350px'], // 自定义文本域宽高
         *  },(value, index, elem) => {
         *     layui.layer.alert(value); // 得到value
         *     layui.layer.close(index);
         *   },
         * );
         * ```
         */
        prompt(options?: LayerPromptOptions, yes?: LayerCallbackPrompt): LayerIndex;
        /**
         * 输入层
         * @param yes 点击确定的回调
         * @see https://layui.dev/docs/2/layer/#prompt
         * @example 
         * ```js
         * layer.prompt(function(value, index, elem){
         *   alert(value); // 得到 value
         *   layer.close(index); // 关闭层
         * });
         * ```
         */
        prompt(yes?: LayerCallbackPrompt): LayerIndex;
        /**
         * 标签层
         * @param options 
         * @see https://layui.dev/docs/2/layer/#tab
         */
        tab(options: LayerTabOptions): LayerIndex;
        /**
         * 相册层
         * @param options 属性选项
         * @see https://layui.dev/docs/2/layer/#photos
         */
        photos(options: LayerPhotosOptions): LayerIndex;
        /**
         * 关闭指定层
         * @param index 层索引
         * @param callback 关闭后的回调
         */
        close(index: number, callback?: () => any): void;
        /**
         * 关闭所有层
         * @param type 关闭的弹层类型，不传则关闭全部
         * @param callback 关闭所有层后执行回调
         */
        closeAll(type?: layerTypeMap[keyof layerTypeMap], callback?: () => any): void;
        /**
         * 关闭所有层
         * @param callback  关闭所有层后执行回调
         */
        closeAll(callback: () => any): void;
        /**
         * 关闭最近一次打开的层
         * @param type 弹层的类型
         * @param callback 关闭后执行的回调(2.9.0)
         * @since 2.8.0
         */
        closeLast(type?: layerTypeMap[keyof layerTypeMap] | Array<layerTypeMap[keyof layerTypeMap]>, callback?: AnyFn): void;
        /**
         * 重新定义层的样式
         * @param index 打开弹层时返回的唯一索引
         * @param options 要设置的 css 属性
         * @param limit 影响宽度和高度
         */
        style(index: number, options: { [key: string]: string | number }, limit?: boolean): void;
        /**
         * 设置弹层的标题
         * @param title 新标题
         * @param index 打开弹层时返回的唯一索引
         */
        title(title: string, index: number): void;
        /**
         * 获取 iframe 页中的元素
         * @param selector iframe 子页面的选择器或元素对象
         * @param index 打开弹层时返回的唯一索引
         */
        getChildFrame(selector: string | Element | JQuery, index: number): JQuery;
        /**
         * 在 iframe 页中获取弹层索引
         * @param windowName 即 window.name
         */
        getFrameIndex(windowName: string): number;
        /**
         * 设置 iframe 层高度自适应
         * @param index 打开弹层时返回的唯一索引
         */
        iframeAuto(index: number): void;
        /**
         * 重新设置 iframe 层 URL
         * @param index 层索引
         * @param url URL 地址
         */
        iframeSrc(index: number, url: string): void;
        /**
         * 置顶弹层
         * @param layero  layer 最外层容器的元素对象，一般可通过各个回调函数返回的参数获取
         */
        setTop(layero: JQuery): void;
        /**
         * 设置弹层最大化
         * @param index 层索引
         */
        full(index: number): void;
        /**
         * 设置弹层最小化
         * @param index 层索引
         */
        min(index: number): void;
        /**
         * 弹层最大化或最小化状态时，还原弹层
         * @param index 层索引
         */
        restore(index: number): void;
    }
}

// modules/laypage.d.ts
declare namespace Layui {
    interface LayPageOptions {
        /**
         * 指向存放分页的容器，值可以是容器 ID、DOM 对象
         * - elem: 'id'   注意：这里不能加 # 号
         * - elem: document.getElementById('id')
         */
        elem: string | HTMLElement;
        /**
         * 数据总数。一般通过服务端得到
         */
        count?: number;
        /**
         * 每页显示的条数
         * @default 10
         */
        limit?: number;
        /**
         * 每页条数的选择项。如果 layout 参数开启了 limit， 
         * 则会出现每页条数的select选择框。
         * 默认：[10, 20, 30, 40, 50]
         */
        limits?: number[];
        /**
         * 初始化当前页码
         * @default 1
         */
        curr?: number | string;
        /**
         * 连续出现的页码个数
         * @default 5
         */
        groups?: number;
        /**
         * 自定义“上一页”的内容，支持传入普通文本和 HTML
         * @default '上一页''
         */
        prev?: string | boolean;

        /**
         * 自定义“下一页”的内容，支持传入普通文本和 HTML
         * @default '下一页''
         */
        next?: string | boolean;
        /**
         * 自定义“首页”的内容
         * @default 首页
         */
        first?: string | boolean;
        /**
         * 自定义“尾页”的内容
         */
        last?: string | boolean;
        /**
         * 自定义分页功能区域排版。可自由排列，可选值有：
         * - count 数据总数区域
         * - prev 上一页区域
         * - page 分页区域
         * - next 下一页区
         * - limit 条目选项区域
         * - refresh 页面刷新区
         * - skip 快捷跳页区
         */
        layout?: Array<'count' | 'prev' | 'page' | 'next' | 'limit' | 'refresh' | 'skip'>;
        /**
         * 自定义主题。支持传入：颜色值，或任意普通字符
         * - theme: '#c00'
         * - theme: 'xxx' //将会生成 class="layui-laypage-xxx" 的 CSS 类，以便自定义主题
         */
        theme?: string;
        /**
         * 设置 hash 名称。设置该属性后，点击分页将会自动对当前 url 追加：`#{hash}={curr}`，从而在页面刷新时初始化当前页码
         */
        hash?: string | boolean;
        /**
         * 自定义条目模板
         * @example
         * ```js
         * limitTemplet: function(item) {
         *   return item + ' / page';
         * }
         * ```
         * 
         * @since 2.8.18
         */
        limitTemplet?: (item: string) => string;
        /**
         * 自定义跳页区域文本
         * @example
         * ```js
         * skipText: ['Go to', '', 'Confirm']
         * ```
         * @since 2.8.18
         */
        skipText?: string[];
        /**
         * 自定义总数区域文本
         * @example
         * ```js
         * countText: ['Total ','']
         * ```
         * @since 2.9.1
         */
        countText?: string[];
        /**
         * 切换分页的回调
         * @param obj 当前分页的所有选项值
         * @param first 是否首次渲染，一般用于初始加载的判断
         */
        jump?(obj: LayPageOptionsForCallback, first: boolean): void;
    }

    interface LayPageOptionsForCallback extends Omit<Required<LayPageOptions>, 'count' | 'curr' | 'limit' | 'groups'> {
        /**
         * 数据总数。一般通过服务端得到
         */
        count: number;
        /**
         * 起始页。一般用于刷新类型的跳页以及 HASH 跳页
         */
        curr: number;
        /**
         * 每页条数的选择项。如果 layout 参数开启了 limit，默认：[10, 20, 30, 40, 50]
         * 则会出现每页条数的 select 选择框
         */
        limit: number;
        /**
         *  自动计算出的总分页数
         */
        pages: number;
        /**
         * 连续出现的页码个数 默认：5
         */
        groups: number;
    }

    /**
     * 分页
     * @see https://layui.dev/docs/2/laypage/
     */
    interface Laypage {
        index: number;
        on<K extends keyof HTMLElementEventMap>(
            elem: HTMLElement | null,
            event: K,
            listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
        ): void;
        on(elem: HTMLElement | null, event: string, listener: (this: HTMLElement, ...args: any) => any): void;
        /**
         * laypage 组件渲染，核心方法
         * @param options 
         */
        render(options: LayPageOptions): any;
    }
}
// modules/laytpl.d.ts
declare namespace Layui {
    interface LayTplOptions {
        /**
         * 起始符号
         */
        open?: string;
        /**
         * 结束符号
         */
        close?: string
    }

    interface LayTplReturn {
        tpl: string;
        /**
         * 执行解析,不常用，推荐 render
         * @param tpl  模板串
         * @param data  数据
         */
        parse(tpl: string, data: object): string;
        /**
         * 执行解析
         * @param data 数据
         * @param callback  解析后的回调，即可通过回调中参数也可通过 render 返回值获取解析后结果串
         */
        render(data: Record<string, any>, callback?: (str: string) => any): string;
    }

    /**
     * 模板引擎
     * @see https://layui.dev/docs/2/laytpl/
     */
    interface Laytpl {
        /**
         * @param tpl 模板原始字符
         * @param options 属性配置项，重新定义界定符，局部配置
         */
        (tpl: string, options?: LayTplOptions): LayTplReturn;
        /**
         * 重新定义界定符
         * 如果模版默认的 {{ }} 界定符符与你的其它模板（一般是服务端模板）存在冲突，你也可以重新定义界定符
         * @param option 例如：`{open: '<%', close: '%>'}`
         */
        config(option?: LayTplOptions): void;
    }
}
// modules/rate.d.ts
declare namespace Layui {
    interface RateOptions {
        /**
         * 绑定元素选择器或 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 评分的最大长度值，即星星的数量
         * @default 5
         */
        length?: number;
        /**
         * 评分的初始值
         * @default 0
         */
        value?: number;
        /**
         * 主题色
         * @default '#FFB800'
         */
        theme?: string;
        /**
         * 设定组件是否可以选择半星
         * @default false
         */
        half?: boolean;
        /**
         * 是否显示评分对应的内容
         * @default false
         */
        text?: boolean;
        /**
         * 是否只读，即只用于展示而不可点
         * @default false
         */
        readonly?: boolean;
        /**
         * 自定义文本的回调
         * @param value 选中的评分值
         */
        setText?(value: number): void;
        /**
         * 选择评分后的回调函数
         * @param value 选中的评分值
         */
        choose?(value: number): void;
    }

    /**
     * 评分
     * @see https://layui.dev/docs/2/rate/
     */
    interface Rate {
        config: Record<string, any>;
        index: number;
        /**
         * @param event
         * @param callback
         */
        on(event: string, callback: (obj: any) => any): any;
        /**
         * 核心渲染方法
         * @param option 基础选项
         */
        render(option: RateOptions): Rate;
        /**
         * 设置全局参数
         * @param options 基础参数
         */
        set(options?: RateOptions): Rate;
    }
}
// modules/slider.d.ts
declare namespace Layui {
    interface SliderOptions {
        /**
         * 绑定元素选择器或 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 滑块类型
         * @default 'default'
         */
        type?: 'default' | 'vertical';
        /**
         * 滑动条最小值
         * @default 0
         */
        min?: number;
        /**
         * 滑动条最大值
         * @default 100
         */
        max?: number;
        /**
         * 是否开启滑块的范围拖拽，若设为 true，则滑块将出现两个可拖拽的环
         * @default false
         */
        range?: boolean;
        /**
         * 滑块初始值。
         * - 默认可直接设置数值，如： value: 50
         * - 若滑块开启 range: true 区间选择，则值为数组，异表示开始和结尾的区间，如： value: [30, 60]
         */
        value?: MaybeArray<number>;
        /**
         * 拖动的步长
         * @default 1
         */
        step?: number;
        /**
         * 是否显示间断点
         * @default false
         */
        showstep?: boolean;
        /**
         * 是否显示文字提示
         * @default true
         */
        tips?: boolean;
        /**
         * 是否显示滑块的数字输入框。 注：若设置 range: true 则该属性强制无效。
         */
        input?: boolean;
        /**
         * 滑动条高度，需配合 `type:"vertical"` 参数使用
         * @default 200
         */
        height?: number;
        /**
         * 是否将滑块禁用拖拽
         * @default false
         */
        disabled?: boolean;
        /**
         * 主题颜色
         */
        theme?: string;
        /**
         * 是否始终显示提示文本
         * @since 2.9.6
         */
        tipsAlways?: boolean;
        /**
         * 自定义提示文本
         * @param value 滑块为范围模式是数组，否则是数字
         */
        setTips?(value: MaybeArray<number>): string;
        /**
         * 数值改变的回调
         * @param value 滑块为范围模式是数组，否则是数字
         */
        change?(value: MaybeArray<number>): void;
        /**
         * 滑块拖拽完毕的回调函数，滑块拖动过程中不会触发
         * @param value 滑块为范围模式是数组，否则是数字
         * @since 2.8.0
         */
        done?(value: MaybeArray<number>): void;
    }

    /**
     * 滑块
     * @see https://layui.dev/docs/2/slider/
     */
    interface Slider {
        config: Record<string, any>;
        index: number;
        /**
         * 设置滑块的全局参数
         * @param options 基础参数
         */
        set(options?: Partial<SliderOptions>): Slider;
        on(event: string, callback: (obj: any) => any): any;
        /**
         * 核心方法
         * @param option 参数
         * @since 2.8.0+ 除 elem 属性外，其他基础属性也可以直接写在元素的 `lay-options="{}"` 属性中
         */
        render(option: SliderOptions): {
            config: Required<SliderOptions>;
            /**
             * 改变指定滑块实例的数值
             * @param value 要设置的滑块数值
             * @param index 滑块所在的区间开始值或结尾值的索引，开始值：0 ; 结尾值：1
             */
            setValue(value: any, index?: number): void;
        };
    }
}
// modules/table.d.ts
declare namespace Layui {
    interface TableColumnOptions {
        /**
         * 设置字段名。通常是表格数据列的唯一标识
         * 
         * 若未设置则用索引值代替，但不建议这么做
         */
        field?: string;
        /**
         * 设定标题名称
         */
        title?: string;
        /**
         * 设置列的字段标题。该属性在筛选列和导出场景中优先级高于 {@link TableColumnOptions.title|title} 属性
         * @since 2.8.0
         */
        fieldTitle?: string;
        /**
         * 设置列宽。若不填写，则自动分配；若填写，则支持值为：数字、百分比。如：
         * - width: 200
         * - width: '30%'
         */
        width?: string | number;
        /**
         * 设置当前列的最小宽度，一般用于列宽自动分配的情况。其优先级高于基础属性中的 {@link TableOptions.cellMinWidth|cellMinWidth} 
         * @default 60
         */
        minWidth?: number;
        /**
         * 设置当前列的最大宽度。其优先级高于基础属性中的 {@link TableOptions.cellMaxWidth|cellMaxWidth}
         * @since 2.8.0
         */
        maxWidth?: number;
        /**
         * 设置单元格被展开后的宽度。若设置的值的小于当前列宽，则展开后的列宽保持不变。
         * 
         * 注：当 expandedMode 属性为默认值时有效。
         * @since 2.8.15
         */
        expandedWidth?: number;
        /**
         * 设置当前表头单元格展开方式，优先级高于 {@link TableOptions.cellExpandedMode|cellExpandedMode}
         * 
         * 默认多行展开
         * @since 2.8.17
         */
        expandedMode?: 'tips';
        /**
         * 设定列类型
         * - normal 常规列，无需设定
         * - checkbox 复选框列
         * - radio 单选框列
         * - numbers 序号列
         * - space 空列
         * @default 'normal''
         */
        type?: 'normal' | 'checkbox' | 'radio' | 'space' | 'numbers';
        /**
         * 设置全选状态，当列设置 type: 'checkbox' 时才有效
         * 
         * 如果设置 true，则表示复选框默认全部选中
         * @default false
         */
        LAY_CHECKED?: boolean;
        /**
         * 设置固定列，即不跟随 table 横向滚动条而滚动。可选值有：
         * - left 固定在左
         * - right 固定在右
         * 
         * 注意：如果是固定在左，该列必须放在表头最前面；
         * 如果是固定在右，该列必须放在表头最后面;
         * 多级表头设置固定列时，父列和子列均需设置;
         * 非 right' 就是 'left'
         */
        fixed?: 'left' | 'right';
        /**
         * 设置列的自定义模板，核心属性。模板遵循 laytpl 组件语法。
         * 
         * templet 有三种使用方式
         * - 设置模版选择器 `templet: '#id'`
         * - 设置模板内容 `templet: '<div>test</div>'`
         * - 设置模板函数 `templet: function(d){return d.xx + str}`
         * 
         * 回调参数 d 从 v2.6.8 新增 LAY_COL 字段，可得到当前列的表头配置信息
         */
        templet?: string | ((d: TableColumnOptionsForTemplet) => string);
        /**
         * 用于表格导出时的内容输出，当 `templet` 较复杂时建议使用，将优先以对应表头的 `exportTemplet` 的返回内容为导出结果
         * @example
         * ```
         * exportTemplet: function(d, obj){
         *   // 当前 td
         *   var td = obj.td(this.field);
         *   // 返回 select 选中值
         *   return td.find('select').val();
         * }
         * ```
         * @since 2.6.9
         */
        exportTemplate?: string | ((d: TableColumnOptionsForTemplet, obj: { td: (field: TableColumnOptions['field']) => JQuery }) => string);
        /**
         * 是否开启该列的自动合计功能，默认不开启。
         *  1. parseData 中包含totalRow 可以映射自定字段
         *  2. 从 layui 2.6.3 开始，如果 totalRow 为一个 string 类型，则可解析为合计行的动态模板
         *     实例：`totalRow: '{{ d.TOTAL_NUMS }} 单位'` 或 `'{{ parseInt(d.TOTAL_NUMS) }}'`
         *  3. 合计行模板仅支持字符写法，不支持函数写法
         *  4. 后端合计
         * @example
         * ```js
         * // 前端合计的数据有限，因此常需要后端直接返回合计结果，组件将优先读取。数据格式如下：
         * {
         *   "code": 0,
         *   "totalRow": {
         *     "score": "777",
         *     "experience": "999"
         *   },
         *   "data": [{}, {}],
         *   "msg": "",
         *   "count": 1000
         * }
         * 
         * // 在合计行自定义模板中输出后端返回的合计数据
         * // 获取后端接口返回数据中的统计字段。此处 TOTAL_ROW 即对应返回据中的 totalRow
         * totalRow: '分数：{{= d.TOTAL_ROW.score }}'
         *  ```
         * @default false
         */
        totalRow?: boolean | string | Record<string, any>;
        /**
         * 单元格编辑类型
         * - edit: `text` 单行输入模式
         * - edit: `textarea` 多行输入模式（2.7.0）
         * - edit: () => 'text' （2.7.5）
         * @default false
         */
        edit?: 'text' | 'textarea' | boolean | ((d: TableColumnOptionsForTemplet) => 'text' | 'textarea');
        /**
         * 是否初始隐藏列
         * @default false
         */
        hide?: boolean;
        /**
         * 导出时忽略该列。支持以下可选值：
         * - true: 忽略导出
         * - false: 强制导出，对所有列适用
         * - null: 只对常规列导出（默认）
         * @since 2.8.3
         */
        ignoreExport?: boolean | null;
        /**
         * 是否对当前列进行内容编码（转义 html），优先级大于基础属性中的 {@link TableOptions.escape | escape}
         * @default true
         * @since 2.7.5
         */
        escape?: boolean;
        /**
         * 是否开启列的排序功能
         * 
         * 注意：不推荐对值同时存在“数字和普通字符”的列开启排序，
         * 因为会进入字典序排序计算中，如：'张三' > '2' > '100'，
         * 这可能并不是你想要的结果，但字典序排列采用的是 ASCII 码比对
         * @default false
         */
        sort?: boolean;
        /**
         * 是否禁用拖拽列宽。
         * 
         * 默认情况下会根据列类型 type 属性来决定是否禁用，如复选框列，会自动禁用。
         * 而其它普通列，默认允许拖拽列宽，当然你也可以设置 true 来禁用该功能。
         * @default false
         */
        unresize?: boolean;
        /**
         * 自定义单元格点击事件名，以便在 单元格工具事件 中完成对该单元格的事件处理
         * 
         * 比如：table.on('tool(tableFilter)', function(obj){obj.event=''})
         */
        event?: string;
        /**
         * 自定义单元格样式。可传入任意的 CSS 内容，如：`style: 'font-size: 13px; color: red;'`
         */
        style?: string;
        /**
         * 单元格排列方式。可选值有：left（默认）、center（居中）、right（居右）
         * @default 'left''
         */
        align?: 'left' | 'center' | 'right';
        /**
         * 单元格所占列数。一般用于多级表头
         * @default 1
         */
        colspan?: number;
        /**
         * 单元格所占行数。一般用于多级表头
         * @default 1
         */
        rowspan?: number;
        /**
         * 绑定行工具模板。用法同 templet 参数完全相同（因为历史兼容问题所以保留）。 
         * 
         * 可在每行对应的列中出现一些自定义的操作性按钮
         * @deprecated 2.8.0 已弃用
         */
        toolbar?: string;
        /**
         * 用于显示自定义的合计文本
         * @deprecated 2.8.0 已弃用，请使用 {@link TableColumnOptions.totalRow|totalRow}
         */
        totalRowText?: string;
        /**
         * 是否是多选列
         * @deprecated 2.8.0 已弃用，请使用 {@link TableColumnOptions.type|type}
         */
        checkbox?: boolean;
    }

    /**
     * table 的 templet 回调参数格式
     * 
     * tips:templet回调中可以使用 d.xx  xx为任意参数
     * 
     * 2.8.0 序号: `LAY_INDEX` → `LAY_NUM`；下标: `LAY_TABLE_INDEX` → `LAY_INDEX`
     */
    interface TableColumnOptionsForTemplet {
        LAY_COL: TableColumnOptionsForTempletCol;
        /**
         * 序号
         * @since 2.8.0
         */
        LAY_NUM: number;
        /**
         * 下标
         */
        LAY_INDEX: number;
        /**
         * 下标
         * @deprecated 2.8.0 移除，改为 `LAY_INDEX`
         */
        LAY_TABLE_INDEX: number;
        /**
         * @since 2.7.1
         */
        LAY_DISABLED: boolean;
        /**
         * 仅用于恢复排序
         * @internal
         * @since 2.9.20
         */
        LAY_INDEX_INIT: number;
        /**
         * 该属性不存在，只是提示你：可以用 d.xxx 使用当前行中的任意数据属性
         */
        '可以用 d.xx 来使用当前行的其他属性': never;
        [index: string]: any;
    }

    /**
     * table 的 templet 回调中 d.LAY_COL的格式定义
     */
    interface TableColumnOptionsForTempletCol extends Required<TableColumnOptions> {
        HAS_PARENT: boolean;
        PARENT_COL_INDEX: number;
        key: string;
        parentKey: string;
    }

    /**
     * 用于修改 request 参数名
     */
    interface TableRequestRename {
        /**
         * 页码的参数名称，默认：page
         */
        pageName?: string;
        /**
         * 每页数据量的参数名，默认：limit
         */
        limitName?: string;
    }

    /**
     * 用于修改 Response 参数名
     */
    interface TableResponseRename {
        /**
         * 规定数据状态的字段名称，默认：code
         */
        statusName?: string;
        /**
         * 规定成功的状态码，默认：0
         */
        statusCode?: number;
        /**
         * 规定状态信息的字段名称，默认：msg
         */
        msgName?: string;
        /**
         * 规定数据总数的字段名称，默认：count
         */
        countName?: string;
        /**
         * 规定数据列表的字段名称，默认：data
         */
        dataName?: string;
    }

    /**
     * 接口响应数据格式
     */
    interface TableResponse {
        /**
         * 接口状态
         */
        code?: number;
        /**
         * 提示文本
         */
        msg?: string;
        /**
         * 数据总数
         */
        count?: number;
        /**
         * 数据列表
         */
        data?: any;
        [propName: string]: any;
    }

    interface TableRenderReturn {
        /**
         * 当前表格配置属性
         */
        config: Required<TableOptions>;
        /**
         * 对当前表格的完整重载
         */
        reload(options?: Partial<TableOptions>, deep?: boolean): void;
        /**
         * 仅数据重载
         * @since 2.7.0
         */
        reloadData(options?: Partial<TableOptions>, deep?: boolean): void;
        /**
         * 对当前表格重新分配列宽
         */
        setColsWidth(): void;
        /**
         * 对当前表格重新适配尺寸
         */
        resize(): void;
    }

    /**
     * 基础参数选项
     * @see https://layui.dev/docs/2/table/#api
     */
    interface TableOptions {
        /**
         * 指定原始 table 容器的选择器或 DOM，方法渲染方式必填
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 发送异步请求的 URL
         * - 2.8.0 之前默认自动传递两个参数：?page=1&limit=30（该参数可通过 request 自定义）
         * - page 代表当前页码，limit 代表每页数据量
         * @see https://layui.dev/docs/2/table/#options.ajax
         */
        url?: string | null;
        /**
         * 表头属性集，通过二维数组定义多级表头。方法渲染时必填。
         * 
         * 一维是表头层级，二维是列定义
         * @see https://layui.dev/docs/2/table/#options.cols
         */
        cols: TableColumnOptions[][];
        /**
         * 本地数据模式
         * 
         * 当设置 data 模式时，count 的值取 data.length，即对一段已知数据进行分页展示。 
         * 此时在 page 属性中设置 count 无效。 若要在同一页显示所有数据，可将 limit 设置
         * 成 data.length，即与 count 等同即可，那么默认的分页栏只会显示 1 页，若要自定义
         * 分页结构，可通过 pagebar 属性结合 laypage 组件来重新自定义分页排版
         */
        data?: Array<any>;
        /**
         * 设定实例唯一索引，以便用于其他方法对 table 实例进行相关操作。
         * 若该属性未设置，则默认从 elem 属性绑定的原始 table 元素中的 id 属性值中获取
         */
        id?: string;
        /**
         * 开启表格头部工具栏区域，该参数支持四种类型值：
         * - `toolbar: '#toolbarDemo'` 指向自定义工具栏模板选择器
         * - `toolbar: '<div>xxx</div>'` 直接传入工具栏模板字符
         * - `toolbar: true` 仅开启工具栏，不显示左侧模板
         * - `toolbar: 'default'` 开启工具栏并显示默认模板
         * @default false
         */
        toolbar?: string | HTMLElement | boolean;
        /**
         * 设置头部工具栏右上角工具图标，值为一个数组，图标将根据数组值的顺序排列，默认内置工具：
         * - filter: 列筛选
         * - exports: 导出
         * - print: 打印
         */
        defaultToolbar?: Array<
            'filter' | 'exports' | 'print' | '' |
            { title?: string; layEvent?: string; icon?: string } |
            { name?: string; layEvent?: string; icon?: string; onClick?: (obj?: object) => void }
        >;
        /**
         * 设置容器宽度，默认自适应
         */
        width?: number | string;
        /**
         * 设置表格容器高度，默认自适应
         * - `height: 315` 设置固定高度
         * - `height: 'full-30'` 设置自适应高度。这是一个特定的语法格式：full 表示铺满；后面的数字表示当前 table 之外的元素占用的高度，如：表格头部到页面最顶部加表格底部距离页面最底部的“距离和”
         * - `height: '#id-30'` 设置相对父元素的高度自适应，其中 #id 即父元素的 ID 选择器，其计算原理和上述 full 相同（2.8.0）
         * - `height: () => $(window).height() - otherHeight` 设置动态高度（2.9.1）
         */
        height?: number | `full-${string}` | `#${string}-${string}}` | (() => number);
        /**
         * 设置表格容器的最大高度，设置该属性后，height 属性将被认定为默认的自适应值
         * @since 2.8.0
         */
        maxHeight?: number;
        /**
         * 设置所有普通单元格的最小宽度，一般用于列宽自动分配的情况。其优先级低于表头属性中的 {@link TableColumnOptions.minWidth|minWidth}
         * @default 60
         */
        cellMinWidth?: number;
        /**
         * 设置所有普通单元格的最大宽度。其优先级低于表头属性中的 {@link TableColumnOptions.maxWidth|maxWidth}
         * @since 2.8.0
         */
        cellMaxWidth?: number;
        /**
         * 用于定义表格的多行样式，如每行的高度等。
         * 
         * 该参数一旦设置，单元格将会开启多行模式，且鼠标 hover 时会通过显示滚动条的方式查看到更多内容。 
         * @example lineStyle: 'height: 95px;'
         * @since 2.7.0
         */
        lineStyle?: string;
        /**
         * 表格主容器追加 css 类名，以便更好地扩展表格样式
         * @since 2.7.0
         */
        className?: string;
        /**
         * 给当前表格主容器直接设定 css 样式，样式值只会对所在容器有效，不会影响其他表格实例
         * @example css: '.layui-table-page{text-align: right;}'
         * @since 2.7.0
         */
        css?: string;
        /**
          * 用于设置所有单元格默认展开方式，可选值有：
          * - tips 悬浮展开方式
          * - default 多行展开方式（默认）
          * @since 2.8.17
          */
        cellExpandedMode?: 'tips';
        /**
         * 用于设置所有单元格默认展开后的宽度。当 cellExpandedMode 属性为默认值时有效
         * @default 60
         * @since 2.8.17
         */
        cellExpandedWidth?: number;
        /**
         * 是否开启对内容的编码（转义 html）
         * 
         * 默认 true，2.6.11 之前默认为 false
         * @default true
         */
        escape?: boolean;
        /**
         * 是否开启合计行区域
         * @default false
         */
        totalRow?: boolean;
        /**
         * 开启分页，PageOptions 时排除 jump 和 elem
         * @default false
         */
        page?: boolean | Omit<LayPageOptions, 'elem' | 'jump'>;
        /**
         * 开启分页区域的自定义模板，用法同 toolbar 属性
         * @since 2.7.0
         */
        pagebar?: string | HTMLElement | boolean;
        /**
         * 每页显示的条数。值需对应 limits 参数的选项
         * 
         * 优先级低于 page 属性中的 limit 属性
         * @default 10
         */
        limit?: number;
        /**
         * 每页条数的选择项，默认：[10,20,30,40,50,60,70,80,90]
         * 
         * 优先级低于 page 参数中的 limits 参数
         */
        limits?: number[];
        /**
         * 是否显示加载条（默认 true）。若为 false，则在切换分页时，不会出现加载条。
         * 该参数只适用于 url 参数开启的方式
         * - 若值为 `string` 类型 2.9.10+，表示自定义加载模板，此时可添加任意动画元素
         * @example
         * ```
         * loading: '<i class="layui-icon layui-icon-loading-1 layui-anim layui-anim-rotate layui-anim-loop"></i>'
         * ```
         */
        loading?: boolean | string;
        /**
         * 设置重载数据或切换分页时的滚动条位置状态
         * - `fixed` 重载数据时，保持滚动条位置不变
         * - `reset` 重载数据时，滚动条位置恢复置顶
         * - `default` 默认方式，无需设置。即重载数据或切换分页时，纵向滚动条置顶，横向滚动条位置不变
         * @since 2.7.3
         */
        scrollPos?: 'fixed' | 'reset ' | 'default ';
        /**
         * 单元格编辑的事件触发方式
         * @default 'click'
         * @since 2.7.0
         */
        editTrigger?: 'click' | 'dbclick';
        /**
         * 定义 table 的大标题（在文件导出等地方会用到）
         */
        title?: string;
        /**
         * 自定义文本，如空数据时的异常提示等。
         * @default '无数据''
         */
        text?: { none: string };
        /**
         * 是否由组件自动进行前端排序。若为 false，则需自主排序，即由后端直接返回排序好的数据
         * @default true
         */
        autoSort?: boolean;
        /**
         * 初始排序状态。用于在数据表格渲染完毕时，按某个字段排序显示
         * - field 排序字段。对应 cols 设定的各字段名
         * - type 排序方式。可选值 : 'asc','desc',null，即：升序、降序、默认
         */
        initSort?: { field: string; type?: null | 'desc' | 'asc' };
        /**
         * 用于设定表格风格
         * @default 'grid
         */
        skin?: 'grid' | 'line' | 'row' | 'nob';
        /**
         * 是否开启隔行背景
         * @default false
         */
        even?: boolean;
        /**
         * 设定表格尺寸
         * @default 'md'
         */
        size?: 'sm' | 'md' | 'lg';
        /**
         * 数据渲染之前的回调函数
         * @param options 各项基础参数
         * @since 2.7.3
         */
        before?(options: Required<TableOptions>): void;
        /**
         * 数据渲染完毕的回调函数
         * @param res 当前渲染的数据
         * - 如果是异步请求数据方式，res 即为你接口返回的信息
         * - 如果是直接赋值的方式，res 即为：{data: [], count: 99} data 为当前页数据，count为数据总长度
         * @param curr 得到当前页码
         * @param count 得到数据总量
         * @param origin 回调函数所执行的来源，区分重载和重新渲染数据（2.8.7）
         */
        done?(res: any, curr: number, count: number, origin?: string): void;
        /**
         * 数据请求失败的回调
         * @param e 错误对象,是 jqXHR 对象（对XHR扩展），不同 jQuery 版本其格式不同
         * @param msg 内容，例如 "error" “abort”
         */
        error?(e: JQuery.jqXHR, msg: any): void;
        /**
         * 数据接口请求完成后执行，无论成功还是失败均会触发
         * @param xhr jqXHR 对象（对XHR扩展），不同 jQuery 版本其格式不同
         * @param textStatus 描述请求状态的字符串
         * @since 2.8.18
         */
        complete?(xhr: JQuery.jqXHR, textStatus: string): void;
        /**
         * 请求的方式，默认：get
         */
        method?: string;
        /**
         * 接口的其它参数。如：where: {token: 'sasasas', id: 123}
         */
        where?: object | null;
        /**
         * 接口的请求头。如：headers: {token: 'sasasas'}
         */
        headers?: object;
        /**
         * 发送到服务端的内容编码类型
         * 
         * 若要发送 json 内容，可以设置：`contentType: 'application/json'`
         */
        contentType?: string;
        /**
         * 请求的数据类型，默认 json
         * @since 2.7.3
         */
        dataType?: string;
        /**
         * 设置当 `dataType: 'jsonp'` 时的回调函数名
         * @since 2.7.3
         */
        jsonpCallback?: string;
        /**
         * 数据格式解析的回调函数，用于将返回的任意数据格式解析成 table 组件规定的数据格式
         * @param res 原始返回的数据
         */
        parseData?(res: any): TableResponse;
        /**
         * 用于对默认的分页相关的请求参数 page,limit 重新设定名称
         */
        request?: TableRequestRename;
        /**
         * 可以借助 response 重新设定本地识别响应字段名
         * 
         * 当默认支持的名称和服务端不一致可以通过本方式或者 parseData 来对应
         * @deprecated 2.8.0 已弃用，请使用 {@link TableOptions.parseData|parseData}
         */
        response?: TableResponseRename;
    }

    /**
     * 设置行选中时的可选属性
     * @since 2.8.0
     */
    interface TableSetRowCheckedOptions {
        /**
         * 选中方式
         * @default 'checkbox''
         */
        type?: 'checkbox' | 'radio';
        /**
         * 选中行的下标。即数据的所在数组下标（0 开头）。可设置 `all` 表示全选
         * 数组类型 2.9.1+
         */
        index: string | number | Array<string | number> | 'all';
        /**
         * 选中状态值
         * - 若传递该属性，则赋值固定值
         * - 若不传递该属性（默认），则 checkbox 将在 true|false 中自动切换值，而 radio 将赋值 true 固定值(2.8.4+)
         * 
         * 注意：若 index 指定为多选或全选，checked 应当显式传递固定值
         * @default true
         */
        checked?: boolean;
        /**
         * 是否仅设置样式状态。若为 `true` 则只标注选中样式，不对数据中的 `LAY_CHECKED` 属性赋值。
         * @default false
         * @deprecated 2.8.7 已删除
         */
        selectedStyle?: boolean;
    }

    // ------------以下 TableOn 开头 interface，在调用地方使用----------
    /**
     * table 公共事件参数
     */
    interface TableOnCommon<TOptions, TSetRowOptions> {
        /**
         * 当前行元素的 jQUery 对象
         */
        tr: JQuery;
        /**
         * 对应的表格实例配置项
         * @since 2.8.0
         */
        config: Required<TOptions>;
        /**
         * 当前操作的行数据
         */
        data: Record<string, any>;
        /**
         * 当前行缓存数据，包含特定字段
         * @since 2.8.8
         */
        dataCache: Record<string, any>;
        /**
         * 当前行索引
         */
        index: number | string;
        /**
         * 删除当前行
         */
        del(): void;
        /**
         * 更新当前行
         * @param fields 要更新的列字段对象
         * @param related 更新其他包含自定义模板并可能存在关联的列视图(2.7.4)
         */
        update(fields: Record<string, any>, related?: boolean | ((field: string, index: string | number) => void)): void;
        /**
         * 设置行选中状态
         */
        setRowChecked(opts: TSetRowOptions): void;
    }
    /**
     * 点击table中checkbox后回调参数的类型
     */
    interface TableOnCheckbox<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions> extends TableOnCommon<TOptions, TSetRowOptions> {
        /**
         * 当前选中状态
         */
        checked: true;
        /**
         * 若触发的是全选，则为：all；若触发的是单选，则为：one
         */
        type: 'all' | 'one';
        /**
         * 获取当前列的配置信息
         * @since 2.8.3
         */
        getCol(): TableColumnOptions;
    }

    /**
     * Table 单选事件
     */
    interface TableOnRadio<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions> extends TableOnCommon<TOptions, TSetRowOptions> {
        /**
         * 当前选中状态
         */
        checked: true;
        /**
         * 获取当前列的配置信息
         * @since 2.8.3
         */
        getCol(): TableColumnOptions;
    }

    /**
     * 点击尾部分页栏自定义模板后回调参数的类型
     * @since 2.7.0
     */
    interface TableOnPagebar<TOptions = TableOptions> {
        config: TOptions;
        /**
         * lay-event 属性值
         */
        event: string;
    }

    /**
     * 点击table上边工具栏后回调参数的类型
     */
    interface TableOnToolbar<TOptions = TableOptions> {
        config: TOptions;
        /**
         * lay-event 属性值
         */
        event: string;
    }

    /**
     * 点击table中工具列后回调参数的类型
     */
    interface TableOnTool<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions> extends TableOnCommon<TOptions, TSetRowOptions> {
        /**
         * lay-event 属性值
         */
        event: string;
        /**
         * 获取当前列的配置信息
         * @since 2.8.3
         */
        getCol(): TableColumnOptions;
    }

    /**
     * 双击table中工具列后回调参数的类型
     * @since 2.7.0
     */
    interface TableOnToolDouble<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions> extends TableOnCommon<TOptions, TSetRowOptions> {
        /**
         * lay-event 属性值
         */
        event: string;
        /**
         * 获取当前列的配置信息
         * @since 2.8.3
         */
        getCol(): TableColumnOptions;
    }

    /**
     * 点击table中行后回调参数的类型
     */
    interface TableOnRow<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions> extends TableOnCommon<TOptions, TSetRowOptions>{
        /**
         * jQuery 事件对象
         */
        e: JQuery.Event;
    }

    /**
     * 双击table中行后回调参数的类型
     */
    interface TableOnRowDouble<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions> extends TableOnCommon<TOptions, TSetRowOptions> {
        /**
         * jQuery 事件对象
         */
        e: JQuery.Event;
    }

    /**
     * 点击table中单元格编辑后回调参数的类型
     */
    interface TableOnEdit<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions> extends TableOnCommon<TOptions, TSetRowOptions> {
        /**
         * 字段名
         */
        field: string;
        /**
         * 当前单元格元素的 jQuery 对象
         */
        td: JQuery;
        /**
         * 当前单元格的值
         */
        value: string;
        /**
         * 字段修改前的旧值
         * @since 2.8.0
         */
        oldValue: string;
        /**
         * 重新编辑
         * @since 2.8.0
         */
        reedit(): void;
        /**
         * 获取当前列表头配置信息
         * @since 2.8.0
         */
        getCol(): TableColumnOptions;
    }

    /**
     * 点击table中列标题排序后回调参数的类型
     */
    interface TableOnSort {
        /**
         * 当前排序的字段名
         */
        field: string;
        /**
         * 当前排序类型：desc（降序）、asc（升序）、null（空对象，默认排序）
         */
        type: null | 'desc' | 'asc';
    }

    /**
     * 列拖拽宽度后的事件
     * @since 2.8.0
     */
    interface TableOnColResized<TOptions = TableOptions> {
        /**
         * 获取当前列属性配置项
         */
        col: TableColumnOptions;
        /**
         * 获取当前表格基础属性配置项
         */
        config: TOptions;
    }

    /**
     * 列筛选（显示或隐藏）后的事件
     * @since 2.8.0
     */
    interface TableOnColToggled<TOptions = TableOptions> {
        col: TableColumnOptions;
        config: TOptions;
    }

    /**
     * 行右键菜单事件，需设置属性 `defaultContextmenu:false` 才生效
     * @since 2.8.0
     */
    interface TableOnRowContextmenu<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions> extends TableOnCommon<TOptions, TSetRowOptions> {
        /**
         * jQuery 事件对象
         */
        e: JQuery.Event;
    }

    /**
     * 表头自定义元素工具事件，点击表头单元格中带有 lay-event 属性的自定义元素触发
     * @since 2.8.8
     */
    interface TableOnColTool<TOptions = TableOptions> {
        /**
         * 获取当前列属性配置项
         */
        col: TableColumnOptions;
        /**
         * 获取当前表格基础属性配置项
         */
        config: TOptions;
        /**
         * 获得自定义元素对应的 lay-event 属性值
         */
        event: string;
    }

    type TableFilter = string;
    type TableEventMap<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions> = {
        toolbar(this: HTMLElement, obj: TableOnToolbar<TOptions>): void;
        sort: (this: HTMLElement, obj: TableOnSort) => void;
        /**
         * @param obj
         * @since 2.8.8
         */
        colTool(this: HTMLElement, obj: TableOnColTool<TOptions>): void;
        /**
         * @param obj
         * @since 2.8.0
         */
        colResized(this: HTMLElement, obj: TableOnColResized<TOptions>): void;
        /**
         * @param obj
         * @since 2.8.0
         */
        colToggled(this: HTMLElement, obj: TableOnColToggled<TOptions>): void;
        row(this: HTMLTableRowElement, obj: TableOnRow<TOptions, TSetRowOptions>): void;
        rowDouble(this: HTMLTableRowElement, obj: TableOnRowDouble<TOptions, TSetRowOptions>): void;
        /**
         * @param obj
         * @since 2.8.0
         */
        rowContextmenu(this: HTMLTableRowElement, obj: TableOnRowContextmenu<TOptions, TSetRowOptions>): void;
        edit(this: HTMLTableCellElement, obj: TableOnEdit<TOptions, TSetRowOptions>): void;
        tool(this: HTMLElement, obj: TableOnTool<TOptions, TSetRowOptions>): void;
        /**
         * @param obj
         * @since 2.7.0
         */
        toolDouble(this: HTMLElement, obj: TableOnToolDouble<TOptions, TSetRowOptions>): void;
        checkbox(this: HTMLInputElement, obj: TableOnCheckbox<TOptions, TSetRowOptions>): void;
        radio(this: HTMLInputElement, obj: TableOnRadio<TOptions, TSetRowOptions>): void;
        /**
         * @param obj
         * @since 2.7.0
         */
        pagebar(this: HTMLElement, obj: TableOnPagebar<TOptions>): void;
    };

    interface TablecheckStatusReturn {
        /**
         * 选中行的数据
         */
        data: Array<any>;
        /**
         * 是否全选
         */
        isAll: boolean
        /**
         * 选中的原始缓存数据，包含内部特定字段
         * @since 2.9.17
         */
        dataCache: Array<any>;
    }

    /**
     * 表格
     * @see https://layui.dev/docs/2/table
     */
    interface Table {
        /**
         * 表格索引
         */
        index: number;
        cache: Record<string, any>;
        config: {
            /**
             * 是否选中状态的字段名
             */
            checkName: 'LAY_CHECKED';
            /**
             * 初始下标索引名，用于恢复排序
             * 
             * 2.8.0之前 为 LAY_TABLE_INDEX
             */
            indexName: 'LAY_INDEX';
            /**
             * 初始下标索引名，仅用于内部恢复当前页表格排序
             * @since 2.9.20
             */
            initIndexName: 'LAY_INDEX_INIT';
            /**
             * 序号
             */
            numbersName: 'LAY_NUM';
            /**
             * 禁用状态的特定字段名
             */
            disabledName: 'LAY_DISABLED';
        };
        /**
         * 清除表格数据中的临时 Key 
         * 
         * 例如 LAY_CHECKED、LAY_TABLE_INDEX 等
         * @internal
         * @param data
         */
        clearCacheKey(data: Record<string, any>): Record<string, any>;
        /**
         * 遍历表头
         * @internal
         * @param id table 渲染时的 id 属性值
         * @param callback 回调
         * @param cols 列配置项，默认为当前表格的 cols 参数值
         */
        eachCols(id: string, callback: (index: string, colDef: TableColumnOptions) => void, cols?: Array<Array<TableColumnOptions>>): void;
        /**
         * 获取表格当前选中行相关数据
         * @param id table 渲染时的 id 属性值
         * @see https://layui.dev/docs/2/table/#table.checkStatus
         */
        checkStatus(id: string): TablecheckStatusReturn;
        /**
         * 导出 table 中数据到文件
         * @param id table 渲染时的 id 属性值。指定 id 后下载文件名默认为 table 中 title
         * @see https://layui.dev/docs/2/table/#table.exportFile
         */
        exportFile(id: string): void;
        /**
         * 导出 table 中数据到文件
         * @param id table 渲染时的 id 属性值。指定 id 后下载文件名默认为 table 中 title
         * @param data 传入null
         * @param type 文件类型，默认 csv
         * @deprecated 2.8.0 此签名已弃用
         * @see https://layui.dev/docs/2/table/#table.exportFile
         */
        exportFile(id: string, data?: null, type?: 'csv' | 'xls'): void;
        /**
         * 导出 table 中数据到文件
         * @param id table 渲染时的 id 属性值。指定 id 后下载文件名默认为 table 中 title
         * @param data 传入null
         * @param opts 选项
         * - type 文件类型，默认 csv
         * - title 文件标题
         * @since 2.7.0
         * @see https://layui.dev/docs/2/table/#table.exportFile
         */
        exportFile(id: string, data?: null, opts?: { type?: 'csv' | 'xls'; title?: string }): void;
        /**
         * 导出自定数据到文件
         * @param colName 数据表头
         * @param data 要导出的自定义数据
         * @param type 文件类型，默认 csv
         * @deprecated 2.8.0 此签名已弃用
         * @see https://layui.dev/docs/2/table/#table.exportFile
         */
        exportFile(colName: Array<string>, data: Array<Array<any>>, type?: 'csv' | 'xls'): void;
        /**
         * 导出自定数据到文件
         * @param colName 数据表头
         * @param data 要导出的自定义数据
         * @param opts 文件类型，默认 csv
         * - type 文件类型，默认 csv
         * - title 文件标题
         * @since 2.7.0
         * @see https://layui.dev/docs/2/table/#table.exportFile
         */
        exportFile(colName: Array<string>, data: Array<Array<any>>, opts?: { type?: 'csv' | 'xls'; title?: string }): void;
        /**
         * 获取表格当前页的所有行数据
         * 
         * 对应接口返回的原始数据，不包含 table 组件内部的特定字段
         * @param id table 参数中的id
         * @see https://layui.dev/docs/2/table/#table.getData
         */
        getData(id: string): Array<any>;
        /**
         * 静态表格渲染
         * 
         * 该方法用于将已输出在页面中的静态表格内容转换为动态 table 组件
         * @param filter `<table>` 元素对应的 `lay-filter` 属性值
         * @param option 基础属性选项
         * @see https://layui.dev/docs/2/table/#table.init
         */
        init(filter: TableFilter, option?: Omit<Partial<TableOptions>, 'elem'>): object;
        /**
         * 表格事件
         * 
         * `table.on('event(filter)', callback);`
         * 
         * - 参数 event(filter) 是事件的特定结构。 event 为事件名，支持的事件见下表。filter 为元素属性 lay-filter 对应的值
         * - 参数 callback 为事件执行时的回调函数，并返回一个包含各项成员的 object 类型的参数
         * 
         * |  event | 描述 |
         * | --- | --- |
         * | toolbar | 头部工具栏事件 |
         * | sort | 表头排序切换事件 |
         * | colTool | 表头自定义元素工具事件（2.8.8） |
         * | colResized | 列拖拽宽度后的事件（2.8.0） |
         * | colToggled | 列筛选（显示或隐藏）后的事件（2.8.0） |
         * | row | 行单击事件 |
         * | rowDouble | 行双击事件 |
         * | rowContextmenu | 行右键菜单事件（2.8.0） |
         * | edit | 单元格编辑事件 |
         * | tool | 单元格工具事件。可在该事件中实现行的更新与删除操作 |
         * | toolDouble | 单元格工具事件。可在该事件中实现行的更新与删除操作（2.7.0） |
         * | checkbox | 复选框事件 |
         * | radio | 单选框事件 |
         * | pagebar | 尾部分页栏事件（2.7.0） |
         * @param event event(filter)
         * @param callback 事件回调参数
         * @see https://layui.dev/docs/2/table/#table.on
         */
        on<K extends keyof TableEventMap>(event: `${K}(${TableFilter})`, callback: TableEventMap[K]): void;
        on<K extends keyof TableEventMap>(event: K, callback: TableEventMap[K]): void;
        on<K extends string>(event: `${K}(${TableFilter})`, callback: AnyFn): void;
        /**
         * 表格重载
         * 
         * 对表格的视图和数据在内的全部重载，所有属性均会参与到重载中，对应的表格会有一个直观的刷新效果
         * @param id table 渲染时的 id 属性值
         * @param option 基础属性选项
         * @param deep 是否采用深度重载（即重载时始终携带初始时及上一次重载时的参数），默认 false
         * @see https://layui.dev/docs/2/table/#table.reload
         */
        reload(id: string, option?: Partial<TableOptions>, deep?: boolean): TableRenderReturn;
        /**
         * 仅数据重载
         * 
         * 对表格的数据重载，与数据无关的属性不会参与到重载中。因此若只是更新数据，该方法可大幅提升体验
         * @param id table 渲染时的 id 属性值
         * @param option 基础属性选项
         * @param deep 是否采用深度重载（即重载时始终携带初始时及上一次重载时的参数），默认 false
         * @since 2.7.0
         * @see https://layui.dev/docs/2/table/#table.reloadData
         */
        reloadData(id: string, option?: Partial<TableOptions>, deep?: boolean): TableRenderReturn;
        /**
         * 方法配置渲染
         * @param option 基础属性选项
         * @see https://layui.dev/docs/2/table/#render
         */
        render(option: TableOptions): TableRenderReturn;
        /**
         * 用于重新渲染数据，一般在修改 table.cache 后使用
         * @param id table 渲染时的 id 属性值
         * @since 2.8.6
         * @see https://layui.dev/docs/2/table/#table.renderData
         */
        renderData(id: string): void;
        /**
         * 重置表格尺寸结构
         * @param id 如果指定表格唯一 id，则只执行该 id 对应的表格实例
         * @see https://layui.dev/docs/2/table/#table.resize
         */
        resize(id?: string): void;
        /**
         * 设置 table 全局项
         * @param option 基础属性选项
         * @see https://layui.dev/docs/2/table/#set
         */
        set(option?: Partial<TableOptions>): Table;
        /**
         * 设置行选中状态
         * @param id table 渲染时的 id 属性值
         * @param option 设置行选中时的可选属性
         * @since 2.8.0
         * @see https://layui.dev/docs/2/table/#table.setRowChecked
         */
        setRowChecked(id: string, option?: TableSetRowCheckedOptions): void;
        /**
         * 获取指定 id 对应的表格实例配置项
         * @param id table 渲染时的 id 属性值
         * @since 2.8.0
         * @see https://layui.dev/docs/2/table/#table.getOptions
         */
        getOptions(id: string): TableOptions;
        /**
         * 设置列显示或隐藏
         * @param id table 渲染时的 id 属性值
         * @param cols 设置列（表头）显示或隐藏状态
         * @since 2.8.0
         * @see https://layui.dev/docs/2/table/#table.hideCol
         */
        hideCol(id: string, cols: boolean | { field: TableColumnOptions['field']; hide: boolean } | Array<{ field: TableColumnOptions['field']; hide: boolean }>): void;
        /**
         * 更新指定行数据
         * @param id table 渲染时的 `id` 属性值
         * @param opts 更新指定行时的可选属性
         * - `index`: 行索引
         * - `data`: 行数据
         * - `related`: 是否更新关联的行数据
         * @since 2.9.6
         * @see https://layui.dev/docs/2/table/#table.updateRow
         */
        updateRow(
            id: string,
            opts: {
                /**
                 * 行索引
                 */
                index: number;
                /**
                 * 行数据
                 */
                data: Record<string, any> | Array<Record<string, any>>
            },
            /**
             * 是否更新关联的行数据
             */
            related?: boolean | ((field: string, index: number) => boolean)
        ): void;
        /**
         * 返回行节点代码
         * @internal
         * @param id table 渲染时的 `id` 属性值
         * @param data 行数据
         */
        getTrHtml(id: string, data: Array<Record<string, any>>): string;
    }
}

// modules/transfer.d.ts
declare namespace Layui {
    interface TransferOptionsData {
        /**
         * 数据标题
         */
        title: string;
        /**
         * 数据值
         */
        value: string | number;
        /**
         * 是否选中状态
         */
        checked?: boolean | string;
        /**
         * 是否禁用状态
         */
        disabled?: boolean | string;
        [index: string]: any;
    }
    interface TransferOptions {
        /**
         * 绑定元素选择器或 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 穿梭框左右面板头部标题
         */
        title?: [leftTitle: string, rightTitle: string];
        /**
         * 数据源
         */
        data?: Array<any>;
        /**
         * 用于对数据源进行格式解析
         * @param data
         */
        parseData?(data: any): TransferOptionsData;
        /**
         * 初始选中的数据（右侧列表）
         */
        value?: Array<TransferOptionsData>;
        /**
         * 设定实例唯一索引，用于基础方法传参使用
         */
        id?: string;
        /**
         * 是否开启搜索。支持以下可选值：
         * - false 不开启搜索（默认）
         * - true 开启搜索，且匹配时不区分大小写
         * - cs 开启搜索，且匹配时区分大小写(2.7+)
         * @default false
         */
        showSearch?: boolean | 'cs';
        /**
         * 定义左右穿梭框宽度
         */
        width?: number;
        /**
         * 定义左右穿梭框高度
         */
        height?: number;
        /**
         * 自定义文本，如空数据时的异常提示等
         */
        text?: {
            /**
             * 没有数据时的文案 '无数据'
             */
            none?: string;
            /**
             * 搜索无匹配数据时的文案 '无匹配数据'
             */
            searchNone?: string;
        };
        /**
         * 左右数据穿梭时的回调
         * @param data 数据
         * @param index 索引
         */
        onchange?(data: any, index: number): void;
        /**
         * 双击时的回调函数
         * 返回 false 会阻止穿梭
         * @param obj {elem, data, index} 当前穿梭框对象、数据项、索引，如果数据来自左边，index 为 0，否则为 1
         * @since 2.9.3
         */
        dblclick?(obj: { elem: JQuery; data: object; index: number }): boolean | void;
    }

    interface TransferReturn {
        config: Record<string, any>;
        /**
         * 获得右侧数据
         */
        getData(): Array<TransferOptionsData>;
        /**
         * 重载实例
         * @param id  实例唯一索引
         * @param options 各项基础参数
         */
        reload(id: string, options: TransferOptions): void;
        /**
         * 设定全局默认参数
         *
         * @param options 各项基础参数
         */
        set(options: Partial<TransferOptions>): void;
    }

    /**
     * 穿梭框
     * @see https://layui.dev/docs/2/transfer/
     */
    interface Transfer {
        config: Record<string, any>;
        index: number;
        /**
         * 获得右侧数据
         * @param id 实例唯一索引
         */
        getData(id: string): Array<TransferOptionsData>;
        /**
         * 核心方法
         * @param option 各项基础参数
         */
        render(option: TransferOptions): TransferReturn;
        /**
         * 绑定事件，内部 modName 默认为 transfer，绑定参考 layui.onevent，触发参考 layui.event
         * @param events
         * @param callback
         */
        on(events: string, callback: (this: Layui, obj: any) => any): any;
        /**
         * 重载实例
         * @param id  实例唯一索引
         * @param options 各项基础参数
         */
        reload(id: string, options?: Partial<TransferOptions>): void;
        /**
         * 设定全局默认参数
         * @param options 各项基础参数
         */
        set(options: Partial<TransferOptions>): void;
    }
}

// modules/tree.d.ts
declare namespace Layui {
    interface TreeData {
        /**
         * 节点标题
         */
        title?: string;
        /**
         * 节点唯一索引值，用于对指定节点进行各类操作
         */
        id?: string | number;
        /**
         * 节点字段名
         */
        field?: string;
        /**
         * 子节点。支持设定选项同父节点
         */
        children?: TreeData[];
        /**
         * 点击节点弹出新窗口对应的 url。需开启 isJump 参数
         */
        href?: string;
        /**
         * 节点是否初始展开
         * @default false
         */
        spread?: boolean;
        /**
         * 自定义 data 数据源中常用的字段名称
         * @default false
         */
        checked?: boolean;
        /**
         * 节点是否为禁用状态
         * @default false
         */
        disabled?: boolean;
        [index: string]: any;
    }

    interface TreeCheckData {
        data: any;
        checked: boolean;
        elem: JQuery;
    }

    interface TreeClickData {
        data: any;
        elem: JQuery;
        state: 'open' | 'close' | 'normal';
    }

    interface TreeOperateData {
        data: any;
        elem: JQuery;
        type: LiteralStringUnion<'add' | 'update' | 'del'>;
    }

    type TreeReloadReturn = Pick<Tree, 'config' | 'reload' | 'getChecked' | 'setChecked'>;

    interface TreeOptions {
        /**
         * 绑定元素选择器
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 数据源
         */
        data?: TreeData[];
        /**
         * 设置实例唯一索引，用于其他方法传参使用
         */
        id?: string;
        /**
         * 是否显示复选框
         * @default false
         */
        showCheckbox?: boolean;
        /**
         * 是否开启节点的右侧操作图标。支持以下可选值：
         * 
         * - 若为 true，则默认显示「改删」图标
         * - 若为 数组，则可自由配置操作图标，如：edit:['add', 'update', 'del'] ，且图标将按照数组的顺序显示
         * @default false
         */
        edit?: boolean | string[];
        /**
         * 是否开启手风琴模式
         * @default false
         */
        accordion?: boolean;
        /**
         * 是否仅允许节点左侧图标控制展开伸缩
         * 
         * - 默认为 false，即点击节点本身也可控制伸缩
         * - 若值为 true，则只能通过节点左侧图标来展开收缩
         * @default false
         */
        onlyIconControl?: boolean;
        /**
         * 是否允许点击节点时弹出新窗口跳转。若为 true，则需在对应的 data 中设定 href 属性（url 格式）
         * @default false
         */
        isJump?: boolean;
        /**
         * 是否开启节点连接线。若设为 false，则节点左侧出现三角图标。
         * @default true
         */
        showLine?: boolean;
        /**
         * 自定义各类默认文本，目前支持以下设定：
         */
        text?: {
            /**
             * 节点默认名称  '未命名'
             */
            defaultNodeName?: string;
            /**
             * 数据为空时的提示文本 '无数据'
             */
            none?: string;
        };
        /**
         * 自定义 data 数据源中常用的字段名称
         * @since 2.8.15
         */
        customName?: { [T in keyof TreeData]: string };
        /**
         * 复选框被点击的回调
         * @param obj
         */
        oncheck?(obj: TreeCheckData): void;
        /**
         * 节点被点击的回调
         * @param obj
         */
        click?(obj: TreeClickData): void;
        /**
         * 操作节点的回调
         * @param obj
         */
        operate?(obj: TreeOperateData): void;
        /**
         * 节点过滤的回调
         * @param obj
         * @deprecated
         */
        onsearch?(obj: { elem: any[] }): void;
        /**
         * 未知
         * @param args
         * @deprecated
         */
        dragstart?(...args: any): any;
        /**
         * 未知
         * @param args
         * @deprecated
         */
        dragend?(...args: any): any;
    }

    /**
     * 树
     * @see https://layui.dev/docs/2/tree/
     */
    interface Tree {
        /**
         * 全局参数项
         */
        config: Record<string, any>;
        /**
         * 获取选中的节点数据
         * @param id 对应 tree 渲染时定义的 id 属性值
         */
        getChecked(id: string): TreeData[];
        /**
         * tree 实例数
         */
        index: number;
        /**
         * 绑定事件，内部 modName 默认为 tree，绑定参考 layui.onevent，触发参考 layui.event
         * @param events
         * @param callback
         */
        on(events: string, callback: (this: Layui, obj: any) => any): any;
        /**
         * 实例重载,重载一个已经创建的组件实例，覆盖基础属性
         * @param id 对应 tree 渲染时定义的 id 属性值
         * @param options 基础参数
         */
        reload(id: string, options: Partial<TreeOptions>): TreeReloadReturn;
        /**
         * 核心方法
         * @param option 基础参数
         */
        render(option: TreeOptions): any;
        /**
         * 设置 tree全局 参数(预设基础参数值)
         * @param option
         */
        set(option?: Partial<TreeOptions>): Tree;
        /**
         * 设置节点勾选
         * @param id 对应 tree 渲染时定义的 id 属性值
         * @param nodeId 对应 tree 渲染时的 data 中的 id 属性值。数组格式，可设置多个
         */
        setChecked(id: string, nodeId: any): void;
    }
}

// modules/treeTable.d.ts
declare namespace Layui {
    /**
     * 树表 `tree.callback` 事件回调相关的属性
     * @since 2.8.0
     */
    interface TreeTableTreeOptionsForCallback {
        /**
         * 展开前回调函数，可以在展开或者关闭之前调用，若回调返回 false 则取消该次操作
         *
         * @param tableId 当前表格 id
         * @param trData 当前操作的行数据
         * @param expandFlag 要展开或关闭的状态
         * @since 2.8.0
         */
        beforeExpand?(tableId: string, trData: Record<string, any>, expandFlag: boolean): boolean | void;
        /**
         * 展开或关闭后的回调函数
         *
         * @param tableId 当前表格 id
         * @param trData 当前操作的行数据
         * @param expandFlag 要展开或关闭的状态
         * @since 2.8.0
         */
        onExpand?(tableId: string, trData: Record<string, any>, expandFlag: boolean): void;
    }

    /**
     * 树表 `tree.async`异步相关的属性集合
     * @since 2.8.0
     */
    interface TreeTableTreeOptionsForAsync {
        /**
         * 是否开启异步加载模式。只有开启时 async 的其他属性配置才有效
         * 
         * 注意： 异步加载子节点不应跟 simpleData 同时开启，可以是 url+simpleData 的方式，
         * 获取完整的简单数据进行转换。若开启异步加载模式，即表示按需异步加载子节点
         * @default false
         * @since 2.8.0
         */
        enable?: boolean;
        /**
         * 异步加载的接口，若与顶层接口相同可不设置
         * @since 2.8.0
         */
        url?: string;
        /**
         * 请求的接口类型，若与顶层接口相同可不设置
         * @since 2.8.0
         */
        type?: string;
        /**
         * 提交参数的数据类型，若与顶层接口相同可不设置
         * @since 2.8.0
         */
        contentType?: string;
        /**
         * 提交请求头，若与顶层接口相同可不设置
         * @since 2.8.0
         */
        headers?: object;
        /**
         * 提交参数的数据，若与顶层接口相同可不设置
         * @since 2.8.0
         */
        where?: object;
        /**
         * 自动参数，可以根据配置项以及当前节点的数据传参，如:
         * @example
         * ```js
         * ['type', 'age=age', 'parentId=id']
         * ```
         * 那么其请求参数将包含:
         * ```
         * {type: '父节点 type', age: '父节点 age', parentId: '父节点 id'}
         * ```
         * @since 2.8.0
         */
        autoParam?: string[];
        /**
         * 用于处理异步子节点数据的回调函数，该属性优先级高于 async.url 属性
         * @param trData 当前操作的行数据
         * @param options 当前表格配置项
         * @param callback 子节点的渲染函数，参数为子节点数据
         * @since 2.8.4
         */
        format?(trData: Record<string, any>, options: Required<TreeTableOptions>, callback: (nodeList: Array<object>) => void): void;
    }

    /**
     * 树表 `tree.data` 数据相关的属性集合
     * @since 2.8.0
     */
    interface TreeTableTreeOptionsForData {
        /**
         * 是否简单数据模式
         * @default false
         * @since 2.8.0
         */
        isSimpleData?: boolean;
        /**
         * 设置根节点的 pid 属性值
         * @default null
         * @since 2.8.2
         */
        rootPid?: string | null;
        /**
         * 用于设置复选的级联方式。支持以下可选值：
         * - all : 所有节点联动(默认)
         * - parent : 仅对父节点联动
         * - children : 仅对子节点联动
         * - none : 不做任何联动(2.8.16+)
         * @default 'all'
         * @since 2.8.12
         */
        cascade?: 'all' | 'parent' | 'children' | 'none';
    }

    /**
     * 树表 `tree.view` 视图相关的属性
     * @since 2.8.0
     */
    interface TreeTableTreeOptionsForView {
        /**
         * 层级缩进量
         * @default 14
         * @since 2.8.0
         */
        indent?: number;
        /**
         * 关闭时的折叠图标
         * @since 2.8.0
         */
        flexIconClose?: string;
        /**
         * 打开时的折叠图标
         * @since 2.8.0
         */
        flexIconOpen?: string;
        /**
         * 是否显示节点图标
         * @default true
         * @since 2.8.0
         */
        showIcon?: boolean;
        /**
         * 自定义节点图标。若设置了该属性或数据中有该字段信息，不管打开还是关闭都以这个图标的值为准
         * @since 2.8.0
         */
        icon?: string;
        /**
         * 自定义关闭时的节点图标
         * @since 2.8.0
         */
        iconClose?: string;
        /**
         * 自定义打开时的节点图标
         * @since 2.8.0
         */
        iconOpen?: string;
        /**
         * 叶子节点的图标
         * @since 2.8.0
         */
        iconLeaf?: string;
        /**
         * 若非父节点时，是否显示折叠图标
         * @default false
         * @since 2.8.0
         */
        showFlexIconIfNotParent?: boolean;
        /**
         * 双击节点时，是否自动展开父节点
         * @default true
         * @since 2.8.0
         */
        dblClickExpand?: boolean;
        /**
         * 是否默认展开全部节点
         * @default false
         * @since 2.8.7
         */
        expandAllDefault?: boolean;
    }

    /**
     * 树表 `tree.customName` 自定义属性名
     * @since 2.8.0
     */
    interface TreeTableTreeOptionsForCustomName {
        /**
         * 自定义「子节点集合」的属性名
         * @default 'children'
         * @since 2.8.0'
         */
        children?: string;
        /**
         * 自定义「是否属于父节点」的属性名
         * @default 'isParent''
         * @since 2.8.0
         */
        isParent?: string;
        /**
         * 自定义「节点」属性名
         * @default 'name'
         * @since 2.8.0
         */
        name?: string;
        /**
         * 自定义「节点索引」属性名
         * @default 'id'
         * @since 2.8.0
         */
        id?: string;
        /**
         * 自定义「父节点索引」属性名
         * @default 'parentId'
         * @since 2.8.0
         */
        pid?: string;
        /**
         * 自定义图标的属性名称
         * @default 'icon'
         * @since 2.8.4
         */
        icon?: string;
        /**
         * 设置根节点的 pid 属性值
         * @deprecated 2.8.2 已移除，请使用 {@link TreeTableTreeOptionsForData.rootPid|TreeTableTreeOptionsForData.rootPid}
         * @see {@link TreeTableTreeOptionsForData.rootPid|TreeTableTreeOptionsForData.rootPid}
         */
        rootId?: string;
    }

    /**
     * 树表 `tree` 选项
     */
    interface TreeTableTreeOptions {
        /**
         * 自定义属性名的集合
         * @since 2.8.0
         */
        customName?: TreeTableTreeOptionsForCustomName;
        /**
         * 视图相关的属性集合
         * @since 2.8.0
         */
        view?: TreeTableTreeOptionsForView;
        /**
         * 数据相关的属性集合
         * @since 2.8.0
         */
        data?: TreeTableTreeOptionsForData;
        /**
         * 异步相关的属性集合
         * @since 2.8.0
         */
        async?: TreeTableTreeOptionsForAsync;
        /**
         * 事件回调相关的属性集合
         * @since 2.8.0
         */
        callback?: TreeTableTreeOptionsForCallback;
    }

    interface TreeTableOptions extends TableOptions {
        tree?: TreeTableTreeOptions;
        /**
         * 数据渲染之前的回调函数
         * @param opts 基础参数
         */
        before(opts: Required<TreeTableOptions>): void;
    }

    interface TreeTableAddNodesOptions {
        /**
         * 父节点数据下标
         * 一般在 tool 事件中，可通过对应数据项中的 `LAY_DATA_INDEX` 特定属性获得
         */
        parentIndex: number | string;
        /**
         * 节点对应的行下标。若为 -1 表示插入到最后，否则则插入到对应下标。
         * @default -1
         */
        index?: number | string;
        /**
         * 新增的节点数据项。若新增的是多个节点，则用数组的形式。若只有一个节点可以是普通对象形式
         */
        data: Record<string, any> | Array<Record<string, any>>;
        /**
         * 是否聚焦到新增的节点。若存在多个，则聚焦到第一个新增的节点
         * @default false
         */
        focus?: boolean;
    }

    interface TreeTableExpandNodeOptions {
        /**
         * 节点数据下标
         */
        index: number | string;
        /**
         * 设置展开或关闭状态，若为 true 则表示展开；false 则为关闭；null 则表示切换
         */
        expandFlag?: boolean | null;
        /**
         * 子节点是否继承父节点的展开或关闭状态，expandFlag 属性必须为 boolean 型时才有效
         * @default false
         */
        inherit?: boolean;
        /**
         * 是否触发事件
         * @default false
         */
        callbackFlag?: boolean;
    }

    interface TreeTableSetRowCheckedOptions {
        /**
         * 要设置选中状态的行下标或行数据
         */
        index: number | string | object;
        /**
         * 选中状态
         * - true 选中；
         * - false 取消选中；
         * - null 切换。 其中，若为 radio 框，则不支持 null(切换)。
         */
        checked?: boolean;
        /**
         * 是否触发事件，若为 true，则 checked: false 无效。其对应的事件跟 table 的 radio,checkbox 事件用法一样
         */
        callbackFlag?: boolean;
    }

    interface TreeTableRenderReturn extends TableRenderReturn {
        /**
         * 当前表格配置属性
         */
        config: Required<TreeTableOptions>;
        /**
         * 对当前表格的完整重载
         */
        reload(options: Partial<TreeTableOptions>, deep?: boolean): void;
        /**
         * 仅数据重载
         * @since 2.7.0
         */
        reloadData(options: Partial<TreeTableOptions>, deep?: boolean): void;
    }

    /**
     * treeTable
     * @see https://layui.dev/docs/2/treeTable
     * @since 2.8.0
     */
    interface TreeTable extends Omit<Table, 'setRowChecked' | 'updateRow'> {
        /**
         * treeTable 组件渲染，核心方法
         * @param option 基础参数
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#render
         */
        render(option: TreeTableOptions): TreeTableRenderReturn;
        /**
         * 树表完整重载
         * @param id treeTable 的 id，唯一实例标识
         * @param option 基础参数
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#reload
         */
        reload(id: string, option?: Partial<TreeTableOptions>): TreeTableRenderReturn;
        /**
         * 树表数据重载
         * @param id treeTable 的 id，唯一实例标识
         * @param option 基础参数
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#reload
         */
        reloadData(id: string, option?: Partial<TreeTableOptions>): TreeTableRenderReturn;
        /**
         * 获取树表数据
         *
         * 该方法用于获取表格当前页的全部数据，它对应的是接口返回的原始数据，不包含 treeTable 组件内部的特定字段
         *
         * @param id treeTable 渲染时的 id 属性值
         * @param isSimpleData  是否为简单数据，为 true 时返回简单数据结构的数据，否则则为带层级的数据
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#getData
         */
        getData(id: string, isSimpleData?: boolean): any[];
        /**
         * 获取树表对应下标的数据
         *
         * 该方法用于获取表格当前页对应下表的数据，返回的数据格式同 `treeTable.getData()` 方法
         *
         * @param id  treeTable 渲染时的 id 属性值
         * @param index 节点对应的行下标，一般可通过 `<tr>` 元素的 `data-index` 属性获得
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#getNodeDataByIndex
         */
        getNodeDataByIndex(id: string, index: number): void;
        /**
         * 更新行数据
         * @param id treeTable 渲染时的 id 属性值
         * @param index 节点对应的行下标，一般可通过 `<tr>` 元素的 `data-index` 属性获得
         * @param data 更新的数据项，可包含要更新的各种字段
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#updateNode
         */
        updateNode(id: string, index: number, data: object): void;
        /**
         * 删除行记录
         * @param id  treeTable 渲染时的 id 属性值
         * @param index 要删除的节点数据，也可以是节点对应的行下标（ data-index）
         * @param _keepParent 是否保留父节点属性，即使 children 已删除
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#removeNode
         */
        removeNode(id: string, index: string | object, _keepParent?: boolean): void;
        /**
         * 新增行记录
         * @param id treeTable 渲染时的 id 属性值
         * @param opts 选项
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#addNodes
         */
        addNodes(id: string, opts: TreeTableAddNodesOptions): void;
        /**
         * 展开或关闭节点
         * @param id treeTable 渲染时的 id 属性值
         * @param opts 选项
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#expandNode
         */
        expandNode(id: string, opts: TreeTableExpandNodeOptions): void;
        /**
         * 展开或关闭全部节点（目前只支持关闭全部）
         * @param id treeTable 渲染时的 id 属性值
         * @param expandFlag 折叠状态。true 展开；false 关闭
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#expandAll
         */
        expandAll(id: string, expandFlag: boolean): void;
        /**
         * 设置行选中状态
         * @param id treeTable 渲染时的 id 属性值
         * @param opts
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#setRowChecked
         */
        setRowChecked(id: string, opts: TreeTableSetRowCheckedOptions): void;
        /**
         * 全选或取消全选
         * @param id treeTable 渲染时的 id 属性值
         * @param checked 选中状态。true 选中；false 取消选中；null 复选框模式时的切换。
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#checkAllNodes
         */
        checkAllNodes(id: string, checked: boolean | null): void;
        /**
         * 重载异步子节点
         * @param id treeTable 渲染时的 id 属性值
         * @param index 节点对应的行下标，一般可通过 `<tr>` 元素的 `data-index` 属性获得
         * @since 2.8.4
         * @see https://layui.dev/docs/2/treeTable/#reloadAsyncNode
         */
        reloadAsyncNode(id: string, index: string | number): void;
        /**
         * 获取节点信息集
         * @param id treeTable 渲染时的 id 属性值
         * @param dataId 数据项的 id 属性值
         * @since 2.8.4
         * @see https://layui.dev/docs/2/treeTable/#getNodeById
         */
        getNodeById(id: string, dataId: string): any;
        /**
         * 获取符合过滤规则的节点信息集
         * @param id treeTable 渲染时的 id 属性值
         * @param filter 过滤函数
         * @param opts 选项
         * - isSingle 是否只找到第一个;
         * - parentNode 在指定在某个父节点下的子节点中搜索
         * @since 2.8.4
         * @see https://layui.dev/docs/2/treeTable/#getNodesByFilter
         */
        getNodesByFilter(id: string, filter: (item: any) => boolean, opts?: { isSingle?: boolean; parentNode?: object }): object;
        /**
         *
         * @param id treeTable 渲染时的 id 属性值
         * @param includeHalfCheck 是否包含半选状态的数据(2.8.4)
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#checkStatus
         */
        checkStatus(id: string, includeHalfCheck?: boolean): TablecheckStatusReturn;
        /**
         * 表格事件
         * 
         * `treeTable.on('event(filter)', callback);`
         * 
         * - 参数 event(filter) 是事件的特定结构。 event 为事件名，支持的事件见下表。filter 为元素属性 lay-filter 对应的值
         * - 参数 callback 为事件执行时的回调函数，并返回一个包含各项成员的 object 类型的参数
         * 
         * |  event | 描述 |
         * | --- | --- |
         * | toolbar | 头部工具栏事件 |
         * | sort | 表头排序切换事件 |
         * | colTool | 表头自定义元素工具事件（2.8.8） |
         * | colResized | 列拖拽宽度后的事件（2.8.0） |
         * | colToggled | 列筛选（显示或隐藏）后的事件（2.8.0） |
         * | row | 行单击事件 |
         * | rowDouble | 行双击事件 |
         * | rowContextmenu | 行右键菜单事件（2.8.0） |
         * | edit | 单元格编辑事件 |
         * | tool | 单元格工具事件。可在该事件中实现行的更新与删除操作 |
         * | toolDouble | 单元格工具事件。可在该事件中实现行的更新与删除操作（2.7.0） |
         * | checkbox | 复选框事件 |
         * | radio | 单选框事件 |
         * | pagebar | 尾部分页栏事件（2.7.0） |
         * @param event event(filter)
         * @param callback 事件回调参数
         * @see https://layui.dev/docs/2/table/#table.on
         */
        on<K extends keyof TableEventMap<TreeTableOptions, TreeTableSetRowCheckedOptions>>(event: `${K}(${TableFilter})`, callback: TableEventMap<TreeTableOptions, TreeTableSetRowCheckedOptions>[K]): void;
        on<K extends keyof TableEventMap<TreeTableOptions, TreeTableSetRowCheckedOptions>>(event: K, callback: TableEventMap<TreeTableOptions, TreeTableSetRowCheckedOptions>[K]): void;
        on<K extends string>(event: `${K}(${TableFilter})`, callback: AnyFn): void;
        /**
         * @internal
         * @param id treeTable 渲染时的 id 属性值
         */
        sort(id: string): void;
    }
}

// modules/upload.d.ts
declare namespace Layui {
    interface UploadOptions {
        /**
         * 绑定元素选择器或 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 触发上传的元素
         * @deprecated 已废弃，请使用 bindAction
         */
        readonly item?: HTMLElement;
        /**
         * 服务端上传接口
         */
        url?: string;
        /**
         * 请求上传接口的额外参数,支持属性为 function 设置动态值
         * @since 2.9.3新增了函数的参数，参数: index 当前文件索引；file 当前文件对象
         */
        data?: { [index: string]: ((index?: number, file?: File) => string | number) | string | number };
        /**
         * 接口的请求头。如：`headers: {token: 'sasasas'}`
         */
        headers?: object;
        /**
         * 指定允许上传时校验的文件类型
         *
         * 可选值有：
         * - `images` 图片类型
         * - `file` 所有文件类型
         * - `video` 视频类型
         * - `audio` 音频类型
         */
        accept?: 'images' | 'file' | 'video' | 'audio';
        /**
         * 规定打开文件选择框筛选出的文件类型，多个 MIME 类型可用逗号隔开。示例：
         * ```
         * acceptMime: 'image/*' // 筛选所有图片类型
         * acceptMime: 'image/jpeg, image/png'// 只显示 jpg 和 png 文件
         * ```
         * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types|MIME类型}
         */
        acceptMime?: string;
        /**
         * 规定强制返回的数据格式
         * - 若值为 'json'，则强制校验 JSON 数据格式
         * @default null
         * @since 2.6.9
         */
        force?: string | null;
        /**
         * 允许上传的文件后缀。一般结合 accept 属性来设定。
         * 
         * - 假设 accept: 'file' 类型时，那么设置 exts: 'zip|rar|7z' 即代表只允许上传压缩格式的文件。
         * - 默认为常见图片后缀，即 jpg|png|gif|bmp|jpeg|svg
         */
        exts?: string;
        /**
         * 是否选完文件后自动上传。若为 false，则需设置 bindAction 属性来指向其它按钮提交上传
         * @default true
         */
        auto?: boolean;
        /**
         * 设置触发上传的元素选择器或 DOM 对象。一般配合 auto: false 来使用
         */
        bindAction?: string | HTMLElement;
        /**
         * 文件域的字段名
         * @default 'file'
         */
        field?: string;
        /**
         * 设置文件最大可允许上传的大小，单位 KB。不支持 ie8/9 ，默认:0（即无限制）
         * @default 0
         */
        size?: number;
        /**
         * 是否允许多文件上传。设置 true即可开启。不支持 ie8/9
         * @default false
         */
        multiple?: boolean;
        /**
         * 设置同时可上传的文件数量，一般配合 multiple 参数出现。默认:0（即无限制）
         * @default 0
         */
        number?: number;
        /**
         * 更新文件域相关属性
         * @deprecated
         */
        name?: string;
        /**
         * 是否接受拖拽的文件上传，设置 false 可禁用。不支持 ie8/9
         * @default true
         */
        drag?: boolean;
        /**
         * 请求上传的 http 类型
         * @deprecated
         */
        method?: string;
        /**
         * 选择多文件时是否统一上传，即只发送一次请求
         * @default false
         * @since 2.8.8
         */
        unified?: boolean;
        /**
         * 自定义内部各类场景下的提示文本
         * @since 2.8.9
         */
        text?: UploadText;
        /**
         * 服务端返回的数据类型
         * @default 'json''
         * @since 2.8.17
         */
        dataType?: string;
        /**
         * 选择文件后的回调函数
         * @param obj 回调参数(工具对象)
         */
        choose?(this: UploadOptionsThis, obj: UploadCallbackArg): void;
        /**
         * 文件提交上传前的回调，返回 false 则停止上传
         * @since 2.9.11+ 新增支持 Promise
         * @param obj 回调参数(工具对象)
         */
        before?(this: UploadOptionsThis, obj: UploadCallbackArg): void | MaybePromise<boolean>;
        /**
         * 上传后的回调
         * @param res 服务端response json
         * @param index 当前文件索引 (选择文件时自动生成的：new Date().getTime()+'-'+i)
         * @param upload 上传函数
         */
        done?(this: UploadOptionsThis, res: any, index: string, upload: (files?: Blob[]) => void): void;
        /**
         * 执行上传请求出现异常的回调（一般为网络异常、URL 404等）。
         * 返回两个参数，分别为：index（当前文件的索引）、upload（重新上传的方法
         * @param index 当前文件索引 (选择文件时自动生成的：new Date().getTime()+'-'+i)
         * @param upload 上传函数
         * @param res 返回值（纯文本）2.9.13+
         * @param xhr jQuery xhr 对象 2.9.16+
         */
        error?(this: UploadOptionsThis, index: string, upload: (files?: Blob[]) => void, res: string, xhr: JQuery.jqXHR): void;
        /**
         *  当文件全部被提交后，才触发
         * @param obj 回调参数
         */
        allDone?(this: UploadOptionsThis, obj: UploadAllDoneArg): void;
        /**
         * 进度回调
         * @param percent 数字进度
         * @param elem render参数中的elem（即点击元素dom）
         * @param event 事件
         * @param index 当前文件索引  (选择文件时自动生成的：new Date().getTime()+'-'+i)
         */
        progress?(this: UploadOptionsThis, percent: number, elem: HTMLElement, event: ProgressEvent, index: string): void;
    }

    type UploadOptionsThis = Required<UploadOptions>;

    interface UploadAllDoneArg {
        /**
         * 得到总文件数
         */
        total: number;
        /**
         * 请求成功的文件数
         */
        successful: number;
        /**
         * 请求失败的文件数
         * @deprecated 使用 {@link UploadAllDoneArg.failed|failed}
         */
        aborted: number;
        /**
         * 请求失败的文件数
         */
        failed: number;
    }

    interface UploadCallbackArg {
        /**
         * 预览
         * @param callback index索引，file文件，result 文件 base64 编码
         */
        preview(callback: (index: string, file: File, result: string) => void): void;
        /**
         * 上传单个文件
         * 
         * 对上传失败的单个文件重新上传，一般在某个事件中使用
         * @param index 索引 (选择文件时自动生成的：new Date().getTime()+'-'+i)
         * @param file 文件
         */
        upload(index: string, file: Blob): void;
        /**
         * 追加文件到队列, 比如 choose 回调中将每次选择的文件追加到文件队列
         */
        pushFile(): Record<string, File>;
        /**
         * 重置文件和文件名
         * @param index 被重置的文件索引 (选择文件时自动生成的：new Date().getTime()+'-'+i)
         * @param file 新的文件
         * @param filename 新的名字
         */
        resetFile(index: string, file: Blob, filename: any): void;
        /**
         * 获取本次选取的文件，大文件建议用此方法获取文件信息
         * @since 2.9.9
         */
        getChooseFiles(): File[];
    }

    interface UploadReturn {
        /**
         * 参数信息
         */
        config: Record<string, any>;
        /**
         * 重载该实例，支持重载全部基础参数
         * @param options 基础参数
         */
        reload(options?: Partial<UploadOptions>): void;
        /**
         * 重新上传的方法，一般在某个事件中使用
         * @param files 需要上传的文件数组
         */
        upload(files?: Blob[]): void;
    }

    interface UploadText {
        /**
         * 数据格式错误的提示
         */
        'data-format-error'?: string;
        /**
         * 文件格式校验失败的提示
         */
        'check-error'?: string;
        /**
         * 上传失败的提示
         */
        error?: string;
        /**
         * 限制 number 属性的提示。若设置，需为函数写法
         */
        'limit-number'?: (options: UploadOptionsThis, fileLength: number) => string;
        /**
         * 限制 size 属性的提示。若设置，需为函数写法
         */
        'limit-size'?: (options: UploadOptionsThis, limitSize: number) => string;
        /**
         * IE 下跨域的提示
         */
        'cross-domain'?: string;
    }

    /**
     * 上传
     * @see https://layui.dev/docs/2/upload/
     */
    interface Upload {
        /**
         * 全局参数项
         */
        config: Record<string, any>;
        /**
         * 绑定事件，内部 modName 默认为 upload，绑定参考 layui.onevent，触发参考 layui.event
         * @param events
         * @param callback
         */
        on(events: string, callback: (this: Layui, obj: any) => any): any;
        /**
         * 核心方法
         * @param option 属性选项
         */
        render(option: UploadOptions): UploadReturn;
        /**
         * 设置upload全局参数(预设基础参数值)
         * @param option 属性选项
         */
        set(option?: Partial<UploadOptions>): Upload;
    }
}

// modules/util.d.ts
declare namespace Layui {
    /**
     * @see https://layui.dev/docs/2/fixbar/#options
     */
    interface UtilBarOptions {
        /**
         * 默认false。如果值为true，则显示第一个bar，带有一个默认图标
         * 
         * 如果值为图标字符，则显示第二个bar，并覆盖默认图标
         * @deprecated 2.8.0 已废弃，请使用 {@link UtilBarOptions.bars|bars}
         * @see {@link UtilBarOptions.bars|bars}
         */
        bar1?: boolean | string;
        /**
         * 默认false。如果值为true，则显示第二个bar，带有一个默认图标
         * 
         * 如果值为图标字符，则显示第二个bar，并覆盖默认图标
         * @deprecated 2.8.0 已废弃，请使用 {@link UtilBarOptions.bars|bars}
         * @see {@link UtilBarOptions.bars|bars}
         */
        bar2?: boolean | string;
        /**
         * 设置固定工具条列表
         * @example
         * ```
         * bars: [
         *   {
         *     type: '', // bar 类型名，用于事件区分
         *     icon: '', // bar 图标的 className
         *     content: '', // bar 任意内容
         *     style: '' // bar 任意样式
         *   },
         *   // …
         * ]
         * ```
         * @since 2.8.0
         */
        bars?: {
            /**
             * bar 类型名，用于事件区分
             */
            type: string;
            /**
             * bar 图标的 className
             */
            icon?: string;
            /**
             * bar 任意内容
             */
            content?: string;
            /**
             * bar 任意样式
             */
            style?: string;
        }[];
        /**
         * 是否显示默认的固定条 ，如 top
         * @default true
         * @since 2.8.0
         */
        default?: boolean;
        /**
         * 插入固定条的目标元素选择器
         * @default body
         * @since 2.8.0
         */
        target?: JQuery;
        /**
         * 固定条最外层容器滚动条所在的元素，若不设置则默认取 `target` 属性值
         * @default body
         * @since 2.8.0
         */
        scroll?: JQuery;
        /**
         * 设置默认 TOP 条出现滚动条的高度临界值
         * @default 200
         * @since 2.8.0
         */
        margin?: number;
        /**
         * 设置默认 TOP 条等动画时长
         * @default 200
         * @since 2.8.0
         */
        duration?: number;
        /**
         * 用于定义固定条列表的任意事件，触发事件时的回调将返回 bars 属性的 type 值
         * @since 2.8.0
         */
        on?: { [index: string]: (type?: string) => void };
        /**
         * 自定义区块背景色
         */
        bgcolor?: string;
        /**
         * 用于控制出现 TOP 按钮的滚动条高度临界值。默认：200
         * @deprecated 2.8.0 已废弃, 请使用 {@link UtilBarOptions.margin|margin}
         * @see {@link UtilBarOptions.margin|margin}
         */
        showHeight?: number;
        /**
         * 你可以通过重置bar的位置，比如 css: {right: 100, bottom: 100}
         */
        css?: { [key: string]: string | number | boolean };
        /**
         * 点击bar的回调，函数返回一个type参数，用于区分 bar 类型
         * 
         * 支持的类型有：bar1、bar2、top
         * @param type  bar1、bar2、top
         * @deprecated 2.8.0 已废弃，请使用 {@link UtilBarOptions.on|on}
         */
        click?(type: LiteralStringUnion<'bar1' | 'bar2' | 'top'>): void;
    }

    /**
     * @see https://layui.dev/docs/2/util/#openWin
     */
    interface UtilOpenWinOptions {
        /**
         * 要打开页面 URL
         */
        url?: string;
        /**
         * 打开页面的方式或窗口 name
         */
        target?: LiteralStringUnion<'_blank' | '_parent' | '_self' | '_top'>;
        /**
         * 打开的页面内容。若设置了 url 属性，则该属性无效
         */
        content?: string;
        /**
         * 窗口的相关配置，同 window.open() 的 specs
         */
        specs?: string;
        /**
         * 当前所在的窗口对象，默认 self
         */
        window?: Window;
    }

    /**
     * @see https://layui.dev/docs/2/util/#countdown
     */
    interface UtilCountdownOptions {
        /**
         * 目标时间值。值可以为毫秒数或 Date 对象
         */
        data: number | Date;
        /**
         * 当前时间值，一般为当前服务器时间。值可以为毫秒数或 Date 对象
         */
        now: number | Date;
        /**
         * 倒计时初始时的回调函数。
         */
        ready?: () => void;
        /**
         * 倒计时计时中的回调函数，每秒触发一次，直到计时完成
         */
        clock?: (timeObj: { d: number; h: number; m: number; s: number }, countdown: UtilCountdownReturn) => void;
        /**
         * 倒计时计时完成的回调函数，即到达目标时间值时触发
         */
        done?: (timeObj: { d: number; h: number; m: number; s: number }, countdown: UtilCountdownReturn) => void;
    }

    interface UtilCountdownReturn {
        /**
         * 清除当前倒计时
         */
        clear: Fn;
        /**
         * 重载当前倒计时
         */
        reload: (options: UtilCountdownOptions) => void;
        /**
         * 当前倒计时计时器 ID
         */
        timer: number;
    }

    type TypeToTriggeredEventMap<TElement> = JQuery.TypeToTriggeredEventMap<TElement, undefined, any, any>

    type TriggerEvent<TElement> = keyof Layui.OmitIndexSignature<TypeToTriggeredEventMap<TElement>>;

    /**
     * 工具集
     * @see https://layui.dev/docs/2/util/
     */
    interface Util {
        /**
         * 固定块
         * @param option 参数
         * @see https://layui.dev/docs/2/fixbar/
         */
        fixbar(option: UtilBarOptions): void;
        /**
         * 倒计时
         * @param endTime 结束时间戳或 Date 对象，如：4073558400000，或：new Date(2099,1,1)
         * @param serverTime 当前服务器时间戳或 Date 对象
         * @param callback 回调函数。如果倒计时尚在运行，则每一秒都会执行一次。并且返回三个参数：
         * - date（包含天/时/分/秒的对象）
         * - serverTime（当前服务器时间戳或Date对象）
         * - timer（计时器返回的ID值，用于clearTimeout）
         * 
         * @deprecated 2.8.8 此签名已弃用
         */
        countdown(
            endTime?: number | Date,
            serverTime?: number | Date,
            callback?: (date: number[], serverTime_: typeof serverTime, timer: number) => void,
        ): void;
        /**
         * 倒计时
         * @param options 
         * @since 2.8.8
         */
        countdown(options: UtilCountdownOptions): UtilCountdownReturn;
        /**
         * 某个时间在当前时间的多久前
         * @param time 当前时间之前的时间戳或日期对象
         * @param onlyDate 是否在超过 30 天后，只返回日期字符，而不返回时分秒
         */
        timeAgo(time: number | Date, onlyDate?: boolean): string;
        /**
         * 转化时间戳或日期对象为日期格式字符
         * 
         * 参数 `format` 所有可用的格式列表 :
         * 
         * | 格式 | 示例 | 描述 |
         * | --- | --- | --- |
         * | yy | 23 | 年，两位数 (2.8.13+) |
         * | yyyy | 2023 | 年，四位数 |
         * | M | 1-12 | 月 (2.8.13+) |
         * | MM | 01-12 | 月，两位数 |
         * | d | 1-31 | 日 (2.8.13+) |
         * | dd | 01-31 | 日，两位数 |
         * | H | 0-23 | 小时 (2.8.13+) |
         * | HH | 00-23 | 小时，两位数 |
         * | h | 1-12 | 小时，12 小时制 (2.8.13+) |
         * | hh | 01-12 | 小时，12 小时制，两位数 (2.8.13+) |
         * | A | 凌晨/早上/上午/中午/下午/晚上 | meridiem (2.8.13+) |
         * | m  | 0-59 | 分钟 (2.8.13+) |
         * | mm | 00-59 | 分钟，两位数 |
         * | s | 0-59 | 秒 (2.8.13+) |
         * | ss | 00-59 | 秒，两位数 |
         * | SSS | 000-999 | 毫秒，三位数 (2.8.13+) |
         * 
         * @param time 毫秒数或日期对象
         * @param format 默认：yyyy-MM-dd HH:mm:ss
         * @param option 参数选项
         * @example
         * ```js
         * customMeridiem: function(hours, minutes){ 
         *   return hours < 12 ? '上午' : '下午'; 
         * }
         * ```
         */
        toDateString(
            time: number | Date,
            format?: string,
            option?: { customMeridiem?: (hours: number, minutes: number) => string }
        ): string;
        /**
         * 数字前置补零
         * @param num 数字
         * @param length 补 0 后的长度，默认 2
         */
        digit(num: number | string, length?: number): string;
        /**
         * 转义 xss 字符
         * @param str
         */
        escape(str: any): string;
        /**
         * 将转义后的 HTML 还原
         * @since 2.6.0
         */
        unescape(str: any): string;
        /**
         * 打开浏览器新标签页
         * @param options 属性配置项
         * @since 2.8.0
         */
        openWin(options: UtilOpenWinOptions): void;
        /**
         * 批量处理事件
         * @param attr 绑定需要监听事件的元素属性
         * @param obj 事件集合
         * @since 2.5.0
         * @deprecated 2.8.0 已弃用,请使用 {@link Util.on|util.on}
         * @see {@link Util.event|util.on}
         */
        event(attr: string, obj: { [index: string]: (othis: JQuery) => any }, eventType?: TriggerEvent<HTMLBodyElement>): void;
        /**
         * 批量事件处理
         * @param attr 触发事件的元素属性名，默认值 'lay-on'
         * @param events 事件集合
         * @param trigger 事件触发的方式，默认值 'click'
         * @returns 返回当前 events 参数设置的事件集合
         * @since 2.8.0
         * @since 2.9.0 事件处理函数新增第二个参数 e 事件对象；新增事件集合返回值；
         */
        on<TEventType extends TriggerEvent<TElement> = 'click', TElement = HTMLBodyElement>(
            attr: string,
            events: {
                [attrValue: string]: (othis: JQuery, e?: TypeToTriggeredEventMap<TElement>[TEventType]) => any
            },
            trigger?: TEventType,
        ): typeof events;
        /**
         * 批量事件处理
         * @param attr 触发事件的元素属性名，默认值 'lay-on'
         * @param events 事件集合
         * @param options 参数的更多选项
         * - elem 触发事件的委托元素，默认值 body
         * - trigger 事件触发的方式，默认值 'click'
         * @returns 返回当前 events 参数设置的事件集合
         * @since 2.9.0
         */
        on<TEventType extends TriggerEvent<TElement> = 'click', TElement = HTMLBodyElement>(
            attr: string,
            events: {
                [attrValue: string]: (othis: JQuery, e: TypeToTriggeredEventMap<TElement>[TEventType]) => any
            },
            options?: {
                trigger?: TEventType | TriggerEvent<TElement>;
                elem?: string | TElement | JQuery<TElement>
            },
        ): typeof events
        /**
         * 批量事件处理
         * @param events 事件集合
         * @param trigger 事件触发的方式，默认值 'click'
         * @returns 返回当前 events 参数设置的事件集合
         * @since 2.9.0
         */
        on<TEventType extends TriggerEvent<TElement> = 'click', TElement = HTMLBodyElement>(
            events: {
                [attrValue: string]: (othis: JQuery, e: TypeToTriggeredEventMap<TElement>[TEventType]) => any
            },
            trigger?: TEventType,
        ): typeof events
        /**
         * 批量事件处理
         * @param events 事件集合
         * @param options 参数的更多选项
         * - elem 触发事件的委托元素，默认值 body
         * - trigger 事件触发的方式，默认值 'click'
         * @returns 返回当前 events 参数设置的事件集合
         * @since 2.9.0
         */
        on<TEventType extends TriggerEvent<TElement> = 'click', TElement = HTMLBodyElement>(
            events: {
                [attrValue: string]: (othis: JQuery, e: TypeToTriggeredEventMap<TElement>[TEventType]) => any
            },
            options?: {
                trigger?: TEventType | TriggerEvent<TElement>;
                elem?: string | TElement | JQuery<TElement>
            },
        ): typeof events;
    }
}