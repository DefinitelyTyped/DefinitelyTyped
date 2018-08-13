// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Tooltip extends Vue {
  /**
   * 显示的内容
   * @default 空
   */
  content?: string | number;
  /**
   * 提示框出现的位置，可选值为
   * top，top-start，top-end，bottom，bottom-start，bottom-end，
   * left，left-start，left-end，right，right-start，right-end
   * 2.12.0 版本开始支持自动识别
   * @default bottom
   */
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
  /**
   * 是否禁用提示框
   * @default false
   */
  disabled?: boolean;
  /**
   * 延迟显示，单位毫秒
   * @default 0
   */
  delay?: number;
  /**
   * 是否总是可见
   * @default false
   */
  always?: boolean;
  /**
   * 主题，可选值为 dark 或 light
   * @default dark
   */
  theme?: string;
  /**
   * 最大宽度，超出最大值后，文本将自动换行，并两端对齐
   */
  'max-width'?: string|number;
  /**
   * 出现位置的偏移量
   * @default 0
   */
  offset?: number;
  /**
   * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，
   * 建议添加此属性，它将不受父级样式影响，从而达到更好的效果
   * @default false
   */
  transfer?: boolean;
  /**
   * 出现位置的偏移量
   * @default {
        modifiers: {
            computeStyle:{
                gpuAcceleration: false,
            },
            preventOverflow :{
                boundariesElement: 'window'
            }
        }
      }
   */
  options?: object;
  /**
   * 在提示框显示时触发
   */
  $emit(eventName: 'on-popper-show'): this;
  /**
   * 在提示框消失时触发
   */
  $emit(eventName: 'on-popper-hide'): this;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 主体内容
     */
    '': VNode[];
    /**
     * 提示框的内容，定义此 slot 时，会覆盖 props content。
     */
    content: VNode[];
  };
}