/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *     build info:                                                               *
 *       - fibjs    : 0.25.0                                                   *
 *       - date    : Jun 12 2018 07:22:40                                     *
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
    * @brief 全局对象，所有脚本均可以访问的基础对象
    * @detail 
    */
declare module "global" {
    
    import consoleNS = require('console')
    import processNS = require('process')

    module global {
        
        
        /**
         * 
         * @brief Worker 宿主对象，仅在 Worker 入口脚本有效
         * 
         * 
         */
        export const Master: Class_Worker;
        
        /**
         * 
         * @brief 全局对象
         * 
         * 
         */
        export const global: Object;
        
        /**
         * 
         * @brief 获取当前脚本的运行参数，启动 js 获取进程启动参数，run 执行的脚本获取传递的参数
         * 
         * 
         */
        export const argv: any[];
        
        /**
         * 
         * @brief 当前脚本文件名
         * 
         * 
         */
        export const __filename: string;
        
        /**
         * 
         * @brief 当前脚本所在目录
         * 
         * 
         */
        export const __dirname: string;
        
        
        /**
         * 
         * @brief 二进制数据缓存对象，用于 io 读写的数据处理，参见 Buffer 对象。
         * 
         * 
         */
        export class Buffer extends Class_Buffer {}
        
        
        /**
         * 
         * @brief 64位整数对象，参见 Int64 对象。
         * 
         * 
         */
        export class Int64 extends Class_Int64 {}
        
        
        /**
         * 
         * @brief 控制台访问对象
         * 
         * 
         */
        
        export const console: typeof consoleNS
        
        /**
         * 
         * @brief 进程对象
         * 
         * 
         */
        
        export const process: typeof processNS
        
        
        
        /**
         * 
         * @brief 运行一个脚本
         * @param fname 指定要运行的脚本路径
         * @param argv 指定要运行的参数，此参数可在脚本内使用 argv 获取
         * 
         * 
         * 
         */
        export function run(fname: string, argv?: any[]/** = v8::Array::New(isolate)*/): void;
    
        /**
         * 
         * @brief 加载一个模块并返回模块对象，更多信息参阅 @ref module
         * 
         * require 可用于加载基础模块，文件模块。
         * 
         * 基础模块是沙箱创建时初始化的模块，引用时只需传递相应的 id，比如 require("net")。
         * 
         * 文件模块是用户自定义模块，引用时需传递以 ./ 或 ../ 开头的相对路径。文件模块支持 .js, .jsc 和 .json 文件。
         * 
         * 文件模块也支持 package.json 格式，当模块为目录结构时，require 会先查询 package.json 中的 main，未发现则尝试加载路径下的 index.js, index.jsc 或 index.json。
         * 
         * 若引用路径不是 ./ 或 ../ 开头，并且非基础模块，require 从当前模块所在路径下的 node_modules 查找，并上级目录递归。
         * 
         * 基础流程如下:
         * 
         * ```dot
         * digraph{
         * node [fontname = "Helvetica,sans-Serif", fontsize = 10];
         * edge [fontname = "Helvetica,sans-Serif", fontsize = 10];
         * 
         * start [label="起始"];
         * resolve [label="path.resolve" shape="rect"];
         * search [label="从当前路径\n向上递归查找\nnode_modules" shape="rect"];
         * load [label="加载" shape="rect"];
         * end [label="返回" shape="doublecircle"];
         * 
         * is_native [label="内置模块?" shape="diamond"];
         * is_mod [label="模块?" shape="diamond"];
         * is_abs [label="绝对路径？" shape="diamond"];
         * has_file [label="原名存在？" shape="diamond"];
         * has_ext [label="增加 .js 存在？" shape="diamond"];
         * has_package [label="/package.json\n存在？" shape="diamond"];
         * has_main [label="main 存在？" shape="diamond"];
         * has_index [label="index.js 存在？" shape="diamond"];
         * 
         * start -> is_native;
         * is_native -> end [label="是"];
         * is_native -> is_mod [label="否"];
         * is_mod -> search [label="是"];
         * search -> has_file;
         * is_mod -> is_abs [label="否"];
         * is_abs -> has_file [label="是"];
         * is_abs -> resolve [label="否"];
         * resolve -> has_file;
         * has_file -> load [label="是"];
         * has_file -> has_ext [label="否"];
         * has_ext -> load [label="是"];
         * has_ext -> has_package [label="否"];
         * has_package -> has_main [label="是"];
         * has_package -> has_index [label="否"];
         * has_main -> load [label="是"];
         * has_main -> has_index [label="否"];
         * has_index -> load [label="是"];
         * has_index -> end [label="否"];
         * load -> end;
         * }
         * ```
         * 
         * @param id 指定要加载的模块名称
         * @return 返回加载模块的引出对象
         * 
         * 
         * 
         */
        export function require(id: string): any;
    
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
         * @brief 强制要求进行垃圾回收
         * 
         * 
         */
        export function GC(): void;
    
        /**
         * 
         * @brief 进入交互模式，可以交互执行内部命令和代码，仅在启动 js 可以引用
         * 
         * 参数 cmd 格式如下：
         * ```JavaScript
         * [
         * {
         * cmd: ".test",
         * help: "this is a test",
         * exec: function(argv) {
         * console.log(argv);
         * }
         * },
         * {
         * cmd: ".test1",
         * help: "this is an other test",
         * exec: function(argv) {
         * console.log(argv);
         * }
         * }
         * ]
         * ```
         * @param cmds 补充命令
         * 
         * 
         * 
         */
        export function repl(cmds?: any[]/** = v8::Array::New(isolate)*/): void;
    
        /**
         * 
         * @brief 进入交互模式，可以交互执行内部命令和代码，仅在启动 js 可以引用
         * 
         * 同一时刻只允许一个 Stream repl，新建一个 Stream repl 时，前一个 repl 将被关闭。
         * 
         * 参数 cmd 格式如下：
         * ```JavaScript
         * [
         * {
         * cmd: ".test",
         * help: "this is a test",
         * exec: function(argv) {
         * console.log(argv);
         * }
         * },
         * {
         * cmd: ".test1",
         * help: "this is an other test",
         * exec: function(argv) {
         * console.log(argv);
         * }
         * }
         * ]
         * ```
         * @param out 输入输出流对象，通常为网络连接
         * @param cmds 补充命令
         * 
         * 
         * 
         */
        export function repl(out: Class_Stream, cmds?: any[]/** = v8::Array::New(isolate)*/): void;
    
    } /** end of `module global` */
    export = global
}

/** endof `module Or Internal Object` */


