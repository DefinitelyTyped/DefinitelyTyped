// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Rate extends Vue {
  /**
   * star总数
   * @default 5
   */
  count?: number;
  /**
   * 当前 star 数，可以使用 v-model 双向绑定数据
   * @default 0
   */
  value?: number;
  /**
   * 是否允许半选
   * @default false
   */
  'allow-half'?: boolean;
  /**
   * 是否只读，无法进行交互
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否显示提示文字
   * @default false
   */
  'show-text'?: boolean;
  /**
   * 是否可以取消选择
   * @default false
   */
  clearable?: boolean;
  /**
   * 自定义字符
   */
  character?: string;
  /**
   * 使用图标
   */
  icon?: string;
  /**
   * 使用自定义图标
   */
  'custom-icon'?: string;
  /**
   * 评分改变时触发
   */
  $emit(eventName: 'on-change', value: number): this;
}