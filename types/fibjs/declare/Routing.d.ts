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
	* @brief 消息处理器路由对象
	* @detail 路由对象是 http 消息处理的核心对象，服务器根据路由的设定，匹配 url 和 method，并将 http 消息转发到相应的处理器，以完成不同的事务。,,一个简单的路由，可以直接以 JSON 对象的形式提供，比如：,```JavaScript,var http = require('http');,,var svr = new http.Server(8080, {,    '/': r => r.response.write('home'),,    '/help': r => r.response.write('help'),});,,svr.run();,```,如果需要更复杂的路由定制，可以自行创建 Routing 对象并根据需要处理路由策略：,```JavaScript,var http = require('http');,var mq = require('mq');,,var app = new mq.Routing();,,app.get('/', r => r.response.write('home'));,app.get('/help', r => r.response.write('help'));,,app.post('/help', r => r.response.write('post a help.'));,,app.get('/home/:user', (r, user) => r.response.write('hello ' + user));,,app.get('/user/:id(\\d+)', (r, id) => r.response.write('get ' + id));,,app.get('/actions', {,    '/run': r => r.response.write('running'),,    '/sleep': r => r.response.write('sleeping'),,    '(.*)': r => r.response.write('........'),});,,var svr = new http.Server(8080, app);,svr.run();,```,路由对象根据设定的规则匹配消息，将消息传递给符合规则的第一个处理器。后加入的路由规则优先匹配。创建方法：,```JavaScript,var routing = new mq.Routing({,  "^/func1(/.*)$": func1,,  "^/func2(/.*)$": func2,});,```,正则表达式匹配的项目修改消息的 value 属性，子项目存入消息的 params 属性。例如：,```JavaScript,var routing = new mq.Routing({,  "^/func1(/([0-9]+)/([0-9]+)\.html)$": func1,,});,```,匹配消息 "/func1/123/456.html" 后，value == "/123/456.html"，params == ["123", "456"];,,如果匹配的结果没有子项，则 value 为空，params 为空。例如：,```JavaScript,var routing = new mq.Routing({,  "^/func1/[0-9]+/[0-9]+\.html$": func1,,});,```,匹配消息 "/func1/123/456.html" 后，value == ""，params == [];,,如果匹配的结果第一级有多个子项，则 value 为空，params 为第一级子项。例如：,```JavaScript,var routing = new mq.Routing({,  "^/func1/([0-9]+)/([0-9]+)\.html$": func1,,});,```,匹配消息 "/func1/123/456.html" 后，value == ""，params == ["123", "456"];,,如果匹配的结果只有一个子项，并且无下级子项，则 value 和 params 均为此子项。例如：,```JavaScript,var routing = new mq.Routing({,  "^/func1/([0-9]+)/[0-9]+\.html$": func1,,});,```,匹配消息 "/func1/123/456.html" 后，value == "123"，params == ["123"];
	*/
/// <reference path="Handler.d.ts" />
declare class Class_Routing extends Class_Handler {
	
	
	
	/**
	 * 
	 * @brief 创建一个消息处理器路由对象
	 * @param map 初始化路由参数
	 * 
	 * 
	 * 
	 */
	constructor(map?: object/** = v8::Object::New(isolate)*/);

	/**
	 * 
	 * @brief 创建一个消息处理器路由对象
	 * @param method 指定 http 请求方法，"*" 接受所有方法
	 * @param map 初始化路由参数
	 * 
	 * 
	 * 
	 */
	constructor(method: string, map: object);

	/**
	 * 
	 * @brief 从已有路由对象中添加规则，添加后原路由将被清空
	 * @param route 已经初始化的路由对象
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	append(route: Class_Routing): Class_Routing;

	/**
	 * 
	 * @brief 添加一组路由规则
	 * @param map 路由参数
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	append(map: object): Class_Routing;

	/**
	 * 
	 * @brief 添加一条路由规则
	 * @param pattern 消息匹配格式
	 * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	append(pattern: string, hdlr: Class_Handler): Class_Routing;

	/**
	 * 
	 * @brief 添加一条路由规则
	 * @param method 指定 http 请求方法，"*" 接受所有方法
	 * @param pattern 消息匹配格式
	 * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	append(method: string, pattern: string, hdlr: Class_Handler): Class_Routing;

	/**
	 * 
	 * @brief 添加一组接受所有 http 方法路由规则
	 * @param map 路由参数
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	all(map: object): Class_Routing;

	/**
	 * 
	 * @brief 添加一条接受所有 http 方法路由规则
	 * @param pattern 消息匹配格式
	 * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	all(pattern: string, hdlr: Class_Handler): Class_Routing;

	/**
	 * 
	 * @brief 添加一组 GET 方法路由规则
	 * @param map 路由参数
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	get(map: object): Class_Routing;

	/**
	 * 
	 * @brief 添加一条接受 http GET 方法路由规则
	 * @param pattern 消息匹配格式
	 * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	get(pattern: string, hdlr: Class_Handler): Class_Routing;

	/**
	 * 
	 * @brief 添加一组接受 http POST 方法路由规则
	 * @param map 路由参数
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	post(map: object): Class_Routing;

	/**
	 * 
	 * @brief 添加一条接受 http POST 方法路由规则
	 * @param pattern 消息匹配格式
	 * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	post(pattern: string, hdlr: Class_Handler): Class_Routing;

	/**
	 * 
	 * @brief 添加一组接受 http DELETE 方法路由规则
	 * @param map 路由参数
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	del(map: object): Class_Routing;

	/**
	 * 
	 * @brief 添加一条接受 http DELETE 方法路由规则
	 * @param pattern 消息匹配格式
	 * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	del(pattern: string, hdlr: Class_Handler): Class_Routing;

	/**
	 * 
	 * @brief 添加一组 PUT 方法路由规则
	 * @param map 路由参数
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	put(map: object): Class_Routing;

	/**
	 * 
	 * @brief 添加一条接受 http PUT 方法路由规则
	 * @param pattern 消息匹配格式
	 * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	put(pattern: string, hdlr: Class_Handler): Class_Routing;

	/**
	 * 
	 * @brief 添加一组 PATCH 方法路由规则
	 * @param map 路由参数
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	patch(map: object): Class_Routing;

	/**
	 * 
	 * @brief 添加一条接受 http PATCH 方法路由规则
	 * @param pattern 消息匹配格式
	 * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	patch(pattern: string, hdlr: Class_Handler): Class_Routing;

	/**
	 * 
	 * @brief 添加一组 FIND 方法路由规则
	 * @param map 路由参数
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	find(map: object): Class_Routing;

	/**
	 * 
	 * @brief 添加一条接受 http FIND 方法路由规则
	 * @param pattern 消息匹配格式
	 * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
	 * @return 返回路由对象本身
	 * 
	 * 
	 * 
	 */
	find(pattern: string, hdlr: Class_Handler): Class_Routing;

} /** endof class */

/** endof `module Or Internal Object` */


