/**
 * 开启一个Picker多列选择器
 * @param selector 触发控件的选择器,支持类和ID选择器,例如#singleSelect
 * @param options 具体options参数请查看http://itest.dfzq.com.cn/document/fastman-v2/component/picker.html
 * @param needTime 是否需要显示时间选择列,默认为true
 */
export default function datetimepicker(selector: string, options?: {
  // cols: colsType[];
  toolbarTemplate?: string;
  value?: string[];
  rotateEffect?: boolean;
  inputReadOnly?: boolean;
  cssClass?: string;
  // onChange?: (Picker, value, displayValue) => void;
  onOpen?: (Picker) => void;
  onClose?: (Picker) => void;
  formatValue?: (Picker, value, displayValue) => void;
  updateValue?: boolean;
}, needTime?: boolean);

/**
 * 开启一个Picker多列选择器
 * @param selector 触发控件的选择器,支持类和ID选择器,例如#singleSelect
 * @param needTime 是否需要显示时间选择列,默认为true
 */
export default function datetimepicker(selector: string, needTime?: boolean);
