/**
 * 存储所有类型
 */
declare namespace Layui {
    /**
     * 第一个按钮回调即yes回调
     * @param [index] 当前层索引参数
     * @param [layero] 当前层的jqDOM
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    type LayerCallbackYes = (index: number, layero: JQuery) => boolean | void;
    /**
     * 层关闭的回调,如果不想关闭，return false即可
     * @param [index] 当前层索引参数
     * @param [layero] 当前层的DOM对象
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    type LayerCallbackCancel = (index: number, layero: JQuery) => boolean | void;
    type LayerCallbackEnd = () => void;
    type LayerCallbackFull = (layero: JQuery) => void;
    type LayerCallbackMin = (layero: JQuery, index: number) => void;
    type LayerCallbackRestore = (layero: JQuery) => void;
    /**
     * 输入层
     * @param [value] 输入的值
     * @param [index] 当前层实例的索引
     * @param [layero] 当前层的jqDOM
     */
    type LayerCallbackPrompt = (value: string, index: number, layero: JQuery) => void;

    type ExportsCallback = (this: Layui, fn: (app: string, exports: object) => void) => void;

    /**
     * 全局属性
     */
    interface GlobalConfigOptions {
        /**
         * layui.js 所在目录（如果是 script 单独引入 layui.js，无需设定该参数）一般可无视
         */
        dir?: string;
        /**
         * 一般用于更新模块缓存，默认不开启。设为 true 即让浏览器不缓存。也可以设为一个固定的值，如：201610
         */
        version?: boolean;
        /**
         * 用于开启调试模式，默认 false，如果设为 true，则JS模块的节点会保留在页面
         */
        debug?: boolean;
        /**
         * 设定扩展的 layui 模块的所在目录，一般用于外部模块扩展
         */
        base?: string;
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

    interface CarouselOption {
        /**
         * 指向容器选择器，如：elem: '#id'。也可以是DOM对象
         */
        elem?: string | HTMLElement | JQuery;
        /**
         * 设定轮播容器宽度，支持像素和百分比 默认：'600px'
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
         * @default 'default'
         * @example
         * anim: 'default' //（左右切换）
         * anim: 'updown'  //（上下切换）
         * anim: 'fade'    //（渐隐渐显切换）
         */
        anim?: "default" | "updown" | "fade";
        /**
         * 是否自动切换
         * @default true
         */
        autoplay?: boolean;
        /**
         * 自动切换的时间间隔，单位：ms（毫秒），不能低于800
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
         * @default 'hover'
         * @example
         * arrow: hover  // （悬停显示）
         * arrow: always // （始终显示）
         * arrow: none   //（始终不显示）
         */
        arrow?: "hover" | "always" | "none";
        /**
         * 指示器位置
         * @default 'inside'
         * @example
         * indicator: inside  // （容器内部）
         * indicator: outside // （容器外部）
         * indicator: none    //（不显示）
         */
        indicator?: "insider" | "outsider" | "none";
        /**
         * 指示器的触发事件
         * @default 'click'
         */
        trigger?: string;
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
        config: CarouselOption;
        /**
         * 初始焦点
         */
        elemItem: JQuery;

        /**
         * 轮播渲染
         */
        render(): void;

        /**
         * 重置轮播
         */
        reload(options: { [index: string]: string }): void;

        /**
         * 获取上一个等待条目的索引
         */
        prevIndex(): number;

        /**
         * 获取下一个等待条目的索引
         */
        nextIndex(): number;

        /**
         * 手动递增索引值
         */
        addIndex(num: number): void;

        /**
         * 手动递减索引值
         */
        subIndex(num: number): void;

        /**
         * 自动轮播
         */
        autoplay(): void;

        /**
         * 箭头
         */
        arrow(): void;

        /**
         * 指示器
         */
        indicator(): void;

        /**
         * 滑动切换 type ：sub减，其他增
         */
        slide(type: string, num: number): void;

        /**
         * 事件处理
         */
        events(): void;
    }

    // https://www.layui.com/doc/modules/carousel.html
    // carousel 是 layui 2.0 版本中新增的全新模块，主要适用于跑马灯/轮播等交互场景。
    //   它并非单纯地为焦点图而生，准确地说，它可以满足任何类型内容的轮播式切换操作，
    //   更可以胜任 FullPage （全屏上下轮播）的需求，简洁而不失强劲，灵活而优雅。
    /**
     * 轮播组件
     */
    interface Carousel {
        config: { [index: string]: any };

        /**
         * 核心入口
         */
        render(options: CarouselOption): object;

        /**
         * 绑定切换事件
         * @param [event]  事件
         * @param [callback]  回调
         */
        on(event: string, callback: (this: CarouselClass, obj: CarouselItem) => any): any;

        /**
         * 重置轮播
         * @param [options] 基础参数
         */
        reload(options?: CarouselOption): void;

        /**
         * 设置轮播组件的全局参数
         * @param [options] 基础参数
         */
        set(options?: CarouselOption): Carousel;
    }

    /**
     * code高亮参数
     */
    interface CodeOption {
        /**
         * 指定元素的选择器 默认值为.layui-code
         */
        elem?: string;
        /**
         * 设定标题 默认值为code
         */
        title?: string;
        /**
         * 设置最大高度,请注意必须加px,默认无：则会自适应高度，且不会出现滚动条
         */
        height?: string;
        /**
         * 是否转义html标签，默认false
         */
        encode?: boolean;
        /**
         * 风格选择（目前内置了两种:默认和notepad）
         */
        skin?: string;
        /**
         * 是否剔除右上关于
         */
        about?: boolean;
    }

    interface ColorPickerOption {
        /**
         * 指向容器选择器
         */
        elem?: string | HTMLElement | JQuery;
        /**
         *    默认颜色，不管你是使用 hex、rgb 还是 rgba 的格式输入，最终会以指定的格式显示。
         */
        color?: string;
        /**
         * 颜色显示/输入格式，可选值： hex、rgb  <br/>&nbsp;
         * 若在 rgb 格式下开启了透明度，格式会自动变成 rgba。在没有输入颜色的前提下，组件会默认为 #000 也就是黑色。
         */
        format?: "hex" | "rgb" | "rgba";
        /**
         * 是否开启透明度，若不开启，则不会显示透明框。<br/>&nbsp;
         * 开启了透明度选项时，当你的默认颜色为 hex 或 rgb 格式，组件会默认加上值为 1 的透明度。<br/>&nbsp;
         * 相同的，当你没有开启透明度，却以 rgba 格式设置默认颜色时，组件会默认没有透明度。<br/>&nbsp;
         * 注意：该参数必须配合 rgba 颜色值使用
         */
        alpha?: boolean;
        /**
         * 预定义颜色是否开启
         */
        predefine?: boolean;
        /**
         * 预定义颜色，此参数需配合 predefine: true 使用。
         */
        colors?: string[];
        /**
         * 下拉框大小，可以选择：lg、sm、xs。
         */
        size?: "lg" | "sm" | "xs";

        /**
         * 颜色被改变的回调
         */
        change?(this: ColorPickerOption, color: string): void;

        /**
         * 颜色选择后的回调
         */
        done?(this: ColorPickerOption, color: string): void;
    }

    // https://www.layui.com/doc/modules/colorpicker.html
    /**
     * 颜色选择器
     */
    interface ColorPicker {
        config: { [index: string]: any };
        index: number;

        render(option: ColorPickerOption): ColorPicker;

        set(option: ColorPickerOption): ColorPicker;

        /**
         * 绑定切换事件
         * @param [event] 事件名
         * @param [callback] 回调函数
         */
        on(event: string, callback: (this: Layui, params: any) => any): any;
    }

    interface DropDownOptionData {
        /**
         * 菜单标题
         */
        title?: string;
        /**
         * 菜单 ID。用户菜单项唯一索引
         */
        id?: string | number;
        /**
         * 菜单项的超链接地址。若填写，点击菜单将直接发生跳转。
         */
        href?: string;
        /**
         * 菜单项超链接的打开方式，需 href 填写才生效。 <br/>&nbsp;
         * 一般可设为 _blank 或 _self 等 默认：_self
         */
        target?: string;
        /**
         * 菜单项的类型,normal（默认） ,group（垂直菜单组） <br/>&nbsp;
         *   parent（横向父子菜单） ,-（分割线） 默认：normal 或 不填
         */
        type?: string;
        /**
         * 子级菜单数据项。参数同父级，可无限嵌套。  默认：[]
         */
        child?: any[];
        /**
         * 自定义当前菜单项模板，优先级高于全局设定的 templet。详见下文。
         */
        templet?: string;

        [index: string]: any;
    }

    interface DropDownOption {
        /**
         * 绑定触发组件的元素。必填项
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 菜单列数据项，其参数详见下文。必填项  也可用content支持模板
         */
        data?: DropDownOptionData[];
        /**
         * 给当前实例设置个唯一标识
         */
        id?: string;
        /**
         * 触发组件的事件类型。支持所有事件，如：click/hover/mousedown/contextmenu 等 默认：click
         */
        trigger?: string;
        /**
         * 是否初始即显示组件面板 默认：false
         */
        show?: boolean;
        /**
         * 下拉面板相对绑定元素的水平对齐方式（支持: left/center/right） v2.6.8 新增 默认：left
         */
        align?: "left" | "center" | "right";
        /**
         * 是否允许菜单组展开收缩 默认：true
         */
        isAllowSpread?: boolean;
        /**
         * 是否初始展开子菜单 默认：true
         */
        isSpreadItem?: boolean;
        /**
         * 延迟关闭的毫秒数。当 trigger 为 hover 时才生效 默认：300
         */
        delay?: number;
        /**
         * 自定义组件的样式类名
         */
        className?: string;
        /**
         * 设置组件的 style 属性，从而定义新的样式
         */
        style?: string;
        /**
         * 全局定义菜单的列表模板，添加任意 html 字符，模版将被 laytpl 组件所转义，<br/>&nbsp;
         *  因此可通过 {{ d.title }} 的方式得到当前菜单配置的数据。<br/>&nbsp;
         *   详见 https:// www.layui.com/doc/modules/dropdown.html#templet
         */
        templet?: string;
        /**
         * 自定义组件内容，从而替代默认的菜单结构
         */
        content?: string;

        /**
         * 组件成功弹出后的回调，并返回两个参数
         * @param [elemPanel]  弹出的面板
         * @param [elem]  点击的面板
         */
        ready?(elemPanel: JQuery, elem: JQuery): void;

        /**
         * 菜单项被点击时的回调，并返回两个参数
         */
        click?(data: any, othis: JQuery): void;
    }

    /**
     * reload时是用，全部可选
     */
    type DropDownOptionForReload = Partial<DropDownOption>;
    /**
     * 全部必有项 用于查看
     */
    type DropDownOptionForRead = Required<DropDownOption>;

    interface DropDownModule {
        config: DropDownOptionForRead;

        reload(options?: DropDownOptionForReload | object): void;
    }

    interface DropDown {
        config: { [index: string]: any };
        index: number;

        set(options: DropDownOption): DropDown;

        /**
         * 给dropdown绑定事件，当前只有click  即event类似:click(id|filter)
         * @param [event]  事件名 如： click(id|filter)  括号内是.layui-menu的id=""或者lay-filter=""
         * @param [callback]  回调中的参数是  <li lay-options="{id: 101}">中lay-options的值 字符串用''
         */
        on(event: string, callback: (this: HTMLElement, obj: any) => any): any;

        /**
         *  重载实例
         * @param [id]  id参数为render>options中的id，如果render时未指定id则从1开始。
         * @param [options]  全部基础参数
         */
        reload(id: string, options: DropDownOptionForReload): DropDownModule;

        /**
         * 核心入口
         */
        render(options: DropDownOption): DropDownModule;
    }

    interface TabOption {
        /**
         * 选项卡的标题 不写则是unnaming
         */
        title?: string;
        /**
         * '选项卡的内容' ,支持传入html
         */
        content?: string;
        /**
         * 选项卡标题的lay-id属性值
         */
        id?: string;
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

