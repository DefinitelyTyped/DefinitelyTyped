// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Card extends Vue {
  /**
   * 是否显示边框，建议在灰色背景下使用
   * @default true
   */
  'bordered'?: boolean;
  /**
   * 禁用鼠标悬停显示阴影
   * @default false
   */
  'dis-hover'?: boolean;
  /**
   * 卡片阴影，建议在灰色背景下使用
   * @default false
   */
  'shadow'?: boolean;
  /**
   * 卡片内部间距，单位 px
   * @default 16
   */
  'padding'?: number;
  /**
   * 标题，2.12.0 新增
   */
  title?: string;
  /**
   * 标题前的图标，2.12.0 新增
   */
  icon?: string;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义卡片标题，如果是简单文字，可以使用<p>标签包裹
     */
    title: VNode[];
    /**
     * 额外显示的内容，默认位置在右上角
     */
    extra: VNode[];
    /**
     * 卡片主体内容
     */
    '': VNode[];
  };
}