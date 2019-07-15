/**
 * 打开一个级联选择器
 * @param selector 触发控件的选择器,支持类和ID选择器
 * @param options 具体options参数请查看http://itest.dfzq.com.cn/document/fastman-v2/component/picker.html
 */
export default function cascadePicker(selector: string, options: {
  data: dataType[];
  cols?: colsType[];
  toolbarTemplate?: string;
  value?: string[];
  rotateEffect?: boolean;
  inputReadOnly?: boolean;
  cssClass?: string;
  onChange?: (Picker, value, displayValue) => void;
  onOpen?: (Picker) => void;
  onClose?: (Picker) => void;
  formatValue?: (Picker, value, displayValue) => void;
  updateValue?: boolean;
});

export interface colsType {
  values: string[];
  textAlign?: string;
  displayValues?: string[];
}

export interface dataType {
  name: string | number;
  value: string | number;
  sub?: dataType[];
}
