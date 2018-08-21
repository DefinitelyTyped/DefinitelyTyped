// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Scroll extends Vue {
  /**
   * 滚动区域的高度，单位像素
   * @default 300
   */
  height?: string | number;
  /**
   * 加载中的文案
   * @default 加载中
   */
  'loading-text'?: string;
  /**
   * 滚动至顶部时触发，需返回Promise
   */
  'on-reach-top'?: () => void;
  /**
   * 滚动至底部时触发，需返回Promise
   */
  'on-reach-bottom'?: () => void;
  /**
   * 滚动至顶部或底部时触发，需返回Promise
   */
  'on-reach-edge'?: () => void;
  /**
   * 从边缘到触发回调的距离。如果是负的，回调将在到达边缘之前触发。值最好在 24 以下。
   * @default [20, 20]
   */
  'distance-to-edge'?: number | number[];
}