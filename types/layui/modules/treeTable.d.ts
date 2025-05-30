declare namespace Layui {
    /**
     * 树表 `tree.callback` 事件回调相关的属性
     * @since 2.8.0
     */
    interface TreeTableTreeOptionsForCallback {
        /**
         * 展开前回调函数，可以在展开或者关闭之前调用，若回调返回 false 则取消该次操作
         *
         * @param tableId 当前表格 id
         * @param trData 当前操作的行数据
         * @param expandFlag 要展开或关闭的状态
         * @since 2.8.0
         */
        beforeExpand?(tableId: string, trData: Record<string, any>, expandFlag: boolean): boolean | undefined;
        /**
         * 展开或关闭后的回调函数
         *
         * @param tableId 当前表格 id
         * @param trData 当前操作的行数据
         * @param expandFlag 要展开或关闭的状态
         * @since 2.8.0
         */
        onExpand?(tableId: string, trData: Record<string, any>, expandFlag: boolean): void;
    }

    /**
     * 树表 `tree.async`异步相关的属性集合
     * @since 2.8.0
     */
    interface TreeTableTreeOptionsForAsync {
        /**
         * 是否开启异步加载模式。只有开启时 async 的其他属性配置才有效
         *
         * 注意： 异步加载子节点不应跟 simpleData 同时开启，可以是 url+simpleData 的方式，
         * 获取完整的简单数据进行转换。若开启异步加载模式，即表示按需异步加载子节点
         * @default false
         * @since 2.8.0
         */
        enable?: boolean;
        /**
         * 异步加载的接口，若与顶层接口相同可不设置
         * @since 2.8.0
         */
        url?: string;
        /**
         * 请求的接口类型，若与顶层接口相同可不设置
         * @since 2.8.0
         */
        type?: string;
        /**
         * 提交参数的数据类型，若与顶层接口相同可不设置
         * @since 2.8.0
         */
        contentType?: string;
        /**
         * 提交请求头，若与顶层接口相同可不设置
         * @since 2.8.0
         */
        headers?: object;
        /**
         * 提交参数的数据，若与顶层接口相同可不设置
         * @since 2.8.0
         */
        where?: object;
        /**
         * 自动参数，可以根据配置项以及当前节点的数据传参，如:
         * @example
         * ```js
         * ['type', 'age=age', 'parentId=id']
         * ```
         * 那么其请求参数将包含:
         * ```
         * {type: '父节点 type', age: '父节点 age', parentId: '父节点 id'}
         * ```
         * @since 2.8.0
         */
        autoParam?: string[];
        /**
         * 用于处理异步子节点数据的回调函数，该属性优先级高于 async.url 属性
         * @param trData 当前操作的行数据
         * @param options 当前表格配置项
         * @param callback 子节点的渲染函数，参数为子节点数据
         * @since 2.8.4
         */
        format?(
            trData: Record<string, any>,
            options: Required<TreeTableOptions>,
            callback: (nodeList: Array<object>) => void,
        ): void;
    }

    /**
     * 树表 `tree.data` 数据相关的属性集合
     * @since 2.8.0
     */
    interface TreeTableTreeOptionsForData {
        /**
         * 是否简单数据模式
         * @default false
         * @since 2.8.0
         */
        isSimpleData?: boolean;
        /**
         * 设置根节点的 pid 属性值
         * @default null
         * @since 2.8.2
         */
        rootPid?: string | null;
        /**
         * 用于设置复选的级联方式。支持以下可选值：
         * - all : 所有节点联动(默认)
         * - parent : 仅对父节点联动
         * - children : 仅对子节点联动
         * - none : 不做任何联动(2.8.16+)
         * @default 'all'
         * @since 2.8.12
         */
        cascade?: "all" | "parent" | "children" | "none";
    }

    /**
     * 树表 `tree.view` 视图相关的属性
     * @since 2.8.0
     */
    interface TreeTableTreeOptionsForView {
        /**
         * 层级缩进量
         * @default 14
         * @since 2.8.0
         */
        indent?: number;
        /**
         * 关闭时的折叠图标
         * @since 2.8.0
         */
        flexIconClose?: string;
        /**
         * 打开时的折叠图标
         * @since 2.8.0
         */
        flexIconOpen?: string;
        /**
         * 是否显示节点图标
         * @default true
         * @since 2.8.0
         */
        showIcon?: boolean;
        /**
         * 自定义节点图标。若设置了该属性或数据中有该字段信息，不管打开还是关闭都以这个图标的值为准
         * @since 2.8.0
         */
        icon?: string;
        /**
         * 自定义关闭时的节点图标
         * @since 2.8.0
         */
        iconClose?: string;
        /**
         * 自定义打开时的节点图标
         * @since 2.8.0
         */
        iconOpen?: string;
        /**
         * 叶子节点的图标
         * @since 2.8.0
         */
        iconLeaf?: string;
        /**
         * 若非父节点时，是否显示折叠图标
         * @default false
         * @since 2.8.0
         */
        showFlexIconIfNotParent?: boolean;
        /**
         * 双击节点时，是否自动展开父节点
         * @default true
         * @since 2.8.0
         */
        dblClickExpand?: boolean;
        /**
         * 是否默认展开全部节点
         * @default false
         * @since 2.8.7
         */
        expandAllDefault?: boolean;
    }

    /**
     * 树表 `tree.customName` 自定义属性名
     * @since 2.8.0
     */
    interface TreeTableTreeOptionsForCustomName {
        /**
         * 自定义「子节点集合」的属性名
         * @default 'children'
         * @since 2.8.0'
         */
        children?: string;
        /**
         * 自定义「是否属于父节点」的属性名
         * @default 'isParent''
         * @since 2.8.0
         */
        isParent?: string;
        /**
         * 自定义「节点」属性名
         * @default 'name'
         * @since 2.8.0
         */
        name?: string;
        /**
         * 自定义「节点索引」属性名
         * @default 'id'
         * @since 2.8.0
         */
        id?: string;
        /**
         * 自定义「父节点索引」属性名
         * @default 'parentId'
         * @since 2.8.0
         */
        pid?: string;
        /**
         * 自定义图标的属性名称
         * @default 'icon'
         * @since 2.8.4
         */
        icon?: string;
        /**
         * 设置根节点的 pid 属性值
         * @deprecated 2.8.2 已移除，请使用 {@link TreeTableTreeOptionsForData.rootPid|TreeTableTreeOptionsForData.rootPid}
         * @see {@link TreeTableTreeOptionsForData.rootPid|TreeTableTreeOptionsForData.rootPid}
         */
        rootId?: string;
    }

    /**
     * 树表 `tree` 选项
     */
    interface TreeTableTreeOptions {
        /**
         * 自定义属性名的集合
         * @since 2.8.0
         */
        customName?: TreeTableTreeOptionsForCustomName;
        /**
         * 视图相关的属性集合
         * @since 2.8.0
         */
        view?: TreeTableTreeOptionsForView;
        /**
         * 数据相关的属性集合
         * @since 2.8.0
         */
        data?: TreeTableTreeOptionsForData;
        /**
         * 异步相关的属性集合
         * @since 2.8.0
         */
        async?: TreeTableTreeOptionsForAsync;
        /**
         * 事件回调相关的属性集合
         * @since 2.8.0
         */
        callback?: TreeTableTreeOptionsForCallback;
    }

    interface TreeTableOptions extends TableOptions {
        tree?: TreeTableTreeOptions;
        /**
         * 数据渲染之前的回调函数
         * @param opts 基础参数
         */
        before(opts: Required<TreeTableOptions>): void;
    }

    interface TreeTableAddNodesOptions {
        /**
         * 父节点数据下标
         * 一般在 tool 事件中，可通过对应数据项中的 `LAY_DATA_INDEX` 特定属性获得
         */
        parentIndex: number | string;
        /**
         * 节点对应的行下标。若为 -1 表示插入到最后，否则则插入到对应下标。
         * @default -1
         */
        index?: number | string;
        /**
         * 新增的节点数据项。若新增的是多个节点，则用数组的形式。若只有一个节点可以是普通对象形式
         */
        data: Record<string, any> | Array<Record<string, any>>;
        /**
         * 是否聚焦到新增的节点。若存在多个，则聚焦到第一个新增的节点
         * @default false
         */
        focus?: boolean;
    }

    interface TreeTableExpandNodeOptions {
        /**
         * 节点数据下标
         */
        index: number | string;
        /**
         * 设置展开或关闭状态，若为 true 则表示展开；false 则为关闭；null 则表示切换
         */
        expandFlag?: boolean | null;
        /**
         * 子节点是否继承父节点的展开或关闭状态，expandFlag 属性必须为 boolean 型时才有效
         * @default false
         */
        inherit?: boolean;
        /**
         * 是否触发事件
         * @default false
         */
        callbackFlag?: boolean;
    }

    interface TreeTableSetRowCheckedOptions {
        /**
         * 要设置选中状态的行下标或行数据
         */
        index: number | string | object;
        /**
         * 选中状态
         * - true 选中；
         * - false 取消选中；
         * - null 切换。 其中，若为 radio 框，则不支持 null(切换)。
         */
        checked?: boolean;
        /**
         * 是否触发事件，若为 true，则 checked: false 无效。其对应的事件跟 table 的 radio,checkbox 事件用法一样
         */
        callbackFlag?: boolean;
    }

    interface TreeTableRenderReturn extends TableRenderReturn {
        /**
         * 当前表格配置属性
         */
        config: Required<TreeTableOptions>;
        /**
         * 对当前表格的完整重载
         */
        reload(options: Partial<TreeTableOptions>, deep?: boolean): void;
        /**
         * 仅数据重载
         * @since 2.7.0
         */
        reloadData(options: Partial<TreeTableOptions>, deep?: boolean): void;
    }

    /**
     * treeTable
     * @see https://layui.dev/docs/2/treeTable
     * @since 2.8.0
     */
    interface TreeTable extends Omit<Table, "setRowChecked" | "updateRow"> {
        /**
         * treeTable 组件渲染，核心方法
         * @param option 基础参数
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#render
         */
        render(option: TreeTableOptions): TreeTableRenderReturn;
        /**
         * 树表完整重载
         * @param id treeTable 的 id，唯一实例标识
         * @param option 基础参数
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#reload
         */
        reload(id: string, option?: Partial<TreeTableOptions>): TreeTableRenderReturn;
        /**
         * 树表数据重载
         * @param id treeTable 的 id，唯一实例标识
         * @param option 基础参数
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#reload
         */
        reloadData(id: string, option?: Partial<TreeTableOptions>): TreeTableRenderReturn;
        /**
         * 获取树表数据
         *
         * 该方法用于获取表格当前页的全部数据，它对应的是接口返回的原始数据，不包含 treeTable 组件内部的特定字段
         *
         * @param id treeTable 渲染时的 id 属性值
         * @param isSimpleData  是否为简单数据，为 true 时返回简单数据结构的数据，否则则为带层级的数据
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#getData
         */
        getData(id: string, isSimpleData?: boolean): any[];
        /**
         * 获取树表对应下标的数据
         *
         * 该方法用于获取表格当前页对应下表的数据，返回的数据格式同 `treeTable.getData()` 方法
         *
         * @param id  treeTable 渲染时的 id 属性值
         * @param index 节点对应的行下标，一般可通过 `<tr>` 元素的 `data-index` 属性获得
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#getNodeDataByIndex
         */
        getNodeDataByIndex(id: string, index: number): void;
        /**
         * 更新行数据
         * @param id treeTable 渲染时的 id 属性值
         * @param index 节点对应的行下标，一般可通过 `<tr>` 元素的 `data-index` 属性获得
         * @param data 更新的数据项，可包含要更新的各种字段
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#updateNode
         */
        updateNode(id: string, index: number, data: object): void;
        /**
         * 删除行记录
         * @param id  treeTable 渲染时的 id 属性值
         * @param index 要删除的节点数据，也可以是节点对应的行下标（ data-index）
         * @param _keepParent 是否保留父节点属性，即使 children 已删除
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#removeNode
         */
        removeNode(id: string, index: string | object, _keepParent?: boolean): void;
        /**
         * 新增行记录
         * @param id treeTable 渲染时的 id 属性值
         * @param opts 选项
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#addNodes
         */
        addNodes(id: string, opts: TreeTableAddNodesOptions): void;
        /**
         * 展开或关闭节点
         * @param id treeTable 渲染时的 id 属性值
         * @param opts 选项
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#expandNode
         */
        expandNode(id: string, opts: TreeTableExpandNodeOptions): void;
        /**
         * 展开或关闭全部节点（目前只支持关闭全部）
         * @param id treeTable 渲染时的 id 属性值
         * @param expandFlag 折叠状态。true 展开；false 关闭
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#expandAll
         */
        expandAll(id: string, expandFlag: boolean): void;
        /**
         * 设置行选中状态
         * @param id treeTable 渲染时的 id 属性值
         * @param opts
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#setRowChecked
         */
        setRowChecked(id: string, opts: TreeTableSetRowCheckedOptions): void;
        /**
         * 全选或取消全选
         * @param id treeTable 渲染时的 id 属性值
         * @param checked 选中状态。true 选中；false 取消选中；null 复选框模式时的切换。
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#checkAllNodes
         */
        checkAllNodes(id: string, checked: boolean | null): void;
        /**
         * 重载异步子节点
         * @param id treeTable 渲染时的 id 属性值
         * @param index 节点对应的行下标，一般可通过 `<tr>` 元素的 `data-index` 属性获得
         * @since 2.8.4
         * @see https://layui.dev/docs/2/treeTable/#reloadAsyncNode
         */
        reloadAsyncNode(id: string, index: string | number): void;
        /**
         * 获取节点信息集
         * @param id treeTable 渲染时的 id 属性值
         * @param dataId 数据项的 id 属性值
         * @since 2.8.4
         * @see https://layui.dev/docs/2/treeTable/#getNodeById
         */
        getNodeById(id: string, dataId: string): any;
        /**
         * 获取符合过滤规则的节点信息集
         * @param id treeTable 渲染时的 id 属性值
         * @param filter 过滤函数
         * @param opts 选项
         * - isSingle 是否只找到第一个;
         * - parentNode 在指定在某个父节点下的子节点中搜索
         * @since 2.8.4
         * @see https://layui.dev/docs/2/treeTable/#getNodesByFilter
         */
        getNodesByFilter(
            id: string,
            filter: (item: any) => boolean,
            opts?: { isSingle?: boolean; parentNode?: object },
        ): object;
        /**
         * @param id treeTable 渲染时的 id 属性值
         * @param includeHalfCheck 是否包含半选状态的数据(2.8.4)
         * @since 2.8.0
         * @see https://layui.dev/docs/2/treeTable/#checkStatus
         */
        checkStatus(id: string, includeHalfCheck?: boolean): TablecheckStatusReturn;
        /**
         * 表格事件
         *
         * `treeTable.on('event(filter)', callback);`
         *
         * - 参数 event(filter) 是事件的特定结构。 event 为事件名，支持的事件见下表。filter 为元素属性 lay-filter 对应的值
         * - 参数 callback 为事件执行时的回调函数，并返回一个包含各项成员的 object 类型的参数
         *
         * |  event | 描述 |
         * | --- | --- |
         * | toolbar | 头部工具栏事件 |
         * | sort | 表头排序切换事件 |
         * | colTool | 表头自定义元素工具事件（2.8.8） |
         * | colResized | 列拖拽宽度后的事件（2.8.0） |
         * | colToggled | 列筛选（显示或隐藏）后的事件（2.8.0） |
         * | row | 行单击事件 |
         * | rowDouble | 行双击事件 |
         * | rowContextmenu | 行右键菜单事件（2.8.0） |
         * | edit | 单元格编辑事件 |
         * | tool | 单元格工具事件。可在该事件中实现行的更新与删除操作 |
         * | toolDouble | 单元格工具事件。可在该事件中实现行的更新与删除操作（2.7.0） |
         * | checkbox | 复选框事件 |
         * | radio | 单选框事件 |
         * | pagebar | 尾部分页栏事件（2.7.0） |
         * @param event event(filter)
         * @param callback 事件回调参数
         * @see https://layui.dev/docs/2/table/#table.on
         */
        on<K extends keyof TableEventMap<TreeTableOptions, TreeTableSetRowCheckedOptions>>(
            event: `${K}(${TableFilter})`,
            callback: TableEventMap<TreeTableOptions, TreeTableSetRowCheckedOptions>[K],
        ): void;
        on<K extends keyof TableEventMap<TreeTableOptions, TreeTableSetRowCheckedOptions>>(
            event: K,
            callback: TableEventMap<TreeTableOptions, TreeTableSetRowCheckedOptions>[K],
        ): void;
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        on<K extends string>(event: `${K}(${TableFilter})`, callback: AnyFn): void;
        /**
         * @internal
         * @param id treeTable 渲染时的 id 属性值
         */
        sort(id: string): void;
    }
}
