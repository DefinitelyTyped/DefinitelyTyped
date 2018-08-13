// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Circle extends Vue {
  /**
   * 百分比
   * @default 0
   */
  percent?: number;
  /**
   * 图表的宽度和高度，单位 px
   * @default 120
   */
  size?: number;
  /**
   * 进度环顶端的形状，可选值为square（方）和round（圆）
   * @default round
   */
  'stroke-linecap'?: 'square' | 'round';
  /**
   * 进度环的线宽，单位 px
   * @default 6
   */
  'stroke-width'?: number;
  /**
   * 进度环的颜色
   * @default #2db7f5
   */
  'stroke-color'?: string
  /**
   * 进度环背景的线宽，单位 px
   * @default 5
   */
  'trail-width'?: number;
  /**
   * 进度环背景的颜色
   * @default #eaeef2
   */
  'trail-color'?: string;
  /**
   * 是否显示为仪表盘
   * @default false
   */
  dashboard?: boolean;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义显示中间内容，内容默认垂直居中
     */
    '': VNode[];
  };
}