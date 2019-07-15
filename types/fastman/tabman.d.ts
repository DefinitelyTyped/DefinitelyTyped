/**
 * 定义某个tab事件
 *
 * @param tabId 选项卡对应的ID属性
 * @param func 点击选项卡时触发的回调函数
 */
export function tabEvent(tabId: string, func: (_) => void): void;

/**
 * 切换tab
 *
 * @param tabId 选项卡对应的ID属性
 */
export function tabSwitch(tabId: string): void;
