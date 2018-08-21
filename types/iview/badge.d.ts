// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Badge extends Vue {
  /**
   * 显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏
   */
  count?: number | string;
  /**
   * 展示封顶的数字值
   * @default 99
   */
  'overflow-count'?: number | string;
  /**
   * 不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0
   * @default false
   */
  dot?: boolean
  /**
   * 自定义的class名称，dot 模式下无效
   */
  'class-name'?: string;
  /**
   * 使用预设的颜色，可选值为 success、primary、normal、error、warning、info
   */
  type?: 'success' | 'primary' | 'normal' | 'error' | 'warning' | 'info';
  /**
   * 当数值为 0 时，是否展示 Badge
   * @default false
   */
  'show-zero'?: boolean;
  /**
   * 设置 Badge 为状态点，可选值为 success、processing、default、error、warning
   */
  status?: 'success' | 'processing' | 'default' | 'error' | 'warning';
  /**
   * 自定义内容，如果设置了 status，则为状态点的文本
   */
  text?: string;
  /**
   * 设置状态点的位置偏移，格式为 [x, y]
   */
  offset?: number[];
}