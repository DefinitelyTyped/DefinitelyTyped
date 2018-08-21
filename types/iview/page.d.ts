// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Page extends Vue {
  /**
   * 当前页码，支持 .sync 修饰符
   * @default 1
   */
  current?: number;
  /**
   * 数据总数
   * @default 0
   */
  total?: number;
  /**
   * 每页条数
   * @default 10
   */
  'page-size'?: number;
  /**
   * 每页条数切换的配置
   * @default [10, 20, 30, 40]
   */
  'page-size-opts'?: number[];
  /**
   * 条数切换弹窗的展开方向，可选值为 bottom 和 top
   * @default bottom
   */
  placement?: string;
  /**
   * 可选值为small（迷你版）或不填（默认）
   */
  size?: string;
  /**
   * 简洁版
   * @default false
   */
  simple?: boolean;
  /**
   * 显示总数
   * @default false
   */
  'show-total'?: boolean;
  /**
   * 显示电梯，可以快速切换到某一页
   * @default false
   */
  'show-elevator'?: boolean;
  /**
   * 显示分页，用来改变page-size
   * @default false
   */
  'show-sizer'?: boolean;
  /**
   * 自定义 class 名称
   */
  'class-name'?: string;
  /**
   * 自定义 style 样式
   */
  styles?: object;
  /**
   * 是否将弹层放置于 body 内，
   * 在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，
   * 它将不受父级样式影响，从而达到更好的效果
   * @default false
   */
  transfer?: boolean;
  /**
   * 替代图标显示的上一页文字
   */
  'prev-text'?: string;
  /**
   * 替代图标显示的下一页文字
   */
  'next-text'?: string;
  /**
   * 页码改变的回调，返回改变后的页码
   * @param pageNum 页码
   */
  $emit(eventName: 'on-change', pageNum: number): this;
  /**
   * 切换每页条数时的回调，返回切换后的每页条数
   * @param pageSize 每页条数
   */
  $emit(eventName: 'on-page-size-change', pageSize: number): this;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义显示总数的内容
     */
    '': VNode[];
  };
}