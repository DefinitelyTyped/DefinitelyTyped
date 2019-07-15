/**
 * 初始化Scroller组件的无限刷新特性
 * @param selector 可无限滚动的容器的选择器，支持类和id
 */
export function initInfiniteScroll(selector: string): void;

/**
 * 无限刷新的事件回调
 * @param callback 该事件会在页面滚动到距离底部还有特定距离（可在data-distance中配置）时触发
 */
export function infiniteRefresh(callback: (e) => void): void;

/**
 * 标记无限刷新完成
 * @param selector 选择器，支持类和id，如果不定义则为默认值对应的选择器，通常不用定义
 */
export function infiniteScrollDone(selector?: string): void;
