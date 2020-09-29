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
    * @brief 文件路径处理模块
    * @detail 引用方法：,```JavaScript,var path = require('path').win32;,```
    */
declare module "path_win32" {
    

    module path_win32 {
        
        
        /**
         * 
         * @brief 查询当前操作系统的路径分割字符，posix 返回 '/', windows 返回  '\\'
         * 
         * 
         * 
         */
        export const sep: string;
        
        /**
         * 
         * @brief 查询当前操作系统的多路径组合字符，posix 返回 ':', windows 返回  ';'
         * 
         * 
         * 
         */
        export const delimiter: string;
        
        /**
         * 
         * @brief posix 实现，参见 path_posix
         * 
         * 
         * 
         */
        export const posix: Object;
        
        /**
         * 
         * @brief windows 实现，参见 path_win32
         * 
         * 
         * 
         */
        export const win32: Object;
        
        
        
        
        /**
         * 
         * @brief 标准化路径，处理路径中父目录等信息
         * 
         * @param path 给定的未处理的路径
         * @return 返回经过处理的路径
         * 
         * 
         * 
         */
        export function normalize(path: string): string;
    
        /**
         * 
         * @brief 查询路径中的文件名称，若指定扩展名，则自动取消匹配的扩展名
         * 
         * @param path 给定查询的路径
         * @param ext 指定扩展名，若文件名中有符合条件的扩展名，将自动取消
         * @return 返回文件名称
         * 
         * 
         * 
         */
        export function basename(path: string, ext?: string/** = ""*/): string;
    
        /**
         * 
         * @brief 查询路径中的文件扩展名
         * 
         * @param path 给定查询的路径
         * @return 返回得到的扩展名
         * 
         * 
         * 
         */
        export function extname(path: string): string;
    
        /**
         * 
         * @brief 查询路径中的目录路径
         * 
         * @param path 给定查询的路径
         * @return 返回得到的目录的路径
         * 
         * 
         * 
         */
        export function dirname(path: string): string;
    
        /**
         * 
         * @brief 转换给定路径为全路径
         * 
         * @param path 给定转换的路径
         * @return 返回转换的全路径
         * 
         * 
         * 
         */
        export function fullpath(path: string): string;
    
        /**
         * 
         * @brief 识别给定的路径是否是绝对路径
         * 
         * @param path 给定需要识别的路径
         * @return 是绝对路径则返回 true
         * 
         * 
         * 
         */
        export function isAbsolute(path: string): boolean;
    
        /**
         * 
         * @brief 合并一系列路径成为一个单一路径
         * 
         * @param ps 一个或多个相关的路径
         * @return 返回得到的新路径
         * 
         * 
         * 
         */
        export function join(...ps: any[]): string;
    
        /**
         * 
         * @brief 合并一系列路径成为一个绝对路径
         * 
         * @param ps 一个或多个相关的路径
         * @return 返回得到的新路径
         * 
         * 
         * 
         */
        export function resolve(...ps: any[]): string;
    
        /**
         * 
         * @brief 求 _from 到 to 的相对路径
         * 
         * @param _from 源路径
         * @param to 目标路径
         * @return 返回得到的相对路径
         * 
         * 
         * 
         */
        export function relative(_from: string, to: string): string;
    
        /**
         * 
         * @brief 转换成 namespace-prefixed 路径。只在 windows 有效，其他系统直接返回。
         * see: https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces
         * @param path 给定的路径。
         * @return 返回得到的新路径
         * 
         * 
         * 
         */
        export function toNamespacedPath(path?: any/** = v8::Undefined(isolate)*/): any;
    
    } /** end of `module path_win32` */
    export = path_win32
}

/** endof `module Or Internal Object` */


