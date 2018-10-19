// Type definitions for rplugins-base v0.0.1
// Project: https://github.com/k66880/RPlugins-Base
// Definitions by: Robert Wu <https://github.com/k66880/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare interface RDomMaker {
    /** #name */
    name: any;
    /** #map */
    map: any;
    constructor(name: any, map: any);
    /**
     * 遍历map对每一项执行指定的函数
     * @param fn #fn
     */
    eachDoms(fn: any): any;
    /**
     * 初始化map中的所有项到doms
     * @param doms #doms
     * @param root #root
     * @param postfixname #postfixname
     * @param makingDom #makingDom
     */
    initDoms(doms: object, root: JQuery, postfixname: string, makingDom: Function): any;
    /**
     * 初始化map中的所有项到doms（编程用）
     * @param doms #doms
     */
    initDomsCoding(doms: any): any;
    /**
     * 创建指定名称的元素
     * @param name #name
     * @param doms #doms
     * @param root #root
     * @param postfixname #postfixname
     */
    createDom(name: any, doms: any, root: any, postfixname: any): any;
    /**
     * 创建指定名称数组的元素
     * @param names #names
     * @param doms #doms
     * @param root #root
     * @param postfixname #postfixname
     * @param makingDom #makingDom
     */
    createDoms(names: any, doms: any, root: any, postfixname: any, makingDom: any): any;
    /**
     * 创建指定名称数组的元素
     * @param name #name
     * @param data #data
     * @param doms #doms
     * @param root #root
     * @param postfixname #postfixname
     */
    _createDom(name: any, data: any, doms: any, root: any, postfixname: any): any;
    /**
     * 移除所有元素
     * @param doms #doms
     */
    removeAll(doms: any): any;
}

