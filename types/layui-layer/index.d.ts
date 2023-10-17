/// <reference types="jquery" />

/**
 * @see https://www.layui.com/doc/modules/layer.html
 */
declare const layer: layer.Layer;

declare namespace layer {
    type Index = number;
    type Selector = string;

    interface Types {
        /** 信息框 */
        dialog: 0;
        /** 页面层 */
        page: 1;
        /** iframe层 */
        iframe: 2;
        /** 加载层 */
        loading: 3;
        /** tips层 */
        tips: 4;
    }

    /**
     * 基础参数
     */
    interface Options {
        /**
         * 基本层类型
         * @default 0
         */
        type?: Types[keyof Types] | undefined;
        /**
         * 标题
         * @default '信息'
         * @example
         * '我是标题'
         * ['文本', 'font-size:18px;']
         * false    //不显示标题栏
         */
        title?: string | false | [string, string] | undefined;
        /**
         * 内容
         * @default ''
         */
        content?: string | HTMLElement | JQuery | [string, string] | undefined;
        /**
         * 样式类名
         * @default ''
         */
        skin?: string | undefined;
        /**
         * 宽高
         * @default 'auto'
         * @example
         * '500px'    //定义宽度，高度自适应
         * ['500px', '300px']    //定义宽高
         */
        area?: string | [string, string] | undefined;
        /**
         * 坐标
         * @default 'auto'
         * @example
         * 'auto'    //默认坐标，即垂直水平居中
         * '100px'    //只定义top坐标，水平保持居中
         * ['100px', '50px']    //同时定义top、left坐标
         * 't'    //快捷设置顶部坐标
         * 'r'    //快捷设置右边缘坐标
         * 'b'    //快捷设置底部坐标
         * 'l'    //快捷设置左边缘坐标
         * 'lt'    //快捷设置左上角
         * 'lb'    //快捷设置左下角
         * 'rt'    //快捷设置右上角
         * 'rb'    //快捷设置右下角
         */
        offset?: string | [string, string] | undefined;
        /**
         * 图标
         * 信息框和加载层的私有参数
         * @description 信息框默认不显示图标。当你想显示图标时，默认皮肤可以传入0-6如果是加载层，可以传入0-2。
         */
        icon?: number | undefined;
        /**
         * 按钮
         * @default '确认'
         * @description 信息框模式时，btn默认是一个确认按钮，其它层类型则默认不显示，加载层和tips层则无效。
         */
        btn?: string | string[] | undefined;
        /**
         * 按钮排列
         * @default 'r'
         * @example
         * 'l'    //按钮左对齐
         * 'c'    //按钮居中对齐
         * 'r'    //按钮右对齐。默认值，不用设置
         */
        btnAlign?: "l" | "c" | "r" | undefined;
        /**
         * 关闭按钮
         * @description layer提供了两种风格的关闭按钮，可通过配置1和2来展示，如果不显示，则closeBtn: 0
         * @default 1
         */
        closeBtn?: 0 | 1 | 2 | undefined;
        /**
         * 遮罩
         * @default 0.3
         * @example [0.8, '#393D49']    //透明度、颜色
         */
        shade?: number | false | [number, string] | undefined;
        /**
         * 是否点击遮罩关闭
         * @description 如果你的shade是存在的，那么你可以设定shadeClose来控制点击弹层外区域关闭。
         * @default false
         */
        shadeClose?: boolean | undefined;
        /**
         * 自动关闭所需毫秒
         * @default 0 //不会自动关闭
         */
        time?: number | undefined;
        /**
         * 用于控制弹层唯一标识
         * @description 设置该值后，不管是什么类型的层，都只允许同时弹出一个。一般用于页面层和iframe层模式
         * @default ''
         */
        id?: string | undefined;
        /**
         * 弹出动画
         * @default 0
         * @since 3.0
         * @example
         * -1    //关闭动画
         * 0    //平滑放大。默认
         * 1    //从上掉落
         * 2    //从最底部往上滑入
         * 3    //从左滑入
         * 4    //从左翻滚
         * 5    //渐显
         * 6    //抖动
         */
        anim?: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
        /**
         * 关闭动画
         * @default true
         * @since 3.0.3
         */
        isOutAnim?: boolean | undefined;
        /**
         * 最大最小化
         * @default false
         * @description 显示最大小化按钮。该参数值对type:1和type:2有效。
         */
        maxmin?: boolean | undefined;
        /**
         * 固定
         * @default true
         * @description 鼠标滚动时，层是否固定在可视区域。
         */
        fixed?: boolean | undefined;
        /**
         * 是否允许拉伸
         * @default true
         * @description 可以在弹层右下角拖动来拉伸尺寸。该参数对loading、tips层无效
         */
        resize?: boolean | undefined;
        /**
         * 监听窗口拉伸动作
         * @param layero 当前层的DOM对象
         */
        resizing?(layero: JQuery): void;
        /**
         * 是否允许浏览器出现滚动条
         * @default true
         */
        scrollbar?: boolean | undefined;
        /**
         * 最大宽度
         * @default 360
         * @description 只有当`area: 'auto'`时，maxWidth的设定才有效。
         */
        maxWidth?: number | undefined;
        /**
         * 最大高度
         * @since 3.1.0
         * @description 只有当高度自适应时，maxHeight的设定才有效。
         */
        maxHeight?: number | undefined;
        /**
         * 层叠顺序
         * @default 19891014
         * @description 一般用于解决和其它组件的层叠冲突。
         */
        zIndex?: number | undefined;
        /**
         * 触发拖动的元素
         * @default '.layui-layer-title'
         */
        move?: Selector | false | JQuery | undefined;
        /**
         * 是否允许拖拽到窗口外
         * @default false
         */
        moveOut?: boolean | undefined;
        /**
         * 拖动完毕后的回调方法
         * @param this 合并的选项
         * @param layero 当前层的DOM对象
         */
        moveEnd?(this: this, layero: JQuery): void;
        /**
         * tips方向和颜色
         * @default 2
         * @description tips层的私有参数。
         * @example
         * 1    //上
         * 2    //右
         * 3    //下
         * 4    //左
         * [1, '#c00']  //方向，颜色
         */
        tips?: number | [number, string] | undefined;
        /**
         * 是否允许多个tips
         * @default false
         * @description 允许多个意味着不会销毁之前的tips层。
         */
        tipsMore?: boolean | undefined;
        /**
         * 层弹出后的成功回调方法
         * @param layero 当前层DOM
         * @param index 当前层索引
         */
        success?(layero: JQuery, index: Index): void;
        /**
         * 确定按钮回调方法
         * @param index 当前层索引
         * @param layero 当前层DOM对象
         * @description 如果设定了yes回调，需进行手工关闭，`close(index)`
         */
        yes?(index: Index, layero: JQuery): void;
        // #region 按钮1的回调是yes，而从按钮2开始，则回调为btn2: function(){}，以此类推。
        btn2?(index: Index, layero: JQuery): false | void;
        btn3?(index: Index, layero: JQuery): false | void;
        btn4?(index: Index, layero: JQuery): false | void;
        btn5?(index: Index, layero: JQuery): false | void;
        btn6?(index: Index, layero: JQuery): false | void;
        btn7?(index: Index, layero: JQuery): false | void;
        btn8?(index: Index, layero: JQuery): false | void;
        btn9?(index: Index, layero: JQuery): false | void;
        // #endregion
        /**
         * 右上角关闭按钮触发的回调
         * @param index 当前层索引
         * @param layero 当前层的DOM对象
         * @description 默认会自动触发关闭。如果不想关闭，`return false`
         */
        cancel?(index: Index, layero: JQuery): false | void;
        /**
         * 层销毁后触发的回调
         * @description 无论是确认还是取消，只要层被销毁了，end都会执行，不携带任何参数。
         */
        end?(): void;
        /**
         * 最大化后触发的回调
         * @param layero 当前层DOM
         */
        full?(layero: JQuery): void;
        /**
         * 最小化后触发的回调
         * @param layero 当前层DOM
         * @description `return false` 不执行默认最小化。
         */
        min?(layero: JQuery): false | void;
        /**
         * 还原后触发的回调
         * @param layero 当前层DOM
         */
        restore?(layero: JQuery): void;
    }

