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
	* @brief 缓存读取对象
	* @detail BufferedReader 对象用于对二进制流对象数据进行缓存，并提供文本读取能力，仅支持 utf-8 格式转换。创建方法：,```JavaScript,var reader = new io.BufferedStream(stream);,```
	*/
/// <reference path="Stream.d.ts" />
declare class Class_BufferedStream extends Class_Stream {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询创建缓存对象时的流对象
	 * 
	 * @readonly
	 * @type Stream
	 */
	
	stream: Class_Stream
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置当前对象处理文本时的字符集，缺省为 utf-8
	 * 
	 * 
	 * @type String
	 */
	
	charset: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置行结尾标识，缺省时，posix:\"\\n\"；windows:\"\\r\\n\"
	 * 
	 * 
	 * @type String
	 */
	
	EOL: string
	
	
	
	/**
	 * 
	 * @brief BufferedStream 构造函数
	 * @param stm BufferedStream 的二进制基础流对象
	 * 
	 * 
	 * 
	 */
	constructor(stm: Class_Stream);

	/**
	 * 
	 * @brief 读取指定字符的文本
	 * @param size 指定读取的文本字符个数，以 utf8 或者指定的编码字节数为准
	 * @return 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null
	 * 
	 * 
	 * @async
	 */
	readText(size: number): string;

	/**
	 * 
	 * @brief 读取一行文本，行结尾标识基于 EOL 属性的设置，缺省时，posix:\"\\n\"；windows:\"\\r\\n\"
	 * @param maxlen 指定此次读取的最大字符串，以 utf8 编码字节数为准，缺省不限制字符数
	 * @return 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null
	 * 
	 * 
	 * @async
	 */
	readLine(maxlen?: number/** = -1*/): string;

	/**
	 * 
	 * @brief 以数组方式读取一组文本行，行结尾标识基于 EOL 属性的设置，缺省时，posix:\"\\n\"；windows:\"\\r\\n\"
	 * @param maxlines 指定此次读取的最大行数，缺省读取全部文本行
	 * @return 返回读取的文本行数组，若无数据可读，或者连接中断，空数组
	 * 
	 * 
	 * 
	 */
	readLines(maxlines?: number/** = -1*/): any[];

	/**
	 * 
	 * @brief 读取一个文本字符串，以指定的字节为结尾
	 * @param mk 指定结尾的字符串
	 * @param maxlen 指定此次读取的最大字符串，以 utf8 编码字节数为准，缺省不限制字符数
	 * @return 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null
	 * 
	 * 
	 * @async
	 */
	readUntil(mk: string, maxlen?: number/** = -1*/): string;

	/**
	 * 
	 * @brief 写入一个字符串
	 * @param txt 指定写入的字符串
	 * 
	 * 
	 * @async
	 */
	writeText(txt: string): void;

	/**
	 * 
	 * @brief 写入一个字符串，并写入换行符
	 * @param txt 指定写入的字符串
	 * 
	 * 
	 * @async
	 */
	writeLine(txt: string): void;

} /** endof class */

/** endof `module Or Internal Object` */


