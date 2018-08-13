// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Tag extends Vue {
  /**
   * 标签是否可以关闭
   * @default false
   */
  closable?: boolean
  /**
   * 标签是否可以选择
   * @default false
   */
  checkable?: boolean;
  /**
   * 标签的选中状态
   * @default true
   */
  checked?: boolean;
  /**
   * 标签的样式类型，可选值为border、dot或不填
   */
  type?: '' | 'border' | 'dot';
  /**
   * 标签颜色，预设颜色值为
   * default、primary、success、warning、error、blue、green、
   * red、yellow、pink、magenta、volcano、orange、gold、
   * lime、cyan、geekblue、purple
   * 你也可以自定义颜色值。
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'blue' | 'green' | 'red' | 'yellow' | 'pink' | 'magenta' | 'volcano' | 'orange' | 'gold' | 'lime' | 'cyan' | 'geekblue' | 'purple';
  /**
   * 当前标签的名称，使用 v-for，并支持关闭时，会比较有用
   */
  name?: string | number;
  /**
   * 是否在出现和消失时使用渐变的动画，动画时长可能会引起占位的闪烁
   * @default true
   */
  fade?: boolean;
  /**
   * 关闭时触发
   */
  $emit(eventName: 'on-close', event: object, name: string): this;
}