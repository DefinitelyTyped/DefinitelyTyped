interface AvueCrudColumn<T = any> extends AvueFormColumn<T> {
    /** 是否搜索 */
    search?: boolean;
    /** 搜索表单的默认值 */
    searchValue?: string | number;
    /** 搜索框辅助文字 */
    searchPlaceholder?: string;
    /** 弹窗编辑文字提示 */
    searchTip?: string;
    /** 搜索框辅助文字提示展示方向 */
    searchTipPlacement?: string;
    /** 搜索框栅列 */
    searchSpan?: number;
    /** 搜索框大小 */
    searchSize?: string;
    /** 搜索字段位置排序(序号越大越靠前) */
    searchOrder?: number;
    /** 搜索框的间距 */
    searchGutter?: number;
    /** 范围搜索 */
    searchRange?: boolean;
    /** 搜索框类型 */
    searchType?: string;
    /** 搜索框的标题宽度 */
    searchLabelWidth?: number;
    /** 搜索框的清除按钮 */
    searchClearable?: boolean;
    /** 搜索表单的是否多选 */
    searchMultiple?: boolean;
    /** 多选时是否将选中值按文字的形式展示 */
    searchTags?: boolean;
    /** 是否可以输入搜索。 */
    searchFilterable?: boolean;
    /** 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回true就会显示。 */
    searchFilterMethod?: (value: any, row: T, column: Array<AvueCrudColumn<T>>) => boolean;
    /** 表单新增时是否禁止 */
    addDisabled?: boolean;
    /** 表单新增时是否可见 */
    addDisplay?: boolean;
    /** 表单新增时是否为查看模式 */
    addDetail?: boolean;
    /** 列的对其方式 */
    align?: string;
    /** 开启html转义 */
    html?: boolean;
    /** 开启行编辑模式 */
    cell?: boolean;
    /** 表单编辑时是否禁止 */
    editDisabled?: boolean;
    /** 表单编辑时是否可见 */
    editDisplay?: boolean;
    /** 表单编辑时是否为查看模式 */
    editDetail?: boolean;
    /** viewDisplay */
    viewDisplay?: boolean;
    /** 是否在动态搜索条件里面显示 */
    filter?: boolean;
    /** 数据过滤的选项是否多选 */
    filterMultiple?: boolean;
    /** 传入true开启默认数据过滤的选项，也可以传入自定义数组格式，数组中的元素需要有text和value属性 */
    filters?: boolean | [{ text: string; value: string | number }];
    /** 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回true就会显示 */
    filterMethod?: (value: any, row: T, column: Array<AvueCrudColumn<T>>) => boolean;
    /** 冻结列 */
    fixed?: boolean;
    /** 内容格式化 */
    formatter?: (row: T, value: any, label: string, column: Array<AvueCrudColumn<T>>) => string;
    /** 是否加入动态现隐列 */
    showColumn?: boolean;
    /** 开启排序 */
    sortable?: boolean;
    /** 列自定义 */
    slot?: boolean;
    /** 表单自定义 */
    formslot?: boolean;
    /** 表单标题自定义 */
    labelslot?: boolean;
    /** 表单错误自定义 */
    errorslot?: boolean;
    /** 表头自定义 */
    headerslot?: boolean;
    /** 表格搜索选项的自定义 */
    searchslot?: boolean;
    /** 组件下拉自定义 */
    typeslot?: boolean;
    /** 列宽度 */
    width?: number;
    /** 列最小宽度 */
    minWidth?: number;
    /** 隐藏列 */
    hide?: boolean;
    /** 文字超出隐藏 */
    overHidden?: boolean;
    /** 表格打开表单的时候是否重新拉取字典 */
    dicFlag?: boolean;
    [x: string]: any;
}

interface AvueCrudGroup<T = any> {
    icon?: string;
    label?: string;
    collapse?: boolean;
    arrow?: boolean;
    prop?: string;
    column?: Array<AvueCrudColumn<T>>;
}