    // https://www.layui.com/doc/modules/element.html
    /**
     * 元素操作
     */
    interface Element {
        config: { [index: string]: any };

        // set(options?: ): object;  很少用

        /**
         * 用于元素的一些事件触发
         * @param [filter] 比如：tab(filter)，tabDelete(filter)，nav(filter)，collapse(filter)
         * @param [callback]  不同filter对应的data类型不同
         */
        on(filter: string, callback: (this: any, data: any) => any): any;

        /**
         * 用于新增一个Tab选项
         * @param [filter] tab元素的 lay-filter="value" 过滤器的值（value）
         * @param [options] 设定可选值的对象，
         */
        tabAdd(filter: string, options: TabOption): void;

        /**
         * 用于删除指定的Tab选项
         * @param [filter] tab元素的 lay-filter="value" 过滤器的值（value）
         * @param [layid] 选项卡标题列表的 属性 lay-id 的值
         */
        tabDelete(filter: string, layid: string): void;

        /**
         * 用于外部切换到指定的Tab项上
         * @param [filter] 比如：element.tabChange('demo', 'layid');中的'demo'
         * @param [layid] 比如：lay-id="yyy"中的'yyy'
         */
        tabChange(filter: string, layid: string): void;

        /**
         * 用于绑定自定义 Tab 元素（即非 layui 自带的 tab 结构）
         * @param [option] 参数
         */
        tab(option: TabElement): void;

        /**
         * 用于动态改变进度条百分比： 例如：element.progress('demo', '30%');
         * @param [filter]  lay-filter
         * @param [percent] 比例
         */
        progress(filter: string, percent: string): void;

        /**
         *  更新渲染同render， 2.1.6 开始，可以用 element.render(type, filter); 方法替代
         * @param [type]  可选有：'tab' | 'nav' | 'breadcrumb' | 'progress' | 'collapse'
         * @param [filter] lay-filter
         */
        init(type?: "tab" | "nav" | "breadcrumb" | "progress" | "collapse", filter?: string): void;

        /**
         * 更新渲染 ，当type不能识别时，layui会遍历渲染"tab""nav"|"breadcrumb"|"progress"|"collapse" 全部；<br/>&nbsp;
         * @param [type] 表单的type类型，如下：    <br/>&nbsp;
         *  1、tab 重新对tab选项卡进行初始化渲染, <br/>&nbsp;
         *  2、nav    重新对导航进行渲染   <br/>&nbsp;
         *  3、breadcrumb    重新对面包屑进行渲染  <br/>&nbsp;
         *  4、progress    重新对进度条进行渲染  <br/>&nbsp;
         *  5、collapse    重新对折叠面板进行渲染 <br/>&nbsp;
         * @param [filter] 为元素的 lay-filter="" 的值，用于局部更新
         */
        render(type?: "tab" | "nav" | "breadcrumb" | "progress" | "collapse", filter?: string): void;
    }

    interface FlowOption {
        /**
         * 指定列表容器的选择器
         */
        elem?: string | HTMLElement;
        /**
         * 滚动条所在元素选择器，默认document。如果你不是通过窗口滚动来触发流加载， <br/>&nbsp;
         *   而是页面中的某一个容器的滚动条，那么通过该参数指定即可。
         */
        scrollElem?: string | HTMLElement;
        /**
         * 是否自动加载。默认true。如果设为false，点会在列表底部生成一个“加载更多”的button，则只能点击它才会加载下一页数据。
         */
        isAuto?: boolean;
        /**
         * 用于显示末页内容，可传入任意HTML字符。默认为：没有更多了
         */
        end?: string;
        /**
         * 是否开启图片懒加载。默认false。 <br/>&nbsp;
         * 如果设为true，则只会对在可视区域的图片进行按需加载。但与此同时，在拼接列表字符的时候， <br/>&nbsp;
         * 你不能给列表中的img元素赋值src，必须要用lay-src取代
         */
        isLazyimg?: boolean;
        /**
         * 与底部的临界距离，默认50。即当滚动条与底部产生该距离时，触发加载。注意：只有在isAuto为true时有效。
         */
        mb?: number;
        /**
         * 到达临界点触发加载的回调。信息流最重要的一个存在。携带两个参数：page, next
         */
        done?: (page: number, next: (html: string, hasMore: boolean) => void) => void;
    }

    // https://www.layui.com/doc/modules/flow.html
    /**
     * 流加载
     */
    interface Flow {
        /**
         * 流加载
         * @param option 信息流参数
         */
        load(option: FlowOption): void;

        /**
         * 图片懒加载
         * @param [option] 参数
         */
        lazyimg(option?: {
            /**
             * 指定开启懒加载的img元素选择器，如 elem: '.demo img' 或 elem: 'img.load' 默认:img
             */
            elem?: string;
            /**
             * 滚动条所在元素选择器，默认document
             */
            scrollElem?: string;
        }): void;
    }

    interface LayFormData {
        /**
         * 被执行事件的元素DOM对象，一般为button对象  ,可能是input select button等不能用HTMLElement
         */
        elem: any;
        /**
         * 得到美化后的DOM对象=$(selector)
         */
        othis: JQuery;
        /**
         * DOM对象值
         */
        value: string;
        /**
         * 被执行提交的form对象，一般在存在form标签时才会返回
         */
        form: HTMLFormElement;
        /**
         * 当前容器的全部表单字段，名值对形式：{name: value}
         */
        field: any;
    }

    interface LayFormVerifyConfig {
        [index: string]: ((value: string, item: HTMLElement) => any) | [RegExp, string];
    }

    // https://www.layui.com/doc/element/form.html
    // https://www.layui.com/doc/modules/form.html
    /**
     * 表单 - 页面元素
     */
    interface Form {
        config: {
            autocomplete: any;
            /**
             * form内置的验证
             */
            verify: {
                /**
                 * 日期验证 date[0]是正则,date[1]是验证失败的提示（"日期格式不正确"）
                 */
                date: [RegExp, string];
                /**
                 * 邮箱验证 email[0]是正则,email[1]是验证失败的提示（"邮箱格式不正确"）
                 */
                email: [RegExp, string];
                /**
                 * 身份证号验证 identity[0]是正则,identity[1]是验证失败的提示（ 请输入正确的身份证号"）
                 */
                identity: [RegExp, string];
                /**
                 * 验证数字，如果参数不是数字则返回"只能填写数字"，是数字则无返回值  <br/>&nbsp;
                 *   bug：当0,"0"会提示不是数字
                 * @param [arg] 参数 比如 1,"1",-1
                 */
                number: (arg: any) => string | null;
                /**
                 * 手机号验证 phone[0]是正则,phone[1]是验证失败的提示（"请输入正确的手机号"）
                 */
                phone: [RegExp, string];
                /**
                 * 空值验证 required[0]是正则,required[1]是为空的提示（"必填项不能为空"）
                 */
                required: [RegExp, string];
                /**
                 * url验证 url[0]是正则,url[1]是验证失败的提示（"链接格式不正确"）
                 */
                url: [RegExp, string];
                [index: string]: [RegExp, string] | ((...arg: any) => any);
            };
        };

        /**
         * 取值，取出所有子元素是input,select,textarea且有name的表单值
         * @param [filter]  class=""lay-filter=""中的值
         * @param [itemForm]  表单field子元素的父容器，没有则是第一个.layui-form作为父元素。实例：$(".layui-form")，
         */
        getValue(filter: string, itemForm?: JQuery): { [index: string]: string };

        /**
         * 表单field元素回调事件 （每个表单都有一个默认事件）
         * @param [event]   类似： select(x)|checkbox(x)|switch(x)|radio(x)|submit(x) x为field上的lay-filter="x"
         * @param [callback] 回调函数
         */
        on(event: string, callback: (data: LayFormData) => any): any;

        /**
         * 更新渲染,对动态插入的元素渲染
         * @param [type] 可选：'select' | 'checkbox' | 'radio' | null
         * @param [filter] lay-filter
         */
        render(type?: "select" | "checkbox" | "radio" | null, filter?: string): Form;

        /**
         * 表单赋值 / 取值
         * @param [filter]  .layui-form 上的lay-filter=""值
         * @param [obj] 要设置的值
         */
        val(filter: string, obj?: object): any;

        /**
         * 维护表单验证
         * @param [config] 验证参数
         */
        verify(config: LayFormVerifyConfig): Form;
    }

    interface LAY extends Omit<any[], "find"> {
        /**
         * 当前的选择器
         */
        selector: string | undefined;

        /**
         *  添加css类
         * @param [className]  类名,必须项  比如 a 或 a b
         * @param [remove]  是否是移除className  默认false即添加
         */
        addClass(className: string, remove?: boolean): HTMLElement[];

        /**
         * 追加内容
         * @param [elem]  html或者元素对象
         */
        append(elem?: string | HTMLElement): HTMLElement[];

        /**
         * 设置元素属性
         * @param [key]  是attribute的key
         * @param [value] 是attribute的value
         */
        attr(key: string, value: any): HTMLElement[];

        /**
         * 获取第一个元素属性
         */
        attr(): string;

        /**
         * 添加 css style
         * @param [key]  属性css
         * @param [value]  值
         */
        css(key: string, value: any): HTMLElement[];

        /**
         * 获取 css style
         * @param [key] 属性css
         */
        css(key: string): string;

        /**
         * 对元素遍历
         * @param [fn]  (index,elem)
         */
        each(fn?: (this: HTMLElement, index: number, elem: HTMLElement) => any): HTMLElement[];

        /**
         * 查找子元素
         * @param [selector]  选择器
         */
        find(selector: string | HTMLElement): LAY;

        /**
         * 是否包含 css 类
         * @param [className] 类名
         */
        hasClass(className: string): boolean;

        /**
         * 设置高度
         * @param [value] 元素宽度
         */
        height(value: number | string): HTMLElement[];

        /**
         * 获取第一个元素高度
         */
        height(): number;

        /**
         * 设置元素的innerHTML
         * @param [html]  html
         */
        html(html: string): HTMLElement[];

        /**
         * 获取第一个元素的innerHTML
         */
        html(): string;

        /**
         * 解除事件
         * @param [eventName] 事件名 比如click
         * @param [fn] 回调
         */
        off(eventName: string, fn: (...args: any) => any): HTMLElement[];

        /**
         * 事件绑定，注意：只支持内置事件，不支持自定义事件
         * @param [eventName] 事件名 比如click，自定事件会绑定失败
         * @param [fn] 回调    (tip:this:any)
         */
        on(eventName: keyof HTMLElementEventMap, fn: (...args: any) => any): HTMLElement[];

        /**
         * 移除元素
         * @param [elem]   实际是removeChild(elem)
         */
        remove(elem: HTMLElement): HTMLElement[];

        /**
         * 移除 指定的attribute
         * @param [key]  是attribute的key
         */
        removeAttr(key: string): HTMLElement[];

        /**
         *  移除 className
         * @param [className]
         */
        removeClass(className: string): HTMLElement[];

        /**
         * 设置元素的value
         * @param [value] 值
         */
        val(value: any): HTMLElement[];

        /**
         * 获取第一个元素的value
         */
        val(): string;

        /**
         * 设置宽度
         * @param [value] 元素宽度
         */
        width(value: number | string): HTMLElement[];

        /**
         * 获取第一个元素宽度
         */
        width(): number;
    }

    interface Lay {
        /**
         * 查找 DOM 作为返回实例的操作对象
         * @param [selector] 选择器 原始dom或者选择器串
         */
        (selector?: string | HTMLElement): LAY;

        v: string;

        /**
         * 把多个对象深层复制到dest,返回也为dest
         * @param [dest]
         * @param [src]
         */
        extend(dest: any, ...src: any): any;

        /**
         * 如果是ie则是版本，非ie则false
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
        stope(event?: Event): void;

        /**
         * 对象（Array、Object、DOM 对象等）遍历，可用于取代 for 语句 同layui.each
         * @param [obj]
         * @param [fn]
         */
        each(obj: object, fn?: (k: string, v: any) => void): Lay;

