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
    * @brief 扩展消息处理器接口
    * @detail 
    */
/// <reference path="Handler.d.ts" />
declare class Class_HandlerEx extends Class_Handler {
    
    /**
     * class prop 
     *
     * 
     * @brief WebSocket 协议转换处理器当前事件处理接口对象
     * 
     * 
     * @type Handler
     */
    
    handler: Class_Handler
    
    /**
     * class prop 
     *
     * 
     * @brief 查询 WebSocket 包协议转换处理器的工作状态
     * 
     * 返回的结果为一个 Stats 对象，结构如下：
     * ```JavaScript
     * {
     * total : 1000,    // 总计处理的请求
     * pendding : 100,  // 当前正在处理的请求
     * request : 10,    // 新建的请求
     * response : 10,   // 发送的响应
     * error : 100      // 发生的错误
     * }
     * ```
     * 
     * 
     * @readonly
     * @type Stats
     */
    
    stats: Class_Stats
    
    
    
    /**
     * 
     * @brief 设置错误处理器
     * 
     * 使用方式：
     * ```JavaScript
     * hdlr.onerror({
     * "404": function(v)
     * {
     * ...
     * },
     * "500": new mq.Routing(...)
     * })
     * ```
     * @param hdlrs 指定不同的错误的处理器，key 是错误号，value 是处理器，可以是内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
     * 
     * 
     * 
     */
    onerror(hdlrs: object): void;

} /** endof class */

/** endof `module Or Internal Object` */


