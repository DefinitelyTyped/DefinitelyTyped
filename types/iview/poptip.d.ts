// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Poptip extends Vue {
  /**
   * 触发方式，可选值为hover（悬停）click（点击）focus（聚焦）,
   * 在 confirm 模式下，只有 click 有效
   * @default click
   */
  trigger?: string;
  /**
   * 显示的标题
   */
  title?: string | number;
  /**
   * 显示的正文内容，只在非 confirm 模式下有效\
   * @default 空
   */
  content?: string | number;
  /**
   * 提示框出现的位置，可选值为
   * top，top-start，top-end，bottom，bottom-start，bottom-end，
   * left，left-start，left-end，right，right-start，right-end
   * 2.12.0 版本开始支持自动识别
   * @default top
   */
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
  /**
   * 宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px
   */
  width?: string | number;
  /**
   * 是否开启对话框模式
   * @default false
   */
  confirm?: boolean;
  /**
   * 确定按钮的文字，只在 confirm 模式下有效
   * @default 确定
   */
  'ok-text'?: string;
  /**
   * 取消按钮的文字，只在 confirm 模式下有效
   * @default 取消
   */
  'cancel-text'?: string;
  /**
   * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，
   * 建议添加此属性，它将不受父级样式影响，从而达到更好的效果
   * @default false
   */
  transfer?: boolean;
  /**
   * 给 Poptip 设置 class-name，在使用 transfer 时会很有用
   * @default false
   */
  'popper-class'?: string;
  /**
   * 开启后，超出指定宽度文本将自动换行，并两端对齐
   * @default false
   */
  'word-wrap'?: boolean;
  /**
   * 自定义间距值
   * @default 8px 16px
   */
  padding?: string;
  /**
   * 出现位置的偏移量
   * @default false
   */
  offset?: string;
  /**
   * 自定义 popper.js 的配置项，具体配置见 popper.js 文档
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
   * 点击确定的回调，只在 confirm 模式下有效
   */
  $emit(eventName: 'on-ok'): this;
  /**
   * 点击取消的回调，只在 confirm 模式下有效
   */
  $emit(eventName: 'on-cancel'): this;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 主体内容
     */
    '': VNode[];
    /**
     * 提示框标题，定义此 slot 时，会覆盖 props title
     */
    title: VNode[];
    /**
     * 提示框内容，定义此 slot 时，会覆盖 props content，只在非 confirm 模式下有效
     */
    content: VNode[];
  }
}