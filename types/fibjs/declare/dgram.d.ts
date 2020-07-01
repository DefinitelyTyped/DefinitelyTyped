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
    * @brief dgram 模块提供了 UDP 数据包 socket 的实现
    * @detail 基础模块，引用方式：,```JavaScript,var dgram = require('dgram');,```
    */
declare module "dgram" {
    

    module dgram {
        
        
        
        /**
         * 
         * @brief dgram.Socket 对象是一个封装了数据包函数功能的 EventEmitter。参见 DgramSocket
         * dgram.Socket 实例是由 dgram.createSocket() 创建的。创建 dgram.Socket 实例不需要使用 new 关键字。
         * 
         * 
         * 
         */
        export class Socket extends Class_DgramSocket {}
        
        
        
        
        /**
         * 
         * @brief 创建一个 dgram.Socket 对象
         * 
         * opts 允许的选项是:
         * ```JavaScript
         * {
         * "type": "udp4" | "udp6",   // 必填
         * "reuseAddr": true | false, //若设置为 true，socket.bind() 则会重用地址，即时另一个进程已经在其上面绑定了一个套接字。 默认是 false
         * "recvBufferSize": ###,     // 设置 SO_RCVBUF 套接字值
         * "sendBufferSize": ###      //设置 SO_RCVBUF 套接字值
         * }
         * ```
         * @param opts
         * @return 返回创建的 Socket 对象
         * 
         * 
         * 
         */
        export function createSocket(opts: object): Class_DgramSocket;
    
        /**
         * 
         * @brief 创建一个 dgram.Socket 对象
         * 
         * opts 允许的选项是:
         * ```JavaScript
         * {
         * "type": "udp4" | "udp6",   // 必填
         * "reuseAddr": true | false, //若设置为 true，socket.bind() 则会重用地址，即时另一个进程已经在其上面绑定了一个套接字。 默认是 false
         * "recvBufferSize": ###,     // 设置 SO_RCVBUF 套接字值
         * "sendBufferSize": ###      //设置 SO_RCVBUF 套接字值
         * }
         * ```
         * @param opts
         * @param callback 为 'message' 事件添加一个监听器。
         * @return 返回创建的 Socket 对象
         * 
         * 
         * 
         */
        export function createSocket(opts: object, callback: Function): Class_DgramSocket;
    
        /**
         * 
         * @brief 创建一个 dgram.Socket 对象
         * @param type 套接字族，'udp4' 或 'udp6'。
         * @return 返回创建的 Socket 对象
         * 
         * 
         * 
         */
        export function createSocket(type: string): Class_DgramSocket;
    
        /**
         * 
         * @brief 创建一个 dgram.Socket 对象
         * @param type 套接字族，'udp4' 或 'udp6'。
         * @param callback 为 'message' 事件添加一个监听器。
         * @return 返回创建的 Socket 对象
         * 
         * 
         * 
         */
        export function createSocket(type: string, callback: Function): Class_DgramSocket;
    
    } /** end of `module dgram` */
    export = dgram
}

/** endof `module Or Internal Object` */