interface AvueCrudOption<T = any> extends AvueFormOption<T> {
    /** 表格头部表格 */
    title?: string;
    /** 添加按钮 */
    addBtn?: boolean;
    /** 新增窗口文案 */
    addTitle?: string;
    /** 表格行编辑时添加按钮 */
    addRowBtn?: boolean;
    /** 表格列齐方式 */
    align?: string;
    /** 表格边框 */
    border?: boolean;
    /** 表格行编辑操作按钮 */
    cellBtn?: boolean;
    /** 表格以卡片分层模式显示，搜索部分和主体部分分层展示 */
    card?: boolean;
    /** 日期组件按钮 */
    dateBtn?: boolean;
    /** 行内删除按钮 */
    delBtn?: boolean;
    /** 表格的排序字段{prop:'date',order:'descending'}prop默认排序字段，order排序方式 */
    defaultSort?: object;
    /** 是否默认展开所有行，"expand"为true的时候有效 */
    defaultExpandAll?: boolean;
    /** 可以通过该属性设置目前的展开行，需要设置rowKey属性才能使用，该属性为展开行的keys数组。 */
    expandRowKeys?: Array<string | number>;
    /** 行内编辑按钮 */
    editBtn?: boolean;
    /** 编辑窗口文案 */
    editTitle?: string;
    /** 空数据时显示的文本内容，也可以通过slot="empty"设置 */
    emptyText?: string;
    /** 展开折叠行 */
    expand?: boolean;
    /** 展开折叠行宽度 */
    expandWidth?: number;
    /** 展开列是否行冻结 */
    expandFixed?: boolean;
    /** 导出Excel按钮 */
    excelBtn?: boolean;
    /** 自定义过滤表格列按钮 */
    filterBtn?: boolean;
    /** 是列的宽度是否自撑开属性 */
    fit?: boolean;
    /** 表格高度默认值为auto自动高度配合calcHeight属性使用 */
    height?: number | string;
    /** 表格高度默认值为auto自动高度配合calcHeight属性使用 */
    calcHeight?: number | string;
    /** 表格头部中间菜单显隐 */
    header?: boolean;
    /** 是否显示表格序号（根据分页会自动计算，比如每页10行，到了第二页就会从11开始记数） */
    index?: boolean;
    /** 序号列标题名称 */
    indexLabel?: string;
    /** 序号列宽度 */
    indexWidth?: number;
    /** 序号列是否冻结 */
    indexFixed?: boolean;
    /** 行数据的Key的主键，用于其他相关操作 */
    rowKey?: string;
    /** 只负责样式控制表格如果选择一半，不会出现半选 */
    indeterminate?: boolean;
    /** 表格的最大高度 */
    maxHeight?: number | string;
    /** 是否显示操作菜单栏 */
    menu?: boolean;
    /** 表格右侧行操作按钮的排列方式 */
    menuPosition?: string;
    /** 操作菜单栏的宽度 */
    menuWidth?: number;
    /** 操作菜单的按钮样式 */
    menuType?: string;
    /** 菜单按钮的文字信息 */
    menuBtnTitle?: string;
    /** 操作列的文字 */
    menuTitle?: string;
    /** 操作列是否冻结 */
    menuFixed?: boolean;
    /** 表格打印导出按钮 */
    printBtn?: boolean;
    /** 表格行数据复制按钮 */
    copyBtn?: boolean;
    /** 刷新按钮 */
    refreshBtn?: boolean;
    /** 保存按钮 */
    saveBtn?: boolean;
    /** 更新按钮 */
    updateBtn?: boolean;
    /** 取消按钮 */
    cancelBtn?: boolean;
    /** 表格勾选列 */
    selection?: boolean;
    /** 表格勾选列的宽度 */
    selectionWidth?: number;
    /** 表格勾选列 */
    selectionFixed?: boolean;
    /** 搜索显隐按钮 */
    searchBtn?: boolean;
    /** 表格右侧操作列显隐的按钮 */
    columnBtn?: boolean;
    /** selection为true 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 */
    selectable?: (row: T) => boolean;
    /** 仅对 selection为true 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 rowKey） */
    reserveSelection?: boolean;
    /** 清空选中按钮（当selection为true起作用） */
    selectClearBtn?: boolean;
    /** 是否显示表格的表头 */
    showHeader?: boolean;
    /** 是否在表尾显示合计行 */
    showSummary?: boolean;
    /** 表格合计需要配置的字段 */
    sumColumnList?: string[];
    /** 表格条纹 */
    stripe?: boolean;
    /** 弹出框更新按钮标题 */
    updateBtnTitle?: string;
    /** 查看按钮 */
    viewBtn?: boolean;
    /** 查看窗口文案 */
    viewTitle?: string;
    /** 新增按钮文案 */
    addBtnText?: string;
    /** 编辑按钮文案 */
    editBtnText?: string;
    /** 删除按钮文案 */
    delBtnText?: string;
    /** 查看按钮文案 */
    viewBtnText?: string;
    /** 搜索按钮文案 */
    searchBtnText?: string;
    /** 清空按钮文案 */
    emptyBtnText?: string;
    /** 取消按钮文案 */
    cancelBtnText?: string;
    /** 打印按钮文案 */
    printBtnText?: string;
    /** 导出按钮文案 */
    excelBtnText?: string;
    /** 修改按钮文案 */
    updateBtnText?: string;
    /** 保存按钮文案 */
    saveBtnText?: string;
    /** 是否为全屏Dialog */
    dialogFullscreen?: boolean;
    /** dialogCustomClass */
    dialogCustomClass?: string;
    /** 是否可以通过按下ESC关闭Dialog */
    dialogEscape?: boolean;
    /** 是否可以通过点击modal关闭Dialog */
    dialogClickModal?: boolean;
    /** 是否显示关闭按钮 */
    dialogCloseBtn?: boolean;
    /** 是否需要遮罩层 */
    dialogModal?: boolean;
    /** 弹出框按钮的位置 */
    dialogMenuPosition?: string;
    /** 弹出表单的弹窗具体顶部的距离 */
    dialogTop?: string | number;
    /** 弹出表单的类型 */
    dialogType?: string;
    /** Drawer 打开的方向 */
    dialogDirection?: string;
    /** 弹出表单的弹窗宽度 */
    dialogWidth?: string | number;
    /** 弹出表单的弹窗高度 */
    dialogHeight?: string | number;
    /** 首次加载是否显示搜索 */
    searchShow?: boolean;
    /** 搜索栏目折叠显隐按钮 */
    searchShowBtn?: boolean;
    /** 首次加载是否显示搜索 */
    searchEnter?: boolean;
    /** 是否展示半收缩按钮 */
    searchIcon?: boolean;
    /** 展示半收缩按钮的触发条件个数 */
    searchIndex?: number;
    /** 搜索框整体布局大小 */
    searchSize?: string;
    /** 搜索操作按钮的位置 */
    searchMenuPosition?: string;
    /** 搜索操作按钮栅格占据的列数 */
    searchMenuSpan?: number;
    /** 搜索项栅格占据的列数 */
    searchSpan?: number;
    /** 表格树是否懒加载 */
    lazy?: boolean;
    /** 拖拽排序 */
    sortable?: boolean;
    /** 行拖拽排序 */
    rowSort?: boolean;
    /** 列拖拽排序 */
    columnSort?: boolean;
    /** 表格列配置属性 */
    column?: Array<AvueCrudColumn<T>>;
    /** 分组表单,放入正常的column配置就行 */
    group?: Array<AvueCrudGroup<T>>;
}

