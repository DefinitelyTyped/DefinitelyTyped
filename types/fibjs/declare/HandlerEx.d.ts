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
	* @brief 扩展消息处理器接口
	* @detail 
	*/
declare class HandlerEx extends Handler {
	
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

} /** endof class */

/** } /** endof `module Or Internal Object` */


