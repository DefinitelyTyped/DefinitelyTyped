// Type definitions for rplugins-base v0.0.1
// Project: https://github.com/k66880/RPlugins-Base
// Definitions by: Robert Wu <https://github.com/k66880/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** 元素生成器 */
declare interface RDomMaker {
    /** 名称 */
    name: any;
    /** 图纸内容 */
    map: any;
    constructor(name: string, map: object);
    /**
     * 遍历map对每一项执行指定的函数
     * @param fn 要执行的函数
     */
    eachDoms(fn: Function): this;
    /**
     * 初始化map中的所有项到容器
     * @param doms 用于存放元素的容器（一个对象）
     * @param root 根节点
     * @param postfixname 后缀名称
     * @param makingDom 在生成完每个元素时执行的回调函数
     */
    initDoms(doms: object, root: JQuery, postfixname?: string, makingDom?: Function): this;
    /**
     * 初始化map中的所有项到容器（编程用）
     * @param doms 用于存放元素的容器（一个对象）
     */
    initDomsCoding(doms: object): this;
    /**
     * 创建指定名称的元素到容器
     * @param name 指定名称
     * @param doms 用于存放元素的容器（一个对象）
     * @param root 根节点
     * @param postfixname 后缀名称
     */
    createDom(name: string, doms: object, root?: JQuery, postfixname?: string): JQuery;
    /**
     * 创建指定名称数组的元素到容器
     * @param names 指定名称数组
     * @param doms 用于存放元素的容器（一个对象）
     * @param root 根节点
     * @param postfixname 后缀名称
     * @param makingDom 在生成完每个元素时执行的回调函数
     */
    createDoms(names: Array<string>, doms: object, root?: JQuery, postfixname?: string, makingDom?: Function): this;
    /**
     * 从容器中移除所有元素
     * @param doms 存放元素的容器（一个对象）
     */
    removeAll(doms: object): this;
}

