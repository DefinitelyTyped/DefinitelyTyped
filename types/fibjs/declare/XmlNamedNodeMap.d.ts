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
	* @brief XmlNamedNodeMap 对象表示一个无顺序的属性列表
	* @detail 
	*/
declare class XmlNamedNodeMap extends _object {
	
	/**
		* 
		* @brief 返回属性列表中处于指定的索引号的属性
		* @param index 指定要查询的索引
		* @return 指定索引号的属性
		* 
		* 
		* 
		*/
	item(index: number): XmlAttr;

	/**
		* 
		* @brief 查询指定名称的属性
		* @param name 指定要查询的名称
		* @return 返回查询出的属性
		* 
		* 
		* 
		*/
	getNamedItem(name: string): XmlAttr;

} /** endof class */

/** } /** endof `module Or Internal Object` */


