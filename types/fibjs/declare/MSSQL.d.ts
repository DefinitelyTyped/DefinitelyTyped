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
	* @brief SQL Server 数据库连接对象
	* @detail 使用 db.open 或 db.openMySQL 创建，创建方式：,```JavaScript,var sql = db.openMSSQL("mssql://user:pass@host/db");,```
	*/
/// <reference path="DbConnection.d.ts" />
declare class Class_MSSQL extends Class_DbConnection {
	
	
	
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


