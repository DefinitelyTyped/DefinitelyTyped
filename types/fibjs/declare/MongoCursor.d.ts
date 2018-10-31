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
	* @brief mongodb 数据库数据游标对象
	* @detail 
	*/

declare class Class_MongoCursor extends Class__object {
	
	
	
	/**
	 * 
	 * @brief 指定返回结果时跳过的记录数
	 * @param num 记录数
	 * @return 返回游标对象本身便于链式调用
	 * 
	 * 
	 * @async
	 */
	skip(num: number): Class_MongoCursor;

	/**
	 * 
	 * @brief 指定返回结果的最大记录数
	 * @param size 记录数
	 * @return 返回游标对象本身便于链式调用
	 * 
	 * 
	 * @async
	 */
	limit(size: number): Class_MongoCursor;

	/**
	 * 
	 * @brief 设定返回结果的排序
	 * @param opts 指定排序条件
	 * @return 返回游标对象本身便于链式调用
	 * 
	 * 
	 * 
	 */
	sort(opts: object): Class_MongoCursor;

	/**
	 * 
	 * @brief 查询当前游标是否有下一条记录
	 * @return 有记录则返回 true
	 * 
	 * 
	 * 
	 */
	hasNext(): boolean;

	/**
	 * 
	 * @brief 返回当前游标的下一条记录
	 * @return 记录对象，无记录则返回 null
	 * 
	 * 
	 * 
	 */
	next(): object;

	/**
	 * 
	 * @brief 查询游标的记录总数
	 * @param applySkipLimit 指定是否查询 skip 和 limit 后的记录数，缺省为 false，查询全部记录数
	 * @return 返回记录总数
	 * 
	 * 
	 * 
	 */
	count(applySkipLimit?: boolean/** = false*/): number;

	/**
	 * 
	 * @brief 查询游标的记录总数，相当于 count(true)
	 * @return 返回记录总数
	 * 
	 * 
	 * 
	 */
	size(): number;

	/**
	 * 
	 * @brief 遍历全部记录并回调处理函数
	 * @param func 指定处理函数
	 * 
	 * 
	 * 
	 */
	forEach(func: Function): void;

	/**
	 * 
	 * @brief 遍历处理全部记录，并返回处理结果
	 * @param func 指定处理函数
	 * @return 返回处理结果数组
	 * 
	 * 
	 * 
	 */
	map(func: Function): any[];

	/**
	 * 
	 * @brief 返回当前游标全部记录的数组
	 * @return 返回包含全部数据的 Javascript 数组
	 * 
	 * 
	 * 
	 */
	toArray(): any[];

	/**
	 * 
	 * @brief 修改 mongodb 服务器缺省索引策略，使用指定的索引进行查询
	 * @param opts 指定强制使用的索引
	 * @return 返回游标对象本身便于链式调用
	 * 
	 * 
	 * 
	 */
	hint(opts: object): Class_MongoCursor;

} /** endof class */

/** endof `module Or Internal Object` */