        /**
         * 数字前置补零
         * @param [num]  数字
         * @param [length]  补0后的长度
         */
        digit(num?: any, length?: number): string;

        /**
         * 根据tagName生成HTMLElement子元素
         * @param [elemName]  ts中小写可智能提示
         * @param [attr] 属性名
         */
        elem<K extends keyof HTMLElementTagNameMap>(elemName: K, attr?: object): HTMLElementTagNameMap[K];

        /**
         *  根据tagName生成HTMLElement子元素
         * @param elemName  非小写内置tagName
         * @param [attr] 属性名
         */
        elem(elemName: string, attr?: object): HTMLElement;

        /**
         * 当前页面body是否存在滚动条
         */
        hasScrollbar(): boolean;

        /**
         * unknown
         * @param [elem] HTMLElement
         * @param [elemView]
         * @param [obj]
         */
        position(elem: HTMLElement, elemView: any, obj?: any): any;

        /**
         * 获取元素上的参数，同jquery.attr()
         * @param [elem] html元素
         * @param [attr] 若空则为lay-options
         */
        options(elem: string | HTMLElement | JQuery, attr?: string): any;

        /**
         * 元素是否属于顶级元素（顶级：document 或 body）
         * @param [elem]  只有document或body才返回true
         */
        isTopElem(elem: any): boolean;
    }

    interface DateParam {
        year?: number;
        month?: number;
        date?: number;
        hours?: number;
        minutes?: number;
        seconds?: number;
    }

    interface DateOption {
        /**
         * 绑定的元素 ，选择的值会填充该元素
         */
        elem?: string | HTMLElement | JQuery;
        /**
         * 控件选择类型
         */
        type?: "year" | "month" | "date" | "time" | "datetime";
        /**
         * 开启左右面板范围选择
         */
        range?: string | boolean | any[];
        /**
         * 自定义格式 默认值：yyyy-MM-dd  实例： 'yyyy年MM月dd日'    <br/>&nbsp;
         *    yyyy    年份，至少四位数。如果不足四位，则前面补零    <br/>&nbsp;
         *    y    年份，不限制位数，即不管年份多少位，前面均不补零    <br/>&nbsp;
         *    MM    月份，至少两位数。如果不足两位，则前面补零。    <br/>&nbsp;
         *    M    月份，允许一位数。    <br/>&nbsp;
         *    dd    日期，至少两位数。如果不足两位，则前面补零。    <br/>&nbsp;
         *    d    日期，允许一位数。    <br/>&nbsp;
         *    HH    小时，至少两位数。如果不足两位，则前面补零。    <br/>&nbsp;
         *    H    小时，允许一位数。    <br/>&nbsp;
         *    mm    分钟，至少两位数。如果不足两位，则前面补零。    <br/>&nbsp;
         *    m    分钟，允许一位数。    <br/>&nbsp;
         *    ss    秒数，至少两位数。如果不足两位，则前面补零。    <br/>&nbsp;
         *    s    秒数，允许一位数。    <br/>&nbsp;
         */

        format?: string;
        /**
         * 初始值  ""|new Date()|20180115
         */
        value?: string | Date | number;
        /**
         * 初始值填充 默认值：true    <br/>&nbsp;
         */
        /**
         *   用于控制是否自动向元素填充初始值（需配合 value 参数使用）
         */
        isInitValue?: boolean;
        /**
         * 是否开启选择值预览    <br/>&nbsp;
         *   用于控制是否显示当前结果的预览（type 为 datetime 时不开启）
         */
        isPreview?: boolean;
        /**
         * 最小范围内的日期时间值    <br/>&nbsp;
         *  1.如果值为字符类型，则：年月日必须用 -（中划线）分割、时分秒必须用 :（半角冒号）号分割。这里并非遵循 format 设定的格式    <br/>&nbsp;
         *  2.如果值为整数类型，且数字＜86400000，则数字代表天数，如：min: -7，即代表最小日期在7天前，正数代表若干天后    <br/>&nbsp;
         *  3.如果值为整数类型，且数字 ≥ 86400000，则数字代表时间戳，如：max: 4073558400000，即代表最大日期在：公元3000年1月1日
         */

        min?: string | number;
        /**
         * 最大范围内的日期时间值    <br/>&nbsp;
         *  1.如果值为字符类型，则：年月日必须用 -（中划线）分割、时分秒必须用 :（半角冒号）号分割。这里并非遵循 format 设定的格式    <br/>&nbsp;
         *  2.如果值为整数类型，且数字＜86400000，则数字代表天数，如：min: -7，即代表最小日期在7天前，正数代表若干天后    <br/>&nbsp;
         *  3.如果值为整数类型，且数字 ≥ 86400000，则数字代表时间戳，如：max: 4073558400000，即代表最大日期在：公元3000年1月1日
         */

        max?: string | number;
        /**
         * 自定义弹出控件的事件  默认值：focus，如果绑定的元素非输入框，则默认事件为：click
         */
        trigger?: string;
        /**
         *  默认显示  默认值：false
         */
        show?: boolean;
        /**
         * 阻止关闭事件冒泡
         */
        closeStop?: string;
        /**
         * 定位方式
         */
        position?: "abolute" | "fixed" | "static";
        /**
         * 层叠顺序 ,如果 position 参数设为 static 时，该参数无效。
         */
        zIndex?: number;
        /**
         *  是否显示底部栏
         */
        showBottom?: boolean;
        /**
         * 工具按钮   默认值：['clear', 'now', 'confirm']
         */
        btns?: Array<"clear" | "now" | "confirm">;
        /**
         * 语言 内置了两种语言版本：cn（中文版）、en（国际版，即英文版） ，默认值：cn
         */
        lang?: "cn" | "en";
        /**
         * 主题 ，默认值：default
         */
        theme?: string | "default" | "molv" | "grid";
        /**
         * 是否显示公历节日  默认值：false
         */
        calendar?: boolean;
        /**
         * 标注重要日子  实例:{'0-0-31':'月末'} 比如2月bug
         */
        mark?: { [key: string]: string };

        eventElem?: string | HTMLElement | JQuery;

        /**
         * 控件初始打开的回调
         * @param [date] 基础参数
         */
        ready?(dateParam: DateParam): void;

        /**
         * 日期时间被切换后的回调   this to test and elem
         * @param [value] 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
         * @param [date] 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
         * @param [endDate] 开启范围选择（range: true）才会返回。对象成员同上date
         */
        change?(this: Required<DateOption>, value: string, date: DateParam, endDate: DateParam): void;

        /**
         * 控件选择完毕后的回调
         * @param [value] 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
         * @param [date] 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
         * @param [endDate] 开启范围选择（range: true）才会返回。对象成员同上date
         */
        done?(value: string, date: DateParam, endDate: DateParam): void;
    }

    /**
     * 日期和时间组件
     */
    interface Laydate {
        /**
         * 核心方法
         * @param [options]  基础参数
         */
        render(options: DateOption): { config: DateOption; hint: (content: string) => void };

        /**
         * 设置全局参数
         * @param [options]
         */
        set(options?: DateOption): Laydate;

        /**
         * 配置基础路径    <br/>&nbsp;
         *  如果你不是采用 layui 或者普通 script 标签方式加载的 laydate.js，    <br/>&nbsp;
         *  而是采用 requirejs 等其它方式引用 laydate，    <br/>&nbsp;
         *  那么你需要设置基础路径，以便 laydate.css 完成加载。
         */

        path: string;

        /**
         * 获取指定年月的最后一天
         * @param [month]  month默认为当前月
         * @param [year]  year默认为当前年
         */
        getEndDate(month?: number, year?: number): number;
    }

    /**
     * 编辑器基本设置
     */
    interface EditOption {
        /**
         * 重新定制编辑器工具栏，如： tool: ['link', 'unlink', 'face'] 当前可选有：    <br/>&nbsp;
         *             'strong' //加粗    <br/>&nbsp;
         *             ,'italic' //斜体    <br/>&nbsp;
         *             ,'underline' //下划线    <br/>&nbsp;
         *             ,'del' //删除线    <br/>&nbsp;
         *
         *             ,'|' //分割线    <br/>&nbsp;
         *
         *             ,'left' //左对齐    <br/>&nbsp;
         *             ,'center' //居中对齐    <br/>&nbsp;
         *             ,'right' //右对齐    <br/>&nbsp;
         *             ,'link' //超链接    <br/>&nbsp;
         *             ,'unlink' //清除链接    <br/>&nbsp;
         *             ,'face' //表情    <br/>&nbsp;
         *             ,'image' //插入图片    <br/>&nbsp;
         *             ,'help' //帮助    <br/>&nbsp;
         */

        tool?: string[];
        /**
         * 不显示编辑器工具栏，一般用于隐藏默认配置的工具bar
         */
        hideTool?: string[];
        /**
         * 设定编辑器的初始高度
         */
        height?: number | string;
        /**
         * 设定图片上传接口，如：uploadImage: {url: '/upload/', type: 'post'},需要服务端返回：    <br/>&nbsp;
         *   {	<br/>&nbsp;
         *     "code": 0 // 0表示成功，其它失败	<br/>&nbsp;
         *     ,"msg": "" // 提示信息  一般上传失败后返回	<br/>&nbsp;
         *    ,"data": {	<br/>&nbsp;
         *       "src": "图片路径"	<br/>&nbsp;
         *      ,"title": "图片名称" //可选	<br/>&nbsp;
         *       }	<br/>&nbsp;
         *  }    <br/>&nbsp;
         */

        uploadImage?: { url: string; type: string };
    }

    // https://www.layui.com/doc/modules/layedit.html
    /**
     * 富文本编辑器
     */
    interface Layedit {
        /**
         * 用于建立编辑器的核心方法
         * @param [id] 实例元素（一般为textarea）的id值
         * @param [options] 编辑器的可配置项
         */
        build(id: string, options?: EditOption): any;

        /**
         * 设置编辑器的全局属性
         * @param [options]
         */
        set(options: EditOption): Layedit;

        /**
         * 获得编辑器的内容
         * @param [index] 即执行layedit.build返回的值
         */
        getContent(index: number): string;

        /**
         *  获得编辑器的纯文本内容
         * @param [index] 即执行layedit.build返回的值
         */
        getText(index: number): string;

        /**
         *  用于同步编辑器内容到textarea（一般用于异步提交）
         * @param [index] 即执行layedit.build返回的值
         */
        sync(index: number): void;

        /**
         * 获取编辑器选中的文本
         * @param [index] 即执行layedit.build返回的值
         */
        getSelection(index: number): string;
    }

    // https://www.layui.com/doc/modules/layer.html#base
    /**
     * 弹层组件
     */
    interface LayerOptions {
        /**
         * 基本层类型    ，layer提供了5种层类型。可传入的值有：    <br/>&nbsp;
         *   0（默认信息框）,1（页面层）,    <br/>&nbsp;
         *   2（iframe层）,3（加载层）,4（tips层）。    <br/>&nbsp;
         *   若你采用layer.open({type: 1})方式调用，则type为必填项（信息框除外）
         */

