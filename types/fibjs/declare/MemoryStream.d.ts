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
	* @brief 内存流对象
	* @detail MemoryStream 对象创建一个基于内存的流对象，创建方法：,```JavaScript,var ms = new io.MemoryStream();,```
	*/
/// <reference path="SeekableStream.d.ts" />
declare class Class_MemoryStream extends Class_SeekableStream {
	
	
	
	/**
	 * 
	 * @brief MemoryStream 构造函数
	 * 
	 * 
	 */
	constructor();

	/**
	 * 
	 * @brief 强制设定内存流对象的最后更新时间
	 * @param d 指定要设定的时间
	 * 
	 * 
	 * 
	 */
	setTime(d: Date): void;

	/**
	 * 
	 * @brief 创建当前内存流的一个只读副本
	 * @return 返回只读的内存流对象
	 * 
	 * 
	 * 
	 */
	clone(): Class_MemoryStream;

	/**
	 * 
	 * @brief 清空内存文件数据，复位指针
	 * 
	 * 
	 */
	clear(): void;

} /** endof class */

/** endof `module Or Internal Object` */


