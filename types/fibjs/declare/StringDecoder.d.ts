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
	* @brief 流解码对象
	* @detail 
	*/

declare class Class_StringDecoder extends Class__object {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 内部使用。
	 * 
	 * 
	 * @type Integer
	 */
	
	lastNeed: number
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 内部使用。
	 * 
	 * 
	 * @type Integer
	 */
	
	lastTotal: number
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 内部使用。
	 * 
	 * 
	 * @type Buffer
	 */
	
	lastChar: Class_Buffer
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 解码编码.内部使用。
	 * 
	 * 
	 * @type String
	 */
	
	encoding: string
	
	
	
	/**
	 * 
	 * @brief 解码器构造函数
	 * @param encoding 解码编码. 默认 'utf8'.
	 * 
	 * 
	 * 
	 */
	constructor(encoding?: string/** = "utf8"*/);

	/**
	 * 
	 * @brief 将内部存留的 buffer 作为字符返回。不完整的 UTF-8 和 UTF-16 字节会尝试补全。
	 * @return 解码后的字符串.
	 * 
	 * 
	 * 
	 */
	end(): string;

	/**
	 * 
	 * @brief 将内部存留的 buffer 作为字符返回。不完整的 UTF-8 和 UTF-16 字节会尝试补全。
	 * @param buf 需要解码的 Buffer. 在执行 end 之前，会先调用 write 将 buffer 写入。
	 * @return 解码后的字符串.
	 * 
	 * 
	 * 
	 */
	end(buf: Class_Buffer): string;

	/**
	 * 
	 * @brief 返回一个解码后的字符串, 确保任何非完整的末尾字符被省略此次不返回，并被存储在内部供下一次的 write 或者 end 方法使用。
	 * @param  buf 需要解码的 Buffer。
	 * @return 解码后的字符串.
	 * 
	 * 
	 * 
	 */
	write(buf: Class_Buffer): string;

	/**
	 * 
	 * @brief 内部使用。.
	 * @param buf 需要解码的 Buffer。
	 * @param offset 解码偏移量
	 * @return 解码后的字符串.
	 * 
	 * 
	 * 
	 */
	text(buf: Class_Buffer, offset: number): string;

	/**
	 * 
	 * @brief 内部使用。.
	 * @param buf A Buffer containing the bytes to decode.
	 * @return 解码后的字符串.
	 * 
	 * 
	 * 
	 */
	fillLast(buf: Class_Buffer): string;

} /** endof class */

/** endof `module Or Internal Object` */


