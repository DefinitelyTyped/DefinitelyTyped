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





/// <reference path="Buffer.d.ts" />

/// <reference path="BufferedStream.d.ts" />

/// <reference path="Chain.d.ts" />

/// <reference path="Cipher.d.ts" />

/// <reference path="Condition.d.ts" />

/// <reference path="DbConnection.d.ts" />

/// <reference path="DgramSocket.d.ts" />

/// <reference path="Digest.d.ts" />

/// <reference path="Event.d.ts" />

/// <reference path="EventEmitter.d.ts" />

/// <reference path="EventInfo.d.ts" />

/// <reference path="Fiber.d.ts" />

/// <reference path="File.d.ts" />

/// <reference path="Handler.d.ts" />

/// <reference path="HandlerEx.d.ts" />

/// <reference path="HeapGraphEdge.d.ts" />

/// <reference path="HeapGraphNode.d.ts" />

/// <reference path="HeapSnapshot.d.ts" />

/// <reference path="HttpClient.d.ts" />

/// <reference path="HttpCollection.d.ts" />

/// <reference path="HttpCookie.d.ts" />

/// <reference path="HttpHandler.d.ts" />

/// <reference path="HttpMessage.d.ts" />

/// <reference path="HttpRequest.d.ts" />

/// <reference path="HttpResponse.d.ts" />

/// <reference path="HttpServer.d.ts" />

/// <reference path="HttpUploadData.d.ts" />

/// <reference path="HttpsServer.d.ts" />

/// <reference path="Image.d.ts" />

/// <reference path="Int64.d.ts" />

/// <reference path="LevelDB.d.ts" />

/// <reference path="Lock.d.ts" />

/// <reference path="LruCache.d.ts" />

/// <reference path="MSSQL.d.ts" />

/// <reference path="MemoryStream.d.ts" />

/// <reference path="Message.d.ts" />

/// <reference path="MongoCollection.d.ts" />

/// <reference path="MongoCursor.d.ts" />

/// <reference path="MongoDB.d.ts" />

/// <reference path="MongoID.d.ts" />

/// <reference path="MySQL.d.ts" />

/// <reference path="PKey.d.ts" />

/// <reference path="Redis.d.ts" />

/// <reference path="RedisHash.d.ts" />

/// <reference path="RedisList.d.ts" />

/// <reference path="RedisSet.d.ts" />

/// <reference path="RedisSortedSet.d.ts" />

/// <reference path="Routing.d.ts" />

/// <reference path="SQLite.d.ts" />

/// <reference path="SandBox.d.ts" />

/// <reference path="SeekableStream.d.ts" />

/// <reference path="Semaphore.d.ts" />

/// <reference path="Service.d.ts" />

/// <reference path="Smtp.d.ts" />

/// <reference path="Socket.d.ts" />

/// <reference path="SslHandler.d.ts" />

/// <reference path="SslServer.d.ts" />

/// <reference path="SslSocket.d.ts" />

/// <reference path="Stat.d.ts" />

/// <reference path="Stats.d.ts" />

/// <reference path="Stream.d.ts" />

/// <reference path="StringDecoder.d.ts" />

/// <reference path="SubProcess.d.ts" />

/// <reference path="TcpServer.d.ts" />

/// <reference path="Timer.d.ts" />

/// <reference path="UrlObject.d.ts" />

/// <reference path="WebSocket.d.ts" />

/// <reference path="WebSocketMessage.d.ts" />

/// <reference path="WebView.d.ts" />

/// <reference path="Worker.d.ts" />

/// <reference path="X509Cert.d.ts" />

/// <reference path="X509Crl.d.ts" />

/// <reference path="X509Req.d.ts" />

/// <reference path="XmlAttr.d.ts" />

/// <reference path="XmlCDATASection.d.ts" />

/// <reference path="XmlCharacterData.d.ts" />

/// <reference path="XmlComment.d.ts" />

/// <reference path="XmlDocument.d.ts" />

/// <reference path="XmlDocumentType.d.ts" />

/// <reference path="XmlElement.d.ts" />

/// <reference path="XmlNamedNodeMap.d.ts" />

/// <reference path="XmlNode.d.ts" />

/// <reference path="XmlNodeList.d.ts" />

/// <reference path="XmlProcessingInstruction.d.ts" />

/// <reference path="XmlText.d.ts" />

/// <reference path="ZipFile.d.ts" />

/// <reference path="ZmqSocket.d.ts" />

/// <reference path="object.d.ts" />



/** module Or Internal Object */
/**
	* @brief 断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出
	* @detail 引用方法：,```JavaScript,var assert = require('assert');,```,或者通过 test 模块引用：,```JavaScript,var test = require('test');,var assert = test.assert;,```,或者通过 test.setup 配置：,```JavaScript,require("test").setup();,```
	*/
declare module "assert" {
	

	module assert {
		
		
		
		
		
