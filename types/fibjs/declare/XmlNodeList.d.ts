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
	* @brief XmlNodeList 对象代表一个有顺序的节点列表
	* @detail 
	*/

declare class Class_XmlNodeList extends Class__object {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 返回节点列表中的节点数目
	 * 
	 * 
	 * @readonly
	 * @type Integer
	 */
	
	length: number
	
	
	
	/**
	 * 
	 * @brief 返回节点列表中处于指定的索引号的节点
	 * @param index 指定要查询的索引
	 * @return 指定索引号的节点
	 * 
	 * 
	 * 
	 */
	item(index: number): Class_XmlNode;

} /** endof class */

/** endof `module Or Internal Object` */


