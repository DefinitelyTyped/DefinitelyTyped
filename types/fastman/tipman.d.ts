/**
 * 打开一个工具提示框
 * @param options 具体options参数请查看http://itest.dfzq.com.cn/document/fastman-v2/component/tip.html
 */
export function tip(options: {
  content: string,
  stayTime?: number,
  // type?: string,
  extraclass?: string
}): ZeptoCollection;

/**
 * 关闭一个工具提示框
 * @param instance 一个zepto对象
 */
export function closeTip(instance: ZeptoCollection);
