/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *	 build info: 								   						   *
 *   	- fibjs	: 0.25.0                                                   *
 *   	- date	: Jun 12 2018 07:22:40                                     *
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
	* @brief 信息摘要计算模块，可用于计算信息摘要和摘要签名
	* @detail 
	*/
declare module "hash" {
	

	module hash {
		
		/**
		 * 
		 * @brief MD2 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const MD2 = 1;
		
		/**
		 * 
		 * @brief MD4 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const MD4 = 2;
		
		/**
		 * 
		 * @brief MD5 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const MD5 = 3;
		
		/**
		 * 
		 * @brief SHA1 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const SHA1 = 4;
		
		/**
		 * 
		 * @brief SHA224 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const SHA224 = 5;
		
		/**
		 * 
		 * @brief SHA256 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const SHA256 = 6;
		
		/**
		 * 
		 * @brief SHA384 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const SHA384 = 7;
		
		/**
		 * 
		 * @brief SHA512 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const SHA512 = 8;
		
		/**
		 * 
		 * @brief RIPEMD160 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const RIPEMD160 = 9;
		
		
		
		
		
		/**
		 * 
		 * @brief 根据指定的算法标识创建一个信息摘要运算对象
		 * @param algo 指定摘要运算算法
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function digest(algo: number, data: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 根据指定的算法标识创建一个信息摘要运算对象
		 * @param algo 指定摘要运算算法
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function digest(algo: number): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 MD2 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function md2(data: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 MD4 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function md4(data: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 MD5 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function md5(data: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 SHA1 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function sha1(data: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 SHA224 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function sha224(data: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 SHA256 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function sha256(data: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 SHA384 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function sha384(data: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 SHA512 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function sha512(data: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 RIPEMD160 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function ripemd160(data: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 根据指定的算法标识创建一个信息摘要签名运算对象
		 * @param algo 指定摘要运算算法
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac(algo: number, key: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 MD2 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_md2(key: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 MD4 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_md4(key: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 MD5 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_md5(key: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 SHA1 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_sha1(key: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 SHA224 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_sha224(key: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 SHA256 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_sha256(key: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 SHA384 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_sha384(key: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 SHA512 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_sha512(key: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 创建一个 RIPEMD160 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_ripemd160(key: Class_Buffer): Class_Digest;
	
	} /** end of `module hash` */
	export = hash
}

/** endof `module Or Internal Object` */


