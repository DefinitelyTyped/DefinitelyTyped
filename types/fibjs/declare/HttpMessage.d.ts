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
	* @brief http 基础消息对象
	* @detail 
	*/
/// <reference path="Message.d.ts" />
declare class Class_HttpMessage extends Class_Message {
	
	/**
		* 
		* @brief 检查是否存在指定键值的消息头
		* @param name 指定要检查的键值
		* @return 返回键值是否存在
		* 
		* 
		* 
		*/
	hasHeader(name: string): boolean;

	/**
		* 
		* @brief 查询指定键值的第一个消息头
		* @param name 指定要查询的键值
		* @return 返回键值所对应的值，若不存在，则返回 undefined
		* 
		* 
		* 
		*/
	firstHeader(name: string): any;

	/**
		* 
		* @brief 查询指定键值的全部消息头
		* @param name 指定要查询的键值
		* @return 返回键值所对应全部值的数组，若数据不存在，则返回 null
		* 
		* 
		* 
		*/
	allHeader(name: string): any[];

	/**
		* 
		* @brief 添加一个消息头，添加数据并不修改已存在的键值的消息头
		* @param map 指定要添加的键值数据字典
		* 
		* 
		* 
		*/
	addHeader(map: Object): void;

	/**
		* 
		* @brief 添加一个消息头，添加数据并不修改已存在的键值的消息头
		* @param name 指定要添加的键值
		* @param value 指定要添加的数据
		* 
		* 
		* 
		*/
	addHeader(name: string, value: any): void;

	/**
		* 
		* @brief 设定一个消息头，设定数据将修改键值所对应的第一个数值，并清除相同键值的其余消息头
		* @param map 指定要设定的键值数据字典
		* 
		* 
		* 
		*/
	setHeader(map: Object): void;

	/**
		* 
		* @brief 设定一个消息头，设定数据将修改键值所对应的第一个数值，并清除相同键值的其余消息头
		* @param name 指定要设定的键值
		* @param value 指定要设定的数据
		* 
		* 
		* 
		*/
	setHeader(name: string, value: any): void;

	/**
		* 
		* @brief 删除指定键值的全部消息头
		* @param name 指定要删除的键值
		* 
		* 
		* 
		*/
	removeHeader(name: string): void;

} /** endof class */

/** } /** endof `module Or Internal Object` */


