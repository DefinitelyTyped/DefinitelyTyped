/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *     build info:                                                               *
 *       - fibjs    : 0.25.0                                                   *
 *       - date    : Jun 12 2018 07:22:40                                     *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */
/// <reference path="object.d.ts" />




/** module Or Internal Object */
/**
    * @brief 消息处理器接口
    * @detail 
    */

declare class Class_Handler extends Class__object {
    
    
    
    /**
     * 
     * @brief 构造一个消息处理器链处理对象
     * @param hdlrs 处理器数组
     * 
     * 
     * 
     */
    constructor(hdlrs: any[]);

    /**
     * 
     * @brief 创建一个消息处理器路由对象
     * @param map 初始化路由参数
     * 
     * 
     * 
     */
    constructor(map: object);

    /**
     * 
     * @brief 创建一个 JavaSvript 消息处理器
     * @param hdlr JavaScript 处理器函数
     * 
     * 
     * 
     */
    constructor(hdlr: Function);

    /**
     * 
     * @brief 处理一个消息或对象
     * @param v 指定处理的消息或对象
     * @return 返回下一步的处理器
     * 
     * 
     * @async
     */
    invoke(v: Class__object): Class_Handler;

} /** endof class */

/** endof `module Or Internal Object` */


