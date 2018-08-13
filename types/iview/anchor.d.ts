// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Anchor extends Vue {
  /**
   * 固定模式
   * @default true
   */
  affix?: boolean;
  /**
   * 距离窗口顶部达到指定偏移量后触发
   * @default 0
   */
  'offset-top'?: number;
  /**
   * 距离窗口底部达到指定偏移量后触发
   */
  'offset-bottom'?: number;
  /**
   * 锚点区域边界，单位：px
   * @default 5
   */
  bounds?: number;
  /**
   * 点击滚动的额外距离
   * @default 0
   */
  'scroll-offset'?: number;
  /**
   * 指定滚动的容器
   */
  container?: string | HTMLElement;
  /**
   * 是否显示小圆点
   * @default false
   */
  'show-ink'?: boolean;
  /**
   * 点击锚点时触发，返回链接
   */
  $emit(eventName: 'on-select', href: string): this;
  /**
   * 链接改变时触发，返回新链接和旧链接	
   */
  $emit(eventName: 'on-change', []): this;
}

export interface AnchorLink extends Vue {
  /**
   * 锚点链接
   * @default 
   */
  href?: string;
  /**
   * 文字内容
   * @default 
   */
  title?: string;
  /**
   * 点击滚动的额外距离
   * @default 0
   */
  'scroll-offset'?: number;
}