        type?: 0 | 1 | 2 | 3 | 4;
        /**
         * 标题，不想显示标题栏可以title: false
         * @example
         * title :'我是标题'
         * title: ['文本', 'font-size:18px;']  // 给文本指定style样式
         */
        title?: string | boolean | string[];
        /**
         * 内容
         * @default ''
         */
        content?: string | HTMLElement | JQuery | string[];
        /**
         * 样式类名，允许你传入layer内置的样式class名，还可以传入您自定义的class名
         * @default    ''
         * @example
         * skin: 'demo-class'
         */
        skin?: string;
        /**
         * 宽高
         * @default 'auto'
         * @example
         * area: '500px'  // 高会自适应
         * area: ['500px', '300px'] // 指定宽高
         */
        area?: string | string[];
        // https://www.layui.com/doc/modules/layer.html#offset
        /**
         * 坐标
         * @default  'auto' // 即垂直水平居中
         * @example
         * offset: '100px'  // 只定义top坐标，水平保持居中
         * offset: ['100px', '50px'] // 同时定义top、left坐标
         * offset: 't'	// 快捷设置顶部坐标
         * offset: 'r'	// 快捷设置右边缘坐标
         * offset: 'b'	// 快捷设置底部坐标
         * offset: 'l'	// 快捷设置左边缘坐标
         * offset: 'lt'	// 快捷设置左上角
         * offset: 'lb'	// 快捷设置左下角
         * offset: 'rt'	// 快捷设置右上角
         * offset: 'rb'	// 快捷设置右下角
         */
        offset?: number | string | string[];
        /**
         * 图标  <br/>&nbsp;
         * 当type为0(即信息框)可以传入0-6启用图标  <br/>&nbsp;
         * 当type为3(即加载层)可以传入0-2启用图标
         *  @default  -1  // 不显示图标
         *  @example
         *  type:0,icon: 0  //0(!),1(√)，2(x),3(?),4(锁),5(cry)，6(smile), 其他数字同0
         *  type:3,icon:0  //0(3个点)，1（慢圈），2(慢快圈) ，其他数字同0
         */
        icon?: number;
        // https://www.layui.com/doc/modules/layer.html#btn
        /**
         * 按钮 <br/>&nbsp;
         * 信息框模式时(type:0)，btn默认是一个确认按钮，其它层类型则默认不显示，加载层和tips层则无效 <br/>&nbsp;
         *  可以定义更多按钮，比如：btn: ['按钮1', '按钮2', '按钮3', …]，按钮1的回调是yes， <br/>&nbsp;
         *   而从按钮2开始，则回调为btn2: function(){}，以此类推。
         *   @default '确认'
         *   @example
         *   type:0,btn: '我知道了'
         *   type:0,btn: ['yes','btn2'] // 第一个对应yes回调，后边对应btn2,btn3回调
         */
        btn?: string | string[];

        /**
         * 按钮排列  默认：r    <br/>&nbsp;
         * @default 'r'
         * @example
         *  btnAlign: 'l' // 按钮左对齐
         *  btnAlign: 'c' // 按钮居中对齐
         *  btnAlign: 'r' //  按钮右对齐。默认值，不用设置
         */
        btnAlign?: string;
        /**
         * 右上角的关闭按钮  默认：1    <br/>&nbsp;
         *  layer提供了两种风格的关闭按钮，可通过配置1和2来展示，如果不显示，则closeBtn: 0
         *  @default 1
         *  @example
         *  closeBtn: 0 // 隐藏右上角的关闭按钮
         *  closeBtn: 1  //  x
         *  closeBtn: 2  //  O+x
         */
        closeBtn?: string | boolean | number;
        /**
         * 遮罩
         * @default 0.3 // 0.3透明度的黑色背景（'#000'）
         * @example
         * shade: 0  // 不显示遮罩
         * shade: [0.8, '#393D49'] // 指定透明度和遮罩颜色
         */
        shade?: string | boolean | number | [number, string];
        /**
         * 是否点击遮罩关闭
         * @default false
         */
        shadeClose?: boolean;
        /**
         *  自动关闭所需毫秒
         *  @default 0
         *  @example
         *  time: 5000 // 即代表5秒后自动关闭
         */
        time?: number;
        /**
         * 用于控制弹层唯一标识 <br/>&nbsp;
         * 设置该值后，不管是什么类型的层，都只允许同时弹出一个。一般用于页面层和iframe层模式
         * @default ''
         */
        id?: string;
        // https://www.layui.com/doc/modules/layer.html#anim
        /**
         * 弹出动画     <br/>&nbsp;
         *   目前anim可支持的动画类型有0-6 如果不想显示动画，设置 anim: -1 即可
         *   @default 0
         *   @example
         *   anim: -1 // 不显示动画
         *   anim: 0 // 平滑放大。默认
         *   anim: 1 // 从上掉落
         *   anim: 2 // 从最底部往上滑入
         *   anim: 3 // 从左滑入
         *   anim: 4 // 从左翻滚
         *   anim: 5 // 渐显
         *   anim: 6 // 抖动
         */
        anim?: number;
        /**
         * 关闭动画
         * @default true
         */
        isOutAnim?: boolean;
        /**
         * 最大最小化  <br/>&nbsp;
         *   该参数值对type:1和type:2有效,需要显示配置maxmin: true即可
         *   @default false // 默认不显示最大小化按钮
         *   @example
         *   type:1,maxmin:true
         *   type:2,maxmin:true
         */
        maxmin?: boolean;
        /**
         * 固定 ，即鼠标滚动时，层是否固定在可视区域
         * @default true // 默认固定在可视区域显示
         * @example
         * fixed: false // 不固定
         */
        fixed?: boolean;
        /**
         * 是否允许拉伸 ,该参数对loading(type:3)、tips(type:4)层无效
         * @default true // 允许拉伸,在弹层右下角拖动来拉伸尺寸
         */
        resize?: boolean;

        /**
         * 监听窗口拉伸动作
         * @default null
         */
        resizing?(layero: JQuery): any;

        /**
         * 是否允许浏览器出现滚动条
         * @default true
         */
        scrollbar?: boolean;
        /**
         * 最大宽度 ,只有当area: 'auto'时，maxWidth的设定才有效。
         * @default 360
         * @example
         * area: 'auto',maxWidth: 800
         */
        maxWidth?: number;
        /**
         * 层叠顺序
         * @default 19891014
         */
        zIndex?: number;
        /**
         * 触发拖动的元素
         * @default '.layui-layer-title'
         */
        move?: string | boolean | HTMLElement;
        /**
         * 固定1，不能修改
         */
        readonly moveType?: boolean;
        /**
         * 是否允许拖拽到窗口外
         * @default false
         */
        moveOut?: boolean;
        /**
         *  拖动完毕后的回调方法
         *  @default null
         */
        moveEnd?: null | ((layero: JQuery) => any);
        /**
         * tips方向和颜色
         * @default 2  // 箭头在右边，黑色
         * @example
         * tips: 1    //箭头在上
         * tips: 2    //箭头在右
         * tips: 3    //箭头在下
         * tips: 4    //箭头在左
         * layui.layer.tips('提示内容','#abc',{tips:1})
         * layui.layer.tips('提示内容','#abc',{tips:[1, 'red']})  // 指定颜色
         * layui.layer.tips('提示内容','#abc',{tips:[1, '#f00']})
         * layui.layer.tips('提示内容','#abc',{tips:[1, 'rgb(255,0,0)']})
         */
        tips?: number | [number, string];
        /**
         * 是否允许多个tips ，true则允许多个意味着不会销毁之前的tips层
         * @default false  // 同一时刻只有一个提示框
         */
        tipsMore?: boolean;
        /**
         * 层弹出后的成功回调方法
         */
        success?(layero: JQuery, index: number): void;
        /**
         * 确定按钮回调方法
         */
        yes?: LayerCallbackYes;

        /**
         * 可以定义更多按钮，比如：btn: ['按钮1', '按钮2', '按钮3', …]，按钮1的回调是yes， <br/>&nbsp;
         * 而从按钮2开始，则回调为btn2: function(){}，以此类推。
         */
        btn2?: LayerCallbackYes;
        btn3?: LayerCallbackYes;
        btn4?: LayerCallbackYes;
        btn5?: LayerCallbackYes;
        btn6?: LayerCallbackYes;
        btn7?: LayerCallbackYes;
        btn8?: LayerCallbackYes;
        btn9?: LayerCallbackYes;

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
         * 最小化后是否默认堆叠在左下角 默认：true
         */
        minStack?: boolean;
    }

    /**
     * 配置layer层的基础参数
     * @example ```javascript
     * layui.layer.config({
     *    anim: 1, // 默认动画风格
     *    skin: 'layui-layer-molv', // 默认皮肤
     *    extend: 'myskin/style.css', // 样式位置
     *    //...
     * });
     */
    interface LayerConfigOptions extends LayerOptions {
        /**
         * layer.js所在的目录，可以是绝对目录，也可以是相对目录
         * @example
         * path: '/res/layer/'
         */
        path?: string;
        /**
         * 要加载的拓展css皮肤  <br/>&nbsp;
         * 如果是独立版的layer，则将 myskin 存放在 ./skin 目录下   <br/>&nbsp;
         * 如果是layui中使用layer，则将 myskin 存放在 ./css/modules/layer 目录下
         * @example
         * extend: 'myskin/style.css'
         */
        extend?: string[] | string;
    }

    /**
     * 输入框的参数对象
     * @example ```javascript
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
    interface LayerPromptOptions extends LayerOptions {
        /**
         * 输入框类型，支持0（文本）默认1（密码）2（多行文本）
         * @example
         * formType: 0 // 文本
         * formType: 1 // 密码
         * formType: 2 // 多行文本
         */
        formType?: number;
        /**
         * 初始时的值
         * @default ''
         */
        value?: string;
        /**
         * 可输入文本的最大长度
         * @default 500
         */
        maxlength?: number;
        /**
         * 自定义文本域宽高
         * @example
         * ['800px', '350px']
         */
        area?: string[];
    }

    interface LayerTabOptions extends LayerOptions {
        tab: Array<{ title: string; content: string }>;
    }

    interface LayerPhotosOptions extends LayerOptions {
        /**
         * json或者选择器 用于构造img
         */
        photos?: LayerPhotosData | string | JQuery;

        /**
         * 切换图片时触发
         * @param [pic] 当前图片的一些信息
         * @param [layero] 当前元素
         */
        tab?(pic: LayerPhotosDataItem, layero: JQuery): void;
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
         * @example ```javascript
         * "data": [{
         *     "alt": "图片名",
         *     "pid": 666, //图片id
         *     "src": "", //原图地址
         *     "thumb": "" //缩略图地址
         * }]
         * ```
         */
        data?: LayerPhotosDataItem[];
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
         */
        thumb?: string;
    }

    /**
     * 弹层组件
     */
    interface Layer {
        ie: boolean;
        index: number;
        path: string;
        v: string;
        zIndex: number;

        // https://www.layui.com/doc/modules/layer.html#layer.config
        /**
         * 初始化全局配置
         * @param [options]  基础参数
         * @param [fn]  无用
         */
        config(options: LayerConfigOptions, fn?: any): void;

        /**
         * 执行初始化，就绪后执行回调参数    <br/>&nbsp;
         * ready(path: string, callback: () => void): void; //兼容旧版？    <br/>&nbsp;
         * 初始化就绪 (CSS完成的回调),当你在页面一打开就要执行弹层时可放入回调中
         * @param [callback] 就绪后回调
         */
        ready(callback: () => void): void;

        /**
         * 原始核心方法
         * @param [options]  基础参数
         */
        open(options?: LayerOptions): number;

        /**
         * 普通信息框
         * @param [content] 内容
         * @param [options] 基础参数
         * @param [yes]  点击确定后的回调
         */
        alert(content?: any, options?: LayerOptions, yes?: LayerCallbackYes): number;

        // 源码中会第三个参数代替第二个。单独定义一个方法。
        /**
         * 普通信息框
         * @param [content] 内容
         * @param [yes]  点击确定后的回调
         */
        alert(content: any, yes: LayerCallbackYes): number;

        /**
         * 询问框
         * @param [content]  提示内容
         * @param [options]  参数
         * @param [yes]  确认回调
         * @param [cancel]  右上角关闭按钮触发的回调
         * @example ```javascript
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
        confirm(content?: any, options?: LayerOptions, yes?: LayerCallbackYes, cancel?: LayerCallbackCancel): number;

        /**
         * 询问框
         * @param [content]   提示内容
         * @param [yes]   确认回调
         * @param [cancel]    右上角关闭按钮触发的回调
         * @example ```javascript
         * layer.confirm('is not?', (index,layero) => {
         *   // do something
         *    layer.close(index);
         * },(index,layero)=>{
         *   return false // 返回false则取消关闭
         * });
         * ```
         */
        confirm(content: any, yes: LayerCallbackYes, cancel?: LayerCallbackCancel): number;

