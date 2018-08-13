// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Carousel extends Vue {
  /**
   * 幻灯片的索引，从 0 开始，可以使用 v-model 双向绑定数据
   * @default 0
   */
  value?: number;
  /**
   * 走马灯的高度，可填 auto 或具体高度数值，单位 px
   * @default auto
   */
  height?: string | number;
  /**
   * 是否开启循环
   * @default false
   */
  loop?: boolean;
  /**
   * 是否自动切换
   */
  autoplay?: boolean;
  /**
   * 自动切换的时间间隔，单位为毫秒
   * @default 2000
   */
  'autoplay-speed'?: number;
  /**
   * 指示器的位置，可选值为 inside （内部），outside（外部），none（不显示）
   * @default inside
   */
  dots?: 'inside' | 'outside' | 'none';
  /**
   * 是否显示圆形指示器
   * @default false
   */
  'radius-dot'?: boolean;
  /**
   * 指示器的触发方式，可选值为 click（点击），hover（悬停）
   * @default click
   */
  trigger?: 'click' | 'hover';
  /**
   * 切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示）
   * @default hover
   */
  arrow?: 'hover' | 'always' | 'never';
  /**
   * 动画效果
   * @default ease
   */
  easing?: string;
  /**
   * 幻灯片切换时触发，目前激活的幻灯片的索引，原幻灯片的索引
   */
  $emit(eventName: 'on-change', oldValue: number, value: number): this;
}