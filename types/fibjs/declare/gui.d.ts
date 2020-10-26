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
    * @brief gui 模块
    * @detail 使用方法：,```JavaScript,var gui = require('gui');,```
    */
declare module "gui" {
    

    module gui {
        
        /**
         * 
         * @brief WebView ie 模拟版本，指定 ie7
         * 
         * 
         */
        export const IE7 = 7000;
        
        /**
         * 
         * @brief WebView ie 模拟版本，指定 ie8
         * 
         * 
         */
        export const IE8 = 8000;
        
        /**
         * 
         * @brief WebView ie 模拟版本，指定 ie9
         * 
         * 
         */
        export const IE9 = 9000;
        
        /**
         * 
         * @brief WebView ie 模拟版本，指定 ie10
         * 
         * 
         */
        export const IE10 = 10000;
        
        /**
         * 
         * @brief WebView ie 模拟版本，指定 ie11
         * 
         * 
         */
        export const IE11 = 11000;
        
        /**
         * 
         * @brief WebView ie 模拟版本，指定 edge
         * 
         * 
         */
        export const EDGE = 11001;
        
        
        
        
        
        /**
         * 
         * 设置 WebView 内 ie 最高模拟版本，当系统 ie 版本低于此版本时，将模拟系统安装版本
         * @param ver 指定 ie 模拟版本
         * 
         * 
         * 
         */
        export function setVersion(ver: number): void;
    
        /**
         * 
         * @brief 打开一个窗口并访问指定网址
         * 
         * 支持以下参数:
         * ```JavaScript
         * {
         * "left": 100, // 窗口左上角 x，缺省系统自动设定
         * "right": 100, // 窗口左上角 y，缺省系统自动设定
         * "width": 100, // 窗口宽度，缺省系统自动设定
         * "height": 100, // 窗口高度，缺省系统自动设定
         * "border": true, // 是否有边框，缺省有边框
         * "caption": true, // 是否有标题栏，缺省有标题栏
         * "resizable": true, // 是否可改变尺寸，缺省可以改变
         * "maximize": false, // 是否最大化显示，缺省不最大化
         * "visible": true, // 是否显示，缺省显示
         * "debug": true // 是否输出 WebView 内的错误和 console 信息，缺省显示
         * }
         * ```
         * 当设定 width 和 height，而未设定 left 或 right 时，窗口将自动居中
         * @param url 指定的网址，，可以使用 fs:path 访问本地文件系统
         * @param opt 打开窗口参数
         * @return 返回打开的窗口对象
         * 
         * 
         * 
         */
        export function open(url: string, opt?: object/** = v8::Object::New(isolate)*/): Class_WebView;
    
    } /** end of `module gui` */
    export = gui
}

/** endof `module Or Internal Object` */


