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
	* @brief Redis 数据库客户端 List 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库
	* @detail 用以操作 Redis 的 List 对象，创建方法：,```JavaScript,var db = require("db");,var rdb = new db.openRedis("redis-server");,var list = rdb.getList("test");,```
	*/

declare class Class_RedisList extends Class__object {
	
	
	
	/**
	 * 
	 * @brief 将一个或多个值 value 插入到列表的表头
	 * @param values 指定要插入的数据
	 * @return 插入后，列表的长度
	 * 
	 * 
	 */
	push(values: any[]): number;

	/**
	 * 
	 * @brief 将一个或多个值 value 插入到列表的表头
	 * @param values 指定要插入的数据
	 * @return 插入后，列表的长度
	 * 
	 * 
	 */
	push(...values: any[]): number;

	/**
	 * 
	 * @brief 移除并返回列表 key 的头元素
	 * @return 列表的头元素，如果列表为空则返回 null
	 * 
	 * 
	 */
	pop(): Class_Buffer;

	/**
	 * 
	 * @brief 将一个或多个值 value 插入到列表的表尾(最右边)
	 * @param values 指定要插入的数据
	 * @return 插入后，列表的长度
	 * 
	 * 
	 */
	rpush(values: any[]): number;

	/**
	 * 
	 * @brief 将一个或多个值 value 插入到列表的表尾(最右边)
	 * @param values 指定要插入的数据
	 * @return 插入后，列表的长度
	 * 
	 * 
	 */
	rpush(...values: any[]): number;

	/**
	 * 
	 * @brief 移除并返回列表 key 的表尾(最右边)元素
	 * @return 列表的头元素，如果列表为空则返回 null
	 * 
	 * 
	 */
	rpop(): Class_Buffer;

	/**
	 * 
	 * @brief 将列表下标为 index 的元素的值设置为 value
	 * @param index 指定要修改的下标
	 * @param value 指定要修改的数据
	 * 
	 * 
	 */
	set(index: number, value: Class_Buffer): void;

	/**
	 * 
	 * @brief 返回列表中，下标为 index 的元素
	 * @param index 指定要查询的下标
	 * @return 列表中下标为 index 的元素
	 * 
	 * 
	 */
	get(index: number): Class_Buffer;

	/**
	 * 
	 * @brief 将值 value 插入到列表当中，位于值 pivot 之前
	 * @param pivot 指定插入时查找的数据
	 * @param value 指定要插入的数据
	 * @return 插入后，列表的长度
	 * 
	 * 
	 */
	insertBefore(pivot: Class_Buffer, value: Class_Buffer): number;

	/**
	 * 
	 * @brief 将值 value 插入到列表当中，位于值 pivot 之后
	 * @param pivot 指定插入时查找的数据
	 * @param value 指定要插入的数据
	 * @return 插入后，列表的长度
	 * 
	 * 
	 */
	insertAfter(pivot: Class_Buffer, value: Class_Buffer): number;

	/**
	 * 
	 * @brief 根据参数 count 的值，移除列表中与参数 value 相等的元素
	 * @param count 指定删除的元素数量
	 * @param value 指定要删除的数值
	 * @return 被移除元素的数量
	 * 
	 * 
	 */
	remove(count: number, value: Class_Buffer): number;

	/**
	 * 
	 * @brief 对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除
	 * @param start 指定修剪的起始下标，0 表示第一个元素，-1 表示最后一个元素
	 * @param stop 指定修剪的结束下标，0 表示第一个元素，-1 表示最后一个元素
	 * 
	 * 
	 */
	trim(start: number, stop: number): void;

	/**
	 * 
	 * @brief 返回列表的长度
	 * @return 返回列表的长度
	 * 
	 * 
	 */
	len(): number;

	/**
	 * 
	 * @brief 返回列表中指定区间内的元素，区间以偏移量 start 和 stop 指定，包含 start 和 stop 的元素
	 * @param start 指定查询的起始下标，0 表示第一个元素，-1 表示最后一个元素
	 * @param stop 指定查询的结束下标，0 表示第一个元素，-1 表示最后一个元素
	 * @return 包含指定区间内的元素的数组
	 * 
	 * 
	 */
	range(start: number, stop: number): any[];

} /** endof class */

/** endof `module Or Internal Object` */