interface PageOption {
    /** 总条数,如果为0的话不显示分页 */
    total?: number;
    /** 当前页数 */
    currentPage?: number;
    /** 是否为分页按钮添加背景色 */
    background?: boolean;
    /** 每页显示条目个数，支持.sync修饰符 */
    pageSize?: number;
    /** 分页的数组分段 */
    pageSizes?: number;
    /** 页码按钮的数量，当总页数超过该值时会折叠 */
    pagerCount?: number;
}
type CellEvent<T> = (row: any, column: TableColumnCtx<T>, cell: any, event: Event) => void;
type RowEvent<T> = (row: any, column: TableColumnCtx<T>, event: Event) => void;
type HeaderEvent<T> = (column: TableColumnCtx<T>, event: Event) => void;
type AvueCrudDefaults = Record<string, AvueCrudColumn>;

interface AvueCrudProps<T = any> {
    /** 表单绑定值 v-model */
    modelValue?: T;
    /** 表格数据 */
    data?: T[];
    /** 表格配置属性 */
    option?: AvueCrudOption<T>;
    /** 表格多个按钮权限控制，采用函数方式可以精确到行控制 */
    permission?: AvueCrudOption<T> | ((key: string, row: T, index: number) => boolean);
    /** 表格搜索的表单的变量 v-model */
    search?: any;
    /** 表格的分页数据 v-model */
    page?: PageOption;
    /** 配置项结构 v-model */
    defaults?: AvueCrudDefaults;
    /** 打开前的回调，会暂停Dialog的打开，done用于关闭Dialog，type为当前窗口的类型 */
    'before-open'?: (done: () => void, type: FormType) => void;
    /** 关闭前的回调，会暂停Dialog的打开，done用于关闭Dialog，type为当前窗口的类型 */
    'before-close'?: (done: () => void, type: FormType) => void;
    /** 单元格的className的回调方法，也可以使用字符串为所有单元格设置一个固定的className */
    'cell-class-name'?: CellCls<T>;
    /** 表头单元格的className的回调方法，也可以使用字符串为所有表头单元格设置一个固定的className */
    'header-cell-class-name'?: CellCls<T>;
    /** 行的className的回调方法，也可以使用字符串为所有行设置一个固定的className */
    'row-class-name'?: ColumnCls<T>;
    /** 合并行或列的计算方法 */
    'span-method'?: SpanMethod<T>;
    /** 自定义的合计计算方法 */
    'summary-method'?: SummaryMethod<T>;
    /** 表格等待框的控制 */
    'table-loading'?: boolean;
    /** 图片上传前的回调，会暂停图片上传，done用于继续图片上传，loading用于中断操作 */
    'upload-before'?: (
        file: UploadRawFile,
        done: (File?: File) => void,
        loading: () => void,
        column: AvueCrudColumn<T>,
    ) => void;
    /** 图片上传后的回调，done用于结束操作，loading用于中断操作 */
    'upload-after'?: (res: any, done: () => void, loading: () => void, column: AvueCrudColumn<T>) => void;
    /** 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除 */
    'upload-delete'?: (file: UploadFile, column: AvueCrudColumn<T>) => boolean | Promise<any> | void;
    /** 查看前的回调 */
    'upload-preview'?: (file: UploadFile, column: AvueCrudColumn<T>, done: () => void) => void;
    /** 上传失败错误回调 */
    'upload-error'?: (error: Error, column: AvueCrudColumn<T>) => void;
    /** 上传超过长度限制回调 */
    'upload-exceed'?: (limit: number, files: File[], fileList: UploadUserFile[], column: AvueCrudColumn<T>) => void;

