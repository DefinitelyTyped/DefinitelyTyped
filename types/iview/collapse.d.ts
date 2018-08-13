// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Collapse extends Vue {
  /**
   * 当前激活的面板的 name，可以使用 v-model 双向绑定
   */
  value?: string[] | string;
  /**
   * 是否开启手风琴模式，开启后每次至多展开一个面板
   * @default false
   */
  accordion?: boolean;
  /**
   * 是否开启简洁模式
   * @default false
   */
  simple?: boolean;
  /**
   * 切换面板时触发，返回当前已展开的面板的 key，格式为数组
   * @default []
   */
  $emit(eventName: 'on-change', []): this;
}

export interface CollapsePanel extends Vue {
  /**
   * 当前面板的 name，与 Collapse的value对应，不填为索引值
   * @default index的值
   */
  name?: string;
  /**
   * 隐藏箭头
   * @default false
   */
  'hide-arrow'?: boolean;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 面板头内容
     */
    '': VNode[];
    /**
     * 描素内容
     */
    content: VNode[];
  };
}