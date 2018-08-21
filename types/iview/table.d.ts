// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Table extends Vue {
  /**
   * 显示的结构化数据，其中，字段 cellClassName 用于设置任意单元格的样式名称，
   * 因此数据不能使用该字段，详见示例特定样式。
   * @default []
   */
  data?: object[];
  /**
   * 表格列的配置描述，具体项见后文
   * @default []
   */
  columns?: object[];
  /**
   * 是否显示间隔斑马纹
   * @default false
   */
  stripe?: boolean;
  /**
   * 是否显示纵向边框
   * @default false
   */
  border?: boolean;
  /**
   * 是否显示表头
   * @default true
   */
  'show-header'?: boolean;
  /**
   * 表格宽度，单位 px
   * @default 自动
   */
  width?: number | string;
  /**
   * 表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头
   */
  height?: number | string;
  /**
   * 表格是否加载中
   * @default false
   */
  loading?: boolean;
  /**
   * 禁用鼠标悬停时的高亮
   * @default false
   */
  'disabled-hover'?: boolean;
  /**
   * 是否支持高亮选中的行，即单选
   * @default false
   */
  'highlight-row'?: boolean;
  /**
   * 行的 className 的回调方法，传入参数：
   * row：当前行数据
   * index：当前行的索引
   */
  'row-class-name'?: (row?: object, index?: number) => void;
  /**
   * 表格尺寸，可选值为 large、small、default 或者不填
   */
  size?: string;
  /**
   * 数据为空时显示的提示内容
   * @default 暂无数据
   */
  'no-data-text'?: string;
  /**
   * 筛选数据为空时显示的提示内容
   * @default 暂无筛选结果
   */
  'no-filtered-data-text'?: string;
  /**
   * 开启 highlight-row 后有效，当表格的当前行发生变化的时候会触发	
   * currentRow：当前高亮行的数据
   * oldCurrentRow：上一次高亮的数据
   */
  $emit(eventName: 'on-current-change', currentRow: object, oldCurrentRow: object): this;
  /**
   * 在多选模式下有效，选中某一项时触发	
   * selection：已选项数据
   * row：刚选择的项数据
   */
  $emit(eventName: 'on-select', selection: object[], row: object): this;
  /**
   * 在多选模式下有效，取消选中某一项时触发	
   * selection：已选项数据
   * row：取消选择的项数据
   */
  $emit(eventName: 'on-select-cancel', selection: object[], row: object): this;
  /**
   * 在多选模式下有效，点击全选时触发	
   * selection：已选项数据
   */
  $emit(eventName: 'on-select-all', selection: object[]): this;
  /**
   * 在多选模式下有效，只要选中项发生变化时就会触发	
   * selection：已选项数据
   */
  $emit(eventName: 'on-selection-change', selection: object[]): this;
  /**
   * 排序时有效，当点击排序时触发	
   * column：当前列数据
   * key：排序依据的指标
   * order：排序的顺序，值为 asc 或 desc
   */
  $emit(eventName: 'on-sort-change', column?: object, key?: string, order?: 'asc' | 'desc'): this;
  /**
   * 筛选时有效，筛选条件发生变化时触发	当前列数据
   */
  $emit(eventName: 'on-filter-change', value: any): this;
  /**
   * 单击某一行时触发
   * currentRow：当前行的数据
   * index?: 当前行的索引
   */
  $emit(eventName: 'on-row-click', currentRow: object, index: number): this;
  /**
   * 双击某一行时触发	
   * currentRow：当前行的数据
   * index?: 当前行的索引
   */
  $emit(eventName: 'on-row-dblclick', currentRow: object, index: number): this;
  /**
   * 展开或收起某一行时触发	
   * row：当前行的数据
   * status：当前的状态
   */
  $emit(eventName: 'on-expand', row: object, status: string): this;
  /**
   * 导出数据
   */
  exportCsv(params: TableExportCsvParams): void;
  /**
   * 执行改变大小重绘table
   */
  handleResize(): void;
  /**
   * 清除高亮项，仅在开启 highlight-row 时可用
   */
  clearCurrentRow(): void;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 表头
     */
    header: VNode[];
    /**
     * 页脚
     */
    footer: VNode[];
    /**
     * 加载中
     */
    loading: VNode[];
  };
}

