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
	* @brief HeapSnapshots记录JS堆在某个时刻的状态
	* @detail 
	*/

declare class Class_HeapSnapshot extends Class__object {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 时间信息
	 * 
	 * @readonly
	 * @type Date
	 */
	
	time: Date
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 堆视图的根节点
	 * 
	 * @readonly
	 * @type HeapGraphNode
	 */
	
	root: Class_HeapGraphNode
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 堆视图节点组成的列表
	 * 
	 * @readonly
	 * @type NArray
	 */
	
	nodes: any[]
	
	
	
	/**
	 * 
	 * @brief 和指定的堆快照进行比较
	 * @param before 待比较的堆快照
	 * @return 返回堆快照的比较结果
	 * 
	 * 
	 * 
	 */
	diff(before: Class_HeapSnapshot): object;

	/**
	 * 
	 * @brief 根据ID获取堆视图节点
	 * @param id 数字类型的节点ID
	 * @return 返回获取到的堆视图节点
	 * 
	 * 
	 * 
	 */
	getNodeById(id: number): Class_HeapGraphNode;

	/**
	 * 
	 * @brief 根据指定名称保存HeapSnapshot
	 * @param fname 快照名称
	 * 
	 * 
	 * @async
	 */
	save(fname: string): void;

} /** endof class */

/** endof `module Or Internal Object` */


