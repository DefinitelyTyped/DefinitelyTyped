// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Menu extends Vue {
  /**
   * 菜单类型，可选值为 horizontal（水平） 和 vertical（垂直）
   * @default vertical
   */
  mode?: 'horizontal' | 'vertical';
  /**
   * 主题，可选值为 light、dark、primary，其中 primary 只适用于 mode="horizontal"
   * @default light
   */
  theme?: 'light' | 'dark' | 'primary';
  /**
   * 激活菜单的 name 值
   */
  'active-name'?: string | number;
  /**
   * 展开的 Submenu 的 name 集合
   */
  'open-names'?: string[] | number[];
  /**
   * 是否开启手风琴模式，开启后每次至多展开一个子菜单
   * @default false
   */
  accordion?: boolean;
  /**
   * 导航菜单的宽度，只在 mode="vertical" 时有效，如果使用 Col 等布局，建议设置为 auto
   * @default 240px
   */
  width?: string;
  /**
   * 选择菜单（MenuItem）时触发
   */
  $emit(eventName: 'on-select', name?: string | number): this;
  /**
   * 当 展开/收起 子菜单时触发	
   * @default 当前展开的 Submenu 的 name 值数组
   */
  $emit(eventName: 'on-open-change', names: string[] | number[]): this;
  /**
   * 手动更新展开的子目录，注意要在 $nextTick 里调用
   */
  updateOpened(): void;
  /**
   * 手动更新当前选择项，注意要在 $nextTick 里调用
   */
  updateActiveName(): void;
}

export interface MenuItem extends Vue {
  /**
   * 菜单项的唯一标识，必填
   */
  name?: string | number;
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

export interface Submenu extends Vue {
  /**
   * 子菜单的唯一标识，必填
   */
  name?: string | number;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 菜单项
     */
    '': VNode[];
    /**
     * 子菜单标题
     */
    title: VNode[];
  };
}

export interface MenuGroup extends Vue {
  /**
   * 分组标题
   * @default 空
   */
  title?: string;
}