export interface TableColumn {
  /**
   * 列类型，可选值为 index、selection、expand、html
   */
  type?: 'index' | 'selection' | 'expand' | 'html';
  /**
   * 列头显示文字
   * @default #
   */
  title?: string;
  /**
   * 对应列内容的字段名
   */
  key?: string;
  /**
   * 列宽
   */
  width?: number;
  /**
   * 最小列宽
   */
  minWidth?: number;
  /**
   * 最大列宽
   */
  maxWidth?: number;
  /**
   * 对齐方式，可选值为 left 左对齐、right 右对齐和 center 居中对齐,默认 left
   * @default left
   */
  align?: 'left' | 'right' | 'center';
  /**
   * 列的样式名称
   */
  className?: string;
  /**
   * 列是否固定在左侧或者右侧，可选值为 left 左侧和 right 右侧
   */
  fixed?: 'left' | 'right';
  /**
   * 开启后，文本将不换行，超出部分显示为省略号
   * @default false
   */
  ellipsis?: boolean;
  /**
   * 开启后，文本将不换行，超出部分显示为省略号，并用 Tooltip 组件显示完整内容
   * @default false
   */
  tooltip?: boolean;
  /**
   * 自定义渲染列，使用 Vue 的 Render 函数。
   * 传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，
   * 分别指当前行数据，当前列数据，当前行索引，详见示例。
   * 学习 Render 函数的内容 从 rc.18 版本开始，我们将不再支持旧的用法。旧的 render 函数已被废弃。
   */
  render?: (h?:
    (
      el?: string | object | Function,
      data?: string | TableRenderCreateElementData | TableRenderCreateElementResult | Array<TableRenderCreateElementResult>,
      vnode?: string | TableRenderCreateElementResult[]
    ) => TableRenderCreateElementResult,
    params?: TableColumnRenderParams
  ) => TableRenderCreateElementResult;
  /**
   * 自定义列头显示内容，传入参数有两个，column 和 index，分别为当前列数据和当前列索引，不支持渲染自定义组件
   */
  renderHeader?: (h?:
    (
      el?: string | object | Function,
      data?: string | TableRenderCreateElementData | TableRenderCreateElementResult | Array<TableRenderCreateElementResult>,
      vnode?: string | TableRenderCreateElementResult[]
    ) => TableRenderCreateElementResult,
    params?: TableColumnRenderHeadParams
  ) => TableRenderCreateElementResult;
  /**
   * 对应列是否可以排序，如果设置为 custom，则代表用户希望远程排序，
   * 需要监听 Table 的 on- sort - change 事件,默认false
   * @default false
   */
  sortable?: boolean;
  /**
   * 自定义排序使用的方法，接收三个参数 a 、 b 和 type，
   * 当设置 sortable?: true 时有效。type 值为 asc 和 desc
   */
  sortMethod?: (a: any, b: any, type: 'asc' | 'desc') => void;
  /**
   * 设置初始化排序。值为 asc 和 desc
   */
  sortType?: 'asc' | 'desc';
  /**
   * 过滤数据的选项，格式为数组，数组中每项包含 label 和 value 属性，使用过滤，必须同时配置filterMethod
   */
  filters?: { label: string, value: string | number | boolean }[];
  /**
   * 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示
   */
  filterMethod?: () => void;
  /**
   * 数据过滤的选项是否多选
   * @default true
   */
  filterMultiple?: boolean;
  /**
   * 在初始化时使用过滤，数组，值为需要过滤的 value 集合
   */
  filteredValue?: (string | number | boolean)[];
  /**
   * 使用远程过滤
   */
  filterRemote?: () => void;
  /**
   * 表头分组
   */
  children?: object[];
}

export interface TableRenderCreateElementData {
  /**
   * 和`v-bind:class`一样的 API
   */
  'class'?: object;
  /**
   * 和`v-bind:style`一样的 API
   */
  style?: object;
  /**
   * 正常的 HTML 特性
   */
  attrs?: object,
  /**
   * 组件 props
   */
  props?: object;
  /**
   * DOM 属性
   */
  domProps?: object;
  /**
   * 事件监听器基于 "on"
   * 所以不再支持如 v-on?:keyup.enter 修饰器
   * 需要手动匹配 keyCode。
   */
  on?: object;
  /**
   * 仅对于组件，用于监听原生事件，而不是组件使用 vm.$emit 触发的事件。
   */
  nativeOn?: object;
  /**
   * 自定义指令. 注意事项：不能对绑定的旧值设值
   * Vue 会为您持续追踨
   */
  directives?: object[];
  /**
   * 如果子组件有定义 slot 的名称
   */
  slot?: string;
  /**
   * 其他特殊顶层属性,myKey
   */
  key?: string;
  /**
   * myRef
   */
  ref?: string
}

export interface TableColumnRenderParams {
  /**
   * 当前行数据
   */
  row?: object;
  /**
   * 当前列数据
   */
  column?: object;
  /**
   * 当前行索引
   */
  index?: number;
}

export interface TableRenderCreateElementResult {
  child?: object;
  children?: Array<any>;
  componentInstance?: object;
  componentOptions?: object;
  context?: object;
  data?: object;
  elm?: object;
  functionalContext?: object;
  isCloned?: boolean;
  isComment?: boolean;
  isOnce?: boolean;
  isRootInsert?: boolean;
  isStatic?: boolean;
  key?: object;
  ns?: object;
  parent?: object;
  raw?: boolean;
  tag?: string;
  text?: object;
}

export interface TableColumnRenderHeadParams {
  /**
   * 当前列数据
   */
  column?: object;
  /**
   * 当前行索引
   */
  index?: number;
}

export interface TableExportCsvParams {
  /**
   * 文件名，默认为 table.csv
   */
  filename?: string;
  /**
   * 是否导出为原始数据，默认为 true
   */
  original?: boolean;
  /**
   * 不显示表头，默认为 false
   */
  noHeader?: boolean;
  /**
   * 自定义导出的列数据
   */
  columns?: any[];
  /**
   * 自定义导出的行数据
   */
  data?: any[];
  /**
   * 添加此函数后，不会下载，而是返回数据
   */
  callback?: () => void;
  /**
   * 数据分隔符，默认是逗号(,)
 * @default ,
   */
  separator?: string;
  /**
   * 每项数据是否加引号
   * @default false
   */
  quoted?: boolean;
}




