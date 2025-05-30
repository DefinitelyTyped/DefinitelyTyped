declare namespace Layui {
    interface TableColumnOptions {
        /**
         * 设置字段名。通常是表格数据列的唯一标识
         *
         * 若未设置则用索引值代替，但不建议这么做
         */
        field?: string;
        /**
         * 设定标题名称
         */
        title?: string;
        /**
         * 设置列的字段标题。该属性在筛选列和导出场景中优先级高于 {@link TableColumnOptions.title|title} 属性
         * @since 2.8.0
         */
        fieldTitle?: string;
        /**
         * 设置列宽。若不填写，则自动分配；若填写，则支持值为：数字、百分比。如：
         * - width: 200
         * - width: '30%'
         */
        width?: string | number;
        /**
         * 设置当前列的最小宽度，一般用于列宽自动分配的情况。其优先级高于基础属性中的 {@link TableOptions.cellMinWidth|cellMinWidth}
         * @default 60
         */
        minWidth?: number;
        /**
         * 设置当前列的最大宽度。其优先级高于基础属性中的 {@link TableOptions.cellMaxWidth|cellMaxWidth}
         * @since 2.8.0
         */
        maxWidth?: number;
        /**
         * 设置单元格被展开后的宽度。若设置的值的小于当前列宽，则展开后的列宽保持不变。
         *
         * 注：当 expandedMode 属性为默认值时有效。
         * @since 2.8.15
         */
        expandedWidth?: number;
        /**
         * 设置当前表头单元格展开方式，优先级高于 {@link TableOptions.cellExpandedMode|cellExpandedMode}
         *
         * 默认多行展开
         * @since 2.8.17
         */
        expandedMode?: "tips";
        /**
         * 设定列类型
         * - normal 常规列，无需设定
         * - checkbox 复选框列
         * - radio 单选框列
         * - numbers 序号列
         * - space 空列
         * @default 'normal''
         */
        type?: "normal" | "checkbox" | "radio" | "space" | "numbers";
        /**
         * 设置全选状态，当列设置 type: 'checkbox' 时才有效
         *
         * 如果设置 true，则表示复选框默认全部选中
         * @default false
         */
        LAY_CHECKED?: boolean;
        /**
         * 设置固定列，即不跟随 table 横向滚动条而滚动。可选值有：
         * - left 固定在左
         * - right 固定在右
         *
         * 注意：如果是固定在左，该列必须放在表头最前面；
         * 如果是固定在右，该列必须放在表头最后面;
         * 多级表头设置固定列时，父列和子列均需设置;
         * 非 right' 就是 'left'
         */
        fixed?: "left" | "right";
        /**
         * 设置列的自定义模板，核心属性。模板遵循 laytpl 组件语法。
         *
         * templet 有三种使用方式
         * - 设置模版选择器 `templet: '#id'`
         * - 设置模板内容 `templet: '<div>test</div>'`
         * - 设置模板函数 `templet: function(d){return d.xx + str}`
         *
         * 回调参数 d 从 v2.6.8 新增 LAY_COL 字段，可得到当前列的表头配置信息
         */
        templet?: string | ((d: TableColumnOptionsForTemplet) => string);
        /**
         * 用于表格导出时的内容输出，当 `templet` 较复杂时建议使用，将优先以对应表头的 `exportTemplet` 的返回内容为导出结果
         * @example
         * ```
         * exportTemplet: function(d, obj){
         *   // 当前 td
         *   var td = obj.td(this.field);
         *   // 返回 select 选中值
         *   return td.find('select').val();
         * }
         * ```
         * @since 2.6.9
         */
        exportTemplate?:
            | string
            | ((
                d: TableColumnOptionsForTemplet,
                obj: { td: (field: TableColumnOptions["field"]) => JQuery },
            ) => string);
        /**
         * 是否开启该列的自动合计功能，默认不开启。
         *  1. parseData 中包含totalRow 可以映射自定字段
         *  2. 从 layui 2.6.3 开始，如果 totalRow 为一个 string 类型，则可解析为合计行的动态模板
         *     实例：`totalRow: '{{ d.TOTAL_NUMS }} 单位'` 或 `'{{ parseInt(d.TOTAL_NUMS) }}'`
         *  3. 合计行模板仅支持字符写法，不支持函数写法
         *  4. 后端合计
         * @example
         * ```js
         * // 前端合计的数据有限，因此常需要后端直接返回合计结果，组件将优先读取。数据格式如下：
         * {
         *   "code": 0,
         *   "totalRow": {
         *     "score": "777",
         *     "experience": "999"
         *   },
         *   "data": [{}, {}],
         *   "msg": "",
         *   "count": 1000
         * }
         *
         * // 在合计行自定义模板中输出后端返回的合计数据
         * // 获取后端接口返回数据中的统计字段。此处 TOTAL_ROW 即对应返回据中的 totalRow
         * totalRow: '分数：{{= d.TOTAL_ROW.score }}'
         *  ```
         * @default false
         */
        totalRow?: boolean | string | Record<string, any>;
        /**
         * 单元格编辑类型
         * - edit: `text` 单行输入模式
         * - edit: `textarea` 多行输入模式（2.7.0）
         * - edit: () => 'text' （2.7.5）
         * @default false
         */
        edit?: "text" | "textarea" | boolean | ((d: TableColumnOptionsForTemplet) => "text" | "textarea");
        /**
         * 是否初始隐藏列
         * @default false
         */
        hide?: boolean;
        /**
         * 导出时忽略该列。支持以下可选值：
         * - true: 忽略导出
         * - false: 强制导出，对所有列适用
         * - null: 只对常规列导出（默认）
         * @since 2.8.3
         */
        ignoreExport?: boolean | null;
        /**
         * 是否对当前列进行内容编码（转义 html），优先级大于基础属性中的 {@link TableOptions.escape | escape}
         * @default true
         * @since 2.7.5
         */
        escape?: boolean;
        /**
         * 是否开启列的排序功能
         *
         * 注意：不推荐对值同时存在“数字和普通字符”的列开启排序，
         * 因为会进入字典序排序计算中，如：'张三' > '2' > '100'，
         * 这可能并不是你想要的结果，但字典序排列采用的是 ASCII 码比对
         * @default false
         */
        sort?: boolean;
        /**
         * 是否禁用拖拽列宽。
         *
         * 默认情况下会根据列类型 type 属性来决定是否禁用，如复选框列，会自动禁用。
         * 而其它普通列，默认允许拖拽列宽，当然你也可以设置 true 来禁用该功能。
         * @default false
         */
        unresize?: boolean;
        /**
         * 自定义单元格点击事件名，以便在 单元格工具事件 中完成对该单元格的事件处理
         *
         * 比如：table.on('tool(tableFilter)', function(obj){obj.event=''})
         */
        event?: string;
        /**
         * 自定义单元格样式。可传入任意的 CSS 内容，如：`style: 'font-size: 13px; color: red;'`
         */
        style?: string;
        /**
         * 单元格排列方式。可选值有：left（默认）、center（居中）、right（居右）
         * @default 'left''
         */
        align?: "left" | "center" | "right";
        /**
         * 单元格所占列数。一般用于多级表头
         * @default 1
         */
        colspan?: number;
        /**
         * 单元格所占行数。一般用于多级表头
         * @default 1
         */
        rowspan?: number;
        /**
         * 绑定行工具模板。用法同 templet 参数完全相同（因为历史兼容问题所以保留）。
         *
         * 可在每行对应的列中出现一些自定义的操作性按钮
         * @deprecated 2.8.0 已弃用
         */
        toolbar?: string;
        /**
         * 用于显示自定义的合计文本
         * @deprecated 2.8.0 已弃用，请使用 {@link TableColumnOptions.totalRow|totalRow}
         */
        totalRowText?: string;
        /**
         * 是否是多选列
         * @deprecated 2.8.0 已弃用，请使用 {@link TableColumnOptions.type|type}
         */
        checkbox?: boolean;
    }

    /**
     * table 的 templet 回调参数格式
     *
     * tips:templet回调中可以使用 d.xx  xx为任意参数
     *
     * 2.8.0 序号: `LAY_INDEX` → `LAY_NUM`；下标: `LAY_TABLE_INDEX` → `LAY_INDEX`
     */
    interface TableColumnOptionsForTemplet {
        LAY_COL: TableColumnOptionsForTempletCol;
        /**
         * 序号
         * @since 2.8.0
         */
        LAY_NUM: number;
        /**
         * 下标
         */
        LAY_INDEX: number;
        /**
         * 下标
         * @deprecated 2.8.0 移除，改为 `LAY_INDEX`
         */
        LAY_TABLE_INDEX: number;
        /**
         * @since 2.7.1
         */
        LAY_DISABLED: boolean;
        /**
         * 仅用于恢复排序
         * @internal
         * @since 2.9.20
         */
        LAY_INDEX_INIT: number;
        /**
         * 该属性不存在，只是提示你：可以用 d.xxx 使用当前行中的任意数据属性
         */
        "可以用 d.xx 来使用当前行的其他属性": never;
        [index: string]: any;
    }

    /**
     * table 的 templet 回调中 d.LAY_COL的格式定义
     */
    interface TableColumnOptionsForTempletCol extends Required<TableColumnOptions> {
        HAS_PARENT: boolean;
        PARENT_COL_INDEX: number;
        key: string;
        parentKey: string;
    }

    /**
     * 用于修改 request 参数名
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
     * 用于修改 Response 参数名
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

    /**
     * 接口响应数据格式
     */
    interface TableResponse {
        /**
         * 接口状态
         */
        code?: number;
        /**
         * 提示文本
         */
        msg?: string;
        /**
         * 数据总数
         */
        count?: number;
        /**
         * 数据列表
         */
        data?: any;
        [propName: string]: any;
    }

    interface TableRenderReturn {
        /**
         * 当前表格配置属性
         */
        config: Required<TableOptions>;
        /**
         * 对当前表格的完整重载
         */
        reload(options?: Partial<TableOptions>, deep?: boolean): void;
        /**
         * 仅数据重载
         * @since 2.7.0
         */
        reloadData(options?: Partial<TableOptions>, deep?: boolean): void;
        /**
         * 对当前表格重新分配列宽
         */
        setColsWidth(): void;
        /**
         * 对当前表格重新适配尺寸
         */
        resize(): void;
    }

    /**
     * 基础参数选项
     * @see https://layui.dev/docs/2/table/#api
     */
    interface TableOptions {
        /**
         * 指定原始 table 容器的选择器或 DOM，方法渲染方式必填
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 发送异步请求的 URL
         * - 2.8.0 之前默认自动传递两个参数：?page=1&limit=30（该参数可通过 request 自定义）
         * - page 代表当前页码，limit 代表每页数据量
         * @see https://layui.dev/docs/2/table/#options.ajax
         */
        url?: string | null;
        /**
         * 表头属性集，通过二维数组定义多级表头。方法渲染时必填。
         *
         * 一维是表头层级，二维是列定义
         * @see https://layui.dev/docs/2/table/#options.cols
         */
        cols: TableColumnOptions[][];
        /**
         * 本地数据模式
         *
         * 当设置 data 模式时，count 的值取 data.length，即对一段已知数据进行分页展示。
         * 此时在 page 属性中设置 count 无效。 若要在同一页显示所有数据，可将 limit 设置
         * 成 data.length，即与 count 等同即可，那么默认的分页栏只会显示 1 页，若要自定义
         * 分页结构，可通过 pagebar 属性结合 laypage 组件来重新自定义分页排版
         */
        data?: Array<any>;
        /**
         * 设定实例唯一索引，以便用于其他方法对 table 实例进行相关操作。
         * 若该属性未设置，则默认从 elem 属性绑定的原始 table 元素中的 id 属性值中获取
         */
        id?: string;
        /**
         * 开启表格头部工具栏区域，该参数支持四种类型值：
         * - `toolbar: '#toolbarDemo'` 指向自定义工具栏模板选择器
         * - `toolbar: '<div>xxx</div>'` 直接传入工具栏模板字符
         * - `toolbar: true` 仅开启工具栏，不显示左侧模板
         * - `toolbar: 'default'` 开启工具栏并显示默认模板
         * @default false
         */
        toolbar?: string | HTMLElement | boolean;
        /**
         * 设置头部工具栏右上角工具图标，值为一个数组，图标将根据数组值的顺序排列，默认内置工具：
         * - filter: 列筛选
         * - exports: 导出
         * - print: 打印
         */
        defaultToolbar?: Array<
            "filter" | "exports" | "print" | "" | { title?: string; layEvent?: string; icon?: string } | {
                name?: string;
                layEvent?: string;
                icon?: string;
                onClick?: (obj?: object) => void;
            }
        >;
        /**
         * 设置容器宽度，默认自适应
         */
        width?: number | string;
        /**
         * 设置表格容器高度，默认自适应
         * - `height: 315` 设置固定高度
         * - `height: 'full-30'` 设置自适应高度。这是一个特定的语法格式：full 表示铺满；后面的数字表示当前 table 之外的元素占用的高度，如：表格头部到页面最顶部加表格底部距离页面最底部的“距离和”
         * - `height: '#id-30'` 设置相对父元素的高度自适应，其中 #id 即父元素的 ID 选择器，其计算原理和上述 full 相同（2.8.0）
         * - `height: () => $(window).height() - otherHeight` 设置动态高度（2.9.1）
         */
        height?: number | `full-${string}` | `#${string}-${string}}` | (() => number);
        /**
         * 设置表格容器的最大高度，设置该属性后，height 属性将被认定为默认的自适应值
         * @since 2.8.0
         */
        maxHeight?: number;
        /**
         * 设置所有普通单元格的最小宽度，一般用于列宽自动分配的情况。其优先级低于表头属性中的 {@link TableColumnOptions.minWidth|minWidth}
         * @default 60
         */
        cellMinWidth?: number;
        /**
         * 设置所有普通单元格的最大宽度。其优先级低于表头属性中的 {@link TableColumnOptions.maxWidth|maxWidth}
         * @since 2.8.0
         */
        cellMaxWidth?: number;
        /**
         * 用于定义表格的多行样式，如每行的高度等。
         *
         * 该参数一旦设置，单元格将会开启多行模式，且鼠标 hover 时会通过显示滚动条的方式查看到更多内容。
         * @example lineStyle: 'height: 95px;'
         * @since 2.7.0
         */
        lineStyle?: string;
        /**
         * 表格主容器追加 css 类名，以便更好地扩展表格样式
         * @since 2.7.0
         */
        className?: string;
        /**
         * 给当前表格主容器直接设定 css 样式，样式值只会对所在容器有效，不会影响其他表格实例
         * @example css: '.layui-table-page{text-align: right;}'
         * @since 2.7.0
         */
        css?: string;
        /**
         * 用于设置所有单元格默认展开方式，可选值有：
         * - tips 悬浮展开方式
         * - default 多行展开方式（默认）
         * @since 2.8.17
         */
        cellExpandedMode?: "tips";
        /**
         * 用于设置所有单元格默认展开后的宽度。当 cellExpandedMode 属性为默认值时有效
         * @default 60
         * @since 2.8.17
         */
        cellExpandedWidth?: number;
        /**
         * 是否开启对内容的编码（转义 html）
         *
         * 默认 true，2.6.11 之前默认为 false
         * @default true
         */
        escape?: boolean;
        /**
         * 是否开启合计行区域
         * @default false
         */
        totalRow?: boolean;
        /**
         * 开启分页，PageOptions 时排除 jump 和 elem
         * @default false
         */
        page?: boolean | Omit<LayPageOptions, "elem" | "jump">;
        /**
         * 开启分页区域的自定义模板，用法同 toolbar 属性
         * @since 2.7.0
         */
        pagebar?: string | HTMLElement | boolean;
        /**
         * 每页显示的条数。值需对应 limits 参数的选项
         *
         * 优先级低于 page 属性中的 limit 属性
         * @default 10
         */
        limit?: number;
        /**
         * 每页条数的选择项，默认：[10,20,30,40,50,60,70,80,90]
         *
         * 优先级低于 page 参数中的 limits 参数
         */
        limits?: number[];
        /**
         * 是否显示加载条（默认 true）。若为 false，则在切换分页时，不会出现加载条。
         * 该参数只适用于 url 参数开启的方式
         * - 若值为 `string` 类型 2.9.10+，表示自定义加载模板，此时可添加任意动画元素
         * @example
         * ```
         * loading: '<i class="layui-icon layui-icon-loading-1 layui-anim layui-anim-rotate layui-anim-loop"></i>'
         * ```
         */
        loading?: boolean | string;
        /**
         * 设置重载数据或切换分页时的滚动条位置状态
         * - `fixed` 重载数据时，保持滚动条位置不变
         * - `reset` 重载数据时，滚动条位置恢复置顶
         * - `default` 默认方式，无需设置。即重载数据或切换分页时，纵向滚动条置顶，横向滚动条位置不变
         * @since 2.7.3
         */
        scrollPos?: "fixed" | "reset " | "default ";
        /**
         * 单元格编辑的事件触发方式
         * @default 'click'
         * @since 2.7.0
         */
        editTrigger?: "click" | "dbclick";
        /**
         * 定义 table 的大标题（在文件导出等地方会用到）
         */
        title?: string;
        /**
         * 自定义文本，如空数据时的异常提示等。
         * @default '无数据''
         */
        text?: { none: string };
        /**
         * 是否由组件自动进行前端排序。若为 false，则需自主排序，即由后端直接返回排序好的数据
         * @default true
         */
        autoSort?: boolean;
        /**
         * 初始排序状态。用于在数据表格渲染完毕时，按某个字段排序显示
         * - field 排序字段。对应 cols 设定的各字段名
         * - type 排序方式。可选值 : 'asc','desc',null，即：升序、降序、默认
         */
        initSort?: { field: string; type?: null | "desc" | "asc" };
        /**
         * 用于设定表格风格
         * @default 'grid
         */
        skin?: "grid" | "line" | "row" | "nob";
        /**
         * 是否开启隔行背景
         * @default false
         */
        even?: boolean;
        /**
         * 设定表格尺寸
         * @default 'md'
         */
        size?: "sm" | "md" | "lg";
        /**
         * 数据渲染之前的回调函数
         * @param options 各项基础参数
         * @since 2.7.3
         */
        before?(options: Required<TableOptions>): void;
        /**
         * 数据渲染完毕的回调函数
         * @param res 当前渲染的数据
         * - 如果是异步请求数据方式，res 即为你接口返回的信息
         * - 如果是直接赋值的方式，res 即为：{data: [], count: 99} data 为当前页数据，count为数据总长度
         * @param curr 得到当前页码
         * @param count 得到数据总量
         * @param origin 回调函数所执行的来源，区分重载和重新渲染数据（2.8.7）
         */
        done?(res: any, curr: number, count: number, origin?: string): void;
        /**
         * 数据请求失败的回调
         * @param e 错误对象,是 jqXHR 对象（对XHR扩展），不同 jQuery 版本其格式不同
         * @param msg 内容，例如 "error" “abort”
         */
        error?(e: JQuery.jqXHR, msg: any): void;
        /**
         * 数据接口请求完成后执行，无论成功还是失败均会触发
         * @param xhr jqXHR 对象（对XHR扩展），不同 jQuery 版本其格式不同
         * @param textStatus 描述请求状态的字符串
         * @since 2.8.18
         */
        complete?(xhr: JQuery.jqXHR, textStatus: string): void;
        /**
         * 请求的方式，默认：get
         */
        method?: string;
        /**
         * 接口的其它参数。如：where: {token: 'sasasas', id: 123}
         */
        where?: object | null;
        /**
         * 接口的请求头。如：headers: {token: 'sasasas'}
         */
        headers?: object;
        /**
         * 发送到服务端的内容编码类型
         *
         * 若要发送 json 内容，可以设置：`contentType: 'application/json'`
         */
        contentType?: string;
        /**
         * 请求的数据类型，默认 json
         * @since 2.7.3
         */
        dataType?: string;
        /**
         * 设置当 `dataType: 'jsonp'` 时的回调函数名
         * @since 2.7.3
         */
        jsonpCallback?: string;
        /**
         * 数据格式解析的回调函数，用于将返回的任意数据格式解析成 table 组件规定的数据格式
         * @param res 原始返回的数据
         */
        parseData?(res: any): TableResponse;
        /**
         * 用于对默认的分页相关的请求参数 page,limit 重新设定名称
         */
        request?: TableRequestRename;
        /**
         * 可以借助 response 重新设定本地识别响应字段名
         *
         * 当默认支持的名称和服务端不一致可以通过本方式或者 parseData 来对应
         * @deprecated 2.8.0 已弃用，请使用 {@link TableOptions.parseData|parseData}
         */
        response?: TableResponseRename;
    }

    /**
     * 设置行选中时的可选属性
     * @since 2.8.0
     */
    interface TableSetRowCheckedOptions {
        /**
         * 选中方式
         * @default 'checkbox''
         */
        type?: "checkbox" | "radio";
        /**
         * 选中行的下标。即数据的所在数组下标（0 开头）。可设置 `all` 表示全选
         * 数组类型 2.9.1+
         */
        index: string | number | Array<string | number> | "all";
        /**
         * 选中状态值
         * - 若传递该属性，则赋值固定值
         * - 若不传递该属性（默认），则 checkbox 将在 true|false 中自动切换值，而 radio 将赋值 true 固定值(2.8.4+)
         *
         * 注意：若 index 指定为多选或全选，checked 应当显式传递固定值
         * @default true
         */
        checked?: boolean;
        /**
         * 是否仅设置样式状态。若为 `true` 则只标注选中样式，不对数据中的 `LAY_CHECKED` 属性赋值。
         * @default false
         * @deprecated 2.8.7 已删除
         */
        selectedStyle?: boolean;
    }

    // ------------以下 TableOn 开头 interface，在调用地方使用----------
    /**
     * table 公共事件参数
     */
    interface TableOnCommon<TOptions, TSetRowOptions> {
        /**
         * 当前行元素的 jQUery 对象
         */
        tr: JQuery;
        /**
         * 对应的表格实例配置项
         * @since 2.8.0
         */
        config: Required<TOptions>;
        /**
         * 当前操作的行数据
         */
        data: Record<string, any>;
        /**
         * 当前行缓存数据，包含特定字段
         * @since 2.8.8
         */
        dataCache: Record<string, any>;
        /**
         * 当前行索引
         */
        index: number | string;
        /**
         * 删除当前行
         */
        del(): void;
        /**
         * 更新当前行
         * @param fields 要更新的列字段对象
         * @param related 更新其他包含自定义模板并可能存在关联的列视图(2.7.4)
         */
        update(
            fields: Record<string, any>,
            related?: boolean | ((field: string, index: string | number) => void),
        ): void;
        /**
         * 设置行选中状态
         */
        setRowChecked(opts: TSetRowOptions): void;
    }
    /**
     * 点击table中checkbox后回调参数的类型
     */
    interface TableOnCheckbox<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions>
        extends TableOnCommon<TOptions, TSetRowOptions>
    {
        /**
         * 当前选中状态
         */
        checked: true;
        /**
         * 若触发的是全选，则为：all；若触发的是单选，则为：one
         */
        type: "all" | "one";
        /**
         * 获取当前列的配置信息
         * @since 2.8.3
         */
        getCol(): TableColumnOptions;
    }

    /**
     * Table 单选事件
     */
    interface TableOnRadio<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions>
        extends TableOnCommon<TOptions, TSetRowOptions>
    {
        /**
         * 当前选中状态
         */
        checked: true;
        /**
         * 获取当前列的配置信息
         * @since 2.8.3
         */
        getCol(): TableColumnOptions;
    }

    /**
     * 点击尾部分页栏自定义模板后回调参数的类型
     * @since 2.7.0
     */
    interface TableOnPagebar<TOptions = TableOptions> {
        config: TOptions;
        /**
         * lay-event 属性值
         */
        event: string;
    }

    /**
     * 点击table上边工具栏后回调参数的类型
     */
    interface TableOnToolbar<TOptions = TableOptions> {
        config: TOptions;
        /**
         * lay-event 属性值
         */
        event: string;
    }

    /**
     * 点击table中工具列后回调参数的类型
     */
    interface TableOnTool<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions>
        extends TableOnCommon<TOptions, TSetRowOptions>
    {
        /**
         * lay-event 属性值
         */
        event: string;
        /**
         * 获取当前列的配置信息
         * @since 2.8.3
         */
        getCol(): TableColumnOptions;
    }

    /**
     * 双击table中工具列后回调参数的类型
     * @since 2.7.0
     */
    interface TableOnToolDouble<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions>
        extends TableOnCommon<TOptions, TSetRowOptions>
    {
        /**
         * lay-event 属性值
         */
        event: string;
        /**
         * 获取当前列的配置信息
         * @since 2.8.3
         */
        getCol(): TableColumnOptions;
    }

    /**
     * 点击table中行后回调参数的类型
     */
    interface TableOnRow<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions>
        extends TableOnCommon<TOptions, TSetRowOptions>
    {
        /**
         * jQuery 事件对象
         */
        e: JQuery.Event;
    }

    /**
     * 双击table中行后回调参数的类型
     */
    interface TableOnRowDouble<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions>
        extends TableOnCommon<TOptions, TSetRowOptions>
    {
        /**
         * jQuery 事件对象
         */
        e: JQuery.Event;
    }

    /**
     * 点击table中单元格编辑后回调参数的类型
     */
    interface TableOnEdit<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions>
        extends TableOnCommon<TOptions, TSetRowOptions>
    {
        /**
         * 字段名
         */
        field: string;
        /**
         * 当前单元格元素的 jQuery 对象
         */
        td: JQuery;
        /**
         * 当前单元格的值
         */
        value: string;
        /**
         * 字段修改前的旧值
         * @since 2.8.0
         */
        oldValue: string;
        /**
         * 重新编辑
         * @since 2.8.0
         */
        reedit(): void;
        /**
         * 获取当前列表头配置信息
         * @since 2.8.0
         */
        getCol(): TableColumnOptions;
    }

    /**
     * 点击table中列标题排序后回调参数的类型
     */
    interface TableOnSort {
        /**
         * 当前排序的字段名
         */
        field: string;
        /**
         * 当前排序类型：desc（降序）、asc（升序）、null（空对象，默认排序）
         */
        type: null | "desc" | "asc";
    }

    /**
     * 列拖拽宽度后的事件
     * @since 2.8.0
     */
    interface TableOnColResized<TOptions = TableOptions> {
        /**
         * 获取当前列属性配置项
         */
        col: TableColumnOptions;
        /**
         * 获取当前表格基础属性配置项
         */
        config: TOptions;
    }

    /**
     * 列筛选（显示或隐藏）后的事件
     * @since 2.8.0
     */
    interface TableOnColToggled<TOptions = TableOptions> {
        col: TableColumnOptions;
        config: TOptions;
    }

    /**
     * 行右键菜单事件，需设置属性 `defaultContextmenu:false` 才生效
     * @since 2.8.0
     */
    interface TableOnRowContextmenu<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions>
        extends TableOnCommon<TOptions, TSetRowOptions>
    {
        /**
         * jQuery 事件对象
         */
        e: JQuery.Event;
    }

    /**
     * 表头自定义元素工具事件，点击表头单元格中带有 lay-event 属性的自定义元素触发
     * @since 2.8.8
     */
    interface TableOnColTool<TOptions = TableOptions> {
        /**
         * 获取当前列属性配置项
         */
        col: TableColumnOptions;
        /**
         * 获取当前表格基础属性配置项
         */
        config: TOptions;
        /**
         * 获得自定义元素对应的 lay-event 属性值
         */
        event: string;
    }

    type TableFilter = string;
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type TableEventMap<TOptions = TableOptions, TSetRowOptions = TableSetRowCheckedOptions> = {
        toolbar(this: HTMLElement, obj: TableOnToolbar<TOptions>): void;
        sort: (this: HTMLElement, obj: TableOnSort) => void;
        /**
         * @param obj
         * @since 2.8.8
         */
        colTool(this: HTMLElement, obj: TableOnColTool<TOptions>): void;
        /**
         * @param obj
         * @since 2.8.0
         */
        colResized(this: HTMLElement, obj: TableOnColResized<TOptions>): void;
        /**
         * @param obj
         * @since 2.8.0
         */
        colToggled(this: HTMLElement, obj: TableOnColToggled<TOptions>): void;
        row(this: HTMLTableRowElement, obj: TableOnRow<TOptions, TSetRowOptions>): void;
        rowDouble(this: HTMLTableRowElement, obj: TableOnRowDouble<TOptions, TSetRowOptions>): void;
        /**
         * @param obj
         * @since 2.8.0
         */
        rowContextmenu(this: HTMLTableRowElement, obj: TableOnRowContextmenu<TOptions, TSetRowOptions>): void;
        edit(this: HTMLTableCellElement, obj: TableOnEdit<TOptions, TSetRowOptions>): void;
        tool(this: HTMLElement, obj: TableOnTool<TOptions, TSetRowOptions>): void;
        /**
         * @param obj
         * @since 2.7.0
         */
        toolDouble(this: HTMLElement, obj: TableOnToolDouble<TOptions, TSetRowOptions>): void;
        checkbox(this: HTMLInputElement, obj: TableOnCheckbox<TOptions, TSetRowOptions>): void;
        radio(this: HTMLInputElement, obj: TableOnRadio<TOptions, TSetRowOptions>): void;
        /**
         * @param obj
         * @since 2.7.0
         */
        pagebar(this: HTMLElement, obj: TableOnPagebar<TOptions>): void;
    };

    interface TablecheckStatusReturn {
        /**
         * 选中行的数据
         */
        data: Array<any>;
        /**
         * 是否全选
         */
        isAll: boolean;
        /**
         * 选中的原始缓存数据，包含内部特定字段
         * @since 2.9.17
         */
        dataCache: Array<any>;
    }

    /**
     * 表格
     * @see https://layui.dev/docs/2/table
     */
    interface Table {
        /**
         * 表格索引
         */
        index: number;
        cache: Record<string, any>;
        config: {
            /**
             * 是否选中状态的字段名
             */
            checkName: "LAY_CHECKED";
            /**
             * 初始下标索引名，用于恢复排序
             *
             * 2.8.0之前 为 LAY_TABLE_INDEX
             */
            indexName: "LAY_INDEX";
            /**
             * 初始下标索引名，仅用于内部恢复当前页表格排序
             * @since 2.9.20
             */
            initIndexName: "LAY_INDEX_INIT";
            /**
             * 序号
             */
            numbersName: "LAY_NUM";
            /**
             * 禁用状态的特定字段名
             */
            disabledName: "LAY_DISABLED";
        };
        /**
         * 清除表格数据中的临时 Key
         *
         * 例如 LAY_CHECKED、LAY_TABLE_INDEX 等
         * @internal
         * @param data
         */
        clearCacheKey(data: Record<string, any>): Record<string, any>;
        /**
         * 遍历表头
         * @internal
         * @param id table 渲染时的 id 属性值
         * @param callback 回调
         * @param cols 列配置项，默认为当前表格的 cols 参数值
         */
        eachCols(
            id: string,
            callback: (index: string, colDef: TableColumnOptions) => void,
            cols?: Array<Array<TableColumnOptions>>,
        ): void;
        /**
         * 获取表格当前选中行相关数据
         * @param id table 渲染时的 id 属性值
         * @see https://layui.dev/docs/2/table/#table.checkStatus
         */
        checkStatus(id: string): TablecheckStatusReturn;
        /**
         * 导出 table 中数据到文件
         * @param id table 渲染时的 id 属性值。指定 id 后下载文件名默认为 table 中 title
         * @see https://layui.dev/docs/2/table/#table.exportFile
         */
        exportFile(id: string): void;
        /**
         * 导出 table 中数据到文件
         * @param id table 渲染时的 id 属性值。指定 id 后下载文件名默认为 table 中 title
         * @param data 传入null
         * @param type 文件类型，默认 csv
         * @deprecated 2.8.0 此签名已弃用
         * @see https://layui.dev/docs/2/table/#table.exportFile
         */
        exportFile(id: string, data?: null, type?: "csv" | "xls"): void;
        /**
         * 导出 table 中数据到文件
         * @param id table 渲染时的 id 属性值。指定 id 后下载文件名默认为 table 中 title
         * @param data 传入null
         * @param opts 选项
         * - type 文件类型，默认 csv
         * - title 文件标题
         * @since 2.7.0
         * @see https://layui.dev/docs/2/table/#table.exportFile
         */
        exportFile(id: string, data?: null, opts?: { type?: "csv" | "xls"; title?: string }): void;
        /**
         * 导出自定数据到文件
         * @param colName 数据表头
         * @param data 要导出的自定义数据
         * @param type 文件类型，默认 csv
         * @deprecated 2.8.0 此签名已弃用
         * @see https://layui.dev/docs/2/table/#table.exportFile
         */
        exportFile(colName: Array<string>, data: Array<Array<any>>, type?: "csv" | "xls"): void;
        /**
         * 导出自定数据到文件
         * @param colName 数据表头
         * @param data 要导出的自定义数据
         * @param opts 文件类型，默认 csv
         * - type 文件类型，默认 csv
         * - title 文件标题
         * @since 2.7.0
         * @see https://layui.dev/docs/2/table/#table.exportFile
         */
        exportFile(
            colName: Array<string>,
            data: Array<Array<any>>,
            opts?: { type?: "csv" | "xls"; title?: string },
        ): void;
        /**
         * 获取表格当前页的所有行数据
         *
         * 对应接口返回的原始数据，不包含 table 组件内部的特定字段
         * @param id table 参数中的id
         * @see https://layui.dev/docs/2/table/#table.getData
         */
        getData(id: string): Array<any>;
        /**
         * 静态表格渲染
         *
         * 该方法用于将已输出在页面中的静态表格内容转换为动态 table 组件
         * @param filter `<table>` 元素对应的 `lay-filter` 属性值
         * @param option 基础属性选项
         * @see https://layui.dev/docs/2/table/#table.init
         */
        init(filter: TableFilter, option?: Omit<Partial<TableOptions>, "elem">): object;
        /**
         * 表格事件
         *
         * `table.on('event(filter)', callback);`
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
        on<K extends keyof TableEventMap>(event: `${K}(${TableFilter})`, callback: TableEventMap[K]): void;
        on<K extends keyof TableEventMap>(event: K, callback: TableEventMap[K]): void;
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        on<K extends string>(event: `${K}(${TableFilter})`, callback: AnyFn): void;
        /**
         * 表格重载
         *
         * 对表格的视图和数据在内的全部重载，所有属性均会参与到重载中，对应的表格会有一个直观的刷新效果
         * @param id table 渲染时的 id 属性值
         * @param option 基础属性选项
         * @param deep 是否采用深度重载（即重载时始终携带初始时及上一次重载时的参数），默认 false
         * @see https://layui.dev/docs/2/table/#table.reload
         */
        reload(id: string, option?: Partial<TableOptions>, deep?: boolean): TableRenderReturn;
        /**
         * 仅数据重载
         *
         * 对表格的数据重载，与数据无关的属性不会参与到重载中。因此若只是更新数据，该方法可大幅提升体验
         * @param id table 渲染时的 id 属性值
         * @param option 基础属性选项
         * @param deep 是否采用深度重载（即重载时始终携带初始时及上一次重载时的参数），默认 false
         * @since 2.7.0
         * @see https://layui.dev/docs/2/table/#table.reloadData
         */
        reloadData(id: string, option?: Partial<TableOptions>, deep?: boolean): TableRenderReturn;
        /**
         * 方法配置渲染
         * @param option 基础属性选项
         * @see https://layui.dev/docs/2/table/#render
         */
        render(option: TableOptions): TableRenderReturn;
        /**
         * 用于重新渲染数据，一般在修改 table.cache 后使用
         * @param id table 渲染时的 id 属性值
         * @since 2.8.6
         * @see https://layui.dev/docs/2/table/#table.renderData
         */
        renderData(id: string): void;
        /**
         * 重置表格尺寸结构
         * @param id 如果指定表格唯一 id，则只执行该 id 对应的表格实例
         * @see https://layui.dev/docs/2/table/#table.resize
         */
        resize(id?: string): void;
        /**
         * 设置 table 全局项
         * @param option 基础属性选项
         * @see https://layui.dev/docs/2/table/#set
         */
        set(option?: Partial<TableOptions>): Table;
        /**
         * 设置行选中状态
         * @param id table 渲染时的 id 属性值
         * @param option 设置行选中时的可选属性
         * @since 2.8.0
         * @see https://layui.dev/docs/2/table/#table.setRowChecked
         */
        setRowChecked(id: string, option?: TableSetRowCheckedOptions): void;
        /**
         * 获取指定 id 对应的表格实例配置项
         * @param id table 渲染时的 id 属性值
         * @since 2.8.0
         * @see https://layui.dev/docs/2/table/#table.getOptions
         */
        getOptions(id: string): TableOptions;
        /**
         * 设置列显示或隐藏
         * @param id table 渲染时的 id 属性值
         * @param cols 设置列（表头）显示或隐藏状态
         * @since 2.8.0
         * @see https://layui.dev/docs/2/table/#table.hideCol
         */
        hideCol(
            id: string,
            cols:
                | boolean
                | { field: TableColumnOptions["field"]; hide: boolean }
                | Array<{ field: TableColumnOptions["field"]; hide: boolean }>,
        ): void;
        /**
         * 更新指定行数据
         * @param id table 渲染时的 `id` 属性值
         * @param opts 更新指定行时的可选属性
         * - `index`: 行索引
         * - `data`: 行数据
         * - `related`: 是否更新关联的行数据
         * @since 2.9.6
         * @see https://layui.dev/docs/2/table/#table.updateRow
         */
        updateRow(
            id: string,
            opts: {
                /**
                 * 行索引
                 */
                index: number;
                /**
                 * 行数据
                 */
                data: Record<string, any> | Array<Record<string, any>>;
            },
            /**
             * 是否更新关联的行数据
             */
            related?: boolean | ((field: string, index: number) => boolean),
        ): void;
        /**
         * 返回行节点代码
         * @internal
         * @param id table 渲染时的 `id` 属性值
         * @param data 行数据
         */
        getTrHtml(id: string, data: Array<Record<string, any>>): string;
    }
}
