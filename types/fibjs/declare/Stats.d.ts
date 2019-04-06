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
	* @brief 数据统计对象，用以构建应用运行时数据收集
	* @detail 创建方法：,```JavaScript,var util = require("util");,var stats = new util.Stats(["begin", "end", "error"]);,```,一些内部对象会提供预先定义的的统计对象
	*/

declare class Class_Stats extends Class__object {
	
	
	
	/**
	 * 
	 * @brief 数据统计对象构造方法
	 * @param keys 指定计数器的名称
	 * 
	 * 
	 * 
	 */
	constructor(keys: any[]);

	/**
	 * 
	 * @brief 数据统计对象构造方法
	 * @param staticKeys 指定静态计数器的名称，静态计数器不会被 reset
	 * @param keys 指定计数器的名称
	 * 
	 * 
	 * 
	 */
	constructor(staticKeys: any[], keys: any[]);

	/**
	 * 
	 * @brief 指定的计数器增一
	 * @param key 指定计数器名称
	 * 
	 * 
	 * 
	 */
	inc(key: string): void;

	/**
	 * 
	 * @brief 指定的计数器减一
	 * @param key 指定计数器名称
	 * 
	 * 
	 * 
	 */
	dec(key: string): void;

	/**
	 * 
	 * @brief 指定的计数器加指定值
	 * @param key 指定计数器名称
	 * @param value 指定数值
	 * 
	 * 
	 * 
	 */
	add(key: string, value: number): void;

	/**
	 * 
	 * @brief 初始化计数器，除 staticKeys 指定的计数器全部清零
	 * 
	 * 
	 */
	reset(): void;

	/**
	 * 
	 * @brief 查询上次 reset 到现在的运行时间
	 * @return 返回上次 reset 到现在的运行时间
	 * 
	 * 
	 * 
	 */
	uptime(): number;

} /** endof class */

/** endof `module Or Internal Object` */


