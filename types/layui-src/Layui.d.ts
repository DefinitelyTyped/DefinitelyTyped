interface Layui {
    $: JQueryStatic;
    carousel: Layui.Carousel;
    colorpicker: Layui.ColorPicker;
    dropdown: Layui.DropDown;
    element: Layui.Element;
    flow: Layui.Flow;
    form: Layui.Form;
    global: {};
    jquery: JQueryStatic;
    lay: Layui.Lay;
    laydate: Layui.Laydate;
    layedit: Layui.Layedit;
    layer: Layui.Layer;
    laypage: Layui.Laypage;
    laytpl: Layui.Laytpl;
    "layui.all": string;
    rate: Layui.Rate;
    slider: Layui.Slider;
    table: Layui.Table;
    transfer: Layui.Transfer;
    tree: Layui.Tree;
    upload: Layui.Upload;
    util: Layui.Util;
    v: string;

    // https://www.layui.com/doc/base/infrastructure.html
    /**
     * 静态属性。获得一些配置及临时的缓存信息
     */
    cache: Layui.CacheData;

    /**
     * 内置模块名和外置名称映射
     */
    modules: Layui.Modules;

    // -----------------prototype method-------------------------------------↓↓↓↓

    // https://www.layui.com/doc/base/infrastructure.html
    /**
     * 对象是否为泛数组结构，实例：	<br/>&nbsp;
     *   layui._isArray([1,6]); true	<br/>&nbsp;
     *   layui._isArray($('div')); true	<br/>&nbsp;
     *   layui._isArray(document.querySelectorAll('div')); true
     * @param [obj] 如 Array、NodeList、jQuery 对象等等。
     */
    _isArray(obj: any): boolean;

    // https://www.layui.com/doc/base/infrastructure.html
    /**
     * 获取详细数据类型（基本数据类型和各类常见引用类型）	<br/>&nbsp;
     *  常见类型字符:Function|Array|Date|RegExp|Object|Error|Symbol	<br/>&nbsp;
     *  实例：layui._typeof([]); //array layui._typeof({}); //object layui._typeof(new Date()); //date等等。
     * @param [operand]  参数
     */
    _typeof(operand: any): string;

    /**
     * 动态加载 CSS文件（相对路径）
     * @param [filename] 文件名,相对路径 比如a.css,/a/a.css
     * @param [callback]  css文件加载成功后的回调，错误则不会调用
     * @param [cssname]  用于id标识，比如xx则生成link标签的id是 layuicss-xx	<br/>&nbsp;
     *                  如果不传，则用文件名拼接，比如layui.js则id是layuicss-layuijs
     */
    addcss(filename: string, callback: () => void, cssname?: string): any;

    /**
     * 动态加载 CSS文件（相对路径）
     * @param [filename]  文件名,相对路径 比如a.css,/a/a.css
     * @param [cssname]  用于id标识，比如xx则生成link标签的id是 layuicss-xx	<br/>&nbsp;
     *                  如果不传，则用文件名拼接，比如layui.js则id是layuicss-layuijs
     */
    addcss(filename: string, cssname?: string): any;

    // https://www.layui.com/doc/base/infrastructure.html
    // https://www.layui.com/doc/base/modules.html
    /**
     * 全局配置，设置并返回（layui级别配置，影响layui.xx模块配置）
     * @param [options] 参数 可选
     */
    config(options?: Layui.GlobalConfigOptions): Layui;

    // https://www.layui.com/doc/base/infrastructure.html
    /**
     *  本地存储 基于localStorage	<br/>&nbsp;
     *   layui对 localStorage 和 sessionStorage 友好封装，可更方便地管理本地数据。
     * @param [tableName]  key键， 为sessionStorage中的一个key
     * @param [row] 存储的json对象数据
     */
    data(tableName: string, row?: { key: string; value?: any; remove?: boolean } | null): any;

    // https://www.layui.com/doc/base/modules.html#extend
    /**
     * 扩展一个 layui 模块,挂载到layui上
     * @param [mods] 模块名，用于声明当前新定义模块所依赖的模块
     * @param [callback]  回调函数： 通过回调中参数export来挂载模块到layui	<br/>&nbsp;
     *      模块加载完毕的回调函数，它返回一个 exports 参数，用于输出该模块的接口。	<br/>&nbsp;
     *      其参数exports 是一个函数，它接受两个参数，第1个参数为模块名，第2个参数为模块接口。
     */
    define(mods: string[] | string, callback: Layui.ExportsCallback): any;
    /**
     *  扩展一个 layui 模块,挂载到layui上
     * @param [callback]  回调函数： 通过回调中参数export来挂载模块到layui	<br/>&nbsp;
     *      模块加载完毕的回调函数，它返回一个 exports 参数，用于输出该模块的接口。	<br/>&nbsp;
     *      其参数exports 是一个函数，它接受两个参数，第1个参数为模块名，第2个参数为模块接口。
     */
    define(callback: Layui.ExportsCallback): any;

    // https://www.layui.com/doc/base/infrastructure.html
    // 获取浏览器信息,从navigator.userAgent.toLowerCase()中匹配
    /**
     * 获取浏览器信息：内置属性
     * @param [key]  获取浏览器信息
     */
    device(key: "android" | "ie" | "ios" | "mobile" | "weixin"): boolean;

    /**
     * 获取浏览器信息:根据指定的key
     * @param [key] 属性
     */
    device(key: string): any;

    /**
     * 获取浏览器信息：系统
     * @param [key]
     */
    device(key: "os"): string;
    /**
     * 获取浏览器信息:全部
     */
    device(): {
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
         * 当前浏览器是否为 IOS 系统环境
         */
        ios: boolean;
        /**
         * 当前浏览器是否为移动设备环境
         * @since v2.5.7
         */
        mobile: boolean;
        [index: string]: any;
    };
    // https://www.layui.com/doc/base/infrastructure.html
    /**
     * 对象（Array、Object、DOM 对象等）遍历，可用于取代 for 语句
     * @param [arry]  Array对象
     * @param [fn] 回调函数
     */
    each(arry: any[], fn?: (k: number, v: any) => void): Layui;

    /**
     * 对象（Array、Object、DOM 对象等）遍历，可用于取代 for 语句
     * @param [obj] Object等对象
     * @param [fn] 回调函数
     */
    each(obj: object, fn: (k: string, v: any) => void): Layui;

    // https://www.layui.com/doc/base/infrastructure.html
    /**
     * 执行自定义模块事件，搭配 onevent 使用,参数说明：<br/>&nbsp;
     *  实例一：按照select后边括号内容filter来匹配，比如filter空或没有括号则可匹配到<br/>&nbsp;
     *      layui.onevent("form", "select()", console.log);<br/>&nbsp;
     *      layui.event("form","select()",[1,2,3]);<br/>&nbsp;
     *  实例二：{*}可匹配全部filter<br/>&nbsp;
     *      layui.onevent("form", "select(xx)", console.log);<br/>&nbsp;
     *      layui.event("form","select({*})",[1,2,3]);<br/>&nbsp;
     *  实例三：filter严格匹配<br/>&nbsp;
     *      layui.onevent("form", "select(xx)", console.log);<br/>&nbsp;
     *      layui.event("form","select(xx)",[1,2,3]);
     * @param [modName]  模块名称，比如form，<br/>&nbsp;
     * @param [events]  事件，比如：select(filter)<br/>&nbsp;
     * @param [params] 回调参数，作为绑定的回调函数的参数<br/>&nbsp;
     * @param [fn] 回调函数,不建议用
     */
    event(modName: string, events: string, params?: any, fn?: (...arg: any) => any): any;

    // https://www.layui.com/doc/base/modules.html#extend
    /**
     * 拓展一个模块别名，如：layui.extend({test: '/res/js/test'})
     * @param [options]
     */
    extend(options: { [index: string]: string }): Layui;

    // https://www.layui.com/doc/base/infrastructure.html
    /**
     * 用于获取模块对应的 define 回调函数
     * @param [modName] 模块名
     */
    factory(modName: string): (...arg: any) => any;

    // https://www.layui.com/doc/base/infrastructure.html
    /**
     * 获得一个原始 DOM 节点的 style 属性值，如：layui.getStyle(document.body, 'font-size')
     * @param [node]  必须dom
     * @param [name]  标签的css属性 比如 align-content
     */
    getStyle(node: HTMLElement | null, name: string): any;

    // https://www.layui.com/doc/base/infrastructure.html#other
    /**
     * 向控制台打印一些异常信息，目前只返回了 error方法：	<br/>&nbsp;
     *   实例：layui.hint().error('出错啦');layui.hint().error('出错啦','warn');
     */
    hint(): { error: (msg: any, type?: string | "log" | "info" | "error" | "warn" | "debug") => void };

    // https://www.layui.com/doc/base/infrastructure.html#other
    /**
     * 图片预加载
     * @param [url]  图片地址直接作为Image.src值
     * @param [callback]  回调函数，会透出img对象
     * @param [error]
     */
    img(url: string, callback?: (img: HTMLImageElement) => void, error?: (e: Event | string) => void): any;

    // https://www.layui.com/doc/base/infrastructure.html#link
    /**
     * 动态加载 CSS, 一般只是用于动态加载你的外部 CSS 文件
     * @param [href] css文件的地址(绝对or相对)直接作为link的href，如果要加载当前目录/css/aa.css可使用layui.addcss("aa.css")
     * @param [callback]  css文件加载成功后的回调，错误则不会调用
     * @param [cssname] 用于id标识，比如xx则生成link标签的id是 layuicss-xx	<br/>&nbsp;
     *                 如果不传，则用文件名拼接，比如layui.js则id是layuicss-layuijs
     */
    link(href: string, callback: () => void, cssname?: string): any;

    /**
     * 动态加载 CSS
     * @param [href]  css地址
     * @param [cssname]  用于id标识，比如xx则生成link标签的id是 layuicss-xx	<br/>&nbsp;
     *                  如果不传，则用文件名拼接，比如layui.js则id是layuicss-layuijs
     */
    link(href: string, cssname?: string): any;

    // https://www.layui.com/doc/base/infrastructure.html
    /**
     * 用于移除模块相关事件的监听
     * 如：layui.off('select(filter)', 'form')，那么 form.on('select(filter)', callback)的事件将会被移除。
     * @param [events]  事件名
     * @param [modName] 模块名,比如 layer,table,form等
     */
    off(events: string, modName: string): Layui;

    /**
     * 禁止使用，请传入callback
     * @param [events] 事件名
     * @param [modName] 模块名,比如 layer,table,form等
     */
    on(events: string, modName: string): Layui;
    /**
     *  触发指定模块的指定事件	<br/>&nbsp;
     *  实例：layui.on("select(filter)","form",console.log);
     * @param [events] 事件名
     * @param [modName]  模块名,比如 layer,table,form等
     * @param [callback] 回调函数
     */
    on(events: string, modName: string, callback: (obj: any) => any): (...arg: any) => any;

    // https://www.layui.com/doc/base/infrastructure.html
    /**
     * 禁止使用，请传入callback	<br/>&nbsp;
     * 增加自定义模块事件。有兴趣的同学可以阅读 layui.js 源码以及 form 模块
     * @param [modName] 模块名,比如 layer,table,form等
     * @param [events] 事件名
     */
    onevent(modName: string, events: string): Layui;

    /**
     * 增加自定义模块事件。有兴趣的同学可以阅读 layui.js 源码以及 form 模块
     * @param [modName]  模块名,比如 layer,table,form等
     * @param [events] 事件名
     * @param [callback]  回调函数
     */
    onevent(modName: string, events: string, callback: (obj: any) => any): (...arg: any) => any;

    // https://www.layui.com/doc/base/infrastructure.html
    /**
     *  获得 location.hash 路由结构，一般在单页面应用中发挥作用。
     * @param [hash]  默认 location.hash
     */
    router(hash?: string): Layui.UrlHash;

    // https://www.layui.com/doc/base/infrastructure.html
    /**
     *  本地存储 基于sessionStorage	<br/>&nbsp;
     *   layui对 localStorage 和 sessionStorage 友好封装，可更方便地管理本地数据。
     * @param [tableName]  key键， 为sessionStorage中的一个key
     * @param [row] 存储的json对象数据
     */
    sessionData(tableName: string, row?: { key: string; value?: any; remove?: boolean } | null): any;

    // https://www.layui.com/doc/base/infrastructure.html
    /**
     *  将数组中的对象按某个成员重新对该数组排序，如：	<br/>&nbsp;
     *  layui.sort([{a: 3},{a: 1},{a: 5}], 'a') 默认升序
     * @param [obj]  有比较key的对象数组
     * @param [key] 对象的一个属性，用于取值比较
     * @param [desc] true则启用降序， 默认false即升序
     */
    sort(obj: any[], key: string, desc?: boolean): any;

    // https://www.layui.com/doc/base/infrastructure.html
    /**
     * 阻止事件冒泡
     * @param [event]  阻止的事件
     */
    stope(event?: Event): void;
    // https://www.layui.com/doc/base/infrastructure.html
    /**
     *  用于将一段 URL 链接中的 pathname、search、hash 属性值进行对象化处理	<br/>&nbsp;
     *  参数： href 可选。若不传，则自动读取当前页面的 url（即：location.href）	<br/>&nbsp;
     *  示例：let url = layui.url();
     * @param [href]  http(s)地址
     */
    url(href?: string): {
        hash: Layui.UrlHash;
        pathname: string[];
        search: object;
    };
    // use function
    // https://www.layui.com/doc/
    // https://www.layui.com/doc/base/infrastructure.html
    // https://www.layui.com/doc/base/modules.html
    /**
     * 使用特定模块
     * @param [mods]  内置或自定模块名 (若模块不存在则抛js错误，callback不会执行)
     * @param [callback]  回调函数
     * @param [exports]  数组，存储对 mods解析后加载的模块
     */
    use<K extends keyof Layui.LayuiModuleMap>(
        mods: K,
        callback: (this: Layui, module: Layui.LayuiModuleMap[K]) => any,
        exports?: any[],
    ): { v: string };
    /**
     * 使用自定模块
     * @param [mods]  自定义模块，非内置模块
     * @param [callback]  回调函数
     * @param [exports]  数组，存储对 mods解析后加载的模块
     */
    use(mods: string, callback: (this: Layui, module: any) => any, exports?: any[]): { v: string };

    /**
     * 使用多模块
     * @param [mods]  内置或自定模块名 (若模块不存在则抛js错误，callback不会执行)
     * @param [callback]  回调函数 	<br/>&nbsp;
     *  1、不建议callback中设置参数因为没有TS约束，可用layui.xx调用具体模块;	<br/>&nbsp;
     *  2、手动在callback回调中指定类型比如 util:layui.Util
     * @param [exports] 暴露出挂载的对象
     */
    use(mods: string[], callback: (this: Layui, ...module: any) => any, exports?: any[]): { v: string };

    /**
     * 使用特定模块
     * @param [callback]  回调函数， 从 layui 2.6 开始，首个参数是callback函数，则表示引用所有内置模块到layui.xx<br/>&nbsp;
     * @param [exports]  无任何用途，可不传
     */
    use(callback: (this: Layui, module: { config: object; time: number }) => any, exports?: any[]): { v: string };

    /**
     * 代码高亮
     * https://www.layui.com/doc/modules/code.html
     * @param [option] 基础参数
     */
    code(option?: Layui.CodeOption): void;
}
