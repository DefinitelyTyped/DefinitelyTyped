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
    * @brief ssl 服务器对象，可方便创建一个标准多纤程 ssl 服务器
    * @detail SslServer 对象是将 TcpServer 和 SslHandler 组合封装的对象，方便快速搭建服务器，逻辑上相当于：,```JavaScript,var svr = new net.SslServer(addr, port, new ssl.Handler(crt, key, function(req){,   ...,}));,```,,创建方法：,```JavaScript,var ssl = require("ssl");,var svr = new http.Server(crt, key, function(req){,    ...,});,```
    */
/// <reference path="TcpServer.d.ts" />
declare class Class_SslServer extends Class_TcpServer {
    
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
     * @brief 客户端证书验证证书链
     * 
     * @readonly
     * @type X509Cert
     */
    
    ca: Class_X509Cert
    
    
    
    /**
     * 
     * @brief SslServer 构造函数，在所有本机地址侦听
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
     * @param port 指定 ssl 服务器侦听端口
     * @param listener 指定 ssl 接收到的内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
     * 
     * 
     * 
     */
    constructor(certs: any[], port: number, listener: Class_Handler);

    /**
     * 
     * @brief SslServer 构造函数
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
     * @param addr 指定 ssl 服务器侦听地址，为 "" 则在本机所有地址侦听
     * @param port 指定 ssl 服务器侦听端口
     * @param listener 指定 ssl 接收到的连接的内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
     * 
     * 
     * 
     */
    constructor(certs: any[], addr: string, port: number, listener: Class_Handler);

    /**
     * 
     * @brief SslServer 构造函数，在所有本机地址侦听
     * @param crt X509Cert 证书，用于客户端验证服务器
     * @param key PKey 私钥，用于与客户端会话
     * @param port 指定 ssl 服务器侦听端口
     * @param listener 指定 ssl 接收到的内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
     * 
     * 
     * 
     */
    constructor(crt: Class_X509Cert, key: Class_PKey, port: number, listener: Class_Handler);

    /**
     * 
     * @brief SslServer 构造函数
     * @param crt X509Cert 证书，用于客户端验证服务器
     * @param key PKey 私钥，用于与客户端会话
     * @param addr 指定 ssl 服务器侦听地址，为 "" 则在本机所有地址侦听
     * @param port 指定 ssl 服务器侦听端口
     * @param listener 指定 ssl 接收到的连接的内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
     * 
     * 
     * 
     */
    constructor(crt: Class_X509Cert, key: Class_PKey, addr: string, port: number, listener: Class_Handler);

} /** endof class */

/** endof `module Or Internal Object` */


