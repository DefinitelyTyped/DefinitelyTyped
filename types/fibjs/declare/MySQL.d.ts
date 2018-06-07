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
	* @brief mysql 数据库连接对象
	* @detail 使用 db.open 或 db.openMySQL 创建，创建方式：,```JavaScript,var msql = db.openMySQL("mysql://user:pass@host/db");,```
	*/
declare class MySQL extends DbConnection {
	
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

/** } /** endof `module Or Internal Object` */


