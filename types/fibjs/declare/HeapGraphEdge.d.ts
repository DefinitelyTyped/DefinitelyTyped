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
	* @brief HeapGraphEdge表示两个HeapGraphNode节点间的关联，从上游节点到下游节点
	* @detail 
	*/

declare class Class_HeapGraphEdge extends Class__object {
	
	/**
		* 
		* @brief 获取HeapGraphEdge的上游HeapGraphNode节点
		* @return 返回源HeapGraphNode节点
		* 
		* 
		* 
		*/
	getFromNode(): Class_HeapGraphNode;

	/**
		* 
		* @brief 获取HeapGraphEdge的下游HeapGraphNode节点
		* @return 返回目的HeapGraphNode节点
		* 
		* 
		* 
		*/
	getToNode(): Class_HeapGraphNode;

} /** endof class */

/** } /** endof `module Or Internal Object` */


