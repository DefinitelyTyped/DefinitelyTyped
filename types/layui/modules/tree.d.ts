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
        state: "open" | "close" | "normal";
    }

    interface TreeOperateData {
        data: any;
        elem: JQuery;
        type: LiteralStringUnion<"add" | "update" | "del">;
    }

    type TreeReloadReturn = Pick<Tree, "config" | "reload" | "getChecked" | "setChecked">;

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