    interface ConfigOptions extends Options {
        /**
         * js所在的目录，可以是绝对目录，也可以是相对目录
         */
        path?: string | undefined;
        /**
         * 拓展的css皮肤
         */
        extend?: string | string[] | undefined;
    }

    interface PromptOptions extends Options {
        /**
         * 输入框类型，支持0（文本）默认1（密码）2（多行文本）
         */
        formType?: 0 | 1 | 2 | undefined;
        /**
         * 初始时的值
         * @default ''
         */
        value?: string | undefined;
        /**
         * 可输入文本的最大长度
         * @default 500
         */
        maxlength?: number | undefined;
    }

    interface TabOptions extends Options {
        tab: TabItem[];
        /**
         * 监听选项卡的切换事件
         * @param this 传入的选项
         * @param tabIndex 选项卡索引
         */
        change?(this: this, tabIndex: number): void;
    }

    interface TabItem {
        title: string;
        content: string;
    }

    interface PhotosOptions extends Options {
        photos: PhotosData | Selector;
        /**
         * 切换图片时触发
         * @param pic
         * @param layero
         */
        tab?(pic: PhotosDataItem, layero: JQuery): void;
    }

    interface PhotosData {
        /** 相册标题 */
        title: string;
        /** 相册id */
        id: number;
        /**
         * 初始显示的图片序号
         * @default 0
         */
        start?: number | undefined;
        /** 相册包含的图片 */
        data: PhotosDataItem[];
    }

