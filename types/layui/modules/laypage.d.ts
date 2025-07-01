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
        layout?: Array<"count" | "prev" | "page" | "next" | "limit" | "refresh" | "skip">;
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

    interface LayPageOptionsForCallback extends Omit<Required<LayPageOptions>, "count" | "curr" | "limit" | "groups"> {
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
