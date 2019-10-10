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
	* @brief timers 模块
	* @detail 
	*/
declare module "timers" {
	

	module timers {
		
		
		
		
		
		/**
		 * 
		 * @brief 在指定的时间后调用函数
		 * @param callback 指定回调函数
		 * @param timeout 指定延时的时间，以毫秒为单位。超过 2^31 的话,立即执行。
		 * @param args 额外的参数，传入到指定的 callback 内，可选。
		 * @return 返回定时器对象
		 * 
		 * 
		 * 
		 */
		export function setTimeout(callback: Function, timeout?: number/** = 1*/, ...args: any[]): Class_Timer;
	
		/**
		 * 
		 * @brief 清除指定的定时器
		 * @param t 指定要清除的定时器
		 * 
		 * 
		 * 
		 */
		export function clearTimeout(t: any): void;
	
		/**
		 * 
		 * @brief 每间隔指定的时间后调用函数
		 * @param callback 指定回调函数
		 * @param timeout 指定间隔的时间，以毫秒为单位。超过 2^31 的话,立即执行。
		 * @param args 额外的参数，传入到指定的 callback 内，可选。
		 * @return 返回定时器对象
		 * 
		 * 
		 * 
		 */
		export function setInterval(callback: Function, timeout: number, ...args: any[]): Class_Timer;
	
		/**
		 * 
		 * @brief 清除指定的定时器
		 * @param t 指定要清除的定时器
		 * 
		 * 
		 * 
		 */
		export function clearInterval(t: any): void;
	
		/**
		 * 
		 * @brief 每间隔指定的时间后调用函数，这是个高精度定时器，会主动打断正在运行的 JavaScript 脚本执行定时器
		 * 由于 setHrInterval 的定时器会中断正在运行的代码执行回调，因此不要在回调函数内修改可能影响其它模块的数据，或者在回调中调用任何标记为 async 的 api 函数，否则将会产生不可预知的结果。例如：
		 * ```JavaScript
		 * var timers = require('timers');
		 * 
		 * var cnt = 0;
		 * timers.setHrInterval(() => {
		 * cnt++;
		 * }, 100);
		 * 
		 * while (cnt < 10);
		 * 
		 * console.error("===============================> done");
		 * ```
		 * 这段代码中，第 8 行的循环并不会因为 cnt 的改变而结束，因为 JavaScript 在优化代码时会认定在这个循环过程中 cnt 不会被改变。
		 * @param callback 指定回调函数
		 * @param timeout 指定间隔的时间，以毫秒为单位。超过 2^31 的话,立即执行。
		 * @param args 额外的参数，传入到指定的 callback 内，可选。
		 * @return 返回定时器对象
		 * 
		 * 
		 * 
		 */
		export function setHrInterval(callback: Function, timeout: number, ...args: any[]): Class_Timer;
	
		/**
		 * 
		 * @brief 清除指定的定时器
		 * @param t 指定要清除的定时器
		 * 
		 * 
		 * 
		 */
		export function clearHrInterval(t: any): void;
	
		/**
		 * 
		 * @brief 下一个空闲时间立即执行回调函数
		 * @param callback 指定回调函数
		 * @param args 额外的参数，传入到指定的 callback 内，可选。
		 * @return 返回定时器对象
		 * 
		 * 
		 * 
		 */
		export function setImmediate(callback: Function, ...args: any[]): Class_Timer;
	
		/**
		 * 
		 * @brief 清除指定的定时器
		 * @param t 指定要清除的定时器
		 * 
		 * 
		 * 
		 */
		export function clearImmediate(t: any): void;
	
		/**
		 * 
		 * @brief 调用给定的函数，并在超时时间到期时中断函数运行
		 * @param func 指定要运行的函数
		 * @param timeout 指定超时时间
		 * @param args 额外的参数，传入到指定的 callback 内，可选。
		 * @return 返回 func 的运行结果
		 * 
		 * 
		 * 
		 */
		export function call(func: Function, timeout: number, ...args: any[]): any;
	
	} /** end of `module timers` */
	export = timers
}

/** endof `module Or Internal Object` */


