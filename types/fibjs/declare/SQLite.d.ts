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
	* @brief sqlite 数据库连接对象
	* @detail 使用 db.open 或 db.openSQLite 创建，创建方式：,```JavaScript,var slite = db.openSQLite("sqlite:/path/to/db");,```
	*/
declare class SQLite extends DbConnection {
	
	/**
		* 
		* @brief 备份当前数据库到新文件
		* @param fileName 指定备份的数据库文件名
		* 
		* @async
		*/
	backup(fileName: string): void;

} /** endof class */

/** } /** endof `module Or Internal Object` */