        // https://www.layui.com/doc/modules/layer.html#layer.msg
        /**
         * 提示框
         * @param [content] 提示内容
         * @param [options] 参数
         * @param [end] 自动关闭后的回调
         */
        msg(content?: string, options?: LayerOptions, end?: LayerCallbackEnd): number;

        // https://www.layui.com/doc/modules/layer.html#layer.load
        /**
         *  提示框
         * @param [content] 提示内容
         * @param [end] 自动关闭后的回调
         */
        msg(content: string, end?: LayerCallbackEnd): number;

        /**
         * 加载层
         * @param [icon]  可用：0,1,2
         * @param [options] 参数
         */
        load(icon?: number, options?: LayerOptions): number;

        /**
         * 加载层
         * @param [options] 参数
         */
        load(options: LayerOptions): number;

        // https://www.layui.com/doc/modules/layer.html#layer.tips
        /**
         *  tips层
         * @param [content] 显示的内容
         * @param [follow]  在那里显示
         * @param [options] 参数
         */
        tips(content?: string, follow?: string | HTMLElement | JQuery, options?: LayerOptions): number;

        /**
         * 关闭指定层
         * @param [index] 层索引
         * @param [callback] 关闭后的回调
         */
        close(index: number, callback?: () => any): void;

        /**
         * 关闭所有层
         * @param [type] 只想关闭某个类型的层,不传则关闭全部
         */
        /**
         * 闭所有层
         * @param [type] 只想关闭某个类型(dialog,page,iframe,loading,tips)的层,不传则关闭全部
         * @param [callback]  关闭所有层后执行回调
         */
        closeAll(type?: "dialog" | "page" | "iframe" | "loading" | "tips", callback?: () => any): void;

        /**
         * @param [callback]  关闭所有层后执行回调
         */
        closeAll(callback: () => any): void;

        /**
         * 重新定义层的样式
         * @param [index]  层索引
         * @param [options] 参数
         * @param [limit]  影响宽度和高度
         */
        style(index: number, options: { [key: string]: string | number }, limit?: boolean): void;

        /**
         * 改变层的标题
         * @param [title] 新标题
         * @param [index]  层索引
         */
        title(title: string, index: number): void;

        /**
         * 获取iframe页的DOM
         * @param [selector]
         * @param [index]
         */
        getChildFrame(selector: string | HTMLElement | JQuery, index: number): JQuery;

        /**
         * 获取特定iframe层的索引
         * @param [windowName]  即window.name
         */
        getFrameIndex(windowName: string): number;

        /**
         * 指定iframe层自适应
         * @param [index]  层索引
         */
        iframeAuto(index: number): void;

        /**
         * 重置特定iframe url <br/>&nbsp;
         *   如：layer.iframeSrc(index, 'http://sentsin.com')
         * @param [index] 层索引
         * @param [url]
         */
        iframeSrc(index: number, url: string): void;

        /**
         * 置顶当前窗口
         * @param [layero]
         */
        setTop(layero: JQuery): void;

        /**
         * 手工执行最大化
         * @param [index] 层索引
         */
        full(index: number): void;

        /**
         * 手工执行最小化
         * @param [index] 层索引
         */
        min(index: number): void;

        /**
         * 手工执行还原
         * @param [index] 层索引
         */
        restore(index: number): void;

        /**
         * 输入层
         * @param [options] 参数
         * @param [yes] 点击确定的回调，用该参数而不是用options的yes
         */
        prompt(options?: LayerPromptOptions, yes?: LayerCallbackPrompt): number;

        /**
         * 输入层
         * @param [yes] 点击确定的回调
         */
        prompt(yes: LayerCallbackPrompt): number;

        /**
         * tab层
         * @param [options]  参数，一般配置area和tab
         */
        tab(options?: LayerTabOptions): number;

        /**
         * 相册层
         * @param [options] 参数
         */
        photos(options?: LayerPhotosOptions): number;
    }

    interface PageOptions {
        /**
         * 指向存放分页的容器，值可以是容器ID、DOM对象。如：    <br/>&nbsp;
         * 1. elem: 'id'   注意：这里不能加 # 号    <br/>&nbsp;
         * 2. elem: document.getElementById('id')
         */
        elem?: string | HTMLElement;
        /**
         * 数据总数。一般通过服务端得到
         */
        count?: number;
        /**
         * 每页显示的条数。laypage将会借助 count 和 limit 计算出分页数。 默认：10
         */
        limit?: number;
        /**
         * 每页条数的选择项。如果 layout 参数开启了 limit， 默认：[10, 20, 30, 40, 50]    <br/>&nbsp;
         * 则会出现每页条数的select选择框
         */
        limits?: number[];
        /**
         * 起始页。一般用于刷新类型的跳页以及HASH跳页
         */
        curr?: number | string;
        /**
         * 连续出现的页码个数 默认：5
         */
        groups?: number;
        /**
         * false:则不显示”上一页”的内容，其他值则是自定义”上一页”的内容 默认：上一页
         */
        prev?: string;

        /**
         * false:则不显示”下一页”的内容，其他值则是自定义”下一页”的内容 默认：下一页
         */
        next?: string;
        /**
         * false:则不显示”首页”的内容，其他值则是自定义”首页”的内容 默认：首页
         */
        first?: string | boolean;
        /**
         * false:则不显示”尾页”的内容，其他值则是自定义”尾页”的内容 默认：尾页
         */
        last?: string | boolean;

        /**
         * 自定义排版。可选值有：    <br/>&nbsp;
         *  count（总条目输区域）、prev（上一页区域）、    <br/>&nbsp;
         *  page（分页区域）、next（下一页区域）、limit（条目选项区域）、    <br/>&nbsp;
         *  refresh（页面刷新区域。注意：layui 2.3.0 新增） 、skip（快捷跳页区域）
         */
        layout?: Array<"count" | "prev" | "page" | "next" | "limit" | "refresh" | "skip">;

        /**
         * 自定义主题。支持传入：颜色值，或任意普通字符。    <br/>&nbsp;
         *  如：    <br/>&nbsp;
         *  1. theme: '#c00'    <br/>&nbsp;
         *  2. theme: 'xxx' //将会生成 class="layui-laypage-xxx" 的CSS类，以便自定义主题
         */
        theme?: string;

        /**
         * 开启location.hash，并自定义 hash 值。如果开启，在触发分页时，    <br/>&nbsp;
         * 会自动对url追加：#!hash值={curr} 利用这个，可以在页面载入时就定位到指定页
         */
        hash?: string | boolean;

        /**
         * 切换分页的回调
         * @param [obj] 当前分页的所有选项值
         * @param [first] 是否首次，一般用于初始加载的条件,true则会调用渲染
         */
        jump?(obj: PageOptionsForCallback, first: boolean): void;
    }

    /**
     * 先排除
     */
    interface PageOptionsForCallback extends Omit<Required<PageOptions>, "count" | "curr" | "limit" | "groups"> {
        /**
         * 数据总数。一般通过服务端得到
         */
        count: number;
        /**
         * 起始页。一般用于刷新类型的跳页以及HASH跳页
         */
        curr: number;
        /**
         *  每页条数的选择项。如果 layout 参数开启了 limit， 默认：[10, 20, 30, 40, 50]    <br/>&nbsp;
         *  则会出现每页条数的select选择框
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

    // https://www.layui.com/doc/modules/laypage.html
    /**
     * 分页模块
     */
    interface Laypage {
        index: number;

        on<K extends keyof HTMLElementEventMap>(
            elem: HTMLElement | null,
            event: K,
            listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => void,
        ): void;

        on(elem: HTMLElement | null, event: string, listener: (this: HTMLElement, ...args: any) => any): void;

        render(options?: PageOptions): any;
    }

    // https://www.layui.com/doc/modules/laytpl.html
    /**
     * 模板引擎
     */
    interface Laytpl {
        (tpl: string): TplObject;

        /**
         * 重新定义分隔符 <br/>&nbsp;
         * 如果模版默认的 {{ }} 分隔符与你的其它模板（一般是服务端模板）存在冲突，你也可以重新定义分隔符：
         * @param [option]  例如：{open: '<%',close: '%>'}
         */
        config(option?: { open?: string; close?: string }): void;
    }

    interface TplObject {
        tpl: string;

        /**
         * 执行解析,不常用，推荐render
         * @param [tpl]  模板串
         * @param [data]  数据
         */
        parse(tpl: string, data: object): string;

        /**
         * 执行解析
         * @param [data]  数据
         * @param [callback]  解析后的回调，即可通过回调中参数也可通过render返回值获取解析后结果串
         */
        render(data: object, callback?: (str: string) => any): string;
    }

    interface RateOption {
        /**
         * 指向容器选择器
         */
        elem?: string | HTMLElement | JQuery;
        /**
         * 评分组件中具体星星的个数。<br/>&nbsp;
         * 个数当然是整数啦，残缺的星星很可怜的，所以设置了小数点的组件我们会默认向下取整
         */
        length?: number;
        /**
         * 评分的初始值 默认：0
         */
        value?: number;
        /**
         * 主题颜色。<br/>&nbsp;
         */
        /**
         * 默认的组件颜色是#FFB800，你可以根据自身喜好来更改组件的颜色，以适用不同场景
         */
        theme?: string;
        /**
         * 设定组件是否可以选择半星 默认：false
         */
        half?: boolean;
        /**
         * 是否显示评分对应的内容 默认：false
         */
        text?: boolean;
        /**
         * 是否只读，即只用于展示而不可点 默认：false
         */
        readonly?: boolean;

        /**
         * 自定义文本的回调
         * @param [value]
         */
        setText?(value: number): void;

        choose?(value: number): void;
    }

    // https://www.layui.com/doc/modules/rate.html
    /**
     *  评分组件
     */
    interface Rate {
        config: { [index: string]: any };
        index: number;

        /**
         * @param [event]
         * @param [callback]
         */
        on(event: string, callback: (obj: any) => any): any;

        /**
         * 核心方法
         * @param [option] 基础参数
         */
        render(option: RateOption): Rate;

        /**
         * 设置全局参数
         * @param [options] 基础参数
         */
        set(options?: RateOption): Rate;
    }

    interface SliderOption {
        /**
         * 指向容器选择器
         */
        elem?: string | HTMLElement | JQuery;
        /**
         * 滑块类型，可选值有：default（水平滑块）、vertical（垂直滑块） 默认：default
         */
        type?: "default" | "vertical";
        /**
         * 滑动条最小值，正整数，默认： 0
         */
        min?: number;
        /**
         * 滑动条最大值 默认：100
         */
        max?: number;
        /**
         * 是否开启滑块的范围拖拽，若设为 true，则滑块将出现两个可拖拽的环 默认：false
         */
        range?: boolean;
        /**
         * 滑块初始值，默认为数字，若开启了滑块为范围拖拽（即 range: true），则需赋值数组，    <br/>&nbsp;
         *   表示开始和结尾的区间，如：value: [30, 60]
         */
        value?: number | number[];
        /**
         * 拖动的步长 默认：1
         */
        step?: number;
        /**
         * 是否显示间断点 默认：false
         */
        showstep?: boolean;
        /**
         * 是否显示文字提示 默认：true
         */
        tips?: boolean;
        /**
         * 是否显示输入框（注意：若 range 参数为 true 则强制无效）    <br/>&nbsp;
         */
        /**
         *  点击输入框的上下按钮，以及输入任意数字后回车或失去焦点，均可动态改变滑块 默认：false
         */
        input?: boolean;
        /**
         * 滑动条高度，需配合 type:"vertical" 参数使用 默认：200
         */
        height?: number;
        /**
         * 是否将滑块禁用拖拽 默认：false
         */
        disabled?: boolean;
        /**
         * 主题颜色，以便用在不同的主题风格下 默认：#009688
         */
        theme?: string;

        /**
         * 自定义提示文本
         * @param [value] 滑块为范围模式是数组，否则是数字
         */
        setTips?(value: number | number[]): string;

        /**
         * 数值改变的回调    <br/>&nbsp;
         * @param [value] 滑块为范围模式是数组，否则是数字
         */
        change?(value: number | number[]): void;
    }

