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
	* @brief zlib 压缩解压模块
	* @detail 使用方法：,```JavaScript,var zlib = require('zlib');,```
	*/
declare module "zlib" {
	

	module zlib {
		
		/**
		 * 
		 * @brief deflate 压缩级别，设定不压缩
		 * 
		 * 
		 */
		export const NO_COMPRESSION = 0;
		
		/**
		 * 
		 * @brief deflate 压缩级别，设定最快压缩
		 * 
		 * 
		 */
		export const BEST_SPEED = 1;
		
		/**
		 * 
		 * @brief deflate 压缩级别，设定最高压缩
		 * 
		 * 
		 */
		export const BEST_COMPRESSION = 9;
		
		/**
		 * 
		 * @brief deflate 压缩级别，设定缺省设置
		 * 
		 * 
		 */
		export const DEFAULT_COMPRESSION = -1;
		
		
		
		
		
		/**
		 * 
		 * @brief 创建一个 deflate 流对象
		 * @param to 用于存储处理结果的流
		 * @return 返回封装过的流对象
		 * 
		 * 
		 */
		export function createDeflate(to: Class_Stream): Class_Stream;
	
		/**
		 * 
		 * @brief 创建一个 deflateRaw 流对象
		 * @param to 用于存储处理结果的流
		 * @return 返回封装过的流对象
		 * 
		 * 
		 */
		export function createDeflateRaw(to: Class_Stream): Class_Stream;
	
		/**
		 * 
		 * @brief 创建一个 gunzip 流对象
		 * @param to 用于存储处理结果的流
		 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
		 * @return 返回封装过的流对象
		 * 
		 * 
		 */
		export function createGunzip(to: Class_Stream, maxSize?: number/** = -1*/): Class_Stream;
	
		/**
		 * 
		 * @brief 创建一个 gzip 流对象
		 * @param to 用于存储处理结果的流
		 * @return 返回封装过的流对象
		 * 
		 * 
		 */
		export function createGzip(to: Class_Stream): Class_Stream;
	
		/**
		 * 
		 * @brief 创建一个 inflate 流对象
		 * @param to 用于存储处理结果的流
		 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
		 * @return 返回封装过的流对象
		 * 
		 * 
		 */
		export function createInflate(to: Class_Stream, maxSize?: number/** = -1*/): Class_Stream;
	
		/**
		 * 
		 * @brief 创建一个 inflateRaw 流对象
		 * @param to 用于存储处理结果的流
		 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
		 * @return 返回封装过的流对象
		 * 
		 * 
		 */
		export function createInflateRaw(to: Class_Stream, maxSize?: number/** = -1*/): Class_Stream;
	
		/**
		 * 
		 * @brief 使用 deflate 算法压缩数据(zlib格式)
		 * @param data 给定要压缩的数据
		 * @param level 指定压缩级别，缺省为 DEFAULT_COMPRESSION
		 * @return 返回压缩后的二进制数据
		 * 
		 * 
		 * @async
		 */
		export function deflate(data: Class_Buffer, level?: number/** = undefined*/): Class_Buffer;
	
		/**
		 * 
		 * @brief 使用 deflate 算法压缩数据到流对象中(zlib格式)
		 * @param data 给定要压缩的数据
		 * @param stm 指定存储压缩数据的流
		 * @param level 指定压缩级别，缺省为 DEFAULT_COMPRESSION
		 * 
		 * 
		 * @async
		 */
		export function deflateTo(data: Class_Buffer, stm: Class_Stream, level?: number/** = undefined*/): void;
	
		/**
		 * 
		 * @brief 使用 deflate 算法压缩源流中的数据到流对象中(zlib格式)
		 * @param src 给定要压缩的数据所在的流
		 * @param stm 指定存储压缩数据的流
		 * @param level 指定压缩级别，缺省为 DEFAULT_COMPRESSION
		 * 
		 * 
		 * @async
		 */
		export function deflateTo(src: Class_Stream, stm: Class_Stream, level?: number/** = undefined*/): void;
	
		/**
		 * 
		 * @brief 解压缩 deflate 算法压缩的数据(zlib格式)
		 * @param data 给定压缩后的数据
		 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
		 * @return 返回解压缩后的二进制数据
		 * 
		 * 
		 * @async
		 */
		export function inflate(data: Class_Buffer, maxSize?: number/** = -1*/): Class_Buffer;
	
		/**
		 * 
		 * @brief 解压缩 deflate 算法压缩的数据到流对象中(zlib格式)
		 * @param data 给定要解压缩的数据
		 * @param stm 指定存储解压缩数据的流
		 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
		 * 
		 * 
		 * @async
		 */
		export function inflateTo(data: Class_Buffer, stm: Class_Stream, maxSize?: number/** = -1*/): void;
	
