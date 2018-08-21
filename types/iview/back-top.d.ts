// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface BackTop extends Vue {
  /**
   * 页面滚动高度达到该值时才显示BackTop组件
   * @default 400
   */
  height?: number;
  /**
   * 组件距离底部的距离
   * @default 30
   */
  bottom?: number;
  /**
   * 组件距离右部的距离
   * @default 30
   */
  right?: number;
  /**
   * 滚动动画持续时间，单位 毫秒
   * @default 1000
   */
  duration?: number;
  /**
   * 点击按钮时触发
   */
  $emit(eventName: 'on-click'): this;
}
