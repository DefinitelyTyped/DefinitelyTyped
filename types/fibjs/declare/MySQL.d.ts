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
	* @brief mysql 数据库连接对象
	* @detail 使用 db.open 或 db.openMySQL 创建，创建方式：,```JavaScript,var msql = db.openMySQL("mysql://user:pass@host/db");,```
	*/
/// <reference path="DbConnection.d.ts" />
declare class Class_MySQL extends Class_DbConnection {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 数据库连接接收缓存尺寸
	 * 
	 * 
	 * @type Integer
	 */
	
	rxBufferSize: number
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 数据库连接发送缓存尺寸
	 * 
	 * 
	 * @type Integer
	 */
	
	txBufferSize: number
	
	
	
	/**
	 * 
	 * @brief 选择当前数据库连接的缺省数据库
	 * @param dbName 指定数据库名
	 * 
	 * 
	 * @async
	 */
	use(dbName: string): void;

} /** endof class */

/** endof `module Or Internal Object` */