    /** 新增数据后点击确定触发该事件 */
    onRowSave?: (row: T, done: () => void, loading: () => void) => any;
    /** 编辑数据后确定触发该事件 */
    onRowUpdate?: (row: T, index: number, done: () => void, loading: () => void) => any;
    /** 行数据删除时触发该事件 */
    onRowDel?: (row: T, index: number) => any;
    /** 点击刷新按钮触发该事件 */
    onRefreshChange?: () => any;
    /** 点击搜索后触发该事件 */
    onSearchChange?: (form: any, done: () => void) => any;
    /** 清空搜索回调方法 */
    onSearchReset?: () => void;
    /** dateBtn为true时的选择日期回调方法 */
    onDateChange?: (data: { value: string[] }) => any;
    /** 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息 */
    onTreeLoad?: (row: T, treeNode: any, resolve: (data: T) => void) => any;
    /** 分页页码改变时会触发 */
    onCurrentChange?: (current: number) => any;
    /** 分页条数改变时会触发 */
    onSizeChange?: (size: number) => any;
    /** 当用户手动勾选数据行的Checkbox时触发的事件 */
    onSelect?: (selection: T[], row: T) => any;
    /** 当选择所有项时会触发该事件 */
    onSelectAll?: (selection: T[]) => any;
    /** 当选择项发生变化时会触发该事件 */
    onSelectionChange?: (selection: T[]) => any;
    /** 当单元格hover进入时会触发该事件 */
    onCellMouseEnter?: CellEvent<T>;
    /** 当单元格hover退出时会触发该事件 */
    onCellMouseLeave?: CellEvent<T>;
    /** 当某个单元格被点击时会触发该事件 */
    onCellClick?: CellEvent<T>;
    /** 当某个单元格被双击击时会触发该事件 */
    onCellDblclick?: CellEvent<T>;
    /** 当某一行被点击时会触发该事件 */
    onRowClick?: RowEvent<T>;
    /** 当某一行被鼠标右键点击时会触发该事件 */
    onRowContextMenu?: RowEvent<T>;
    /** 当某一行被双击时会触发该事件 */
    onRowDblclick?: RowEvent<T>;
    /** 当某一列的表头被点击时会触发该事件 */
    onHeaderClick?: HeaderEvent<T>;
    /** 当某一列的表头被鼠标右键点击时触发该事件 */
    onHeaderContextMenu?: HeaderEvent<T>;
    /** 当拖动表头改变了列的宽度的时候会触发该事件 */
    onHeaderDragend?: (newWidth: number, oldWidth: number, column: TableColumnCtx<T>, event: Event) => any;
    /** 当表格的排序条件发生变化的时候会触发该事件 */
    onSortChange?: (args: { column: TableColumnCtx<T>; prop: string; order: 'ascsending' | 'descending' }) => any;
    /** 当表格的筛选条件发生变化的时候会触发该事件 */
    onFilterChange?: (filters: Record<string, any[]>) => any;
    /** 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） */
    onExpandChange?: (row: T, expanded: T[] | boolean) => any;
    /** 更新表单值 */
    'onUpdate:modelValue'?: (row: T) => any;
    /** 更新搜索表单 */
    'onUpdate:search'?: (form: any) => any;
    /** 更新分页数据 */
    'onUpdate:page'?: (page: PageOption) => any;
    /** 更新配置项结构 */
    'onUpdate:defaults'?: (defaluts: AvueCrudDefaults) => any;
}
interface AvueCrudMethods<T = any> {
    /** 打开表单新增窗口 */
    rowAdd: () => void;
    /** 打开表单编辑窗口 */
    rowEdit: (row: T, index?: number) => void;
    /** 打开表单查看窗口 */
    rowView: (row: T, index?: number) => void;
    /** 更新字典 */
    updateDic: (prop: string) => void;
    /** 获取prop的ref对象 */
    getPropRef: (props: string) => void;
    /** 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise */
    validate: (callback?: (valid: boolean, done: () => void, msg: string) => void) => Promise<boolean>;
    /** 对部分表单字段进行校验的方法 */
    validateField: (props: string[]) => void;
    /** 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 */
    resetFields: () => void;
    /** 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果 */
    clearValidate: () => void;
    /** 用于多选表格，清空用户的选择 */
    clearSelection: () => void;
    /** 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） */
    toggleSelection: (rows?: T[], selected?: boolean) => void;
    /** 用于多选表格，切换所有行的选中状态 */
    toggleAllSelection: () => void;
    /** 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开） */
    toggleRowExpansion: (row?: T, expanded?: boolean) => void;
    /** 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态 */
    setCurrentRow: (row?: T) => void;
    /** 用于清空排序条件，数据会恢复成未排序的状态 */
    clearSort: () => void;
    /** 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件 */
    clearFilter: (columnKeys?: string[]) => void;
    /** 对Crud进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法 */
    doLayout: () => void;
    /** 进行重新初始化渲染 */
    refreshTable: () => void;
    /** 手动对 Table 进行排序。参数prop属性指定排序列，order指定排序顺序 */
    sort: (prop: string, order: 'ascsending' | 'descending') => void;

