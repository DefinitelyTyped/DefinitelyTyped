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
	* @brief 数据库访问模块
	* @detail 基础模块。可用于创建和操作数据库资源，引用方式：,```JavaScript,var db = require('db');,```
	*/
declare module "db" {
	

	module db {
		
		
		
		
		
		/**
		 * 
		 * @brief 打开一个数据库，此方法为通用入口，根据提供的 connString 不同调用不同的引擎
		 * @param connString 数据库描述，如：mysql://user:pass\@host/db
		 * @return 返回数据库连接对象
		 * 
		 * 
		 * @async
		 */
		export function open(connString: string): Class__object;
	
		/**
		 * 
		 * @brief 打开一个 mysql 数据库
		 * @param connString 数据库描述，如：mysql://user:pass\@host/db
		 * @return 返回数据库连接对象
		 * 
		 * 
		 * @async
		 */
		export function openMySQL(connString: string): Class_MySQL;
	
		/**
		 * 
		 * @brief 打开一个 mysql 数据库
		 * @param connString 数据库描述，如：mssql://user:pass\@host/db
		 * @return 返回数据库连接对象
		 * 
		 * 
		 * @async
		 */
		export function openMSSQL(connString: string): Class_MSSQL;
	
		/**
		 * 
		 * @brief 打开一个 sqlite 数据库
		 * @param connString 数据库描述，如：sqlite:test.db 或者 test.db
		 * @return 返回数据库连接对象
		 * 
		 * 
		 * @async
		 */
		export function openSQLite(connString: string): Class_SQLite;
	
		/**
		 * 
		 * @brief 打开一个 mongodb 数据库
		 * @param connString 数据库描述
		 * @return 返回数据库连接对象
		 * 
		 * 
		 * @async
		 */
		export function openMongoDB(connString: string): Class_MongoDB;
	
		/**
		 * 
		 * @brief 打开一个 leveldb 数据库
		 * @param connString 数据库描述，如：level:test.db 或者 test.db
		 * @return 返回数据库对象
		 * 
		 * 
		 * @async
		 */
		export function openLevelDB(connString: string): Class_LevelDB;
	
		/**
		 * 
		 * @brief 打开一个 Redis 数据库
		 * @param connString 数据库描述，如：redis://server:port 或者 "server"
		 * @return 返回数据库连接对象
		 * 
		 * 
		 * @async
		 */
		export function openRedis(connString: string): Class_Redis;
	
		/**
		 * 
		 * @brief 格式化一个 sql 命令，并返回格式化结果
		 * 
		 * @param sql 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
		 * @param args 可选参数列表
		 * @return 返回格式化之后的 sql 命令
		 * 
		 * 
		 * 
		 */
		export function format(sql: string, ...args: any[]): string;
	
		/**
		 * 
		 * @brief 格式化一个 mysql 命令，并返回格式化结果
		 * 
		 * @param sql 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
		 * @param args 可选参数列表
		 * @return 返回格式化之后的 sql 命令
		 * 
		 * 
		 * 
		 */
		export function formatMySQL(sql: string, ...args: any[]): string;
	
		/**
		 * 
		 * @brief 格式化一个 mssql 命令，并返回格式化结果
		 * 
		 * @param sql 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
		 * @param args 可选参数列表
		 * @return 返回格式化之后的 sql 命令
		 * 
		 * 
		 * 
		 */
		export function formatMSSQL(sql: string, ...args: any[]): string;
	
		/**
		 * 
		 * @brief 将字符串编码为 SQL 安全编码字符串
		 * @param str 要编码的字符串
		 * @param mysql 指定 mysql 编码，缺省为 false
		 * @return 返回编码后的字符串
		 * 
		 * 
		 * 
		 */
		export function escape(str: string, mysql?: boolean/** = false*/): string;
	
	} /** end of `module db` */
	export = db
}

/** endof `module Or Internal Object` */