    // https://www.layui.com/doc/modules/slider.html
    /**
     * 滑块
     */
    interface Slider {
        config: { [index: string]: any };
        index: number;

        /**
         * 设置滑块的全局参数
         * @param [options] 基础参数
         */
        set(options?: SliderOption): Slider;

        // bug to fix
        on(event: string, callback: (obj: any) => any): any;

        /**
         * 核心方法
         * @param [option] 参数
         */
        render(option: SliderOption): {
            config: SliderOption;
            /**
             * 改变指定滑块实例的数值
             * @param [value]
             * @param [index] 若滑块开启了范围（range: true） 则index需要0和1
             */
            setValue(value: any, index?: number): void;
        };

        // setValue(value1: number, value2?: number): void;
    }

    interface TableColumnOption {
        checkbox?: boolean;
        /**
         * 设定字段名。非常重要，且是表格数据列的唯一标识,若没有则用索引
         */
        field?: string;
        /**
         * 设定标题名称
         */
        title?: string;
        /**
         * 设定列宽，若不填写，则自动分配；若填写，则支持值为：数字、百分比。    <br/>&nbsp;
         *   请结合实际情况，对不同列做不同设定。
         */
        width?: string | number;
        /**
         * 局部定义当前常规单元格的最小宽度（默认：60），    <br/>&nbsp;
         *   一般用于列宽自动分配的情况。其优先级高于基础参数中的 cellMinWidth
         */
        minWidth?: number;
        /**
         * 设定列类型,可选有： 默认：normal
         */
        type?: "normal" | "checkbox" | "radio" | "space" | "numbers";
        /**
         * 是否全选状态（默认：false）。必须复选框列开启后才有效，
         *   如果设置 true，则表示复选框默认全部选中。
         */
        LAY_CHECKED?: boolean;
        /**
         * 固定列。可选值有：left（固定在左）、right（固定在右）。一旦设定，对应的列将会被固定在左或右，不随滚动条而滚动。    <br/>&nbsp;
         *   注意：如果是固定在左，该列必须放在表头最前面；如果是固定在右，该列必须放在表头最后面。    <br/>&nbsp;
         *    非"right"就是left
         */
        fixed?: "left" | "right";
        /**
         * 是否初始隐藏列，默认：false
         */
        hide?: boolean;
        /**
         * 是否开启该列的自动合计功能，默认：false。   <br>&nbsp;
         *  1、parseData中包含totalRow可以映射自定字段    <br>&nbsp;
         *  2、从 layui 2.6.3 开始，如果 totalRow 为一个 string 类型，则可解析为合计行的动态模板    <br>&nbsp;
         *     实例：totalRow: '{{ d.TOTAL_NUMS }} 单位'  或 '{{ parseInt(d.TOTAL_NUMS) }}'
         */

        totalRow?: boolean | { score: number | string; experience: string } | string;
        /**
         * 用于显示自定义的合计文本
         */
        totalRowText?: string;
        /**
         * 是否允许排序（默认：false）。   <br>&nbsp;
         * 如果设置 true，则在对应的表头显示排序icon，从而对列开启排序功能
         */
        sort?: boolean;
        /**
         * 是否禁用拖拽列宽（默认：false）。默认情况下会根据列类型（type）来决定是否禁用，如复选框列，会自动禁用。    <br/>&nbsp;
         *   而其它普通列，默认允许拖拽列宽，当然你也可以设置 true 来禁用该功能。
         */
        unresize?: boolean;
        /**
         * 单元格编辑类型（默认不开启）目前只支持：text（输入框）
         */
        edit?: "text" | string;
        /**
         * 自定义单元格点击事件名，以便在 tool 事件中完成对该单元格的业务处理，    <br/>&nbsp;
         *   比如：table.on('tool(tableFilter)', function(obj){obj.event=''})
         */
        event?: string;
        /**
         * 自定义单元格样式。即传入 CSS 样式,实例："background-color: #5FB878; color: #fff";
         */
        style?: string;
        /**
         * 单元格排列方式。可选值有：left（默认）、center（居中）、right（居右）
         */
        align?: "left" | "center" | "right";
        /**
         * 单元格所占列数（默认：1）。一般用于多级表头
         */
        colspan?: number;
        /**
         * 单元格所占行数（默认：1）。一般用于多级表头
         */
        rowspan?: number;
        /**
         * 自定义列模板，模板遵循 laytpl 语法    <br/>&nbsp;
         *   回调参数d从v2.6.8新增 LAY_COL 字段，可得到当前列的表头配置信息
         *   laytpl:https://www.layui.com/doc/modules/laytpl.html
         */
        templet?: string | ((d: TableColumnOptionForTemplet) => string);
        /**
         * 绑定工具条模板。可在每行对应的列中出现一些自定义的操作性按钮    <br/>&nbsp;
         *  dom选择器，例如#toolbar
         */
        toolbar?: string;
    }

    /**
     * table 的templet回调参数格式 <br/>&nbsp;
     *  tips:templet回调中可以使用 d.xx  xx为任意参数
     */
    interface TableColumnOptionForTemplet {
        LAY_COL: TableColumnOptionForTempletCol;
        LAY_INDEX: number;
        LAY_TABLE_INDEX: number;
        /**
         * 该属性不存在，只是提示你：你可以用d.xxx 使用当前行中的任意数据属性。
         */
        "你可以用 d.xx 来使用当前行的其他属性": never;
        [index: string]: any;
    }

    /**
     * table的templet回调中 d.LAY_COL的格式定义
     */
    interface TableColumnOptionForTempletCol extends Required<TableColumnOption> {
        HAS_PARENT: boolean;
        PARENT_COL_INDEX: number;
        key: string;
        parentKey: string;
    }

    /**
     * 用于修改request参数名
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
     * 用于修改Response参数名
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

    /* 服务端返回数据不固定
        interface TableOriginResponse {
            status: number;
            message: string;
            total: number;
            data: any;
            [propName: string]: any;
        }
    */
    /**
     * 响应
     */
    interface TableResponse {
        code?: number;
        msg?: string;
        count?: number;
        data?: any;

        [propName: string]: any;
    }

    interface TableRendered {
        config: TableOption;

        reload(options: TableOption, deep?: boolean): void;

        setColsWidth(): void;

        resize(): void;
    }

    // https://www.layui.com/doc/modules/table.html#options
    /**
     * 基础参数
     */
    interface TableOption {
        /**
         * 指定原始 table 容器的选择器或 DOM，方法渲染方式必填
         */
        elem?: string | HTMLElement | JQuery;
        /**
         * 设置表头。值是一个二维数组。方法渲染方式必填 ,1维是表头集合，二维是列集合    <br/>&nbsp;
         * https://www.layui.com/doc/modules/table.html#cols
         */
        cols?: TableColumnOption[][];
        /**
         * 接口地址    <br/>&nbsp;
         *   默认会自动传递两个参数：?page=1&limit=30（该参数可通过 request 自定义）    <br/>&nbsp;
         *    page 代表当前页码、limit 代表每页数据量
         */
        url?: string | null;
        /**
         * 开启表格头部工具栏区域，该参数支持四种类型值：   <br>&nbsp;
         *  toolbar: '#toolbarDemo' // 指向自定义工具栏模板选择器  <br>&nbsp;
         *  toolbar: '<div>xxx</div>' // 直接传入工具栏模板字符  <br>&nbsp;
         *  toolbar: true // 仅开启工具栏，不显示左侧模板   <br>&nbsp;
         *  toolbar: 'default' // 让工具栏左侧显示默认的内置模板
         */
        toolbar?: string | HTMLElement | boolean;
        /**
         * 该参数可自由配置头部工具栏右侧的图标按钮 内置3个：    <br>&nbsp;
         * filter: 显示筛选图标，  <br>&nbsp;
         * exports: 显示导出图标， <br>&nbsp;
         * print: 显示打印图标
         */
        defaultToolbar?: Array<
            "filter" | "exports" | "print" | string | { title?: string; layEvent?: string; icon?: string }
        >;
        /**
         * 设定容器宽度(超出容器会自动出现横向滚动条),默认宽度是跟随它的父元素铺满
         */
        width?: number | string;
        /**
         * 设定容器高度,如：'full-100'
         */
        height?: number | string;
        /**
         * 全局定义所有常规单元格的最小宽度（默认：60）
         */
        cellMinWidth?: number;

        /**
         * 数据渲染完的回调。你可以借此做一些其它的操作
         * @param [res] 1、如果是异步请求数据方式，res即为你接口返回的信息。<br/>&nbsp;
         *             2、如果是直接赋值的方式，res即为：{data: [], count: 99} data为当前页数据、count为数据总长度
         * @param [curr] 得到当前页码
         * @param [count] 得到数据总量
         */
        done?(res: any, curr: number, count: number): void;

        /**
         *  数据请求失败的回调，返回两个参数：错误对象、内容
         * @param [e]  错误对象 ,是jqXHR对象（对XHR扩展），不同jquery版本其格式不同
         * @param [msg]  内容  比如 "error"
         */
        error?(e: any, msg: any): void;

        /**
         * 直接赋值数据。既适用于只展示一页数据，也非常适用于对一段已知数据进行多页展示。
         */
        data?: any[];
        /**
         * 是否开启 xss 字符过滤（默认 false）
         */
        escape?: boolean;
        /**
         * 是否开启合计行区域
         */
        totalRow?: boolean;
        /**
         * 开启分页（默认：false）,PageOptions时排除jump和elem
         */
        page?: boolean | PageOptions;
        /**
         * 每页显示的条数（默认 10）。值需对应 limits 参数的选项。    <br/>&nbsp;
         *  注意：优先级低于 page 参数中的 limit 参数
         */
        limit?: number;
        /**
         * 每页条数的选择项，默认：[10,20,30,40,50,60,70,80,90]。    <br/>&nbsp;
         * 注意：优先级低于 page 参数中的 limits 参数
         */
        limits?: number[];
        /**
         * 是否显示加载条（默认 true）。若为 false，则在切换分页时，不会出现加载条。    <br/>&nbsp;
         * 该参数只适用于 url 参数开启的方式
         */
        loading?: boolean;
        /**
         * 定义 table 的大标题（在文件导出等地方会用到）
         */
        title?: string;
        /**
         * 自定义文本，如空数据时的异常提示等。
         */
        text?: { none: string };
        /**
         * 默认 true，即直接由 table 组件在前端自动处理排序。    <br/>&nbsp;
         * 若为 false，则需自主排序，即由服务端返回排序好的数据
         */
        autoSort?: boolean;
        /**
         * 初始排序状态。    <br/>&nbsp;
         * 用于在数据表格渲染完毕时，默认按某个字段排序。
         */
        initSort?: { field: string; type?: "null" | "desc" | "asc" };
        /**
         * 设定容器唯一 id。id 是对表格的数据操作方法上是必要的传递条件，它是表格容器的索引
         */
        id?: string;
        /**
         * 用于设定表格风格
         */
        skin?: "line" | "row" | "nob";
        /**
         * 若不开启隔行背景，不设置该参数即可
         */
        even?: boolean;
        /**
         * 用于设定表格尺寸，若使用默认尺寸不设置该属性即可
         */
        size?: "sm" | "lg";
        /**
         * 异接口http请求类型，默认：get
         */
        method?: string;
        /**
         * 接口的其它参数。如：where: {token: 'sasasas', id: 123}
         */
        where?: object | null;
        /**
         * 发送到服务端的内容编码类型。    <br/>&nbsp;
         * 如果你要发送 json 内容，可以设置：contentType: 'application/json'
         */
        contentType?: string;
        /**
         * 接口的请求头。如：headers: {token: 'sasasas'}
         */
        headers?: object;

        /**
         * 数据格式解析的回调函数，用于将返回的任意数据格式解析成 table 组件规定的数据格式。
         * @param [res] 服务端返回的数据
         */
        parseData?(res: any): TableResponse;

