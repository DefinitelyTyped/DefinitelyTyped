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
	* @brief http Cookie 对象，用于添加和处理 cookie
	* @detail 
	*/

declare class Class_HttpCookie extends Class__object {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置 cookie 名称
	 * 
	 * 
	 * @type String
	 */
	
	name: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置 cookie 的值
	 * 
	 * 
	 * @type String
	 */
	
	value: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置 cookie 的域名范围
	 * 
	 * 
	 * @type String
	 */
	
	domain: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置 cookie 的路径范围
	 * 
	 * 
	 * @type String
	 */
	
	path: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置 cookie 的过期时间
	 * 
	 * 
	 * @type Date
	 */
	
	expires: Date
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置 cookie 是否仅允许 http 请求，缺省 false
	 * 
	 * 
	 * @type Boolean
	 */
	
	httpOnly: boolean
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置 cookie 是否仅通过 https 传递，缺省 false
	 * 
	 * 
	 * @type Boolean
	 */
	
	secure: boolean
	
	
	
	/**
	 * 
	 * @brief HttpCookie 构造函数，创建一个新的 HttpCookie 对象
	 * @param opts 指定创建的 cookie 的属性
	 * 
	 * 
	 * 
	 */
	constructor(opts?: object/** = v8::Object::New(isolate)*/);

	/**
	 * 
	 * @brief HttpCookie 构造函数，创建一个新的 HttpCookie 对象
	 * @param name 指定创建的 cookie 名称
	 * @param value 指定创建的 cookie 值
	 * @param opts 指定创建的 cookie 的其它属性
	 * 
	 * 
	 * 
	 */
	constructor(name: string, value: string, opts?: object/** = v8::Object::New(isolate)*/);

	/**
	 * 
	 * @brief 解析给定的字符串，填充 cookie 对象
	 * @param header 指定需要解析的 header 字符串
	 * 
	 * 
	 * 
	 */
	parse(header: string): void;

	/**
	 * 
	 * @brief 检测给定的 url 是否匹配当前设置
	 * @param url 指定测试的 url
	 * @return 匹配成功返回 true
	 * 
	 * 
	 * 
	 */
	match(url: string): boolean;

} /** endof class */

/** endof `module Or Internal Object` */


