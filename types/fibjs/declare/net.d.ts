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
    * @brief 网络访问模块
    * @detail 基础模块。可用于创建和操作网络资源，引用方式：,```JavaScript,var net = require('net');,```
    */
declare module "net" {
    

    module net {
        
        /**
         * 
         * @brief 地址集常量，指定 ipv4
         * 
         * 
         */
        export const AF_INET = 2;
        
        /**
         * 
         * @brief 地址集常量，指定 ipv6
         * 
         * 
         */
        export const AF_INET6 = 10;
        
        /**
         * 
         * @brief 协议族常量，指定 tcp
         * 
         * 
         */
        export const SOCK_STREAM = 1;
        
        /**
         * 
         * @brief 协议族常量，指定 udp
         * 
         * 
         */
        export const SOCK_DGRAM = 2;
        
        
        
        /**
         * 
         * @brief 创建一个 Socket 对象，参见 Socket
         * 
         * 
         */
        export class Socket extends Class_Socket {}
        
        
        /**
         * 
         * @brief 创建一个 Smtp 对象，参见 Smtp
         * 
         * 
         */
        export class Smtp extends Class_Smtp {}
        
        
        /**
         * 
         * @brief 创建一个 TcpServer 对象，参见 TcpServer
         * 
         * 
         */
        export class TcpServer extends Class_TcpServer {}
        
        
        /**
         * 
         * @brief 创建一个 UrlObject 对象，参见 UrlObject
         * 
         * 
         */
        export class Url extends Class_UrlObject {}
        
        
        
        
        /**
         * 
         * @brief 查询当前运行环境网络信息
         * @return 返回网卡信息
         * 
         * 
         * 
         */
        export function info(): object;
    
        /**
         * 
         * @brief 查询给定的主机名的地址
         * @param name 指定主机名
         * @param family 指定查询返回类型，缺省为 AF_INET
         * @return 返回查询的 ip 字符串
         * 
         * 
         * @async
         */
        export function resolve(name: string, family?: number/** = undefined*/): string;
    
        /**
         * 
         * @brief 快速查询的主机地址，等效与 resolve(name)
         * @param name 指定主机名
         * @return 返回查询的 ip 字符串
         * 
         * 
         * @async
         */
        export function ip(name: string): string;
    
        /**
         * 
         * @brief 快速查询的主机 ipv6 地址，等效与 resolve(name, net.AF_INET6)
         * @param name 指定主机名
         * @return 返回查询的 ipv6 字符串
         * 
         * 
         * @async
         */
        export function ipv6(name: string): string;
    
        /**
         * 
         * @brief 创建一个 Socket 或 SslSocket 对象并建立连接
         * @param url 指定连接的协议，可以是：tcp://host:port 或者 ssl://host:port
         * @param timeout 指定超时时间，单位是毫秒，默认为0
         * @return 返回连接成功的 Socket 或者 SslSocket 对象
         * 
         * 
         * @async
         */
        export function connect(url: string, timeout?: number/** = 0*/): Class_Stream;
    
        /**
         * 
         * @brief 创建一个 Smtp 对象并建立连接，参见 Smtp
         * @param url 指定连接的协议，可以是：tcp://host:port 或者 ssl://host:port
         * @param timeout 指定超时时间，单位是毫秒，默认为0
         * @return 返回连接成功的 Smtp 对象
         * 
         * 
         * @async
         */
        export function openSmtp(url: string, timeout?: number/** = 0*/): Class_Smtp;
    
        /**
         * 
         * @brief 查询当前系统异步网络引擎
         * @return 返回网络引擎名称
         * 
         * 
         * 
         */
        export function backend(): string;
    
        /**
         * 
         * @brief 检测输入是否是 IP 地址
         * @param ip 指定要检测的字符串
         * @return 非合法的 IP 地址，返回 0, 如果是 IPv4 则返回 4，如果是 IPv6 则返回 6
         * 
         * 
         * 
         */
        export function isIP(ip?: string/** = ""*/): number;
    
        /**
         * 
         * @brief 检测输入是否是 IPv4 地址
         * @param ip 指定要检测的字符串
         * @return 如果是 IPv4 则返回 true.否则返回 false
         * 
         * 
         * 
         */
        export function isIPv4(ip?: string/** = ""*/): boolean;
    
        /**
         * 
         * @brief 检测输入是否是 IPv6 地址
         * @param ip 指定要检测的字符串
         * @return 如果是 IPv6 则返回 true.否则返回 false
         * 
         * 
         * 
         */
        export function isIPv6(ip?: string/** = ""*/): boolean;
    
    } /** end of `module net` */
    export = net
}

/** endof `module Or Internal Object` */


