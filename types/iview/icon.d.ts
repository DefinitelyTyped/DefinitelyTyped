// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Icon extends Vue {
  /**
   * 图标的名称
   */
  type?: string;
  /**
   * 图标的大小，单位是 px
   */
  size?: number | string;
  /**
   * 图标的颜色
   */
  color?: string;
}