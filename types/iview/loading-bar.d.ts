// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface LoadingBarInstance {
  /**
   * 开始从 0 显示进度条，并自动加载进度
   */
  start(): void;
  /**
   * 结束进度条，自动补全剩余进度
   */
  finish(): void;
  /**
   * 以错误的类型结束进度条，自动补全剩余进度
   */
  error(): void;
  /**
   * 精确加载到指定的进度
   * @param percent 指定的进度百分比
   */
  update(percent?: number): void;
  /**
   * 全局配置
   * @param options 配置对象
   */
  config(options?: LoadingBarConfig): void;
  /**
   * 全局销毁
   */
  destroy(): void;
}

export interface LoadingBarConfig {
  /**
   * 进度条的颜色，默认为 iView 主色 
   * @default primary
   */
  color?: string;
  /**
   * 失败时的进度条颜色，默认为 iView 主色 
   * @default error
   */
  failedColor?: string;
  /**
   * 进度条高度，单位 px 
   * @default 2
   */
  height?: number;
}

declare module "vue/types/vue" {
  interface Vue {
    /**
     * 加载进度条
     */
    $Loading?: LoadingBarInstance;
  }
}