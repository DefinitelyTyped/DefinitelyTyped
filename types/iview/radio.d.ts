// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Radio extends Vue {
  /**
   * 只在单独使用时有效。可以使用 v-model 双向绑定数据
   * @default false
   */
  value?: boolean;
  /**
   * 只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目
   */
  label?: string | number;
  /**
   * 是否禁用当前项
   * @default false
   */
  disabled?: boolean;
  /**
   * 单选框的尺寸，可选值为 large、small、default 或者不设置
   */
  size?: '' | 'large' | 'small' | 'default';
  /**
   * 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
   * @default true
   */
  'true-value'?: string | number | boolean;
  /**
   * 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
   * @default false
   */
  'false-value'?: string | number | boolean;
  /**
   * 在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发
   */
  $emit(eventName: 'on-change', arg: string | number | boolean): this;
}

export interface RadioGroup extends Vue {
  /**
   * 指定当前选中的项目数据。可以使用 v-model 双向绑定数据
   */
  value?: string | number;
  /**
   * 可选值为 button 或不填，为 button 时使用按钮样式
   */
  type?: string;
  /**
   * 尺寸，可选值为large、small、default或者不设置
   */
  size?: '' | 'large' | 'small' | 'default';
  /**
   * 是否垂直排列，按钮样式下无效
   * @default false
   */
  vertical?: boolean;
  /**
   * 在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发
   */
  $emit(eventName: 'on-change', ...args: Array<string | number | boolean>): this;
}
