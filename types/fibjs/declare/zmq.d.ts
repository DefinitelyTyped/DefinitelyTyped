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
	* @brief zeroMQ 消息队列模块
	* @detail 基础模块。提供 zeroMQ 消息队列支撑。,```JavaScript,var zmq = require('zmq');,```
	*/
declare module "zmq" {
	

	module zmq {
		
		/**
		 * 
		 * 
		 * 
		 * 
		 */
		export const PAIR = 0;
		
		/**
		 * 
		 * @brief 发布类型，所发送的消息将会分发给所有订阅者。
		 * 
		 * 
		 */
		export const PUB = 1;
		
		/**
		 * 
		 * @brief 订阅类型，用于接收 PUB 分发的消息。
		 * 
		 * 
		 */
		export const SUB = 2;
		
		/**
		 * 
		 * @brief 请求类型，此类型的接口只允许交替进行 send 和 recv 消息，每一个接受的消息都是最后一次发送请求的响应。
		 * 
		 * 
		 */
		export const REQ = 3;
		
		/**
		 * 
		 * @brief 响应类型，此类型的接口只允许交替进行 recv 和 send 消息，每一个发送的消息都会作为最后一次接受的请求的回应。
		 * 
		 * 
		 */
		export const REP = 4;
		
		/**
		 * 
		 * 
		 * 
		 * 
		 */
		export const DEALER = 5;
		
		/**
		 * 
		 * 
		 * 
		 * 
		 */
		export const ROUTER = 6;
		
		/**
		 * 
		 * @brief 获取消息类型，上游推送的消息将被公平的分发到此类接口。
		 * 
		 * 
		 */
		export const PULL = 7;
		
		/**
		 * 
		 * @brief 推送类型，推送的消息将均衡发送到下游接口。
		 * 
		 * 
		 */
		export const PUSH = 8;
		
		/**
		 * 
		 * 
		 * 
		 * 
		 */
		export const XPUB = 9;
		
		/**
		 * 
		 * 
		 * 
		 * 
		 */
		export const XSUB = 10;
		
		
		
		/**
		 * 
		 * @brief ZmqSocket 对象，参见 ZmqSocket
		 * 
		 * 
		 */
		export class Socket extends Class_ZmqSocket {}
		
		
		
		
	} /** end of `module zmq` */
	export = zmq
}

/** endof `module Or Internal Object` */


