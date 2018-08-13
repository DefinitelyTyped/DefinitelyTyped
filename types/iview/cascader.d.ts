// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Cascader extends Vue {
  /**
   * 可选项的数据源，格式参照示例说明
   * @default []
   */
  data?: object[];
  /**
   * 当前已选项的数据，格式参照示例说明
   * @default []
   */
  value?: object[];
  /**
   * 选择后展示的函数，用于自定义显示格式
   * @default label => label.join(' / ')
   */
  'render-format'?: (label?: string[]) => string
  /**
   * 是否禁用选择器
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否支持清除
   * @default true
   */
  clearable?: boolean;
  /**
   * 输入框占位符
   * @default 请选择
   */
  placeholder?: string;
  /**
   * 次级菜单展开方式，可选值为 click 或 hover
   * @default click
   */
  trigger?: 'click' | 'hover';
  /**
   * 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的示例
   * @default false
   */
  'change-on-select'?: boolean;
  /**
   * 输入框大小，可选值为large和small或者不填
   */
  size?: '' | 'large' | 'small';
  /**
   * 动态获取数据，数据源需标识 loading
   */
  'load-data'?: () => void;
  /**
   * 是否支持搜索
   * @default false
   */
  filterable?: boolean;
  /**
   * 当搜索列表为空时显示的内容
   * @default 无匹配数据
   */
  'not-found-text'?: string;
  /**
   * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，
   * 建议添加此属性，它将不受父级样式影响，从而达到更好的效果
   * @default false
   */
  transfer?: boolean;
  /**
   * 给表单元素设置 id，详见 Form 用法。
   */
  'element-id'?: string;
  /**
   * 选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据	
   */
  $emit(eventName: 'on-change', value: object, selectedData: object[]): this;
  /**
   * 展开和关闭弹窗时触发
   */
  $emit(eventName: 'on-visible-change', status: boolean): this;
}