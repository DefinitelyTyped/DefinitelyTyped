/**
 * 创建一个空白页组件
 * @param options 具体请查看blankPage-config参数配置:http://itest.dfzq.com.cn/document/fastman-v2/component/blankpage.html
 */
export function blankPage(options: {
  title?: string;
  icon?: string;
  buttonText?: string;
  button?: boolean;
  type?: string;
  font?: string;
  container?: string;
  fontScale?: number;
  iconScale?: number;
}): blankPage.blankPageReturnType;

/**
 * 定义passGuard实例函数
 */
export namespace blankPage {
  interface blankPageReturnType {
    on(eventName: string, callback: (_) => void);
  }
}
