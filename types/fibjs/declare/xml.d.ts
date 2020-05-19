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
    * @brief xml 处理模块
    * @detail 
    */
declare module "xml" {
    

    module xml {
        
        /**
         * 
         * @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlElement 对象
         * 
         * 
         * 
         */
        export const ELEMENT_NODE = 1;
        
        /**
         * 
         * @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlAttr 对象
         * 
         * 
         * 
         */
        export const ATTRIBUTE_NODE = 2;
        
        /**
         * 
         * @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlText 对象
         * 
         * 
         * 
         */
        export const TEXT_NODE = 3;
        
        /**
         * 
         * @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlCDATASection 对象
         * 
         * 
         * 
         */
        export const CDATA_SECTION_NODE = 4;
        
        /**
         * 
         * @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlProcessingInstruction 对象
         * 
         * 
         * 
         */
        export const PROCESSING_INSTRUCTION_NODE = 7;
        
        /**
         * 
         * @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlComment 对象
         * 
         * 
         * 
         */
        export const COMMENT_NODE = 8;
        
        /**
         * 
         * @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlDocument 对象
         * 
         * 
         * 
         */
        export const DOCUMENT_NODE = 9;
        
        /**
         * 
         * @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlDocumentType 对象
         * 
         * 
         * 
         */
        export const DOCUMENT_TYPE_NODE = 10;
        
        
        
        /**
         * 
         * @brief xml 文档对象，参见 XmlDocument 对象
         * 
         * 
         */
        export class Document extends Class_XmlDocument {}
        
        
        
        
        /**
         * 
         * @brief 解析 xml/html 文本，并创建 XmlDocument 对象，不支持多语种
         * @param source 指定需要解析的 xml/html 文本
         * @param type 指定文本类型，缺省为 text/xml，也可指定为 text/html
         * @return 返回创建的 XmlDocument 对象
         * 
         * 
         * 
         */
        export function parse(source: string, type?: string/** = "text/xml"*/): Class_XmlDocument;
    
        /**
         * 
         * @brief 解析 xml/html，并创建 XmlDocument 对象，解析时会根据指定的语种转换
         * @param source 指定需要解析的 xml/html 二进制数据
         * @param type 指定文本类型，缺省为 text/xml，也可指定为 text/html
         * @return 返回创建的 XmlDocument 对象
         * 
         * 
         * 
         */
        export function parse(source: Class_Buffer, type?: string/** = "text/xml"*/): Class_XmlDocument;
    
        /**
         * 
         * @brief 序列化 XmlNode 为字符串
         * @param node 指定需要序列化的 XmlNode
         * @return 返回序列化的字符串
         * 
         * 
         * 
         */
        export function serialize(node: Class_XmlNode): string;
    
    } /** end of `module xml` */
    export = xml
}

/** endof `module Or Internal Object` */


