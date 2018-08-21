// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Progress extends Vue {
  /**
   * 百分比
   * @default 0
   */
  percent?: number;
  /**
   * 状态，可选值为normal、active、wrong、success
   * @default normal
   */
  status?: 'normal'|'active'|'wrong'|'success';
  /**
   * 进度条的线宽，单位 px
   * @default 10
   */
  'stroke-width'?: number;
  /**
   * 隐藏数值或状态图标
   * @default false
   */
  'hide-info'?: boolean;
  /**
   * 是否在垂直方向显示
   * @default false
   */
  vertical?: boolean;
  /**
   * 已完成的分段百分比
   * @default 0
   */
  'success-percent'?: number;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义显示状态内容
     */
    '': VNode[];
  };
}