		/**
		 * 
		 * @brief 解压缩源流中 deflate 算法压缩的数据到流对象中(zlib格式)
		 * @param src 给定要解压缩的数据所在的流
		 * @param stm 指定存储解压缩数据的流
		 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
		 * 
		 * 
		 * @async
		 */
		export function inflateTo(src: Class_Stream, stm: Class_Stream, maxSize?: number/** = -1*/): void;
	
		/**
		 * 
		 * @brief 使用 gzip 算法压缩数据
		 * @param data 给定要压缩的数据
		 * @return 返回压缩后的二进制数据
		 * 
		 * 
		 * @async
		 */
		export function gzip(data: Class_Buffer): Class_Buffer;
	
		/**
		 * 
		 * @brief 使用 gzip 算法压缩数据到流对象中
		 * @param data 给定要压缩的数据
		 * @param stm 指定存储压缩数据的流
		 * 
		 * 
		 * @async
		 */
		export function gzipTo(data: Class_Buffer, stm: Class_Stream): void;
	
		/**
		 * 
		 * @brief 使用 gzip 算法压缩源流中的数据到流对象中
		 * @param src 给定要压缩的数据所在的流
		 * @param stm 指定存储压缩数据的流
		 * 
		 * 
		 * @async
		 */
		export function gzipTo(src: Class_Stream, stm: Class_Stream): void;
	
		/**
		 * 
		 * @brief 解压缩 gzip 算法压缩的数据
		 * @param data 给定压缩后的数据
		 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
		 * @return 返回解压缩后的二进制数据
		 * 
		 * 
		 * @async
		 */
		export function gunzip(data: Class_Buffer, maxSize?: number/** = -1*/): Class_Buffer;
	
		/**
		 * 
		 * @brief 解压缩 gzip 算法压缩的数据到流对象中
		 * @param data 给定要解压缩的数据
		 * @param stm 指定存储解压缩数据的流
		 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
		 * 
		 * 
		 * @async
		 */
		export function gunzipTo(data: Class_Buffer, stm: Class_Stream, maxSize?: number/** = -1*/): void;
	
		/**
		 * 
		 * @brief 解压缩源流中 gzip 算法压缩的数据到流对象中
		 * @param src 给定要解压缩的数据所在的流
		 * @param stm 指定存储解压缩数据的流
		 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
		 * 
		 * 
		 * @async
		 */
		export function gunzipTo(src: Class_Stream, stm: Class_Stream, maxSize?: number/** = -1*/): void;
	
		/**
		 * 
		 * @brief 使用 deflate 算法压缩数据(deflateRaw)
		 * @param data 给定要压缩的数据
		 * @param level 指定压缩级别，缺省为 DEFAULT_COMPRESSION
		 * @return 返回压缩后的二进制数据
		 * 
		 * 
		 * @async
		 */
		export function deflateRaw(data: Class_Buffer, level?: number/** = undefined*/): Class_Buffer;
	
		/**
		 * 
		 * @brief 使用 deflate 算法压缩数据到流对象中(deflateRaw)
		 * @param data 给定要压缩的数据
		 * @param stm 指定存储压缩数据的流
		 * @param level 指定压缩级别，缺省为 DEFAULT_COMPRESSION
		 * 
		 * 
		 * @async
		 */
		export function deflateRawTo(data: Class_Buffer, stm: Class_Stream, level?: number/** = undefined*/): void;
	
		/**
		 * 
		 * @brief 使用 deflate 算法压缩源流中的数据到流对象中(deflateRaw)
		 * @param src 给定要压缩的数据所在的流
		 * @param stm 指定存储压缩数据的流
		 * @param level 指定压缩级别，缺省为 DEFAULT_COMPRESSION
		 * 
		 * 
		 * @async
		 */
		export function deflateRawTo(src: Class_Stream, stm: Class_Stream, level?: number/** = undefined*/): void;
	
		/**
		 * 
		 * @brief 解压缩 deflate 算法压缩的数据(inflateRaw)
		 * @param data 给定压缩后的数据
		 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
		 * @return 返回解压缩后的二进制数据
		 * 
		 * 
		 * @async
		 */
		export function inflateRaw(data: Class_Buffer, maxSize?: number/** = -1*/): Class_Buffer;
	
		/**
		 * 
		 * @brief 解压缩 deflate 算法压缩的数据到流对象中(inflateRaw)
		 * @param data 给定要解压缩的数据
		 * @param stm 指定存储解压缩数据的流
		 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
		 * 
		 * 
		 * @async
		 */
		export function inflateRawTo(data: Class_Buffer, stm: Class_Stream, maxSize?: number/** = -1*/): void;
	
		/**
		 * 
		 * @brief 解压缩源流中 deflate 算法压缩的数据到流对象中(inflateRaw)
		 * @param src 给定要解压缩的数据所在的流
		 * @param stm 指定存储解压缩数据的流
		 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
		 * 
		 * 
		 * @async
		 */
		export function inflateRawTo(src: Class_Stream, stm: Class_Stream, maxSize?: number/** = -1*/): void;
	
	} /** end of `module zlib` */
	export = zlib
}

/** endof `module Or Internal Object` */


