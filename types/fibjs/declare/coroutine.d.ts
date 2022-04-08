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
    * @brief 并发控制模块
    * @detail 引用方法：,```JavaScript,var coroutine = require('coroutine');,```
    */
declare module "coroutine" {
    

    module coroutine {
        
        
        /**
         * 
         * @brief 返回当前正在运行的全部 fiber 数组
         * 
         * 
         */
        export const fibers: any[];
        
        /**
         * 
         * @brief 查询和设置空闲 Fiber 数量，服务器抖动较大时可适度增加空闲 Fiber 数量。缺省为 256
         * 
         * 
         */
        export const spareFibers: number;
        
        /**
         * 
         * @brief 查询当前 vm 编号
         * 
         * 
         */
        export const vmid: number;
        
        /**
         * 
         * @brief 修改和查询本 vm 的输出级别，用以过滤输出信息，缺省为 console.NOTSET，全部输出
         * 
         * 
         * 
         */
        export const loglevel: number;
        
        
        /**
         * 
         * @brief 锁对象，参见 Lock
         * 
         * 
         */
        export class Lock extends Class_Lock {}
        
        
        /**
         * 
         * @brief 信号量对象，参见 Semaphore
         * 
         * 
         */
        export class Semaphore extends Class_Semaphore {}
        
        
        /**
         * 
         * @brief 条件变量对象，参见 Condition
         * 
         * 
         */
        export class Condition extends Class_Condition {}
        
        
        /**
         * 
         * @brief 事件对象，参见 Event
         * 
         * 
         */
        export class Event extends Class_Event {}
        
        
        /**
         * 
         * @brief 独立线程工作对象，参见 Worker
         * 
         * 
         */
        export class Worker extends Class_Worker {}
        
        
        
        
        /**
         * 
         * @brief 启动一个纤程并返回纤程对象
         * @param func 制定纤程执行的函数
         * @param args 可变参数序列，此序列会在纤程内传递给函数
         * @return 返回纤程对象
         * 
         * 
         * 
         */
        export function start(func: Function, ...args: any[]): Class_Fiber;
    
        /**
         * 
         * @brief 并行执行一组函数，并等待返回
         * @param funcs 并行执行的函数数组
         * @param fibers 限制并发 fiber 数量，缺省为 -1，启用与 funcs 数量相同 fiber
         * @return 返回函数执行结果的数组
         * 
         * 
         * 
         */
        export function parallel(funcs: any[], fibers?: number/** = -1*/): any[];
    
        /**
         * 
         * @brief 并行执行一个函数处理一组数据，并等待返回
         * @param datas 并行执行的数据数组
         * @param func 并行执行的函数
         * @param fibers 限制并发 fiber 数量，缺省为 -1，启用与 datas 数量相同 fiber
         * @return 返回函数执行结果的数组
         * 
         * 
         * 
         */
        export function parallel(datas: any[], func: Function, fibers?: number/** = -1*/): any[];
    
        /**
         * 
         * @brief 并行执行一个函数多次，并等待返回
         * @param func 并行执行的函数数
         * @param num 重复任务数量
         * @param fibers 限制并发 fiber 数量，缺省为 -1，启用与 funcs 数量相同 fiber
         * @return 返回函数执行结果的数组
         * 
         * 
         * 
         */
        export function parallel(func: Function, num: number, fibers?: number/** = -1*/): any[];
    
        /**
         * 
         * @brief 并行执行一组函数，并等待返回
         * @param funcs 一组并行执行的函数
         * @return 返回函数执行结果的数组
         * 
         * 
         * 
         */
        export function parallel(...funcs: any[]): any[];
    
        /**
         * 
         * @brief 返回当前纤程
         * @return 当前纤程对象
         * 
         * 
         * 
         */
        export function current(): Class_Fiber;
    
        /**
         * 
         * @brief 暂停当前纤程指定的时间
         * @param ms 指定要暂停的时间，以毫秒为单位，缺省为 0，即有空闲立即回恢复运行
         * 
         * 
         * @async
         */
        export function sleep(ms?: number/** = 0*/): void;
    
    } /** end of `module coroutine` */
    export = coroutine
}

/** endof `module Or Internal Object` */


