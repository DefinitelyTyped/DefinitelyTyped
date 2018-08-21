// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Input extends Vue {
  /**
   * 输入框类型，可选值为 text、password、textarea、url、email、date
   * @default text
   */
  type?: 'text' | 'password' | 'textarea' | 'url' | 'email' | 'date';
  /**
   * 绑定的值，可使用 v-model 双向绑定
   * @default 空
   */
  value?: string | number;
  /**
   * 输入框尺寸，可选值为large、small、default或者不设置
   */
  size?: '' | 'large' | 'small' | 'default';
  /**
   * 占位文本
   */
  placeholder?: string;
  /**
   * 是否显示清空按钮
   * @default false
   */
  clearable?: boolean;
  /**
   * 设置输入框为禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * 设置输入框为只读
   * @default false
   */
  readonly?: boolean;
  /**
   * 最大输入长度
   */
  maxlength?: number;
  /**
   * 输入框尾部图标，仅在 text 类型下有效
   */
  icon?: string;
  /**
   * 输入框头部图标
   * @default false
   */
  prefix?: string;
  /**
   * 输入框尾部图标
   * @default false
   */
  suffix?: String;
  /**
   * 是否显示为搜索型输入框
   * @default false
   */
  search?: boolean;
  /**
   * 开启 search 时可用，是否有确认按钮，可设为按钮文字
   * @default false
   */
  'enter-button'?: boolean | string;
  /**
   * 文本域默认行数，仅在 textarea 类型下有效
   * @default 2
   */
  rows?: number;
  /**
   * 自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }
   * @default false
   */
  autosize?: boolean | { minRows?: number, maxRows?: number };
  /**
   * 将用户的输入转换为 number 类型
   * @default false
   */
  number?: boolean;
  /**
   * 自动获取焦点
   * @default false
   */
  autofocus?: boolean;
  /**
   * 原生的自动完成功能，可选值为 off 和 on,off
   */
  autocomplete?: string;
  /**
   * 给表单元素设置 id，详见 Form 用法。
   */
  'element-id'?: string;
  /**
   * 原生的 spellcheck 属性
   * @default false
   */
  spellcheck?: boolean;
  /**
   * 原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效
   * @default soft
   */
  wrap?: 'hard' | 'soft';
  /**
   * 按下回车键时触发
   */
  $emit(eventName: 'on-enter'): this;
  /**
   * 设置 icon 属性后，点击图标时触发
   */
  $emit(eventName: 'on-click'): this;
  /**
   * 数据改变时触发
   */
  $emit(eventName: 'on-change', event: string): this;
  /**
   * 输入框聚焦时触发
   */
  $emit(eventName: 'on-focus'): this;
  /**
   * 输入框失去焦点时触发
   */
  $emit(eventName: 'on-blur'): this;
  /**
   * 原生的 keyup 事件
   */
  $emit(eventName: 'on-keyup', event: KeyboardEvent): this;
  /**
   * 原生的 keydown 事件
   */
  $emit(eventName: 'on-keydown', event: KeyboardEvent): this;
  /**
   * 原生的 keypress 事件
   */
  $emit(eventName: 'on-keypress', event: KeyboardEvent): this;
  /**
   * 开启 search 时可用，点击搜索或按下回车键时触发
   */
  $emit(eventName: 'on-search', value: string): this;
  /**
   * 手动聚焦输入框
   */
  focus(): void;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 前置内容，仅在 text 类型下有效
     */
    prepend: VNode[];
    /**
     * 后置内容，仅在 text 类型下有效
     */
    append: VNode[];
    /**
     * 输入框头部图标
     */
    prefix: VNode[];
    /**
     * 输入框尾部图标
     */
    suffix: VNode[];
  };
}