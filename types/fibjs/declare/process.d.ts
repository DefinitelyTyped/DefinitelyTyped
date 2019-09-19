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
	* @brief 进程处理模块，用以管理当前进程的资源
	* @detail 引用方法：,```JavaScript,var process = require('process');,```,,## 进程事件,process 模块对象是 EventEmitter 的实例，可以通过注册事件监听器响应进程级别的事件。,,### beforeExit 事件,**当 fibjs 的任务已经为空，并且没有额外的工作被添加进来，事件 `beforeExit` 会被触发**,```JavaScript,process.on('beforeExit', exitCode => {});,```,正常情况下，如果没有额外的工作被添加到任务队列，fibjs 进程会结束。但是如果 `beforeExit` 事件绑定的监听器的回调函数中，启动了一个新的任务，比如开启一个 fiber，那么 fibjs 进程会继续运行。,,process.exitCode 作为唯一的参数值传递给 `beforeExit` 事件监听器的回调函数。如果进程由于显式的原因而将要终止，例如直接调用 process.exit 或抛出未捕获的异常，`beforeExit`事件不会被触发。,,### exit 事件,**当 fibjs 退出时，事件 `exit` 会被触发，一旦所有与 `exit` 事件绑定的监听器执行完成，进程会终止**,```JavaScript,process.on('exit', exitCode => {});,```,`exit` 事件监听器的回调函数，只有一个入参，这个参数的值可以是 process.exitCode 的属性值，或者是调用 process.exit 方法时传入的 `exitCode` 值。,,### Signal 事件,**当 fibjs 进程接收到一个信号时，会触发信号事件，目前支持的信号有 SIGINT 和 SIGTERM。每个事件名称，以信号名称的大写表示 (比如事件'SIGINT' 对应信号 SIGINT)。**,,信号事件不同于其它进程事件，信号事件是抢占的，当信号发生时，无论当前在 io 操作，还是 JavaScript 运算，都会尽快触发相应事件。比如你可以用下面的代码，中断当前应用，并输出运行状态：,```JavaScript,var coroutine = require('coroutine');,,process.on('SIGINT', () => {,   coroutine.fibers.forEach(f => console.error("Fiber %d:\n%s", f.id, f.stack));,   process.exit();,});,```,信号名称及其意义如下：,* SIGINT：在终端运行时，可以被所有平台支持，通常可以通过 CTRL+C 触发。,* SIGTERM：当进程被 kill 时触发此信号。Windows 下不支持。
	*/
declare module "process" {
	

	module process {
		
		
		/**
		 * 
		 * @brief 返回当前进程的命令行参数
		 * 
		 * 
		 */
		export const argv: any[];
		
		/**
		 * 
		 * @brief 返回当前进程的特殊命令行参数，这些参数被 fibjs 用于设置运行环境
		 * 
		 * 
		 */
		export const execArgv: any[];
		
		/**
		 * 
		 * @brief 返回 fibjs 版本字符串
		 * 
		 * 
		 */
		export const version: string;
		
		/**
		 * 
		 * @brief 返回 fibjs 及组件的版本信息
		 * 
		 * 
		 */
		export const versions: Object;
		
		/**
		 * 
		 * @brief 查询当前运行执行文件完整路径
		 * 
		 * 
		 */
		export const execPath: string;
		
		/**
		 * 
		 * @brief 查询当前进程的环境变量
		 * 
		 * 
		 */
		export const env: Object;
		
		/**
		 * 
		 * @brief 查询当前 cpu 环境，可能的结果为 'amd64', 'arm', 'arm64', 'ia32'
		 * 
		 * 
		 */
		export const arch: string;
		
		/**
		 * 
		 * @brief 查询当前平台名称，可能的结果为 'darwin', 'freebsd', 'linux', 或 'win32'
		 * 
		 * 
		 */
		export const platform: string;
		
		/**
		 * 
		 * @brief 查询当前进程标准输入对象
		 * 
		 * 
		 */
		export const stdin: Class_File;
		
		/**
		 * 
		 * @brief 查询当前进程标准输出对象
		 * 
		 * 
		 */
		export const stdout: Class_File;
		
		/**
		 * 
		 * @brief 查询当前进程标准错误输出对象
		 * 
		 * 
		 */
		export const stderr: Class_File;
		
		/**
		 * 
		 * @brief 查询和设置当前进程的退出码
		 * 
		 * 
		 */
		export const exitCode: number;
		
		
		
		
		/**
		 * 
		 * @brief 改变当前的 umask，Windows 不支持此方法
		 * @param mask 指定新的掩码
		 * @return 返回之前的 mask
		 * 
		 * 
		 * 
		 */
		export function umask(mask: number): number;
	
		/**
		 * 
		 * @brief 改变当前的 umask，Windows 不支持此方法
		 * @param mask 指定新的掩码， 字符串类型八进制(e.g: "0664")
		 * @return 返回之前的 mask
		 * 
		 * 
		 * 
		 */
		export function umask(mask: string): number;
	
		/**
		 * 
		 * @brief 返回当前的 umask，Windows 不支持此方法
		 * @return 返回当前的 mask 值
		 * 
		 * 
		 * 
		 */
		export function umask(): number;
	
		/**
		 * 
		 * @brief 返回系统高精度时间，此时间与当前时间无关，仅用于高精度计时
		 * @param diff 用于比较的初始时间
		 * @return 返回计时时间，格式为 [seconds, nanoseconds]
		 * 
		 * 
		 * 
		 */
		export function hrtime(diff?: any[]/** = v8::Array::New(isolate)*/): any[];
	
