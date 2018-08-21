// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Steps extends Vue {
  /**
   * 当前步骤，从 0 开始计数
   * @default 0
   */
  current?: number;
  /**
   * 当前步骤的状态，可选值为wait、process、finish、error
   * @default process
   */
  status?: 'wait' | 'process' | 'finish' | 'error';
  /**
   * 步骤条的尺寸，可选值为small或者不写
   */
  size?: '' | 'small';
  /**
   * 步骤条的方向，可选值为horizontal（水平）或vertical（垂直）
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
}

export interface Step extends Vue {
  /**
   * 步骤的状态，可选值为wait、process、finish、error，不设置时自动判断
   * @default process
   */
  status?: 'wait' | 'process' | 'finish' | 'error';
  /**
   * 标题
   * @default 空
   */
  title?: string;
  /**
   * 步骤的详细描述，可选
   */
  content?: string;
  /**
   * 步骤的图标，可选
   */
  icon?: string;
}