declare namespace Layui {
    // utils
    type Primitive = null | undefined | string | number | boolean | symbol | bigint;
    type Fn = () => void;
    type AnyFn = (...args: any[]) => any;
    type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never;
    type MaybeArray<T> = T | T[];
    type MaybePromise<T> = T | Promise<T> | JQuery.Deferred<T>;
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type PlainObject<T = any> = {
        [key: string]: T;
    };
    type OmitIndexSignature<ObjectType> = {
        [
            KeyType in keyof ObjectType as {} extends Record<KeyType, unknown> ? never
                : KeyType
        ]: ObjectType[KeyType];
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
            [T in keyof GlobalModules]: AnyFn;
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

    interface GlobalModules extends Omit<BuiltinModules, "all"> {
        [index: string]: any;
    }
    interface BuiltinModules {
        /**
         * 用于标识的属性
         * @internal
         */
        all: any;
        /**
         * 轮播
         * @see https://layui.dev/docs/2/carousel/
         */
        carousel: Carousel;
        /**
         * 代码预览
         * @see https://layui.dev/docs/2/code/
         */
        code: Code;
        /**
         * 颜色选择器
         * @see https://layui.dev/docs/2/colorpicker/
         */
        colorpicker: ColorPicker;
        /**
         * 组件构建器
         * @see https://layui.dev/docs/2/component/
         * @since 2.10.0
         */
        component: ComponentBuilder;
        /**
         * 下拉菜单
         * @see https://layui.dev/docs/2/dropdown/
         */
        dropdown: Dropdown;
        /**
         * 元素操作
         * @see https://layui.dev/docs/2/nav/ - 导航栏
         * @see https://layui.dev/docs/2/tab/ - 选项卡
         * @see https://layui.dev/docs/2/panel/ - 折叠面板
         * @see https://layui.dev/docs/2/progress/ - 进度条
         * @see https://layui.dev/docs/2/nav/#separator - 面包屑
         */
        element: Element;
        /**
         * 流加载
         * @see https://layui.dev/docs/2/flow/
         */
        flow: Flow;
        /**
         * 表单
         * @see https://layui.dev/docs/2/form/
         */
        form: Form;
        jquery: JQueryStatic;
        /**
         * layui 内部使用的工具函数
         *
         * 请谨慎使用，不保证兼容性
         * @internal
         */
        lay: LayStatic;
        /**
         * 日期选择器
         * @see https://layui.dev/docs/2/laydate/
         */
        laydate: Laydate;
        /**
         * 富文本编辑器
         * @deprecated 2.8.0 已移除
         */
        layedit: Layedit;
        /**
         * 弹层
         * @see https://layui.dev/docs/2/layer/
         */
        layer: Layer;
        /**
         * 分页
         * @see https://layui.dev/docs/2/laypage/
         */
        laypage: Laypage;
        /**
         * 模板引擎
         * @see https://layui.dev/docs/2/laytpl/
         */
        laytpl: Laytpl;
        /**
         * 用于标识的属性
         * @internal
         */
        "layui.all": string;
        /**
         * 评分
         * @see https://layui.dev/docs/2/rate/
         * @since 2.11.0 后继承自 Component 组件
         */
        rate: Rate;
        /**
         * 滑块
         * @see https://layui.dev/docs/2/slider/
         */
        slider: Slider;
        /**
         * 表格
         * @see https://layui.dev/docs/2/table
         */
        table: Table;
        /**
         * 标签页
         * 该组件继承自 Component 组件
         * @see https://layui.dev/docs/2/tabs/
         * @since 2.10.0
         */
        tabs: Tabs;
        /**
         * 树形表格
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/
         */
        treeTable: TreeTable;
        /**
         * 穿梭框
         * @see https://layui.dev/docs/2/transfer/
         */
        transfer: Transfer;
        /**
         * 树
         * @see https://layui.dev/docs/2/tree/
         */
        tree: Tree;
        /**
         * 上传
         * @see https://layui.dev/docs/2/upload/
         */
        upload: Upload;
        /**
         * 工具集
         * @see https://layui.dev/docs/2/util/
         */
        util: Util;
    }

    /**
     * 地址中的参数和路径信息
     */
    interface UrlHash {
        hash: string;
        href?: string;
        /**
         * @deprecated 2.11.0 已废弃，使用 {@link UrlHash["pathname"]|pathname}
         */
        path: string[];
        pathname: string[];
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
