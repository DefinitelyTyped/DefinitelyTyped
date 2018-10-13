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
	* @brief zip 文件访问对象
	* @detail 
	*/

declare class Class_ZipFile extends Class__object {
	
	
	
	/**
	 * 
	 * @brief 获取文件名列表
	 * @return 返回包含文件名的列表对象
	 * 
	 * 
	 * @async
	 */
	namelist(): any[];

	/**
	 * 
	 * @brief 获取文件信息列表
	 * 文件信息包含字段有：filename, date, compress_type, compress_size, file_size, password, data
	 * @return 返回包含文件信息的列表对象
	 * 
	 * 
	 * @async
	 */
	infolist(): any[];

	/**
	 * 
	 * @brief 获取文件信息
	 * 文件信息包含字段有：filename, date, compress_type, compress_size, file_size, password, data
	 * @param member 指定要获取信息的文件名
	 * @return 返回文件信息对象
	 * 
	 * 
	 * @async
	 */
	getinfo(member: string): any;

	/**
	 * 
	 * @brief 返回从压缩文件读取的数据
	 * @param member 指定要读取的文件名
	 * @param password 解压密码, 默认没有密码
	 * @return 返回文件的所有数据
	 * 
	 * 
	 * @async
	 */
	read(member: string, password?: string/** = ""*/): Class_Buffer;

	/**
	 * 
	 * @brief 解压所有文件
	 * @param password 解压密码, 默认没有密码
	 * @return 包含所有文件数据及信息的列表
	 * 
	 * 
	 * @async
	 */
	readAll(password?: string/** = ""*/): any[];

	/**
	 * 
	 * @brief 解压指定文件
	 * @param member 指定要解压的文件名
	 * @param path 指定要解压到的路径
	 * @param password 解压密码, 默认没有密码
	 * 
	 * 
	 * @async
	 */
	extract(member: string, path: string, password?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 解压指定文件到流
	 * @param member 指定要解压的文件名
	 * @param strm 指定要解压到的流
	 * @param password 解压密码, 默认没有密码
	 * 
	 * 
	 * @async
	 */
	extract(member: string, strm: Class_SeekableStream, password?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 解压所有文件到指定路径
	 * @param path 指定要解压到的路径
	 * @param password 解压密码, 默认没有密码
	 * 
	 * 
	 * @async
	 */
	extractAll(path: string, password?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 写入指定文件到压缩文件
	 * @param filename 指定要写入的文件
	 * @param inZipName 压缩在zip文件内的文件名
	 * @param password 解压密码, 默认没有密码
	 * 
	 * 
	 * @async
	 */
	write(filename: string, inZipName: string, password?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 写入指定文件到压缩文件
	 * @param data 指定要写入的文件数据
	 * @param inZipName 压缩在zip文件内的文件名
	 * @param password 解压密码, 默认没有密码
	 * 
	 * 
	 * @async
	 */
	write(data: Class_Buffer, inZipName: string, password?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 写入指定文件到压缩文件
	 * @param strm 指定要写入文件数据流
	 * @param inZipName 压缩在zip文件内的文件名
	 * @param password 解压密码, 默认没有密码
	 * 
	 * 
	 * @async
	 */
	write(strm: Class_SeekableStream, inZipName: string, password?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 关闭打开的zip文件
	 * 
	 * @async
	 */
	close(): void;

} /** endof class */

/** endof `module Or Internal Object` */


