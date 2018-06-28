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





/** module Or Internal Object */
/**
	* @brief 基础对象，所有对象均继承于此
	* @detail 
	*/

declare class Class__object  {
	
	
	
	/**
	 * 
	 * @brief 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
	 * @return 返回对象的字符串表示
	 * 
	 * 
	 * 
	 */
	toString(): string;

	/**
	 * 
	 * @brief 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
	 * @param key 未使用
	 * @return 返回包含可 JSON 序列化的值
	 * 
	 * 
	 * 
	 */
	toJSON(key?: string/** = ""*/): any;

} /** endof class */

/** endof `module Or Internal Object` */


