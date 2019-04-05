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
	* @brief 独立线程工作对象
	* @detail 
	*/
/// <reference path="EventEmitter.d.ts" />
declare class Class_Worker extends Class_EventEmitter {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和绑定接受 postMessage 消息事件，相当于 on("message", func);
	 * 
	 * 
	 * @type Function
	 */
	
	onmessage: Function
	
	
	
	/**
	 * 
	 * @brief Worker 对象构造函数
	 * @param path 指定 Worker 入口脚本，只接受绝对路径
	 * @param opts 构造选项，暂未支持
	 * 
	 * 
	 * 
	 */
	constructor(path: string, opts?: object/** = v8::Object::New(isolate)*/);

	/**
	 * 
	 * @brief 向 Master 或 Worker 发送消息，
	 * @param data 指定发送的消息内容
	 * 
	 * 
	 * 
	 */
	postMessage(data: any): void;

} /** endof class */

/** endof `module Or Internal Object` */


