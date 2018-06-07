/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                   *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */
/// <reference path="object.d.ts" />




/** module Or Internal Object */
/**
	* @brief http 服务器对象
	* @detail http 服务器对象是将 TcpServer 和 HttpHandler 组合封装的对象，方便快速搭建服务器，逻辑上相当于：,```JavaScript,var svr = new net.TcpServer(addr, port, new http.Handler(function(req){,   ...,}));,```,,创建方法：,```JavaScript,var http = require("http");,var svr = new http.Server(80, function(req){,    ...,});,```
	*/
declare class HttpServer extends TcpServer {
	
	/**
		* 
		* @brief HttpServer 构造函数，在所有本机地址侦听
		* @param port 指定 http 服务器侦听端口
		* @param hdlr http 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
		* 
		* 
		* 
		*/
	constructor(port: number, hdlr: Handler);

	/**
		* 
		* @brief HttpServer 构造函数
		* @param addr 指定 http 服务器侦听地址，为 "" 则在本机所有地址侦听
		* @param port 指定 http 服务器侦听端口
		* @param hdlr http 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
		* 
		* 
		* 
		*/
	constructor(addr: string, port: number, hdlr: Handler);

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
	onerror(hdlrs: Object): void;

	/**
		* 
		* @brief 允许跨域请求
		* @param allowHeaders 指定接受的 http 头字段
		* 
		* 
		* 
		*/
	enableCrossOrigin(allowHeaders?: string/** = "Content-Type"*/): void;

} /** endof class */

/** } /** endof `module Or Internal Object` */


