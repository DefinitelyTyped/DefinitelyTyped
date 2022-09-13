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
    * @brief 消息队列模块
    * @detail 
    */
declare module "mq" {
    

    module mq {
        
        
        
        /**
         * 
         * @brief 创建一个消息对象，参见 Message
         * 
         * 
         */
        export class Message extends Class_Message {}
        
        
        /**
         * 
         * @brief 创建一个 http 协议处理器对象，参见 HttpHandler
         * 
         * 
         */
        export class HttpHandler extends Class_HttpHandler {}
        
        
        /**
         * 
         * @brief 创建一个消息处理器对象，传递值内置处理器则直接返回
         * 
         * hdlr 接受内置消息处理器，处理函数，链式处理数组，路由对象：
         * - Function javascript 函数，将使用此函数进行处理
         * - Handler 内置处理器，将使用此处理器进行处理
         * - 链式处理数组，等同于返回 new mq.Chain(hdlr)，参见 Chain
         * - 路由对象，等同于返回 new mq.Routing(hdlr)，参见 Routing
         * 
         * 消息处理函数语法如下：
         * ```JavaScript
         * function func(v){
         * }
         * ```
         * 参数 v 为正在处理的消息，返回结果允许有四种:
         * - Function javascript 函数，将使用此函数进行下一阶段处理
         * - Handler 内置处理器，将使用此处理器进行下一阶段处理
         * - 链式处理数组，等同于 new mq.Chain(v)，参见 Chain
         * - 路由对象，等同于 new mq.Routing(v)，参见 Routing
         * 
         * 无返回或者其他的返回结果将结束消息处理。
         * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象
         * @return 返回封装了处理函数的处理器
         * 
         * 
         * 
         */
        export class Handler extends Class_Handler {}
        
        
        /**
         * 
         * @brief 创建一个消息处理器链处理对象，参见 Chain
         * 
         * 
         */
        export class Chain extends Class_Chain {}
        
        
        /**
         * 
         * @brief 创建一个消息处理器路由对象，参见 Routing
         * 
         * 
         */
        export class Routing extends Class_Routing {}
        
        
        
        
        /**
         * 
         * @brief 创建一个空处理器对象，次处理对象不做任何处理直接返回
         * @return 返回空处理函数
         * 
         * 
         * 
         */
        export function nullHandler(): Class_Handler;
    
        /**
         * 
         * @brief 使用给定的处理器处理一个消息或对象
         * 
         * 不同于处理器的 invoke 方法，此方法将循环调用每个处理器的返回处理器，直到处理器返回 null 为止。
         * @param hdlr 指定使用的处理器
         * @param v 指定要处理的消息或对象
         * 
         * 
         * @async
         */
        export function invoke(hdlr: Class_Handler, v: Class__object): void;
    
    } /** end of `module mq` */
    export = mq
}

/** endof `module Or Internal Object` */


