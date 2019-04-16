/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *	 build info: 								   						   *
 *   	- fibjs	: 0.25.0                                                   *
 *   	- date	: Jun 12 2018 07:22:40                                     *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */
/// <reference path="object.d.ts" />




/** module Or Internal Object */
/**
	* @brief 消息处理器链处理对象
	* @detail 消息处理器链处理对象用于链接一系列消息处理器，按照指定的顺序链式处理。创建方法：,```JavaScript,var chain = new mq.Chain([,  func1, func2,]);,```
	*/
/// <reference path="Handler.d.ts" />
declare class Class_Chain extends Class_Handler {
	
	
	
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
	 * @brief 添加处理器数组
	 * @param hdlrs 处理器数组
	 * 
	 * 
	 * 
	 */
	append(hdlrs: any[]): void;

	/**
	 * 
	 * @brief 添加处理器
	 * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
	 * 
	 * 
	 * 
	 */
	append(hdlr: Class_Handler): void;

} /** endof class */

/** endof `module Or Internal Object` */


