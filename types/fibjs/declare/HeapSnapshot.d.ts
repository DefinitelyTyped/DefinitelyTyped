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
	* @brief HeapSnapshots记录JS堆在某个时刻的状态
	* @detail 
	*/

declare class Class_HeapSnapshot extends Class__object {
	
	/**
		* 
		* @brief 和指定的堆快照进行比较
		* @param before 待比较的堆快照
		* @return 返回堆快照的比较结果
		* 
		* 
		* 
		*/
	diff(before: Class_HeapSnapshot): Object;

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

/** } /** endof `module Or Internal Object` */


