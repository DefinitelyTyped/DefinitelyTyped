// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Modal {
  /**
   * 对话框是否显示，可使用 v-model 双向绑定数据。
   * @default false
   */
  value?: boolean;
  /**
   * 对话框标题，如果使用 slot 自定义了页头，则 title 无效
   */
  title?: string;
  /**
   * 是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭,
   * @default true
   */
  closable?: boolean;
  /**
   * 是否允许点击遮罩层关闭
   * @default true
   */
  'mask-closable'?: boolean;
  /**
   * 点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置visible来关闭对话框,
   * @default false
   */
  loading?: boolean;
  /**
   * 页面是否可以滚动
   * @default false
   */
  scrollable?: boolean;
  /**
   * 是否全屏显示
   * @default false
   */
  fullscreen?: boolean;
  /**
   * 是否可以拖拽移动
   * @default false
   */
  draggable?: boolean;
  /**
   * 是否显示遮罩层，开启 draggable 时，强制不显示
   * @default true
   */
  mask?: boolean;
  /**
   * 确定按钮文字
   * @default 确定
   */
  'ok-text'?: string;
  /**
   * 取消按钮文字
   * @default 取消
   */
  'cancel-text'?: string;
  /**
   * 对话框宽度，单位 px。
   * 对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动auto,
   * @default 	520
   */
  width?: number | string;
  /**
   * 不显示底部
   * @default false
   */
  'footer-hide'?: boolean;
  /**
   * 设置浮层样式，调整浮层位置等，该属性设置的是.ivu-modal的样式
   */
  style?: object;
  /**
   * 设置对话框容器.ivu-modal-wrap的类名，可辅助实现垂直居中等自定义效果
   */
  'class-name'?: string;
  /**
   * 自定义显示动画，第一项是模态框，第二项是背景,
   * @default ['ease', 'fade']
   */
  'transition-names'?: Array<string>;
  /**
   * 是否将弹层放置于 body 内，默认值true
   * @default true
   */
  transfer?: boolean;
  /**
   * 点击确定的回调
   */
  $emit(eventName: 'on-ok'): this;
  /**
   * 开关变化时触发，返回当前的状态
   */
  $emit(eventName: 'on-cancel'): this;
  /**
   * 开关变化时触发，返回当前的状态
   */
  $emit(eventName: 'on-visible-change', visible: boolean): this;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 对话框主体内容
     */
    '': VNode[];
    /**
     * 自定义页头
     */
    header: VNode[];
    /**
     * 自定义页脚内容
     */
    footer: VNode[];
    /**
     * 自定义右上角关闭内容
     */
    close: VNode[];
  };
}

export interface ModalInstance {
  /**
   * 消息
   * @param config ModalConfig为相关配置,string为待显示的内容
   */
  info(config?: ModalConfig | string): void;
  /**
   * 成功
   * @param config ModalConfig为相关配置,string为待显示的内容
   */
  success(config?: ModalConfig | string): void;
  /**
   * 警告
   * @param config ModalConfig为相关配置,string为待显示的内容
   */
  warning(config?: ModalConfig | string): void;
  /**
   * 错误
   * @param config ModalConfig为相关配置,string为待显示的内容
   */
  error(config?: ModalConfig | string): void;
  /**
   * 对话框
   * @param config ModalConfig为相关配置,string为待显示的内容
   */
  confirm(config?: ModalConfig | string): void;
  /**
   * 移除
   */
  remove(): void;
}

export interface ModalConfig {
  /**
   * 标题或者Element选择器字符串
   */
  title?: string;
  /**
   * 内容或者Element选择器字符串
   */
  content?: string;
  /**
   * 自定义内容，使用后不再限制类型， content 也无效。
   */
  render?: () => void;
  /**
   * 宽度，单位 px
   * @default 416
   */
  width?: number | string;
  /**
   * 确定按钮的文字
   * @default 确定
   */
  okText?: string;
  /**
   * 取消按钮的文字，只在Modal.confirm()下有效
   * @default 取消
   */
  cancelText?: string;
  /**
   * 点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动调用Modal.remove()来关闭对话框
   * @default false
   */
  loading?: boolean;
  /**
   * 页面是否可以滚动
   * @default false
   */
  scrollable?: boolean;
  /**
   * 页面是否可以滚动
   * @default false
   */
  closable?: boolean;
  /**
   * 点击确定的回调
   */
  onOk?: () => void;
  /**
   * 点击取消的回调，只在Modal.confirm()下有效
   */
  onCancel?: () => void;
}

declare module "vue/types/vue" {
  interface Vue {
    /**
     * 对话框
     */
    $Modal?: ModalInstance;
  }
}