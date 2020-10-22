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
    * @brief https 服务器对象
    * @detail https 服务器对象是将 SslServer 和 HttpHandler 组合封装的对象，方便快速搭建服务器，逻辑上相当于：,```JavaScript,var svr = new net.SslServer(crt, key, addr, port, new http.Handler(function(req){,   ...,}));,```,,创建方法：,```JavaScript,var http = require("http");,var svr = new http.HttpsServer(crt, key, 443, function(req){,    ...,});,```
    */
/// <reference path="HttpServer.d.ts" />
declare class Class_HttpsServer extends Class_HttpServer {
    
    /**
     * class prop 
     *
     * 
     * @brief 设定证书验证模式，缺省为 VERIFY_NONE
     * 
     * 
     * @type Integer
     */
    
    verification: number
    
    /**
     * class prop 
     *
     * 
     * @brief 客户端证书验证 ca
     * 
     * @readonly
     * @type X509Cert
     */
    
    ca: Class_X509Cert
    
    
    
    /**
     * 
     * @brief HttpsServer 构造函数，在所有本机地址侦听
     * 
     * certs 格式为：
     * ```JavaScript
     * [
     * {
     * crt: [X509Cert object],
     * key: [PKey object]
     * },
     * {
     * crt: [X509Cert object],
     * key: [PKey object]
     * }
     * ]
     * ```
     * @param certs 服务器证书列表
     * @param port 指定 http 服务器侦听端口
     * @param hdlr http 内置消息处理器，处理函数，链式处理数组，路由对象，详见
     * 
     * 
     * 
     */
    constructor(certs: any[], port: number, hdlr: Class_Handler);

    /**
     * 
     * @brief HttpsServer 构造函数
     * 
     * certs 格式为：
     * ```JavaScript
     * [
     * {
     * crt: [X509Cert object],
     * key: [PKey object]
     * },
     * {
     * crt: [X509Cert object],
     * key: [PKey object]
     * }
     * ]
     * ```
     * @param certs 服务器证书列表
     * @param addr 指定 http 服务器侦听地址，为 "" 则在本机所有地址侦听
     * @param port 指定 http 服务器侦听端口
     * @param hdlr http 内置消息处理器，处理函数，链式处理数组，路由对象，详见
     * 
     * 
     * 
     */
    constructor(certs: any[], addr: string, port: number, hdlr: Class_Handler);

    /**
     * 
     * @brief HttpsServer 构造函数，在所有本机地址侦听
     * @param crt X509Cert 证书，用于客户端验证服务器
     * @param key PKey 私钥，用于与客户端会话
     * @param port 指定 http 服务器侦听端口
     * @param hdlr http 内置消息处理器，处理函数，链式处理数组，路由对象，详见
     * 
     * 
     * 
     */
    constructor(crt: Class_X509Cert, key: Class_PKey, port: number, hdlr: Class_Handler);

    /**
     * 
     * @brief HttpsServer 构造函数
     * @param crt X509Cert 证书，用于客户端验证服务器
     * @param key PKey 私钥，用于与客户端会话
     * @param addr 指定 http 服务器侦听地址，为 "" 则在本机所有地址侦听
     * @param port 指定 http 服务器侦听端口
     * @param hdlr http 内置消息处理器，处理函数，链式处理数组，路由对象，详见
     * 
     * 
     * 
     */
    constructor(crt: Class_X509Cert, key: Class_PKey, addr: string, port: number, hdlr: Class_Handler);

} /** endof class */

/** endof `module Or Internal Object` */


