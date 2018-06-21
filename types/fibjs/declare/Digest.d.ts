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
	* @brief 信息摘要对象
	* @detail 
	*/

declare class Class_Digest extends Class__object {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询当前信息摘要算法的摘要字节数
	 * 
	 * @readonly
	 * @type Integer
	 */
	
	size: number
	
	
	
	/**
	 * 
	 * @brief 更新二进制摘要信息
	 * @param data 二进制数据块
	 * @return 返回信息摘要对象本身
	 * 
	 * 
	 * 
	 */
	update(data: Class_Buffer): Class_Digest;

	/**
	 * 
	 * @brief 计算并返回摘要
	 * @param data 二进制数据块，此数据块将在计算前更新进摘要
	 * @return 返回摘要的二进制数据
	 * 
	 * 
	 * 
	 */
	digest(data: Class_Buffer): Class_Buffer;

	/**
	 * 
	 * @brief 计算并返回摘要
	 * @return 返回摘要的二进制数据
	 * 
	 * 
	 * 
	 */
	digest(): Class_Buffer;

} /** endof class */

/** endof `module Or Internal Object` */


