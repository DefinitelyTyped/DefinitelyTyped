// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Split extends Vue {
  /**
   * 面板位置，可以是 0~1 代表百分比，或具体数值的像素，可用 v-model 双向绑定
   * @default 0.5
   */
  value?: number | string;
  /**
   * 类型，可选值为 horizontal 或 vertical
   * @default horizontal
   */
  mode?: 'horizontal' | 'vertical';
  /**
   * 最小阈值
   * @default 40px
   */
  min?: number | string;
  /**
   * 最大阈值
   * @default 40px
   */
  max?: number | string;
  /**
   * 拖拽开始	-
   * @default false
   */
  $emit(eventName: 'on-move-start', []): this;
  /**
   * 拖拽中
   */
  $emit(eventName: 'on-moving', []): this;
  /**
   * 拖拽结束
   * @default false
   */
  $emit(eventName: 'on-move-end', []): this;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * mode 为 horizontal 时可用，左边面板
     * @default false
     */
    left: VNode[];
    /**
     * mode 为 horizontal 时可用，右边面板
     */
    right: VNode[];
    /**
     * mode 为 vertical 时可用，上边面板
     */
    top: VNode[];
    /**
     * mode 为 vertical 时可用，下边面板
     */
    bottom: VNode[];
    /**
     * 自定义分割拖拽节点
     */
    trigger: VNode[];
  }
}