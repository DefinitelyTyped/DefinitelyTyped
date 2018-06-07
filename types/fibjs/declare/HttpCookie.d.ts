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
	* @brief http Cookie 对象，用于添加和处理 cookie
	* @detail 
	*/
declare class HttpCookie extends _object {
	
	/**
		* 
		* @brief HttpCookie 构造函数，创建一个新的 HttpCookie 对象
		* @param opts 指定创建的 cookie 的属性
		* 
		* 
		* 
		*/
	constructor(opts?: Object/** = v8::Object::New(isolate)*/);

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
	constructor(name: string, value: string, opts?: Object/** = v8::Object::New(isolate)*/);

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

/** } /** endof `module Or Internal Object` */


