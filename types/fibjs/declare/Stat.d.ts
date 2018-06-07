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
	* @brief 文件的基础信息对象
	* @detail Stat 对象通过 fs.stat, File.stat, fs.readdir 查询，不可独立创建
	*/
declare class Stat extends _object {
	
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

/** } /** endof `module Or Internal Object` */