    /** 重新初始化 */
    init: () => void;
    /** 重新初始化字典 */
    dicInit: () => void;
    /** 表单保存调用 */
    rowSave: (row: T) => void;
    /** 表单更新调用 */
    rowUpdate: (row: T) => void;
    /** 行删除 */
    rowDel: (row: T, index?: number) => void;
    /** 打开行编辑 */
    rowCell: (row: T, index?: number) => void;
    /** 打印表格 */
    rowPrint: () => void;
    /** 导出表格 */
    rowExcel: () => void;
    /** 用于多选表格，清空用户的选择 */
    selectClear: () => void;
    /** 清空搜索栏目的值 */
    searchReset: () => void;
}
interface AvueCrudSlots<T = any> {
    // empty: () => VNode[];
    // expand: (arg: { row: T; index: number }) => VNode[];
    // menu: (arg: { row: T; type: string; disabled: boolean; size: string; index: number }) => VNode[];
    // 'menu-form': (arg: { disabled: boolean; size: string; type: FormType }) => VNode[];
    // header: () => VNode[];
    // footer: () => VNode[];
    // page: () => VNode[];
    // 'menu-btn': () => VNode[];
    // 'menu-left': (arg: { size: string }) => VNode[];
    // 'menu-right': (arg: { size: string }) => VNode[];
    // search: (arg: { row: T; search: T; size: string }) => VNode[];
    // 'search-menu': (arg: { row: T; search: T; disabled: boolean; size: string }) => VNode[];
    // [`${string}-search`]: (arg: {
    //     value: any;
    //     column: AvueCrudColumn<T>;
    //     size: string;
    //     disabled: boolean;
    // }) => VNode[];
    // [`${string}-header`]: (arg: { column: AvueCrudColumn<T> }) => VNode[];
    // [`${string}-form`]: (arg: {
    //     value: any;
    //     column: AvueCrudColumn<T>;
    //     label: string;
    //     size: string;
    //     readonly: boolean;
    //     disabled: boolean;
    //     dic: DicItem[];
    // }) => VNode[];
    // [x: string]: (arg: { row: T; index: number; dic: DicItem[]; size: string; label: string }) => VNode[];
    [x: string]: (arg: {
        row?: T;
        type?: FormType | string;
        index?: number;
        dic?: DicItem[];
        disabled?: boolean;
        readonly?: boolean;
        size?: string;
        label?: string;
        search?: T;
        column?: AvueCrudColumn<T>;
    }) => VNode[];
}

declare const AvueCrud: new <T = any>() => {
    $props: AvueCrudProps<T>;
    $slots: AvueCrudSlots<T>;
};

type AvueCrudInstance = InstanceType<typeof AvueCrud> & AvueCrudMethods;
