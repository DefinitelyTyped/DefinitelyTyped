// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode, CreateElement } from "vue";

export interface NoticeInstance {
  /**
   * 打开
   * @param config NoticeConfig为相关配置,string为待显示的内容
   */
  open(config?: NoticeConfig | string): void;
  /**
   * 信息
   * @param config NoticeConfig为相关配置,string为待显示的内容
   */
  info(config?: NoticeConfig | string): void;
  /**
   * 成功
   * @param config NoticeConfig为相关配置,string为待显示的内容
   */
  success(config?: NoticeConfig | string): void;
  /**
   * 警告
   * @param config NoticeConfig为相关配置,string为待显示的内容
   */
  warning(config?: NoticeConfig | string): void;
  /**
   * 错误
   * @param config NoticeConfig为相关配置,string为待显示的内容
   */
  error(config?: NoticeConfig): void;
  /**
   * 全局配置
   */
  config(options?: NoticeGlobalConfig): void;
  /**
   * 全局关闭某个通知
   */
  close(name?: string): void;
  /**
   * 全局销毁
   */
  destroy(): void;
}

export interface NoticeConfig {
  /**
   * 通知提醒的标题
   */
  title?: string;
  /**
   * 通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式
   */
  desc?: string;
  /**
   * 自定义描述内容，使用 Vue 的 Render 函数
   */
  render?: (h: CreateElement) => VNode;
  /**
   * 自动关闭的延时，单位秒，不关闭可以写 0 默认4.5
   */
  duration?: number;
  /**
   * 当前通知的唯一标识
   */
  name?: string;
  /**
   * 关闭时的回调
   */
  onClose?: Function;
}

export interface NoticeGlobalConfig {
  /**
   * 通知组件距离顶端的距离，单位像素 默认24
   */
  top?: number;
  /**
   * 默认自动关闭的延时，单位秒 默认4.5
   */
  duration?: number;
}

declare module "vue/types/vue" {
  interface Vue {
    /**
     * 通知提醒
     */
    $Notice?: NoticeInstance;
  }
}