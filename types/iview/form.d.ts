// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface Form extends Vue {
  /**
   * 表单数据对象
   */
  model?: object;
  /**
   * 表单验证规则，具体配置查看 async-validator
   */
  rules?: object;
  /**
   * 是否开启行内表单模式
   * @default false
   */
  inline?: boolean;
  /**
   * 表单域标签的位置，可选值为 left、right、top
   * @default right
   */
  'label-position'?: 'left'|'right'|'top';
  /**
   * 表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值
   */
  'label-width'?: number;
  /**
   * 是否显示校验错误信息
   * @default true
   */
  'show-message'?: boolean;
  /**
   * 对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败
   */
  validate(callback?: (valid?: boolean) => void): void;
  /**
   * 对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息
   */
  validateField(prop?: string, callback?: (valid?: boolean) => void): void;
  /**
   * 对整个表单进行重置，将所有字段值重置为空并移除校验结果
   */
  resetFields(): void;
}

export interface FormItem extends Vue {
  /**
   * 对应表单域 model 里的字段
   */
  prop?: string;
  /**
   * 标签文本
   */
  label?: string;
  /**
   * 表单域标签的的宽度
   */
  'label-width'?: number;
  /**
   * 指定原生的 label 标签的 for 属性，配合控件的 element-id 属性，可以点击 label 时聚焦控件。
   */
  'label-for'?: string;
  /**
   * 是否必填，如不设置，则会根据校验规则自动生成
   */
  required?: boolean;
  /**
   * 表单验证规则
   */
  rules?: object | Array<any>;
  /**
   * 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息
   */
  error?: string;
  /**
   * 是否显示校验错误信息
   * @default true
   */
  'show-message'?: boolean;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 内容
     */
    '': VNode[];
    /**
     * label 内容
     */
    label: VNode[];
  };
}