		/**
		 * 
		 * @brief 退出当前进程，并返回 exitCode 作为进程结果
		 * 
		 * 
		 */
		export function exit(): void;
	
		/**
		 * 
		 * @brief 退出当前进程，并返回结果
		 * @param code 返回进程结果
		 * 
		 * 
		 * 
		 */
		export function exit(code: number): void;
	
		/**
		 * 
		 * @brief 返回操作系统当前工作路径
		 * @return 返回当前系统路径
		 * 
		 * 
		 * 
		 */
		export function cwd(): string;
	
		/**
		 * 
		 * @brief 修改操作系统当前工作路径
		 * @param directory 指定设定的新路径
		 * 
		 * 
		 * 
		 */
		export function chdir(directory: string): void;
	
		/**
		 * 
		 * @brief 查询运行环境运行时间，以秒为单位
		 * @return 返回表示时间的数值
		 * 
		 * 
		 * 
		 */
		export function uptime(): number;
	
		/**
		 * 
		 * @brief 查询当前进程内存使用报告
		 * 
		 * 内存报告生成类似以下结果：
		 * ```JavaScript
		 * {
		 * "rss": 8622080,
		 * "heapTotal": 4083456,
		 * "heapUsed": 1621800
		 * }
		 * ```
		 * 其中：
		 * - rss 返回进程当前占用物理内存大小
		 * - heapTotal 返回 v8 引擎堆内存大小
		 * - heapUsed 返回 v8 引擎正在使用堆内存大小
		 * @return 返回包含内存报告
		 * 
		 * 
		 * 
		 */
		export function memoryUsage(): object;
	
		/**
		 * 
		 * @brief 启动一个纤程
		 * @param func 制定纤程执行的函数
		 * @param args 可变参数序列，此序列会在纤程内传递给函数
		 * 
		 * 
		 * 
		 */
		export function nextTick(func: Function, ...args: any[]): void;
	
		/**
		 * 
		 * @brief 运行指定的命令行，接管进程输入输出流，并返回进程对象
		 * 
		 * opts 支持的选项如下：
		 * ```JavaScript
		 * {
		 * "timeout": 100, // 单位为 ms
		 * "envs": [] // 进程环境变量
		 * }
		 * ```
		 * @param command 指定运行的命令行
		 * @param args 指定运行的参数列表
		 * @param opts 指定运行的选项
		 * @return 返回包含运行结果的进程对象
		 * 
		 * 
		 * 
		 */
		export function open(command: string, args: any[], opts?: object/** = v8::Object::New(isolate)*/): Class_SubProcess;
	
		/**
		 * 
		 * @brief 运行指定的命令行，接管进程输入输出流，并返回进程对象
		 * 
		 * opts 支持的选项如下：
		 * ```JavaScript
		 * {
		 * "timeout": 100, // 单位为 ms
		 * "envs": [] // 进程环境变量
		 * }
		 * ```
		 * @param command 指定运行的命令行
		 * @param opts 指定运行的选项
		 * @return 返回包含运行结果的进程对象
		 * 
		 * 
		 * 
		 */
		export function open(command: string, opts?: object/** = v8::Object::New(isolate)*/): Class_SubProcess;
	
		/**
		 * 
		 * @brief 运行指定的命令行，并返回进程对象
		 * 
		 * opts 支持的选项如下：
		 * ```JavaScript
		 * {
		 * "timeout": 100, // 单位为 ms
		 * "envs": [] // 进程环境变量
		 * }
		 * ```
		 * @param command 指定运行的命令行
		 * @param args 指定运行的参数列表
		 * @param opts 指定运行的选项
		 * @return 返回包含运行结果的进程对象
		 * 
		 * 
		 * 
		 */
		export function start(command: string, args: any[], opts?: object/** = v8::Object::New(isolate)*/): Class_SubProcess;
	
		/**
		 * 
		 * @brief 运行指定的命令行，并返回进程对象
		 * 
		 * opts 支持的选项如下：
		 * ```JavaScript
		 * {
		 * "timeout": 100, // 单位为 ms
		 * "envs": [] // 进程环境变量
		 * }
		 * ```
		 * @param command 指定运行的命令行
		 * @param opts 指定运行的选项
		 * @return 返回包含运行结果的进程对象
		 * 
		 * 
		 * 
		 */
		export function start(command: string, opts?: object/** = v8::Object::New(isolate)*/): Class_SubProcess;
	
		/**
		 * 
		 * @brief 运行指定的命令行，并返回进程的结束代码
		 * 
		 * opts 支持的选项如下：
		 * ```JavaScript
		 * {
		 * "timeout": 100, // 单位为 ms
		 * "envs": [] // 进程环境变量
		 * }
		 * ```
		 * @param command 指定运行的命令行
		 * @param args 指定运行的参数列表
		 * @param opts 指定运行的选项
		 * @return 返回命令的运行结果
		 * 
		 * 
		 * 
		 */
		export function run(command: string, args: any[], opts?: object/** = v8::Object::New(isolate)*/): number;
	
		/**
		 * 
		 * @brief 运行指定的命令行，并返回进程的结束代码
		 * 
		 * opts 支持的选项如下：
		 * ```JavaScript
		 * {
		 * "timeout": 100, // 单位为 ms
		 * "envs": [] // 进程环境变量
		 * }
		 * ```
		 * @param command 指定运行的命令行
		 * @param opts 指定运行的选项
		 * @return 返回命令的运行结果
		 * 
		 * 
		 * 
		 */
		export function run(command: string, opts?: object/** = v8::Object::New(isolate)*/): number;
	
	} /** end of `module process` */
	export = process
}

/** endof `module Or Internal Object` */


