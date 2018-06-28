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
	* @brief zip 格式文件压缩解压模块
	* @detail 使用方法：,```JavaScript,var zip = require('zip');,```
	*/
declare module "zip" {
	

	module zip {
		
		/**
		 * 
		 * @brief 压缩类型常量, 不压缩, 仅存储
		 * 
		 * 
		 */
		export const ZIP_STORED = 0;
		
		/**
		 * 
		 * @brief 压缩类型常量, 需要依赖zlib库进行压缩
		 * 
		 * 
		 */
		export const ZIP_DEFLATED = 1;
		
		
		
		
		
		/**
		 * 
		 * @brief  判断文件是否是zip格式
		 * @param filename 文件名
		 * @return 返回true代表文件是zip文件
		 * 
		 * 
		 * @async
		 */
		export function isZipFile(filename: string): boolean;
	
		/**
		 * 
		 * @brief 打开一个zip文件
		 * @param path 文件路径
		 * @param mod 打开文件模式, "r"代表读取, "w"代表创建, "a"代表在zip文件后追加
		 * @param compress_type 压缩类型, ZIP_STORED 代表不压缩, 仅存储。 默认使用ZIP_DEFLATED 代表使用zlib库进行压缩。
		 * @return 返回zip文件对象
		 * 
		 * 
		 * @async
		 */
		export function open(path: string, mod?: string/** = "r"*/, compress_type?: number/** = undefined*/): Class_ZipFile;
	
		/**
		 * 
		 * @brief 打开一个zip文件
		 * @param data zip文件数据
		 * @param mod 打开文件模式, "r"代表读取, "w"代表创建, "a"代表在zip文件后追加
		 * @param compress_type 压缩类型, ZIP_STORED 代表不压缩, 仅存储。 默认使用ZIP_DEFLATED 代表使用zlib库进行压缩。
		 * @return 返回zip文件对象
		 * 
		 * 
		 * @async
		 */
		export function open(data: Class_Buffer, mod?: string/** = "r"*/, compress_type?: number/** = undefined*/): Class_ZipFile;
	
		/**
		 * 
		 * @brief 打开一个zip文件
		 * @param strm zip文件流
		 * @param mod 打开文件模式, "r"代表读取, "w"代表创建, "a"代表在zip文件后追加
		 * @param compress_type 压缩类型, ZIP_STORED 代表不压缩, 仅存储。 默认使用ZIP_DEFLATED 代表使用zlib库进行压缩。
		 * @return 返回zip文件对象
		 * 
		 * 
		 * @async
		 */
		export function open(strm: Class_SeekableStream, mod?: string/** = "r"*/, compress_type?: number/** = undefined*/): Class_ZipFile;
	
	} /** end of `module zip` */
	export = zip
}

/** endof `module Or Internal Object` */


