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
	* @brief 文件的基础信息对象
	* @detail Stat 对象通过 fs.stat, File.stat, fs.readdir 查询，不可独立创建
	*/

declare class Class_Stat extends Class__object {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 文件名称
	 * 
	 * @readonly
	 * @type String
	 */
	
	name: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 文件尺寸
	 * 
	 * @readonly
	 * @type Long
	 */
	
	size: number
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 文件权限，Windows 不支持此属性
	 * 
	 * @readonly
	 * @type Integer
	 */
	
	mode: number
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 文件最后修改时间
	 * 
	 * @readonly
	 * @type Date
	 */
	
	mtime: Date
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 文件最后访问时间
	 * 
	 * @readonly
	 * @type Date
	 */
	
	atime: Date
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 文件创建时间
	 * 
	 * @readonly
	 * @type Date
	 */
	
	ctime: Date
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 文件拥有者的id
	 * 
	 * @readonly
	 * @type Integer
	 */
	
	uid: number
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 文件所属的组id
	 * 
	 * @readonly
	 * @type Integer
	 */
	
	gid: number
	
	
	
	/**
	 * 
	 * @brief 查询文件是否有写入权限
	 * @return 为 true 则有写入权限
	 * 
	 * 
	 * 
	 */
	isWritable(): boolean;

	/**
	 * 
	 * @brief 查询文件是否有读权限
	 * @return 为 true 则有读权限
	 * 
	 * 
	 * 
	 */
	isReadable(): boolean;

	/**
	 * 
	 * @brief 查询文件是否有执行权限
	 * @return 为 true 则有执行权限
	 * 
	 * 
	 * 
	 */
	isExecutable(): boolean;

	/**
	 * 
	 * @brief 查询文件是否隐藏
	 * @return 为 true 则隐藏
	 * 
	 * 
	 * 
	 */
	isHidden(): boolean;

	/**
	 * 
	 * @brief 查询文件是否是目录
	 * @return 为 true 则是目录
	 * 
	 * 
	 * 
	 */
	isDirectory(): boolean;

	/**
	 * 
	 * @brief 查询文件是否是文件
	 * @return 为 true 则是文件
	 * 
	 * 
	 * 
	 */
	isFile(): boolean;

	/**
	 * 
	 * @brief 查询文件是否是符号链接
	 * @return 为 true 则是符号链接
	 * 
	 * 
	 * 
	 */
	isSymbolicLink(): boolean;

	/**
	 * 
	 * @brief 查询文件是否是内存文件
	 * @return 为 true 则是内存文件
	 * 
	 * 
	 * 
	 */
	isMemory(): boolean;

	/**
	 * 
	 * @brief 查询文件是否是 Socket
	 * @return 为 true 则是 Socket
	 * 
	 * 
	 * 
	 */
	isSocket(): boolean;

} /** endof class */

/** endof `module Or Internal Object` */


