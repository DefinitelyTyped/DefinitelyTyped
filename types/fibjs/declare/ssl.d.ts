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
    * @brief ssl/tls 模块，模块别名：tls
    * @detail 
    */
declare module "ssl" {
    

    module ssl {
        
        /**
         * 
         * @brief 证书验证模式，不验证
         * 
         * 
         */
        export const VERIFY_NONE = 0;
        
        /**
         * 
         * @brief 证书验证模式，可选验证，允许验证不通过
         * 
         * 
         */
        export const VERIFY_OPTIONAL = 1;
        
        /**
         * 
         * @brief 证书验证模式，要求验证，验证不通过则中断
         * 
         * 
         */
        export const VERIFY_REQUIRED = 2;
        
        /**
         * 
         * @brief 证书验证结果，证书超时
         * 
         * 
         */
        export const BADCERT_EXPIRED = 1;
        
        /**
         * 
         * @brief 证书验证结果，证书被撤销
         * 
         * 
         */
        export const BADCERT_REVOKED = 2;
        
        /**
         * 
         * @brief 证书验证结果，证书名错误
         * 
         * 
         */
        export const BADCERT_CN_MISMATCH = 4;
        
        /**
         * 
         * @brief 证书验证结果，证书不可信
         * 
         * 
         */
        export const BADCERT_NOT_TRUSTED = 8;
        
        /**
         * 
         * @brief ssl 协议版本 ssl 3.0
         * 
         * 
         */
        export const ssl3 = 0;
        
        /**
         * 
         * @brief ssl 协议版本 tls 1.0
         * 
         * 
         */
        export const tls1 = 1;
        
        /**
         * 
         * @brief ssl 协议版本 tls 1.1
         * 
         * 
         */
        export const tls1_1 = 2;
        
        /**
         * 
         * @brief ssl 协议版本 tls 1.2
         * 
         * 
         */
        export const tls1_2 = 3;
        
        
        /**
         * 
         * @brief 全局证书，用于 ssl 客户端模式验证服务器证书
         * 
         * 
         */
        export const ca: Class_X509Cert;
        
        /**
         * 
         * @brief 设定证书验证模式，缺省为 VERIFY_REQUIRED
         * 
         * 
         */
        export const verification: number;
        
        /**
         * 
         * @brief 设定最低版本支持，缺省 ssl3
         * 
         * 
         */
        export const min_version: number;
        
        /**
         * 
         * @brief 设定最高版本支持，缺省 tls1_1
         * 
         * 
         */
        export const max_version: number;
        
        
        /**
         * 
         * @brief 创建一个 SslSocket 对象，参见 SslSocket
         * 
         * 
         */
        export class Socket extends Class_SslSocket {}
        
        
        /**
         * 
         * @brief 创建一个 SslHandler 对象，参见 SslHandler
         * 
         * 
         */
        export class Handler extends Class_SslHandler {}
        
        
        /**
         * 
         * @brief 创建一个 SslServer 对象，参见 SslServer
         * 
         * 
         */
        export class Server extends Class_SslServer {}
        
        
        
        
        /**
         * 
         * @brief 创建一个 SslSocket 对象并建立连接
         * @param url 指定连接的协议，可以是：ssl://host:port
         * @param timeout 指定超时时间，单位是毫秒，默认为0
         * @return 返回连接成功的 SslSocket 对象
         * 
         * 
         * @async
         */
        export function connect(url: string, timeout?: number/** = 0*/): Class_Stream;
    
        /**
         * 
         * @brief 设定缺省客户端证书
         * @param crt X509Cert 证书，用于客户端验证服务器
         * @param key PKey 私钥，用于与客户端会话
         * 
         * 
         * 
         */
        export function setClientCert(crt: Class_X509Cert, key: Class_PKey): void;
    
        /**
         * 
         * @brief 从文件中加载缺省客户端证书
         * @param crtFile X509Cert 证书文件，用于客户端验证服务器
         * @param keyFile PKey 私钥文件，用于与客户端会话
         * @param password 解密密码
         * 
         * 
         * 
         */
        export function loadClientCertFile(crtFile: string, keyFile: string, password?: string/** = ""*/): void;
    
        /**
         * 
         * @brief 加载自带的缺省根证书，等同于 ssl.ca.loadRootCerts
         * 此证书内容源自：http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt
         * 
         * 
         */
        export function loadRootCerts(): void;
    
    } /** end of `module ssl` */
    export = ssl
}

/** endof `module Or Internal Object` */


