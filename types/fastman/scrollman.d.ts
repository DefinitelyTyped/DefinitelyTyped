/**
 * 初始化Scroller组件
 * @param selector 选择器，支持类和id
 * @param type 滚动的方式，支持配置为"auto"、"native"、"js"
 */
export function initScroller(selector: string, type?: {
  type: "auto" | "native" | "js"
}): void;

/**
 * 在js模式下，进行局部和全局滚动刷新
 * @param selector 在js模式下,滚动区域高度发生变化时,需要对滚动条进行刷新: 当填写了这个类或id选择器后,只会对该容器进行局部刷新;当然如果不定义,将会进行全局刷新，即 会刷新页面上所有的滚动条
 */
export function refreshScroller(selector?: string): void;

/**
 * 滚动顶部距离多少的位置，如果topNumber不定义则会被默认设置为0
 * @param selector 类或id选择器
 * @param topNumber 默认滚动到顶部距离多少的位置，单位为px
 */
export function scrollTop(selector: string, topNumber?: number): void;

/**
 * 初始化Scroller组件的下拉刷新特性
 * @param selector 选择器，支持类和id
 */
export function initPullDownRefresh(selector: string): void;

/**
 * 下拉刷新的事件回调
 * @param callback 下拉刷新事件回调，一般在用户状态释放并满足边距距离(默认44px，即data-ptr-distance)时自动触发
 */
export function pullDownRefresh(callback: (e) => void): void;

/**
 * 标记下拉刷新完成
 * @param selector 选择器，支持类和id，如果不定义则为默认值对应的选择器，通常不用定义
 */
export function pullDownRefreshDone(selector?: string): void;
