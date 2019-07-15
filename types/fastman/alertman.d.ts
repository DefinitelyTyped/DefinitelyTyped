/**
 * 表达式方式打开一个alert提示框
 * @param text Alert 文本
 * @param title Alert modal 标题
 * @param onClick 在Alert modal下，当用户点击“Ok”按钮时，回调函数将被执行
 * @param allowClose 是否允许关闭，设置为true时右上角会出现关闭按钮
 */
export default function alert(text: string, title?: string, onClick?: (_) => void, allowClose?: boolean): void;

/**
 * 表达式方式打开一个alert提示框
 * @param text Alert 文本
 * @param onClick 在Alert modal下，当用户点击“Ok”按钮时，回调函数将被执行
 * @param allowClose 是否允许关闭，设置为true时右上角会出现关闭按钮
 */
export default function alert(text: string, onClick?: (_) => void, allowClose?: boolean): void;

/**
 * 表达式方式打开一个alert提示框
 * @param text Alert 文本
 * @param allowClose 是否允许关闭，设置为true时右上角会出现关闭按钮
 */
export default function alert(text: string, allowClose?: boolean): void;

/**
 * 声明式方式打开一个alert提示框
 * @param options 具体options参数请查看http://itest.dfzq.com.cn/document/fastman-v2/component/alert.html
 */
export default function alert(options: {
  text: string;
  title?: string;
  onClick?: (_) => void;
  allowClose?: boolean;
}): void;