        /**
         * 用于对分页请求的参数：page、limit重新设定名称，如果无需自定义请求参数，可不加该参数 <br/>&nbsp;
         *  通过parseData也可映射不同名称
         */
        request?: TableRequestRename;
        /**
         * 可以借助 response 重新设定本地识别响应字段名，如果无需自定义数据响应名称，可不加该参数  <br/>&nbsp;
         *   当默认支持的名称和服务端不一致可以通过本方式或者parseData来对应
         */
        response?: TableResponseRename;
    }

    // ------------以下TableOn 开头interface，在调用地方使用----------
    /**
     * 点击table中checkbox后回调参数的类型
     */
    interface TableOnCheckbox {
        checked: true;
        data: object;

        del(): void;

        tr: JQuery;
        type: string;

        update(fields: object): void;
    }

    /**
     * 点击table上边工具栏后回调参数的类型
     */
    interface TableOnToolbar {
        config: TableOption;
        event: string;
    }

    /**
     * 点击table中工具列后回调参数的类型
     */
    interface TableOnTool {
        data: object;

        del(): void;

        event: string;
        tr: JQuery;

        update(fields: object): void;
    }

    /**
     * 点击table中行后回调参数的类型
     */
    interface TableOnRow {
        data: object;

        del(): void;

        tr: JQuery;

        update(fields: object): void;
    }

    /**
     * 点击table中单元格编辑后回调参数的类型
     */
    interface TableOnEdit {
        data: object;

        del(): void;

        field: string;
        tr: JQuery;

        update(fields: object): void;

        value: string;
    }

    /**
     * 点击table中列标题排序后回调参数的类型
     */
    interface TableOnSort {
        field: string;
        type: string;
    }

    // https://www.layui.com/doc/element/table.html
    // https://www.layui.com/doc/modules/table.html
    /**
     * 表格 - 页面元素
     */
    interface Table {
        cache: object;

        /**
         * 获取表格选中行（。id 即为 id 参数对应的值
         * @param [id]
         */
        checkStatus(id: string): { data: []; isAll: boolean };

        /**
         * 清除临时Key (即：LAY_CHECKED和LAY_TABLE_INDEX)
         * @param [data]
         */
        clearCacheKey(data: object): object;

        config: {
            checkName: "LAY_CHECKED"; // 是否选中状态的字段名
            indexName: "LAY_TABLE_INDEX"; // 初始下标索引名，用于恢复排序
        };

        /**
         * 遍历表头
         * @param [id]  table参数中的id，无id则数字
         * @param [callback]  回调
         * @param [cols]
         */
        eachCols(id: string, callback?: (...arg: any) => any, cols?: TableColumnOption[][]): void;

        /**
         * 导出自定数据到文件
         * @param [id]  table的id用于找到title当做下载文件名
         * @param [data]  手动指定数据
         * @param [type] 默认csv
         */
        // exportFile(id: string, data: any[], type?: string): void;
        // exportFile(colName: any[], data: any[], type?: string): void;
        /**
         *  导出table中数据到文件
         * @param [id]  table选项中的id，指定id后则下载的文件名为table中title <br/>&nbsp;
         *              若传入数组则是导出的文件的列标题colName
         * @param [data]  传入数据则导出的是该数据，不传则用id从table找数据
         * @param [type]   默认csv
         */
        exportFile(id: string | any[], data?: any[] | null, type?: string): void;

        /**
         * 获取表格当前页的所有行数据
         * @param [id]  table参数中的id，无id则数字
         */
        getData(id: string): any[];

        index: number;

        /**
         * 初始化
         * @param [filter]  lay-filter设定的值
         * @param [option] 各项基础参数
         */
        init(filter: string, option?: TableOption): object;

        /**
         * 绑定事件
         * <br/>&nbsp;注意：obj类型是变化的不能在ts指定，参考如下替代方案，
         * <br/>&nbsp;  import TableOnCheckbox = layui.TableOnCheckbox;
         * <br/>&nbsp;  table.on('checkbox(test)', function(obj){
         * <br/>&nbsp;    let rows:TableOnCheckbox=obj;
         * <br/>&nbsp;    //然后，你就可以使用明确的属性了，两种方式编译后js中均为 let rows=obj; 输出不包含类型
         * <br/>&nbsp;  });
         * <br/>&nbsp;  类型对应： （就是 TableOn+事件类型，无需记忆）
         * <br/>&nbsp;  checkbox -> TableOnCheckbox
         * <br/>&nbsp;  toolbar  -> TableOnToolbar
         * <br/>&nbsp;  tool     -> TableOnTool
         * <br/>&nbsp;  row      -> TableOnRow
         * <br/>&nbsp;  edit-    -> TableOnEdit
         * <br/>&nbsp;  sort     ->  TableOnSort
         * @param [event]  mod(filter)
         * @param [callback] obj参考上边注释
         */
        on(event: string, callback: (this: any, obj: any) => any): void;

        /**
         * 表格重载
         * @param [id] table的id，唯一实例标识
         * @param [option] 基础参数
         * @param [deep]  true则深度复制
         */
        reload(id: string, option?: TableOption, deep?: boolean): void;

        /**
         * 核心入口
         * @param [option] 基础参数
         */
        render(option: TableOption): TableRendered;

        /**
         * 重置表格尺寸结构
         * @param [id]  如果指定表格唯一 id，则只执行该 id 对应的表格实例
         */
        resize(id: string): void;

        /**
         * 设置table全局项
         * @param [option] 基础参数
         */
        set(option?: TableOption): Table;
    }

    interface TransferOption {
        /**
         * 指向容器选择器
         */
        elem?: string | HTMLElement | JQuery;
        /**
         * 穿梭框上方标题
         */
        title?: any[];
        /**
         * 数据源
         */
        data?: any[];

        /**
         * 用于对数据源进行格式解析
         * @param [data]
         */
        parseData?(data: any): any;

        /**
         * 初始选中的数据（右侧列表）
         */
        value?: any[];
        /**
         * 设定实例唯一索引，用于基础方法传参使用。
         */
        id?: string;
        /**
         * 是否开启搜索
         */
        showSearch?: boolean;
        /**
         * 定义左右穿梭框宽度
         */
        width?: number;
        /**
         * 定义左右穿梭框高度
         */
        height?: number;
        /**
         * 自定义文本，如空数据时的异常提示等。
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
         * @param [data] 数据
         * @param [index] 索引
         */
        onchange?(data: any, index: number): void;
    }

    interface TransferRendered {
        config: { [index: string]: any };

        /**
         * 获得右侧数据
         */
        getData(): any[];

        /**
         * 重载实例  bug to fix
         * @param [id]  实例唯一索引
         * @param [options] 各项基础参数
         */
        reload(id: string, options: TransferOption): void;

        /**
         * 设定全局默认参数  bug to fix
         *
         * @param [options] 各项基础参数
         */
    }

    // https://www.layui.com/doc/modules/transfer.html
    /**
     * 穿梭框组件
     */
    interface Transfer {
        config: { [index: string]: any };
        index: number;

        /**
         * 获得右侧数据
         * @param [id] 实例唯一索引
         */
        getData(id: string): any[];

        /**
         * 核心方法
         * bug to fix
         * @param [option] 各项基础参数
         */
        render(option: TransferOption): TransferRendered;

        /**
         * 绑定事件，内部modName默认为transfer，绑定参考layui.onevent,触发参考layui.event
         * @param [events]
         * @param [callback]
         */
        on(events: string, callback: (this: Layui, obj: any) => any): any;

        /**
         * 重载实例  bug to fix
         * @param [id]  实例唯一索引
         * @param [options] 各项基础参数
         */
        reload(id: string, options: TransferOption): void;

        /**
         * 设定全局默认参数  bug to fix
         *
         * @param [options] 各项基础参数
         */
        set(options: TransferOption): void;
    }

    // https://www.layui.com/doc/modules/tree.html#data
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
        children?: any[];
        /**
         * 点击节点弹出新窗口对应的 url。需开启 isJump 参数
         */
        href?: string;
        /**
         * 节点是否初始展开，默认 false
         */
        spread?: boolean;
        /**
         * 节点是否初始为选中状态（如果开启复选框的话），默认 false
         */
        checked?: boolean;
        /**
         * 节点是否为禁用状态。默认 false
         */
        disabled?: boolean;
    }

    interface TreeCheckData {
        data: any;
        checked: boolean;
        elem: JQuery;
    }

    interface TreeClickData {
        data: any;
        elem: JQuery;
        state: "open" | "close" | "normal";
    }

    interface TreeOperateData {
        data: any;
        elem: JQuery;
        /**
         * 除了add和update就是删除del
         */
        type: "add" | "update" | "del" | string;
    }

    /**
     * tree.reload()返回值
     */
    type TreeReloaded = Pick<Tree, "config" | "reload" | "getChecked" | "setChecked">;

    // https://www.layui.com/doc/modules/tree.html#options
    /**
     * 基础参数
     */
    interface TreeOption {
        /**
         * 指向容器选择器
         */
        elem?: string | HTMLElement | JQuery;
        /**
         * 数据源
         */
        data?: TreeData[];
        /**
         * 设定实例唯一索引，用于基础方法传参使用。
         */
        id?: string;
        /**
         * 是否显示复选框
         */
        showCheckbox?: boolean;
        /**
         * 是否开启节点的操作图标。默认 false。
         */
        // 目前支持的操作图标有：add、update、del，如：edit: ['add', 'update', 'del']
        edit?: boolean | string[];
        /**
         * 是否开启手风琴模式，默认 false
         */
        accordion?: boolean;
        /**
         * 是否仅允许节点左侧图标控制展开收缩。默认 false（即点击节点本身也可控制）。
         */
        //  若为 true，则只能通过节点左侧图标来展开收缩
        onlyIconControl?: boolean;
        /**
         * 是否允许点击节点时弹出新窗口跳转。默认 false，
         */
        //  若开启，需在节点数据中设定 link 参数（值为 url 格式）
        isJump?: boolean;
        /**
         * 是否开启连接线。默认 true，若设为 false，则节点左侧出现三角图标。
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
         * 复选框被点击的回调
         * @param [obj]
         */
        oncheck?(obj: TreeCheckData): void;

        /**
         * 节点被点击的回调
         * @param [obj]
         */
        click?(obj: TreeClickData): void;

        /**
         * 操作节点的回调
         * @param [obj]
         */
        operate?(obj: TreeOperateData): void;

        /**
         * 节点过滤的回调
         * @param [obj]
         */
        onsearch?(obj: { elem: any[] }): void;

        /**
         * 未知
         * @param [args]
         */
        dragstart?(...args: any): any;

        /**
         * 未知
         * @param [args]
         */
        dragend?(...args: any): any;
    }

    // https://www.layui.com/doc/modules/tree.html
    /**
     * 树形组件
     */
    interface Tree {
        /**
         * 全局参数项
         */
        config: { [index: string]: any };

        /**
         * 返回选中的节点数据数组
         * @param [id]  render参数中的id ,注意data中需要有id属性才返回
         */
        getChecked(id: string): TreeData[];

        /**
         * tree实例总数
         */
        index: number;

        /**
         * 绑定事件，内部modName默认为tree，绑定参考layui.onevent,触发参考layui.event
         * @param [events]
         * @param [callback]
         */
        on(events: string, callback: (this: Layui, obj: any) => any): any;

        /**
         * 实例重载,重载一个已经创建的组件实例，覆盖基础属性
         * @param [id] render参数中的id，保证id存在否则出js错误
         * @param [options] 基础参数
         */
        reload(id: string, options: TreeOption): TreeReloaded;

        /**
         * 核心方法
         * @param [option] 基础参数
         */
        render(option: TreeOption): any;

        /**
         * 设置tree全局参数(预设基础参数值)
         * @param [option]
         */
        set(option?: TreeOption): Tree;

        /**
         * 设置节点勾选
         * @param [id]
         */
        /**
         * 设置节点勾选
         * @param [id] render参数中的id，指明是哪个tree实例
         * @param [nodeId]  树节点数据中的id 参考render->data->id
         */
        setChecked(id: string, nodeId: any): void;
    }

