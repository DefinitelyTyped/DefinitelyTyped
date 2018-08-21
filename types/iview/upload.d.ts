// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Upload extends Vue {
  /**
   * 上传的地址，必填
   */
  action?: string;
  /**
   * 设置上传的请求头部
   * @default {}
   */
  headers?: object;
  /**
   * 是否支持多选文件
   * @default false
   */
  multiple?: boolean;
  /**
   * 是否支持粘贴上传文件
   * @default false
   */
  paste?: boolean;
  /**
   * 上传时附带的额外参数
   */
  data?: object;
  /**
   * 上传的文件字段名
   * @default file
   */
  name?: string;
  /**
   * 支持发送 cookie 凭证信息
   * @default false
   */
  'with-credentials'?: boolean;
  /**
   * 是否显示已上传文件列表
   * @default true
   */
  'show-upload-list'?: boolean;
  /**
   * 上传控件的类型，可选值为 select（点击选择），drag（支持拖拽）
   * @default select
   */
  type?: 'select' | 'drag';
  /**
   * 接受上传的文件类型
   */
  accept?: string;
  /**
   * 支持的文件类型，与 accept 不同的是，
   * format 是识别文件的后缀名，
   * accept 为 input 标签原生的 accept 属性，
   * 会在选择文件时过滤，可以两者结合使用，
   * @default []
   */
  format?: string[];
  /**
   * 文件大小限制，单位 kb
   */
  'max-size'?: number;
  /**
   * 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传
   */
  'before-upload'?: Function;
  /**
   * 文件上传时的钩子，返回字段为 event, file, fileList
   */
  'on-progress'?: Function;
  /**
   * 文件上传成功时的钩子，返回字段为 response, file, fileList
   */
  'on-success'?: Function;
  /**
   * 文件上传失败时的钩子，返回字段为 error, file, fileList
   */
  'on-error'?: Function;
  /**
   * 点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据
   */
  'on-preview'?: Function;
  /**
   * 文件列表移除文件时的钩子，返回字段为 file, fileList
   */
  'on-remove'?: Function;
  /**
   * 文件格式验证失败时的钩子，返回字段为 file, fileList
   */
  'on-format-error'?: Function;
  /**
   * 文件超出指定大小限制时的钩子，返回字段为 file, fileList
   */
  'on-exceeded-size'?: Function;
  /**
   * 默认已上传的文件列表，例如：
   * [
   *     {
   *         name?: 'img1.jpg',
   *         url?: 'http://www.xxx.com/img1.jpg'
   *     },
   *     {
   *         name?: 'img2.jpg',
   *         url?: 'http://www.xxx.com/img2.jpg'
   *     }
   * ]
   */
  'default-file-list'?: string[];
  /**
   * 清空已上传的文件列表
   */
  'clearFiles'(): void;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 触发上传组件的控件
     */
    '': VNode[];
    /**
     * 辅助提示内容
     */
    tip: VNode[];
  };
}