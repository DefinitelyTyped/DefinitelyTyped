// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface GridRow extends Vue {
  /**
   * 栅格间距，单位 px，左右平分
   * @default 0
   */
  gutter?: number;
  /**
   * 布局模式，可选值为flex或不选，在现代浏览器下有效
   */
  type?: string;
  /**
   * lex 布局下的垂直对齐方式，可选值为top、middle、bottom
   */
  align?: 'top'|'middle'|'bottom';
  /**
   * flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between
   */
  justify?: 'start'|'end'|'center'|'space-around'|'space-between';
  /**
   * 自定义的class名称
   */
  'class-name'?: string;
}

export interface GridCol extends Vue {
  /**
   * 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none
   */
  span?: number | string;
  /**
   * 栅格的顺序，在flex布局模式下有效
   */
  order?: number | string;
  /**
   * 栅格左侧的间隔格数，间隔内不可以有栅格
   */
  offset?: number | string;
  /**
   * 栅格向右移动格数
   */
  push?: number | string;
  /**
   * 栅格向左移动格数
   */
  pull?: number | string;
  /**
   * 自定义的class名称
   */
  'class-name'?: string;
  /**
   * <768px 响应式栅格，可为栅格数或一个包含其他属性的对象
   */
  xs?: number | object;
  /**
   * ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象
   */
  sm?: number | object;
  /**
   * ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象
   */
  md?: number | object;
  /**
   * ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象
   */
  lg?: number | object;
}