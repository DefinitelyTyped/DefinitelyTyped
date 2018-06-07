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
	* @brief http 协议转换处理器
	* @detail 用以将数据流转换为 http 协议消息，创建方式：,```JavaScript,var hdlr = new mq.HttpHandler(...);,```,或者：,```JavaScript,var hdlr = new http.Handler(...);,```
	*/
declare class HttpHandler extends HandlerEx {
	
	/**
		* 
		* @brief 创建一个 http 协议处理器对象，将流对象的数据转变为 http 消息对象
		* @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
		* 
		* 
		* 
		*/
	constructor(hdlr: Handler);

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


