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
	* @brief Redis 数据库客户端 SortedSet 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库
	* @detail 用以操作 Redis 的 SortedSet 对象，创建方法：,```JavaScript,var db = require("db");,var rdb = new db.openRedis("redis-server");,var set = rdb.getSortedSet("test");,```
	*/

declare class Class_RedisSortedSet extends Class__object {
	
	
	
	/**
	 * 
	 * @brief 将一个或多个 member 元素及其 score 值加入到有序集当中
	 * @param sms 指定要添加的 member/score 对象
	 * @return 被成功添加的新成员的数量，不包括那些被更新的、已经存在的成员
	 * 
	 * 
	 */
	add(sms: object): number;

	/**
	 * 
	 * @brief 将一个或多个 member 元素及其 score 值加入到有序集当中
	 * @param sms 指定要添加的 member/score 列表
	 * @return 被成功添加的新成员的数量，不包括那些被更新的、已经存在的成员
	 * 
	 * 
	 */
	add(...sms: any[]): number;

	/**
	 * 
	 * @brief 返回有序集中，成员 member 的 score 值
	 * @param member 指定要查询的 member
	 * @return member 成员的 score 值，以字符串形式表示
	 * 
	 * 
	 */
	score(member: Class_Buffer): Class_Buffer;

	/**
	 * 
	 * @brief 为有序集的成员 member 的 score 值加上增量 num
	 * @param member 指定要修改的 member
	 * @param num 指定要加上的数值
	 * @return member 成员的新 score 值，以字符串形式表示
	 * 
	 * 
	 */
	incr(member: Class_Buffer, num?: number/** = 1*/): Class_Buffer;

	/**
	 * 
	 * @brief 移除有序集中的一个或多个 member 元素
	 * @param members 指定要移除的元素数组
	 * @return 被成功移除的元素的数量，不包括被忽略的元素
	 * 
	 * 
	 */
	remove(members: any[]): number;

	/**
	 * 
	 * @brief 移除有序集中的一个或多个 member 元素
	 * @param members 指定要移除的元素列表
	 * @return 被成功移除的元素的数量，不包括被忽略的元素
	 * 
	 * 
	 */
	remove(...members: any[]): number;

	/**
	 * 
	 * @brief 返回有序集中元素的数量
	 * @return 返回有序集的长度
	 * 
	 * 
	 */
	len(): number;

	/**
	 * 
	 * @brief 返回有序集中， score 值在 min 和 max 之间(默认包括 score 值等于 min 或 max )的成员的数量
	 * @param min 指定统计的最小 score
	 * @param max 指定统计的最大 score
	 * @return score 值在 min 和 max 之间的成员的数量
	 * 
	 * 
	 */
	count(min: number, max: number): number;

	/**
	 * 
	 * @brief 返回有序集中，指定区间内的成员，成员的位置按 score 值递增(从小到大)来排序
	 * @param start 指定查询的起始下标，0 表示第一个元素，-1 表示最后一个元素
	 * @param stop 指定查询的结束下标，0 表示第一个元素，-1 表示最后一个元素
	 * @param withScores 指定是否在结果中包含 score
	 * @return 指定区间内，带有 score 值(可选)的有序集成员的列表
	 * 
	 * 
	 */
	range(start: number, stop: number, withScores?: boolean/** = false*/): any[];

	/**
	 * 
	 * @brief 返回有序集中，指定区间内的成员，成员的位置按 score 值递减(从大到小)来排序
	 * @param start 指定查询的起始下标，0 表示第一个元素，-1 表示最后一个元素
	 * @param stop 指定查询的结束下标，0 表示第一个元素，-1 表示最后一个元素
	 * @param withScores 指定是否在结果中包含 score
	 * @return 指定区间内，带有 score 值(可选)的有序集成员的列表
	 * 
	 * 
	 */
	rangeRev(start: number, stop: number, withScores?: boolean/** = false*/): any[];

	/**
	 * 
	 * @brief 有序集中成员 member 的排名。其中有序集成员按 score 值递增(从小到大)顺序排列
	 * @param member 指定要查询的 member
	 * @return member 如果 member 是有序集 key 的成员，返回 member 的排名。如果 member 不是有序集 key 的成员，返回 nil
	 * 
	 * 
	 */
	rank(member: Class_Buffer): number;

	/**
	 * 
	 * @brief 有序集中成员 member 的排名。其中有序集成员按 score 值递减(从大到小)顺序排列
	 * @param member 指定要查询的 member
	 * @return member 如果 member 是有序集 key 的成员，返回 member 的排名。如果 member 不是有序集 key 的成员，返回 nil
	 * 
	 * 
	 */
	rankRev(member: Class_Buffer): number;

} /** endof class */

/** endof `module Or Internal Object` */


