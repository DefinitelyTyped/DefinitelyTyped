// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Button extends Vue {
  /**
   * 按钮类型，可选值为 default、primary、dashed、text、info、success、warning、error或者不设置
   * @default default
   */
  type?: '' | 'default' | 'primary' | 'dashed' | 'text' | 'info' | 'success' | 'warning' | 'error';
  /**
   * 幽灵属性，使按钮背景透明
   * @default false
   */
  ghost?: boolean;
  /**
   * 按钮大小，可选值为large、small、default或者不设置
   * @default default
   */
  size?: '' | 'large' | 'small' | 'default';
  /**
   * 按钮形状，可选值为circle或者不设置
   */
  shape?: '' | 'circle';
  /**
   * 开启后，按钮的长度为 100%
   * @default false
   */
  long?: boolean;
  /**
   * 设置button原生的type，可选值为button、submit、reset
   * @default button
   */
  'html-type'?: 'button' | 'submit' | 'reset';
  /**
   * 设置按钮为禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * 设置按钮为加载中状态
   * @default false
   */
  loading?: boolean;
  /**
   * 设置按钮的图标类型
   */
  icon?: string;
  /**
   * 设置按钮的自定义图标
   */
  'custom-icon'?: string;
  /**
   * 跳转的链接，支持 vue-router 对象
   */
  to?: string | object;
  /**
   * 路由跳转时，开启 replace 将不会向 history 添加新记录
   * @default false
   */
  replace?: boolean;
  /**
   * 相当于 a 链接的 target 属性
   * @default _self
   */
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export interface ButtonGroup extends Vue {
  /**
   * 按钮组合大小，可选值为large、small、default或者不设置
   * @default default
   */
  size?: 'large' | 'small' | 'default';
  /**
   * 按钮组合形状，可选值为circle或者不设置
   */
  shape?: '' | 'circle';
  /**
   * 是否纵向排列按钮组
   * @default false
   */
  vertical?: boolean;
}