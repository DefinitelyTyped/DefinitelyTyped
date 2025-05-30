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
        showSearch?: boolean | "cs";
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
        dblclick?(obj: { elem: JQuery; data: object; index: number }): boolean | undefined;
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
