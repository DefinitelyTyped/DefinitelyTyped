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
	* @brief 编码与解码模块，用于处理不同的数据编码格式与二进制之间的转换
	* @detail 引用方式：,```JavaScript,var encoding = require('encoding');,```
	*/
declare module "encoding" {
	
	import base32NS = require('base32')
	import base64NS = require('base64')
	import base64vlqNS = require('base64vlq')
	import hexNS = require('hex')
	import iconvNS = require('iconv')
	import jsonNS = require('json')
	import bsonNS = require('bson')

	module encoding {
		
		
		
		/**
		 * 
		 * @brief base32 编码与解码模块
		 * 
		 * 
		 */
		
		export const base32: typeof base32NS
		
		/**
		 * 
		 * @brief base64 编码与解码模块
		 * 
		 * 
		 */
		
		export const base64: typeof base64NS
		
		/**
		 * 
		 * @brief base64vlq 编码与解码模块
		 * 
		 * 
		 */
		
		export const base64vlq: typeof base64vlqNS
		
		/**
		 * 
		 * @brief hex 编码与解码模块
		 * 
		 * 
		 */
		
		export const hex: typeof hexNS
		
		/**
		 * 
		 * @brief iconv 编码与解码模块
		 * 
		 * 
		 */
		
		export const iconv: typeof iconvNS
		
		/**
		 * 
		 * @brief json 编码与解码模块
		 * 
		 * 
		 */
		
		export const json: typeof jsonNS
		
		/**
		 * 
		 * @brief bson 编码与解码模块
		 * 
		 * 
		 */
		
		export const bson: typeof bsonNS
		
		
		
		/**
		 * 
		 * @brief 将字符串编码为 javascript 转义字符串，用以在 javascript 代码中包含文本
		 * @param str 要编码的字符串
		 * @param json 是否生成json兼容字符串
		 * @return 返回编码的字符串
		 * 
		 * 
		 * 
		 */
		export function jsstr(str: string, json?: boolean/** = false*/): string;
	
		/**
		 * 
		 * @brief url 字符串安全编码
		 * @param url 要编码的 url
		 * @return 返回编码的字符串
		 * 
		 * 
		 * 
		 */
		export function encodeURI(url: string): string;
	
		/**
		 * 
		 * @brief url 部件字符串安全编码
		 * @param url 要编码的 url
		 * @return 返回编码的字符串
		 * 
		 * 
		 * 
		 */
		export function encodeURIComponent(url: string): string;
	
		/**
		 * 
		 * @brief url 安全字符串解码
		 * @param url 要解码的 url
		 * @return 返回解码的字符串
		 * 
		 * 
		 * 
		 */
		export function decodeURI(url: string): string;
	
	} /** end of `module encoding` */
	export = encoding
}

/** endof `module Or Internal Object` */


