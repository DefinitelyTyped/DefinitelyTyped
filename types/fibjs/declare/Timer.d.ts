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
	* @brief 定时器处理器对象
	* @detail 
	*/

declare class Class_Timer extends Class__object {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询当前定时器是否已经终止
	 * 
	 * @readonly
	 * @type Boolean
	 */
	
	stopped: boolean
	
	
	
	/**
	 * 
	 * @brief 维持 fibjs 进程不退出，在定时器等待期间阻止 fibjs 进程退出
	 * @return 返回定时器对象
	 * 
	 * 
	 * 
	 */
	ref(): Class_Timer;

	/**
	 * 
	 * @brief 允许 fibjs 进程退出，在定时器等待期间允许 fibjs 进程退出
	 * @return 返回定时器对象
	 * 
	 * 
	 * 
	 */
	unref(): Class_Timer;

	/**
	 * 
	 * @brief 取消当前定时器
	 * 
	 * 
	 */
	clear(): void;

} /** endof class */

/** endof `module Or Internal Object` */