    interface UploadOption {
        /**
         * 指向容器选择器，如：elem: '#id'。也可以是DOM对象
         */
        elem?: string | HTMLElement | JQuery;
        /**
         *  触发上传的元素
         */
        readonly item?: HTMLElement;
        /**
         * 服务端上传接口,如：'/api/upload/'
         */
        url?: string;
        /**
         * 请求上传接口的额外参数,支持属性为function动态值
         */
        data?: object;
        /**
         * 接口的请求头。如：headers: {token: 'sasasas'}
         */
        headers?: object;
        /**
         * 指定允许上传时校验的文件类型， 默认：images (即file,video,audio之外都可)    <br/>&nbsp;
         */
        //  可选值有：images（图片）、file（所有文件）、video（视频）、audio（音频）
        accept?: "images" | "file" | "video" | "audio";
        /**
         * 规定打开文件选择框筛选出的文件类型，值为用逗号隔开。默认：images 如：    <br/>&nbsp;
         */
        //  acceptMime: 'image/*'（只显示图片文件）	<br/>&nbsp;
        //  acceptMime: 'image/jpg, image/png'（只显示 jpg 和 png 文件）
        acceptMime?: string;
        /**
         * 允许上传的文件后缀。一般结合 accept 参数类设定。默认：jpg|png|gif|bmp|jpeg    <br/>&nbsp;
         */
        //  假设 accept 为 file 类型时，那么你设置 exts: 'zip|rar|7z' 即代表只允许上传压缩格式的文件。	<br/>&nbsp;
        //  如果 accept 未设定，那么限制的就是图片的文件格式
        exts?: string;
        /**
         * 是否选完文件后自动上传。 默认：true    <br/>&nbsp;
         */
        //  如果设定 false，那么需要设置 bindAction 参数来指向一个其它按钮提交上传
        auto?: boolean;
        /**
         * 指向一个按钮触发上传，一般配合 auto: false 来使用。值为选择器或DOM对象，如：bindAction: '#btn'
         */
        bindAction?: string | HTMLElement;
        /**
         * 设定文件域的字段名,默认：file
         */
        field?: string;
        /**
         * 设置文件最大可允许上传的大小，单位 KB。不支持ie8/9 ，默认:0（即无限制）
         */
        size?: number;
        /**
         * 是否允许多文件上传。设置 true即可开启。不支持ie8/9 默认：false
         */
        multiple?: boolean;
        /**
         * 设置同时可上传的文件数量，一般配合 multiple 参数出现。 默认:0（即无限制）
         */
        number?: number;
        /**
         * 更新文件域相关属性
         */
        name?: string;
        /**
         * 是否接受拖拽的文件上传，设置 false 可禁用。不支持ie8/9 默认true
         */
        drag?: boolean;
        /**
         * 请求上传的 http 类型
         */
        method?: string;

        /**
         * 选择文件后的回调函数
         * @param [obj] 回调参数(工具对象)
         */
        choose?(this: UploadOptionThis, obj: UploadCallbackArg): void;

        /**
         * 文件提交上传前的回调，返回false则停止上传  实例:before:function(this,obj){}
         * @param [obj]  回调参数(工具对象)
         */
        before?(this: UploadOptionThis, obj: UploadCallbackArg): any;

        /**
         * 上传后的回调
         * @param [res]  服务端response json
         * @param [index]  当前文件索引  (选择文件时自动生成的：new Date().getTime()+'-'+i)
         * @param [upload]  上传函数
         */
        done?(this: UploadOptionThis, res: any, index: string, upload: (files?: Blob[]) => void): void;

        /**
         * 执行上传请求出现异常的回调（一般为网络异常、URL 404等）。    <br/>&nbsp;
         * 返回两个参数，分别为：index（当前文件的索引）、upload（重新上传的方法
         * @param [index] 当前文件索引  (选择文件时自动生成的：new Date().getTime()+'-'+i)
         * @param [upload] 上传函数
         */
        error?(this: UploadOptionThis, index: string, upload: (files?: Blob[]) => void): void;

        /**
         *  当文件全部被提交后，才触发
         * @param [obj] 回调参数
         */
        allDone?(this: UploadOptionThis, obj: UploadAllDoneArg): void;

        /**
         * 进度回调
         * @param [percent]  数字进度
         * @param [elem]  render参数中的elem（即点击元素dom）
         * @param [event] 事件
         * @param [index] 当前文件索引  (选择文件时自动生成的：new Date().getTime()+'-'+i)
         */
        progress?(
            this: UploadOptionThis,
            percent: number,
            elem: HTMLElement,
            event: ProgressEvent,
            index: string,
        ): void;
    }

    type UploadOptionThis = Required<UploadOption>;

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
         */
        aborted: number;
    }

    interface UploadCallbackArg {
        /**
         *  预览
         * @param [callback] index索引,file文件,result比如图片base64编码
         */
        preview(callback: (index: string, file: File, result: any) => void): void;

        /**
         * 上传单个文件    <br/>&nbsp;
         * 对上传失败的单个文件重新上传，一般在某个事件中使用
         * @param [index] 索引  (选择文件时自动生成的：new Date().getTime()+'-'+i)
         * @param [file] 文件
         */
        upload(index: string, file: Blob): void;

        /**
         * 追加文件到队列, 比如 choose回调中将每次选择的文件追加到文件队列
         */
        pushFile(): { [index: string]: File };

        /**
         * 重置文件和文件名
         * @param [index] 被重置的文件索引  (选择文件时自动生成的：new Date().getTime()+'-'+i)
         * @param [file]  新的文件
         * @param [filename] 新的名字
         */
        resetFile(index: string, file: Blob, filename: any): void;
    }

    interface UploadRendered {
        /**
         * 参数信息
         */
        config: { [index: string]: any };

        /**
         * 重载该实例，支持重载全部基础参数
         * @param [options] 基础参数
         */
        reload(options?: UploadOption): void;

        /**
         * 重新上传的方法，一般在某个事件中使用
         * @param [files] 需要上传的文件数组
         */
        upload(files?: Blob[]): void;
    }

    // https://www.layui.com/doc/modules/upload.html
    /**
     * 图片/文件上传
     */
    interface Upload {
        /**
         * 全局参数项
         */
        config: { [index: string]: any };

        /**
         * 绑定事件，内部modName默认为 upload，绑定参考layui.onevent,触发参考layui.event
         * @param events
         * @param callback
         */
        on(events: string, callback: (this: Layui, obj: any) => any): any;

        /**
         * 核心方法
         * @param [option] 基础参数
         */
        render(option: UploadOption): UploadRendered;

        /**
         * 设置upload全局参数(预设基础参数值)
         * @param [option] 参数
         */
        set(option?: UploadOption): Upload;
    }

    interface UtilBarOption {
        /**
         * 默认false。如果值为true，则显示第一个bar，带有一个默认图标。    <br/>&nbsp;
         */
        //  如果值为图标字符，则显示第一个bar，并覆盖默认图标
        bar1?: boolean | string;
        /**
         * 默认false。如果值为true，则显示第二个bar，带有一个默认图标。    <br/>&nbsp;
         */
        //  如果值为图标字符，则显示第二个bar，并覆盖默认图标
        bar2?: boolean | string;
        /**
         * 自定义区块背景色
         */
        bgcolor?: string;
        /**
         * 用于控制出现TOP按钮的滚动条高度临界值。默认：200
         */
        showHeight?: number;
        /**
         * 你可以通过重置bar的位置，比如 css: {right: 100, bottom: 100}
         */
        css?: { [key: string]: string | number | boolean };

        /**
         * 点击bar的回调，函数返回一个type参数，用于区分bar类型。    <br/>&nbsp;
         *  支持的类型有：bar1、bar2、top
         * @param [type]  bar1、bar2、top
         */
        click?(type: string | "bar1" | "bar2" | "top"): void;
    }

    // https://www.layui.com/doc/modules/util.html
    /**
     * 工具集
     */
    interface Util {
        /**
         * 固定块
         * @param [option] 参数
         */
        fixbar(option?: UtilBarOption): void;

        /**
         * 倒计时
         * @param [endTime]  结束时间戳或Date对象，如：4073558400000，或：new Date(2099,1,1).
         * @param [serverTime]  当前服务器时间戳或Date对象
         * @param [callback] 回调函数。如果倒计时尚在运行，则每一秒都会执行一次。并且返回三个参数：    <br/>&nbsp;
         *      date（包含天/时/分/秒的对象）、    <br/>&nbsp;
         *      serverTime（当前服务器时间戳或Date对象）,    <br/>&nbsp;
         *      timer（计时器返回的ID值，用于clearTimeout）
         */
        countdown(
            endTime?: number | Date,
            serverTime?: number | Date,
            callback?: (date: number[], serverTime_: typeof serverTime, timer: number) => void,
        ): void;

        /**
         * 某个时间在当前时间的多久前
         * @param [time]   当前时间之前的时间戳或日期对象
         * @param [onlyDate]  在超过30天后,true只返回日期字符，false不返回时分秒
         */
        timeAgo(time?: number | Date, onlyDate?: boolean): string;

        /**
         * 转化时间戳或日期对象为日期格式字符
         * @param [time]  日期对象，也可以是毫秒数 ,默认:当前
         * @param [format] 默认：yyyy-MM-dd HH:mm:ss
         */
        toDateString(time?: number | Date, format?: string): any;

        /**
         * 数字前置补零
         * @param [num]  数字
         * @param [length]  补0后的长度
         */
        digit(num?: any, length?: number): string;

        /**
         * 转义 xss 字符
         * @param str
         */
        escape(str?: any): string;

        /**
         *  批量处理事件
         * @param [attr]  绑定需要监听事件的元素属性
         * @param [obj]  事件回调链
         */
        event(attr: string, obj: { [index: string]: (othis: JQuery) => any }): any;
    }

    /**
     * 缓存的所有数据
     */
    interface CacheData {
        base: string;
        builtin: Modules;
        /*
        // 仅包含layui.use指定的模块或者导入全部模块
        ,callback:{
            carousel: Function
            ,code: Function
            ,colorpicker: Function
            ,dropdown: Function
            ,element:Function
            ,flow: Function
            ,form: Function
            ,jquery: Function
            ,lay: Function
            ,laydate: Function
            ,layedit: Function
            ,layer: Function
            ,laypage: Function
            ,laytpl: Function
            ,"layui.all": Function
            ,rate: Function
            ,slider: Function
            ,table: Function
            ,transfer:Function
            ,tree: Function
            ,upload: Function
            ,util: Function
            [index:string]:Function
        }*/
        dir: string;
        /**
         * 记录模块自定义事件
         */
        event: { [index: string]: { [index: string]: Array<(...arg: any) => any> } };
        host: string;
        /**
         * 记录模块物理路径
         */
        modules: { [index: string]: string };
        /**
         *  记录模块加载状态
         */
        status: {
            carousel: boolean;
            code: boolean;
            colorpicker: boolean;
            dropdown: boolean;
            element: boolean;
            flow: boolean;
            form: boolean;
            jquery: boolean;
            lay: boolean;
            laydate: boolean;
            layedit: boolean;
            layer: boolean;
            laypage: boolean;
            laytpl: boolean;
            "layui.all": boolean;
            rate: boolean;
            slider: boolean;
            table: boolean;
            transfer: boolean;
            tree: boolean;
            upload: boolean;
            util: boolean;
            [index: string]: boolean;
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
    type Modules = { [T in keyof LayuiModuleMap]: string };

    interface LayuiModuleMap {
        carousel: Carousel;
        colorpicker: ColorPicker;
        dropdown: DropDown;
        element: Element;
        flow: Flow;
        form: Form;
        jquery: JQueryStatic;
        lay: Lay;
        laydate: Laydate;
        layedit: Layedit;
        layer: Layer;
        laypage: Laypage;
        laytpl: Laytpl;
        "layui.all": string;
        rate: Rate;
        slider: Slider;
        table: Table;
        transfer: Transfer;
        tree: Tree;
        upload: Upload;
        util: Util;
    }
}

declare const layui: Layui;
