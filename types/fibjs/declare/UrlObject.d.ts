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
	* @brief Url 处理对象
	* @detail 基础模块。提供 url 的格式化，解析与拼装,```JavaScript,var url = new net.Url('http://www.xici.net/');,var url = new net.Url({protocol: 'http:', hostname:'www.xici.net', pathname:'/'});,```
	*/
declare class UrlObject extends _object {
	
	/**
		* 
		* @brief UrlObject 对象构造函数，使用参数构造
		* @param args 指定构造参数的字典对象，支持的字段有：protocol, slashes, username, password, hostname, port, pathname, query, hash
		* 
		* 
		* 
		*/
	constructor(args: Object);

	/**
		* 
		* @brief UrlObject 对象构造函数，使用 url 字符串构造
		* @param url 指定构造 url 字符串
		* @param parseQueryString 指定是否解析 query
		* @param slashesDenoteHost  默认为false, 如果设置为true，则从字符串'//'之后到下一个'/'之前的字符串会被解析为host，例如'//foo/bar', 结果应该是{host: 'foo', pathname: '/bar'}而不是{pathname: '//foo/bar'}
		* 
		* 
		* 
		*/
	constructor(url?: string/** = ""*/, parseQueryString?: boolean/** = false*/, slashesDenoteHost?: boolean/** = false*/);

	/**
		* 
		* @brief 解析一个 url 字符串
		* @param url 指定需要解析的 url 字符串
		* @param parseQueryString 指定是否解析 query
		* @param slashesDenoteHost  默认为false, 如果设置为true，则从字符串'//'之后到下一个'/'之前的字符串会被解析为host，例如'//foo/bar', 结果应该是{host: 'foo', pathname: '/bar'}而不是{pathname: '//foo/bar'}
		* 
		* 
		* 
		*/
	parse(url: string, parseQueryString?: boolean/** = false*/, slashesDenoteHost?: boolean/** = false*/): void;

	/**
		* 
		* @brief 使用指定的参数构造 UrlObject
		* @param args 指定构造参数的字典对象，支持的字段有：protocol, slashes, username, password, hostname, port, pathname, query, hash
		* 
		* 
		* 
		*/
	format(args: Object): void;

	/**
		* 
		* @brief 重定位 url 路径，自动识别新路径为相对路径还是绝对路径
		* @param url 指定新的路径
		* @return 返回包含重定位数据的对象
		* 
		* 
		* 
		*/
	resolve(url: string): UrlObject;

	/**
		* 
		* @brief 标准化路径
		* 
		* 
		* 
		*/
	normalize(): void;

} /** endof class */

/** } /** endof `module Or Internal Object` */


