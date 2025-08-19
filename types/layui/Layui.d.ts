interface Layui extends Layui.GlobalModules {
    // -----------------Static members of layui-------------------------------------
    $: JQueryStatic;
    /**
     * 版本号
     */
    v: string;

    // -----------------The layui instance members----------------------------------

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
    device<K extends PropertyKey>(
        key?: K,
    ): K extends string ? Layui.deviceReturn & Record<K, boolean | string | undefined> : Layui.deviceReturn;
    /**
     * 对象（Array、Object、DOM 对象等）遍历，可用于取代 for 语句
     * @param collection Array 对象
     * @param callback 回调函数，返回 true 停止遍历，和 jQUery.each 相反
     * @see https://layui.dev/docs/2/base.html#api
     */
    each<T>(collection: ArrayLike<T>, callback: (this: T, indexInArray: number, value: T) => any): Layui;
    each<T, K extends keyof T>(
        collection: T,
        callback: (this: T[K], propertyName: K, valueOfProperty: T[K]) => any,
    ): Layui;
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
    hint(): { error: (msg: any, type?: string | "log" | "info" | "error" | "warn" | "debug") => void };
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
    use(
        callback: (this: Layui, module: { config: Layui.PlainObject; time: number }) => any,
        exports?: any[],
    ): { v: string };
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
