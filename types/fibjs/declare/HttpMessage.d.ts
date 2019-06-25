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
	* @brief http 基础消息对象
	* @detail 
	*/
/// <reference path="Message.d.ts" />
declare class Class_HttpMessage extends Class_Message {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 协议版本信息，允许的格式为：HTTP/#.#
	 * 
	 * 
	 * @type String
	 */
	
	protocol: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 包含消息中 http 消息头的容器，只读属性
	 * 
	 * @readonly
	 * @type HttpCollection
	 */
	
	headers: Class_HttpCollection
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设定是否保持连接
	 * 
	 * 
	 * @type Boolean
	 */
	
	keepAlive: boolean
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设定是否是升级协议
	 * 
	 * 
	 * @type Boolean
	 */
	
	upgrade: boolean
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置最大请求头个数，缺省为 128
	 * 
	 * 
	 * @type Integer
	 */
	
	maxHeadersCount: number
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置 body 最大尺寸，以 MB 为单位，缺省为 64
	 * 
	 * 
	 * @type Integer
	 */
	
	maxBodySize: number
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询当前对象的来源 socket
	 * 
	 * @readonly
	 * @type Stream
	 */
	
	socket: Class_Stream
	
	
	
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
	addHeader(map: object): void;

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
	setHeader(map: object): void;

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

/** endof `module Or Internal Object` */


