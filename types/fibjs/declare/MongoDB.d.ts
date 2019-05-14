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
	* @brief mongodb 数据库连接对象
	* @detail 使用 db.open 或 db.openMongoDB 创建，创建方式：,```JavaScript,var mdb = db.openMongoDB("mongodb://host/db");,```
	*/

declare class Class_MongoDB extends Class__object {
	
	
	
	/**
	 * 
	 * @brief 获取指定集合访问对象
	 * @param name 指定集合的名称
	 * @return 返回指定的集合对象
	 * 
	 * 
	 * 
	 */
	getCollection(name: string): Class_MongoCollection;

	/**
	 * 
	 * @brief 指定一个 MongoDB 数据库命令
	 * @param cmd 指定命令和参数的字典对象
	 * @return 返回命令执行结果
	 * 
	 * 
	 * 
	 */
	runCommand(cmd: object): object;

	/**
	 * 
	 * @brief 指定一个简单的 MongoDB 数据库命令
	 * @param cmd 指定命令名
	 * @param arg 指定命令参数
	 * @return 返回命令执行结果
	 * 
	 * 
	 * 
	 */
	runCommand(cmd: string, arg: any): object;

	/**
	 * 
	 * @brief 生成一个 mongodb _objectid 对象
	 * @param hexStr 初始化 16 进制字符串，缺省生成新的 id
	 * @return 新 _objectid 对象
	 * 
	 * 
	 * 
	 */
	oid(hexStr?: string/** = ""*/): Class_MongoID;

	/**
	 * 
	 * @brief 关闭当前数据库连接
	 * 
	 * @async
	 */
	close(): void;

} /** endof class */

/** endof `module Or Internal Object` */