    interface PhotosDataItem {
        /** 图片名 */
        alt: string;
        /** 图片id */
        pid?: number | undefined;
        /** 原图地址 */
        src: string;
        /** 缩略图地址 */
        thumb: string;
    }

    namespace callback {
        type Yes = NonNullable<Options["yes"]>;
        type Cancel = NonNullable<Options["cancel"]>;
        type End = NonNullable<Options["end"]>;
        type Prompt = (value: string, index: Index, elem: JQuery) => void;
    }

    interface Layer {
        /**
         * 初始化全局配置
         * @param options
         */
        config(options: ConfigOptions): this;
        /**
         * 初始化就绪
         * @param callback
         */
        ready(callback: () => void): this;
        /**
         * 原始核心方法
         * @param options
         */
        open(options?: Options): Index;
        /**
         * 普通信息框
         * @param content
         * @param options
         * @param yes
         */
        alert(content?: string, options?: Options, yes?: callback.Yes): Index;
        alert(content: string, yes: callback.Yes): Index;
        alert(options: Options, yes?: callback.Yes): Index;
        alert(yes: callback.Yes): Index;
        /**
         * 询问框
         * @param content
         * @param options
         * @param yes
         * @param cancel
         */
        confirm(content?: string, options?: Options, yes?: callback.Yes, cancel?: callback.Cancel): Index;
        confirm(content: string, yes: callback.Yes, cancel?: callback.Cancel): Index;
        confirm(options: Options, yes?: callback.Yes, cancel?: callback.Cancel): Index;
        confirm(yes: callback.Yes, cancel?: callback.Cancel): Index;
        /**
         * 提示框
         * @param content
         * @param options
         * @param end
         */
        msg(content: string, options?: Options, end?: callback.End): Index;
        msg(content: string, end: callback.End): Index;
        /**
         * 加载层
         * @param icon
         * @param options
         */
        load(icon?: 0 | 1 | 2, options?: Options): Index;
        /**
         * tips层
         * @param content
         * @param follow
         * @param options
         */
        tips(content: string, follow: Selector | HTMLElement, options?: Options): Index;
        /**
         * 关闭特定层
         * @param index
         */
        close(index: Index): void;
        /**
         * 关闭所有层
         * @param type
         */
        closeAll(type?: keyof Types): void;
        /**
         * 重新定义层的样式
         * @param index
         * @param cssStyle
         * @description 该方法对loading层和tips层无效。参数index为层的索引，cssStyle允许你传入任意的css属性
         */
        style(index: Index, cssStyle: Partial<CSSStyleDeclaration>): void;
        /**
         * 改变层的标题
         * @param title
         * @param index
         */
        title(title: string, index: Index): void;
        /**
         * 获取iframe页的DOM
         * @param selector
         * @param index
         */
        getChildFrame(selector: string, index: Index): JQuery;
        /**
         * 获取特定iframe层的索引
         * @param windowName
         */
        getFrameIndex(windowName: string): Index;
        /**
         * 指定iframe层自适应
         * @param index
         */
        iframeAuto(index: Index): void;
        /**
         * 重置特定iframe url
         * @param index
         * @param url
         */
        iframeSrc(index: Index, url: string): void;
        /**
         * 置顶当前窗口
         */
        setTop(layero: JQuery): void;
        /**
         * 在自定义元素上触发最大化。
         * @param index
         */
        full(index: Index): void;
        /**
         * 在自定义元素上触发最小化。
         * @param index
         */
        min(index: Index): void;
        /**
         * 在自定义元素上触发还原。
         * @param index
         */
        restore(index: Index): void;
        /**
         * 输入层
         * @param options
         * @param yes
         */
        prompt(options?: PromptOptions, yes?: callback.Prompt): Index;
        prompt(yes: callback.Prompt): Index;
        /**
         * tab层
         * @param options
         */
        tab(options: TabOptions): Index;
        /**
         * 相册层
         * @param options
         */
        photos(options: PhotosOptions): Index;
        /**
         * 最新弹出的某个层
         */
        index: Index;
        zIndex: number;
        /**
         * 版本字符串
         */
        v: string;
    }

    interface Options {
        /**
         * @deprecated v3.0
         * @description 只提供默认的一种拖拽风格
         */
        moveType?: number | undefined;
        /**
         * @deprecated v3.0
         * @see {@link #fixed}
         */
        fix?: boolean | undefined;
        /**
         * @deprecated v3.0
         * @see {@link #anim}
         */
        shift?: number | undefined;
    }
}
