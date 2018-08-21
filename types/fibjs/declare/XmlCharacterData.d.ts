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
	* @brief XmlCharacterData 接口提供了 XmlText 和 XmlComment 节点的常用功能
	* @detail XmlCharacterData 是 XmlText 和 XmlComment 节点的超接口。文档从不包含 XmlCharacterData 节点，它们只包含 XmlText 节点和 XmlComment 节点。但由于这两种节点具有相似的功能，因此此处定义了这些函数，以便 XmlText 和 XmlComment 可以继承它。
	*/
/// <reference path="XmlNode.d.ts" />
declare class Class_XmlCharacterData extends Class_XmlNode {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 该节点包含的文本
	 * 
	 * 
	 * 
	 * @type String
	 */
	
	data: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 该节点包含的字符数
	 * 
	 * 
	 * @readonly
	 * @type Integer
	 */
	
	length: number
	
	
	
	/**
	 * 
	 * @brief 从节点中提取子串
	 * @param offset 要返回的第一个字符的位置
	 * @param count 要返回的子串中的字符数
	 * @return 返回提取的字符串
	 * 
	 * 
	 * 
	 */
	substringData(offset: number, count: number): string;

	/**
	 * 
	 * @brief 把字符串附加到节点上
	 * @param arg 要附加到节点的字符串
	 * 
	 * 
	 * 
	 */
	appendData(arg: string): void;

	/**
	 * 
	 * @brief 把字符串插入节点
	 * @param offset 要把字符串插入节点的字符位置
	 * @param arg 要插入的字符串
	 * 
	 * 
	 * 
	 */
	insertData(offset: number, arg: string): void;

	/**
	 * 
	 * @brief 从节点删除文本
	 * @param offset 要删除的第一个字符的位置
	 * @param count 要删除的字符的数量
	 * 
	 * 
	 * 
	 */
	deleteData(offset: number, count: number): void;

	/**
	 * 
	 * @brief 用指定的字符串替换节点的字符
	 * @param offset 节点要替换的字符位置
	 * @param count 要替换的字符的数量
	 * @param arg 要插入的字符串
	 * 
	 * 
	 * 
	 */
	replaceData(offset: number, count: number, arg: string): void;

} /** endof class */

/** endof `module Or Internal Object` */


