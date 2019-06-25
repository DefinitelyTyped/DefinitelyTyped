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
	* @brief 系统服务管理对象
	* @detail 
	*/
/// <reference path="EventEmitter.d.ts" />
declare class Class_Service extends Class_EventEmitter {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置服务名称
	 * 
	 * 
	 * @type String
	 */
	
	name: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和绑定服务停止事件，相当于 on("stop", func);
	 * 
	 * 
	 * @type Function
	 */
	
	onstop: Function
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和绑定服务暂停事件，相当于 on("pause", func);
	 * 
	 * 
	 * @type Function
	 */
	
	onpause: Function
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和绑定服务恢复事件，相当于 on("continue", func);
	 * 
	 * 
	 * @type Function
	 */
	
	oncontinue: Function
	
	
	
	/**
	 * 
	 * @brief 系统服务管理对象构造函数
	 * @param name 服务名称
	 * @param worker 服务运行函数
	 * @param event 服务事件处理
	 * 
	 * 
	 * 
	 */
	constructor(name: string, worker: Function, event?: object/** = v8::Object::New(isolate)*/);

	/**
	 * 
	 * @brief 开始运行服务实体
	 * 
	 * @async
	 */
	run(): void;

	/**
	 * 
	 * @brief 安装服务到系统
	 * @param name 服务名称
	 * @param cmd 服务命令行
	 * @param displayName 服务显示名称
	 * @param description 服务描述信息
	 * 
	 * 
	 * 
	 */
	static install(name: string, cmd: string, displayName?: string/** = ""*/, description?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 从系统中卸载服务
	 * @param name 服务名称
	 * 
	 * 
	 * 
	 */
	static remove(name: string): void;

	/**
	 * 
	 * @brief 启动服务
	 * @param name 服务名称
	 * 
	 * 
	 * 
	 */
	static start(name: string): void;

	/**
	 * 
	 * @brief 停止服务
	 * @param name 服务名称
	 * 
	 * 
	 * 
	 */
	static stop(name: string): void;

	/**
	 * 
	 * @brief 重启服务
	 * @param name 服务名称
	 * 
	 * 
	 * 
	 */
	static restart(name: string): void;

	/**
	 * 
	 * @brief 检测服务是否安装
	 * @param name 服务名称
	 * @return 服务安装返回 True
	 * 
	 * 
	 * 
	 */
	static isInstalled(name: string): boolean;

	/**
	 * 
	 * @brief 检测服务是否运行
	 * @param name 服务名称
	 * @return 服务运行返回 True
	 * 
	 * 
	 * 
	 */
	static isRunning(name: string): boolean;

} /** endof class */

/** endof `module Or Internal Object` */


