// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Layout extends Vue {
  /**
   * 触发响应式布局的断点，可选值为xs,sm,md,lg,xl或xxl，若不设此属性则不会触发响应式布局。
   * {
   *    xs?: '480px',
   *    sm?: '768px',
   *    md?: '992px',
   *    lg?: '1200px',
   *    xl?: '1600px'
   * }
   */
  breakpoint?: string;
  /**
   * 	侧边栏是否收起，可使用 v-model 双向绑定数据。
   * @default false
   */
  value?: boolean;
  /**
   * 宽度
   * @default 200
   */
  width?: number;
  /**
   * 是否可收起，设为false后，默认触发器会隐藏，且响应式布局不会触发
   * @default false
   */
  collapsible?: boolean;
  /**
   * 收缩宽度，设置为 0 会出现特殊 trigger
   * @default 64
   */
  'collapsed-width'?: number;
  /**
   * 隐藏默认触发器
   * @default false
   */
  'hide-trigger'?: boolean;
  /**
   * 是否默认收起，设置了collapsible后设置此属性侧边栏仍会收起。
   * @default false
   */
  'default-collapsed'?: boolean;
  /**
   * 改变侧边栏触发器箭头方向，和改变侧边栏收起方向，当Sider在右边时可以使用。
   * @default false
   */
  'reverse-arrow'?: boolean;
  /**
   * 展开-收起时的回调true/false
   */
  $emit(eventName: 'on-collapse', []): this;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义触发器
     * @default 
     */
    trigger: VNode[];
  };
  /**
   * methods, 改变Sider展开-收起状态。
   */
  toggleCollapse(): void;
}