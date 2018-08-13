// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Switch extends Vue {
  /**
   * 指定当前是否选中，可以使用 v-model 双向绑定数据
   * @default false
   */
  value?: boolean;
  /**
   * 开关的尺寸，可选值为large、small、default或者不写。建议开关如果使用了2个汉字的文字，使用 large。
   */
  size?: '' | 'large' | 'small' | 'default';
  /**
   * 禁用开关
   * @default false
   */
  disabled?: boolean;
  /**
   * 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
   * @default true
   */
  'true-value'?: string | number | boolean;
  /**
   * 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
   * @default false
   */
  'false-value'?: string | number | boolean;
  /**
   * 加载中的开关
   * @default false
   */
  loading?: boolean;
  /**
   * 开关变化时触发，返回当前的状态
   */
  $emit(eventName: 'on-change', value: boolean): this;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义显示打开时的内容
     */
    open: VNode[];
    /**
     * 自定义显示关闭时的内容
     */
    close: VNode[];
  };
}