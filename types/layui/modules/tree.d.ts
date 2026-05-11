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

    class TreeClass extends Component<TreeOptions> {
        reload(...args: any[]): any;
        renderForm(...args: any[]): any;
        tree(...args: any[]): any;
        spread(...args: any[]): any;
        updateFieldValue(...args: any[]): any;
        syncCheckedState(...args: any[]): any;
        checkClick(...args: any[]): any;
        operate(...args: any[]): any;
        getChecked(...args: any[]): any;
        setChecked(...args: any[]): any;
    }

    interface TreeReturn extends ComponentReturn<TreeOptions> {
        /**
         * 获取选中的节点数据
         */
        getChecked(): ReturnType<Tree["getChecked"]>;
        /**
         * 设置选中的节点
         * @param id 对应 tree 渲染时定义的 id 属性值
         */
        setChecked(id: string): void;
    }

    /**
     * 树
     * @see https://layui.dev/docs/2/tree/
     * @since 2.13.0 之后继承自 Component
     */
    interface Tree extends ComponentInterface<TreeOptions, TreeClass, TreeReturn> {
        /**
         * 获取选中的节点数据
         * @param id 对应 tree 渲染时定义的 id 属性值
         */
        getChecked(id: string): TreeData[];
        /**
         * 核心渲染方法
         * @param option 基础参数
         */
        render(option: TreeOptions): TreeReturn;
        /**
         * 设置选中的节点
         * @param id 对应 tree 渲染时定义的 id 属性值
         * @param nodeId 对应 tree 渲染时的 data 中的 id 属性值。数组格式，可设置多个
         */
        setChecked(id: string, nodeId: any): void;
    }
}
