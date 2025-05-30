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
        "layui.all": string;
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
