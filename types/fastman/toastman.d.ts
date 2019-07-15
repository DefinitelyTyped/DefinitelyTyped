/**
 * 表达式方式打开一个toast弹出式提示
 * @param text toast内容
 * @param duration toast显示时间,默认2000毫秒
 * @param extraclass 给toast根节点附加class，高度自定义属性，方便用户自行控制不同场景的样式。如果使用了第三个参数，请自行在业务css里添加extraclass对应的样式。
 */
export function toast(text: string, duration?: number, extraclass?: string): ZeptoCollection;

/**
 * 表达式方式打开一个toast弹出式提示
 * @param text toast内容
 * @param extraclass 给toast根节点附加class，高度自定义属性，方便用户自行控制不同场景的样式。如果使用了第三个参数，请自行在业务css里添加extraclass对应的样式。
 */
export function toast(text: string, extraclass?: string): ZeptoCollection;

/**
 * 声明式方式关闭一个toast弹出式提示
 * @param options 具体options参数请查看http://itest.dfzq.com.cn/document/fastman-v2/component/toast.html
 */
export function toast(options: {
    text: string,
    duration?: number,
    extraclass?: string
  }): ZeptoCollection;

/**
 * 表达式方式关闭一个toast弹出式提示
 * @param instance toast创建时所生成的实例对象
 */
export function closeToast(instance: ZeptoCollection): void;