		/**
		 * 
		 * @brief 测试数值为真，为假则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function Function(actual?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值为真，为假则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function ok(actual?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值为假，为真则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function notOk(actual?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值等于预期值，不相等则断言失败
		 * @param actual 要测试的数值
		 * @param expected 预期的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function equal(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不等于预期值，相等则断言失败
		 * @param actual 要测试的数值
		 * @param expected 预期的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function notEqual(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值严格等于预期值，不相等则断言失败
		 * @param actual 要测试的数值
		 * @param expected 预期的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function strictEqual(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不严格等于预期值，相等则断言失败
		 * @param actual 要测试的数值
		 * @param expected 预期的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function notStrictEqual(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值深度等于预期值，不相等则断言失败
		 * @param actual 要测试的数值
		 * @param expected 预期的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function deepEqual(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不深度等于预期值，相等则断言失败
		 * @param actual 要测试的数值
		 * @param expected 预期的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function notDeepEqual(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值近似等于预期值，否则断言失败
		 * @param actual 要测试的数值
		 * @param expected 预期的数值
		 * @param delta 近似的小数精度
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function closeTo(actual: any, expected: any, delta: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不近似等于预期值，否则断言失败
		 * @param actual 要测试的数值
		 * @param expected 预期的数值
		 * @param delta 近似的小数精度
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function notCloseTo(actual: any, expected: any, delta: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值小于预期值，大于或等于则断言失败
		 * @param actual 要测试的数值
		 * @param expected 预期的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function lessThan(actual: any, expected: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不小于预期值，小于则断言失败
		 * @param actual 要测试的数值
		 * @param expected 预期的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function notLessThan(actual: any, expected: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值大于预期值，小于或等于则断言失败
		 * @param actual 要测试的数值
		 * @param expected 预期的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function greaterThan(actual: any, expected: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不大于预期值，大于则断言失败
		 * @param actual 要测试的数值
		 * @param expected 预期的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function notGreaterThan(actual: any, expected: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试变量存在，为假则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function exist(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试变量不存在，为真则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function notExist(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值为布尔值真，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isTrue(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不为布尔值真，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isNotTrue(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值为布尔值假，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isFalse(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不为布尔值假，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isNotFalse(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值为 Null，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isNull(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不为 Null，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isNotNull(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值为 undefined，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isUndefined(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不为 undefined，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isDefined(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值为函数，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isFunction(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不为函数，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isNotFunction(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值为对象，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isObject(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不为对象，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isNotObject(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值为数组，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isArray(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不为数组，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isNotArray(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值为字符串，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isString(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不为字符串，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isNotString(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值为数字，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isNumber(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不为数字，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isNotNumber(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值为布尔，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isBoolean(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不为布尔，否则断言失败
		 * @param actual 要测试的数值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function isNotBoolean(actual: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值为给定类型，否则断言失败
		 * @param actual 要测试的数值
		 * @param type 指定的类型
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function typeOf(actual: any, type: string, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试数值不为给定类型，否则断言失败
		 * @param actual 要测试的数值
		 * @param type 指定的类型
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function notTypeOf(actual: any, type: string, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试对象中包含指定属性，否则断言失败
		 * @param object 要测试的对象
		 * @param prop 要测试的属性
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function property(object: any, prop: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试对象中不包含指定属性，否则断言失败
		 * @param object 要测试的对象
		 * @param prop 要测试的属性
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function notProperty(object: any, prop: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 深度测试对象中包含指定属性，否则断言失败
		 * @param object 要测试的对象
		 * @param prop 要测试的属性，以“.”分割
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function deepProperty(object: any, prop: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 深度测试对象中不包含指定属性，否则断言失败
		 * @param object 要测试的对象
		 * @param prop 要测试的属性，以“.”分割
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function notDeepProperty(object: any, prop: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试对象中指定属性的值为给定值，否则断言失败
		 * @param object 要测试的对象
		 * @param prop 要测试的属性
		 * @param value 给定的值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function propertyVal(object: any, prop: any, value: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试对象中指定属性的值不为给定值，否则断言失败
		 * @param object 要测试的对象
		 * @param prop 要测试的属性
		 * @param value 给定的值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function propertyNotVal(object: any, prop: any, value: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 深度测试对象中指定属性的值为给定值，否则断言失败
		 * @param object 要测试的对象
		 * @param prop 要测试的属性，以“.”分割
		 * @param value 给定的值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function deepPropertyVal(object: any, prop: any, value: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 深度测试对象中指定属性的值不为给定值，否则断言失败
		 * @param object 要测试的对象
		 * @param prop 要测试的属性，以“.”分割
		 * @param value 给定的值
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function deepPropertyNotVal(object: any, prop: any, value: any, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试给定的代码会抛出错误，未抛出则断言失败
		 * @param block 指定测试的代码，以函数形式给出
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function throws(block: Function, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 测试给定的代码不会抛出错误，抛出则断言失败
		 * @param block 指定测试的代码，以函数形式给出
		 * @param msg 断言失败时的提示信息
		 * 
		 * 
		 * 
		 */
		export function doesNotThrow(block: Function, msg?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief 如果参数为真，则抛出
		 * @param object 参数
		 * 
		 * 
		 * 
		 */
		export function ifError(object?: any/** = v8::Undefined(isolate)*/): void;
	
	} /** end of `module assert` */
	export = assert
}

/** endof `module Or Internal Object` */


