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
	* @brief http客户端对象
	* @detail http客户端对象模拟浏览器环境缓存cookie，并在访问url的时候携带对应的cookie，不同的http客户端对象是相互隔离的，提供http的request、get、post等方法。,用法如下：,,```JavaScript,var http = require('http');,var httpClient = new http.Client();,httpClient.request('GET', 'http://fibjs.org');,```
	*/

declare class Class_HttpClient extends Class__object {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 返回http客户端的 HttpCookie 对象列表
	 * 
	 * @readonly
	 * @type NArray
	 */
	
	cookies: any[]
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置超时时间 单位毫秒
	 * 
	 * 
	 * @type Integer
	 */
	
	timeout: number
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置 body 最大尺寸，以 MB 为单位，缺省为 -1，不限制尺寸
	 * 
	 * 
	 * @type Integer
	 */
	
	maxBodySize: number
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief cookie功能开关，默认开启
	 * 
	 * 
	 * @type Boolean
	 */
	
	enableCookie: boolean
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 自动redirect功能开关，默认开启
	 * 
	 * 
	 * @type Boolean
	 */
	
	autoRedirect: boolean
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置 http 请求中的浏览器标识
	 * 
	 * 
	 * @type String
	 */
	
	userAgent: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置 keep-alive 最大缓存连接数，缺省 128
	 * 
	 * 
	 * @type Integer
	 */
	
	poolSize: number
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置 keep-alive 缓存连接超时时间，缺省 10000 ms
	 * 
	 * 
	 * @type Integer
	 */
	
	poolTimeout: number
	
	
	
	/**
	 * 
	 * @brief HttpClient 构造函数，创建一个新的HttpClient对象
	 * 
	 * 
	 */
	constructor();

	/**
	 * 
	 * @brief 发送 http 请求到指定的流对象，并返回结果
	 * @param conn 指定处理请求的流对象
	 * @param req 要发送的 HttpRequest 对象
	 * @return 返回服务器响应
	 * 
	 * 
	 * @async
	 */
	request(conn: Class_Stream, req: Class_HttpRequest): Class_HttpResponse;

	/**
	 * 
	 * @brief 请求指定的 url，并返回结果
	 * opts 包含请求的附加选项，支持的内容如下：
	 * ```JavaScript
	 * {
	 * "query": {},
	 * "body": SeekedStream | Buffer | String | {},
	 * "json": {},
	 * "headers": {}
	 * }
	 * ```
	 * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
	 * @param method 指定 http 请求方法：GET, POST 等
	 * @param url 指定 url，必须是包含主机的完整 url
	 * @param opts 指定附加信息
	 * @return 返回服务器响应
	 * 
	 * 
	 * @async
	 */
	request(method: string, url: string, opts?: object/** = v8::Object::New(isolate)*/): Class_HttpResponse;

	/**
	 * 
	 * @brief 用 GET 方法请求指定的 url，并返回结果，等同于 request("GET", ...)
	 * opts 包含请求的附加选项，支持的内容如下：
	 * ```JavaScript
	 * {
	 * "query": {},
	 * "body": SeekedStream | Buffer | String | {},
	 * "json": {},
	 * "headers": {}
	 * }
	 * ```
	 * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
	 * @param url 指定 url，必须是包含主机的完整 url
	 * @param opts 指定附加信息
	 * @return 返回服务器响应
	 * 
	 * 
	 * @async
	 */
	get(url: string, opts?: object/** = v8::Object::New(isolate)*/): Class_HttpResponse;

	/**
	 * 
	 * @brief 用 POST 方法请求指定的 url，并返回结果，等同于 request("POST", ...)
	 * opts 包含请求的附加选项，支持的内容如下：
	 * ```JavaScript
	 * {
	 * "query": {},
	 * "body": SeekedStream | Buffer | String | {},
	 * "json": {},
	 * "headers": {}
	 * }
	 * ```
	 * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
	 * @param url 指定 url，必须是包含主机的完整 url
	 * @param opts 指定附加信息
	 * @return 返回服务器响应
	 * 
	 * 
	 * @async
	 */
	post(url: string, opts?: object/** = v8::Object::New(isolate)*/): Class_HttpResponse;

	/**
	 * 
	 * @brief 用 DELETE 方法请求指定的 url，并返回结果，等同于 request("DELETE", ...)
	 * opts 包含请求的附加选项，支持的内容如下：
	 * ```JavaScript
	 * {
	 * "query": {},
	 * "body": SeekedStream | Buffer | String | {},
	 * "json": {},
	 * "headers": {}
	 * }
	 * ```
	 * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
	 * @param url 指定 url，必须是包含主机的完整 url
	 * @param opts 指定附加信息
	 * @return 返回服务器响应
	 * 
	 * 
	 * @async
	 */
	del(url: string, opts?: object/** = v8::Object::New(isolate)*/): Class_HttpResponse;

	/**
	 * 
	 * @brief 用 PUT 方法请求指定的 url，并返回结果，等同于 request("PUT", ...)
	 * opts 包含请求的附加选项，支持的内容如下：
	 * ```JavaScript
	 * {
	 * "query": {},
	 * "body": SeekedStream | Buffer | String | {},
	 * "json": {},
	 * "headers": {}
	 * }
	 * ```
	 * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
	 * @param url 指定 url，必须是包含主机的完整 url
	 * @param opts 指定附加信息
	 * @return 返回服务器响应
	 * 
	 * 
	 * @async
	 */
	put(url: string, opts?: object/** = v8::Object::New(isolate)*/): Class_HttpResponse;

	/**
	 * 
	 * @brief 用 PATCH 方法请求指定的 url，并返回结果，等同于 request("PATCH", ...)
	 * opts 包含请求的附加选项，支持的内容如下：
	 * ```JavaScript
	 * {
	 * "query": {},
	 * "body": SeekedStream | Buffer | String | {},
	 * "json": {},
	 * "headers": {}
	 * }
	 * ```
	 * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
	 * @param url 指定 url，必须是包含主机的完整 url
	 * @param opts 指定附加信息
	 * @return 返回服务器响应
	 * 
	 * 
	 * @async
	 */
	patch(url: string, opts?: object/** = v8::Object::New(isolate)*/): Class_HttpResponse;

} /** endof class */

/** endof `module Or Internal Object` */


