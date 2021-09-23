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
    * @brief Windows 注册表访问模块
    * @detail 引用方式：,```JavaScript,var registry = require('registry');,var value = registry.get(registry.CLASSES_ROOT, "\node1\node2\value");,```
    */
declare module "registry" {
    

    module registry {
        
        /**
         * 
         * @brief 注册表根，存储Windows可识别的文件类型的详细列表，以及相关联的程序
         * 
         * 
         */
        export const CLASSES_ROOT = 0;
        
        /**
         * 
         * @brief 注册表根，存储当前用户设置的信息
         * 
         * 
         */
        export const CURRENT_USER = 1;
        
        /**
         * 
         * @brief 注册表根，包括安装在计算机上的硬件和软件的信息
         * 
         * 
         */
        export const LOCAL_MACHINE = 2;
        
        /**
         * 
         * @brief 注册表根，包含使用计算机的用户的信息
         * 
         * 
         */
        export const USERS = 3;
        
        /**
         * 
         * @brief 注册表根，这个分支包含计算机当前的硬件配置信息
         * 
         * 
         */
        export const CURRENT_CONFIG = 5;
        
        /**
         * 
         * @brief 注册表数据类型，字符串
         * 
         * 
         */
        export const SZ = 1;
        
        /**
         * 
         * @brief 注册表数据类型，扩展字符串
         * 
         * 
         */
        export const EXPAND_SZ = 2;
        
        /**
         * 
         * @brief 注册表数据类型，32 位数值
         * 
         * 
         */
        export const DWORD = 4;
        
        /**
         * 
         * @brief 注册表数据类型，64 位数值
         * 
         * 
         */
        export const QWORD = 11;
        
        
        
        
        
        /**
         * 
         * @brief 返回指定键值下的所有子健
         * @param root 指定注册表根
         * @param key 指定键值
         * @return 返回该键值下所有子健
         * 
         * 
         * 
         */
        export function listSubKey(root: number, key: string): any[];
    
        /**
         * 
         * @brief 返回指定键值下的所有数据的健
         * @param root 指定注册表根
         * @param key 指定键值
         * @return 返回该键值下所有数据的健
         * 
         * 
         * 
         */
        export function listValue(root: number, key: string): any[];
    
        /**
         * 
         * @brief 查询指定键值的数值
         * @param root 指定注册表根
         * @param key 指定键值
         * @return 返回指定键值的数值
         * 
         * 
         * 
         */
        export function get(root: number, key: string): any;
    
        /**
         * 
         * @brief 设置指定键值为数字
         * @param root 指定注册表根
         * @param key 指定键值
         * @param value 指定数字
         * @param type 指定类型，允许的类型为 DWORD 和 QWORD，缺省为 DWORD
         * 
         * 
         * 
         */
        export function set(root: number, key: string, value: number, type?: number/** = undefined*/): void;
    
        /**
         * 
         * @brief 设置指定键值为字符串
         * @param root 指定注册表根
         * @param key 指定键值
         * @param value 指定字符串
         * @param type 指定类型，允许的类型为 SZ 和 EXPAND_SZ，缺省为 SZ
         * 
         * 
         * 
         */
        export function set(root: number, key: string, value: string, type?: number/** = undefined*/): void;
    
        /**
         * 
         * @brief 设置指定键值为多字符串
         * @param root 指定注册表根
         * @param key 指定键值
         * @param value 指定多字符串数组
         * 
         * 
         * 
         */
        export function set(root: number, key: string, value: any[]): void;
    
        /**
         * 
         * @brief 设置指定键值为二进制
         * @param root 指定注册表根
         * @param key 指定键值
         * @param value 指定二进制数据
         * 
         * 
         * 
         */
        export function set(root: number, key: string, value: Class_Buffer): void;
    
        /**
         * 
         * @brief 删除指定键值的数值
         * @param root 指定注册表根
         * @param key 指定键值
         * 
         * 
         * 
         */
        export function del(root: number, key: string): void;
    
    } /** end of `module registry` */
    export = registry
}

/** endof `module Or Internal Object` */


