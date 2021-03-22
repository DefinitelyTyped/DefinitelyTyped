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
    * @brief http 请求消息对象
    * @detail 
    */
/// <reference path="HttpMessage.d.ts" />
declare class Class_HttpRequest extends Class_HttpMessage {
    
    /**
     * class prop 
     *
     * 
     * @brief 获取响应消息对象
     * 
     * @readonly
     * @type HttpResponse
     */
    
    response: Class_HttpResponse
    
    /**
     * class prop 
     *
     * 
     * @brief 查询和设置请求方法
     * 
     * 
     * @type String
     */
    
    method: string
    
    /**
     * class prop 
     *
     * 
     * @brief 查询和设置请求地址
     * 
     * 
     * @type String
     */
    
    address: string
    
    /**
     * class prop 
     *
     * 
     * @brief 查询和设置请求查询字符串
     * 
     * 
     * @type String
     */
    
    queryString: string
    
    /**
     * class prop 
     *
     * 
     * @brief 获取包含消息 cookies 的容器
     * 
     * @readonly
     * @type HttpCollection
     */
    
    cookies: Class_HttpCollection
    
    /**
     * class prop 
     *
     * 
     * @brief 获取包含消息 form 的容器
     * 
     * @readonly
     * @type HttpCollection
     */
    
    form: Class_HttpCollection
    
    /**
     * class prop 
     *
     * 
     * @brief 获取包含消息 query 的容器
     * 
     * @readonly
     * @type HttpCollection
     */
    
    query: Class_HttpCollection
    
    
    
    /**
     * 
     * @brief HttpRequest 构造函数，创建一个新的 HttpRequest 对象
     * 
     * 
     */
    constructor();

} /** endof class */

/** endof `module Or Internal Object` */


