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
	* @brief 内存 profiler 模块
	* @detail 使用方法：,```JavaScript,var profiler = require('profiler');,```
	*/
declare module "profiler" {
	

	module profiler {
		
		/**
		 * 
		 * @brief 隐藏节点，当显示给用户时可以被过滤掉
		 * 
		 * 
		 */
		export const Node_Hidden = 0;
		
		/**
		 * 
		 * @brief 数组
		 * 
		 * 
		 */
		export const Node_Array = 1;
		
		/**
		 * 
		 * @brief 字符串
		 * 
		 * 
		 */
		export const Node_String = 2;
		
		/**
		 * 
		 * @brief JS对象（字符串和数组除外）
		 * 
		 * 
		 */
		export const Node_Object = 3;
		
		/**
		 * 
		 * @brief 编译后的代码
		 * 
		 * 
		 */
		export const Node_Code = 4;
		
		/**
		 * 
		 * @brief 函数闭包
		 * 
		 * 
		 */
		export const Node_Closure = 5;
		
		/**
		 * 
		 * @brief 正则表达式
		 * 
		 * 
		 */
		export const Node_RegExp = 6;
		
		/**
		 * 
		 * @brief 堆中排好序的数字
		 * 
		 * 
		 */
		export const Node_HeapNumber = 7;
		
		/**
		 * 
		 * @brief Native对象（非v8堆上的）
		 * 
		 * 
		 */
		export const Node_Native = 8;
		
		/**
		 * 
		 * @brief Synthetic对象
		 * 
		 * 
		 */
		export const Node_Synthetic = 9;
		
		/**
		 * 
		 * @brief 拼接的字符串
		 * 
		 * 
		 */
		export const Node_ConsString = 10;
		
		/**
		 * 
		 * @brief 分割的字符串
		 * 
		 * 
		 */
		export const Node_SlicedString = 11;
		
		/**
		 * 
		 * @brief 符号（ES6）
		 * 
		 * 
		 */
		export const Node_Symbol = 12;
		
		/**
		 * 
		 * @brief 堆中排好序的SIMD值(ES7)
		 * 
		 * 
		 */
		export const Node_SimdValue = 13;
		
		/**
		 * 
		 * @brief 函数中的变量
		 * 
		 * 
		 */
		export const Edge_ContextVariable = 0;
		
		/**
		 * 
		 * @brief 数组中的元素
		 * 
		 * 
		 */
		export const Edge_Element = 1;
		
		/**
		 * 
		 * @brief 有名对象的属性
		 * 
		 * 
		 */
		export const Edge_Property = 2;
		
		/**
		 * 
		 * @brief JS无法进入的链接
		 * 
		 * 
		 */
		export const Edge_Internal = 3;
		
		/**
		 * 
		 * @brief 指向需要事先计算出空间大小的节点
		 * 
		 * 
		 */
		export const Edge_Hidden = 4;
		
		/**
		 * 
		 * @brief 指向无法事先计算出空间大小的节点
		 * 
		 * 
		 */
		export const Edge_Shortcut = 5;
		
		/**
		 * 
		 * @brief 一个弱引用（被GC忽视）
		 * 
		 * 
		 */
		export const Edge_Weak = 6;
		
		
		
		
		
		/**
		 * 
		 * @brief 根据指定名称保存一个堆快照
		 * @param fname 堆快照名称
		 * 
		 * 
		 * 
		 */
		export function saveSnapshot(fname: string): void;
	
		/**
		 * 
		 * @brief 根据指定名称读取一个堆快照
		 * @param fname 堆快照名称
		 * @return 返回读取到的堆快照
		 * 
		 * 
		 * 
		 */
		export function loadSnapshot(fname: string): Class_HeapSnapshot;
	
		/**
		 * 
		 * @brief 获取当前时间节点的堆快照，堆快照记录了当前时刻JS堆的状态
		 * @return 返回获取到的堆信息快照
		 * 
		 * 
		 * 
		 */
		export function takeSnapshot(): Class_HeapSnapshot;
	
		/**
		 * 
		 * @brief 执行给定的函数，并对比执行前后 v8 堆的变化
		 * @param test 给定要测试的函数
		 * @return 返回对比的结果
		 * 
		 * 
		 * 
		 */
		export function diff(test: Function): object;
	
		/**
		 * 
		 * @brief 启动一次运行状态采样日志
		 * @param fname 给定日志存储文件名
		 * @param time 指定采样时间，缺省 1 分钟
		 * @param interval 指定间隔时间，缺省 100 毫秒
		 * @return 返回采样定时器，可以通过 clear 方法提前停止采样
		 * 
		 * 
		 * 
		 */
		export function start(fname: string, time?: number/** = 60000*/, interval?: number/** = 100*/): Class_Timer;
	
	} /** end of `module profiler` */
	export = profiler
}

/** endof `module Or Internal Object` */


